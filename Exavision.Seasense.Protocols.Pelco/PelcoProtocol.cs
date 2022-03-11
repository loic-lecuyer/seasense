namespace Exavision.Seasense.Protocols.Pelco {
    using Exavision.Seasense.Core.Types;
    using Exavision.Seasense.Protocols.Pelco.Commands;
    using Exavision.Seasense.Shared.Protocols;
    using Serilog;
    using System;
    using System.Collections.Generic;

    // une liste pas mal ici https://www.serialporttool.com/sptblog/?p=4830
    /// <summary>
    /// Defines the <see cref="PelcoProtocol" />.
    /// </summary>
    public abstract class PelcoProtocol : IProtocol {
        /// <summary>
        /// Defines the _commandRepository.
        /// </summary>
        private readonly Dictionary<Type, Func<PelcoCommand>> _commandRepository;

        /// <summary>
        /// Defines the _bufferedCommandRepository.
        /// </summary>
        private readonly Dictionary<Tuple<byte, byte>, Func<PelcoCommand>> _bufferedCommandRepository;

        /// <summary>
        /// Gets the ProtocolDescription.
        /// </summary>
        public abstract string ProtocolDescription { get; }

        /// <summary>
        /// Gets or sets the Id.
        /// </summary>
        public string Id { get; set; } = Guid.NewGuid().ToString();

        /// <summary>
        /// Initializes a new instance of the <see cref="PelcoProtocol"/> class.
        /// </summary>
        protected PelcoProtocol() {
            this._commandRepository = new Dictionary<Type, Func<PelcoCommand>>();
            this._bufferedCommandRepository = new Dictionary<Tuple<byte, byte>, Func<PelcoCommand>>();
        }

        /// <summary>
        /// The Register.
        /// </summary>
        /// <typeparam name="T">.</typeparam>
        /// <typeparam name="I">.</typeparam>
        public void Register<T, I>() where T : PelcoCommand, I, new() where I : IPelcoCommand {
            if (this._commandRepository.ContainsKey(typeof(I))) throw new InvalidOperationException("A command for " + typeof(I).Name + " are already registered");
            this._commandRepository.Add(typeof(I), () => new T());
        }

        /// <summary>
        /// The CreateRawMessage.
        /// </summary>
        /// <param name="pelcoChannel">The pelcoChannel<see cref="byte"/>.</param>
        /// <param name="commandByte1">The commandByte1<see cref="byte"/>.</param>
        /// <param name="commandByte2">The commandByte2<see cref="byte"/>.</param>
        /// <param name="dataByte1">The dataByte1<see cref="byte"/>.</param>
        /// <param name="dataByte2">The dataByte2<see cref="byte"/>.</param>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public byte[] CreateRawMessage(byte pelcoChannel, byte commandByte1, byte commandByte2, byte dataByte1, byte dataByte2) {
            byte[] result = new byte[7];
            result[0] = 0xFF;
            result[1] = pelcoChannel;
            result[2] = commandByte1;
            result[3] = commandByte2;
            result[4] = dataByte1;
            result[5] = dataByte2;
            result[6] = ComputeCheckSum(result);
            return result;
        }

        /// <summary>
        /// The OverrideRegister.
        /// </summary>
        /// <typeparam name="T">.</typeparam>
        /// <typeparam name="I">.</typeparam>
        public void OverrideRegister<T, I>() where T : PelcoCommand, I, new() where I : IPelcoCommand {
            if (this._commandRepository.ContainsKey(typeof(I))) {
                this._commandRepository.Remove(typeof(I));
            }
            this._commandRepository.Add(typeof(I), () => new T());
        }

        /// <summary>
        /// The Resolve.
        /// </summary>
        /// <typeparam name="I">.</typeparam>
        /// <returns>The <see cref="I"/>.</returns>
        public I Resolve<I>() where I : class, IPelcoCommand {
            if (!this._commandRepository.ContainsKey(typeof(I))) throw new InvalidOperationException("No command registered for interface " + typeof(I).Name);
            return this._commandRepository[typeof(I)].Invoke() as I;
        }

        /// <summary>
        /// The Serialize.
        /// </summary>
        /// <param name="command">The command<see cref="IPelcoCommand"/>.</param>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public byte[] Serialize(IPelcoCommand command) {
            byte[] data = new byte[7];
            data[0] = 0xFF;
            data[1] = command.ChannelByte;
            data[2] = command.CommandByte1;
            data[3] = command.CommandByte2;
            data[4] = command.DataByte1;
            data[5] = command.DataByte2;
            data[6] = ComputeCheckSum(data);
            return data;
        }

        /// <summary>
        /// The ComputeCheckSum.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        /// <returns>The <see cref="byte"/>.</returns>
        public byte ComputeCheckSum(byte[] data) {
            return (byte)(((int)data[1] + (int)data[2] + (int)data[3] + (int)data[4] + (int)data[5]) % 256);
        }

        /// <summary>
        /// The Deserialize.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        public IPelcoCommand Deserialize(byte[] data) {
            PelcoCommand command = null;
            try {
                byte checkSum = (byte)(((int)data[1] + (int)data[2] + (int)data[3] + (int)data[4] + (int)data[5]) % 256);
                if (checkSum != data[6]) throw new ArgumentException("Invalid CheckSum");

                Tuple<byte, byte> key = new Tuple<byte, byte>(data[2], data[3]);
                this.AddCommandToBufferIfNotExist(key);
                command = CreateCommand(key, data);

                if (command == null) throw new ArgumentException("No command for command bytes  " + data[2] + " " + data[3]);
            }
            catch (Exception ex) {
                Log.Error("Error during Pelco Deserialization " + ex.Message + " " + ex.StackTrace);
            }

            return command;
        }

        /// <summary>
        /// The CreateCommand.
        /// </summary>
        /// <param name="key">The key<see cref="Tuple{byte, byte}"/>.</param>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        /// <returns>The <see cref="PelcoCommand"/>.</returns>
        private PelcoCommand CreateCommand(Tuple<byte, byte> key, byte[] data) {
            PelcoCommand command;
            if (this._bufferedCommandRepository.ContainsKey(key)) {
                command = this.CreateCommandFromBuffer(key, data);
            }
            else {
                /// Cas spéciaux des ibits, les ibits renvoie dans le command byte[1] l'adresse du périphérique 
                /// On ne peut donc pas déduire lme type de la commandes des deuxc byte de commandes, 
                /// C'est complétement incohérent mais il faut le traiter
                command = this.CreateCommandFromRepository(data);

            }
            return command;
        }

        /// <summary>
        /// The CreateCommandFromRepository.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        /// <returns>The <see cref="PelcoCommand"/>.</returns>
        private PelcoCommand CreateCommandFromRepository(byte[] data) {
            PelcoCommand command = null;
            foreach (KeyValuePair<Type, Func<PelcoCommand>> val in this._commandRepository) {
                PelcoCommand cmd = val.Value.Invoke();
                if (cmd.CommandByte2.Equals(data[3])) {
                    command = cmd;
                    command.ChannelByte = data[1];
                    command.CommandByte1 = data[2];
                    command.DataByte1 = data[4];
                    command.DataByte2 = data[5];
                    break;
                }
            }
            return command;
        }

        /// <summary>
        /// The CreateCommandFromBuffer.
        /// </summary>
        /// <param name="key">The key<see cref="Tuple{byte, byte}"/>.</param>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        /// <returns>The <see cref="PelcoCommand"/>.</returns>
        private PelcoCommand CreateCommandFromBuffer(Tuple<byte, byte> key, byte[] data) {
            PelcoCommand command = this._bufferedCommandRepository[key].Invoke();

            if (command != null) {
                command.ChannelByte = data[1];
                command.DataByte1 = data[4];
                command.DataByte2 = data[5];
            }
            return command;
        }

        /// <summary>
        /// The AddCommandToBufferIfNotExist.
        /// </summary>
        /// <param name="key">The key<see cref="Tuple{byte, byte}"/>.</param>
        private void AddCommandToBufferIfNotExist(Tuple<byte, byte> key) {
            if (!this._bufferedCommandRepository.ContainsKey(key)) {
                foreach (KeyValuePair<Type, Func<PelcoCommand>> val in this._commandRepository) {
                    PelcoCommand cmd = val.Value.Invoke();
                    if (cmd.CommandByte1.Equals(key.Item1) && cmd.CommandByte2.Equals(key.Item2)) {
                        this._bufferedCommandRepository.Add(key, val.Value);
                    }
                }
            }
        }

        /// <summary>
        /// The ResolveSpeedCommand.
        /// </summary>
        /// <param name="panSpeed">The panSpeed<see cref="NormalizedSigned"/>.</param>
        /// <param name="tiltSpeed">The tiltSpeed<see cref="NormalizedSigned"/>.</param>
        /// <returns>The <see cref="IPelcoSpeedCommand"/>.</returns>
        public IPelcoSpeedCommand ResolveSpeedCommand(NormalizedSigned panSpeed, NormalizedSigned tiltSpeed) {
            IPelcoSpeedCommand command;
            if (tiltSpeed.Value > 0) {
                command = ResolveSpeedUpCommand(panSpeed);
            }
            else if (tiltSpeed.Value < 0) {
                command = ResolveSpeedDownCommand(panSpeed);
            }
            else {
                command = ResolveSpeedHorizontalCommand(panSpeed);
            }

            byte panSpeedPelco = (byte)Math.Abs(panSpeed.Value * 63D);
            panSpeedPelco = this.Clamp(panSpeedPelco, 0, 63);
            byte tiltSpeedPelco = (byte)Math.Abs(tiltSpeed.Value * 63D);
            tiltSpeedPelco = this.Clamp(tiltSpeedPelco, 0, 63);
            if (command != null) {
                command.SetPanSpeed(panSpeedPelco);
                command.SetTiltSpeed(tiltSpeedPelco);
            }
            return command;
        }

        /// <summary>
        /// The ResolveSpeedHorizontalCommand.
        /// </summary>
        /// <param name="panSpeed">The panSpeed<see cref="NormalizedSigned"/>.</param>
        /// <returns>The <see cref="IPelcoSpeedCommand"/>.</returns>
        private IPelcoSpeedCommand ResolveSpeedHorizontalCommand(NormalizedSigned panSpeed) {
            IPelcoSpeedCommand command;


            if (panSpeed.Value > 0) {
                command = this.Resolve<IPelcoRightCommand>();

            }
            else if (panSpeed.Value < 0) {
                command = this.Resolve<IPelcoLeftCommand>();

            }
            else {
                command = this.Resolve<IPelcoStopCommand>();
            }
            return command;
        }

        /// <summary>
        /// The ResolveSpeedDownCommand.
        /// </summary>
        /// <param name="panSpeed">The panSpeed<see cref="NormalizedSigned"/>.</param>
        /// <returns>The <see cref="IPelcoSpeedCommand"/>.</returns>
        private IPelcoSpeedCommand ResolveSpeedDownCommand(NormalizedSigned panSpeed) {
            IPelcoSpeedCommand command;
            if (panSpeed.Value < 0) {
                command = this.Resolve<IPelcoDownLeftCommand>();
            }
            else if (panSpeed.Value == 0) {
                command = this.Resolve<IPelcoDownCommand>();

            }
            else {
                command = this.Resolve<IPelcoDownRightCommand>();
            }
            return command;
        }

        /// <summary>
        /// The ResolveSpeedUpCommand.
        /// </summary>
        /// <param name="panSpeed">The panSpeed<see cref="NormalizedSigned"/>.</param>
        /// <returns>The <see cref="IPelcoSpeedCommand"/>.</returns>
        private IPelcoSpeedCommand ResolveSpeedUpCommand(NormalizedSigned panSpeed) {
            IPelcoSpeedCommand command;
            if (panSpeed.Value > 0) {
                command = this.Resolve<IPelcoUpRightCommand>();
            }
            else if (panSpeed.Value < 0) {
                command = this.Resolve<IPelcoUpLeftCommand>();
            }
            else {
                command = this.Resolve<IPelcoUpCommand>();
            }
            return command;
        }

        /// <summary>
        /// The Clamp.
        /// </summary>
        /// <param name="value">The value<see cref="byte"/>.</param>
        /// <param name="min">The min<see cref="byte"/>.</param>
        /// <param name="max">The max<see cref="byte"/>.</param>
        /// <returns>The <see cref="byte"/>.</returns>
        private byte Clamp(byte value, byte min, byte max) {
            if (value < min) return min;
            if (value > max) return max;
            return value;
        }
    }
}

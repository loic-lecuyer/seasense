namespace Exavision.Seasense.Protocols.Seamos {
    using Exavision.Seasense.Core.Extensions;
    using Exavision.Seasense.Core.Network;
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Standard.Turret;
    using Exavision.Seasense.Shared.Protocols;
    using Serilog;
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;

    /// <summary>
    /// Defines the <see cref="SeamosProtocol" />.
    /// </summary>
    public abstract class SeamosProtocol : IProtocol {
        /// <summary>
        /// Defines the commandRepository.
        /// </summary>
        private readonly Dictionary<Tuple<MaterialTarget, Type>, Func<SeamosCommand>> commandRepository;

        /// <summary>
        /// Defines the PROTOCOL_SEAMAOS_START.
        /// </summary>
        public const string PROTOCOL_SEAMAOS_START = "FE";

        /// <summary>
        /// Defines the PROTOCOL_SEAMAOS_SYSTEM_TARGET_COMPUTER.
        /// </summary>
        public const string PROTOCOL_SEAMAOS_SYSTEM_TARGET_COMPUTER = "FE";

        /// <summary>
        /// Defines the PROTOCOL_SEAMAOS_SYSTEM_TARGET_ELECTRONIC_CARD.
        /// </summary>
        public const string PROTOCOL_SEAMAOS_SYSTEM_TARGET_ELECTRONIC_CARD = "01";

        /// <summary>
        /// Defines the bufferedSeamosCommands.
        /// </summary>
        private readonly Dictionary<Tuple<byte, byte, MaterialTarget>, Func<SeamosCommand>> bufferedSeamosCommands;

        /// <summary>
        /// Defines the bufferePelcoCommands.
        /// </summary>
        private readonly Dictionary<Tuple<byte, byte, MaterialTarget>, Func<SeamosCommand>> bufferePelcoCommands;

        /// <summary>
        /// Gets the ProtocolDescription.
        /// </summary>
        public abstract string ProtocolDescription { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="SeamosProtocol"/> class.
        /// </summary>
        protected SeamosProtocol() {
            this.commandRepository = new Dictionary<Tuple<MaterialTarget, Type>, Func<SeamosCommand>>();
            this.bufferedSeamosCommands = new Dictionary<Tuple<byte, byte, MaterialTarget>, Func<SeamosCommand>>();
            this.bufferePelcoCommands = new Dictionary<Tuple<byte, byte, MaterialTarget>, Func<SeamosCommand>>();
        }
        public void SendToClient(IStringClient client, ISeamosCommand command) {
            byte[] commandBytes = this.Serialize(command);
            string commandString = commandBytes.ToHexString();
            if (!client.Send(commandString)) {
                string log = "Seamos Can't send command " + commandString + " to socket";
                Log.Warning(log);
            }

        }
        /// <summary>
        /// The RegisterType.
        /// </summary>
        /// <typeparam name="T">.</typeparam>
        /// <typeparam name="I">.</typeparam>
        /// <param name="materialTaret">The materialTaret<see cref="MaterialTarget"/>.</param>
        public void RegisterType<T, I>(MaterialTarget materialTaret) where T : SeamosCommand, I, new() where I : ICommand {
            Tuple<MaterialTarget, Type> key = new Tuple<MaterialTarget, Type>(materialTaret, typeof(I));
            if (this.commandRepository.ContainsKey(key)) throw new InvalidOperationException("A command for " + typeof(I).Name + " are already registered");
            this.commandRepository.Add(key, () => { return new T(); });
        }

        /// <summary>
        /// The RegisterInstance.
        /// </summary>
        /// <typeparam name="T">.</typeparam>
        /// <typeparam name="I">.</typeparam>
        /// <param name="creator">The creator<see cref="Func{T}"/>.</param>
        /// <param name="materialTaret">The materialTaret<see cref="MaterialTarget"/>.</param>
        public void RegisterInstance<T, I>(Func<T> creator, MaterialTarget materialTaret) where T : SeamosCommand, I where I : ICommand {
            Tuple<MaterialTarget, Type> key = new Tuple<MaterialTarget, Type>(materialTaret, typeof(I));
            if (this.commandRepository.ContainsKey(key)) throw new InvalidOperationException("A command for " + typeof(I).Name + " are already registered");
            this.commandRepository.Add(key, () => { return creator.Invoke(); });
        }

        /// <summary>
        /// The OverrideRegisterInstance.
        /// </summary>
        /// <typeparam name="T">.</typeparam>
        /// <typeparam name="I">.</typeparam>
        /// <param name="creator">The creator<see cref="Func{T}"/>.</param>
        /// <param name="materialTaret">The materialTaret<see cref="MaterialTarget"/>.</param>
        public void OverrideRegisterInstance<T, I>(Func<T> creator, MaterialTarget materialTaret) where T : SeamosCommand, I where I : ICommand {

            Tuple<MaterialTarget, Type> key = new Tuple<MaterialTarget, Type>(materialTaret, typeof(I));
            if (this.commandRepository.ContainsKey(key)) {
                this.commandRepository.Remove(key);
            }

            this.RegisterInstance<T, I>(creator, materialTaret);
        }

        /// <summary>
        /// The OverrideRegister.
        /// </summary>
        /// <typeparam name="T">.</typeparam>
        /// <typeparam name="I">.</typeparam>
        /// <param name="materialTaret">The materialTaret<see cref="MaterialTarget"/>.</param>
        public void OverrideRegister<T, I>(MaterialTarget materialTaret)
            where T : SeamosCommand, I, new() where I : ISeamosCommand {

            this.OverrideRegisterInstance<T, I>(() => { return new T(); }, materialTaret);
        }

        /// <summary>
        /// The Resolve.
        /// </summary>
        /// <typeparam name="I">.</typeparam>
        /// <param name="materialTaret">The materialTaret<see cref="MaterialTarget"/>.</param>
        /// <returns>The <see cref="I"/>.</returns>
        public I Resolve<I>(MaterialTarget materialTaret) where I : class, ISeamosCommand {
            Tuple<MaterialTarget, Type> key = new Tuple<MaterialTarget, Type>(materialTaret, typeof(I));
            if (!this.commandRepository.ContainsKey(key)) throw new InvalidOperationException("No command registered for interface " + typeof(I).Name);
            I command = this.commandRepository[key].Invoke() as I;
            command.MaterialTarget = materialTaret;
            return command;
        }

        /// <summary>
        /// The Serialize.
        /// </summary>
        /// <param name="command">The command<see cref="ISeamosCommand"/>.</param>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public byte[] Serialize(ISeamosCommand command) {
            try {
                if (command is SeamosCommandVisca) {
                    return this.SerializeVisca(command as SeamosCommandVisca);
                }

                else if (command is SeamosExatrack2Command) {
                    return this.SerializeExatrack2(command as SeamosExatrack2Command);
                }
                else if (command is SeamosPascalCommand) {
                    return this.SerializePascal(command as SeamosPascalCommand);
                }
                else if (command is SeamosPelcoCommand) {
                    return this.SerializePelco(command as SeamosPelcoCommand);
                }
                throw new NotImplementedException();
            }
            catch (Exception ex) {
                string log = "SeamosProtocol : Error when serialize command " + command.GetType() + " , " + ex.Message;
                Log.Error(log);
                return new byte[] { };
            }
        }


        /// <summary>
        /// The SerializeAsHexString.
        /// </summary>
        /// <param name="command">The command<see cref="ISeamosCommand"/>.</param>
        /// <returns>The <see cref="string"/>.</returns>
        public string SerializeAsHexString(ISeamosCommand command) {
            byte[] data = this.Serialize(command);
            if (data == null) return null;
            return data.ToHexString();
        }

        /// <summary>
        /// The Deserialize.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        /// <returns>The <see cref="ISeamosCommand"/>.</returns>
        public ISeamosCommand Deserialize(byte[] data) {

            string text = data.ToHexString();
            return this.Deserialize(text);
        }

        /// <summary>
        /// The Deserialize.
        /// </summary>
        /// <param name="content">The content<see cref="string"/>.</param>
        /// <returns>The <see cref="SeamosCommand"/>.</returns>
        public SeamosCommand Deserialize(string content) {

            string data = content;
            ProtocolType protocolType;
            MaterialTarget materialTarget;
            SeamosCommand command = null;
            string log;
            try { // Validation caractère de début
                if (!data.StartsWith(SeamosProtocol.PROTOCOL_SEAMAOS_START)) return null;
                data = data.Substring(SeamosProtocol.PROTOCOL_SEAMAOS_START.Length);
                data = data.Substring(2);

                // extraction nombre de bytes du corps de messages               
                int nbByte = data.Substring(0, 2).HexStringToBytesArray()[0];
                data = data.Substring(2);
                // Extraction type de material et protocol
                materialTarget = (MaterialTarget)Int32.Parse(data.Substring(0, 1));
                int protocolNumber = Int32.Parse(data.Substring(1, 1));
                protocolType = (ProtocolType)protocolNumber;
                // Remove Material target et protocoletype data
                data = data.Substring(2);
                switch (protocolType) {
                    case ProtocolType.Exatrack2:
                        command = this.DeserializeExatrack2(data);
                        break;
                    case ProtocolType.Pascal:
                        command = this.DeserializePascal(materialTarget, data);
                        break;
                    case ProtocolType.Pelco:
                        command = this.DeserializePelco(materialTarget, data);
                        break;
                    case ProtocolType.Visca:
                        command = this.DeserializeVisca(data);
                        break;
                }
                if (command == null) {
                    log = "SeamosThermalCamera Can't deserialize command " + content + " byte count " + nbByte;
                    Log.Warning(log);
                    Console.WriteLine(log);
                }
            }
            catch (Exception ex) {
                log = "SeamosProtocol : Error when deserialize command " + ex.Message;
                Log.Error(log);
                Console.WriteLine(log);
            }

            return command;
        }

        /// <summary>
        /// The DeserializeVisca.
        /// </summary>
        /// <param name="data">The data<see cref="string"/>.</param>
        /// <returns>The <see cref="SeamosCommandVisca"/>.</returns>
        private SeamosCommandVisca DeserializeVisca(string data) {
            throw new NotImplementedException();
        }

        /// <summary>
        /// The DeserializePelco.
        /// </summary>
        /// <param name="materialTarget">The materialTarget<see cref="MaterialTarget"/>.</param>
        /// <param name="data">The data<see cref="string"/>.</param>
        /// <returns>The <see cref="SeamosPelcoCommand"/>.</returns>
        private SeamosPelcoCommand DeserializePelco(MaterialTarget materialTarget, string data) {
            byte[] bytes = data.HexStringToBytesArray();
            SeamosPelcoCommand command = this.FindPelcoCommand(materialTarget, bytes);
            command.SetChannel(bytes[0]);
            command.DataByte1 = bytes[3];
            command.DataByte2 = bytes[4];
            return command;
        }

        /// <summary>
        /// The FindPelcoCommand.
        /// </summary>
        /// <param name="materialTarget">The materialTarget<see cref="MaterialTarget"/>.</param>
        /// <param name="bytes">The bytes<see cref="byte[]"/>.</param>
        /// <returns>The <see cref="SeamosPelcoCommand"/>.</returns>
        private SeamosPelcoCommand FindPelcoCommand(MaterialTarget materialTarget, byte[] bytes) {
            Tuple<byte, byte, MaterialTarget> key = new Tuple<byte, byte, MaterialTarget>(bytes[1], bytes[2], materialTarget);
            if (!this.bufferePelcoCommands.ContainsKey(key)) {
                foreach (KeyValuePair<Tuple<MaterialTarget, Type>, Func<SeamosCommand>> val in this.commandRepository) {
                    SeamosCommand command = val.Value.Invoke();
                    if (command is SeamosPelcoCommand) {
                        SeamosPelcoCommand cmd = command as SeamosPelcoCommand;
                        if (cmd.CommandByte1.Equals(key.Item1) && cmd.CommandByte2.Equals(key.Item2) && cmd.MaterialTarget == materialTarget) {
                            this.bufferePelcoCommands.Add(key, val.Value);
                        }
                    }
                }
            }
            if (!this.bufferePelcoCommands.ContainsKey(key)) {
                throw new ArgumentException("No command Registered for command Bytes " + key.Item1 + " " + key.Item2);
            }
            SeamosPelcoCommand pelcoCommand = (SeamosPelcoCommand)this.bufferePelcoCommands[key].Invoke();
            pelcoCommand.MaterialTarget = materialTarget;
            pelcoCommand.ChannelByte = bytes[0];
            return pelcoCommand;
        }

        /// <summary>
        /// The FindPascalCommand.
        /// </summary>
        /// <param name="materialTarget">The materialTarget<see cref="MaterialTarget"/>.</param>
        /// <param name="commandByte">The commandByte<see cref="byte"/>.</param>
        /// <returns>The <see cref="SeamosPascalCommand"/>.</returns>
        private SeamosPascalCommand FindPascalCommand(MaterialTarget materialTarget, byte commandByte1, byte commandByte2) {
            Tuple<byte, byte, MaterialTarget> key = new Tuple<byte, byte, MaterialTarget>(commandByte1, commandByte2, materialTarget);
            if (!this.bufferedSeamosCommands.ContainsKey(key)) {
                foreach (KeyValuePair<Tuple<MaterialTarget, Type>, Func<SeamosCommand>> val in this.commandRepository) {
                    SeamosCommand command = val.Value.Invoke();
                    if (command is SeamosPascalCommand) {
                        SeamosPascalCommand cmd = command as SeamosPascalCommand;
                        if (cmd.CommandByte1.Equals(commandByte1) && cmd.CommandByte2.Equals(commandByte2) && cmd.MaterialTarget == materialTarget) {
                            this.bufferedSeamosCommands.Add(key, val.Value);
                        }
                    }
                }
            }
            if (!this.bufferedSeamosCommands.ContainsKey(key)) {
                throw new ArgumentException("No command Registered for command Bytes " + commandByte1.ToString("X2") + " " + commandByte2.ToString("X2"));
            }
            SeamosPascalCommand pascalCommand = (SeamosPascalCommand)this.bufferedSeamosCommands[key].Invoke();
            pascalCommand.MaterialTarget = materialTarget;
            return pascalCommand;
        }

        /// <summary>
        /// The DeserializePascal.
        /// </summary>
        /// <param name="materialTarget">The materialTarget<see cref="MaterialTarget"/>.</param>
        /// <param name="data">The data<see cref="string"/>.</param>
        /// <returns>The <see cref="SeamosPascalCommand"/>.</returns>
        private SeamosPascalCommand DeserializePascal(MaterialTarget materialTarget, string data) {



            byte commandByte1 = data.Substring(0, 2).HexStringToBytesArray()[0];
            byte commandByte2 = data.Substring(2, 2).HexStringToBytesArray()[0];
            SeamosPascalCommand command = this.FindPascalCommand(materialTarget, commandByte1, commandByte2);
            if (command != null) {

                byte[] bytesArray = data.HexStringToBytesArray();
                byte[] dataBytes = new byte[bytesArray.Length - 2];
                Array.Copy(bytesArray, 2, dataBytes, 0, dataBytes.Length);
                command.DeserializeBytes(dataBytes);
                return command;
            }
            else return null;
        }

        /// <summary>
        /// The DeserializeExatrack.
        /// </summary>
        /// <param name="data">The data<see cref="string"/>.</param>
        /// <returns>The <see cref="SeamosExatrack1Command"/>.</returns>
        private SeamosExatrack2Command DeserializeExatrack2(string data) {
            SeamosTurretAbsolutePositionExatrack2Response response = new SeamosTurretAbsolutePositionExatrack2Response();
            response.Deserialize(data.HexStringToBytesArray());
            return response;
        }

        /// <summary>
        /// The SerializePelco.
        /// </summary>
        /// <param name="seamosPelcoCommand">The seamosPelcoCommand<see cref="SeamosPelcoCommand"/>.</param>
        /// <returns>The <see cref="byte[]"/>.</returns>
        private byte[] SerializePelco(SeamosPelcoCommand seamosPelcoCommand) {

            return seamosPelcoCommand.Serialize();
        }

        /// <summary>
        /// The SerializePascal.
        /// </summary>
        /// <param name="seamosPascalCommand">The seamosPascalCommand<see cref="SeamosPascalCommand"/>.</param>
        /// <returns>The <see cref="byte[]"/>.</returns>
        private byte[] SerializePascal(SeamosPascalCommand seamosPascalCommand) {


            return seamosPascalCommand.Serialize();
        }


        private byte[] SerializeExatrack2(SeamosExatrack2Command seamosExatrack2Command) {
            byte[] data = seamosExatrack2Command.Serialize();
            Debug.WriteLine("PelcoDec 2 Exatrack => " + data.ToHexString());
            return data;
        }


        /// <summary>
        /// The SerializeVisca.
        /// </summary>
        /// <param name="seamosCommandVisca">The seamosCommandVisca<see cref="SeamosCommandVisca"/>.</param>
        /// <returns>The <see cref="byte[]"/>.</returns>
        private byte[] SerializeVisca(SeamosCommandVisca seamosCommandVisca) {
            throw new NotImplementedException();
        }
    }
}

namespace Exavision.Seasense.Protocols.Seamos.Commands {
    using Exavision.Seamos.Core.Extensions;
    using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
    using Serilog;
    using System;
    using System.Collections;
    using System.Text;

    /// <summary>
    /// Defines the ZoomModeDay.
    /// </summary>
    public enum ZoomModeDayExatrack2 {
        /// <summary>
        /// Defines the Ignore.
        /// </summary>
        Ignore = 0,

        /// <summary>
        /// Defines the Speed.
        /// </summary>
        Speed = 16,

        /// <summary>
        /// Defines the Absolute.
        /// </summary>
        Absolute = 32
    }

    /// <summary>
    /// Defines the ZoomModeThermal.
    /// </summary>
    public enum ZoomModeThermalExatrack2 {
        /// <summary>
        /// Defines the Ignore.
        /// </summary>
        Ignore = 0,

        /// <summary>
        /// Defines the Speed.
        /// </summary>
        Speed = 64,

        /// <summary>
        /// Defines the Absolute.
        /// </summary>
        Absolute = 128
    }

    /// <summary>
    /// Defines the PtMode.
    /// </summary>
    public enum PtModeExatrack2 {
        /// <summary>
        /// Defines the Ignore.
        /// </summary>
        Ignore = 0,

        /// <summary>
        /// Defines the Speed.
        /// </summary>
        Speed = 1,

        /// <summary>
        /// Defines the Absolute.
        /// </summary>
        Absolute = 2,

        /// <summary>
        /// Defines the Relative.
        /// </summary>
        Relative = 3,

        /// <summary>
        /// Defines the Interpolated.
        /// </summary>
        Interpolated = 4
    }

    /// <summary>
    /// Defines the CommandTarget.
    /// </summary>
    public enum CommandTargetExatrack2 {
        /// <summary>
        /// Defines the PTU.
        /// </summary>
        PTU = 0xF7,

        /// <summary>
        /// Defines the Computer.
        /// </summary>
        Computer = 0xF9
    }
    public enum StabilizationStateExatrack2 {
        On, Off
    }
    public enum SpeedUnitExatrack2 {
        Pelco, CentiDegreePerSecond, BinaryMotor
    }

    public enum RebootAction {
        None,
        Shutdown,
        Reboot,
        Sleep,
        WakeUp

    }
    /// <summary>
    /// Defines the <see cref="SeamosExatrack1Command" />.
    /// </summary>
    public abstract class SeamosExatrack2Command : SeamosCommand {
        private readonly double maxCentiDegreePerSecond = 10000;
        private readonly double maxBinaryMotor = 1000;
        private readonly double maxPelco = 63;
        public RebootAction RebootAction { get; set; } = RebootAction.None;
        public StabilizationStateExatrack2 StabilizationState { get; set; } = StabilizationStateExatrack2.Off;

        public SpeedUnitExatrack2 SpeedUnit { get; set; } = SpeedUnitExatrack2.Pelco;
        /// <summary>
        /// Gets or sets the CommandTarget.
        /// </summary>
        public CommandTargetExatrack2 CommandTarget { get; set; } = CommandTargetExatrack2.Computer;

        /// <summary>
        /// Gets or sets the MoveMode.
        /// </summary>
        public MoveModeExatrack2 MoveMode { get; set; } = MoveModeExatrack2.Absolute;

        /// <summary>
        /// Gets or sets the Pan.
        /// </summary>
        public double Pan { get; set; }

        /// <summary>
        /// Gets or sets the Tilt.
        /// </summary>
        public double Tilt { get; set; }

        /// <summary>
        /// Gets or sets the PanSpeed.
        /// </summary>
        public double PanSpeed { get; set; }

        /// <summary>
        /// Gets or sets the TiltSpeed.
        /// </summary>
        public double TiltSpeed { get; set; }
        public ushort ZoomThermal { get; set; }
        public ushort ZoomDay { get; set; }

        /// <summary>
        /// Gets or sets the ZoomModeDay.
        /// </summary>
        public ZoomModeDayExatrack2 ZoomModeDay { get; set; } = ZoomModeDayExatrack2.Ignore;

        /// <summary>
        /// Gets or sets the ZoomModeThemral.
        /// </summary>
        public ZoomModeThermalExatrack2 ZoomModeThemral { get; set; } = ZoomModeThermalExatrack2.Ignore;

        /// <summary>
        /// Gets or sets the PtMode.
        /// </summary>
        public PtModeExatrack2 PanTiltZoomMode { get; set; } = PtModeExatrack2.Absolute;

        /// <summary>
        /// Gets the SyncByte.
        /// </summary>
        public virtual byte SyncByte {
            get {
                return (byte)this.CommandTarget;
            }
        }

        /// <summary>
        /// Gets the ProtocolType.
        /// </summary>
        public override ProtocolType ProtocolType => ProtocolType.Exatrack2;

        /// <summary>
        /// The Serialize.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public byte[] Serialize() {
            StringBuilder data = new StringBuilder();
            data.Append(SeamosProtocol.PROTOCOL_SEAMAOS_START);
            if (this.SystemTarget == SystemTarget.Computer) { data.Append(SeamosProtocol.PROTOCOL_SEAMAOS_SYSTEM_TARGET_COMPUTER); }
            else if (this.SystemTarget == SystemTarget.ElectronicCard) { data.Append(SeamosProtocol.PROTOCOL_SEAMAOS_SYSTEM_TARGET_ELECTRONIC_CARD); }
            else throw new NotImplementedException();
            string nbBytes = ((byte)15).ToHexString();
            data.Append(nbBytes);
            data.Append(((int)this.MaterialTarget).ToString("0") + ((int)this.ProtocolType).ToString("0"));
            this.PanTiltZoomMode = this.FromMoveMode();
            this.ConvertPositionAndSpeed(this.SpeedUnit, out ushort pan, out ushort tilt, out ushort panSpeed, out ushort tiltSpeed);
            byte[] exatrackBytes = new byte[16];
            exatrackBytes[0] = (byte)this.CommandTarget;
            exatrackBytes[1] = this.GetModeByte();
            exatrackBytes[2] = this.GetMode2Byte();
            if (this.PanTiltZoomMode == PtModeExatrack2.Speed) {
                this.SerializeSpeed(exatrackBytes, panSpeed, tiltSpeed);
            }
            else if (this.PanTiltZoomMode == PtModeExatrack2.Absolute) {
                this.SerializeAbsolute(exatrackBytes, tilt, pan);
            }
            else if (this.PanTiltZoomMode == PtModeExatrack2.Ignore) {
                this.MoveMode = MoveModeExatrack2.IgnoreData;
                exatrackBytes[1] = this.GetModeByte();
                exatrackBytes[2] = this.GetMode2Byte();
                exatrackBytes[3] = 0x00;
                exatrackBytes[4] = 0x00;
                exatrackBytes[5] = 0x00;
                exatrackBytes[6] = 0x00;
                exatrackBytes[7] = 0x00;
                exatrackBytes[8] = 0x00;
                exatrackBytes[9] = 0x00;
                exatrackBytes[10] = 0x00;
                exatrackBytes[11] = 0x00;
                exatrackBytes[12] = 0x00;
                exatrackBytes[13] = 0x00;
                exatrackBytes[14] = 0x00;

            }
            else throw new NotImplementedException();
            byte checkSumm = 0;
            for (int i = 1; i <= 14; i++) { checkSumm += exatrackBytes[i]; }
            checkSumm += 127;
            exatrackBytes[15] = checkSumm;
            data.Append(exatrackBytes.ToHexString());
            data.Append(data.ToString().GetSeamosCheckSum());
            return data.ToString().HexStringToBytesArray();
        }



        /// <summary>
        /// The ConvertPositionAndSpeed.
        /// </summary>
        /// <param name="pan">The pan<see cref="int"/>.</param>
        /// <param name="tilt">The tilt<see cref="int"/>.</param>
        /// <param name="panSpeed">The panSpeed<see cref="int"/>.</param>
        /// <param name="titlSpeed">The titlSpeed<see cref="int"/>.</param>
        private void ConvertPositionAndSpeed(SpeedUnitExatrack2 speedUnit, out ushort pan, out ushort tilt, out ushort panSpeed, out ushort titlSpeed) {

            int panPelco = (int)(this.Pan * 100D);
            int tiltPelco = (int)(this.Tilt * 100D);
            pan = (ushort)Math.Abs(panPelco);
            if (tiltPelco > 0) {
                tilt = (ushort)(36000 - tiltPelco);
            }
            else {
                tilt = (ushort)-tiltPelco;
            }
            panSpeed = 0;
            titlSpeed = 0;

            switch (speedUnit) {
                case SpeedUnitExatrack2.BinaryMotor:
                    panSpeed = (ushort)(Math.Abs(PanSpeed) * maxBinaryMotor);
                    titlSpeed = (ushort)(Math.Abs(TiltSpeed) * maxBinaryMotor);
                    panSpeed = this.Clamp(panSpeed, 0, (ushort)maxBinaryMotor);
                    titlSpeed = this.Clamp(titlSpeed, 0, (ushort)maxBinaryMotor);
                    break;
                case SpeedUnitExatrack2.CentiDegreePerSecond:
                    panSpeed = (ushort)(Math.Abs(PanSpeed) * maxCentiDegreePerSecond);
                    titlSpeed = (ushort)(Math.Abs(TiltSpeed) * maxCentiDegreePerSecond);
                    panSpeed = this.Clamp(panSpeed, 0, (ushort)maxCentiDegreePerSecond);
                    titlSpeed = this.Clamp(titlSpeed, 0, (ushort)maxCentiDegreePerSecond);
                    break;
                case SpeedUnitExatrack2.Pelco:
                    panSpeed = (ushort)(Math.Abs(PanSpeed) * maxPelco);
                    titlSpeed = (ushort)(Math.Abs(TiltSpeed) * maxPelco);
                    panSpeed = this.Clamp(panSpeed, 0, (ushort)maxPelco);
                    titlSpeed = this.Clamp(titlSpeed, 0, (ushort)maxPelco);
                    break;
            }
        }

        /// <summary>
        /// The FromMoveMode.
        /// </summary>
        /// <returns>The <see cref="PanTiltZoomMode"/>.</returns>
        private PtModeExatrack2 FromMoveMode() {
            if (this.MoveMode == MoveModeExatrack2.Absolute) {
                return PtModeExatrack2.Absolute;
            }
            else if (this.MoveMode == MoveModeExatrack2.Speed) {
                return PtModeExatrack2.Speed;
            }
            return PtModeExatrack2.Ignore;
        }

        /// <summary>
        /// The SerializeAbsolute.
        /// </summary>
        /// <param name="exatrackBytes">The exatrackBytes<see cref="byte[]"/>.</param>
        /// <param name="tilt">The tilt<see cref="int"/>.</param>
        /// <param name="tiltSpeed">The tiltSpeed<see cref="int"/>.</param>
        /// <param name="pan">The pan<see cref="int"/>.</param>
        /// <param name="panSpeed">The panSpeed<see cref="int"/>.</param>
        private void SerializeAbsolute(byte[] exatrackBytes, ushort tilt, ushort pan) {
            exatrackBytes[0] = (byte)this.CommandTarget;
            exatrackBytes[1] = this.GetModeByte();
            exatrackBytes[2] = this.GetMode2Byte();
            exatrackBytes.SetMsbUnsignedShort(3, tilt);
            exatrackBytes.SetMsbUnsignedShort(7, pan);
            ushort panSpeeed = 0;
            ushort tiltSpeeed = 0;
            switch (this.SpeedUnit) {
                case SpeedUnitExatrack2.BinaryMotor:
                    panSpeeed = (ushort)(Math.Abs(PanSpeed) * maxBinaryMotor);
                    tiltSpeeed = (ushort)(Math.Abs(TiltSpeed) * maxBinaryMotor);
                    panSpeeed = this.Clamp(panSpeeed, 0, (ushort)maxBinaryMotor);
                    tiltSpeeed = this.Clamp(tiltSpeeed, 0, (ushort)maxBinaryMotor);
                    break;
                case SpeedUnitExatrack2.CentiDegreePerSecond:
                    panSpeeed = (ushort)(Math.Abs(PanSpeed) * maxCentiDegreePerSecond);
                    tiltSpeeed = (ushort)(Math.Abs(TiltSpeed) * maxCentiDegreePerSecond);
                    panSpeeed = this.Clamp(panSpeeed, 0, (ushort)maxCentiDegreePerSecond);
                    tiltSpeeed = this.Clamp(tiltSpeeed, 0, (ushort)maxCentiDegreePerSecond);
                    break;
                case SpeedUnitExatrack2.Pelco:
                    panSpeeed = (ushort)(Math.Abs(PanSpeed) * maxPelco);
                    tiltSpeeed = (ushort)(Math.Abs(TiltSpeed) * maxPelco);
                    panSpeeed = this.Clamp(panSpeeed, 0, (ushort)maxPelco);
                    tiltSpeeed = this.Clamp(tiltSpeeed, 0, (ushort)maxPelco);
                    break;
            }
            exatrackBytes.SetMsbUnsignedShort(5, tiltSpeeed);
            exatrackBytes.SetMsbUnsignedShort(9, panSpeeed);

        }

        /// <summary>
        /// The SerializeSpeed.
        /// </summary>
        /// <param name="exatrackBytes">The exatrackBytes<see cref="byte[]"/>.</param>
        /// <param name="tiltSpeed">The tiltSpeed<see cref="int"/>.</param>
        /// <param name="panSpeed">The panSpeed<see cref="int"/>.</param>
        private void SerializeSpeed(byte[] exatrackBytes, ushort panSpeed, ushort tiltSpeed) {

            exatrackBytes[0] = (byte)this.CommandTarget;
            exatrackBytes[1] = this.GetModeByte();
            exatrackBytes[2] = this.GetMode2Byte();
            exatrackBytes[3] = 0x00;
            if (TiltSpeed > 0) {
                exatrackBytes[4] = 0x01;
            }
            else if (TiltSpeed < 0) {
                exatrackBytes[4] = 0x02;
            }
            else {
                exatrackBytes[4] = 0x00;
            }
            exatrackBytes[7] = 0x00;
            // Pan direction          
            if (PanSpeed > 0) {
                exatrackBytes[8] = 0x01;
            }
            else if (PanSpeed < 0) {
                exatrackBytes[8] = 0x02;
            }
            else {
                exatrackBytes[8] = 0x00;
            }

            exatrackBytes.SetMsbUnsignedShort(5, tiltSpeed);
            exatrackBytes.SetMsbUnsignedShort(9, panSpeed);
            Log.Information("Pan Speed " + panSpeed);
            Log.Information("Tilt Speed " + tiltSpeed);

        }
        private ushort Clamp(ushort value, ushort min, ushort max) {
            ushort result = value;
            if (result < min) result = min;
            if (result > max) result = max;
            return result;
        }

        private byte GetMode2Byte() {
            BitArray bits = new BitArray(8);
            switch (this.ZoomModeDay) {
                case ZoomModeDayExatrack2.Ignore:
                    bits.Set(0, false);
                    bits.Set(1, false);
                    break;
                case ZoomModeDayExatrack2.Speed:
                    bits.Set(0, true);
                    bits.Set(1, false);
                    break;
                case ZoomModeDayExatrack2.Absolute:
                    bits.Set(0, false);
                    bits.Set(1, true);
                    break;
            }
            switch (this.ZoomModeThemral) {
                case ZoomModeThermalExatrack2.Ignore:
                    bits.Set(2, false);
                    bits.Set(3, false);
                    break;
                case ZoomModeThermalExatrack2.Speed:
                    bits.Set(2, true);
                    bits.Set(3, false);
                    break;
                case ZoomModeThermalExatrack2.Absolute:
                    bits.Set(2, false);
                    bits.Set(3, true);
                    break;
            }
            switch (this.RebootAction) {
                case RebootAction.None:
                    bits.Set(4, false);
                    bits.Set(5, false);
                    bits.Set(6, false);
                    bits.Set(7, false);
                    break;
                case RebootAction.Shutdown:
                    bits.Set(4, true);
                    bits.Set(5, false);
                    bits.Set(6, false);
                    bits.Set(7, false);
                    break;
                case RebootAction.Reboot:
                    bits.Set(4, false);
                    bits.Set(5, true);
                    bits.Set(6, false);
                    bits.Set(7, false);
                    break;

                case RebootAction.Sleep:
                    bits.Set(4, false);
                    bits.Set(5, false);
                    bits.Set(6, true);
                    bits.Set(7, false);
                    break;
                case RebootAction.WakeUp:
                    bits.Set(4, false);
                    bits.Set(5, false);
                    bits.Set(6, false);
                    bits.Set(7, true);
                    break;


            }

            byte[] bytes = new byte[1];
            bits.CopyTo(bytes, 0);
            return bytes[0];
        }

        /// <summary>
        /// The GetModeByte.
        /// </summary>
        /// <returns>The <see cref="byte"/>.</returns>
        private byte GetModeByte() {
            BitArray bits = new BitArray(8);
            switch (this.PanTiltZoomMode) {
                case PtModeExatrack2.Ignore:
                    bits.Set(0, false);
                    bits.Set(1, false);
                    bits.Set(2, false);
                    bits.Set(3, false);
                    break;
                case PtModeExatrack2.Speed:
                    bits.Set(0, true);
                    bits.Set(1, false);
                    bits.Set(2, false);
                    bits.Set(3, false);
                    break;
                case PtModeExatrack2.Absolute:
                    bits.Set(0, false);
                    bits.Set(1, true);
                    bits.Set(2, false);
                    bits.Set(3, false);
                    break;
                case PtModeExatrack2.Relative:
                    bits.Set(0, true);
                    bits.Set(1, true);
                    bits.Set(2, false);
                    bits.Set(3, false);
                    break;
                case PtModeExatrack2.Interpolated:
                    bits.Set(0, false);
                    bits.Set(1, false);
                    bits.Set(2, true);
                    bits.Set(3, false);
                    break;

            }
            switch (this.StabilizationState) {
                case StabilizationStateExatrack2.Off:
                    bits.Set(4, false);
                    break;
                case StabilizationStateExatrack2.On:
                    bits.Set(4, true);
                    break;
            }

            switch (this.SpeedUnit) {
                case SpeedUnitExatrack2.Pelco:
                    bits.Set(6, false);
                    bits.Set(7, false);
                    break;
                case SpeedUnitExatrack2.CentiDegreePerSecond:
                    bits.Set(6, true);
                    bits.Set(7, false);
                    break;
                case SpeedUnitExatrack2.BinaryMotor:
                    bits.Set(6, false);
                    bits.Set(7, true);
                    break;
            }
            switch (this.RebootAction) {
                case RebootAction.None:
                    break;
                case RebootAction.Reboot:
                    bits.Set(5, true);
                    break;
                case RebootAction.Shutdown:
                    bits.Set(5, true);
                    break;
            }


            byte[] bytes = new byte[1];
            bits.CopyTo(bytes, 0);
            return bytes[0];
        }

        /// <summary>
        /// The Deserialize.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public void Deserialize(byte[] data) {

            BitArray modeBits = new BitArray(new byte[] { data[2] });
            this.PanTiltZoomMode = this.ParsePanTiltZoomMode(modeBits);

            for (int i = 0; i < modeBits.Count; i++) {
                Log.Information("Mode Bit " + i + " :" + modeBits[i]);
            }

            this.StabilizationState = modeBits[4] ? StabilizationStateExatrack2.On : StabilizationStateExatrack2.Off;
            this.SpeedUnit = this.ParseSpeedUnit(modeBits);
            BitArray mode2Bits = new BitArray(new byte[] { data[2] });
            this.ZoomModeDay = this.ParseZoomModeDay(mode2Bits);
            this.ZoomModeThemral = this.ParseZoomThermal(mode2Bits);

            // On ignore le mode 

            this.ZoomDay = data.GetMsbUnsignedShort(11);
            this.ZoomThermal = data.GetMsbUnsignedShort(13);
            this.DeserializePanAndTiltPosition(data, out double pan, out double tilt);
            this.Pan = pan;
            this.Tilt = tilt;


            if (this.PanTiltZoomMode == PtModeExatrack2.Speed) {
                this.DeserializePanTiltDirection(data, out int tiltDirection, out int panDirection);
                this.DeserializeTiltAndPanSpeed(data, panDirection, tiltDirection, out double panSpeed, out double tiltSpeed);
                this.PanSpeed = panSpeed;
                this.TiltSpeed = tiltSpeed;
            }
            else if (this.PanTiltZoomMode == PtModeExatrack2.Absolute) {
                this.ZoomDay = data.GetMsbUnsignedShort(11);
                this.ZoomThermal = data.GetMsbUnsignedShort(13);

            }

        }

        private void DeserializePanAndTiltPosition(byte[] data, out double panPosition, out double tiltPosition) {
            int tilt = data.GetMsbUnsignedShort(3);
            int pan = data.GetMsbUnsignedShort(7);
            if (tilt < 18000) {
                tilt = -tilt;
            }
            else {
                tilt = 36000 - tilt;
            }
            panPosition = pan / 100D;
            tiltPosition = tilt / 100D;
        }

        private void DeserializeTiltAndPanSpeed(byte[] data, int panDirection, int tiltDirection, out double panSpeed, out double tiltSpeed) {
            int tiltSpeedInt = data.GetMsbUnsignedShort(5) * tiltDirection;
            int panSpeedInt = data.GetMsbUnsignedShort(9) * panDirection;
            panSpeed = 0;
            tiltSpeed = 0;
            switch (this.SpeedUnit) {

                case SpeedUnitExatrack2.BinaryMotor:
                    tiltSpeed = tiltSpeedInt / maxBinaryMotor;
                    panSpeed = panSpeedInt / maxBinaryMotor;

                    break;
                case SpeedUnitExatrack2.CentiDegreePerSecond:
                    tiltSpeed = tiltSpeedInt / maxCentiDegreePerSecond;
                    panSpeed = panSpeedInt / maxCentiDegreePerSecond;
                    break;
                case SpeedUnitExatrack2.Pelco:
                    tiltSpeed = tiltSpeedInt / maxPelco;
                    panSpeed = panSpeedInt / maxPelco;
                    break;
            }
        }

        private void DeserializePanTiltDirection(byte[] data, out int tiltDirection, out int panDirection) {
            tiltDirection = 0;
            if (data[4] == 0x01) {
                tiltDirection = -1;
            }
            else if (data[4] == 0x02) {
                tiltDirection = 1;
            }
            panDirection = 0;
            if (data[8] == 0x01) {
                panDirection = -1;
            }
            else if (data[8] == 0x02) {
                panDirection = 1;
            }
        }

        private ZoomModeThermalExatrack2 ParseZoomThermal(BitArray mode2Bits) {
            if (!mode2Bits.Get(2) && !mode2Bits.Get(3)) {
                return ZoomModeThermalExatrack2.Ignore;
            }
            else if (mode2Bits.Get(2) && !mode2Bits.Get(3)) {
                return ZoomModeThermalExatrack2.Speed;
            }
            else if (!mode2Bits.Get(2) && mode2Bits.Get(3)) {
                return ZoomModeThermalExatrack2.Absolute;
            }
            return ZoomModeThermalExatrack2.Ignore;
        }

        private ZoomModeDayExatrack2 ParseZoomModeDay(BitArray mode2Bits) {
            this.ZoomModeDay = ZoomModeDayExatrack2.Ignore;
            if (!mode2Bits.Get(0) && !mode2Bits.Get(1)) {
                return ZoomModeDayExatrack2.Ignore;
            }
            else if (mode2Bits.Get(0) && !mode2Bits.Get(1)) {
                return ZoomModeDayExatrack2.Speed;
            }
            else if (!mode2Bits.Get(0) && mode2Bits.Get(1)) {
                return ZoomModeDayExatrack2.Absolute;
            }
            return ZoomModeDayExatrack2.Ignore;
        }

        private SpeedUnitExatrack2 ParseSpeedUnit(BitArray modeBits) {
            if (!modeBits.Get(6) && !modeBits.Get(7)) {
                return SpeedUnitExatrack2.Pelco;
            }
            else if (modeBits.Get(6) && !modeBits.Get(7)) {
                return SpeedUnitExatrack2.CentiDegreePerSecond;
            }
            else if (!modeBits.Get(6) && modeBits.Get(7)) {
                return SpeedUnitExatrack2.BinaryMotor;
            }
            return SpeedUnitExatrack2.CentiDegreePerSecond;
        }

        private PtModeExatrack2 ParsePanTiltZoomMode(BitArray modeBits) {
            if (
                !modeBits.Get(0) &&
                !modeBits.Get(1) &&
                !modeBits.Get(2) &&
                !modeBits.Get(3)) {
                return PtModeExatrack2.Ignore;
            }
            else if (
                modeBits.Get(0) &&
                !modeBits.Get(1) &&
                !modeBits.Get(2) &&
                !modeBits.Get(3)) {
                return PtModeExatrack2.Speed;
            }
            else if (
                !modeBits.Get(0) &&
                 modeBits.Get(1) &&
                !modeBits.Get(2) &&
                !modeBits.Get(3)) {
                return PtModeExatrack2.Absolute;
            }
            else if (
               modeBits.Get(0) &&
               modeBits.Get(1) &&
               !modeBits.Get(2) &&
               !modeBits.Get(3)) {
                return PtModeExatrack2.Relative;
            }
            return PtModeExatrack2.Ignore;
        }
    }

}


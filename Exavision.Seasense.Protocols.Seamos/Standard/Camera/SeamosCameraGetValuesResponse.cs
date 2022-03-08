namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
    using Exavision.Seasense.Protocols.Seamos.Enums;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    /// <summary>
    /// Defines the <see cref="SeamosCameraGetValuesResponse" />.
    /// </summary>
    public class SeamosCameraGetValuesResponse : SeamosPascalCommand, ICameraGetValuesResponse {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x75;

        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// Gets or sets the MeteoPresetWeather.
        /// </summary>
        public MeteoPresetWeather MeteoPresetWeather { get; set; }

        /// <summary>
        /// Gets or sets the MeteoPresetLocation.
        /// </summary>
        public MeteoPresetLocation MeteoPresetLocation { get; set; }

        /// <summary>
        /// Gets or sets the MeteoPresetTime.
        /// </summary>
        public MeteoPresetTime MeteoPresetTime { get; set; }

        /// <summary>
        /// Gets or sets the Brightness.
        /// </summary>
        public byte Luminosity { get; set; }

        /// <summary>
        /// Gets or sets the Contrast.
        /// </summary>
        public byte Contrast { get; set; }

        /// <summary>
        /// Gets or sets the ColorRepresentation.
        /// </summary>
        public byte ColorRepresentation { get; set; }

        /// <summary>
        /// Gets or sets the Gamma.
        /// </summary>
        public int Gamma { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether GammaCorrection.
        /// </summary>
        public bool GammaCorrection { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether Historgram.
        /// </summary>
        public bool Historgram { get; set; }

        /// <summary>
        /// Gets or sets the ImageQuality.
        /// </summary>
        public byte ImageQuality { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether Polarity.
        /// </summary>
        public bool Polarity { get; set; }

        /// <summary>
        /// Gets or sets the ResetStates.
        /// </summary>
        public List<ThorResetState> ResetStates { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether Reticule.
        /// </summary>
        public bool Reticule { get; set; }

        /// <summary>
        /// Gets or sets the ReticuleMode.
        /// </summary>
        public ReticuleMode ReticuleMode { get; set; }

        /// <summary>
        /// Gets or sets the ReticuleX.
        /// </summary>
        public int ReticuleX { get; set; }

        /// <summary>
        /// Gets or sets the ReticuleY.
        /// </summary>
        public int ReticuleY { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether RoiHistoEnable.
        /// </summary>
        public bool RoiHistoEnable { get; set; }

        /// <summary>
        /// Gets or sets the RoiHistoHeight.
        /// </summary>
        public int RoiHistoHeight { get; set; }

        /// <summary>
        /// Gets or sets the RoiHistoWidth.
        /// </summary>
        public int RoiHistoWidth { get; set; }

        /// <summary>
        /// Gets or sets the RoiHistoX.
        /// </summary>
        public int RoiHistoX { get; set; }

        /// <summary>
        /// Gets or sets the RoiHistoY.
        /// </summary>
        public int RoiHistoY { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether RoiZoomEnable.
        /// </summary>
        public bool RoiZoomEnable { get; set; }

        /// <summary>
        /// Gets or sets the RoiZoomHeight.
        /// </summary>
        public int RoiZoomHeight { get; set; }

        /// <summary>
        /// Gets or sets the RoiZoomWidth.
        /// </summary>
        public int RoiZoomWidth { get; set; }

        /// <summary>
        /// Gets or sets the RoiZoomX.
        /// </summary>
        public int RoiZoomX { get; set; }

        /// <summary>
        /// Gets or sets the RoiZoomY.
        /// </summary>
        public int RoiZoomY { get; set; }

        /// <summary>
        /// Gets or sets the Fps.
        /// </summary>
        public double Fps { get; set; }

        /// <summary>
        /// Gets or sets the State.
        /// </summary>
        public ThorState State { get; set; }

        /// <summary>
        /// Gets or sets the ShutterInfo.
        /// </summary>
        public ShutterInfo ShutterInfo { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether RoiFocusEnable.
        /// </summary>
        public bool RoiFocusEnable { get; set; }

        /// <summary>
        /// Gets or sets the RoiFocusHeight.
        /// </summary>
        public int RoiFocusHeight { get; set; }

        /// <summary>
        /// Gets or sets the RoiFocusWidth.
        /// </summary>
        public int RoiFocusWidth { get; set; }

        /// <summary>
        /// Gets or sets the RoiFocusX.
        /// </summary>
        public int RoiFocusX { get; set; }

        /// <summary>
        /// Gets or sets the RoiFocusY.
        /// </summary>
        public int RoiFocusY { get; set; }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            if (this.ResetStates == null) {
                this.ResetStates = new List<ThorResetState>();
            }
            if (this.ShutterInfo == null) {
                this.ShutterInfo = new ShutterInfo() { HasShutter = true, IsShutterOpen = false };
            }

            List<byte> data = new List<byte> {
                this.CommandByte1,
                this.CommandByte2
            };
            this.EnqueueInt(this.ReticuleX, data);
            this.EnqueueInt(this.ReticuleY, data);
            this.EnqueueInt(this.RoiZoomX, data);
            this.EnqueueInt(this.RoiZoomY, data);
            this.EnqueueInt(this.RoiZoomWidth, data);
            this.EnqueueInt(this.RoiZoomHeight, data);
            this.EnqueueInt(this.RoiHistoX, data);
            this.EnqueueInt(this.RoiHistoY, data);
            this.EnqueueInt(this.RoiHistoWidth, data);
            this.EnqueueInt(this.RoiHistoHeight, data);
            this.EnqueueByte(this.Luminosity, data);
            this.EnqueueByte(this.Contrast, data);
            this.EnqueueInt(this.Gamma, data);
            this.EnqueueBool(this.GammaCorrection, data);
            this.EnqueueBool(this.Polarity, data);
            this.EnqueueBool(this.Reticule, data);
            this.EnqueueBool(this.Historgram, data);
            this.EnqueueBool(this.RoiZoomEnable, data);
            this.EnqueueBool(this.RoiHistoEnable, data);
            this.EnqueueByte(this.ImageQuality, data);
            this.EnqueueThorState(this.State, data);
            this.EnqueueThorResetState(this.ResetStates, data);
            this.EnqueueByte(this.ColorRepresentation, data);
            this.EnqueueReticuleMode(this.ReticuleMode, data);
            this.EnqueueShutterInfo(this.ShutterInfo, data);
            this.EnqueueFps(this.Fps, data);
            this.EnqueueMeteoPreset(this.MeteoPresetWeather, this.MeteoPresetLocation, this.MeteoPresetTime, data);
            return data.ToArray();
        }

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {
            List<byte> lst = new List<byte>(data);

            this.ReticuleX = this.DequeueInt(lst);
            this.ReticuleY = this.DequeueInt(lst);
            this.RoiZoomX = this.DequeueInt(lst);
            this.RoiZoomY = this.DequeueInt(lst);
            this.RoiZoomWidth = this.DequeueInt(lst);
            this.RoiZoomHeight = this.DequeueInt(lst);
            this.RoiHistoX = this.DequeueInt(lst);
            this.RoiHistoY = this.DequeueInt(lst);
            this.RoiHistoWidth = this.DequeueInt(lst);
            this.RoiHistoHeight = this.DequeueInt(lst);
            this.Luminosity = this.DequeueByte(lst);
            this.Contrast = this.DequeueByte(lst);
            this.Gamma = this.DequeueInt(lst);
            this.GammaCorrection = this.DequeueBool(lst);
            this.Polarity = this.DequeueBool(lst);
            this.Reticule = this.DequeueBool(lst);
            this.Historgram = this.DequeueBool(lst);
            this.RoiZoomEnable = this.DequeueBool(lst);
            this.RoiHistoEnable = this.DequeueBool(lst);
            this.ImageQuality = this.DequeueByte(lst);
            this.State = this.DequeueThorState(lst);
            this.ResetStates = this.DequeueThorResetState(lst);
            this.ColorRepresentation = this.DequeueByte(lst);
            this.ReticuleMode = this.DequeueReticuleMode(lst);
            this.ShutterInfo = this.DequeueShutterInfo(lst);
            this.Fps = this.DequeueFps(lst);
            Tuple<MeteoPresetWeather, MeteoPresetLocation, MeteoPresetTime> meteoPreset = this.DequeueMeteoPreset(lst);
            this.MeteoPresetWeather = meteoPreset.Item1;
            this.MeteoPresetLocation = meteoPreset.Item2;
            this.MeteoPresetTime = meteoPreset.Item3;
        }

        /// <summary>
        /// The DequeueFps.
        /// </summary>
        /// <param name="lst">The lst<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="double"/>.</returns>
        private double DequeueFps(List<byte> lst) {
            string fpsStr = this.DequeueByte(lst) + "." + this.DequeueByte(lst);
            return double.Parse(fpsStr, System.Globalization.CultureInfo.InvariantCulture);
        }

        /// <summary>
        /// The EnqueueFps.
        /// </summary>
        /// <param name="fps">The fps<see cref="double"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueFps(double fps, List<byte> data) {
            string fpsStr = fps.ToString("00.00", System.Globalization.CultureInfo.InvariantCulture);
            string[] fpsItem = fpsStr.Split(".".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            byte b1 = byte.Parse(fpsItem[0]);
            byte b2 = byte.Parse(fpsItem[1]);
            data.Add(b1);
            data.Add(b2);
        }

        /// <summary>
        /// The DequeueBool.
        /// </summary>
        /// <param name="lst">The lst<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="bool"/>.</returns>
        private bool DequeueBool(List<byte> lst) {
            bool value = (int)lst[0] == 1;
            lst.RemoveAt(0);
            return value;
        }

        /// <summary>
        /// The EnqueueBool.
        /// </summary>
        /// <param name="value">The value<see cref="bool"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueBool(bool value, List<byte> data) {
            if (value) {
                data.Add(0x01);
            }
            else {
                data.Add(0x00);
            }
        }

        /// <summary>
        /// The DequeueByte.
        /// </summary>
        /// <param name="lst">The lst<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="byte"/>.</returns>
        private byte DequeueByte(List<byte> lst) {
            byte value = lst[0];
            lst.RemoveAt(0);
            return value;
        }

        /// <summary>
        /// The EnqueueByte.
        /// </summary>
        /// <param name="value">The value<see cref="byte"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueByte(byte value, List<byte> data) {
            data.Add(value);
        }

        /// <summary>
        /// The DequeueInt.
        /// </summary>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="int"/>.</returns>
        private int DequeueInt(List<byte> data) {
            int value = ((int)data[1] << 8) + (int)data[0];
            data.RemoveAt(0);
            data.RemoveAt(0);
            return value;
        }

        /// <summary>
        /// The EnqueueInt.
        /// </summary>
        /// <param name="value">The value<see cref="int"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueInt(int value, List<byte> data) {
            data.Add((byte)value);
            data.Add((byte)(value >> 8));
        }

        /// <summary>
        /// The DequeueMeteoPreset.
        /// </summary>
        /// <param name="lst">The lst<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="Tuple{MeteoPresetWeather, MeteoPresetLocation, MeteoPresetTime}"/>.</returns>
        private Tuple<MeteoPresetWeather, MeteoPresetLocation, MeteoPresetTime> DequeueMeteoPreset(List<byte> lst) {
            MeteoPresetWeather meteoPresetWeather;
            MeteoPresetTime meteoPresetTime;
            MeteoPresetLocation meteoPresetLocation;
            BitArray bits = new BitArray(new byte[] { lst[0] });
            if (!bits[0] && !bits[1]) {
                meteoPresetWeather = MeteoPresetWeather.Cloud;
            }
            else if (bits[0] && !bits[1]) {
                meteoPresetWeather = MeteoPresetWeather.Sun;
            }
            else if (!bits[0] && bits[1]) {
                meteoPresetWeather = MeteoPresetWeather.Rain;
            }
            else if (bits[0] && bits[1]) {
                meteoPresetWeather = MeteoPresetWeather.Fog;
            }
            else {
                meteoPresetWeather = MeteoPresetWeather.Sun;
            }

            meteoPresetTime = bits[2] ? MeteoPresetTime.Night : MeteoPresetTime.Day;
            meteoPresetLocation = bits[3] ? MeteoPresetLocation.Ground : MeteoPresetLocation.Sea;
            return new Tuple<MeteoPresetWeather, MeteoPresetLocation, MeteoPresetTime>(meteoPresetWeather, meteoPresetLocation, meteoPresetTime);
        }

        /// <summary>
        /// The EnqueueMeteoPreset.
        /// </summary>
        /// <param name="meteoPresetWeather">The meteoPresetWeather<see cref="MeteoPresetWeather"/>.</param>
        /// <param name="meteoPresetLocation">The meteoPresetLocation<see cref="MeteoPresetLocation"/>.</param>
        /// <param name="meteoPresetTime">The meteoPresetTime<see cref="MeteoPresetTime"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueMeteoPreset(MeteoPresetWeather meteoPresetWeather, MeteoPresetLocation meteoPresetLocation, MeteoPresetTime meteoPresetTime, List<byte> data) {
            byte value = 0x00;
            if (meteoPresetWeather == MeteoPresetWeather.Cloud) {
                value = 0;
            }
            else if (meteoPresetWeather == MeteoPresetWeather.Sun) {
                value = 1;
            }
            else if (meteoPresetWeather == MeteoPresetWeather.Rain) {
                value = 2;
            }
            else if (meteoPresetWeather == MeteoPresetWeather.Fog) {
                value = 3;
            }


            if (meteoPresetTime == MeteoPresetTime.Day) {
                value += 0;
            }
            else if (meteoPresetTime == MeteoPresetTime.Night) {
                value += 4;
            }


            if (meteoPresetLocation == MeteoPresetLocation.Sea) {
                value += 0;
            }
            else if (meteoPresetLocation == MeteoPresetLocation.Ground) {
                value += 8;
            }
            value += 128;

            data.Add(value);
        }

        /// <summary>
        /// The EnqueueThorResetState.
        /// </summary>
        /// <param name="resetStates">The resetStates<see cref="List{ThorResetState}"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueThorResetState(List<ThorResetState> resetStates, List<byte> data) {
            byte byteValue = 0x00;
            BitArray bits = new BitArray(new byte[] { byteValue });

            if (resetStates.Contains(ThorResetState.Factory)) {
                bits.Set(0, true);
            }
            if (resetStates.Contains(ThorResetState.Shutdown)) {
                bits.Set(1, true);
            }
            if (resetStates.Contains(ThorResetState.Reboot)) {
                bits.Set(2, true);
            }
            if (resetStates.Contains(ThorResetState.Sleep)) {
                bits.Set(3, true);
            }
            if (resetStates.Contains(ThorResetState.EmergencyShutdown)) {
                bits.Set(4, true);
            }
            if (resetStates.Contains(ThorResetState.WakeUp)) {
                bits.Set(5, true);
            }

            if (resetStates.Contains(ThorResetState.Osd)) {
                bits.Set(6, true);
            }
            if (resetStates.Contains(ThorResetState.Fov1)) {
                bits.Set(7, true);
            }
            if (resetStates.Contains(ThorResetState.Fov0)) {
                bits.Set(7, false);
            }

            data.Add(byteValue);
        }

        /// <summary>
        /// The DequeueThorResetState.
        /// </summary>
        /// <param name="lst">The lst<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="List{ThorResetState}"/>.</returns>
        private List<ThorResetState> DequeueThorResetState(List<byte> lst) {
            List<ThorResetState> result = new List<ThorResetState>();
            byte byteValue = lst[0];
            lst.RemoveAt(0);
            BitArray bits = new BitArray(new byte[] { byteValue });

            if (bits.Get(0)) {
                result.Add(ThorResetState.Factory);
            }
            if (bits.Get(1)) {
                result.Add(ThorResetState.Shutdown);
            }
            if (bits.Get(2)) {
                result.Add(ThorResetState.Reboot);
            }
            if (bits.Get(3)) {
                result.Add(ThorResetState.Sleep);
            }
            if (bits.Get(4)) {
                result.Add(ThorResetState.EmergencyShutdown);
            }
            if (bits.Get(5)) {
                result.Add(ThorResetState.WakeUp);
            }
            if (bits.Get(6)) {
                result.Add(ThorResetState.Osd);
            }
            if (bits.Get(7)) {
                result.Add(ThorResetState.Fov1);
            }
            else {
                result.Add(ThorResetState.Fov0);
            }

            return result;
        }

        /// <summary>
        /// The DequeueThorState.
        /// </summary>
        /// <param name="lst">The lst<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="ThorState"/>.</returns>
        private ThorState DequeueThorState(List<byte> lst) {
            byte byteValue = lst[0];
            ThorState result = (ThorState)byteValue;
            lst.RemoveAt(0);
            return result;
        }

        /// <summary>
        /// The EnqueueThorState.
        /// </summary>
        /// <param name="state">The state<see cref="ThorState"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueThorState(ThorState state, List<byte> data) {
            data.Add((byte)state);
        }

        /// <summary>
        /// The DequeueReticuleMode.
        /// </summary>
        /// <param name="lst">The lst<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="ReticuleMode"/>.</returns>
        private ReticuleMode DequeueReticuleMode(List<byte> lst) {
            byte byteValue = lst[0];
            lst.RemoveAt(0);
            ReticuleMode result = ReticuleMode.Auto;
            if ((int)byteValue == 0) { result = ReticuleMode.Negatif; }
            else if ((int)byteValue == 1) { result = ReticuleMode.Positif; }
            else if ((int)byteValue == 2) { result = ReticuleMode.Auto; }

            return result;
        }

        /// <summary>
        /// The EnqueueReticuleMode.
        /// </summary>
        /// <param name="reticuleMode">The reticuleMode<see cref="ReticuleMode"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueReticuleMode(ReticuleMode reticuleMode, List<byte> data) {
            switch (reticuleMode) {
                case ReticuleMode.Auto:
                    data.Add(0x02);
                    break;
                case ReticuleMode.Negatif:
                    data.Add(0x00);
                    break;
                case ReticuleMode.Positif:
                    data.Add(0x01);
                    break;
                case ReticuleMode.Off:
                    data.Add(0x10);
                    break;

            }
        }

        /// <summary>
        /// The EnqueueShutterInfo.
        /// </summary>
        /// <param name="shutterInfo">The shutterInfo<see cref="ShutterInfo"/>.</param>
        /// <param name="data">The data<see cref="List{byte}"/>.</param>
        private void EnqueueShutterInfo(ShutterInfo shutterInfo, List<byte> data) {
            if (shutterInfo.HasShutter && !shutterInfo.IsShutterOpen) {
                data.Add(0x02);
            }
            else if (shutterInfo.HasShutter && shutterInfo.IsShutterOpen) {
                data.Add(0x01);
            }
            else if (!shutterInfo.HasShutter && !shutterInfo.IsShutterOpen) {
                data.Add(0x03);
            }
            else {
                data.Add(0x00);
            }
        }

        /// <summary>
        /// The DequeueShutterInfo.
        /// </summary>
        /// <param name="lst">The lst<see cref="List{byte}"/>.</param>
        /// <returns>The <see cref="ShutterInfo"/>.</returns>
        private ShutterInfo DequeueShutterInfo(List<byte> lst) {
            ShutterInfo info = new ShutterInfo();
            byte byteValue = lst[0];
            lst.RemoveAt(0);
            if (byteValue == 0x00 || byteValue == 0x02) {
                info.HasShutter = true;
                info.IsShutterOpen = false;
            }
            else if (byteValue == 0x01) {
                info.HasShutter = true;
                info.IsShutterOpen = true;
            }
            else if (byteValue == 0x03) {
                info.HasShutter = false;
                info.IsShutterOpen = false;
            }
            return info;
        }
    }
}

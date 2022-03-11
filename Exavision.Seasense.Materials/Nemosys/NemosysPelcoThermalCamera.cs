using Exavision.Seasense.Materials.Nemosys.Capabilities.Camera;
using Exavision.Seasense.Materials.Nemosys.Converters;
using Exavision.Seasense.Materials.Nemosys.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Materials.Nemosys {
    public class NemosysPelcoThermalCamera : ThermalCamera<SettingNemosysPelcoThermalCamera, NemosysPelcoUnit> {
        public override int ImageWidth { get => 720; }
        public override int ImageHeight { get => 576; }
        private string streamUrl;
        public override string StreamUrl { get => streamUrl; }

        public NemosysPelcoThermalCamera(NemosysPelcoUnit unit) : base(unit) {
            this.DisplayName = "Thermal Camera";
            this.Capabilities.Add(new PelcoCameraAbsoluteZoomPositionCapability(this.Unit.Client, this, new PelcoZoomTableConverter(
            new Tuple<int, double>[]
            {
                new Tuple<int, double>(1, 24.6),
                new Tuple<int, double>(5000, 16),
                new Tuple<int, double>(10000, 11),
                new Tuple<int, double>(20000, 8),
                new Tuple<int, double>(30000, 7),
                new Tuple<int, double>(4000, 6.5),
                new Tuple<int, double>(65500, 5.9)
            }), 5.94, 24.6, 0x02));
            this.Capabilities.Add(new PelcoCameraZoomContinuousCapability(this.Unit.Client, 0x02));
        }
        public override SettingNemosysPelcoThermalCamera GetSetting(SettingNemosysPelcoThermalCamera setting) {

            setting.StreamUrl = this.streamUrl;
            setting.StreamWidth = this.ImageWidth;
            setting.StreamHeight = this.ImageHeight;
            return setting;
        }
        public override void SetSetting(SettingNemosysPelcoThermalCamera setting) {
            this.streamUrl = setting.StreamUrl;
            base.SetSetting(setting);

        }
    }
}

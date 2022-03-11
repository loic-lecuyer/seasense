using Exavision.Seasense.Materials.Nemosys.Capabilities.Camera;
using Exavision.Seasense.Materials.Nemosys.Converters;
using Exavision.Seasense.Materials.Nemosys.Settings;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Nemosys {
    public class NemosysPelcoDayCamera : DayCamera<SettingNemosysPelcoDayCamera, NemosysPelcoUnit> {
        public override int ImageWidth { get => 1200; }
        public override int ImageHeight { get => 1080; }
        private string streamUrl;
        public override string StreamUrl { get => streamUrl; }

        public NemosysPelcoDayCamera(NemosysPelcoUnit unit) : base(unit) {
            this.DisplayName = "Day Camera";
            this.Capabilities.Add(new PelcoCameraAbsoluteZoomPositionCapability(this.Unit.Client, this, new PelcoZoomZ30_129Converter(), 1.64, 52.18, 0x01));
            this.Capabilities.Add(new PelcoCameraZoomContinuousCapability(this.Unit.Client, 0x01));
        }
        public override SettingNemosysPelcoDayCamera GetSetting(SettingNemosysPelcoDayCamera setting) {

            setting.StreamUrl = this.streamUrl;
            setting.StreamWidth = this.ImageWidth;
            setting.StreamHeight = this.ImageHeight;
            return setting;
        }
        public override void SetSetting(SettingNemosysPelcoDayCamera setting) {
            this.streamUrl = setting.StreamUrl;
            base.SetSetting(setting);

        }

    }
}

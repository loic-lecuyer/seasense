using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Settings {
    public class SettingCamera : SettingMaterial {
        public string StreamUrl { get; set; }

        public int StreamWidth { get; set; }

        public int StreamHeight { get; set; }
    }
}

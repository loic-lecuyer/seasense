using System;

namespace Exavision.Seasense.Shared.Settings {


    public abstract class SettingBase {
        public string Id { get; set; } = Guid.NewGuid().ToString();



        public SettingBase() {

        }
    }
}

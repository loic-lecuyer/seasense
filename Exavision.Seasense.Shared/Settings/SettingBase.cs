namespace Exavision.Seasense.Shared.Settings {


    public abstract class SettingBase {

        public string Type { get; set; }
        public string Id { get; set; }

        public SettingBase() {
            this.Type = this.GetType().Name;

        }
    }
}

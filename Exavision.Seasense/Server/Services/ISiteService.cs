using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Server.Services {
    public interface ISiteService {
        public void Start();
        public void Stop();
        public SettingSite LoadSetting();
        void SaveSetting(SettingSite site);
    }
}

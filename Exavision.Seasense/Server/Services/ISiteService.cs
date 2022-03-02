using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;

namespace Exavision.Seasense.Server.Services {
    public interface ISiteService {
        public void Start();
        public void Stop();
        public SettingSite LoadSetting();
        void SaveSetting(SettingSite site);
        IUnit FindUnitById(string unitId);
        SiteState GetState();
        IMaterial FindMaterialById(string materialId);
    }
}

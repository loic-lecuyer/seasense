using Exavision.Seasense.Api.Http.Core;
using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Api.Http.Setting {
    public class SetSettingRequest : HttpRequest {
        public SettingSite Site { get; set; }
    }
}

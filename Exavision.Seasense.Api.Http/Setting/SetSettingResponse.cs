using Exavision.Seasense.Api.Http.Core;
using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Api.Http.Setting {
    public class SetSettingResponse : HttpResponse {

        public SettingSite Site { get; set; }
    }
}

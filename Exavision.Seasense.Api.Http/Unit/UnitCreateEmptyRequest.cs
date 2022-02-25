using Exavision.Seasense.Api.Http.Core;

namespace Exavision.Seasense.Api.Http.Login {
    public class UnitCreateEmptyRequest : HttpRequest {
        public string UnitType { get; set; }
    }
}

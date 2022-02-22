using Exavision.Seasense.Api.Http.Core;

namespace Exavision.Seasense.Api.Http.Login {
    public class LoginRequest : HttpRequest {
        public string Login { get; set; }
        public string PasswordHash { get; set; }
    }
}

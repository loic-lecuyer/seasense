using Exavision.Seasense.Api.Http.Core;
using Exavision.Seasense.Shared.Models;

namespace Exavision.Seasense.Api.Http.Login {
    public class LoginResponse : HttpResponse {

        public User User { get; set; }
        public string Token { get; set; }
        public string ErrorMessage { get; set; }
    }
}

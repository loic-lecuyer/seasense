using Exavision.Api.Http.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Api.Http.Login {
    public class LoginResponse : HttpResponse {
        public bool Success { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
        public string ErrorMessage { get; set; }
    }
}

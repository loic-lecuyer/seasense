using Exavision.Api.Http.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Api.Http.Login {
    public class LoginRequest : HttpRequest {
        public string Login { get; set; }
        public string PasswordHash { get; set; }
    }
}

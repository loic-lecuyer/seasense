namespace Exavision.Seasense.Server.Controllers {
    using Exavision.Seasense.Api.Http.Login;
    using Exavision.Seasense.Api.Http.Token;
    using Exavision.Seasense.Server.Attributes;
    using Exavision.Seasense.Server.Services;
    using Exavision.Seasense.Shared.Models;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using System;

    [Route("api")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class ApiController : Controller {



        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;

        public ApiController(ITokenService tokenService, IUserRepository userRepository) {
            _tokenService = tokenService;
            _userRepository = userRepository;
        }


        [HttpPost]
        [Authorize]
        [Route("token/validate")]
        public ValidateTokenResponse ValidateToken([FromBody] ValidateTokenRequest request) {
            return new ValidateTokenResponse();
        }


        [HttpPost]
        [Authorize]
        [Route("logout")]
        public LogoutResponse Logout([FromBody] LogoutRequest request) {
            return new LogoutResponse();
        }

        [HttpPost]
        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [Route("login")]
        public LoginResponse Login([FromBody] LoginRequest request) {
            if (!String.IsNullOrEmpty(request.Login) && !String.IsNullOrEmpty(request.PasswordHash)) {
                User user = this._userRepository.FindUser(request.Login, request.PasswordHash.ToLower());
                if (user != null) {

                    string token = _tokenService.BuildToken(user);
                    return new LoginResponse() { Token = token, User = user };
                }
                else {
                    this.HttpContext.Response.StatusCode = 401;
                    return new LoginResponse() { ErrorMessage = "User not exist", User = null };
                }

            }
            else {
                this.HttpContext.Response.StatusCode = 401;
                return new LoginResponse() { ErrorMessage = "Empty login or password", User = null };
            }
        }
    }
}

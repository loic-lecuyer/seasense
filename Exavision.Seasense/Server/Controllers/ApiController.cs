namespace Exavision.Seasense.Server.Controllers {
    using Exavision.Seasense.Api.Http.Login;
    using Exavision.Seasense.Api.Http.Setting;
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



        private readonly IUserRepository userRepository;
        private readonly ISiteService siteService;
        private readonly ITokenService _tokenService;

        public ApiController(ITokenService tokenService, IUserRepository userRepository,ISiteService siteService) {
            _tokenService = tokenService;
            this.userRepository = userRepository;
            this.siteService = siteService;
        }


        [HttpPost]
        [Authorize]
        [Route("token/validate")]
        public ValidateTokenResponse ValidateToken([FromBody] ValidateTokenRequest request) {
            return new ValidateTokenResponse();
        }


        [HttpGet]
        [Authorize]
        [Route("setting")]
        public SettingResponse Logout([FromBody] SettingRequest request) {
            SettingResponse settingResponse = new SettingResponse();
            settingResponse.Site = this.siteService.LoadSetting();
            return settingResponse;
        }

        [HttpPost]
        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [Route("login")]
        public LoginResponse Login([FromBody] LoginRequest request) {
            if (!String.IsNullOrEmpty(request.Login) && !String.IsNullOrEmpty(request.PasswordHash)) {
                User user = this.userRepository.FindUser(request.Login, request.PasswordHash.ToLower());
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

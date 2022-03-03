namespace Exavision.Seasense.Server.Controllers {
    using Exavision.Seasense.Api.Http.Login;
    using Exavision.Seasense.Api.Http.Logout;
    using Exavision.Seasense.Api.Http.Setting;
    using Exavision.Seasense.Api.Http.Token;
    using Exavision.Seasense.Materials.Seamos;
    using Exavision.Seasense.Server.Attributes;
    using Exavision.Seasense.Server.Services;
    using Exavision.Seasense.Shared.Models;
    using Exavision.Seasense.Shared.Settings;
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

        public ApiController(ITokenService tokenService, IUserRepository userRepository, ISiteService siteService) {
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

        [HttpPost]
        [Authorize]
        [Route("setting/get")]
        public GetSettingResponse Setting([FromBody] GetSettingRequest request) {
            GetSettingResponse settingResponse = new GetSettingResponse();
            settingResponse.Site = this.siteService.LoadSetting();

            return settingResponse;
        }

        [HttpPost]
        [Authorize]
        [Route("setting/set")]
        public SetSettingResponse Setting([FromBody] SetSettingRequest request) {
            siteService.Stop();
            SetSettingResponse settingResponse = new SetSettingResponse();
            this.siteService.SaveSetting(request.Site);
            settingResponse.Site = this.siteService.LoadSetting();
            siteService.Start();
            return settingResponse;
        }

        [HttpPost]
        [Authorize]
        [Route("unit/create/empty")]
        public UnitCreateEmptyResponse UnitCreateEmpty([FromBody] UnitCreateEmptyRequest request) {
            UnitCreateEmptyResponse response = new UnitCreateEmptyResponse();
            if (request.UnitType.Equals("SeamosUnit")) {
                SeamosUnit unit = new SeamosUnit();
                SettingMaterial setting = unit.GetSettingMaterial();
                response.SettingUnit = setting;
            }
            return response;
        }

        [HttpPost]
        [Authorize]
        [Route("logout")]
        public LogoutResponse Logout([FromBody] LogoutRequest request) {
            LogoutResponse logoutResponse = new LogoutResponse();

            return logoutResponse;
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

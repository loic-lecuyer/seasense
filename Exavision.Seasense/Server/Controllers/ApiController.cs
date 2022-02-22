namespace Exavision.Seasense.Server.Controllers {
    using Exavision.Seasense.Api.Http.Login;
    using Exavision.Seasense.Server.Services;
    using Exavision.Seasense.Shared.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using System;

    /// <summary>
    /// Defines the <see cref="ApiController" />.
    /// </summary>
    [Route("api")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class ApiController : Controller {


        private readonly IConfiguration _config;
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;

        public ApiController(IConfiguration config, ITokenService tokenService, IUserRepository userRepository) {
            _config = config;
            _tokenService = tokenService;
            _userRepository = userRepository;
        }


        /// <summary>
        /// The Login.
        /// </summary>
        /// <param name="request">The request<see cref="LoginRequest"/>.</param>
        /// <returns>The <see cref="LoginResponse"/>.</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public LoginResponse Login([FromBody] LoginRequest request) {
            if (!String.IsNullOrEmpty(request.Login) && !String.IsNullOrEmpty(request.PasswordHash)) {
                User user = this._userRepository.FindUser(request.Login, request.PasswordHash.ToLower());
                if (user != null) {

                    string token = _tokenService.BuildToken(
                        _config["Jwt:Key"].ToString(),
                        _config["Jwt:Issuer"].ToString(),
                        user);
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

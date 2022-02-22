namespace Exavision.Seasense.Server.Controllers
{
    using Exavision.Api.Http.Login;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using Serilog;
    using System;
    using System.Collections.Generic;
    using System.IO;

    /// <summary>
    /// Defines the <see cref="ApiController" />.
    /// </summary>
    [Route("api")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class ApiController : Controller
    {
        /// <summary>
        /// Defines the adminHash.
        /// </summary>
        internal const string adminHash = "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec";

        /// <summary>
        /// Defines the userHash.
        /// </summary>
        internal const string userHash = "b14361404c078ffd549c03db443c3fede2f3e534d73f78f77301ed97d4a436a9fd9db05ee8b325c0ad36438b43fec8510c204fc1c1edb21d0941c00e9e2c1ce2";

        /// <summary>
        /// Defines the savHash.
        /// </summary>
        internal const string savHash = "7bc8ae368f16b95e59443f95a91b777b3d8fe95c21a3bbac3dfc25e55cefa3e033c6996f718b30fb0255a5aee4155da75db1d8a6216658eae494f6e04f049587";

        /// <summary>
        /// Defines the contentRoot.
        /// </summary>
        private readonly string contentRoot;

        /// <summary>
        /// Initializes a new instance of the <see cref="ApiController"/> class.
        /// </summary>
        /// <param name="env">The env<see cref="IWebHostEnvironment"/>.</param>
        /// <param name="configurationService">The configurationService<see cref="ConfigurationService"/>.</param>
        /// <param name="unitService">The unitService<see cref="UnitService"/>.</param>
        /// <param name="jwtService">The jwtService<see cref="JwtService"/>.</param>
        public ApiController(IWebHostEnvironment env) {
            this.contentRoot = env.ContentRootPath;
        }

        
        /// <summary>
        /// The Login.
        /// </summary>
        /// <param name="request">The request<see cref="LoginRequest"/>.</param>
        /// <returns>The <see cref="LoginResponse"/>.</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public LoginResponse Login([FromBody] LoginRequest request)
        {
            if (!String.IsNullOrEmpty(request.Login) && !String.IsNullOrEmpty(request.PasswordHash))
            {
                // Token = this.jwtService.CreateToken(request.Login, Request.HttpContext.Connection.RemoteIpAddress.ToString())
                if (request.Login.Equals("admin") && request.PasswordHash.ToLower().Equals(adminHash))
                {

                    return new LoginResponse() { Success = true, Token ="toto", Role = "Admin" };
                }
                else if (request.Login.Equals("sav") && request.PasswordHash.ToLower().Equals(savHash))
                {

                    return new LoginResponse() { Success = true, Token = "toto", Role = "Sav" };
                }
                else if (request.Login.Equals("user") && request.PasswordHash.ToLower().Equals(userHash))
                {

                    return new LoginResponse() { Success = true, Token = "toto", Role = "User" };
                }
                else
                {
                    this.HttpContext.Response.StatusCode = 401;
                    return new LoginResponse() { Success = false, ErrorMessage = "Invalid login/password", Role = null };
                }
            }
            else
            {
                this.HttpContext.Response.StatusCode = 401;
                return new LoginResponse() { Success = false, ErrorMessage = "Empty login or password", Role = null };
            }
        }
    }
}

using Exavision.Seasense.Server.Services;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Threading.Tasks;

namespace Exavision.Seasense.Server.Middlewares {
    public class JwtMiddleware {
        private readonly RequestDelegate next;
        private readonly ITokenService tokenService;
        private readonly IUserRepository userRepository;
        public JwtMiddleware(RequestDelegate next, ITokenService tokenService, IUserRepository userRepository) {
            this.next = next;
            this.tokenService = tokenService;
            this.userRepository = userRepository;

        }

        public async Task Invoke(HttpContext context) {


            string authorizationHeader = context.Request.Headers["Authorization"];
            var token = authorizationHeader?.Split(" ").Last();
            if (token != null) AttachUserToContext(context, token);
            await next(context);
        }

        private void AttachUserToContext(HttpContext context, string token) {
            try {
                string userId = null;
                if (this.tokenService.IsTokenValid(token, out userId)) {
                    context.Items["User"] = this.userRepository.FindUserById(userId);
                }

            }
            catch {
                // do nothing if jwt validation fails
                // user is not attached to context so request won't have access to secure routes
            }
        }
    }
}

using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace Exavision.Seasense.Server.Services {
    public interface IWebSocketService {
        Task HandleRequest(HttpContext context, Func<Task> next);
    }
}

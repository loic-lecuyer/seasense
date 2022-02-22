using Exavision.Seasense.Shared.Models;

namespace Exavision.Seasense.Server.Services {
    public interface ITokenService {
        string BuildToken(User user);
        bool IsTokenValid(string token, out string userId);
    }
}

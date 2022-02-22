using Exavision.Seasense.Shared.Models;

namespace Exavision.Seasense.Server.Services {
    public interface ITokenService {
        string BuildToken(string key, string issuer, User user);
        bool IsTokenValid(string key, string issuer, string token);
    }
}

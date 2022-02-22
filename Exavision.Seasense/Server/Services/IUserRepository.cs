using Exavision.Seasense.Shared.Models;

namespace Exavision.Seasense.Server.Services {
    public interface IUserRepository {
        User FindUser(string login, string passwordHash);
        User FindUserById(string userId);
    }
}

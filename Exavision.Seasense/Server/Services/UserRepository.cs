using Exavision.Seasense.Shared.Models;
using System.Collections.Generic;
using System.Linq;

namespace Exavision.Seasense.Server.Services {
    public class UserRepository : IUserRepository {
        private readonly List<User> users;

        public UserRepository() {
            this.users = new List<User>();
            this.users.Add(new User() {
                Id = "b73053d8-8049-43ed-8722-687dc4905b5b",
                Login = "user",
                PasswordHash = "b14361404c078ffd549c03db443c3fede2f3e534d73f78f77301ed97d4a436a9fd9db05ee8b325c0ad36438b43fec8510c204fc1c1edb21d0941c00e9e2c1ce2",
                Role = Role.User
            });
            this.users.Add(new User() {
                Id = "c86fd57e-e41d-496f-89a5-c32151800342",
                Login = "admin",
                PasswordHash = "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec",
                Role = Role.Admin
            });
            this.users.Add(new User() {
                Id = "055fbe96-82e4-49b2-822c-d4aafd1218cd",
                Login = "sav",
                PasswordHash = "7bc8ae368f16b95e59443f95a91b777b3d8fe95c21a3bbac3dfc25e55cefa3e033c6996f718b30fb0255a5aee4155da75db1d8a6216658eae494f6e04f049587",
                Role = Role.Sav
            });
        }

        public User FindUser(string login, string passwordHash) {
            return (from u in users where u.Login.Equals(login) && u.PasswordHash.Equals(passwordHash) select u).FirstOrDefault();
        }
    }
}

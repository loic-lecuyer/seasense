using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;


namespace Exavision.Seasense.Shared.Models {
    public enum Role {
        User, Admin, Sav
    }
    public class User {

        [Required]
        public string Id { get; set; }

        [Required]
        public Role Role { get; set; }

        [Required]
        public string Login { get; set; }
        [JsonIgnore]
        [Required]
        public string PasswordHash { get; set; }
    }
}

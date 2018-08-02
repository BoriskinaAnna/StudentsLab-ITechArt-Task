using JetBrains.Annotations;

namespace ITechArt.StudentsLab.DataAccessLayer.Models
{
    public class UserResponse
    {
        [NotNull]
        public int Id { get; set; }
        [NotNull]
        public string FirstName { get; set; }
        [NotNull]
        public string LastName { get; set; }
        [NotNull]
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] Salt { get; set; }
    }
}

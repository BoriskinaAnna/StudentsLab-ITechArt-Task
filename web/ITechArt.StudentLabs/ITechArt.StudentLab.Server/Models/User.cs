using ITechArt.StudentLab.Server.Common;
using JetBrains.Annotations;

namespace ITechArt.StudentLab.Server.Models
{
    public class ModelUser
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

using JetBrains.Annotations;

namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class UserModel
    {
        [NotNull]
        public int Id { get; set; }
        [NotNull]
        public string FirstName { get; set; }
        [NotNull]
        public string LastName { get; set; }
        [NotNull]
        public string Email { get; set; }

        public UserModel(
            int id,
            string firstName,
            string lastName,
            string email
            )
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
        }
    }
}

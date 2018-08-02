using JetBrains.Annotations;

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class ResponseModel
    {
        [NotNull]
        public int Id { get; set; }
        [NotNull]
        public string FirstName { get; set; }
        [NotNull]
        public string LastName { get; set; }
        [NotNull]
        public string Email { get; set; }
        public ResponseModel(
            [NotNull] int id,
            [NotNull] string firstName,
            [NotNull] string lastName,
            [NotNull] string email
        )
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
        }
    }
}

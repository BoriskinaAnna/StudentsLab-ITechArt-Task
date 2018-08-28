namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class UserModel
    {
        public int Id { get; }
        public string FirstName { get; }
        public string LastName { get; }
        public string Email { get; }
        public string Role { get; }
        public UserModel(
            int id,
            string firstName,
            string lastName,
            string email,
            string role
            )
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Role = role;
        }
    }
}

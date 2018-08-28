namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class RegisterUserModel
    {
        public string FirstName { get; }
        public string SecondName { get; }
        public string Email { get; }
        public string Password { get; }

        public RegisterUserModel(
            string firstName,
            string secondName,
            string email,
            string password
        )
        {
            FirstName = firstName;
            SecondName = secondName;
            Email = email;
            Password = password;
        }
    }
}

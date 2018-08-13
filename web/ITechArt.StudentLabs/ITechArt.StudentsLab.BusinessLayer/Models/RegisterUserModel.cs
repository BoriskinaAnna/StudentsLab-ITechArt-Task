namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class RegisterUserModel
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

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

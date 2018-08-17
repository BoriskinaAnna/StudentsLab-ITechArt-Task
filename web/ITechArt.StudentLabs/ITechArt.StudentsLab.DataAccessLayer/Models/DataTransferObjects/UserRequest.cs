namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class UserRequest
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] Salt { get; set; }
        public string Role { get; set; }
    }
}

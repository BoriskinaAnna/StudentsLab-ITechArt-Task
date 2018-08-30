namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class UserNameModel
    {
        public int Id { get; }
        public string FirstName { get; }
        public string LastName { get; }

        public UserNameModel(
            int id,
            string firstName,
            string lastName
        )
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
        }
    }
}

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class UserNameResponse
    {
        public int Id { get; }
        public string FirstName { get; }
        public string LastName { get; }

        public UserNameResponse(
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class UserNameModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

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

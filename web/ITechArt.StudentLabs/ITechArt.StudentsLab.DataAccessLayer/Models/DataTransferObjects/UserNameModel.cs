using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
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

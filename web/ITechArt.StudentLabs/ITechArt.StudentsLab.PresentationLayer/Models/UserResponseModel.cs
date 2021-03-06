﻿namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class UserResponseModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }

        public UserResponseModel(
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

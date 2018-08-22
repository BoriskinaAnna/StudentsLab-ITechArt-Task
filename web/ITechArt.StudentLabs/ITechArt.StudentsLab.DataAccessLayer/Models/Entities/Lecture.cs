using System;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.Entities
{
    class Lecture
    {
        public int Id { get; }

        public string LectorFirstName { get; }

        public string LectorLastName { get; }

        public string Place { get; }

        public string Theme { get; }

        public DateTime DateTime { get; }

        public DateTime Duration { get; }

    }
}

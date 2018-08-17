using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.Entities
{
    class Lecture
    {
        public int Id { get; set; }

        public int LabId { get; set; }

        public string Lector { get; set; }

        public string Place { get; set; }

        public string Theme { get; set; }

        public DateTime DateTime { get; set; }

        public DateTime Durstion { get; set; }
    }
}

using System;

namespace ITechArt.StudentsLab.DataAccessLayer.Models
{
    public class Lab
    {
        public int Id { get; set; }

        public string LabType { get; set; }

        public string City { get; set; }

        public string Name { get; set; }

        public DateTime AdmissionStart { get; set; }

        public DateTime AdmissionEnd { get; set; }

        public DateTime TrainingStart { get; set; }

        public DateTime TrainingEnd { get; set; }

        public bool IsDraft { get; set; }
    }
}

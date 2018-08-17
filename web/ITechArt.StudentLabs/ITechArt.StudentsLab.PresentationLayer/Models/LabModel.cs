using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class LabModel
    {
        public int Id { get; }

        public string Type { get; }

        public string City { get; }

        public string Name { get; }

        public DateTime AdmissionStart { get; }

        public DateTime AdmissionEnd { get; }

        public DateTime TrainingStart { get; }

        public DateTime TrainingEnd { get; }

        public bool IsDraft { get; }

        public LabModel(
            int id,
            string type,
            string city,
            string name,
            DateTime admissionStart,
            DateTime admissionEnd,
            DateTime trainingStart,
            DateTime trainingEnd,
            bool isDraft
        )
        {
            Id = id;
            Type = type;
            City = city;
            Name = name;
            AdmissionStart = admissionStart;
            AdmissionEnd = admissionEnd;
            TrainingStart = trainingStart;
            TrainingEnd = trainingEnd;
            IsDraft = isDraft;
        }
    }
}

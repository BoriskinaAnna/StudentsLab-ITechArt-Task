using System;

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class LabResponse
    {
        public int Id { get; }

        public string LabType { get; }

        public string City { get; }

        public string Name { get; }

        public DateTime AdmissionStart { get; }

        public DateTime AdmissionEnd { get; }

        public DateTime TrainingStart { get; }

        public DateTime TrainingEnd { get; }

        public bool IsDraft { get; }

        public LabResponse(
            int id,
            string labType,
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
            LabType = labType;
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

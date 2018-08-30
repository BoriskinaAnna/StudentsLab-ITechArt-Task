using System;

namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class FeedbackDateModel
    {
        public int Id { get; }

        public int LabId { get; }

        public DateTime Date { get; }

        public FeedbackDateModel(
            int id,
            int labId,
            DateTime date
        )
        {
            Id = id;
            LabId = labId;
            Date = date;
        }
    }
}

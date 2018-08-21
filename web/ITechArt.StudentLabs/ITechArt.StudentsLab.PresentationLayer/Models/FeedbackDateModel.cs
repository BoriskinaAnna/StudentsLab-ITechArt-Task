using System;

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class FeedbackDateModel
    {
        public int Id { get; set; }

        public int LabId { get; set; }

        public DateTime Date { get; set; }
       
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

using System;

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class FeedbackDateResponse
    {
        public int Id { get; }

        public int LabId { get; }

        public DateTime Date { get; }
       
        public FeedbackDateResponse(
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

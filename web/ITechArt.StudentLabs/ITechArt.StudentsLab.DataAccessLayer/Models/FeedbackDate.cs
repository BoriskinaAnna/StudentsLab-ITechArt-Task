using System;

namespace ITechArt.StudentsLab.DataAccessLayer.Models
{
    public class FeedbackDate
    {
        public int Id { get; set; }

        public int LabId { get; set; }

        public DateTime Date { get; set; }
    }
}

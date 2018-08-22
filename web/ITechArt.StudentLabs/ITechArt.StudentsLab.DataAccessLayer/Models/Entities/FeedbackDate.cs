using System;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.Entities
{
    public class FeedbackDate
    {
        public int Id { get; set; }

        public int LabId { get; set; }

        public DateTime Date { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.Entities
{
    public class FeedbackDate
    {
        public int Id { get; set; }

        public int LabId { get; set; }

        public DateTime Date { get; set; }
    }
}

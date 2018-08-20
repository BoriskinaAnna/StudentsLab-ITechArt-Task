using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class FeedbackDateModel
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        public FeedbackDateModel(
            int id,
            DateTime date
        )
        {
            Id = id;
            Date = date;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
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

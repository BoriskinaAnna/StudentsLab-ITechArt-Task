using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class FeedbackAnswerResponseModel
    {

        public string Answer { get; set; }

        public int AnswerId { get; set; }

        public FeedbackAnswerResponseModel(
            int answerId,
            string answer
        )
        {
            Answer = answer;
            AnswerId = answerId;
        }
    }
}

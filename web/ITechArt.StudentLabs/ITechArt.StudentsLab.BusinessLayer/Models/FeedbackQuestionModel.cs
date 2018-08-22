using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class FeedbackQuestionModel
    {
        public string Question { get; set; }

        public int QuestionId { get; set; }

        public FeedbackQuestionModel(
            string question,
            int questionId
        )
        {
            Question = question;
            QuestionId = questionId;
        }
    }
}

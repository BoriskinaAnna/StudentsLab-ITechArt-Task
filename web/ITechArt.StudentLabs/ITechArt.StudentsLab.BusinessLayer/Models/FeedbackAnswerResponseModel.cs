using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class FeedbackAnswerResponseModel
    {
        public string Answer { get; set; }

        public int AnswerId { get; set; }

        public int QuestionId { get; set; }

        public FeedbackAnswerResponseModel(
            int answerId,
            string answer,
            int questionId
        )
        {
            QuestionId = questionId;
            Answer = answer;
            AnswerId = answerId;
        }
    }
}

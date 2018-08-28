using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class FeedbackAnswerResponseModel
    {
        public string Answer { get; }

        public int AnswerId { get; }

        public int QuestionId { get; }

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

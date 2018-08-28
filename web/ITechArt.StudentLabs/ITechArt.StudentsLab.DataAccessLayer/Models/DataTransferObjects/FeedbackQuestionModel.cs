using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class FeedbackQuestionModel
    {
        public string Question { get; }

        public int QuestionId { get; }

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

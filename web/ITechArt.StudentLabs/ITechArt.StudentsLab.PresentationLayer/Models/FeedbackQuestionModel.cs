using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.PresentationLayer.Models
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

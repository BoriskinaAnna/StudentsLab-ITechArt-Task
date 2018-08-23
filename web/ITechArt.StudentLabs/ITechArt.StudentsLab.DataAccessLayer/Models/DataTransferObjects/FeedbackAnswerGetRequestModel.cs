using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class FeedbackAnswerRequestModel
    {
        public int FeedbackQuestionId { get; set; }

        public int StudentId { get; set; }

        public int MentorId { get; set; }

        public int FeedbackDateId { get; set; }

        public FeedbackAnswerRequestModel(
            int feedbackQuestionId,
            int studentId,
            int mentorId,
            int feedbackDateId
        )
        {
            FeedbackQuestionId = feedbackQuestionId;
            StudentId = studentId;
            MentorId = mentorId;
            FeedbackDateId = feedbackDateId;
        }
    }
}

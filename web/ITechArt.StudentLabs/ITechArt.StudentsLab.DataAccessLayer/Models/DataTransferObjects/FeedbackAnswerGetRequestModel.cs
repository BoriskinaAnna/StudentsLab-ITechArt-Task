using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class FeedbackAnswerRequestModel
    {
        public int StudentId { get; }

        public int MentorId { get; }

        public int FeedbackDateId { get; }

        public FeedbackAnswerRequestModel(
            int studentId,
            int mentorId,
            int feedbackDateId
        )
        {
            StudentId = studentId;
            MentorId = mentorId;
            FeedbackDateId = feedbackDateId;
        }
    }
}

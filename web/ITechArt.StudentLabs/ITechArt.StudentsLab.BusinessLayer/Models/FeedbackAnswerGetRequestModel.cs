using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class FeedbackAnswerRequestModel
    {
        public int StudentId { get; set; }

        public int MentorId { get; set; }

        public int FeedbackDateId { get; set; }

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

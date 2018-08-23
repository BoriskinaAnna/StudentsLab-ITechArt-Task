using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class FeedbackAnswerPostRequestModel
    {
        public int[] QuestionId { get; set; }

        public string[] Answers { get; set; }

        public int StudentId { get; set; }

        public int MentorId { get; set; }

        public int FeedbackDateId { get; set; }


        public FeedbackAnswerPostRequestModel(
            int[] questionId,
            int studentId,
            int mentorId,
            int feedbackDateId,
            string[] answers
        )
        {
            QuestionId = questionId;
            StudentId = studentId;
            MentorId = mentorId;
            FeedbackDateId = feedbackDateId;
            Answers = answers;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class FeedbackAnswerPostRequestModel
    {
        public int[] QuestionId { get; }

        public string[] Answers { get; }

        public int StudentId { get; }

        public int MentorId { get; }

        public int FeedbackDateId { get; }


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

namespace ITechArt.StudentsLab.BusinessLayer.Models
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

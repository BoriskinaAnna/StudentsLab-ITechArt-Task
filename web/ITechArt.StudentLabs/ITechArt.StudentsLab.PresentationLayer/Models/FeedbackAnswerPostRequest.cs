namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class FeedbackAnswerPostRequest
    {
        public int[] QuestionId { get;}

        public string[] Answers { get;}

        public int StudentId { get; }

        public int MentorId { get; }

        public int FeedbackDateId { get; }


        public FeedbackAnswerPostRequest(
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

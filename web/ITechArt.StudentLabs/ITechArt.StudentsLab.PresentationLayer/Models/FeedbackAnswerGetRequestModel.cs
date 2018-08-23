namespace ITechArt.StudentsLab.PresentationLayer.Models
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

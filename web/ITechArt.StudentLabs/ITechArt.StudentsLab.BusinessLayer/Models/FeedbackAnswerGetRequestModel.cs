namespace ITechArt.StudentsLab.BusinessLayer.Models
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

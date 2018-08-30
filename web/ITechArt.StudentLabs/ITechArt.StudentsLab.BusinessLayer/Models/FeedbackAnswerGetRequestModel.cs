namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class FeedbackAnswerGetRequestModel
    {
        public int StudentId { get; }

        public int MentorId { get; }

        public int FeedbackDateId { get; }

        public FeedbackAnswerGetRequestModel(
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

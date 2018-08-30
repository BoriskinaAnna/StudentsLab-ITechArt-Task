namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class FeedbackAnswerGetRequest
    {
        public int StudentId { get; }

        public int MentorId { get; }

        public int FeedbackDateId { get;}

        public FeedbackAnswerGetRequest(
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

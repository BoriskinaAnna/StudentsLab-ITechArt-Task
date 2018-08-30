namespace ITechArt.StudentsLab.DataAccessLayer.Models
{
    public class FeedbackAnswerGetRequest
    {
        public int StudentId { get; set; }

        public int MentorId { get; set; }

        public int FeedbackDateId { get; set; }

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

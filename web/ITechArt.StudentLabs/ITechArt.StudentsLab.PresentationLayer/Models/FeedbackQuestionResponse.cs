namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class FeedbackQuestionResponse
    {
        public string Question { get; }

        public int QuestionId { get; }

        public FeedbackQuestionResponse(
            string question,
            int questionId
        )
        {
            Question = question;
            QuestionId = questionId;
        }
    }
}

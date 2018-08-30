namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class FeedbackAnswerResponse
    {
        public string Answer { get; }

        public int AnswerId { get; }

        public int QuestionId { get; }

        public FeedbackAnswerResponse(
            int answerId,
            string answer,
            int questionId
        )
        {
            QuestionId = questionId;
            Answer = answer;
            AnswerId = answerId;
        }
    }
}

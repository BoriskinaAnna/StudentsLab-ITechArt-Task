namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class FeedbackAnswerResponseModel
    {
        public string Answer { get; set; }

        public int AnswerId { get; set; }

        public int QuestionId { get; set; }

        public FeedbackAnswerResponseModel(
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

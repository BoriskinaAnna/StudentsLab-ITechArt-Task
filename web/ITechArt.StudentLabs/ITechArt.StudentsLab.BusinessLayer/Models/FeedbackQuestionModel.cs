namespace ITechArt.StudentsLab.BusinessLayer.Models
{
    public class FeedbackQuestionModel
    {
        public string Question { get; }

        public int QuestionId { get; }

        public FeedbackQuestionModel(
            string question,
            int questionId
        )
        {
            Question = question;
            QuestionId = questionId;
        }
    }
}

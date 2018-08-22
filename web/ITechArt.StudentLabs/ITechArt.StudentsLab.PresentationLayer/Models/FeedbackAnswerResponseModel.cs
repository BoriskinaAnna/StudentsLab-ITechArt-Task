namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class FeedbackAnswerResponseModel
    {
        public string Answer { get; set; }

        public int AnswerId { get; set; }

        public FeedbackAnswerResponseModel(
            int answerId,
            string answer
        )
        {
            Answer = answer;
            AnswerId = answerId;
        }
    }
}

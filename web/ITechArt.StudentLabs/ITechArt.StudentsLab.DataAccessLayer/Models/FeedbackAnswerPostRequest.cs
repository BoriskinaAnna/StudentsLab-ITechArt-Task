namespace ITechArt.StudentsLab.DataAccessLayer.Models.Entities
{
     public class FeedbackAnswerPostRequest
    {
        public int[] QuestionId { get; set; }

        public string[] Answers { get; set; }

        public int StudentId { get; set; }

        public int MentorId { get; set; }

        public int FeedbackDateId { get; set; }
    }
}

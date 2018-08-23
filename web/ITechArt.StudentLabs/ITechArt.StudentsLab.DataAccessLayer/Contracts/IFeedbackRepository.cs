using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface IFeedbackRepository
    {
        Task AddOrUpdateFeedbackAnswers(FeedbackAnswerPostRequestModel feedbackAnswers);
        Task<IEnumerable<FeedbackDateModel>> GetFeedbackDates(int labId);
        Task<int> AddOrUpdateFeedbackDates(FeedbackDateModel feedbackDate);
        Task<FeedbackAnswerResponseModel> GetFeedbackAnswer(FeedbackAnswerRequestModel feedbackRequest);
        Task<IEnumerable<FeedbackQuestionModel>> GetFeedbackQuestions(int labId);
    }
}

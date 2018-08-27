using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;

namespace ITechArt.StudentsLab.BusinessLayer.Contracts
{
    public interface IFeedbackService
    {

        Task<IEnumerable<FeedbackDateModel>> GetFeedbackDates(int labId);

        Task<FeedbackDateModel> AddOrUpdateFeedbackDate(FeedbackDateModel feedbackDate);

        Task<IEnumerable<FeedbackAnswerResponseModel>> GetFeedbackAnswers(FeedbackAnswerRequestModel feedbackRequest);

        Task<IEnumerable<FeedbackQuestionModel>> GetFeedbackQuestions(int labId);

        Task AddOrUpdateFeedbackAnswer(FeedbackAnswerPostRequestModel feedbackAnswer);
    }
}

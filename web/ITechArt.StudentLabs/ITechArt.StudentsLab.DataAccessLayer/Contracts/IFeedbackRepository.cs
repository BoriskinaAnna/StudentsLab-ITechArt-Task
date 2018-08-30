using ITechArt.StudentsLab.DataAccessLayer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface IFeedbackRepository
    {
        Task UpsertFeedbackAnswers(FeedbackAnswerPostRequest feedbackAnswers);
        Task<IEnumerable<FeedbackDate>> GetFeedbackDates(int labId);
        Task<int> UpsertFeedbackDates(FeedbackDate feedbackDate);
        Task<IEnumerable<FeedbackAnswerResponse>> GetFeedbackAnswers(FeedbackAnswerGetRequest feedbackRequest);
        Task<IEnumerable<FeedbackQuestion>> GetFeedbackQuestions(int labId);
    }
}

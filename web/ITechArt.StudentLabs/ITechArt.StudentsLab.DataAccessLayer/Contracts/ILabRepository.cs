using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface ILabRepository
    {
        Task<IEnumerable<LabModel>> GetLabs();
        Task<IEnumerable<FeedbackDateModel>> GetFeedbackDates(int labId);
        Task<int> AddOrUpdateFeedbackDates(FeedbackDateModel feedbackDate);
        Task<FeedbackAnswerResponseModel> GetFeedbackAnswer(FeedbackAnswerRequestModel feedbackRequest);
        Task<IEnumerable<FeedbackQuestionModel>> GetFeedbackQuestions(int labId);
        Task<IEnumerable<UserNameModel>> GetStudentByMentorId(int mentorId);
        Task AddOrUpdateFeedbackAnswers(FeedbackAnswerPostRequestModel feedbackAnswers);
    }
}

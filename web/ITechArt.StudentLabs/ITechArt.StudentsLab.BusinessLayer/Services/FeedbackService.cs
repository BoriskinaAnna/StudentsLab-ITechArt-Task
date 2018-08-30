using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using ITechArt.StudentsLab.BusinessLayer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models.Entities;
using Mapster;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class FeedbackService: IFeedbackService
    {
        private readonly IFeedbackRepository _feedbackRepository;


        public FeedbackService(IFeedbackRepository feedbackRepository)
        {
            _feedbackRepository = feedbackRepository;
        }

        public async Task<IEnumerable<FeedbackDateModel>> GetFeedbackDates(int labId)
        {
            IEnumerable<FeedbackDate> feedbackDates = await _feedbackRepository.GetFeedbackDates(labId);

            return feedbackDates.Adapt<IEnumerable<FeedbackDateModel>>();
        }

        public async Task<FeedbackDateModel> UpsertFeedbackDate(FeedbackDateModel feedbackDate)
        {
            FeedbackDate feedbackDateRequest = feedbackDate.Adapt<FeedbackDate>();

            int feedbackDateResponseId = await _feedbackRepository.UpsertFeedbackDates(feedbackDateRequest);

            return new FeedbackDateModel(
                (feedbackDateResponseId != 0) ? feedbackDateResponseId : feedbackDate.Id,
                feedbackDate.LabId,
                feedbackDate.Date
            );
        }

        public async Task UpsertFeedbackAnswer(FeedbackAnswerPostRequestModel feedbackAnswer)
        {
            FeedbackAnswerPostRequest feedbackAnswerRequest = feedbackAnswer.Adapt<FeedbackAnswerPostRequest>();

            await _feedbackRepository.UpsertFeedbackAnswers(feedbackAnswerRequest);
        }

        public async Task<IEnumerable<FeedbackAnswerResponseModel>> GetFeedbackAnswers(FeedbackAnswerGetRequestModel feedbackRequest)
        {
            FeedbackAnswerGetRequest dalFeedback = new FeedbackAnswerGetRequest(
                feedbackRequest.StudentId,
                feedbackRequest.MentorId,
                feedbackRequest.FeedbackDateId
            );

            IEnumerable <FeedbackAnswerResponse> feedbackDates = await _feedbackRepository.GetFeedbackAnswers(dalFeedback);

            return feedbackDates.Adapt<IEnumerable<FeedbackAnswerResponseModel>>();
        }

        public async Task<IEnumerable<FeedbackQuestionModel>> GetFeedbackQuestions(int labId)
        {
            IEnumerable<FeedbackQuestion> feedbackDates = await _feedbackRepository.GetFeedbackQuestions(labId);

            return feedbackDates.Adapt<IEnumerable<FeedbackQuestionModel>>();
        }
    }
}

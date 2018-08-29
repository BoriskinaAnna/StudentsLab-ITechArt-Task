using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using DalFeedbackDateModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackDateModel;
using FeedbackDateModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackDateModel;
using DalFeedbackAnswerRequestModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackAnswerRequestModel;
using DalFeedbackAnswerResponseModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackAnswerResponseModel;
using FeedbackAnswerResponseModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerResponseModel;
using FeedbackAnswerRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerRequestModel;
using DalFeedbackQuestionModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackQuestionModel;
using FeedbackQuestionModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackQuestionModel;
using DalFeedbackAnswerPostRequestModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackAnswerPostRequestModel;
using FeedbackAnswerPostRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerPostRequestModel;
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
            IEnumerable<DalFeedbackDateModel> feedbackDates = await _feedbackRepository.GetFeedbackDates(labId);

            return feedbackDates.Adapt<IEnumerable<FeedbackDateModel>>();
        }

        public async Task<FeedbackDateModel> UpsertFeedbackDate(FeedbackDateModel feedbackDate)
        {
            DalFeedbackDateModel feedbackDateRequest = feedbackDate.Adapt<DalFeedbackDateModel>();

            int feedbackDateResponseId = await _feedbackRepository.UpsertFeedbackDates(feedbackDateRequest);

            return new FeedbackDateModel(
                (feedbackDateResponseId != 0) ? feedbackDateResponseId : feedbackDate.Id,
                feedbackDate.LabId,
                feedbackDate.Date
            );
        }

        public async Task UpsertFeedbackAnswer(FeedbackAnswerPostRequestModel feedbackAnswer)
        {
            DalFeedbackAnswerPostRequestModel feedbackAnswerRequest = feedbackAnswer.Adapt<DalFeedbackAnswerPostRequestModel>();

            await _feedbackRepository.UpsertFeedbackAnswers(feedbackAnswerRequest);
        }

        public async Task<IEnumerable<FeedbackAnswerResponseModel>> GetFeedbackAnswers(FeedbackAnswerRequestModel feedbackRequest)
        {
            DalFeedbackAnswerRequestModel dalFeedback = new DalFeedbackAnswerRequestModel(
                feedbackRequest.StudentId,
                feedbackRequest.MentorId,
                feedbackRequest.FeedbackDateId
            );

            IEnumerable <DalFeedbackAnswerResponseModel> feedbackDates = await _feedbackRepository.GetFeedbackAnswers(dalFeedback);

            return feedbackDates.Adapt<IEnumerable<FeedbackAnswerResponseModel>>();
        }

        public async Task<IEnumerable<FeedbackQuestionModel>> GetFeedbackQuestions(int labId)
        {
            IEnumerable<DalFeedbackQuestionModel> feedbackDates = await _feedbackRepository.GetFeedbackQuestions(labId);

            return feedbackDates.Adapt<IEnumerable<FeedbackQuestionModel>>();
        }
    }
}

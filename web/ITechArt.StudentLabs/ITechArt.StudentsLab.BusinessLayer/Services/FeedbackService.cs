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
using System.Linq;
using AutoMapper;

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
            return feedbackDates.Select(Mapper.Map<FeedbackDateModel>);
        }

        public async Task<FeedbackDateModel> AddOrUpdateFeedbackDate(FeedbackDateModel feedbackDate)
        {
            DalFeedbackDateModel feedbackDateRequest = Mapper.Map<DalFeedbackDateModel>(feedbackDate);

            int feedbackDateResponseId = await _feedbackRepository.AddOrUpdateFeedbackDates(feedbackDateRequest);

            return new FeedbackDateModel
            (
                (feedbackDateResponseId != 0) ? feedbackDateResponseId : feedbackDate.Id,
                feedbackDate.LabId,
                feedbackDate.Date
            );
        }

        public async Task AddOrUpdateFeedbackAnswer(FeedbackAnswerPostRequestModel feedbackAnswer)
        {
            DalFeedbackAnswerPostRequestModel feedbackAnswerRequest = Mapper.Map<DalFeedbackAnswerPostRequestModel>(feedbackAnswer);

            await _feedbackRepository.AddOrUpdateFeedbackAnswers(feedbackAnswerRequest);
        }

        public async Task<FeedbackAnswerResponseModel> GetFeedbackAnswer(FeedbackAnswerRequestModel feedbackRequest)
        {
            DalFeedbackAnswerRequestModel dalFeedback = new DalFeedbackAnswerRequestModel
            (
                feedbackRequest.FeedbackQuestionId,
                feedbackRequest.StudentId,
                feedbackRequest.MentorId,
                feedbackRequest.FeedbackDateId
            );

            DalFeedbackAnswerResponseModel feedbackDates = await _feedbackRepository.GetFeedbackAnswer(dalFeedback);

            return Mapper.Map<FeedbackAnswerResponseModel>(feedbackDates);
        }

        public async Task<IEnumerable<FeedbackQuestionModel>> GetFeedbackQuestions(int labId)
        {
            IEnumerable<DalFeedbackQuestionModel> feedbackDates = await _feedbackRepository.GetFeedbackQuestions(labId);

            return feedbackDates.Select(Mapper.Map<FeedbackQuestionModel>);
        }
    }
}

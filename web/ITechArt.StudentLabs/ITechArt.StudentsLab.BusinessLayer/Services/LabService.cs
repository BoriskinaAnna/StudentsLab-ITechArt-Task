using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using DalLabModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.LabModel;
using LabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using DalFeedbackDateModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackDateModel;
using FeedbackDateModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackDateModel;
using DalFeedbackAnswerRequestModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackAnswerRequestModel;
using DalFeedbackAnswerResponseModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackAnswerResponseModel;
using FeedbackAnswerResponseModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerResponseModel;
using FeedbackAnswerRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerRequestModel;
using DalUserNameModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.UserNameModel;
using UserNameModel = ITechArt.StudentsLab.BusinessLayer.Models.UserNameModel;
using DalFeedbackQuestionModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackQuestionModel;
using FeedbackQuestionModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackQuestionModel;
using DalFeedbackAnswerPostRequestModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackAnswerPostRequestModel;
using FeedbackAnswerPostRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerPostRequestModel;
using System.Linq;
using AutoMapper;
using System;
using ITechArt.StudentsLab.BusinessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class LabService : ILabService
    {
        private readonly ILabRepository _labRepository;

        public LabService (ILabRepository labRepository){
            _labRepository = labRepository;
        }

        public async Task<IEnumerable<LabModel>> GetLabs()
        {
            IEnumerable<DalLabModel> labs = await _labRepository.GetLabs();
            return labs.Select(Mapper.Map<LabModel>);
        }

        public async Task<IEnumerable<FeedbackDateModel>> GetFeedbackDates(int labId)
        {
            IEnumerable<DalFeedbackDateModel> feedbackDates = await _labRepository.GetFeedbackDates(labId);
            return feedbackDates.Select(Mapper.Map<FeedbackDateModel>);
        }

        public async Task<FeedbackDateModel> AddOrUpdateFeedbackDate(FeedbackDateModel feedbackDate)
        {
            DalFeedbackDateModel feedbackDateRequest = Mapper.Map<DalFeedbackDateModel>(feedbackDate);

            int feedbackDateResponseId = await _labRepository.AddOrUpdateFeedbackDates(feedbackDateRequest);

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

           await _labRepository.AddOrUpdateFeedbackAnswers(feedbackAnswerRequest);
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

            DalFeedbackAnswerResponseModel feedbackDates = await _labRepository.GetFeedbackAnswer(dalFeedback);

            return Mapper.Map<FeedbackAnswerResponseModel>(feedbackDates);
        }

        public async Task<IEnumerable<FeedbackQuestionModel>> GetFeedbackQuestions(int labId)
        {
            IEnumerable<DalFeedbackQuestionModel> feedbackDates = await _labRepository.GetFeedbackQuestions(labId);

            return feedbackDates.Select(Mapper.Map<FeedbackQuestionModel>);
        }

        public async Task<IEnumerable<UserNameModel>> GetMerntorStudents(int mentorId)
        {
            IEnumerable<DalUserNameModel> feedbackDates = await _labRepository.GetStudentByMentorId(mentorId);

            return feedbackDates.Select(Mapper.Map<UserNameModel>);
        }
    }
}

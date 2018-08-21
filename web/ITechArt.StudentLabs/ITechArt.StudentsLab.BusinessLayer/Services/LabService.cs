using ITechArt.StudentsLab.BusinessLayer.Contracts;
using LabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using FeedbackDateModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackDateModel;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using DalLabModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.LabModel;
using DalFeedbackDateModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackDateModel;
using System.Linq;
using AutoMapper;
using System;

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
    }
}

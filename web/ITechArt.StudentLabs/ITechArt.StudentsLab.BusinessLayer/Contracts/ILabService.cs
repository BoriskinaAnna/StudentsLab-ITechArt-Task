﻿using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;

namespace ITechArt.StudentsLab.BusinessLayer.Contracts
{
    public interface ILabService
    {
        Task<IEnumerable<LabModel>> GetLabs();
        Task<IEnumerable<FeedbackDateModel>> GetFeedbackDates(int labId);
        Task<FeedbackDateModel> AddOrUpdateFeedbackDate(FeedbackDateModel feedbackDate);
    }
}

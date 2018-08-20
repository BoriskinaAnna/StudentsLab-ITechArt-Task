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
    }
}

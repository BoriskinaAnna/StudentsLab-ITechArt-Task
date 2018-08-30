using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;

namespace ITechArt.StudentsLab.BusinessLayer.Contracts
{
    public interface IScheduleService
    {
        Task<IEnumerable<LectureModel>> GetSchedule(int labId);
    }
}

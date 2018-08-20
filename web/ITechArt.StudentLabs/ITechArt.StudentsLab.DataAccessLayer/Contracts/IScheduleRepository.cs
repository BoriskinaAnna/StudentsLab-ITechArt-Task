using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface IScheduleRepository
    {
        Task<IEnumerable<LectureModel>> GetSchedule(int labId);
    }
}

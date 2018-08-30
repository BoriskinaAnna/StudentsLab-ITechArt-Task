using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models.Entities;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface IScheduleRepository
    {
        Task<IEnumerable<Lecture>> GetSchedule(int labId);
    }
}

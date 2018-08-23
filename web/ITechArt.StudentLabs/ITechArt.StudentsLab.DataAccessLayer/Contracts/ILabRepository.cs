using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface ILabRepository
    {
        Task<IEnumerable<LabModel>> GetLabs();

        Task<IEnumerable<UserNameModel>> GetStudentByMentorId(int mentorId);
    }
}

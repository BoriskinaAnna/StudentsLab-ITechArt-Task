using ITechArt.StudentsLab.DataAccessLayer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface ILabRepository
    {
        Task<IEnumerable<Lab>> GetLabs();

        Task<IEnumerable<UserName>> GetStudentByMentorId(int mentorId);
    }
}

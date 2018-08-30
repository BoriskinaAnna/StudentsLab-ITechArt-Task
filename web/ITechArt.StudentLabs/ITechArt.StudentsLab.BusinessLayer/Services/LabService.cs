using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using ITechArt.StudentsLab.BusinessLayer.Models;
using Mapster;

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
            IEnumerable<Lab> labs = await _labRepository.GetLabs();
            return labs.Adapt<IEnumerable<LabModel>>();
        }

        public async Task<IEnumerable<UserNameModel>> GetMentorStudents(int mentorId)
        {
            IEnumerable<UserName> feedbackDates = await _labRepository.GetStudentByMentorId(mentorId);

            return feedbackDates.Adapt<IEnumerable<UserNameModel>>();
        }
    }
}

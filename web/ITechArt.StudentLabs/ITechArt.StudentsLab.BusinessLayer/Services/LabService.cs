using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using DalLabModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.LabModel;
using LabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using DalUserNameModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.UserNameModel;
using UserNameModel = ITechArt.StudentsLab.BusinessLayer.Models.UserNameModel;
using System.Linq;
using AutoMapper;

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

        public async Task<IEnumerable<UserNameModel>> GetMerntorStudents(int mentorId)
        {
            IEnumerable<DalUserNameModel> feedbackDates = await _labRepository.GetStudentByMentorId(mentorId);

            return feedbackDates.Select(Mapper.Map<UserNameModel>);
        }
    }
}

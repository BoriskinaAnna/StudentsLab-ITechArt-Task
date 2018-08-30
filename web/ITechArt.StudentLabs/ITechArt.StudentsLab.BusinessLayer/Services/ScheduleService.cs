using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Models.Entities;
using Mapster;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class ScheduleService: IScheduleService
    {
        private readonly IScheduleRepository _scheduleRepository;


        public ScheduleService(IScheduleRepository scheduleRepository)
        {
            _scheduleRepository = scheduleRepository;
        }
        public async Task<IEnumerable<LectureModel>> GetSchedule(int labId)
        {
               IEnumerable<Lecture> schedule = await _scheduleRepository.GetSchedule(labId);
        
              return schedule.Adapt<IEnumerable<LectureModel>>();
        }
    }
}

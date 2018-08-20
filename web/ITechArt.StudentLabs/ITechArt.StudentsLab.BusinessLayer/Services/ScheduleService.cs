using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.BusinessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using AutoMapper;
using System;
using LectureModel = ITechArt.StudentsLab.BusinessLayer.Models.LectureModel;
using DalLectureModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.LectureModel;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class ScheduleService: IScheduleService
    {
        private readonly IScheduleRepository _scheduleRepository;


        public ScheduleService(IScheduleRepository scheduleRepository)
        {
            _scheduleRepository = scheduleRepository;
        }
        public async Task<IEnumerable<LectureModel>> GetCinemas()
        {
            //   IEnumerable<DalLectureModel> cinemas = await _scheduleRepository.GetSchedule();

            //  return cinemas.Select(Mapper.Map<LectureModel>);
            return null;
        }

    }
}

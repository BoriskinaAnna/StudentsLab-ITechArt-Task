using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using AutoMapper;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlLectureModel = ITechArt.StudentsLab.BusinessLayer.Models.LectureModel;
using System.Linq;
using System;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    public class ScheduleController : Controller
    {
        private readonly IScheduleService _scheduleService;

        public ScheduleController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }
         
        public async  Task<IActionResult> Get()
        {
            //  IEnumerable<BlLectureModel> cinemas = await _scheduleService.GetLectures();

            // return Ok(
            //   cinemas.Select(Mapper.Map<ScheduleModel>)
            //    );
            return null;
        }
    }
}
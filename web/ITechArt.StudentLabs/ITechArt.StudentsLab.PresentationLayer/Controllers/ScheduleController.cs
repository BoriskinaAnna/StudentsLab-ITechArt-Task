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
    [Route("api/[controller]/[action]")]
    public class ScheduleController : Controller
    {
        private readonly IScheduleService _scheduleService;

        public ScheduleController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }

        [HttpGet]
        [Route("{labId:int}")]
        public async  Task<IActionResult> Get(int labId)
        {
             IEnumerable<BlLectureModel> schedule = await _scheduleService.GetSchedule(labId);

             return Ok(
               schedule.Select(Mapper.Map<LectureModel>)
                );
        }
    }
}
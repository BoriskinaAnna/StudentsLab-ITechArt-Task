using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentsLab.BusinessLayer.Models;
using Mapster;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api")]
    [ApiController]
    public class ScheduleController : Controller
    {
        private readonly IScheduleService _scheduleService;

        public ScheduleController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }

        [HttpGet]
        [Route("labs/{labId:int}/schedule")]
        public async  Task<IActionResult> Get(int labId)
        {
             IEnumerable<LectureModel> schedule = await _scheduleService.GetSchedule(labId);

             return Ok(
                schedule.Adapt<IEnumerable<LectureResponse>>()
             );
        }
    }
}
using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentsLab.BusinessLayer.Models;
using Mapster;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api/labs")]
    [ApiController]
    public class LabController : Controller
    {
        private readonly ILabService _labService;


        public LabController(ILabService labService)
        {
            _labService = labService;
        }
        
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<LabModel> labs = await _labService.GetLabs();
            return Ok(
                labs.Adapt<IEnumerable<LabResponse>>()
            );
        }
       
        [HttpGet]
        [Route("mentors/{mentorId:int}/students")]
        public async Task<IActionResult> GetMentorStudents(int mentorId)
        {
            IEnumerable<UserNameModel> feedbackResponse = await _labService.GetMentorStudents(mentorId);

            return Ok(
                feedbackResponse.Adapt<IEnumerable<UserNameResponse>>()
            );
        }
    }
}
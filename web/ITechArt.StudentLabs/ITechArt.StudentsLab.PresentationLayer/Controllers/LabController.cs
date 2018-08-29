using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlLabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using BlUserNameModel = ITechArt.StudentsLab.BusinessLayer.Models.UserNameModel;
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
            IEnumerable<BlLabModel> labs = await _labService.GetLabs();
            return Ok(
                labs.Adapt<IEnumerable<LabModel>>()
            );
        }
       
        [HttpGet]
        [Route("mentors/{mentorId:int}/students")]
        public async Task<IActionResult> GetMentorStudents(int mentorId)
        {
            IEnumerable<BlUserNameModel> feedbackResponse = await _labService.GetMerntorStudents(mentorId);

            return Ok(
                feedbackResponse.Adapt<IEnumerable<UserNameModel>>()
            );
        }
    }
}
using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using AutoMapper;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlLabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using BlUserNameModel = ITechArt.StudentsLab.BusinessLayer.Models.UserNameModel;
using System.Linq;


namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api/[controller]/[action]")]
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
                labs.Select(Mapper.Map<LabModel>)
            );
        }
       
        [HttpGet]
        [Route("{mentorId:int}")]
        public async Task<IActionResult> GetMentorStudents(int mentorId)
        {
            IEnumerable<BlUserNameModel> feedbackResponse = await _labService.GetMerntorStudents(mentorId);

            return Ok(
                feedbackResponse.Select(Mapper.Map<UserNameModel>)
            );
        }
    }
}
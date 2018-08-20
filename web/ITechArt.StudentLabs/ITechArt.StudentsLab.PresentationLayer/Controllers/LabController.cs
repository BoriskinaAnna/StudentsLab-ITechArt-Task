using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using AutoMapper;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlLabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using BlFeedbackDateModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackDateModel;
using System.Linq;
using System;

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
        [Route("{id:int}")]
        public async Task<IActionResult> GetFeedbackDates(int labId)
        {
            IEnumerable<BlFeedbackDateModel> feedbackDates = await _labService.GetFeedbackDates(labId);
            return Ok(
                feedbackDates.Select(Mapper.Map<FeedbackDateModel>)
            );
        }
    }
}
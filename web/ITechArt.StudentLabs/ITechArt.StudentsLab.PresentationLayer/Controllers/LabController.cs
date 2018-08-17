using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using AutoMapper;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlLabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using System.Linq;
using System;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
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
            try
            {
                IEnumerable<BlLabModel> labs = await _labService.GetLabs();
                return Ok(
                    labs.Select(Mapper.Map<LabModel>)
                    );
            }
            catch (Exception e)
            {
                return null;
            }

        } 
    }
}
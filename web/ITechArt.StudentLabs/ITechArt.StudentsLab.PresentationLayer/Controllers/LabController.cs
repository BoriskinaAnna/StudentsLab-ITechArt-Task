using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlLabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;

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
            // GET /cinemas
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<BlLabModel> labs = await _labService.GetLabs();
            return null;
        }

           
        
           
        
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    public class LabsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
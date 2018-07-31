using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentLab.Server.Models;
using System.Threading.Tasks;

namespace ITechArt.StudentLab.Server.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

       
    }
}
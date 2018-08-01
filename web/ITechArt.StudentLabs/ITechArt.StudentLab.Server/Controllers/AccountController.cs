using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentLab.Server.Models;
using System.Threading.Tasks;
using ITechArt.StudentLab.Server.Contracts;
using ITechArt.StudentLab.Server.Services;


namespace ITechArt.StudentLab.Server.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        public AccountController()
        {
            _accountService = new AccountService();
        }
       
        [HttpPost]
        public async Task<IActionResult> Index([FromBody] LoginModel user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var loggedUser = await _accountService.Authenticate(user.Email, user.Password);
            if (loggedUser == null)
                return BadRequest("Invalid login or password");
            
            return Ok(loggedUser);
        }

       
    }
}
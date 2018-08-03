using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentsLab.PresentationLayer.Models;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using JetBrains.Annotations;
using ITechArt.StudentsLab.BusinessLayer.Models;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;
        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            UserModel user = await _userService.Login(model.Email, model.Password);

            if (user == null)
                return BadRequest("Invalid login or password");
            var claims = new List<Claim>
                    {
                    //    new Claim(ClaimTypes.Name, user.Id)
                    };
            ClaimsIdentity userIdentity = new ClaimsIdentity(claims, "login");
            ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);

            await HttpContext.SignInAsync(principal);
          //  return RedirectToAction("UserHome", "User");

            return Ok(new ResponseModel
            (
                user.Id,
                user.FirstName,
                user.LastName,
                user.Email
            ));
        }


    }
}
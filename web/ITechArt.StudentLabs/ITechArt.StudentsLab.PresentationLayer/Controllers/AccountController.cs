using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentsLab.PresentationLayer.Models;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using JetBrains.Annotations;
using ITechArt.StudentsLab.BusinessLayer.Models;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

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
        public async Task<IActionResult> Login([NotNull] [FromBody] LoginModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            UserModel user = await _userService.Login(model.Email, model.Password);

           if (user == null)
                return BadRequest("Invalid login or password");

           var claims = new List<Claim>
           {
               new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
               new Claim(ClaimTypes.Email, user.Email)
           };
            var claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);
            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity)
            );
            
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
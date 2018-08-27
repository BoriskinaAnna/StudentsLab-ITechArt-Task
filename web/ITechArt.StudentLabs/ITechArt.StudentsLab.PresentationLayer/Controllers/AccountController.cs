using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentsLab.PresentationLayer.Models;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Linq;
using System;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private readonly IUserService _userService;

        public AccountController(IAccountService accountService, IUserService userService)
        {
            _accountService = accountService;
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginModel model)
        {
            UserModel user = await _accountService.Login(model.Email, model.Password);

            if (user == null)
            {
                return StatusCode(401, "Invalid login or password");
            }

            List<Claim> claims = new List<Claim>
               {
                   new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                   new Claim(ClaimTypes.Email, user.Email)
               };

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme
            );

            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity)
            );

            return Ok(new UserResponseModel
            (
                user.Id,
                user.FirstName,
                user.LastName,
                user.Email,
                user.Role
            ));
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            RegisterUserModel registerUser = new RegisterUserModel(
                model.FirstName,
                model.SecondName,
                model.Email,
                model.Password
            );

            UserModel user = await _accountService.Register(registerUser);

            if (user == null)
            {
                return StatusCode(422, "User already exists");
            }

            List<Claim> claims = new List<Claim>
            {
               new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
               new Claim(ClaimTypes.Email, user.Email)
            };

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);

            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity)
            );

            return Ok(new UserResponseModel
            (
                user.Id,
                user.FirstName,
                user.LastName,
                user.Email,
                user.Role
            ));
        }

        [HttpGet]
        public async Task<IActionResult> GetInfoAboutCurrentUser()
        {
            int id;

            if(!Int32.TryParse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value, out id))
            {
                return NotFound();
            }
          
          //  var id = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            UserModel user = await _userService.GetUserById(id);
            
            if (user == null)
            {
                return NotFound();
            }

            return Ok(new UserResponseModel
            (
                user.Id,
                user.FirstName,
                user.LastName,
                user.Email,
                user.Role
            ));
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(
                CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok();
        }
    }
}

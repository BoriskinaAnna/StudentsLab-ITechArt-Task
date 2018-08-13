﻿using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentsLab.PresentationLayer.Models;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;


        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
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
            
            return Ok(new ResponseModel
            (
                user.Id,
                user.FirstName,
                user.LastName,
                user.Email
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

﻿using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.BusinessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;


        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        private static bool ByteArraysCompaire(byte[] a, byte[] b)
        {
            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] != b[i])
                {
                    return false;
                }
            }

            return true;
        }

        public async Task<UserModel> Login(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                return null;
            }
            else
            {
                UserResponse user = await _userRepository.GetUser(email);
                if (user == null)
                {
                    return null;
                }
                   
                byte[] passwordHash = CryptographyService.GetHash(password, user.Salt);

                if (ByteArraysCompaire(passwordHash, user.PasswordHash))
                {
                    UserModel userModel = new UserModel
                        (
                            user.Id,
                            user.FirstName,
                            user.LastName,
                            user.Email
                        );
                    return userModel;
                }

                return null;
            }
        }

        public async Task<UserModel> Register(RegisterUserModel registerModel)
        {
            if (await _userRepository.GetUser(registerModel.Email) != null)
            {
                return null;
            }

            PasswordObject passworObjecth = CryptographyService.GetHash(registerModel.Password);

            UserRequest user = new UserRequest()
            {
                FirstName = registerModel.FirstName,
                SecondName = registerModel.SecondName,
                Email = registerModel.Email,
                PasswordHash = passworObjecth.PasswordHash,
                Salt = passworObjecth.Salt
            };

            int userId = await _userRepository.RegisterUser(user);

            UserModel userModel = new UserModel
            (
                userId,
                user.FirstName,
                user.SecondName,
                user.Email
            );

            return userModel;
        }
    }
}

using System;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.BusinessLayer.Models;
using System.Data.SqlClient;
using Dapper;
using System.Data;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using JetBrains.Annotations;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class UserService : IUserService
    {
        [NotNull] private readonly IUserRepository _userRepository;
        public UserService([NotNull] IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<UserModel> Login(string email, string password)
        {
            try
            {
                if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                {
                    return null;
                }
                else
                {
                    UserResponse user = await _userRepository.GetUser(email);
                    if (user == null)
                        return null;
                    UserModel userModel = new UserModel
                    (
                        user.Id,
                        user.FirstName,
                        user.LastName,
                        user.Email
                     );
                    return userModel;
                    /*  string connectionString = @"Data Source=WSC-253-71;Initial Catalog=ITechArtLab;Integrated Security=True";
                      using (IDbConnection connection = new SqlConnection(connectionString))
                      {
                          connection.Open();
                          UserModel user = await connection.QuerySingleOrDefaultAsync<UserModel>
                              (String.Format("SELECT * FROM dbo.[User] WHERE Email={0};", email));
                          if (user == null)
                              return null;
                          return null;
                      }*/
                }
            }
            catch (Exception e)
            {
                return null;
            }

        }
    }
}

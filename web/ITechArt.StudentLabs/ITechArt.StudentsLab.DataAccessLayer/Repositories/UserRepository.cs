using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;
using System.Data.SqlClient;
using Dapper;
using System.Data;
using ITechArt.StudentsLab.BusinessLayer.Contracts;

namespace ITechArt.StudentsLab.DataAccessLayer.Repositories
{
    internal class UserRepository : IUserRepository
    {
        private readonly IDalSettings _settings;


        public UserRepository(IDalSettings settings)
        {
            _settings = settings;
        }

        public async Task<UserResponse> GetUserByEmail(string email)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                UserResponse user = await connection.QuerySingleOrDefaultAsync<UserResponse>(
                    "GetUserByEmail",
                    new { Email = email },
                    commandType: CommandType.StoredProcedure
                );

                return user;
            }
        }

        public async Task<UserResponse> GetUserById(int id)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                UserResponse user = await connection.QuerySingleOrDefaultAsync<UserResponse>(
                    "GetUserById",
                    new { Id = id },
                    commandType: CommandType.StoredProcedure
                );

                return user;
            }
        }

        public async Task<int> UpsertUser(UserRequest userRequest)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                int userId = await connection.ExecuteScalarAsync<int>(
                    "AddUser",
                    new
                    {
                        Firstname = userRequest.FirstName,
                        LastName = userRequest.SecondName,
                        Email = userRequest.Email,
                        PasswordHash = userRequest.PasswordHash,
                        Salt = userRequest.Salt,
                        Role = userRequest.Role
                    },
                    commandType: CommandType.StoredProcedure
                );

                return userId;
            }
        }
    }
}

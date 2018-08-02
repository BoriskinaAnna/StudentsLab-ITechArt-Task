using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using System.Data.SqlClient;
using Dapper;
using System.Data;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using JetBrains.Annotations;

namespace ITechArt.StudentsLab.DataAccessLayer.Services
{
    public class UserRepository : IUserRepository
    {
        [NotNull]
        private readonly IDalSettings _settings;

        public UserRepository([NotNull] IDalSettings settings)
        {
            _settings = settings;
        }

        public async Task<UserResponse> GetUser(string email)
        {
            string connectionString = @"Data Source=WSC-253-71;Initial Catalog=ITechArtLab;Integrated Security=True";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                UserResponse user = await connection.QuerySingleOrDefaultAsync<UserResponse>(
                    "GetUser",
                    new { Email = email },
                    commandType: CommandType.StoredProcedure);
                int x = 5;
                int s;
                s = x;
               
                return user;
            }
        }
    }
}

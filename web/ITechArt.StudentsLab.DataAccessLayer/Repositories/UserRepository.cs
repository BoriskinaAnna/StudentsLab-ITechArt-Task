﻿using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using System.Data.SqlClient;
using Dapper;
using System.Data;
using ITechArt.StudentsLab.BusinessLayer.Contracts;

namespace ITechArt.StudentsLab.DataAccessLayer.Services
{
    public class UserRepository : IUserRepository
    {

        private readonly IDalSettings _settings;

        public UserRepository(IDalSettings settings)
        {
            _settings = settings;
        }

        public async Task<UserResponse> GetUser(string email)
        {
            using (SqlConnection connection = new SqlConnection(_settings.ConnectionString))
            {

                UserResponse user = await connection.QuerySingleOrDefaultAsync<UserResponse>(
                    "GetUser",
                    new { Email = email },
                    commandType: CommandType.StoredProcedure
                );

                 return user;
            } 
        }
    }
}

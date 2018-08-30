using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Data.SqlClient;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using Dapper;
using System.Data;

namespace ITechArt.StudentsLab.DataAccessLayer.Repositories
{
    internal class LabRepository: ILabRepository
    {
        private readonly IDalSettings _settings;


        public LabRepository(IDalSettings settings)
        {
            _settings = settings;
        }

        public async Task<IEnumerable<Lab>> GetLabs()
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<Lab> labs = await connection.QueryAsync<Lab>(
                    "GetLabs",
                    commandType: CommandType.StoredProcedure);

                return labs;
            }
        }

        public async Task<IEnumerable<UserName>> GetStudentByMentorId(int mentorId)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<UserName> feedback = await connection.QueryAsync<UserName>(
                    "GetStudentsByMentorId",
                    new {MentorId = mentorId},
                    commandType: CommandType.StoredProcedure
                );

                return feedback;
            }
        }
    }
}

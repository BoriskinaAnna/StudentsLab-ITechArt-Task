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
    internal class ScheduleRepository: IScheduleRepository
    {
        private readonly IDalSettings _settings;


        public ScheduleRepository(IDalSettings settings)
        {
            _settings = settings;
        }

        public async Task<IEnumerable<Lecture>> GetSchedule(int labId)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<Lecture> schedule = await connection.QueryAsync<Lecture>(
                   "GetLabSchedule",
                   new { Id = labId },
                   commandType: CommandType.StoredProcedure
               );
                return schedule;
            }
        }
    }
}

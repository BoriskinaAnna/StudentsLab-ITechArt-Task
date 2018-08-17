using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;
using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Data.SqlClient;
using ITechArt.StudentsLab.DataAccessLayer.Models.Entities;
using Dapper;
using AutoMapper;
using System.Data;
using System.Linq;
using System;

namespace ITechArt.StudentsLab.DataAccessLayer.Repositories
{
    public class ScheduleRepository: IScheduleRepository
    {
        private readonly IDalSettings _settings;


        public ScheduleRepository(IDalSettings settings)
        {
            _settings = settings;
        }
        public async Task<IEnumerable<LectureModel>> GetSchedule()
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<Lecture> cinemas = await connection.QueryAsync<Lecture>(
                    "GetCinemas",
                    commandType: CommandType.StoredProcedure);

                return cinemas.Select(Mapper.Map<LectureModel>);
            }
        }
    }
}

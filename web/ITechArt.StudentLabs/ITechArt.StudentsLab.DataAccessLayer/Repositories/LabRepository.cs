﻿using ITechArt.StudentsLab.DataAccessLayer.Contracts;
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
    class LabRepository: ILabRepository
    {
        private readonly IDalSettings _settings;


        public LabRepository(IDalSettings settings)
        {
            _settings = settings;
        }

        public async Task<IEnumerable<LabModel>> GetLabs()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
                {
                    IEnumerable<Lab> labs = await connection.QueryAsync<Lab>(
                        "GetLabs",
                        commandType: CommandType.StoredProcedure);

                    return labs.Select(Mapper.Map<LabModel>);
                }
            }
            catch (Exception e)
            {
                return null;
            }
           
        }
    }
}

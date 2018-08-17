using ITechArt.StudentsLab.BusinessLayer.Contracts;
using LabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using DalLabModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.LabModel;
using System.Linq;
using AutoMapper;
using System;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class LabService : ILabService
    {
        private readonly ILabRepository _labRepository;

        public LabService (ILabRepository labRepository){
            _labRepository = labRepository;
        }

        public async Task<IEnumerable<LabModel>> GetLabs()
        {
            try
            {
                IEnumerable<DalLabModel> labs = await _labRepository.GetLabs();
                return labs.Select(Mapper.Map<LabModel>);
            }
            catch (Exception e)
            {
                return null;
            }
           
        }
    }
}

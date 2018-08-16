using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.BusinessLayer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class LabService: ILabService
    {

        public async Task<IEnumerable<LabModel>> GetLabs()
        {
            return null;
        }
    }
}

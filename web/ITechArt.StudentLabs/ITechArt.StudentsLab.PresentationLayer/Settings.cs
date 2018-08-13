using ITechArt.StudentsLab.BusinessLayer.Contracts;
using Microsoft.Extensions.Configuration;

namespace ITechArt.StudentsLab.PresentationLayer
{
    public class Settings : IDalSettings
    {
        private readonly IConfiguration _configuration;
        public string DefaultConnectionString => _configuration.GetConnectionString("DefaultConnectionString");


        public Settings(IConfiguration configuration)
        {
            _configuration = configuration;
        }
    }
}

using ITechArt.StudentsLab.BusinessLayer.Contracts;
using Microsoft.Extensions.Configuration;

namespace ITechArt.StudentsLab.PresentationLayer
{
    public class Settings : IDalSettings
    {
        private readonly IConfiguration _configuration;
        public string ConnectionString => _configuration[nameof(ConnectionString)];


        public Settings(IConfiguration configuration)
        {
            _configuration = configuration;
        }
    }
}

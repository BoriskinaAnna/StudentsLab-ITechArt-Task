using ITechArt.StudentsLab.BusinessLayer.Contracts;
using JetBrains.Annotations;
using Microsoft.Extensions.Configuration;

namespace ITechArt.StudentsLab.PresentationLayer
{
    public class Settings : IDalSettings
    {
        [NotNull]
        private readonly IConfiguration _configuration;

        public string ConnectionString => _configuration[nameof(ConnectionString)];

        public Settings([NotNull] IConfiguration configuration)
        {
            _configuration = configuration;
        }
    }
}

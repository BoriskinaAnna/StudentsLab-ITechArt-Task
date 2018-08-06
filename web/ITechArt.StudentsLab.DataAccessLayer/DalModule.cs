using Microsoft.Extensions.DependencyInjection;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Services;

namespace ITechArt.StudentsLab.DataAccessLayer
{
    public class DalModule
    {
        public static void Register(IServiceCollection collection)
        {
            collection.AddSingleton<IUserRepository, UserRepository>();
        }
    }
}

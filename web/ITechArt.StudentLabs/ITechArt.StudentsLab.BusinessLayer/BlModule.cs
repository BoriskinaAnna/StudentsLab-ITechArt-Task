using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.BusinessLayer.Services;
using JetBrains.Annotations;
using Microsoft.Extensions.DependencyInjection;

namespace ITechArt.StudentsLab.BusinessLayer
{
    public class BlModule
    {
        public static void Register([NotNull] IServiceCollection collection)
        {
            collection.AddSingleton<IUserService, UserService>();

        }
    }
}

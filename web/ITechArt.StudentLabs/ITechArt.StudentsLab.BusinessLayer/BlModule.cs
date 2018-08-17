using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.BusinessLayer.Services;
using Microsoft.Extensions.DependencyInjection;

namespace ITechArt.StudentsLab.BusinessLayer
{
    public class BlModule
    {
        public static void Register(IServiceCollection collection)
        {
            collection.AddSingleton<IAccountService, AccountService>();
            collection.AddSingleton<IScheduleService, ScheduleService>();
            collection.AddSingleton<ILabService, LabService>();
            collection.AddSingleton<IUserService, UserService>();
        }
    }
}

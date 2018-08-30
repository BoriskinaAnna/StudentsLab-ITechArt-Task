using Microsoft.Extensions.DependencyInjection;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Repositories;

namespace ITechArt.StudentsLab.DataAccessLayer
{
    public class DalModule
    {
        public static void Register(IServiceCollection collection)
        {
            collection.AddSingleton<IUserRepository, UserRepository>();
            collection.AddSingleton<ILabRepository, LabRepository>();
            collection.AddSingleton<IScheduleRepository, ScheduleRepository>();
            collection.AddSingleton<IFeedbackRepository, FeedbackRepository>();
        }
    }
}

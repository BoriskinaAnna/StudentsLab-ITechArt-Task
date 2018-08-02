using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;
using JetBrains.Annotations;

namespace ITechArt.StudentsLab.BusinessLayer.Contracts
{
    public interface IUserService
    {
        Task<UserModel> Login([NotNull] string email, [NotNull] string password);
    }
}

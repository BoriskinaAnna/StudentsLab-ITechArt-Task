using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models;
using JetBrains.Annotations;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface IUserRepository
    {
        Task<UserResponse> GetUser([NotNull] string email);
    }
}

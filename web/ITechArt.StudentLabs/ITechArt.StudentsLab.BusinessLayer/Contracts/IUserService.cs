using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;

namespace ITechArt.StudentsLab.BusinessLayer.Contracts
{
    public interface IUserService
    {
        Task<UserModel> GetUserById(int id);
    }
}

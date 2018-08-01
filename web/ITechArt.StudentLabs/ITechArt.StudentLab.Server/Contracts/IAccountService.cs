using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ITechArt.StudentLab.Server.Models;

namespace ITechArt.StudentLab.Server.Contracts
{
    public interface IAccountService
    {
        Task<ModelUser> Authenticate(string email, string password);
    }
}

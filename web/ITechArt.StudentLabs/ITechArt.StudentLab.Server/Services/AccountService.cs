using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ITechArt.StudentLab.Server.Contracts;
using ITechArt.StudentLab.Server.Models;
using System.Data.SqlClient;
using Dapper;
using System.Data;

namespace ITechArt.StudentLab.Server.Services
{
    public class AccountService: IAccountService
    {
        public async Task<ModelUser> Authenticate(string email, string password)
        {
            try
            {
                if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                {
                    return null;
                }
                else
                {
                    string connectionString = @"Data Source=WSC-253-71;Initial Catalog=ITechArtLab;Integrated Security=True";
                    using (IDbConnection connection = new SqlConnection(connectionString))
                    {
                        connection.Open();
                        ModelUser user = await connection.QuerySingleOrDefaultAsync<ModelUser>
                            (String.Format("SELECT * FROM dbo.[User] WHERE Email={0};", email));
                        if (user == null)
                            return null;
                       
                    }
                }
            }
            catch (Exception e)
            {
                return null;
            }

        }
    }
}

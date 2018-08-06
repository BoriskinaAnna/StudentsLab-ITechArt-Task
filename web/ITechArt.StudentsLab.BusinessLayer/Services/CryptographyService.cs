using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class CryptographyService
    {
        private static byte[] GetSalt()
        {
            byte[] salt = new byte[64];

            using (RNGCryptoServiceProvider crypto = new RNGCryptoServiceProvider())
            {
                crypto.GetBytes(salt);
            }

            return salt;
        }

        public static byte[] GetHash(string password, byte[] computedSalt = null)
        {
            var plainText = Encoding.UTF8.GetBytes(password);

            if (computedSalt == null)
            {
                computedSalt = GetSalt();
            }

            using (SHA512 sha = new SHA512Managed())
            {
                byte[] passwordWithSalt = plainText.Concat(computedSalt).ToArray();
                return sha.ComputeHash(passwordWithSalt);
            }
        }
    }
}

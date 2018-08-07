using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    internal struct PasswordObject
    {
        public byte[] PasswordHash { get; set; }
        public byte[] Salt { get; set; }
    }

    internal class CryptographyService
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

        public static PasswordObject GetHash(string password, byte[] computedSalt = null)
        {
            byte[] plainText = Encoding.UTF8.GetBytes(password);

            if (computedSalt == null)
            {
                computedSalt = GetSalt();
            }

            using (SHA512 sha = new SHA512Managed())
            {
                byte[] passwordWithSalt = plainText.Concat(computedSalt).ToArray();

                return new PasswordObject()
                {
                    PasswordHash = sha.ComputeHash(passwordWithSalt),
                    Salt = computedSalt
                };
            }
        }
    }
}

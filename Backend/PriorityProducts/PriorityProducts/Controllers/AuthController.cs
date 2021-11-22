using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Data.SqlClient;
using PriorityProducts.Services.Internal.Interfaces;
using PriorityProducts.Models.Entities.Internal;
using System.Linq;

namespace Priority.Products.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : Controller
    {
        private readonly IManipulation _manipulation;

        public AuthController( IManipulation manipulation)
        {
            _manipulation = manipulation;
        }

        [HttpPost]
        [Route("check-connection")]
        public async Task<bool> IsServerConnectedAsync()
        {
            var path = _manipulation.GetAllConnections<DatabaseConnection>().OrderByDescending(x => x.Database).LastOrDefault();

            string server = path.Host,
                database = path.Database,
                username = path.User,
                password = path.Password;

            string dbPath = $"Server={server};Database={database};Uid={username};Pwd={password};MultipleActiveResultSets=True";

            using (var i_vConnection = new SqlConnection(dbPath))
            {
                try
                {
                    await i_vConnection.OpenAsync();
                    return true;
                }
                catch (SqlException)
                {
                    return false;
                }
                finally {await i_vConnection.CloseAsync(); }
            }
        }
    }
}

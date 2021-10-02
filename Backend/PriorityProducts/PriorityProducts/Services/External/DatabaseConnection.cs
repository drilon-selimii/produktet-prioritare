using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace PriorityProducts.Services.External
{
    public class DatabaseConnection : IDatabaseConnection
    {
        public IDbConnection Connection { get; }

        public DatabaseConnection(IConfiguration configuration)
        {
            string dbPath = configuration.GetConnectionString("StockDbConnection");

            Connection = new SqlConnection(dbPath);
        }
    }
}

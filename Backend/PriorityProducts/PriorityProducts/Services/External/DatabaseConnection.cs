﻿using PriorityProducts.Services.Internal.Interfaces;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace PriorityProducts.Services.External
{
    public class DatabaseConnection : IDatabaseConnection
    {
        public IDbConnection Connection { get; }

        private readonly IManipulation _manipulation;

        public DatabaseConnection(IManipulation manipulation)
        {
            if (Connection !=null && Connection.State == ConnectionState.Open)
            {
               Connection.Close();
            }

            _manipulation = manipulation;

            var path = _manipulation.GetAllConnections<Models.Entities.Internal.DatabaseConnection>()
                .OrderByDescending(x => x.Database).LastOrDefault();

            string server = path.Host,
                database = path.Database,
                username = path.User,
                password = path.Password;

            string dbPath = $"Server={server};Database={database};Uid={username};Pwd={password};MultipleActiveResultSets=True;Integrated Security=True";

            Connection = new SqlConnection(dbPath);
        }
    }
}

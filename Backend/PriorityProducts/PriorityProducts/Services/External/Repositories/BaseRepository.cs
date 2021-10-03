using Dapper.Contrib.Extensions;
using PriorityProducts.Models.Entities.External;
using PriorityProducts.Services.External.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PriorityProducts.Services.External.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : EntityBase
    {
        protected readonly IDatabaseConnection _connection;

        public BaseRepository(IDatabaseConnection connection)
        {
            _connection = connection;
        }

        public Task<IEnumerable<T>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<T>> GetAllProductsAsync()
        {
            IEnumerable<T> items = await _connection.Connection.GetAllAsync<T>();

            return items;
        }
    }
}

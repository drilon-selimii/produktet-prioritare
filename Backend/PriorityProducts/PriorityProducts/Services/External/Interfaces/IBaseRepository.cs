using PriorityProducts.Models.Entities.External;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PriorityProducts.Services.External.Interfaces
{
    public interface IBaseRepository<T> where T : EntityBase
    {
        Task<IEnumerable<T>> GetAllProductsAsync();
    }
}

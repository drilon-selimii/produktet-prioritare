using PriorityProducts.Models.Entities.Internal;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace PriorityProducts.Services.Internal.Interfaces
{
    public interface IManipulation
    {
        void Add<T>(T entity) where T : class;

        void Update<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();

        IQueryable<T> GetAllProducts<T>() where T : class;

        IQueryable<ProductIds> GetAllProductsIdsFromLastWeek();
        IQueryable<ProductIds> GetAllProductsIdsFromLastMonth();
    }
}

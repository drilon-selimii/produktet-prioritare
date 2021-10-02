using PriorityProducts.Models.Entities.External;
using PriorityProducts.Services.External.Interfaces;

namespace PriorityProducts.Services.External.Repositories
{
    public class ProductRepository : BaseRepository<Products>, IProductRepository
    {
        public ProductRepository(IDatabaseConnection connection) 
            : base(connection)
        {
        }
    }
}

using PriorityProducts.Models.Entities.External;
using PriorityProducts.Services.External.Interfaces;

namespace PriorityProducts.Services.External.Repositories
{
    public class SalesRepository : BaseRepository<ProductSales>, ISalesRepository
    {
        public SalesRepository(IDatabaseConnection connection) : base(connection)
        {
        }
    }
}

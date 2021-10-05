using PriorityProducts.Models;
using PriorityProducts.Models.Entities.Internal;
using PriorityProducts.Services.Internal.Interfaces;
using System.Linq;
using System.Threading.Tasks;

namespace PriorityProducts.Services.Internal.Repositories
{
    public class Manipulation : IManipulation
    {
        private readonly AppDbContext _context;

        public Manipulation(AppDbContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Attach(entity);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public IQueryable<T> GetAllProducts<T>() where T : class
        {
            return _context.Set<T>();
        }
        public IQueryable<ProductIds> GetAllProductsIds()
        {
            return _context.Set<SevenDays>().Select(p => new ProductIds { Product_Id = p.Product_Id });
        }
    }
}

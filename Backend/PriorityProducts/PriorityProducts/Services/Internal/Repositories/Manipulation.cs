using PriorityProducts.Models;
using PriorityProducts.Models.Entities.Internal;
using PriorityProducts.Services.Internal.Interfaces;
using System.Collections.Generic;
using System.Data.Entity;
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

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public IQueryable<SevenDays> GetAll7ProductsAsync()
        {
            return  _context.Set<SevenDays>();
        }        
    }
}

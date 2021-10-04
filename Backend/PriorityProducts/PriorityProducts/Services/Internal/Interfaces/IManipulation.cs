using PriorityProducts.Models.Entities.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PriorityProducts.Services.Internal.Interfaces
{
    public interface IManipulation
    {
        void Add<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();

        IQueryable<SevenDays> GetAll7ProductsAsync();
    }
}

using Microsoft.EntityFrameworkCore;
using PriorityProducts.Models.Entities.Internal;

namespace PriorityProducts.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        { }
        public DbSet<SevenDays> SevenDays { get; set; }
        public DbSet<ThirtyDays> ThirtyDays { get; set; }
    }
}

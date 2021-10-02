using Microsoft.EntityFrameworkCore;
using Priority.Products.Models.Entities.Internal;

namespace Priority.Products.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        { }
        public DbSet<SevenDays> SevenDays { get; set; }
        public DbSet<ThirtyDays> ThirtyDays { get; set; }
    }
}

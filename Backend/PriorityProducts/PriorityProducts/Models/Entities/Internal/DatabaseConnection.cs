using System.ComponentModel.DataAnnotations;

namespace PriorityProducts.Models.Entities.Internal
{
    public class DatabaseConnection
    {
        [Required]
        [MaxLength(100)]
        public string Host { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 2)]
        public string Database { get; set; }
        [Required]
        [StringLength(20, MinimumLength = 4)]
        public string User { get; set; }
        [Required]
        [StringLength(20, MinimumLength =6)]
        public string Password { get; set; }        
    }
}

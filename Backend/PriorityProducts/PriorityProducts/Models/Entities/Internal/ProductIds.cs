using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PriorityProducts.Models.Entities.Internal
{
    public class ProductIds
    {
        [Key]
        [Column("Product_Id")]
        public string Product_Id { get; set; }
    }
}

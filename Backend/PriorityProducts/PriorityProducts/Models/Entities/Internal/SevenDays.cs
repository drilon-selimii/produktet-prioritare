using System;
using System.ComponentModel.DataAnnotations;

namespace Priority.Products.Models.Entities.Internal
{
    public class SevenDays
    {
        [Key]
        [Required]
        public int Product_Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Product_Name { get; set; }

        [Required]
        public DateTime Last_Update { get; set; }

        [Required]
        public int Remaining_Quantity { get; set; }

        [Required]
        [GreaterThanZero(ErrorMessage = "Sales amount can't be negative.")]
        public int Sales_Amount { get; set; }

        [Required]
        [GreaterThanZero(ErrorMessage = "Product price can't be negative.")]
        public decimal Product_Price { get; set; }

        [Required]
        public decimal Coefficient { get; set; }
    }
    public class GreaterThanZero : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            var x = (decimal)value;
            return x > 0;
        }
    }
}

﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PriorityProducts.Models.Entities.Internal
{
    public class LeastSold
    {
        [Key]
        [Required]
        public string Product_Id { get; set; }

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
        [Column(TypeName = "decimal(12,4)")]
        [GreaterThanZero(ErrorMessage = "Product price can't be negative.")]
        public decimal Product_Price { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PriorityProducts.Models.Entities.External
{
    [Table("Sales")]
    public class ProductSales : EntityBase
    {
        public string Invoice_Id { get; }
        public string Product_Id { get; }        
        public string Product_Name { get; set; }
        public DateTime Date { get; }
        public int Quantity { get; }
    }
}


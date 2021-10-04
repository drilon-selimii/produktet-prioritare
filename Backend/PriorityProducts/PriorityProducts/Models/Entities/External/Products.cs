using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PriorityProducts.Models.Entities.External
{
    [Table("Stock_Table")]
    public class Products : EntityBase
    {
        public string Product_Id { get; }
        public string Product_Name { get; }
        public string Product_Description { get; }
        public int Remaining_Quantity { get; }
        public decimal Product_Price { get; }
        public DateTime Arriving_Date { get; }
        public DateTime Last_Update { get; }
    }
}

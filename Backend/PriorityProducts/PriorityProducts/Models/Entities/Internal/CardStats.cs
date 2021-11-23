using System;

namespace PriorityProducts.Models.Entities.Internal
{
    public class CardStats
    {
        public string Product_Id { get; set; }

        public string Product_Name { get; set; }

        public decimal Sales_Amount { get; set; }
        public bool Is_Progress { get; set; }
        public decimal Percentage { get; set; }
    }
}

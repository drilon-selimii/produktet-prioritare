using System;

namespace PriorityProducts.Models.Entities.Internal
{
    public class BestSelling
    {
        public string Product_Id { get; set; }

        public string Product_Name { get; set; }

        public int Sales_Amount { get; set; }
        public bool Is_Progress { get; set; }
        public double Percentage { get; set; }

        internal object MaxBy()
        {
            throw new NotImplementedException();
        }
    }
}

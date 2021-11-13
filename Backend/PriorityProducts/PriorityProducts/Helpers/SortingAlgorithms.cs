using PriorityProducts.Models.Entities.Internal;
using System.Collections.Generic;
using System.Linq;

namespace PriorityProducts.Helpers
{
    public class SortingAlgorithms
    {
        public static List<SevenDays> SevenDaysQuickSort(List<SevenDays> list)
        {
            if (list.Count <= 1)
                return list;
            int pivotIndex = list.Count / 2;
            var pivot = list.ElementAt(pivotIndex);
            decimal pivotCoefficient = list.ElementAt(pivotIndex).Coefficient;
            List<SevenDays> left = new List<SevenDays>();
            List<SevenDays> right = new List<SevenDays>();

            for (int i = 0; i < list.Count; i++)
            {
                if (i == pivotIndex) continue;

                if (list.ElementAt(i).Coefficient >= pivotCoefficient)
                {
                    left.Add(list.ElementAt(i));
                }
                else
                {
                    right.Add(list.ElementAt(i));
                }
            }

            List<SevenDays> sorted = SevenDaysQuickSort(left);
            sorted.Add(pivot);
            sorted.AddRange(SevenDaysQuickSort(right));
             return sorted;
        }

        public static List<ThirtyDays> ThirtyDaysQuickSort(List<ThirtyDays> list)
        {
            if (list.Count <= 1)
                return list;
            int pivotIndex = list.Count / 2;
            var pivot = list.ElementAt(pivotIndex);
            decimal pivotCoefficient = list.ElementAt(pivotIndex).Coefficient;
            List<ThirtyDays> left = new List<ThirtyDays>();
            List<ThirtyDays> right = new List<ThirtyDays>();

            for (int i = 0; i < list.Count; i++)
            {
                if (i == pivotIndex) continue;

                if (list.ElementAt(i).Coefficient >= pivotCoefficient)
                {
                    left.Add(list.ElementAt(i));
                }
                else
                {
                    right.Add(list.ElementAt(i));
                }
            }

            List<ThirtyDays> sorted = ThirtyDaysQuickSort(left);
            sorted.Add(pivot);
            sorted.AddRange(ThirtyDaysQuickSort(right));
            return sorted;
        }
    }
}

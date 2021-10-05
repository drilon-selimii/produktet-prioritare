using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PriorityProducts.Models.Entities.Internal;
using PriorityProducts.Models.Entities.External;
using PriorityProducts.Services.External.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using PriorityProducts.Services.Internal.Interfaces;

namespace PriorityProducts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ISalesRepository _salesRepository;
        private readonly IManipulation _manipulation;

        public TestController(IConfiguration configuration, IProductRepository productRepository, ISalesRepository salesRepository,
            IManipulation manipulation)
        {
            Configuration = configuration;
            _productRepository = productRepository;
            _salesRepository = salesRepository;
            _manipulation = manipulation;
        }

        private readonly IConfiguration Configuration;

        [HttpGet]
        [Route("getallproducts")]
        public async Task<Products> GetProductsAsync()
        {
            var products = await _productRepository.GetAllAsync();
            return products.FirstOrDefault();
        }

        [HttpGet]
        [Route("getallsales")]
        public async Task<ProductSales> GetSalesAsync()
        {
            var dateBefore = DateTime.UtcNow.Subtract(TimeSpan.FromDays(7));
            var dateNow = DateTime.UtcNow;

            var productSales = await _salesRepository.GetAllAsync();
            return productSales.Where(d => d.Date >= dateBefore && d.Date <= dateNow).FirstOrDefault();
        }

        [HttpPost]
        [Route("savepp")]
        public async Task GetAndSaveProductsAsync()
        {
            try
            {
                var dateBefore = DateTime.UtcNow.Subtract(TimeSpan.FromDays(7));
                var dateNow = DateTime.UtcNow;

                var products = await _productRepository.GetAllAsync();

                var productSales = await _salesRepository.GetAllAsync();

                foreach (var product in products)
                {
                    var salesAmount = productSales.Where(p => p.Product_Id == product.Product_Id).Sum(q => q.Quantity);

                    var priorityProducts = new SevenDays
                    {
                        Product_Id = product.Product_Id,
                        Product_Name = product.Product_Name,
                        Last_Update = product.Last_Update,
                        Remaining_Quantity = product.Remaining_Quantity,
                        Product_Price = product.Product_Price,
                        Sales_Amount = salesAmount,
                        Coefficient = product.Remaining_Quantity == 0 ? salesAmount :
                        (decimal)salesAmount / product.Remaining_Quantity
                    };

                    _manipulation.Add(priorityProducts);
                    await _manipulation.SaveChangesAsync();
        }
    }
            catch (Exception)
            {
                throw;
        }
    }

        [HttpPost]
        [Route("sort")]
        public async Task<ActionResult> GetSortedListAsync()
        {
            try
            {
                var unSortedProducts = _manipulation.GetAll7ProductsAsync().ToList();

                var sorted = QuickSort(unSortedProducts);

                return Ok(sorted);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        public static List<SevenDays> QuickSort(List<SevenDays> lst)
        {
            if (lst.Count <= 1)
                return lst;
            int pivotIndex = lst.Count / 2;
            var pivot = lst.ElementAt(pivotIndex);
            decimal pivotCoefficient = lst.ElementAt(pivotIndex).Coefficient;
            List<SevenDays> left = new List<SevenDays>();
            List<SevenDays> right = new List<SevenDays>();

            for (int i = 0; i < lst.Count; i++)
            {
                if (i == pivotIndex) continue;

                if (lst.ElementAt(i).Coefficient >= pivotCoefficient)
                {
                    left.Add(lst.ElementAt(i));
                }
                else
                {
                    right.Add(lst.ElementAt(i));
                }
            }

            List<SevenDays> sorted = QuickSort(left);
            sorted.Add(pivot);
            sorted.AddRange(QuickSort(right));
            return sorted;
        }
    }
}

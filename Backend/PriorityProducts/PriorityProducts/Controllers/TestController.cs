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
using PriorityProducts.Helpers;
using Microsoft.EntityFrameworkCore;

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

                var productIds = await _manipulation.GetAllProductsIds().ToListAsync();

                var productSales = await _salesRepository.GetAllAsync();

                productSales = productSales.Where(d => d.Date >= dateBefore && d.Date <= dateNow);

                foreach (var product in products)
                {
                    var salesAmount = productSales != null ? productSales.Where(p => p.Product_Id == product.Product_Id).Sum(q => q.Quantity) : 0;

                    if (productIds.Any(p => p.Product_Id == product.Product_Id))
                    {
                        // TODO: Check the update method...
                        var priorityProductsToUpdate = new SevenDays
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

                        _manipulation.Update(priorityProductsToUpdate);
                        await _manipulation.SaveChangesAsync();

                    }

                    else
                    {
                        var priorityProductsToInsert = new SevenDays
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

                        _manipulation.Add(priorityProductsToInsert);
                        await _manipulation.SaveChangesAsync();
                    }
                }
            }
            catch (Exception ex)
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
                var unSortedProducts = await _manipulation.GetAllProducts<SevenDays>().ToListAsync();

                var sorted = SortingAlgorithms.SevenDaysQuickSort(unSortedProducts);

                return Ok(sorted);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }
    }
}

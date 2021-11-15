using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PriorityProducts.Models.Entities.Internal;
using PriorityProducts.Services.External.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;
using PriorityProducts.Services.Internal.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace PriorityProducts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ComputationController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ISalesRepository _salesRepository;
        private readonly IManipulation _manipulation;

        public ComputationController(IConfiguration configuration, IProductRepository productRepository, ISalesRepository salesRepository,
            IManipulation manipulation)
        {
            Configuration = configuration;
            _productRepository = productRepository;
            _salesRepository = salesRepository;
            _manipulation = manipulation;
        }

        private readonly IConfiguration Configuration;

        [HttpPost]
        [Route("save-last-week-priority-products")]
        public async Task GetAndSaveProducts7Async()
        {
            try
            {
                var dateBefore = DateTime.UtcNow.Subtract(TimeSpan.FromDays(7));
                var dateNow = DateTime.UtcNow;

                var products = await _productRepository.GetAllAsync();

                var productIds = await _manipulation.GetAllProductsIdsFromLastMonth().ToListAsync();

                var productSales = await _salesRepository.GetAllAsync();

                productSales = productSales.Where(d => d.Date >= dateBefore && d.Date <= dateNow);

                foreach (var product in products)
                {
                    var salesAmount = productSales != null ? productSales.Where(p => p.Product_Id == product.Product_Id).Sum(q => q.Quantity) : 0;

                    if (productIds.Any(p => p.Product_Id == product.Product_Id))
                    {
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
        [Route("save-last-month-priority-products")]
        public async Task GetAndSaveProducts30Async()
        {
            try
            {
                var dateBefore = DateTime.UtcNow.Subtract(TimeSpan.FromDays(30));
                var dateNow = DateTime.UtcNow;

                var products = await _productRepository.GetAllAsync();

                var productIds = await _manipulation.GetAllProductsIdsFromLastMonth().ToListAsync();

                var productSales = await _salesRepository.GetAllAsync();

                productSales = productSales.Where(d => d.Date >= dateBefore && d.Date <= dateNow);

                foreach (var product in products)
                {
                    var salesAmount = productSales != null ? productSales.Where(p => p.Product_Id == product.Product_Id).Sum(q => q.Quantity) : 0;

                    if (productIds.Any(p => p.Product_Id == product.Product_Id))
                    {
                        var priorityProductsToUpdate = new ThirtyDays
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
                        var priorityProductsToInsert = new ThirtyDays
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
    }
}

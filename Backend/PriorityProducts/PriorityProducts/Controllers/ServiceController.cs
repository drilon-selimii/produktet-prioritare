using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PriorityProducts.Models.Entities.Internal;
using PriorityProducts.Services.External.Interfaces;
using System;
using System.Threading.Tasks;
using PriorityProducts.Services.Internal.Interfaces;
using PriorityProducts.Helpers;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;

namespace PriorityProducts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ServiceController : Controller
    {
        private readonly IManipulation _manipulation;
        private readonly IProductRepository _productRepository;
        private readonly ISalesRepository _salesRepository;

        public ServiceController(IManipulation manipulation, IProductRepository productRepository,
            ISalesRepository salesRepository)
        {
            _manipulation = manipulation;
            _productRepository = productRepository;
            _salesRepository = salesRepository;
        }

        [HttpPost]
        [Route("get-sorted-last-week")]
        public async Task<ActionResult> GetSortedLastWeeksync()
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

        [HttpPost]
        [Route("get-sorted-last-month")]
        public async Task<ActionResult> GetSortedLastMonthAsync()
        {
            try
            {
                var unSortedProducts = await _manipulation.GetAllProducts<ThirtyDays>().ToListAsync();

                var sorted = SortingAlgorithms.ThirtyDaysQuickSort(unSortedProducts);

                return Ok(sorted);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpPost]
        [Route("best-selling-product")]
        public async Task<ActionResult> GetBestSellingProductAsync()
        {
            try
            {
                var dateBefore = DateTime.UtcNow.Subtract(TimeSpan.FromDays(30));
                var dateNow = DateTime.UtcNow;
                var twoMonthsBefore = DateTime.UtcNow.Subtract(TimeSpan.FromDays(60));

                // Get products and product sales
                var products = await _productRepository.GetAllAsync();
                var sales = await _salesRepository.GetAllAsync();

                // Query products in this month and last month
                var productSales = sales.Where(d => d.Date >= dateBefore && d.Date <= dateNow);
                var lastProductSales = sales.Where(d => d.Date >= twoMonthsBefore && d.Date < dateBefore);

                List<CardStats> productsSales = new List<CardStats>(),
                    lastProductsSales = new List<CardStats>();

                foreach (var product in products)
                {
                    var salesAmount = productSales != null ? productSales.Where(p => p.Product_Id == product.Product_Id).Sum(q => q.Quantity) : 0;
                    var lastSalesAmount = lastProductSales != null ? lastProductSales.Where(p => p.Product_Id == product.Product_Id).Sum(q => q.Quantity) : 0;

                    productsSales.Add(new CardStats
                    {
                        Product_Id = product.Product_Id,
                        Product_Name = product.Product_Name,
                        Sales_Amount = salesAmount
                    });

                    lastProductsSales.Add(new CardStats
                    {
                        Product_Id = product.Product_Id,
                        Product_Name = product.Product_Name,
                        Sales_Amount = lastSalesAmount
                    });
                }

                var bestSellingProduct = productsSales.OrderByDescending(x => x.Sales_Amount).FirstOrDefault();
                var bestSellingProductPreStats = lastProductsSales.Where(p => p.Product_Id == bestSellingProduct.Product_Id).FirstOrDefault();

                bestSellingProduct.Percentage = Math.Abs((bestSellingProduct.Sales_Amount / bestSellingProductPreStats.Sales_Amount) - 1) * 100;
                bestSellingProduct.Is_Progress = bestSellingProduct.Sales_Amount > bestSellingProductPreStats.Sales_Amount
                    ? true : false;

                return Ok(bestSellingProduct);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpPost]
        [Route("newest-product")]
        public async Task<ActionResult> GetNewestProductAsync()
        {
            try
            {
                var dateBefore = DateTime.UtcNow.Subtract(TimeSpan.FromDays(7));
                var dateNow = DateTime.UtcNow;
                var twoWeeksBefore = DateTime.UtcNow.Subtract(TimeSpan.FromDays(14));

                // Get all products and find the newst one
                var products = await _productRepository.GetAllAsync();
                var product = products.OrderByDescending(x => x.Arriving_Date).FirstOrDefault();

                // Get and query products in this week and last week
                var sales = await _salesRepository.GetAllAsync();
                var productSales = sales.Where(d => d.Date >= dateBefore && d.Date <= dateNow);
                var lastProductSales = sales.Where(d => d.Date >= twoWeeksBefore && d.Date < dateBefore);

                var salesAmount = productSales != null ? productSales.Where(p => p.Product_Id == product.Product_Id).Sum(q => q.Quantity) : 0;
                var lastSalesAmount = lastProductSales != null ? lastProductSales.Where(p => p.Product_Id == product.Product_Id).Sum(q => q.Quantity) : 0;

                var productResult = new CardStats 
                {
                    Product_Id = product.Product_Id,
                    Product_Name = product.Product_Name,
                    Sales_Amount = salesAmount
                };
                    
                var productPreResult = new CardStats
                {
                    Product_Id = product.Product_Id,
                    Product_Name = product.Product_Name,
                    Sales_Amount = lastSalesAmount
                };

                productResult.Percentage = productPreResult.Sales_Amount !=0 ? 
                    (Math.Abs((productResult.Sales_Amount / productPreResult.Sales_Amount) - 1) * 100) : 0;
                productResult.Is_Progress = productResult.Sales_Amount > productPreResult.Sales_Amount
                    ? true : false;

                return Ok(productResult);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }
    }
}

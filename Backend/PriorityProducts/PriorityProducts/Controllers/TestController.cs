using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PriorityProducts.Models.Entities.Internal;
using PriorityProducts.Models.Entities.External;
using PriorityProducts.Services.External.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;
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
    }
}

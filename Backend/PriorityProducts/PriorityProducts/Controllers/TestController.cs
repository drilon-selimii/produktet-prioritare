using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PriorityProducts.Models.Entities.External;
using PriorityProducts.Services.External.Interfaces;
using System.Linq;
using System.Threading.Tasks;

namespace PriorityProducts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : Controller
    {
        private readonly IProductRepository _productRepository;
        public TestController(IConfiguration configuration, IProductRepository productRepository)
        {
            Configuration = configuration;
            _productRepository = productRepository;
        }

        private readonly IConfiguration Configuration;

        [HttpGet]
        [Route("getall")]
        public async Task<Products> GetProductsAsync()
        {
            var pr = await _productRepository.GetAllProductsAsync();
            return pr.FirstOrDefault();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PriorityProducts.Models.Entities.Internal;
using PriorityProducts.Services.External.Interfaces;
using System;
using System.Threading.Tasks;
using PriorityProducts.Services.Internal.Interfaces;
using PriorityProducts.Helpers;
using Microsoft.EntityFrameworkCore;

namespace PriorityProducts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ServiceController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ISalesRepository _salesRepository;
        private readonly IManipulation _manipulation;

        public ServiceController(IConfiguration configuration, IProductRepository productRepository, ISalesRepository salesRepository,
            IManipulation manipulation)
        {
            Configuration = configuration;
            _productRepository = productRepository;
            _salesRepository = salesRepository;
            _manipulation = manipulation;
        }

        private readonly IConfiguration Configuration;



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
    }
}

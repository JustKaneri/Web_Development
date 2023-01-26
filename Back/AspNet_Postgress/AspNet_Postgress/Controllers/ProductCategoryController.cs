using AspNet_Postgress.Data;
using Microsoft.AspNetCore.Mvc;

namespace AspNet_Postgress.Controllers
{
    public class ProductCategoryController : Controller
    {
        private readonly DataContext _context;

        public ProductCategoryController(DataContext context)
        {
            _context = context;
            bool isWork = _context.Database.CanConnect();
            bool isAdmin = _context.Database.CanConnect();
        }

        public IActionResult Index()
        {
            Console.WriteLine(_context.Database.CanConnect());

            var listProduct = _context.product;

            return View(listProduct);
        }
    }
}

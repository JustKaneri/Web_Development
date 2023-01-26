using AspNet_Postgress.Models;
using Microsoft.EntityFrameworkCore;

namespace AspNet_Postgress.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        /// <summary>
        /// НАЗВАНИЯ DbSet должны соответствовать названию Таблиц в базе данных
        /// </summary>
        public DbSet<Product> product { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }

    }
}

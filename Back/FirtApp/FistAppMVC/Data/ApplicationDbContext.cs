using Microsoft.EntityFrameworkCore;
using FistAppMVC.Models;

namespace FistAppMVC.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        { 
        }

        public DbSet<Category> Categories { get; set; }
    }
}

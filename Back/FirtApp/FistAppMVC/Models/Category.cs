using System.ComponentModel.DataAnnotations;

namespace FistAppMVC.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int DisplayOrder { get; set; }

        public DateTime CreateDateCategory { get; set; } = DateTime.Now;
    }
}

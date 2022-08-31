using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FistAppMVC.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        [DisplayName("Display Order")]
        [Range(1,100,ErrorMessage ="Display Order must be 1 or 100")]
        public int DisplayOrder { get; set; }

        public DateTime CreateDateCategory { get; set; } = DateTime.Now;
    }
}

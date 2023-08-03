using Microsoft.EntityFrameworkCore;
using coffee_shop_api.Models;

namespace coffee_shop_api.Data
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
		{

		}

		public DbSet<Product> products { get; set; }
		public DbSet<Customer> customers { get; set; }
		public DbSet<CartItem> cartitems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CartItem>()
                .HasOne(ci => ci.product)
                .WithMany()
                .HasForeignKey(ci => ci.product_id);

            base.OnModelCreating(modelBuilder);
        }
    }
}


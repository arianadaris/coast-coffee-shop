using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace coffee_shop_api.Models
{
	public class CartItem
	{
		[Key]
		public int item_id { get; set; }

		[ForeignKey("Products")]
		public int product_id { get; set; }
		public int customer_id { get; set; }
		public int quantity { get; set; }

		public Product product { get; set; }

		public CartItem(int product_id, int customer_id, int quantity)
		{
			this.product_id = product_id;
			this.customer_id = customer_id;
			this.quantity = quantity;
		}
	}
}


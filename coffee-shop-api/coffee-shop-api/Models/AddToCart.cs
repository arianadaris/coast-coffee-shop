using System;
namespace coffee_shop_api.Models
{
	// DTO - Data Transfer Object
	public class AddToCart
	{
		public int cart_id { get; set; }
		public int product_id { get; set; }
		public int qty { get; set; }

		public AddToCart(int cart_id, int product_id, int qty)
		{
			this.cart_id = cart_id;
			this.product_id = product_id;
			this.qty = qty;
		}
	}
}


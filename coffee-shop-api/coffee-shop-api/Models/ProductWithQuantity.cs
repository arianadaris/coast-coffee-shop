namespace coffee_shop_api.Models
{
	public class ProductWithQuantity : Product
	{
		public int quantity { get; set; }
		public int item_id { get; set; }

		public ProductWithQuantity(int product_id, string product_name, string product_descr, decimal product_price, string product_image, int _quantity, int _item_id) : base(product_id, product_name, product_descr, product_price, product_image)
		{
			quantity = _quantity;
			item_id = _item_id;
		}
	}
}


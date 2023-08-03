using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace coffee_shop_api.Models
{
	public class Product
	{
		[Key]
		public int product_id { get; set; }
		public string product_name { get; set; }
		public string product_descr { get; set; }
		public decimal product_price { get; set; }
		public string product_image { get; set; }

		public Product(int product_id, string product_name, string product_descr, decimal product_price, string product_image)
		{
			this.product_id = product_id;
			this.product_name = product_name;
			this.product_descr = product_descr;
			this.product_price = product_price;
			this.product_image = product_image;
		}
	}
}


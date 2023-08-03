using Microsoft.AspNetCore.Mvc;
using coffee_shop_api.Data;
using coffee_shop_api.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace coffee_shop_api.Controllers
{
	public class CartDTO
	{
		public int product_id { get; set; }
		public int customer_id { get; set; }
		public int quantity { get; set; }

		public CartDTO(int product_id, int customer_id, int quantity)
		{
			this.product_id = product_id;
			this.customer_id = customer_id;
			this.quantity = quantity;
		}
	}

	public class UpdateDTO
	{
		public int item_id { get; set; }
		public int qty { get; set; }
		public int customer_id { get; set; }

		public UpdateDTO(int item_id, int qty, int customer_id)
		{
			this.item_id = item_id;
			this.qty = qty;
			this.customer_id = customer_id;
		}
	}

	[ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
	{
		private readonly DataManager _dataManager;
		public CartController(DataManager dataManager)
		{
			_dataManager = dataManager;
		}

		[Route("[action]/id={id}")]
		[HttpGet]
		public IActionResult GetCart(int id)
		{
			List<ProductWithQuantity> cart = _dataManager.GetCart(id);
			if(!cart.Any() != true)
			{
                return Ok(cart);
            }
			return NotFound();
		}

		[Route("[action]")]
		[HttpPost]
		public IActionResult AddToCart([FromBody] CartDTO cartDTO)
		{
			if (cartDTO.quantity == 0)
				cartDTO.quantity += 1;
            CartItem item = new CartItem(cartDTO.product_id, cartDTO.customer_id, cartDTO.quantity);
            bool isAdded = _dataManager.AddToCart(item);
			if (isAdded)
			{
				return Ok(item);
			}
			return NotFound();
        }

		[Route("[action]/item={item_id}&cust={customer_id}")]
		[HttpDelete]
		public IActionResult DeleteItem(int item_id, int customer_id)
		{
			bool success = _dataManager.DeleteItem(item_id, customer_id);
            if (success)
			{
                List<ProductWithQuantity> items = _dataManager.GetCart(customer_id);
                return Ok(items);
            }
			return NotFound();
		}

		[Route("[action]")]
		[HttpPost]
		public IActionResult UpdateItem([FromBody] UpdateDTO update)
		{
			bool success = _dataManager.UpdateCartItem(update.item_id, update.qty, update.customer_id);
			if (success)
			{
                List<ProductWithQuantity> items = _dataManager.GetCart(update.customer_id);
				return Ok(items);
            }
			return NotFound();
		}
	}
}


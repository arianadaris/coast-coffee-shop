using Microsoft.AspNetCore.Mvc;
using coffee_shop_api.Models;

namespace coffee_shop_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
	private readonly DataManager _dataManager;

	public ProductController(DataManager dataManager)
	{
		_dataManager = dataManager;
	}

    [Route("[action]")]
    [HttpGet]
    public IActionResult GetAll()
    {
        List<Product> products = _dataManager.GetProducts();
        return Ok(products);
    }

    [Route("[action]/id={id}")]
    [HttpGet]
    public IActionResult GetProduct(int id)
    {
        Product product = _dataManager.GetProduct(id);
        if (product == null)
            return NotFound();

        return Ok(product);
    }
}


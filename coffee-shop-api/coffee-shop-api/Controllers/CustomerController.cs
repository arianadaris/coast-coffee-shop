using Microsoft.AspNetCore.Mvc;
using coffee_shop_api.Data;
using coffee_shop_api.Models;

namespace coffee_shop_api.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class CustomerController : ControllerBase
	{
		private readonly DataManager _dataManager;

		public CustomerController(DataManager dataManager)
		{
			_dataManager = dataManager;
		}

		[Route("[action]")]
		[HttpGet]
		public IActionResult GetAll()
		{
			List<Customer> customers = _dataManager.GetCustomers();
			return Ok(customers);
		}

		[Route("[action]/id={id}")]
		[HttpGet]
		public IActionResult GetCustomer(int id)
		{
			Customer customer = _dataManager.GetCustomer(id);
			if (customer == null)
				return NotFound();

			return Ok(customer);
		}

		[Route("[action]/id={id}")]
		[HttpDelete]
		public IActionResult DeleteCustomer(int id)
		{
			Customer deleted = _dataManager.DeleteCustomer(id);
			if (deleted == null)
				return NoContent();
			return Ok(deleted);
		}

		[Route("[action]/id={id}/email")]
		[HttpPut]
		public IActionResult UpdateEmail(int id, [FromBody] string email)
		{
			Customer updated = _dataManager.UpdateCustomerEmail(id, email);
			if (updated == null)
				return NoContent();
			return Ok(updated);
		}

        [Route("[action]/id={id}/password")]
        [HttpPut]
        public IActionResult UpdatePassword(int id, [FromBody] string pwd)
        {
            Customer updated = _dataManager.UpdateCustomerPassword(id, pwd);
            if (updated == null)
                return NoContent();
            return Ok(updated);
        }

		[Route("[action]")]
		[HttpPost]
		public IActionResult Login([FromBody] Login login)
		{
			Customer authCustomer = _dataManager.AuthenticateUser(login.email, login.pwd);
			if (authCustomer == null)
				return Unauthorized();
			return Ok(authCustomer);
		}

        [Route("[action]")]
        [HttpPost]
        public IActionResult Signup([FromBody] Signup signup)
        {
			Customer newCustomer = new Customer(signup.first_name, signup.last_name, signup.email, signup.pwd);
            Customer added = _dataManager.AddCustomer(newCustomer);
            if (added == null)
                return NotFound();

            return Ok(added);
        }

    }
}


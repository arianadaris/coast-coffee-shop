using System;
namespace coffee_shop_api.Models
{
	// DTO - Data Transfer Object
	public class Login
	{
		public string email { get; set; }
		public string pwd { get; set; }

		public Login(string email, string pwd)
		{
			this.email = email;
			this.pwd = pwd;
		}
	}
}


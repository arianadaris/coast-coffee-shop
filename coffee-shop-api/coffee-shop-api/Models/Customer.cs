using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace coffee_shop_api.Models
{
	public class Customer
	{
		[Key]
		public int customer_id { get; set; }
		public string first_name { get; set; }
		public string last_name { get; set; }
		public string email { get; set; }

		[JsonIgnore]
		public string pwd { get; set; }

		public Customer(string first_name, string last_name, string email, string pwd)
		{
			this.first_name = first_name;
			this.last_name = last_name;
			this.email = email;
			this.pwd = pwd;
		}
	}
}


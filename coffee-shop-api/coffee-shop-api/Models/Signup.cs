using System;
namespace coffee_shop_api.Models
{
    // DTO - Data Transfer Object
    public class Signup
    {
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string email { get; set; }
        public string pwd { get; set; }

        public Signup(string first_name, string last_name, string email, string pwd)
        {
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.pwd = pwd;
        }
    }
}


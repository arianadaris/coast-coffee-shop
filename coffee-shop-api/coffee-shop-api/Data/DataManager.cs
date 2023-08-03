using coffee_shop_api.Data;
using coffee_shop_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace coffee_shop_api
{
    public class DataManager
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public DataManager(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        /* 
		 * PRODUCTS FUNCTIONS
		*/
        public List<Product> GetProducts() => _context.products.ToList();

        public Product GetProduct(int product_id)
        {
            return _context.products.Find(product_id);
        }

        /* 
		 * CUSTOMERS FUNCTIONS
		*/
        public List<Customer> GetCustomers() => _context.customers.ToList();

        public Customer GetCustomer(int customer_id)
        {
            return _context.customers.Find(customer_id);
        }

        public Customer AddCustomer(Customer customer)
        {
            try
            {
                customer.customer_id = GetNextCustomerId();
                _context.customers.Add(customer);

                _context.SaveChangesAsync();
                return customer;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        private int GetNextCustomerId()
        {
            var lastCustomerId = _context.customers.OrderByDescending(c => c.customer_id).FirstOrDefault()?.customer_id ?? 0;
            return lastCustomerId + 1;
        }

        public Customer DeleteCustomer(int id)
        {
            try
            {
                Customer customer = _context.customers.Find(id);
                if (customer != null)
                {
                    _context.customers.Remove(customer);
                    _context.SaveChanges();
                }
                return customer;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public Customer UpdateCustomerEmail(int id, string newEmail)
        {
            Customer customer = _context.customers.Find(id);
            if (customer != null)
            {
                customer.email = newEmail;
                _context.SaveChanges();
                return customer;
            }
            return null;
        }

        public Customer UpdateCustomerPassword(int id, string newPwd)
        {
            Customer customer = _context.customers.Find(id);
            if (customer != null)
            {
                customer.pwd = newPwd;
                _context.SaveChanges();
                return customer;
            }
            return null;
        }

        public Customer AuthenticateUser(string email, string pwd)
        {
            Customer customer = _context.customers.SingleOrDefault(c => c.email == email);
            if (customer != null)
            {
                // Verify password
                if (VerifyPassword(pwd, customer.pwd))
                {
                    return customer;
                }
            }

            // Authentication failed
            return null;
        }

        private bool VerifyPassword(string enteredPwd, string storedPwd)
        {
            return enteredPwd == storedPwd;
        }

        /*
         * CART FUNCTIONS 
        */
        public bool AddToCart(CartItem item)
        {
            try
            {
                _context.cartitems.Add(item);
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

        }

        public List<ProductWithQuantity> GetCart(int customer_id)
        {
            List<ProductWithQuantity> products = _context.cartitems
                    .Where(ci => ci.customer_id == customer_id)
                    .Select(ci => new ProductWithQuantity(ci.product.product_id, ci.product.product_name, ci.product.product_descr, ci.product.product_price, ci.product.product_image, ci.quantity, ci.item_id))
                    .ToList();

            return products;
        }

        public bool DeleteItem(int item_id, int customer_id)
        {
            CartItem item = _context.cartitems.Find(item_id);
            if (item != null)
            {
                _context.cartitems.Remove(item);
                _context.SaveChanges();

                return true;
            }
            return false;
        }

        public bool UpdateCartItem(int item_id, int qty, int customer_id)
        {
            CartItem item = _context.cartitems.Find(item_id);
            if (item != null)
            {
                item.quantity = qty;
                _context.SaveChanges();
                return true;
            }
            return false;
        }
    }
}

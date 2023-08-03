-- CREATE TABLES
CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR (255) NOT NULL,
    product_descr VARCHAR (255) NOT NULL,
    product_price DECIMAL (10, 2) NOT NULL,
    product_image VARCHAR (255) NOT NULL
);

CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR (255) NOT NULL,
    last_name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    pwd VARCHAR (255) NOT NULL
);

CREATE TABLE CartItems (
    item_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
    customer_id INT REFERENCES customers(customer_id) ON DELETE CASCADE ON UPDATE CASCADE,
    quantity INT NOT NULL
);

-- CREATE TABLE CartItems (
--     cartitems_id SERIAL PRIMARY KEY,
--     cart_id INT REFERENCES carts(cart_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     product_id INT REFERENCES products(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     quantity INT
-- );

-- CREATE TABLE Orders (
--     order_id SERIAL PRIMARY KEY,
--     customer_id INT REFERENCES customers(customer_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     cart_id INT REFERENCES carts(cart_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     order_date TIMESTAMP,
--     total NUMERIC(10, 2) NOT NULL,
--     order_status VARCHAR (255) NOT NULL
-- );

-- CREATE TABLE OrderItems (
--     item_id SERIAL PRIMARY KEY,
--     order_id INT REFERENCES orders(order_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     product_id INT REFERENCES products(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     quantity INT NOT NULL
-- );
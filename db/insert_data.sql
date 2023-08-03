-- INSERT DATA INTO PRODUCTS
INSERT INTO Products(product_name, product_descr, product_image, product_price) VALUES ('Espresso', 'A concentrated shot of coffee brewed by forcing pressurized hot water through finely ground coffee beans.', 'Espresso.png', 2.50), 
('Con Panna', 'A shot of espresso topped with a dollop of whipped cream, adding a creamy and indulgent element to the strong coffee taste.', 'ConPanna.png', 3.25),
('Doppio', 'Essentially a double shot of espresso, resulting in a more potent and robust flavor compared to a regular espresso.', 'Doppio.png', 3.00),
('Ristretto', 'A short shot of espresso made with half the amount of water but the same amount of coffee grounds, resulting in a more concentrated and intense flavor.', 'Ristretto.png', 2.75),
('Black Coffee', 'A simple and straightforward preparation of brewed coffee without any additions or milk. It offers a pure and bold coffee taste.', 'BlackCoffee.png', 2.00),
('Americano', 'A shot of espresso diluted with hot water, providing a milder and more diluted coffee flavor similar to drip coffee.', 'Americano.png', 3.00),
('Flat White', 'A coffee beverage consisting of a shot of espresso mixed with steamed milk, resulting in a velvety texture and a balanced coffee flavor.', 'FlatWhite.png', 4.00),
('Cappuccino', 'Equal parts espresso, steamed milk, and milk foam, creating a harmonious blend of flavors and a creamy texture.', 'Cappuccino.png', 4.25),
('Affogato', 'A dessert-like coffee treat that combines a scoop of vanilla ice cream or gelato with a shot of hot espresso poured over it, resulting in a delightful contrast of hot and cold sensations.', 'Affogato.png', 5.00),
('Latte', 'A coffee beverage made with a shot of espresso combined with steamed milk, topped with a small layer of milk foam. It offers a smooth and creamy taste.', 'Latte.png', 4.25),
('Mocha', 'A coffee drink that combines espresso, steamed milk, and chocolate syrup or powder, often topped with whipped cream. It delivers a delightful blend of coffee and chocolate flavors.', 'Mocha.png', 4.25),
('Frappe', 'A blended and iced coffee drink mixed with milk, sweeteners, and flavorings, often topped with whipped cream. It offers a refreshing and indulgent coffee treat.', 'Frappe.png', 5.50);

-- INSERT DATA INTO CUSTOMERS
INSERT INTO Customers(first_name, last_name, email, pwd) VALUES('Ariana', 'Daris', 'aripadari@gmail.com', '123123'), ('Cooper', 'Gretzema', 'coopgretz@gmail.com', '123123');

-- INSERT DATA INTO CARTITEMS
INSERT INTO CartItems(product_id, customer_id, quantity) VALUES(1, 1, 1), (2, 1, 1), (3, 1, 3);

-- -- INSERT DATA INTO CARTITEMS
-- INSERT INTO CartItems(cart_id, product_id, quantity) VALUES(1, 1, 1);
-- INSERT INTO CartItems(cart_id, product_id, quantity) VALUES(1, 2, 2);

-- -- INSERT DATA INTO ORDERS
-- INSERT INTO Orders(customer_id, order_date, total, order_status) VALUES(1, '20160101', 12.30, 'Processing'), (2, '20160102', 14.50, 'Delivered');

-- -- INSERT DATA INTO ORDERITEMS
-- INSERT INTO OrderItems(order_id, product_id, quantity) VALUES(1, 1, 1), (1, 2, 2);
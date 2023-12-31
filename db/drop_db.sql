-- DROP FOREIGN KEY CONSTRAINTS
ALTER TABLE Customers DROP CONSTRAINT IF EXISTS cart_id;
ALTER TABLE CartItems DROP CONSTRAINT IF EXISTS product_id;
ALTER TABLE CartItems DROP CONSTRAINT IF EXISTS customer_id;

-- DROP TABLES
DROP TABLE CartItems;
DROP TABLE Products CASCADE;
DROP TABLE Customers CASCADE;
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name TEXT NOT NULL,
    department_name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    product_sales DECIMAL(10, 2),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Red T-Shirt', 'Tops', 19.99, 20),
('Green Shorts', 'Bottoms', 20.00, 33),
('Yellow Running Shoes', 'Footware', 52.99, 47),
('Brown FlipFlops', 'Footware', 22.95, 62),
('Red High Heels', 'Footware', 88.49, 32),
('Teal Hat', 'Headware', 9.99, 24),
('Purple Baseball Cap', 'Headware', 12.99, 65),
('Silver Watch', 'Accessories' , 134.99, 10),
('Pink Scarf', 'Accessories' , 25.99, 55),
('Denim Pants', 'Bottoms', 99.99, 26);

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name TEXT NOT NULL,
    over_head_costs DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Tops', 2000),
('Bottoms', 1000),
('Footware', 2000),
('Headware', 3000),
('Accessories' , 4000);
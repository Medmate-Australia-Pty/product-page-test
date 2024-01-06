-- create_database_and_user.sql

-- Create database
CREATE DATABASE IF NOT EXISTS product_page;

-- Switch to the new database
USE product_page;

-- Create a user
CREATE USER 'product_page'@'localhost' IDENTIFIED BY 'product_page';

-- Grant permissions
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES ON product_page.* TO 'product_page'@'localhost';

-- Grant REFERENCES permission
GRANT REFERENCES ON product_page.* TO 'product_page'@'localhost';

-- Flush privileges
FLUSH PRIVILEGES;

-- Verify permissions
SHOW GRANTS FOR 'product_page'@'localhost';

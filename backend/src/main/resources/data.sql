DROP TABLE IF EXISTS employees;
 
CREATE TABLE employees (
  id BIGINT AUTO_INCREMENT(4,3),
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  email_address VARCHAR(250) DEFAULT NULL
);
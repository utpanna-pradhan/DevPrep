Q1. What is MySQL?
Answer: MySQL is a relational database management system (RDBMS) used to store, organize, and retrieve data in tables.

Example: A website stores user information in a MySQL database.
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);


Explanation: The users table contains an ID, name, and email for each user.
Q2. What is the difference between SQL and MySQL?
Answer:
- SQL: A language used to communicate with relational databases.
- MySQL: Database software that uses SQL to manage data.
Example: SQL is the language; MySQL is the system that understands it. Think of SQL as English and MySQL as the person reading it.
Q3. What are the different types of SQL commands?
Answer: SQL commands are commonly divided into five categories.
Type	Purpose	Examples
DDL	Defines database structure	CREATE, ALTER, DROP
DML	Modifies data	INSERT, UPDATE, DELETE
DQL	Retrieves data	SELECT
DCL	Controls permissions	GRANT, REVOKE
TCL	Manages transactions	COMMIT, ROLLBACK

Example:
SELECT * FROM users;


This retrieves all rows and columns from the users table.
Q4. What is a primary key?
Answer: A primary key uniquely identifies each row in a table. It cannot contain duplicate or NULL values.
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);


Explanation: Each student must have a unique id.
Q5. What is a foreign key?
Answer: A foreign key connects two tables by referencing a primary key or another eligible unique key in a related table.
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


Explanation: Each user_id in orders must match an existing id in users, unless the foreign key is NULL.
Q6. What is the difference between WHERE and HAVING?
Answer:
- WHERE filters individual rows before grouping.
- HAVING filters groups after GROUP BY.
Example:
SELECT department, COUNT(*) AS total
FROM employees
WHERE salary > 20000
GROUP BY department
HAVING COUNT(*) > 2;


Explanation: First, employees earning more than 20,000 are selected. Then employees are grouped by department, and only departments with more than two qualifying employees are returned.
Q7. What are JOINs in MySQL?
Answer: JOINs combine related data from multiple tables.

Suppose we have users and orders tables.
SELECT users.name, orders.order_id
FROM users
INNER JOIN orders
ON users.id = orders.user_id;


Common JOIN types:
- INNER JOIN: Returns matching rows from both tables.
- LEFT JOIN: Returns all rows from the left table and matching rows from the right.
- RIGHT JOIN: Returns all rows from the right table and matching rows from the left.
- CROSS JOIN: Returns combinations of rows from both tables.
Q8. What is the difference between DELETE, DROP, and TRUNCATE?
Command	What it does
DELETE	Removes selected rows or all rows
TRUNCATE	Removes all rows while keeping the table
DROP	Removes the entire table structure and its data

Examples:
DELETE FROM users WHERE id = 5;

TRUNCATE TABLE users;

DROP TABLE users;


Interview tip: DELETE supports WHERE; TRUNCATE does not. Transaction and rollback behavior can vary depending on the command, storage engine, and MySQL version.
Q9. What is an index in MySQL?
Answer: An index helps MySQL find data faster without scanning every row in many queries.
CREATE INDEX idx_email ON users(email);


Explanation: Searching users by email may become faster.
SELECT * FROM users
WHERE email = 'user@example.com';


Important: Indexes use extra storage and can slow down inserts, updates, and deletes because the indexes also need maintenance.
Q10. What is the difference between GROUP BY and ORDER BY?
Answer:
- GROUP BY groups rows with the same values, often for aggregate calculations.
- ORDER BY sorts the resulting rows.
Example:
SELECT department, COUNT(*) AS total
FROM employees
GROUP BY department
ORDER BY total DESC;


Explanation: This counts employees in each department and displays departments from the largest count to the smallest.
Q11. What are aggregate functions in MySQL?
Answer: Aggregate functions perform calculations on multiple rows and return a single result.

Common functions:
- COUNT() counts rows.
- SUM() calculates the total.
- AVG() calculates the average.
- MAX() returns the highest value.
- MIN() returns the lowest value.
Example:
SELECT
    COUNT(*) AS total_employees,
    AVG(salary) AS average_salary,
    MAX(salary) AS highest_salary
FROM employees;


Explanation: This returns the total number of employees, average salary, and highest salary.
Q12. What is a subquery in MySQL?
Answer: A subquery is a query written inside another SQL query.

Example: Find employees earning more than the average salary.
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);


Explanation: The inner query calculates the average salary. The outer query finds employees earning more than that average.
Q13. What is the difference between UNION and UNION ALL?
Answer:
- UNION combines results and removes duplicate rows.
- UNION ALL combines results and keeps duplicates.
Example:
SELECT city FROM customers
UNION
SELECT city FROM suppliers;


To keep duplicates:
SELECT city FROM customers
UNION ALL
SELECT city FROM suppliers;


Interview tip: Both queries must return the same number of columns with compatible data types.
Q14. What are constraints in MySQL?
Answer: Constraints are rules that maintain data accuracy and integrity.

Common constraints:
Constraint	Purpose
PRIMARY KEY	Uniquely identifies each row
FOREIGN KEY	Enforces relationships between tables
NOT NULL	Prevents NULL values
UNIQUE	Prevents duplicate values
CHECK	Enforces a condition
DEFAULT	Supplies a default value

Example:
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) CHECK (salary >= 0),
    status VARCHAR(20) DEFAULT 'Active'
);


Explanation: Employee names are required, salaries cannot be negative, and status defaults to Active.
Q15. What is normalization?
Answer: Normalization organizes database tables to reduce duplicate data and prevent data inconsistencies.

For example, instead of storing a customer's name and address repeatedly in every order, store customer details in a customers table and reference the customer using customer_id in the orders table.

Common normal forms:
- 1NF: Each column contains a single value per row.
- 2NF: Meets 1NF and removes partial dependencies on a composite key.
- 3NF: Meets 2NF and removes transitive dependencies of non-key attributes.
Q16. What is a transaction in MySQL?
Answer: A transaction is a group of database operations treated as one logical unit of work.

Example: Transferring money between accounts.
START TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

COMMIT;


Explanation: The transaction transfers 500 from one account to another. If an error occurs, the application can issue ROLLBACK instead of COMMIT to undo the changes, provided the operations are transactional.
Q17. What are ACID properties?
Answer: ACID describes four properties that help ensure reliable transactions.
- Atomicity: All operations succeed, or none do.
- Consistency: Transactions preserve database rules and integrity.
- Isolation: Concurrent transactions are controlled to limit interference.
- Durability: Committed changes persist through failures, subject to the database's durability configuration.
Example: During a bank transfer, money should not disappear from one account without being credited to the other.
Q18. What is the difference between CHAR and VARCHAR?
Answer: Both store strings, but they differ in how they handle storage.
CHAR	VARCHAR
Fixed-length string type	Variable-length string type
Suitable for consistently sized values	Suitable for values of varying lengths
Pads shorter values to the defined length where applicable	Stores the value length plus length metadata

Example:
code CHAR(5),
name VARCHAR(100)


CHAR(5) is useful for fixed-size codes, while VARCHAR(100) suits names of different lengths.
Q19. What is the difference between COUNT(*) and COUNT(column)?
Answer:
- COUNT(*) counts all rows.
- COUNT(column) counts rows where that column is not NULL.
Example: Suppose a table has five rows, but one row has a NULL email.
SELECT COUNT(*) FROM users;
-- Result: 5

SELECT COUNT(email) FROM users;
-- Result: 4


Explanation: The first counts every row. The second excludes rows with a missing email.
Q20. How do you find the second-highest salary in MySQL?
Answer: Use a subquery to find the maximum salary below the highest salary.
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);


Explanation: The inner query finds the highest salary. The outer query finds the highest salary among those below it.

This returns the second-highest distinct salary, even when multiple employees share the highest salary. If no lower salary exists, the result is NULL.
Part 3: MySQL Interview Q&A (21–30)
Q21. How do you find duplicate records in MySQL?
Answer: Use GROUP BY with HAVING COUNT(*) > 1.
SELECT email, COUNT(*) AS total
FROM users
GROUP BY email
HAVING COUNT(*) > 1;


Explanation: Groups users by email and returns emails that appear more than once.
Q22. How do you find the highest-paid employee in each department?
SELECT department, MAX(salary) AS highest_salary
FROM employees
GROUP BY department;


Explanation: Returns the highest salary for every department. To retrieve the employee's name too, use a join or a window function.
Q23. How do you find the top three highest salaries?
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 3;


Explanation: Returns the three highest distinct salary values, ordered from highest to lowest.
Q24. How do you retrieve employees whose names start with A?
SELECT *
FROM employees
WHERE name LIKE 'A%';


Explanation: % matches zero or more characters, so this finds names beginning with A.

Other patterns:
- 'A%': Starts with A.
- '%A': Ends with A.
- '%A%': Contains A.
Q25. What is the difference between NULL and zero?
Answer:
- NULL means a value is missing or unknown.
- 0 is a numeric value.
SELECT *
FROM employees
WHERE salary IS NULL;


Explanation: Use IS NULL to find missing values. salary = NULL does not work as expected because NULL is not an ordinary value.
Q26. How do you update data in MySQL?
UPDATE employees
SET salary = 50000
WHERE id = 101;


Explanation: Updates the salary for employee 101.

Interview tip: Always check your WHERE condition. Without it, you could update every employee. Databases are excellent at following instructions, even the disastrous ones.
Q27. How do you delete duplicate records?
Answer: One approach is to use a self-join, keeping the row with the smallest ID for each email.
DELETE e1
FROM users e1
JOIN users e2
  ON e1.email = e2.email
 AND e1.id > e2.id;


Explanation: Deletes rows with a matching email and a larger ID. This assumes id uniquely identifies each row and that duplicate emails should be removed.

Important: Back up the data and preview the affected rows with a SELECT before running a destructive query.
Q28. How do you fetch records within a date range?
SELECT *
FROM orders
WHERE order_date >= '2026-01-01'
  AND order_date < '2026-02-01';


Explanation: Retrieves orders from January 2026, including all times on January 31 if order_date is a DATETIME.

This range-based approach also works well with indexes on the date column.
Q29. What is an AUTO_INCREMENT column?
Answer: AUTO_INCREMENT automatically generates a new numeric value when a row is inserted without an explicit ID.
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);


Explanation: MySQL generates IDs for new users, reducing the need to assign them manually.
Q30. How do you find employees earning more than ₹50,000?
SELECT name, salary
FROM employees
WHERE salary > 50000;


Explanation: Returns only employees whose salary exceeds 50,000.

Part 4: MySQL Interview Q&A (31–40)
Q31. What is the difference between a subquery and a JOIN?
Answer:
- A JOIN combines related rows from tables.
- A subquery places one query inside another.
Example using a JOIN:
SELECT u.name, o.order_id
FROM users u
JOIN orders o ON u.id = o.user_id;


Explanation: Returns users alongside their matching orders. A subquery can solve some of the same problems, but a JOIN is often a natural choice for combining related tables.
Q32. What is a view in MySQL?
Answer: A view is a saved SQL query that can be queried like a virtual table.
CREATE VIEW active_users AS
SELECT id, name
FROM users
WHERE status = 'Active';


Use it like this:
SELECT * FROM active_users;


Explanation: A view simplifies repeated queries and can restrict which columns or rows users access. A normal view does not store its own copy of the query results.
Q33. What is a stored procedure?
Answer: A stored procedure is a named collection of SQL statements stored in the database and executed when called.
CREATE PROCEDURE GetUsers()
SELECT * FROM users;


Call it using:
CALL GetUsers();


Explanation: Procedures can centralize reusable database logic and accept parameters.
Q34. What is a trigger in MySQL?
Answer: A trigger automatically runs in response to a specified table event, such as an insert, update, or delete.

Example:
CREATE TRIGGER before_user_insert
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.name = TRIM(NEW.name);


Explanation: Removes leading and trailing spaces from a user's name before insertion.
Q35. What is the difference between INNER JOIN and LEFT JOIN?
Answer:
- INNER JOIN returns only matching records.
- LEFT JOIN returns all records from the left table, even when there is no match on the right.
Example:
SELECT u.name, o.order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;


Explanation: Users without orders still appear, with NULL in the order columns.
Q36. What is a composite key?
Answer: A composite key uses two or more columns together to uniquely identify a row.
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id)
);


Explanation: A student can enroll in multiple courses, but the same student-course combination cannot appear twice.
Q37. What is the difference between a clustered index and a secondary index in MySQL?
Answer: In InnoDB, the table's rows are organized by the primary key, which serves as the clustered index. Secondary indexes store their indexed values along with the primary key needed to locate the row.

Explanation: A primary-key lookup can access the row directly through the clustered index. A secondary-index lookup may require an additional lookup through the primary key.
Q38. What is a deadlock in MySQL?
Answer: A deadlock occurs when transactions hold locks that the others need, creating a cycle where neither can proceed.

Example: Transaction A locks row 1 and requests row 2, while transaction B locks row 2 and requests row 1.

How to reduce deadlocks:
- Access rows in a consistent order.
- Keep transactions short.
- Use appropriate indexes.
- Retry transactions when MySQL detects and rolls back a deadlocked transaction.
Q39. How do you find employees who do not belong to any department?
Assume employees.department_id references departments.id.
SELECT e.*
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.id
WHERE d.id IS NULL;


Explanation: Returns employees whose department reference has no matching department row, including employees whose department_id is NULL.
Q40. How can you improve a slow MySQL query?
Answer: Start by identifying the bottleneck rather than randomly adding indexes and hoping the database develops a personality transplant.

Key techniques:
1. Use EXPLAIN to inspect the query execution plan.
2. Add appropriate indexes to frequently filtered or joined columns.
3. Avoid retrieving unnecessary columns with SELECT *.
4. Optimize joins and filter conditions.
5. Check table size, indexes, and database performance metrics.
Example:
EXPLAIN
SELECT id, name
FROM employees
WHERE department_id = 10;


Explanation: EXPLAIN shows how MySQL plans to execute the query and helps identify potential performance problems.

Q41. What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?
Answer: All three assign numbers to rows, but they handle ties differently.
SELECT
    name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS rnk,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk,
    ROW_NUMBER() OVER (ORDER BY salary DESC, id) AS row_num
FROM employees;


If salaries are 90,000, 90,000, and 80,000:
Salary	RANK	DENSE_RANK	ROW_NUMBER
90,000	1	1	1
90,000	1	1	2
80,000	3	2	3

Remember: RANK() skips numbers after ties, DENSE_RANK() does not, and ROW_NUMBER() gives each row a unique number.
Q42. How do you find the third-highest salary?
Answer: Use DENSE_RANK() to find the third-highest distinct salary.
SELECT name, salary
FROM (
    SELECT name, salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
    FROM employees
) AS ranked
WHERE salary_rank = 3;


Explanation: Employees earning the third-highest distinct salary are returned, including multiple employees if they share that salary.

Requires MySQL 8.0 or later.
Q43. What is a CTE in MySQL?
Answer: A Common Table Expression (CTE) is a named temporary result set used within a single SQL statement.
WITH high_salary AS (
    SELECT name, salary
    FROM employees
    WHERE salary > 50000
)
SELECT *
FROM high_salary;


Explanation: The CTE identifies employees earning more than 50,000, and the main query retrieves them. CTEs help make complex queries easier to read.
Q44. What is the difference between COMMIT and ROLLBACK?
Answer:
- COMMIT permanently saves the current transaction's changes.
- ROLLBACK undoes uncommitted changes in the current transaction.
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

ROLLBACK;


Explanation: The update is undone if the transaction is rolled back and the changes have not already been committed.
Q45. What is the difference between EXISTS and IN?
Answer:
- IN checks whether a value matches a value in a list or subquery result.
- EXISTS checks whether a subquery returns at least one row.
Example using EXISTS:
SELECT name
FROM users u
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.user_id = u.id
);


Explanation: Returns users who have at least one order. EXISTS is often a natural choice for checking whether related records exist.
Q46. How do you find employees whose salary is above their department's average?
SELECT e.name, e.salary, e.department_id
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e.department_id
);


Explanation: The subquery calculates the average salary for each employee's department. The outer query returns employees earning more than that average.
Q47. What is the difference between a function and a stored procedure?
Answer:
Function	Stored procedure
Must return a value	Does not have to return a value
Can be used in expressions where permitted	Called using CALL
Commonly used for calculations	Commonly used for multi-step operations

Example of a built-in function:
SELECT UPPER('mysql');


Result: MYSQL

Example of a stored procedure call:
CALL GetUsers();


Q48. How do you find the total sales for each customer?
Assume an orders table contains customer_id and amount.
SELECT customer_id, SUM(amount) AS total_sales
FROM orders
GROUP BY customer_id
ORDER BY total_sales DESC;


Explanation: Calculates each customer's total order amount and lists customers from highest to lowest sales.
Q49. How do you find customers who have never placed an order?
SELECT c.*
FROM customers c
LEFT JOIN orders o
    ON c.id = o.customer_id
WHERE o.customer_id IS NULL;


Explanation: The LEFT JOIN keeps every customer, and the WHERE condition selects customers with no matching order.
Q50. What is the difference between MySQL and MongoDB?
Answer: MySQL is a relational database, while MongoDB is a document-oriented NoSQL database.
MySQL	MongoDB
Stores data in tables and rows	Stores data in documents and collections
Uses SQL	Uses MongoDB query syntax
Supports relational joins and constraints	Supports embedded documents and document references
Often suitable for structured relational data	Often suitable for flexible document-shaped data

Example:

MySQL:
SELECT * FROM users WHERE id = 1;


MongoDB:
db.users.findOne({ id: 1 });


Interview tip: Neither is universally better. Choose based on data structure, consistency requirements, query patterns, and application needs.
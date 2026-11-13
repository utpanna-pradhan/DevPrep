1. What is Express.js?

Express.js is a lightweight web framework for Node.js. It helps developers build web servers, REST APIs, and backend applications.

It simplifies tasks such as:

Handling HTTP requests and responses.

Creating API routes.

Using middleware.

Connecting to databases.

Managing errors.

2. Why do we use Express.js?

Node.js provides built-in modules to create servers, but handling routing, middleware, and requests manually can become complicated.

Express makes backend development easier by providing:

Simple routing.

Middleware support.

HTTP request handling.

Error handling.

Easy integration with databases and authentication libraries.

3. What is the difference between Node.js and Express.js?

Node.js

Express.js

JavaScript runtime environment

Web framework

Runs JavaScript outside the browser

Runs on Node.js

Provides built-in modules

Provides additional backend features

Can create servers using HTTP module

Simplifies server creation

Does not provide Express-style routing

Provides routing and middleware

Example: Node.js is the runtime, while Express is a framework running on top of it.

4. How do you install Express.js?

First, initialize a Node.js project:

npm init -y

Install Express:

npm install express

Install Nodemon for development:

npm install --save-dev nodemon

5. How do you create a basic Express server?

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

express() creates the application, app.get() defines a route, and app.listen() starts the server.

6. What is an HTTP request?

An HTTP request is a message sent by a client to a server to perform an operation.

Common HTTP methods:

Method

Purpose

GET

Retrieve data

POST

Create data

PUT

Replace a resource

PATCH

Partially update a resource

DELETE

Delete a resource

7. What is an HTTP response?

An HTTP response is the message sent by the server back to the client.

It generally contains:

Status code.

Response headers.

Response body.

Example:

res.status(200).json({
  message: "Success"
});

8. What is routing in Express.js?

Routing determines how an application responds to a particular URL and HTTP method.

Example:

app.get("/users", (req, res) => {
  res.json(["John", "David"]);
});

This route responds to GET requests sent to /users.

9. What is the difference between app.get() and app.post()?

app.get() handles GET requests, commonly used to retrieve data.

app.post() handles POST requests, commonly used to create data or submit information.

app.get("/users", (req, res) => {
  res.send("Get users");
});

app.post("/users", (req, res) => {
  res.send("Create user");
});

10. What is REST API?

REST stands for Representational State Transfer. It is an architectural style for building APIs that communicate through HTTP.

A REST API commonly:

Uses HTTP methods.

Uses resource-based URLs.

Exchanges JSON data.

Uses appropriate HTTP status codes.

Keeps requests stateless.

Example:

GET    /api/users
GET    /api/users/1
POST   /api/users
PUT    /api/users/1
DELETE /api/users/1

Section 2: Middleware and Request Handling

11. What is middleware in Express.js?

Middleware is a function that runs during the request-response cycle.

It can:

Execute code.

Read or modify request and response objects.

End the request-response cycle.

Pass control to the next middleware using next().

Example:

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

12. What are the different types of middleware?

Common types include:

Application-level middleware: Applied using app.use() or application methods.

Router-level middleware: Applied to an Express router.

Built-in middleware: Provided by Express, such as express.json().

Third-party middleware: Installed separately, such as cors and helmet.

Error-handling middleware: Handles application errors.

13. What is the difference between app.use() and app.get()?

app.use()

app.get()

Registers middleware

Registers a GET route

Can apply to multiple HTTP methods

Handles GET requests

Commonly used for middleware

Commonly used for GET endpoints

Can use a path prefix

Matches a route path

14. What is next() in Express.js?

next() passes control to the next middleware or route handler in the current processing chain.

Example:

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

Without calling next() or sending a response, the request may remain pending.

15. What is the difference between next() and next(error)?

next() moves control to the next middleware.

next(error) skips normal middleware and passes the error to error-handling middleware.

16. What is express.json()?

express.json() is built-in middleware that parses incoming JSON request bodies.

app.use(express.json());

After using it, JSON data can be accessed through:

req.body

17. What is express.urlencoded()?

It parses incoming URL-encoded form data.

app.use(express.urlencoded({ extended: true }));

It is commonly used when processing HTML form submissions.

18. What is the difference between req.params, req.query, and req.body?

Property

Purpose

Example

req.params

URL parameters

/users/10

req.query

Query string values

/users?page=2

req.body

Submitted request data

JSON or form body

Example:

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.query.page);
  res.send("User details");
});

19. What is a route parameter?

A route parameter is a dynamic value defined inside a route URL using a colon.

app.get("/users/:id", (req, res) => {
  res.send(req.params.id);
});

For /users/25, the value of req.params.id is "25".

20. What is a query parameter?

A query parameter is additional information provided after ? in a URL.

Example:

/products?category=mobile&page=2

Access it using:

req.query.category
req.query.page

Section 3: Routing, Responses and Errors

21. What is express.Router()?

express.Router() creates a separate router that helps organize routes into smaller modules.

Example:

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

app.use("/api/users", router);

It makes large applications easier to maintain.

22. What is route chaining?

Route chaining allows multiple HTTP methods to be defined for the same URL using app.route().

app.route("/users")
  .get(getUsers)
  .post(createUser);

23. What is the difference between res.send() and res.json()?

res.send() sends a response with different supported types of content.

res.json() sends a JSON response and sets the appropriate content type.

res.send("Hello");

res.json({ message: "Hello" });

Use res.json() when returning API data as JSON.

24. What is res.status()?

res.status() sets the HTTP status code of a response.

res.status(201).json({
  message: "User created"
});

It can be chained with other response methods.

25. What are common HTTP status codes?

Code

Meaning

200

OK

201

Created

204

No Content

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

422

Unprocessable Content

429

Too Many Requests

500

Internal Server Error

503

Service Unavailable

26. What is error-handling middleware?

It is middleware designed to catch and process application errors.

It has four parameters:

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
});

Express identifies it as error-handling middleware because it has four parameters.

27. How do you handle errors in Express.js?

Use try...catch for asynchronous operations and pass errors to error middleware.

app.get("/users", async (req, res, next) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

Express 5 automatically forwards rejected promises returned by route handlers to error middleware. In Express 4, you generally need to call next(error) or use an async wrapper.

28. What is a 404 error?

A 404 error means the requested resource or route was not found.

Example:

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

Place this after your application routes.

29. What is the difference between 401 and 403?

401 Unauthorized: The request does not have valid authentication credentials.

403 Forbidden: The user is authenticated but does not have permission to access the resource.

30. What is CORS?

CORS stands for Cross-Origin Resource Sharing.

It is a browser security mechanism that controls whether a web page from one origin can access resources from another origin.

Install:

npm install cors

Use:

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173"
}));

Section 4: Authentication and Security

31. What is authentication?

Authentication verifies the identity of a user.

Example: A user enters an email and password to log in.

32. What is authorization?

Authorization determines what an authenticated user is allowed to access.

Example: An admin can delete users, while a normal user cannot.

33. What is JWT?

JWT stands for JSON Web Token. It is a compact token format commonly used to transfer signed information between a client and server.

A JWT contains three parts:

Header.

Payload.

Signature.

Common uses include authentication and authorization.

34. How does JWT authentication work?

User sends login credentials.

Server validates the credentials.

Server creates and signs a JWT.

Client stores the token securely.

Client sends the token with protected requests.

Server verifies the token before allowing access.

35. What is bcrypt?

Bcrypt is a password-hashing library used to securely hash passwords before storing them.

Example:

const bcrypt = require("bcrypt");

const hashedPassword = await bcrypt.hash(password, 10);

Passwords should not be stored as plain text.

36. What is Helmet in Express.js?

Helmet is a middleware package that helps secure Express applications by setting various HTTP security headers.

Install:

npm install helmet

Use:

const helmet = require("helmet");

app.use(helmet());

37. What is rate limiting?

Rate limiting restricts how many requests a client can make within a specific time period.

It helps reduce abuse, brute-force attempts, and excessive traffic.

A common package is express-rate-limit.

38. How do you protect an Express API?

Important security practices include:

Validate and sanitize input.

Hash passwords using bcrypt or another suitable password-hashing algorithm.

Use HTTPS.

Configure CORS correctly.

Use Helmet.

Apply rate limiting.

Protect authentication tokens.

Avoid exposing secrets in source code.

Use parameterized database queries.

Enforce authorization checks.

39. What is environment configuration?

Environment variables store configuration values outside application source code.

Examples:

Port number.

Database URL.

JWT secret.

API keys.

The dotenv package loads values from a .env file during development.

npm install dotenv

require("dotenv").config();

console.log(process.env.PORT);

Do not commit real secrets or production .env files to Git.

40. What is input validation?

Input validation checks whether incoming data follows the expected format and rules.

Example: Checking whether an email is valid or a password meets minimum requirements.

Libraries such as Zod, Joi, and express-validator can help validate incoming data.

Section 5: Database, Performance and Advanced Concepts

41. How do you connect Express.js with MongoDB?

You can use Mongoose, an object data modeling library for MongoDB.

Install:

npm install mongoose

Example:

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.error(error));

42. What is Mongoose?

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

It provides:

Schemas.

Models.

Validation.

Query helpers.

Middleware and hooks.

43. What is a schema in Mongoose?

A schema defines the structure, data types, and validation rules for documents in a MongoDB collection.

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

44. What is the difference between SQL and NoSQL databases?

SQL

NoSQL

Relational database

Non-relational database

Tables and rows

Documents, key-value pairs, etc.

Often uses fixed schemas

Often supports flexible data models

Uses SQL

Query methods vary by database

Examples: PostgreSQL, MySQL

Examples: MongoDB, Redis

The choice depends on data structure and application requirements.

45. What is pagination in Express.js?

Pagination divides a large result set into smaller pages instead of returning all records at once.

Example:

GET /api/users?page=2&limit=10

A typical offset calculation is:

const skip = (page - 1) * limit;

It improves response size and usability.

46. What is API versioning?

API versioning allows developers to introduce changes without immediately breaking existing clients.

Example:

/api/v1/users
/api/v2/users

It helps maintain compatibility as an API evolves.

47. What is MVC architecture?

MVC stands for Model-View-Controller.

Model: Handles data and database operations.

View: Handles the user interface.

Controller: Handles requests and coordinates application logic.

In an Express REST API, the frontend often acts as the View, while the backend is organized around models, controllers, and routes.

48. What is the difference between synchronous and asynchronous code?

Synchronous code executes operations one after another and waits for each operation to finish.

Asynchronous code allows time-consuming operations to complete without blocking the main JavaScript execution flow.

Express applications commonly use asynchronous operations for database queries, file operations, and external API requests.

49. How do you improve Express.js application performance?

Important techniques include:

Use pagination.

Add database indexes where appropriate.

Avoid unnecessary database queries.

Use caching when useful.

Compress responses.

Avoid blocking CPU-heavy operations.

Use connection pooling.

Use production mode.

Monitor application performance.

Scale with suitable infrastructure.

50. What is the difference between Express.js and NestJS?

Express.js

NestJS

Minimal web framework

Structured Node.js framework

Flexible architecture

Opinionated architecture

Middleware and routing

Modules, controllers, providers

Developers choose project structure

Provides a standard structure

Easier to start with

Offers more built-in structure

Express is useful for flexible APIs and lightweight backends. NestJS is useful for applications that benefit from a structured architecture.
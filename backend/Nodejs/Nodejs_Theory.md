 

#  Node.js Fundamentals

### 1. What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows us to run JavaScript outside the browser.

Normally, JavaScript runs inside browsers to handle frontend functionality. Node.js allows us to use JavaScript on the server side to build APIs, web servers, backend applications, real-time applications, and more.

**Key points:**
- Runs JavaScript outside the browser.
- Uses the V8 JavaScript engine from Google Chrome.
- Uses an event-driven, non-blocking I/O model.
- Suitable for applications with many concurrent connections.

**Example:**
```js
console.log("Hello from Node.js");
```

Run it using:
```bash
node app.js
```

### 2. Why is Node.js popular?

Node.js is popular because it allows developers to use JavaScript on both the frontend and backend.

Its main advantages are:

1. **Fast execution:** Uses Google's V8 engine.
2. **Non-blocking I/O:** Does not wait unnecessarily for operations like file reading or database queries.
3. **Scalable:** Can handle many concurrent connections efficiently.
4. **Large ecosystem:** Provides thousands of packages through npm.
5. **Same language:** Developers can use JavaScript across the full stack.
6. **Real-time support:** Useful for chat applications, notifications, and live updates.

### 3. Is Node.js a programming language or a framework?

Node.js is neither a programming language nor a framework.

It is a JavaScript runtime environment.

- JavaScript is the programming language.
- Node.js provides the environment to execute JavaScript outside the browser.
- Express.js is a backend framework built for Node.js.

### 4. What is the V8 JavaScript Engine?

V8 is an open-source JavaScript engine developed by Google.

It is responsible for executing JavaScript code by compiling it into machine code.

Node.js uses V8 to execute JavaScript outside the browser.

**Example:**

When we write:
```js
const result = 10 + 20;
console.log(result);
```

V8 processes and executes the JavaScript code.

### 5. What is the difference between Node.js and JavaScript?

| JavaScript | Node.js |
|---|---|
| Programming language | Runtime environment |
| Runs in browsers and other runtimes | Runs JavaScript outside the browser |
| Can access browser APIs like DOM | Provides APIs like filesystem and HTTP |
| Used for frontend and backend logic | Commonly used for backend development |
| Browser provides its runtime APIs | Node.js provides server-side APIs |

### 6. What are the main features of Node.js?

Important features include:

- **Asynchronous:** Supports operations that complete later.
- **Non-blocking I/O:** Allows other work to continue while I/O operations are pending.
- **Event-driven:** Uses events and callbacks to coordinate operations.
- **Single JavaScript thread by default:** JavaScript callbacks normally execute on one event-loop thread.
- **Cross-platform:** Works on Windows, macOS, and Linux.
- **NPM ecosystem:** Provides a large collection of reusable packages.

### 7. What is the difference between Node.js and browser JavaScript?

Both use JavaScript, but they provide different runtime environments.

| Browser JavaScript | Node.js |
|---|---|
| Runs inside a browser | Runs outside the browser |
| Has access to the DOM | Does not have a browser DOM by default |
| Uses `window` and `document` | Uses `global` and `globalThis` |
| Used for frontend interactions | Commonly used for backend applications |
| Uses browser APIs such as localStorage | Provides APIs such as `fs` and `http` |

Both environments support JavaScript features such as promises, arrays, objects, and functions.

### 8. What is npm?

NPM stands for Node Package Manager.

It is the default package manager distributed with Node.js. It helps developers install, manage, update, and share JavaScript packages.

**Common commands:**

```bash
npm init -y
npm install express
npm install
npm uninstall express
npm update
npm run dev
```

- `npm init -y`: Creates a package.json file.
- `npm install express`: Installs Express.
- `npm install`: Installs project dependencies.
- `npm uninstall`: Removes a package.
- `npm update`: Updates packages within the allowed version ranges.

### 9. What is package.json?

`package.json` is the main configuration file of a Node.js project.

It stores project information, dependencies, scripts, and other settings.

**Example:**

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "My Node.js project",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

**Important fields:**

- `name`: Project name.
- `version`: Project version.
- `main`: Package entry point.
- `scripts`: Commands that can be executed using npm.
- `dependencies`: Packages needed to run the application.
- `devDependencies`: Packages mainly needed during development.

### 10. What is the difference between dependencies and devDependencies?

Both are used to manage project packages, but they serve different purposes.

**dependencies:** Packages required by the application at runtime.

Example:
```bash
npm install express
```

**devDependencies:** Packages mainly required during development, testing, or building.

Example:
```bash
npm install nodemon --save-dev
```

| dependencies | devDependencies |
|---|---|
| Required to run the application | Mainly required during development |
| Express, Mongoose | Nodemon, ESLint, Jest |
| Installed for production deployments | Can often be omitted from production installations |

### 11. What is package-lock.json?

`package-lock.json` records the exact dependency versions installed in a project, including their dependency tree and resolved package information.

It helps developers install consistent dependencies across different machines.

**Difference:**

- `package.json` defines dependency requirements and version ranges.
- `package-lock.json` records the exact resolved versions.

Do not manually delete or edit it without a good reason.

### 12. What is the difference between CommonJS and ES Modules?

Node.js supports two major JavaScript module systems.

**CommonJS:**
```js
const express = require("express");

module.exports = express;
```

**ES Modules:**
```js
import express from "express";

export default express;
```

| CommonJS | ES Modules |
|---|---|
| Uses `require()` | Uses `import` |
| Uses `module.exports` | Uses `export` |
| Traditionally synchronous module loading | Supports static imports and asynchronous module loading |
| Common in older Node.js projects | Standard JavaScript module system |

To use ES Modules in a Node.js project, you can set:

```json
{
  "type": "module"
}
```

---

## 2. Node.js Architecture and Core Concepts

### 13. What is the event loop in Node.js?

The event loop is a mechanism that allows Node.js to handle asynchronous operations without blocking the main JavaScript thread while waiting for I/O.

For example, when Node.js starts reading a file, it can continue executing other JavaScript code instead of waiting for the file operation to finish.

When the operation completes, its callback is scheduled to run.

**Example:**

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer completed");
}, 1000);

console.log("End");
```

**Output:**
```text
Start
End
Timer completed
```

The timer callback runs later, so Node.js does not wait for it before printing `End`.

### 14. Is Node.js single-threaded?

Node.js is often called single-threaded because JavaScript callbacks normally execute on one main thread.

However, Node.js is not entirely single-threaded internally.

It uses:
- One main JavaScript thread for normal execution.
- An event loop to coordinate asynchronous work.
- The libuv thread pool for certain operations, such as filesystem tasks and some cryptographic operations.
- Operating-system facilities for many network operations.
- Worker threads when applications need parallel JavaScript execution.

Therefore, Node.js can handle many operations concurrently even though normal JavaScript execution uses one main thread.

### 15. What is libuv in Node.js?

Libuv is a cross-platform library used by Node.js to support asynchronous I/O operations.

It provides:
- Event loop functionality.
- Thread pool support.
- Asynchronous filesystem operations.
- Networking support.
- Timers and other operating-system integrations.

In simple words, libuv helps Node.js manage asynchronous operations efficiently.

### 16. What is non-blocking I/O?

Non-blocking I/O means Node.js can start an input/output operation and continue executing other code without waiting for that operation to finish.

**Example:**

```js
const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("End");
```

**Possible output:**
```text
Start
End
File content
```

Node.js starts reading the file and continues executing the remaining code.

### 17. What is blocking I/O?

Blocking I/O means the execution of JavaScript is paused until an operation finishes.

**Example:**

```js
const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("data.txt", "utf8");

console.log(data);
console.log("End");
```

Here, `readFileSync()` blocks the JavaScript thread until the file is read.

**Difference:**

- Blocking I/O waits for an operation to complete.
- Non-blocking I/O allows other work to continue while the operation is pending.

For server applications, asynchronous I/O is generally preferred.

### 18. What are the phases of the Node.js event loop?

The event loop processes callbacks through different phases.

The main phases are:

1. **Timers:** Executes eligible callbacks from `setTimeout()` and `setInterval()`.
2. **Pending callbacks:** Executes certain system-level I/O callbacks deferred from earlier operations.
3. **Idle, prepare:** Internal Node.js and libuv operations.
4. **Poll:** Retrieves new I/O events and executes most I/O callbacks.
5. **Check:** Executes callbacks scheduled by `setImmediate()`.
6. **Close callbacks:** Executes callbacks for closed resources, such as sockets.

Promise callbacks and `process.nextTick()` callbacks use separate scheduling mechanisms and are not event-loop phases.

### 19. What is the difference between setTimeout() and setImmediate()?

Both are used to schedule callbacks, but they behave differently.

**setTimeout():**
Schedules a callback to run after at least the specified delay.

```js
setTimeout(() => {
  console.log("Timeout");
}, 1000);
```

**setImmediate():**
Schedules a callback to run in the check phase of the event loop.

```js
setImmediate(() => {
  console.log("Immediate");
});
```

| setTimeout() | setImmediate() |
|---|---|
| Uses a timer threshold | Runs in the check phase |
| Accepts a delay in milliseconds | Does not require a delay |
| Runs when its timer becomes eligible | Runs after the poll phase |

Their order can vary depending on the execution context. Inside an I/O callback, `setImmediate()` generally runs before a zero-delay timer scheduled there.

### 20. What is process.nextTick()?

`process.nextTick()` schedules a callback to run after the current JavaScript operation completes, before the event loop continues to its next phase.

**Example:**

```js
console.log("Start");

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");
```

**Output:**
```text
Start
End
Next Tick
```

It is useful for scheduling work immediately after the current operation.

However, recursively scheduling too many `process.nextTick()` callbacks can prevent the event loop from making progress.

### 21. What is the difference between process.nextTick() and Promise.then()?

Both schedule callbacks to run asynchronously, but they use different queues.

- `process.nextTick()` uses Node.js's next-tick queue.
- `Promise.then()` uses the microtask queue.

In Node.js, next-tick callbacks are normally processed before promise microtasks after the current JavaScript operation.

**Example:**

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");
```

**Output:**
```text
Start
End
Next Tick
Promise
```

### 22. What is a callback function in Node.js?

A callback is a function passed as an argument to another function. It is called when a particular operation completes or an event occurs.

Node.js traditionally uses callbacks for asynchronous operations.

**Example:**

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
```

The callback receives an error and the file data.

### 23. What is callback hell?

Callback hell happens when multiple nested callbacks make code difficult to read, understand, and maintain.

**Example:**

```js
getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders[0].id, (payment) => {
      console.log(payment);
    });
  });
});
```

**Problems:**
- Difficult to read.
- Difficult to debug.
- Error handling becomes complicated.
- Code becomes deeply nested.

**Solution:** Use Promises or async/await.

### 24. What is a Promise in Node.js?

A Promise is a JavaScript object that represents the eventual success or failure of an asynchronous operation.

A Promise has three states:

1. **Pending:** Operation is still running.
2. **Fulfilled:** Operation completed successfully.
3. **Rejected:** Operation failed.

**Example:**

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

### 25. What is async/await?

Async/await is a modern way to handle asynchronous JavaScript operations using Promises.

It makes asynchronous code easier to read and maintain.

**Example:**

```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

- `async` makes a function return a Promise.
- `await` waits for a Promise to settle before continuing inside that async function.
- `try/catch` handles errors.

It does not block the entire Node.js event loop while waiting for asynchronous operations.

### 26. What is the difference between Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any()?

These methods help manage multiple Promises.

**Promise.all():**

Waits for all Promises to fulfill. Rejects immediately when one rejects.

```js
const results = await Promise.all([
  fetchUsers(),
  fetchProducts()
]);
```

**Promise.allSettled():**

Waits for every Promise to settle, whether fulfilled or rejected.

```js
const results = await Promise.allSettled([
  fetchUsers(),
  fetchProducts()
]);
```

**Promise.race():**

Settles with the result of the first Promise to settle.

```js
const result = await Promise.race([
  fetchData(),
  timeout()
]);
```

**Promise.any():**

Fulfills with the first fulfilled Promise. Rejects with an AggregateError if all Promises reject.

```js
const result = await Promise.any([
  serverOne(),
  serverTwo()
]);
```

### 27. What is EventEmitter in Node.js?

EventEmitter is a class from Node.js's built-in `events` module.

It allows different parts of an application to communicate through events.

One part emits an event, and another part listens for it.

**Example:**

```js
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("greet", () => {
  console.log("Hello!");
});

event.emit("greet");
```

**Output:**
```text
Hello!
```

Common methods:
- `on()`: Registers an event listener.
- `emit()`: Triggers an event.
- `once()`: Runs a listener only once.
- `off()`: Removes a listener.

---

## 3. Node.js Core Modules and Backend Development

### 28. What are Node.js modules?

Modules are reusable pieces of code that help organize an application into smaller files or components.

Node.js supports three major categories:

1. **Built-in modules:** Included with Node.js, such as `fs`, `http`, `path`, and `events`.
2. **Local modules:** Modules created inside our project.
3. **Third-party modules:** Packages installed through npm, such as Express and Mongoose.

### 29. What is the fs module?

The `fs` module stands for File System.

It is a built-in Node.js module used to work with files and directories.

It supports reading, writing, updating, deleting, and managing files.

**Example:**

```js
const fs = require("fs");

fs.writeFile("test.txt", "Hello Node.js", (err) => {
  if (err) throw err;

  console.log("File created successfully");
});
```

Common methods:
- `readFile()`: Reads a file asynchronously.
- `writeFile()`: Creates or replaces a file.
- `appendFile()`: Adds content to a file.
- `unlink()`: Deletes a file.
- `mkdir()`: Creates a directory.

### 30. What is the difference between readFile() and readFileSync()?

Both methods read files, but they behave differently.

**readFile():**
Reads a file asynchronously and uses a callback or Promise-based API.

```js
fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});
```

**readFileSync():**
Reads a file synchronously and blocks execution until the operation finishes.

```js
const data = fs.readFileSync("data.txt", "utf8");

console.log(data);
```

For normal server request handling, asynchronous file operations are generally preferred because synchronous operations can block other requests.

### 31. What is the path module?

The `path` module is a built-in Node.js module used to work with file and directory paths.

It helps create paths correctly across different operating systems.

**Example:**

```js
const path = require("path");

const filePath = path.join(
  __dirname,
  "uploads",
  "image.png"
);

console.log(filePath);
```

Important methods:
- `path.join()`: Joins path segments.
- `path.resolve()`: Creates an absolute path.
- `path.basename()`: Returns the file name.
- `path.extname()`: Returns the file extension.
- `path.dirname()`: Returns the directory name.

### 32. What is the http module?

The `http` module is a built-in Node.js module used to create HTTP servers and handle HTTP requests and responses.

**Example:**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("Hello from Node.js");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Here:
- `createServer()` creates an HTTP server.
- `req` represents the incoming request.
- `res` represents the outgoing response.
- `listen()` starts the server.

### 33. What is the difference between HTTP and HTTPS?

HTTP stands for Hypertext Transfer Protocol.

HTTPS stands for Hypertext Transfer Protocol Secure.

| HTTP | HTTPS |
|---|---|
| Data is not encrypted by HTTP itself | Uses TLS encryption |
| Less secure for sensitive information | Protects data during transmission |
| Uses HTTP protocol | Uses HTTP over TLS |
| Commonly uses port 80 | Commonly uses port 443 |

HTTPS helps protect information such as passwords, tokens, and payment details while data travels between the client and server.

### 34. What is Express.js?

Express.js is a lightweight and flexible web framework built for Node.js.

It simplifies backend development by providing features for routing, middleware, request handling, and API development.

**Example:**

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Server running");
});
```

Without Express, we can create servers using Node's built-in HTTP module, but we would need to handle more details ourselves.

### 35. What is middleware in Express.js?

Middleware is a function that runs during the request-response cycle.

It can access the request, response, and `next()` function.

Middleware can:
- Execute code.
- Read or modify request data.
- Validate user input.
- Check authentication.
- Log requests.
- Send a response.
- Pass control to the next middleware.

**Example:**

```js
const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

Here, `express.json()` parses incoming JSON request bodies, and the second middleware logs each request.

### 36. What is the difference between app.use() and app.get()?

Both are Express methods, but they serve different purposes.

**app.use():**

Used to register middleware. It can run for multiple HTTP methods and can be mounted on a path.

```js
app.use(express.json());
```

**app.get():**

Used to define a route that handles HTTP GET requests.

```js
app.get("/users", (req, res) => {
  res.send("User list");
});
```

In simple terms:
- `app.use()` registers middleware.
- `app.get()` handles GET requests for a particular route.

### 37. What are REST APIs?

REST stands for Representational State Transfer.

REST is an architectural style for building web services that communicate using HTTP.

REST APIs allow frontend applications to communicate with backend servers.

Common HTTP methods:

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create data |
| PUT | Replace an existing resource |
| PATCH | Partially update a resource |
| DELETE | Delete a resource |

**Example:**

```js
app.get("/users", getUsers);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.patch("/users/:id", updateUserPartially);
app.delete("/users/:id", deleteUser);
```

### 38. What are req.params, req.query, and req.body?

These are used to access different types of incoming request data in Express.

**1. req.params**

Used to access route parameters.

```js
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
});
```

URL:
`/users/101`

Output:
`101`

**2. req.query**

Used to access query string parameters.

```js
app.get("/users", (req, res) => {
  console.log(req.query.name);
});
```

URL:
`/users?name=John`

Output:
`John`

**3. req.body**

Used to access data sent in the request body.

```js
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
});
```

It is commonly used when sending JSON data through POST, PUT, or PATCH requests.

### 39. What is CORS?

CORS stands for Cross-Origin Resource Sharing.

It is a browser security mechanism that controls whether a web page can access resources from a different origin.

An origin consists of the protocol, hostname, and port.

For example:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

These are different origins.

The backend can configure CORS to allow requests from the frontend.

**Example using Express:**

```js
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173"
}));
```

CORS is enforced by browsers. It is not a replacement for authentication or authorization.

### 40. What is the difference between authentication and authorization?

Both are important for application security.

**Authentication:** Verifies who the user is.

Example: A user logs in with an email and password.

**Authorization:** Determines what the authenticated user is allowed to access.

Example: An admin can delete users, but a normal user cannot.

| Authentication | Authorization |
|---|---|
| Verifies identity | Checks permissions |
| Happens first | Usually happens after authentication |
| Login | Role and permission checks |

---

## 4. Database, Security, and Error Handling

### 41. What is the difference between SQL and NoSQL databases?

Both are used to store application data.

**SQL databases:**
Store structured data in tables with rows and columns.

Examples:
- PostgreSQL
- MySQL
- SQLite

**NoSQL databases:**
Support different data models, including document, key-value, graph, and wide-column databases.

Examples:
- MongoDB
- Redis
- Cassandra

| SQL | NoSQL |
|---|---|
| Commonly uses tables | Uses different data models |
| Often has a predefined schema | Often supports flexible schemas |
| Supports relational queries and joins | Query capabilities depend on the database |
| Good for relational data and transactions | Useful for flexible data models and specific scaling needs |

The correct choice depends on the application's requirements, not simply on which database is more popular.

### 42. What is MongoDB?

MongoDB is a NoSQL document database.

It stores data in documents using a BSON format, which is similar to JSON.

**Example document:**

```json
{
  "name": "John",
  "email": "john@example.com",
  "age": 25
}
```

Important MongoDB terms:

- Database: Contains collections.
- Collection: Contains documents.
- Document: Stores individual records.
- `_id`: Unique identifier for each document by default.

MongoDB is commonly used with Node.js applications.

### 43. What is Mongoose?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.

It helps developers define schemas, validate data, create models, and interact with MongoDB.

**Example:**

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model("User", userSchema);
```

Here:
- Schema defines the structure and validation rules.
- Model provides methods to interact with a MongoDB collection.

### 44. What is JWT authentication?

JWT stands for JSON Web Token.

It is a compact token format commonly used to share signed claims between a client and server.

A typical JWT has three parts:

1. Header
2. Payload
3. Signature

**Typical authentication flow:**

1. User sends login credentials.
2. Backend verifies the credentials.
3. Backend creates a signed JWT.
4. Client receives and stores the token.
5. Client sends the token with future requests.
6. Backend verifies the token before allowing protected access.

**Example:**

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: "123" },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);
```

Important: A signed JWT is not automatically encrypted. Do not store passwords or sensitive secrets inside its payload.

### 45. How do you store passwords securely in Node.js?

Passwords should never be stored as plain text.

We should hash passwords using a secure password-hashing algorithm such as bcrypt or Argon2.

**Example using bcrypt:**

```js
const bcrypt = require("bcrypt");

const hashedPassword = await bcrypt.hash(password, 12);
```

To verify a password:

```js
const isMatch = await bcrypt.compare(
  enteredPassword,
  hashedPassword
);
```

**Important points:**
- Never store plain-text passwords.
- Use a password-hashing algorithm such as bcrypt or Argon2.
- Use an appropriate work factor.
- Never log passwords.
- Keep secrets in environment variables.

### 46. What are environment variables in Node.js?

Environment variables store configuration values outside the source code.

They are commonly used for:
- Database URLs.
- API keys.
- JWT secrets.
- Application ports.
- Third-party service credentials.

**Example `.env` file:**

```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=my_secret_key
```

Using dotenv:

```js
require("dotenv").config();

const port = process.env.PORT || 3000;
```

Never commit real secrets or production `.env` files to GitHub.

### 47. How do you handle errors in Node.js?

Error handling helps prevent unexpected failures and allows applications to return meaningful responses.

For synchronous code, use `try/catch`:

```js
try {
  const result = JSON.parse("invalid json");
} catch (error) {
  console.log(error.message);
}
```

For async/await:

```js
async function getUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

In Express, centralized error-handling middleware is commonly used:

```js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: "Something went wrong"
  });
});
```

An Express error-handling middleware has four parameters: `err`, `req`, `res`, and `next`.

---

## 5. Advanced Node.js and Production Concepts

### 48. What is the difference between cluster and worker_threads in Node.js?

Both can help use multiple CPU cores, but they work differently.

**Cluster module:**

Creates multiple Node.js processes that can share a server port. Each process has its own JavaScript execution environment and memory.

**Worker Threads:**

Creates additional threads within a Node.js process. They are useful for CPU-intensive JavaScript tasks.

| Cluster | Worker Threads |
|---|---|
| Uses multiple processes | Uses multiple threads |
| Separate process memory | Can share memory using SharedArrayBuffer |
| Useful for scaling server request handling | Useful for CPU-intensive JavaScript work |
| Communicates using inter-process messaging | Communicates using messages and optional shared memory |

For example:
- Cluster can run multiple server workers.
- Worker threads can perform expensive calculations without blocking the main JavaScript thread.

### 49. What is a memory leak in Node.js, and how can you prevent it?

A memory leak happens when an application keeps references to objects that are no longer needed.

Because those objects remain reachable, the garbage collector cannot remove them, and memory usage can keep increasing.

**Common causes:**
- Global variables that keep growing.
- Event listeners that are never removed.
- Unreleased timers.
- Large caches without limits.
- Unnecessary references to objects.

**How to prevent memory leaks:**
1. Remove unused event listeners.
2. Clear timers when they are no longer needed.
3. Avoid unnecessary global variables.
4. Limit cache size.
5. Monitor memory usage.
6. Use profiling tools to identify retained objects.

Useful tools include Node.js's built-in inspector and heap snapshots.

### 50. How do you improve the performance and scalability of a Node.js application?

Performance means how efficiently an application handles work. Scalability means how well it handles increasing traffic and workload.

Important techniques include:

1. **Use asynchronous operations:** Avoid blocking the main JavaScript thread.
2. **Use database indexes:** Improve query performance.
3. **Add caching:** Use Redis or in-memory caching where appropriate.
4. **Use pagination:** Avoid returning huge amounts of data in one request.
5. **Use compression:** Reduce response sizes where beneficial.
6. **Use load balancing:** Distribute requests across multiple server instances.
7. **Use clustering or multiple instances:** Take advantage of multiple CPU cores.
8. **Optimize database queries:** Avoid unnecessary queries and repeated database calls.
9. **Monitor performance:** Track CPU, memory, response times, and errors.
10. **Avoid CPU-heavy work on the main thread:** Use worker threads or separate services when appropriate.

The goal is to make the application fast, reliable, and capable of handling more users.

---

# Important Node.js Interview Revision Checklist

Before attending a Node.js interview, make sure you can explain these topics without reading your notes:

- [ ] Node.js architecture and V8 engine
- [ ] Event loop and its phases
- [ ] Single-threaded vs multithreaded execution
- [ ] Blocking vs non-blocking I/O
- [ ] Callback, Promise, and async/await
- [ ] Promise methods
- [ ] `process.nextTick()` vs `setImmediate()`
- [ ] CommonJS vs ES Modules
- [ ] Core modules: fs, path, http, events
- [ ] Express.js and middleware
- [ ] REST API and HTTP methods
- [ ] Request parameters, query, and body
- [ ] CORS
- [ ] Authentication and authorization
- [ ] JWT and password hashing
- [ ] MongoDB and Mongoose
- [ ] Error handling
- [ ] Cluster and worker threads
- [ ] Memory leaks
- [ ] Performance and scalability

## Interview preparation advice

For a fresher or junior full-stack developer, prioritize these topics:

**Highest priority:** Questions 13–27 (Node.js architecture and asynchronous JavaScript), 34–40 (Express and APIs), and 44–47 (authentication, security, and error handling).

Do not just memorize definitions. Be ready to explain each concept with a small example and describe where you would use it in a real backend project.
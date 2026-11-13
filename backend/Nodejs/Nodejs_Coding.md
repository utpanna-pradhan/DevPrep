
# Top 50 Node.js Coding Interview Questions and Answers

## Section 1: Node.js Fundamentals

### 1. Write a Node.js program to print Hello World.

**Code:**

```js
console.log("Hello World");
```

**Explanation:**

- `console.log()` prints a message in the terminal.
- Node.js executes the JavaScript file outside the browser.

Run the file:

```bash
node app.js
```

**Output:**

```text
Hello World
```

### 2. Create a basic Node.js HTTP server.

**Code:**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("Welcome to Node.js Server");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Explanation:**

- `require("http")` imports the HTTP module.
- `createServer()` creates an HTTP server.
- `req` contains incoming request information.
- `res` is used to send a response.
- `writeHead(200)` sets the HTTP status code and headers.
- `res.end()` sends the response and completes it.
- `listen(3000)` starts the server on port 3000.

Open `http://localhost:3000` in your browser.

### 3. Create a Node.js server that returns JSON.

**Code:**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  const user = {
    id: 1,
    name: "John",
    role: "Developer"
  };

  res.end(JSON.stringify(user));
});

server.listen(3000);
```

**Explanation:**

- We create a JavaScript object containing user information.
- `JSON.stringify()` converts the object into a JSON string.
- The `Content-Type` header tells the client that the response is JSON.
- `res.end()` sends the JSON response.

**Response:**

```json
{
  "id": 1,
  "name": "John",
  "role": "Developer"
}
```

### 4. Create a server with multiple routes using the HTTP module.

**Code:**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.end("Contact Page");
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(3000);
```

**Explanation:**

- `req.url` provides the requested URL path.
- We use `if/else` to check which route the client requested.
- If the route does not exist, we return status code `404`.
- This is a basic way to handle routes without Express.

### 5. Create a custom module and import it into another file.

**File: math.js**

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

**File: app.js**

```js
const math = require("./math");

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));
```

**Output:**

```text
15
5
```

**Explanation:**

- `math.js` contains reusable functions.
- `module.exports` makes those functions available to other files.
- `require("./math")` imports the local module.
- This helps organize large applications into smaller files.

### 6. Use the path module to create a file path.

**Code:**

```js
const path = require("path");

const filePath = path.join(
  __dirname,
  "uploads",
  "image.png"
);

console.log(filePath);
```

**Explanation:**

- `path` is a built-in Node.js module.
- `__dirname` gives the directory of the current CommonJS file.
- `path.join()` combines path segments correctly.
- It handles operating-system-specific path separators.

### 7. Read environment variables in Node.js.

**File: .env**

```env
PORT=5000
APP_NAME=My Node App
```

**File: server.js**

```js
require("dotenv").config();

const port = process.env.PORT || 3000;
const appName = process.env.APP_NAME;

console.log("App:", appName);
console.log("Port:", port);
```

Install dotenv:

```bash
npm install dotenv
```

**Explanation:**

- `.env` stores configuration outside the source code.
- `dotenv` loads the variables into `process.env`.
- `process.env.PORT` accesses the port value.
- `|| 3000` provides a fallback if the variable is missing.

Never commit real secrets or production credentials to GitHub.

### 8. Create a simple counter using setInterval().

**Code:**

```js
let count = 1;

const timer = setInterval(() => {
  console.log(count);

  count++;

  if (count > 5) {
    clearInterval(timer);
  }
}, 1000);
```

**Output:**

```text
1
2
3
4
5
```

**Explanation:**

- `setInterval()` executes a callback repeatedly after the specified delay.
- `1000` means approximately one second.
- `clearInterval()` stops the timer.
- We stop it when the counter becomes greater than 5.

### 9. Create a delay function using Promise and async/await.

**Code:**

```js
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  console.log("Start");

  await delay(2000);

  console.log("After 2 seconds");
}

run();
```

**Explanation:**

- `delay()` returns a Promise.
- `setTimeout()` calls `resolve` after the specified delay.
- `await` pauses the `run()` function until the Promise settles.
- It does not block the entire Node.js event loop.

### 10. Handle errors using try/catch.

**Code:**

```js
async function getUser() {
  try {
    const user = await Promise.reject(
      new Error("User not found")
    );

    console.log(user);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUser();
```

**Output:**

```text
Error: User not found
```

**Explanation:**

- `try` contains code that may fail.
- `catch` handles the error.
- `error.message` displays the error message.
- This pattern is commonly used with database queries and API calls.

---

## Section 2: File System and Core Modules

### 11. Create a file using the fs module.

**Code:**

```js
const fs = require("fs");

fs.writeFile(
  "message.txt",
  "Hello from Node.js",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("File created successfully");
  }
);
```

**Explanation:**

- `fs` is the built-in File System module.
- `writeFile()` creates a file if it does not exist.
- If the file already exists, its content is replaced.
- The callback handles the result of the operation.

### 12. Read a file using fs.readFile().

**Code:**

```js
const fs = require("fs");

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log(data);
});
```

**Explanation:**

- `readFile()` reads a file asynchronously.
- `"utf8"` converts the file content into readable text.
- `err` contains an error if reading fails.
- `data` contains the file content if successful.

### 13. Append content to an existing file.

**Code:**

```js
const fs = require("fs");

fs.appendFile(
  "message.txt",
  "\nNew content added",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Content added successfully");
  }
);
```

**Explanation:**

- `appendFile()` adds content at the end of a file.
- It does not replace existing content.
- If the file does not exist, Node.js creates it.

### 14. Delete a file using Node.js.

**Code:**

```js
const fs = require("fs");

fs.unlink("message.txt", (err) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log("File deleted successfully");
});
```

**Explanation:**

- `unlink()` deletes a file.
- If the file does not exist, it returns an error.
- Always handle errors when working with files.

### 15. Create a directory using Node.js.

**Code:**

```js
const fs = require("fs");

fs.mkdir("uploads", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Directory created");
});
```

**Explanation:**

- `mkdir()` creates a directory.
- `recursive: true` allows parent directories to be created when needed.
- If the directory already exists, recursive mode avoids an error.

### 16. List all files inside a directory.

**Code:**

```js
const fs = require("fs");

fs.readdir("./uploads", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(files);
});
```

**Explanation:**

- `readdir()` reads the contents of a directory.
- It returns an array of file and directory names.
- We can use the returned array to process each item.

### 17. Copy a file using Node.js.

**Code:**

```js
const fs = require("fs");

fs.copyFile(
  "original.txt",
  "copy.txt",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("File copied successfully");
  }
);
```

**Explanation:**

- `copyFile()` copies the source file to the destination.
- The original file remains unchanged.
- The destination file is created or overwritten according to the operation's options.

### 18. Read a large file using streams.

**Code:**

```js
const fs = require("fs");

const readStream = fs.createReadStream(
  "large-file.txt",
  { encoding: "utf8" }
);

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
  console.log("File reading completed");
});

readStream.on("error", (error) => {
  console.log(error.message);
});
```

**Explanation:**

- A stream processes data in smaller chunks.
- `createReadStream()` reads the file piece by piece.
- The `data` event fires when a chunk is available.
- The `end` event fires when reading is complete.
- Streams are useful for large files because they avoid loading the entire file into memory at once.

### 19. Copy a file using streams.

**Code:**

```js
const fs = require("fs");

const source = fs.createReadStream("input.txt");
const destination = fs.createWriteStream("output.txt");

source.pipe(destination);

destination.on("finish", () => {
  console.log("File copied successfully");
});

source.on("error", console.error);
destination.on("error", console.error);
```

**Explanation:**

- `createReadStream()` reads the source file.
- `createWriteStream()` writes data to the destination.
- `pipe()` connects the readable stream to the writable stream.
- It automatically manages data flow and backpressure.

### 20. Create a JSON file and read its content.

**Code:**

```js
const fs = require("fs");

const user = {
  id: 1,
  name: "John",
  email: "john@example.com"
};

fs.writeFile(
  "user.json",
  JSON.stringify(user, null, 2),
  (err) => {
    if (err) {
      console.log(err);
      return;
    }

    fs.readFile("user.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const parsedData = JSON.parse(data);

      console.log(parsedData);
    });
  }
);
```

**Explanation:**

- `JSON.stringify()` converts a JavaScript object into JSON text.
- `null, 2` formats the JSON with indentation.
- `readFile()` reads the JSON file.
- `JSON.parse()` converts JSON text back into a JavaScript object.

---

## Section 3: Express.js and REST API Coding

For questions 21–40, we use Express.js because it is widely used to build Node.js backend applications.

Install Express:

```bash
npm install express
```

### 21. Create a basic Express server.

**Code:**

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Explanation:**

- `express()` creates an Express application.
- `app.get()` defines a GET route.
- `res.send()` sends a response.
- `app.listen()` starts the server.

### 22. Create GET and POST API routes.

**Code:**

```js
const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json({
    message: "All users"
  });
});

app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User created",
    user: req.body
  });
});

app.listen(3000);
```

**Explanation:**

- GET retrieves information.
- POST creates a resource.
- `express.json()` parses incoming JSON request bodies.
- `req.body` contains the submitted data.
- `201` means the resource was created successfully.

### 23. Create an API using route parameters.

**Code:**

```js
const express = require("express");

const app = express();

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: "User found",
    id: userId
  });
});

app.listen(3000);
```

**Request:**

```text
GET /users/101
```

**Response:**

```json
{
  "message": "User found",
  "id": "101"
}
```

**Explanation:**

- `:id` is a dynamic route parameter.
- `req.params.id` reads its value.
- Route parameters are useful for retrieving a particular user, product, or order.

### 24. Create an API using query parameters.

**Code:**

```js
const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  const category = req.query.category;

  res.json({
    message: "Products fetched",
    category
  });
});

app.listen(3000);
```

**Request:**

```text
GET /products?category=electronics
```

**Response:**

```json
{
  "message": "Products fetched",
  "category": "electronics"
}
```

**Explanation:**

- Query parameters come after `?` in a URL.
- `req.query` provides access to them.
- They are commonly used for filtering, sorting, and pagination.

### 25. Create a CRUD API using an in-memory array.

**Code:**

```js
const express = require("express");

const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET one user
app.get("/users/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

// CREATE user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required"
    });
  }

  const newUser = {
    id: Date.now(),
    name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required"
    });
  }

  user.name = name;

  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const initialLength = users.length;

  users = users.filter((u) => u.id !== userId);

  if (users.length === initialLength) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json({
    message: "User deleted successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running");
});
```

**Explanation:**

This API performs all four CRUD operations:

- Create: `POST /users`
- Read: `GET /users` and `GET /users/:id`
- Update: `PUT /users/:id`
- Delete: `DELETE /users/:id`

The array stores data temporarily. Restarting the server resets the data. A real application should use a database.

### 26. Create custom middleware in Express.

**Code:**

```js
const express = require("express");

const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.url}`
  );

  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);
```

**Explanation:**

- `logger` is a middleware function.
- It receives `req`, `res`, and `next`.
- It logs the HTTP method and URL.
- `next()` passes control to the next middleware or route handler.
- Without `next()` or a response, the request may remain pending.

### 27. Create authentication middleware.

**Code:**

```js
const express = require("express");

const app = express();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (token !== "my-secret-token") {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  next();
};

app.get("/profile", authenticate, (req, res) => {
  res.json({
    message: "Welcome to your profile"
  });
});

app.listen(3000);
```

**Explanation:**

- The middleware checks the authorization header.
- If the token is invalid, it returns `401 Unauthorized`.
- If the token is valid, `next()` allows the request to continue.

This is only a simplified interview demonstration. Real applications should verify signed tokens or session credentials securely.

### 28. Create centralized error-handling middleware.

**Code:**

```js
const express = require("express");

const app = express();

app.get("/users", (req, res, next) => {
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

app.listen(3000);
```

**Explanation:**

- `next(error)` passes the error to Express error-handling middleware.
- Error-handling middleware has four parameters.
- It provides a central place to handle application errors.
- It avoids writing repeated error-response logic in every route.

### 29. Create an API to search users by name.

**Code:**

```js
const express = require("express");

const app = express();

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Johnny" }
];

app.get("/users/search", (req, res) => {
  const search = req.query.name || "";

  const results = users.filter((user) =>
    user.name.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  res.json(results);
});

app.listen(3000);
```

**Request:**

```text
GET /users/search?name=john
```

**Response:**

```json
[
  { "id": 1, "name": "John" },
  { "id": 3, "name": "Johnny" }
]
```

**Explanation:**

- `req.query.name` reads the search term.
- `toLowerCase()` makes the search case-insensitive.
- `filter()` returns matching users.
- `includes()` checks whether a name contains the search term.

### 30. Create an API with pagination.

**Code:**

```js
const express = require("express");

const app = express();

const users = Array.from(
  { length: 50 },
  (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`
  })
);

app.get("/users", (req, res) => {
  const page = Math.max(
    1,
    Number(req.query.page) || 1
  );

  const limit = Math.min(
    100,
    Math.max(1, Number(req.query.limit) || 10)
  );

  const startIndex = (page - 1) * limit;

  const paginatedUsers = users.slice(
    startIndex,
    startIndex + limit
  );

  res.json({
    page,
    limit,
    total: users.length,
    data: paginatedUsers
  });
});

app.listen(3000);
```

**Request:**

```text
GET /users?page=2&limit=10
```

**Explanation:**

- `page` tells us which page to return.
- `limit` tells us how many records to return.
- `(page - 1) * limit` calculates the starting index.
- `slice()` returns only the requested records.
- Pagination prevents an API from returning too much data at once.

---

## Section 4: Async Programming and Events

### 31. Execute multiple asynchronous operations using Promise.all().

**Code:**

```js
function getUser() {
  return Promise.resolve({
    id: 1,
    name: "John"
  });
}

function getProducts() {
  return Promise.resolve([
    "Laptop",
    "Mobile"
  ]);
}

async function getData() {
  try {
    const [user, products] = await Promise.all([
      getUser(),
      getProducts()
    ]);

    console.log(user);
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

**Explanation:**

- Both functions return Promises.
- `Promise.all()` waits for both to fulfill.
- The results are returned in the same order as the input Promises.
- If one Promise rejects, `Promise.all()` rejects.
- It is useful when independent API requests can run concurrently.

### 32. Create a function that retries a failed asynchronous operation.

**Code:**

```js
async function retry(fn, attempts = 3) {
  let lastError;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${i + 1} failed`);
    }
  }

  throw lastError;
}

// Example
async function fetchData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}

retry(fetchData, 3)
  .then(console.log)
  .catch(console.error);
```

**Explanation:**

- `retry()` accepts an asynchronous function.
- The loop runs it up to the specified number of attempts.
- If the operation succeeds, its result is returned.
- If all attempts fail, the last error is thrown.

In production, retries should usually include a delay, backoff strategy, and limits to avoid repeatedly overwhelming a failing service.

### 33. Create an EventEmitter example.

**Code:**

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userRegistered", (username) => {
  console.log(`${username} registered successfully`);
});

emitter.emit("userRegistered", "John");
```

**Output:**

```text
John registered successfully
```

**Explanation:**

- `EventEmitter` is imported from the built-in `events` module.
- `on()` registers a listener.
- `emit()` triggers the event.
- `"John"` is passed as an argument to the listener.

### 34. Create an event listener that runs only once.

**Code:**

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.once("login", () => {
  console.log("User logged in");
});

emitter.emit("login");
emitter.emit("login");
```

**Output:**

```text
User logged in
```

**Explanation:**

- `once()` registers a one-time listener.
- The listener executes only on the first matching event.
- After execution, it is automatically removed.

### 35. Execute asynchronous tasks one after another.

**Code:**

```js
function task(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, delay);
  });
}

async function runTasks() {
  await task("Task 1", 1000);
  await task("Task 2", 1000);
  await task("Task 3", 1000);

  console.log("All tasks completed");
}

runTasks();
```

**Output:**

```text
Task 1
Task 2
Task 3
All tasks completed
```

**Explanation:**

- Each task returns a Promise.
- `await` waits for the current task before starting the next one.
- This is sequential execution.
- It is useful when one operation depends on the result of another.

### 36. Create a simple rate limiter in Express.

**Code:**

```js
const express = require("express");

const app = express();

const requests = new Map();

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  const windowMs = 60 * 1000;
  const maxRequests = 5;

  let record = requests.get(ip);

  if (!record || now - record.start > windowMs) {
    record = {
      start: now,
      count: 0
    };
  }

  record.count++;

  requests.set(ip, record);

  if (record.count > maxRequests) {
    return res.status(429).json({
      message: "Too many requests"
    });
  }

  next();
};

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("Request successful");
});

app.listen(3000);
```

**Explanation:**

- A `Map` stores request counts by IP address.
- `windowMs` defines a one-minute time window.
- `maxRequests` limits requests to five in that window.
- If the limit is exceeded, the server returns `429 Too Many Requests`.

This is a learning example. A production rate limiter should use a shared store such as Redis when running multiple server instances, and should correctly handle trusted proxy configuration and cleanup.

---

## Section 5: Database and Authentication Coding

For questions 37–40, we use MongoDB with Mongoose.

Install dependencies:

```bash
npm install mongoose
```

### 37. Connect Node.js to MongoDB using Mongoose.

**Code:**

```js
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.error(
      "Database connection failed:",
      error.message
    );

    process.exit(1);
  }
}

connectDB();
```

**Explanation:**

- `mongoose.connect()` connects the application to MongoDB.
- `await` waits for the connection attempt.
- `try/catch` handles connection errors.
- The connection string is stored in an environment variable.

### 38. Create a user schema and model using Mongoose.

**Code:**

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    age: {
      type: Number,
      min: 18
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
```

**Explanation:**

- `Schema` defines the document structure.
- `required: true` makes a field mandatory.
- `unique: true` creates a unique index requirement for email values. Handle duplicate-key errors in the application.
- `min: 18` sets a minimum numeric value.
- `timestamps: true` adds `createdAt` and `updatedAt`.
- `model()` creates a model used to query the collection.

### 39. Create a user using MongoDB and Mongoose.

**Code:**

```js
const express = require("express");
const User = require("./models/User");

const app = express();

app.use(express.json());

app.post("/users", async (req, res, next) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required"
      });
    }

    const user = await User.create({
      name,
      email,
      age
    });

    res.status(201).json({
      message: "User created",
      user
    });
  } catch (error) {
    next(error);
  }
});
```

**Explanation:**

- The route receives user data through `req.body`.
- We validate required fields.
- `User.create()` creates a MongoDB document.
- `201` indicates successful resource creation.
- Errors are passed to centralized error handling.

### 40. Get all users from MongoDB.

**Code:**

```js
const express = require("express");
const User = require("./models/User");

const app = express();

app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      count: users.length,
      users
    });
  } catch (error) {
    next(error);
  }
});
```

**Explanation:**

- `User.find()` retrieves matching documents.
- With no filter, it returns all documents in the collection.
- `users.length` gives the number of returned records.
- `try/catch` handles database errors.

For a large collection, use pagination instead of returning every document.

---

## Section 6: Real-World Backend Coding Problems

### 41. Create a secure user registration API with password hashing.

**Install:**

```bash
npm install bcrypt
```

**Code:**

```js
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./models/User");

const app = express();

app.use(express.json());

app.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
});
```

**Explanation:**

1. Receive name, email, and password.
2. Validate required fields.
3. Check whether the email already exists.
4. Hash the password using bcrypt.
5. Save the user in MongoDB.
6. Return the created user's safe public information.

Never return the password hash in the API response. Also validate email format and enforce appropriate password policies in a real application.

### 42. Create a login API using bcrypt.

**Code:**

```js
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./models/User");

const app = express();

app.use(express.json());

app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
});
```

**Explanation:**

- Find the user using the email.
- `bcrypt.compare()` compares the submitted password with the stored hash.
- If the password is correct, login succeeds.
- If the credentials are incorrect, return `401 Unauthorized`.

This example verifies login credentials but does not create a login session or JWT. A production login endpoint should establish a secure session or issue a properly configured access token.

### 43. Generate a JWT token after successful login.

**Install:**

```bash
npm install jsonwebtoken
```

**Code:**

```js
const jwt = require("jsonwebtoken");

function generateToken(user) {
  return jwt.sign(
    {
      userId: user._id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );
}
```

Use it after verifying the user's password:

```js
const token = generateToken(user);

res.json({
  message: "Login successful",
  token
});
```

**Explanation:**

- `jwt.sign()` creates a signed token.
- The payload contains user identification information.
- `JWT_SECRET` is used to sign the token.
- `expiresIn` sets its expiration time.
- The client sends the token when accessing protected routes.

Keep the secret strong and private. Validate tokens on protected routes and use secure token-storage practices.

### 44. Verify a JWT token using middleware.

**Code:**

```js
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({
      message: "Token required"
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}
```

Use it:

```js
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected profile",
    user: req.user
  });
});
```

**Explanation:**

- Read the token from the `Authorization` header.
- Check for the `Bearer` prefix.
- `jwt.verify()` checks the signature and expiration.
- `req.user` stores the decoded claims for later middleware or routes.
- `next()` allows the request to continue.

### 45. Upload a file using Express and Multer.

**Install:**

```bash
npm install multer
```

**Code:**

```js
const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + file.originalname;

    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

app.post(
  "/upload",
  upload.single("image"),
  (req, res) => {
    res.json({
      message: "File uploaded",
      file: req.file
    });
  }
);

app.listen(3000);
```

**Explanation:**

- Multer handles `multipart/form-data`.
- `diskStorage()` defines where and how files are stored.
- `destination` selects the upload folder.
- `filename` creates the stored file name.
- `upload.single("image")` accepts one file from the `image` field.
- The file details are available in `req.file`.

Create the `uploads` directory before uploading. In production, validate file types and content, use safe generated filenames, and consider cloud object storage.

### 46. Create an API to delete a user from MongoDB.

**Code:**

```js
const express = require("express");
const User = require("./models/User");

const app = express();

app.delete("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "User deleted successfully"
    });
  } catch (error) {
    next(error);
  }
});
```

**Explanation:**

- `req.params.id` reads the user ID from the URL.
- `findByIdAndDelete()` searches for the document and deletes it.
- If no document exists, it returns `404`.
- Otherwise, the API confirms successful deletion.

A real application should also check that the authenticated user has permission to delete the requested record.

### 47. Create an API to update a user.

**Code:**

```js
const express = require("express");
const User = require("./models/User");

const app = express();

app.use(express.json());

app.patch("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "User updated",
      user
    });
  } catch (error) {
    next(error);
  }
});
```

**Explanation:**

- PATCH is used for partial updates.
- `findByIdAndUpdate()` updates the matching document.
- `new: true` returns the updated document.
- `runValidators: true` runs applicable schema validators.
- We return `404` if the user does not exist.

In production, validate and whitelist allowed fields instead of passing arbitrary `req.body` directly to the database.

### 48. Create an API to filter and sort products.

**Code:**

```js
const express = require("express");
const Product = require("./models/Product");

const app = express();

app.get("/products", async (req, res, next) => {
  try {
    const { category, sort } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    let query = Product.find(filter);

    if (sort === "price-low") {
      query = query.sort({ price: 1 });
    } else if (sort === "price-high") {
      query = query.sort({ price: -1 });
    }

    const products = await query;

    res.json(products);
  } catch (error) {
    next(error);
  }
});
```

**Example requests:**

```text
GET /products?category=electronics
GET /products?sort=price-low
GET /products?category=electronics&sort=price-high
```

**Explanation:**

- `req.query` reads filter and sorting options.
- We build a MongoDB filter object.
- `sort({ price: 1 })` sorts prices in ascending order.
- `sort({ price: -1 })` sorts prices in descending order.
- The API returns matching products.

### 49. Create a simple API health-check endpoint.

**Code:**

```js
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

app.listen(3000);
```

**Response:**

```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2026-11-14T..."
}
```

**Explanation:**

- A health-check endpoint reports whether the application is responding.
- `200` indicates that the endpoint is healthy.
- The timestamp helps identify when the response was generated.

For production systems, separate basic liveness checks from readiness checks that verify dependencies such as databases.

### 50. Build a complete basic Node.js REST API project structure.

**Project structure:**

```text
node-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── middleware/
│   └── errorHandler.js
│
├── .env
├── .gitignore
├── server.js
└── package.json
```

**Step 1: Install packages**

```bash
npm init -y

npm install express mongoose dotenv
```

**Step 2: Create the database connection**

`config/db.js`

```js
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

module.exports = connectDB;
```

**Step 3: Create the user model**

`models/User.js`

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
```

**Step 4: Create the controller**

`controllers/userController.js`

```js
const User = require("../models/User");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required"
      });
    }

    const user = await User.create({
      name,
      email
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
```

**Step 5: Create routes**

`routes/userRoutes.js`

```js
const express = require("express");

const {
  getUsers,
  createUser
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

module.exports = router;
```

**Step 6: Create error middleware**

`middleware/errorHandler.js`

```js
function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: "Internal Server Error"
  });
}

module.exports = errorHandler;
```

**Step 7: Connect everything in server.js**

```js
require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node.js REST API is running");
});

app.use("/api/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server");
    process.exit(1);
  }
}

startServer();
```

**Step 8: Add environment variables**

`.env`

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/node-api
```

**Step 9: Add .gitignore**

```text
node_modules/
.env
```

**Step 10: Run the project**

```bash
node server.js
```

**Test the APIs:**

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check server |
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create a user |

POST request body:

```json
{
  "name": "John",
  "email": "john@example.com"
}
```

**Explanation:**

This project demonstrates the basic structure of a real backend application:

- `config`: Database configuration.
- `models`: Database schemas.
- `controllers`: Application logic.
- `routes`: API endpoints.
- `middleware`: Shared request and error-handling logic.
- `server.js`: Main application entry point.

This separation makes the application easier to maintain, test, and expand.

---

# Important Node.js Coding Interview Revision Checklist

## Must-practice questions

| Priority | Questions | Topics |
|---|---:|---|
| Very high | 2–5 | HTTP server and modules |
| Very high | 9–10 | Promises, async/await, errors |
| Very high | 11–20 | File system and streams |
| Very high | 21–30 | Express and REST APIs |
| Very high | 31–36 | Async operations, events, rate limiting |
| Very high | 37–44 | MongoDB and authentication |
| High | 45–50 | File uploads and real backend projects |

## What interviewers expect you to understand

1. How to create and run a Node.js server.
2. How to build REST APIs using Express.
3. How to use middleware.
4. How to handle asynchronous operations.
5. How to connect Node.js with MongoDB.
6. How to implement CRUD operations.
7. How to register and authenticate users.
8. How to handle errors properly.
9. How to work with files and streams.
10. How to organize a backend project.

**Important:** Do not memorize all 50 programs line by line. Practice building the APIs yourself, explain why each function is used, and understand how requests move from routes to controllers to the database.

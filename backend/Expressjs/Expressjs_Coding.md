1. Create a Basic Express Server

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

Explanation:

Import Express.

Create an application.

Define a GET route.

Start the server on port 3000.

2. Create a GET API to Return Users

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "David" }
];

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

Explanation: The endpoint returns all users as JSON with status code 200.

3. Create a POST API to Add a User

app.use(express.json());

let users = [];

app.post("/api/users", (req, res) => {
  const user = {
    id: Date.now(),
    name: req.body.name
  };

  users.push(user);

  res.status(201).json(user);
});

Explanation:

express.json() parses JSON request bodies.

req.body.name gets the submitted name.

push() adds the user.

Status 201 indicates successful creation.

4. Get a User by ID

app.get("/api/users/:id", (req, res) => {
  const user = users.find(
    user => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

Explanation: req.params.id gets the ID from the URL. find() searches for the matching user.

5. Update a User Using PUT

app.put("/api/users/:id", (req, res) => {
  const user = users.find(
    user => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  user.name = req.body.name;

  res.json({
    message: "User updated",
    user
  });
});

Explanation: Finds the user and replaces the supplied name. PUT is generally used to replace a resource representation.

6. Update a User Using PATCH

app.patch("/api/users/:id", (req, res) => {
  const user = users.find(
    user => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  Object.assign(user, req.body);

  res.json(user);
});

Explanation: Object.assign() applies the submitted fields to the existing user. PATCH is commonly used for partial updates.

7. Delete a User

app.delete("/api/users/:id", (req, res) => {
  const index = users.findIndex(
    user => user.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users.splice(index, 1);

  res.status(204).send();
});

Explanation: findIndex() locates the user. splice() removes it. Status 204 means the operation succeeded without a response body.

8. Create a Route Using Query Parameters

app.get("/api/products", (req, res) => {
  const { category, page } = req.query;

  res.json({
    category,
    page: Number(page) || 1
  });
});

Example request:

/api/products?category=mobile&page=2

Explanation: req.query contains query string values. They are usually strings, so convert numeric values when necessary.

9. Create Multiple Routes Using express.Router()

routes/userRoutes.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "All users" });
});

router.post("/", (req, res) => {
  res.json({ message: "User created" });
});

module.exports = router;

app.js

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

Explanation: Router separates user-related endpoints from the main application file.

10. Create a Middleware to Log Requests

function logger(req, res, next) {
  console.log(
    `${req.method} ${req.url} ${new Date().toISOString()}`
  );

  next();
}

app.use(logger);

Explanation: This middleware logs the request method, URL, and time before passing control to the next handler.

Section 2: Middleware and Validation

11. Create Middleware to Check API Keys

function checkApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      message: "Invalid API key"
    });
  }

  next();
}

app.get("/api/private", checkApiKey, (req, res) => {
  res.json({ message: "Access granted" });
});

Explanation: The middleware reads the API key from the request header and checks it before allowing access.

12. Create Middleware to Check User Roles

function allowRoles(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    next();
  };
}

app.delete(
  "/api/users/:id",
  allowRoles("admin"),
  (req, res) => {
    res.json({ message: "User deleted" });
  }
);

Explanation: allowRoles() returns middleware that checks whether the authenticated user's role is allowed.

This assumes authentication middleware has already populated req.user.

13. Validate Required Fields

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  res.status(201).json({
    message: "Registration successful"
  });
});

Explanation: Checks whether all required values are present before continuing.

14. Validate an Email Address

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/api/register", (req, res) => {
  const { email } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: "Invalid email address"
    });
  }

  res.json({ message: "Valid email" });
});

Explanation: The regular expression performs a basic email format check. Production applications should also validate length, normalize values, and verify ownership when needed.

15. Create a Global Error Handler

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || "Internal server error"
  });
});

Explanation: This middleware handles errors passed through next(error). It should be registered after routes and other middleware.

16. Create a Custom Not Found Handler

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found"
  });
});

Explanation: If no route matches the request, this middleware returns a 404 response. Place it after all valid routes.

17. Create an Async Error Wrapper for Express 4

const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

app.get("/api/users", asyncHandler(async (req, res) => {
  const users = await getUsersFromDatabase();
  res.json(users);
}));

Explanation: The wrapper catches rejected promises and forwards errors to Express error middleware. It is useful in Express 4. Express 5 automatically forwards rejected promises from returned async route-handler promises.

18. Create a Request Timer Middleware

function requestTimer(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    console.log(
      `${req.method} ${req.url}: ${Date.now() - start}ms`
    );
  });

  next();
}

app.use(requestTimer);

Explanation: Records when a request starts and logs its duration when the response finishes.

19. Enable CORS

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));

Explanation: Allows browser requests from the specified frontend origin. When using credentials, the server must specify an explicit allowed origin rather than *.

20. Serve Static Files

app.use(express.static("public"));

Explanation: Express serves files from the public folder.

For example, a file at public/logo.png can be accessed at:

http://localhost:3000/logo.png

Section 3: Authentication and Authorization

21. Register a User with Password Hashing

Install:

npm install bcrypt

Code:

const bcrypt = require("bcrypt");

app.post("/api/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // Save name, email and hashedPassword to database

    res.status(201).json({
      message: "User registered successfully"
    });
  } catch (error) {
    next(error);
  }
});

Explanation: Bcrypt hashes the password before it is saved. In a real application, check whether the email already exists and store the hashed password in the database.

22. Compare a Password During Login

const bcrypt = require("bcrypt");

app.post("/api/login", async (req, res, next) => {
  try {
    const { password } = req.body;

    // Example: retrieve this user from the database
    const user = await User.findOne({
      email: req.body.email
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    res.json({
      message: "Login successful"
    });
  } catch (error) {
    next(error);
  }
});

Explanation: bcrypt.compare() checks the entered password against the stored hash without storing or retrieving a plain-text password.

23. Generate a JWT Token

Install:

npm install jsonwebtoken

Code:

const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: "123", role: "user" },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

console.log(token);

Explanation: jwt.sign() creates a signed token containing the payload. The secret should be stored in environment variables.

24. Verify a JWT Token Using Middleware

const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({
      message: "Access token required"
    });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}

app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Profile accessed",
    user: req.user
  });
});

Explanation:

Read the Bearer token from the authorization header.

Verify it using the JWT secret.

Store the decoded payload in req.user.

Continue only when verification succeeds.

25. Create an Admin-Only Route

function authorizeAdmin(req, res, next) {
  if (req.user?.role !== "admin") {
    return res.status(403).json({
      message: "Admin access required"
    });
  }

  next();
}

app.delete(
  "/api/admin/users/:id",
  authenticateToken,
  authorizeAdmin,
  (req, res) => {
    res.json({ message: "User deleted" });
  }
);

Explanation: Authentication checks who the user is. Authorization checks whether the user has the required role.

26. Create a Logout Endpoint

app.post("/api/logout", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });

  res.json({
    message: "Logged out successfully"
  });
});

Explanation: This example assumes the token is stored in an HTTP-only cookie. Clearing the cookie removes the browser's copy. If using stateless Bearer tokens, logout also requires a client-side token removal strategy or a server-side revocation approach when immediate invalidation is needed.

27. Set a Secure HTTP-Only Cookie

res.cookie("accessToken", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 60 * 60 * 1000
});

Explanation:

httpOnly: JavaScript in the browser cannot read the cookie.

secure: Sends it only over HTTPS.

sameSite: Helps control cross-site cookie sending.

maxAge: Sets its lifetime.

Cookie-based authentication also needs an appropriate CSRF protection strategy.

28. Implement Password Reset Token Generation

const crypto = require("crypto");

function generateResetToken() {
  const token = crypto.randomBytes(32).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  return { token, hashedToken };
}

const reset = generateResetToken();

console.log(reset.token);       // Send to the user securely
console.log(reset.hashedToken); // Store in the database

Explanation: Generate a random token, send the original token to the user, and store only its hash. Also store an expiry time and invalidate the token after use.

29. Create a Protected Route with Authentication

app.get("/api/dashboard", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to your dashboard",
    userId: req.user.userId
  });
});

Explanation: The authentication middleware runs before the route handler. Requests without a valid token cannot access the dashboard.

30. Create a Basic Login Rate Limiter

Install:

npm install express-rate-limit

Code:

const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {
    message: "Too many login attempts. Try again later."
  }
});

app.post("/api/login", loginLimiter, loginController);

Explanation: This limits each client to five requests within a 15-minute window by default. For distributed production deployments, configure a shared store so limits work across multiple server instances.

Section 4: MongoDB and Mongoose Integration

31. Connect Express to MongoDB

Install:

npm install mongoose dotenv

Code:

require("dotenv").config();

const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

connectDB();

Explanation: mongoose.connect() establishes the database connection using the connection string stored in .env.

32. Create a User Schema and Model

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;

Explanation:

A schema defines the document structure.

required makes a field mandatory.

trim removes extra spaces.

lowercase normalizes email values.

timestamps adds createdAt and updatedAt.

Note: unique: true creates a unique index; it is not a normal Mongoose validator. Handle duplicate-key errors in the application.

33. Create a User in MongoDB

app.post("/api/users", async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

Explanation: User.create() validates and saves a new document. In a real registration endpoint, hash the password before saving it and never return the password hash.

34. Get All Users from MongoDB

app.get("/api/users", async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (error) {
    next(error);
  }
});

Explanation: find() retrieves matching documents. select("-password") excludes the password field from the returned data.

35. Find a User by ID

app.get("/api/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

Explanation: findById() searches by MongoDB document ID. Production code should also handle malformed IDs as client errors.

36. Update a User in MongoDB

app.patch("/api/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { name: req.body.name } },
      {
        new: true,
        runValidators: true
      }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

Explanation:

findByIdAndUpdate() updates the matching document.

$set updates the selected field.

new: true returns the updated document.

runValidators: true runs applicable schema validators.

37. Delete a User from MongoDB

app.delete("/api/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

Explanation: findByIdAndDelete() finds and deletes a document using its ID.

38. Implement Search Using MongoDB

app.get("/api/users/search", async (req, res, next) => {
  try {
    const search = String(req.query.name || "").trim();

    if (!search) {
      return res.status(400).json({
        message: "Search term is required"
      });
    }

    const users = await User.find({
      name: {
        $regex: search,
        $options: "i"
      }
    }).select("-password");

    res.json(users);
  } catch (error) {
    next(error);
  }
});

Explanation: $regex performs pattern matching, while $options: "i" makes the search case-insensitive. For production, consider indexed search strategies and carefully handle user-supplied regular expressions.

39. Implement Pagination with MongoDB

app.get("/api/users", async (req, res, next) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(
      100,
      Math.max(1, Number(req.query.limit) || 10)
    );

    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find().select("-password").skip(skip).limit(limit),
      User.countDocuments()
    ]);

    res.json({
      users,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalUsers: total
    });
  } catch (error) {
    next(error);
  }
});

Explanation: skip() ignores earlier documents, while limit() controls the number returned. countDocuments() provides the total count.

40. Sort MongoDB Results

app.get("/api/users", async (req, res, next) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.json(users);
  } catch (error) {
    next(error);
  }
});

Explanation: -1 sorts in descending order, while 1 sorts in ascending order.

Section 5: Real-World Backend Coding Questions

41. Create a Complete CRUD API Structure

Project structure:

project/
├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── models/
│   └── User.js
├── middleware/
│   └── errorMiddleware.js
├── config/
│   └── db.js
└── server.js

controllers/userController.js

const User = require("../models/User");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

routes/userRoutes.js

const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser
} = require("../controllers/userController");

router.get("/", getUsers);
router.post("/", createUser);

module.exports = router;

server.js

const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(3000);

Explanation: Routes define the endpoints, controllers contain request logic, models handle database operations, and the main server connects everything.

For a production application, validate inputs and hash passwords before storing user records.

42. Create a Global API Response Format

function successResponse(res, data, message = "Success") {
  return res.status(200).json({
    success: true,
    message,
    data
  });
}

function errorResponse(res, message, statusCode = 400) {
  return res.status(statusCode).json({
    success: false,
    message
  });
}

Usage:

app.get("/api/profile", (req, res) => {
  return successResponse(
    res,
    { name: "John" },
    "Profile fetched"
  );
});

Explanation: Reusable response helpers keep API responses consistent.

43. Upload a File Using Multer

Install:

npm install multer

Code:

const multer = require("multer");

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "File is required"
    });
  }

  res.json({
    message: "File uploaded",
    filename: req.file.filename
  });
});

Explanation:

Multer handles multipart/form-data.

upload.single("file") accepts one file under the field name file.

req.file contains information about the uploaded file.

Production applications should validate file types, use safe storage names, and store uploads in suitable persistent or object storage.

44. Create an API to Call an External API

app.get("/api/external-users", async (req, res, next) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("External API request failed");
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    next(error);
  }
});

Explanation: The Express server makes an HTTP request to another API and returns its data to the client. Modern Node.js versions provide a built-in fetch().

45. Implement a Basic In-Memory Cache

const cache = new Map();

app.get("/api/products", async (req, res, next) => {
  try {
    const cachedData = cache.get("products");

    if (cachedData) {
      return res.json({
        source: "cache",
        data: cachedData
      });
    }

    const products = await Product.find();

    cache.set("products", products);

    res.json({
      source: "database",
      data: products
    });
  } catch (error) {
    next(error);
  }
});

Explanation: The first request fetches products from the database and stores them in memory. Later requests can use the cached result.

This basic example has no expiration or invalidation. Production caching should use a TTL and clear or update cached data when the underlying records change. A shared cache such as Redis is more suitable for multiple server instances.

46. Create a Health Check Endpoint

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

Explanation: A health check endpoint allows deployment platforms and monitoring systems to check whether the application is running.

A production readiness check may also verify database and other critical dependencies.

47. Validate Request Data Using express-validator

Install:

npm install express-validator

Code:

const { body, validationResult } = require("express-validator");

app.post(
  "/api/register",
  [
    body("name").trim().notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 8 })
  ],
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    next();
  },
  (req, res) => {
    res.status(201).json({
      message: "Validation successful"
    });
  }
);

Explanation: Validation middleware checks incoming data before the controller processes it. This example checks name, email, and password length.

48. Create a File Download Endpoint

app.get("/api/download", (req, res) => {
  const filePath = "./public/sample.pdf";

  res.download(filePath, "document.pdf", (error) => {
    if (error && !res.headersSent) {
      res.status(500).json({
        message: "Unable to download file"
      });
    }
  });
});

Explanation: res.download() sends a file as an attachment so the browser can download it.

49. Write a Basic Express API Test Using Jest and Supertest

Install:

npm install --save-dev jest supertest

app.js

const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});

module.exports = app;

app.test.js

const request = require("supertest");
const app = require("./app");

describe("GET /health", () => {
  test("should return 200 and OK status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("OK");
  });
});

Explanation:

Supertest sends HTTP requests to the Express app.

Jest runs the test.

expect() checks the response status and returned data.

Exporting the app separately from the server makes it easier to test without opening a network port.

50. Build a Simple Authentication API

Install dependencies:

npm install express mongoose bcrypt jsonwebtoken dotenv

Project structure:

auth-api/
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── middleware/
│   └── authMiddleware.js
├── .env
└── server.js

models/User.js

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
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);

routes/authRoutes.js

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password || password.length < 8) {
      return res.status(400).json({
        message: "Valid name, email and password are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

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

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const header = req.headers.authorization;

  const token = header?.startsWith("Bearer ")
    ? header.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({
      message: "Token required"
    });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
}

module.exports = authenticateToken;

server.js

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const authenticateToken = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Protected profile",
    userId: req.user.userId
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    app.listen(process.env.PORT || 3000, () => {
      console.log("Server started");
    });
  } catch (error) {
    console.error("Startup failed:", error);
    process.exit(1);
  }
}

startServer();

.env

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret

Explanation:

Register API accepts user details.

Bcrypt hashes the password.

MongoDB stores the user.

Login API verifies the password.

JWT creates an authentication token.

Authentication middleware verifies the token.

Protected routes allow access only to authenticated users.

Important production improvements: Add schema-level validation, email normalization, duplicate-key error handling, login rate limiting, secure token storage, token revocation or refresh-token handling, and appropriate logging. Never return password hashes.
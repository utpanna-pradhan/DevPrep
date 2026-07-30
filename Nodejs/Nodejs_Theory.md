# Node.js Interview Questions

# 1. What is Node.js?

## Interview Answer

> Node.js is an open-source, cross-platform JavaScript runtime environment built on Google's V8 JavaScript Engine. It allows developers to run JavaScript outside the browser and build fast, scalable, event-driven server-side applications.

---

## Definition

Before Node.js, JavaScript could only run inside web browsers.

Node.js allows JavaScript to run on your computer or server, making it possible to build backend applications using JavaScript.

With Node.js, you can:

- Build REST APIs
- Create Web Servers
- Read and Write Files
- Connect Databases
- Build Real-Time Applications
- Build CLI Tools
- Create Microservices

---

## Browser JavaScript vs Node.js

| Browser JavaScript | Node.js |
|--------------------|---------|
| Runs inside Browser | Runs outside Browser |
| Has DOM | No DOM |
| Can manipulate HTML | Cannot manipulate HTML |
| No File System Access | Can Read & Write Files |
| Used for Frontend | Used for Backend |
| Limited OS Access | Full OS Access (through APIs) |

---

## Architecture

```text
                Browser
                   │
            JavaScript Code
                   │
          Browser APIs (DOM)
```

Without Node.js, JavaScript stops here.

With Node.js:

```text
               JavaScript
                    │
              Node.js Runtime
                    │
        ┌───────────┼────────────┐
        │           │            │
   File System   HTTP Server   Database
        │           │            │
        └───────────┼────────────┘
                    │
              Operating System
```

---

## Example

```js
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello Node.js");
});

server.listen(3000);
```

Output

```
http://localhost:3000

Hello Node.js
```

---

## Real-world Applications

- Netflix
- PayPal
- Uber
- LinkedIn
- Walmart
- Discord
- Trello

---

## Advantages

- Fast execution
- JavaScript everywhere
- Huge npm ecosystem
- Non-blocking architecture
- Event-driven
- Cross-platform
- Open Source

---

## Common Interview Questions

### Is Node.js a Programming Language?

No.

Node.js is a Runtime Environment.

---

### Is Node.js a Framework?

No.

Frameworks include Express.js, NestJS and Fastify.

---

### Can Node.js run JavaScript?

Yes.

That is its primary purpose.

---

## Key Points

- Runtime Environment
- Built on V8
- Runs JavaScript outside Browser
- Server-side JavaScript
- Event Driven
- Non-blocking

---

# 2. Why was Node.js Created?

## Interview Answer

> Node.js was created to allow JavaScript to run outside the browser and efficiently handle thousands of concurrent requests using an event-driven, non-blocking architecture.

---

## The Problem Before Node.js

Before Node.js:

- JavaScript worked only in browsers.
- Backend required another language like Java, PHP, Python, or C#.
- Traditional web servers often created one thread per request, which could consume significant resources.

---

## Ryan Dahl's Goals

Ryan Dahl wanted to:

- Run JavaScript on the server
- Handle thousands of users efficiently
- Avoid blocking operations
- Use one language for frontend and backend
- Build scalable applications

---

## Traditional Server

```text
Client 1
     │
     ▼
Thread 1
     │
 Read File
     │
 Wait...
     │
 Response

Client 2
     │
 Wait for another thread
```

Many users = Many threads = More memory usage.

---

## Node.js Server

```text
Client Requests
      │
      ▼
 Event Loop
      │
      ├──────── Read File
      ├──────── Database
      ├──────── API
      │
 Continue handling new requests
```

One Event Loop handles many connections efficiently.

---

## Advantages

- Better scalability
- Lower memory usage
- Faster for I/O-heavy applications
- Easier Full Stack Development
- Excellent for APIs

---

## Best Use Cases

- Chat Applications
- APIs
- Streaming
- Notifications
- Dashboards
- Real-time Applications

---

## Common Interview Questions

### Who created Node.js?

Ryan Dahl

---

### Why is Node.js popular?

Because it is fast, scalable and uses JavaScript on both frontend and backend.

---

## Key Points

- Released in 2009
- Solved JavaScript backend problem
- Event-driven
- Non-blocking
- Scalable

---

# 3. History of Node.js

## Interview Answer

> Node.js was created by Ryan Dahl in 2009 using Google's V8 JavaScript Engine.

---

## Timeline

| Year | Event |
|------|-------|
| 2008 | Google released V8 Engine |
| 2009 | Ryan Dahl created Node.js |
| 2010 | npm became popular |
| 2014 | io.js forked from Node.js |
| 2015 | io.js merged back into Node.js |
| 2015 | Node.js Foundation formed |
| 2019 | OpenJS Foundation created |
| Today | One of the most popular backend technologies |

---

## Why was V8 chosen?

Because V8 compiles JavaScript into machine code, making execution very fast.

---

## Evolution

```text
JavaScript
      │
Browser Only
      │
      ▼
2009
      │
Node.js
      │
Backend Development
      │
      ▼
Modern Full Stack JavaScript
```

---

## Common Interview Questions

### Who invented Node.js?

Ryan Dahl

---

### Which Engine does Node.js use?

Google V8 Engine

---

### When was Node.js released?

2009

---

## Key Points

- Ryan Dahl
- 2009
- Google V8
- npm
- Open Source

---

# 4. Features of Node.js

## Interview Answer

> Node.js is fast, scalable, event-driven and non-blocking. It uses Google's V8 Engine and has a massive npm ecosystem.

---

## Main Features

### 1. Open Source

Free to use.

---

### 2. Cross Platform

Works on:

- Windows
- Linux
- macOS

---

### 3. V8 Engine

Compiles JavaScript into machine code.

---

### 4. Event Driven

Uses Events instead of blocking execution.

---

### 5. Non Blocking I/O

Can handle multiple requests simultaneously.

---

### 6. Single Threaded Event Loop

Processes many requests efficiently.

---

### 7. Huge npm Ecosystem

Millions of packages available.

---

### 8. Fast Execution

Powered by Google's V8 Engine.

---

### 9. Highly Scalable

Perfect for APIs and Microservices.

---

## Feature Flow

```text
JavaScript
      │
      ▼
 Node.js
      │
      ├──────── Event Loop
      ├──────── V8 Engine
      ├──────── npm
      ├──────── libuv
      └──────── OS APIs
```

---

## Common Interview Questions

### Which feature makes Node.js fast?

Google V8 Engine.

---

### Which feature makes Node.js scalable?

Non-blocking Event Loop.

---

## Key Points

- V8
- Event Loop
- npm
- Cross Platform
- Open Source
- Scalable

---

# 5. Advantages of Node.js

## Interview Answer

> Node.js offers high performance, excellent scalability, non-blocking I/O, a unified JavaScript stack, and a huge npm ecosystem, making it ideal for modern backend development.

---

## Advantages

### High Performance

Uses Google's V8 Engine.

---

### JavaScript Everywhere

One language for frontend and backend.

---

### Huge npm Ecosystem

Over millions of open-source packages.

---

### Non-blocking I/O

Processes many requests efficiently.

---

### Event Driven

Suitable for real-time applications.

---

### Cross Platform

Runs on Windows, Linux and macOS.

---

### Scalable

Supports thousands of concurrent users.

---

### Fast Development

Reusable packages reduce development time.

---

## Advantages Overview

```text
               Node.js
                  │
    ┌─────────────┼─────────────┐
    │             │             │
 Performance   Scalability     npm
    │             │             │
    ├─────────────┼─────────────┤
    │             │             │
 JavaScript   Event Loop   Non-blocking I/O
 Everywhere
```

---

## Best Use Cases

- REST APIs
- GraphQL APIs
- Chat Applications
- Streaming Platforms
- Real-time Dashboards
- Notification Systems
- Multiplayer Games
- Microservices

---

## Common Interview Questions

### Is Node.js good for CPU-intensive applications?

Not usually.

CPU-heavy tasks can block the Event Loop. For such workloads, Worker Threads or separate services are often a better choice.

---

### Is Node.js good for Real-Time Applications?

Yes.

Its event-driven, non-blocking architecture makes it an excellent choice for real-time applications.

---

## Key Points

- Fast
- Scalable
- Event Driven
- Non-blocking
- npm
- V8 Engine
- JavaScript Everywhere
# Part 1: System Design Fundamentals (Q1–Q10)
## Q1. What is system design?
Answer: System design is the process of planning how different parts of a software application work together to meet requirements.

It includes:
- Frontend and backend services
- APIs and communication
- Databases and storage
- Scaling, security, and reliability
Example: In a task-management app, React displays tasks, a Node.js backend handles requests, and PostgreSQL stores the tasks.
A good design must work not only for 100 users but also when the application grows to millions of users.

# Q2. What are functional and non-functional requirements?
Answer: Functional requirements describe what a system does. Non-functional requirements describe how well it does it and the constraints it must satisfy.
- Functional requirements	
Users can sign up	,
Users can send messages	,
Users can upload photos	,
Users can make payments

- Non-functional requirements
High availability ,
Low latency ,
Scalability ,
Security and durability

Example: For WhatsApp, sending a message is a functional requirement. Delivering it quickly and reliably is a non-functional requirement.

# Q3. What is the difference between HLD and LLD?
Answer:
- HLD (High-Level Design): Explains the overall architecture and how major components interact.
- LLD (Low-Level Design): Explains the internal implementation of individual components, including classes, methods, interfaces, and logic.
Example:

For a chat application:
- HLD: API gateway, WebSocket servers, message queue, database.
- LLD: Message class, message validation, delivery methods, and status transitions.
Remember: HLD explains how the system fits together. LLD explains how each component works internally.
Q4. How do you approach a system-design interview question?
Answer: Follow these seven steps.
1. Clarify functional and non-functional requirements.
2. Estimate users, traffic, storage, and bandwidth.
3. Define APIs and data models.
4. Draw the basic architecture.
5. Identify bottlenecks.
6. Design for failures and recovery.
7. Explain trade-offs and alternatives.
Example: When designing Instagram, first clarify whether the feed must be chronological or ranked. That decision affects the architecture.

Interview tip: Don't start by naming technologies. First establish what the system needs to accomplish.
Q5. What is scalability?
Answer: Scalability is a system's ability to handle increasing workloads by adding resources or improving how existing resources are used.

Two common approaches:
- Vertical scaling: Increase the power of one machine, such as adding RAM or CPU.
- Horizontal scaling: Add more machines or instances.
Example: Upgrading a server from 8 GB to 32 GB RAM is vertical scaling. Running five backend instances instead of one is horizontal scaling.

Trade-off: Vertical scaling is often simpler, but hardware has limits. Horizontal scaling offers more room to grow but introduces coordination and operational complexity.
Q6. What is availability?
Answer: Availability measures how often a system is operational and accessible when users need it.

It is commonly expressed as a percentage.
Availability	Approximate downtime per 365-day year
99%	3 days, 15 hours, 36 minutes
99.9%	8 hours, 46 minutes
99.99%	52 minutes, 34 seconds

Example: If a payment application must be highly available, it may use redundant servers, health checks, and automated failover.

Remember: High availability does not mean failures never happen. It means the system is designed to minimize their impact.
Q7. What is reliability?
Answer: Reliability is the ability of a system to operate correctly and consistently over time, including when components fail.

For example, a reliable payment service should not charge a customer twice just because a request was retried.

Reliability techniques include:
- Replication and redundancy
- Timeouts and controlled retries
- Idempotency
- Backups and recovery testing
- Monitoring and alerting
Availability vs. reliability: Availability asks whether the service is accessible. Reliability also considers whether it behaves correctly.
Q8. What is latency versus throughput?
Answer:
- Latency: How long one request takes.
- Throughput: How many requests a system processes per unit of time.
Example: An API that responds in 100 milliseconds has low latency. A server that processes 10,000 requests per second has high throughput.

A system can have high throughput but poor latency if many requests wait in a queue.

Interview tip: Measure both average latency and tail latency, such as p95 or p99. An average can hide a miserable experience for a small percentage of users.
Q9. What is a bottleneck in system design?
Answer: A bottleneck is the component that limits the performance or capacity of the entire system.

Common bottlenecks include:
- A database handling too many queries
- A CPU-heavy backend operation
- A network with limited bandwidth
- A single overloaded service
- Lock contention between concurrent requests
Example: Adding more backend servers won't necessarily improve performance if every server waits for the same overloaded database.

Solution: Measure first, find the limiting component, then optimize or scale it.
Q10. What is a monolithic architecture versus microservices?
Answer:
- Monolith: The application is built and deployed as one main unit.
- Microservices: The application is split into smaller services that can be developed and deployed independently.
Monolith	Microservices
Simpler to start	More operational complexity
Easier local debugging	Independent service deployment
Often simpler transactions	Network communication between services
Scaling may be less granular	Individual services can scale separately

Example: An early-stage e-commerce application may start as a monolith. As its needs grow, payments, inventory, and notifications might become separate services.

Key point: Microservices are not automatically better. Choose them when independent deployment, ownership, or scaling justifies the added complexity.

Part 2: Networking, HTTP, APIs, and Security (Q11–Q20)
Q11. What is an API?
Answer: An API (Application Programming Interface) defines how different software components communicate with each other.

Example: A React frontend requests user information from a backend API:
GET /api/users/123


The backend processes the request and returns the user's data, often in JSON format.

Remember: The frontend doesn't need to know how the backend stores the user. It only needs to understand the API contract.
Q12. What is REST API?
Answer: REST is an architectural style for designing APIs around resources, usually accessed using HTTP methods.

Example for a task-management application:
Method	Endpoint	Purpose
GET	/tasks	Retrieve tasks
GET	/tasks/123	Retrieve one task
POST	/tasks	Create a task
PUT	/tasks/123	Replace a task
PATCH	/tasks/123	Partially update a task
DELETE	/tasks/123	Delete a task

Interview point: Use meaningful resource names and appropriate HTTP methods. /getAllTasks is generally less RESTful than GET /tasks.
Q13. What is the difference between GET, POST, PUT, and PATCH?
Answer:
- GET: Reads a resource.
- POST: Creates a resource or triggers an operation.
- PUT: Replaces a resource at a specified location.
- PATCH: Updates selected fields of a resource.
Example: Suppose a user has a name and email.
- PUT /users/123 might replace the user's complete representation.
- PATCH /users/123 might change only the email.
Important: GET should not be used to perform actions that change application state. PUT is generally idempotent, while POST is not inherently idempotent.
Q14. What is the difference between HTTP and HTTPS?
Answer: HTTP transfers data between clients and servers. HTTPS uses HTTP over TLS to protect the connection.

HTTPS provides:
- Encryption: Prevents outsiders from easily reading transmitted data.
- Integrity: Helps detect tampering with data in transit.
- Authentication: Helps the client verify the server's identity.
Example: A login request should use HTTPS so passwords aren't transmitted as readable plaintext over the network.

Remember: HTTPS protects data in transit. It does not automatically protect against insecure application code, compromised servers, or unauthorized database access.
Q15. What is DNS?
Answer: DNS (Domain Name System) translates domain names into IP addresses so clients can locate servers.

Example: When you visit example.com, the DNS resolution process helps your device find the IP address associated with that domain.

A simplified flow:
1. The browser or operating system checks its cache.
2. A DNS resolver looks for the requested record.
3. The resolver obtains the answer from the DNS hierarchy if needed.
4. The client uses the resulting address to connect to the server.
Interview point: DNS caching improves efficiency, but cached records may take time to expire after an address change.
Q16. What is the difference between TCP and UDP?
Answer: TCP provides a reliable, ordered byte stream. UDP sends independent datagrams without TCP's built-in delivery and ordering guarantees.
TCP	UDP
Reliable delivery mechanisms	No built-in delivery guarantee
Ordered byte stream	Datagrams may arrive out of order
Connection-oriented	Connectionless
Useful for many web connections	Useful for latency-sensitive traffic

Examples: HTTPS commonly uses TCP, while real-time voice and video applications often use UDP-based transport.

Remember: UDP isn't automatically faster in every situation. The right choice depends on network conditions, application requirements, and the protocol built on top of it.
Q17. What is a load balancer?
Answer: A load balancer distributes incoming requests across multiple backend servers.
Users / Clients

Load Balancer

Server A

Server B

Server C



Benefits include:
- Spreading traffic across servers
- Avoiding unhealthy instances
- Improving capacity and availability
- Supporting horizontal scaling
Common strategies include round-robin, least-connections, and weighted routing.

Interview tip: A load balancer can itself become a bottleneck or failure point, so production designs must consider its redundancy and health checks.
Q18. What is the difference between a reverse proxy and a forward proxy?
Answer:
- Forward proxy: Acts on behalf of clients when they access external services.
- Reverse proxy: Acts on behalf of servers, receiving client requests and forwarding them to backend services.
Example:

A company may use a forward proxy to control employees' outbound internet access. A website may use a reverse proxy to route requests to application servers.

A reverse proxy can also support TLS termination, caching, request filtering, and load balancing.

Remember: A load balancer and a reverse proxy can overlap in functionality, but their roles aren't exactly identical.
Q19. What is a CDN?
Answer: A Content Delivery Network (CDN) serves content through geographically distributed edge locations, bringing content closer to users.

Example: A video platform stores video files in object storage and distributes cached video segments through a CDN.

Benefits:
- Lower latency for users far from the origin server
- Reduced load on origin infrastructure
- Better delivery performance for static and cacheable content
Interview point: A CDN is useful for images, videos, scripts, stylesheets, and other cacheable content. Frequently changing or private content requires careful caching rules.
Q20. What is authentication versus authorization?
Answer:
- Authentication: Verifies who a user or service is.
- Authorization: Determines what that identity is allowed to do.
Example: Logging into an application authenticates a user. Checking whether that user can delete a particular project performs authorization.

Common mechanisms include:
- Passwords and multifactor authentication
- Sessions and cookies
- Access tokens
- Role-based access control (RBAC)
- Resource-level permission checks
Interview point: Never rely only on the frontend to enforce permissions. The backend must verify authorization for protected operations.
Part 3: Capacity Estimation and Performance (Q21–Q30)
Q21. What is capacity estimation in system design?
Answer: Capacity estimation means calculating the resources a system may need, such as CPU, memory, storage, network bandwidth, and database capacity.

Consider a URL shortener with:
- 10 million new URLs per day
- 100 million redirects per day
- 500 bytes per stored URL record, as a simplified assumption
Average URL creation rate:
\[
\frac{10,000,000}{86,400}\approx116
\]

Average redirect rate:
\[
\frac{100,000,000}{86,400}\approx1,157
\]

So the system handles approximately 116 URL creations and 1,157 redirects per second on average.

Interview point: Average traffic isn't enough. Estimate peak traffic, data growth, replication overhead, and operational headroom too.
Q22. What is the difference between average traffic and peak traffic?
Answer: Average traffic represents the workload over a period. Peak traffic represents the highest workload during a shorter period.

For example, a service might receive 1,000 requests per second on average but 5,000 requests per second during a major event.

If you design only for the average, the system may slow down or fail during spikes.

How to prepare: Estimate peak-to-average ratios from expected usage patterns, then test whether the system can handle the peak.
Q23. How do you estimate storage requirements?
Answer: Multiply the number of records by the average size of each record.

Suppose an application stores 10 million records daily, each averaging 1 KB.

Daily storage:
\[
10,000,000 \times 1\text{ KB}\approx10\text{ GB}
\]

Annual storage:
\[
10\text{ GB}\times365\approx3.65\text{ TB}
\]

This excludes indexes, replicas, backups, metadata, and storage-engine overhead.

Interview tip: State your assumptions clearly. A realistic estimate is more useful than pretending every record has an exact known size.
Q24. How do you estimate bandwidth?
Answer: Bandwidth estimation measures how much data the system transfers over a period.

Suppose a service handles 2,000 requests per second and each response averages 50 KB.
\[
2,000\times50\text{ KB}=100\text{ MB/s}
\]

That is approximately 800 megabits per second, using decimal units and ignoring protocol overhead.

Practical point: Large media files can dominate bandwidth. A CDN can reduce the traffic reaching your origin servers.
Q25. What is latency, and how can you reduce it?
Answer: Latency is the time taken for an operation to complete from the relevant starting point to the relevant endpoint.

Ways to reduce latency include:
- Caching frequently accessed data
- Reducing unnecessary network round trips
- Using efficient database indexes
- Serving content from nearby locations
- Running independent operations in parallel
- Reducing response payload sizes
Example: If an API makes five sequential database calls, combining suitable queries or running independent calls concurrently may reduce response time.

Warning: Measure first. Optimizing a component that contributes almost nothing to total latency is an excellent way to waste an afternoon.
Q26. What are p50, p95, and p99 latency?
Answer: These are latency percentiles.
- p50: 50% of requests finish at or below this latency.
- p95: 95% finish at or below this latency.
- p99: 99% finish at or below this latency.
Example:
Metric	Latency
p50	50 ms
p95	200 ms
p99	800 ms

Most requests are fast, but a small fraction take much longer.

Why it matters: Slow tail requests can create timeouts, occupy connections, and cause cascading failures across dependent services.
Q27. What is caching, and why is it useful?
Answer: Caching stores copies of frequently accessed data in a faster location so that future requests can avoid expensive operations.

Common cache locations include:
- Browser cache
- CDN
- Application memory
- Distributed cache such as Redis
- Database buffer pool
Example: An e-commerce application can cache popular product details rather than querying the database for every request.

Trade-off: Caching improves speed and reduces load, but introduces invalidation, stale data, memory limits, and cache-miss behavior.
Q28. What is a cache hit and a cache miss?
Answer:
- Cache hit: The requested item is found in the cache.
- Cache miss: The requested item is absent, so the system must retrieve it from another source.
Cache hit ratio:
\[
\text{Hit ratio}=
\frac{\text{Cache hits}}{\text{Total cache requests}}
\]

If 900 out of 1,000 requests are hits, the hit ratio is 90%.

Interview point: A high hit ratio is often desirable, but it doesn't automatically mean good performance. A cache might still serve stale data or fail to help the most expensive queries.
Q29. What is a database bottleneck, and how would you fix it?
Answer: A database bottleneck occurs when database capacity or query performance limits the application.

Possible causes:
- Missing or ineffective indexes
- Expensive queries
- Too many connections
- Lock contention
- Excessive writes
- Insufficient memory or I/O capacity
A sensible troubleshooting order is:
1. Inspect query latency and database metrics.
2. Identify expensive queries and execution plans.
3. Optimize queries and indexes.
4. Use caching where appropriate.
5. Consider read replicas, partitioning, or scaling infrastructure if the workload justifies them.
Key point: Adding more application servers won't solve a database that is already overloaded.
Q30. What is the difference between synchronous and asynchronous processing?
Answer:
- Synchronous processing: The caller waits for the operation's result before continuing.
- Asynchronous processing: The caller can continue while work happens separately, often through a queue or background worker.
Example: When a user uploads a video, the application can store the upload and enqueue transcoding work instead of making the user wait for every video format to be generated.
Synchronous	Asynchronous
Immediate result may be returned	Work may finish later
Simpler for short operations	Useful for lengthy tasks
Caller remains involved while waiting	Requires job tracking and failure handling
Can tie up request resources	Adds queue and worker complexity

Remember: Asynchronous does not mean instantaneous. It means the work and the caller's progress are decoupled.

Part 4: Operating Systems and Concurrency (Q31–Q40)
Q31. What is a process versus a thread?
Answer: A process is a running program with its own virtual address space. A thread is an execution path within a process.
Process	Thread
Has its own virtual address space	Shares process memory with other threads
More isolated from other processes	Can communicate through shared memory
Creation and switching can be more expensive	Often lighter weight
Process crashes are usually isolated	An unsafe shared-memory bug can affect the whole process

Example: A web server process may use multiple threads to handle requests concurrently.

Interview point: Threads can improve concurrency, but shared memory requires careful synchronization.
Q32. What is concurrency versus parallelism?
Answer:
- Concurrency: Multiple tasks make progress during overlapping periods.
- Parallelism: Multiple tasks execute at the same time, typically on different CPU cores.
Example: A single-threaded server can handle many network requests concurrently by switching between tasks while waiting for I/O. A multi-core system can also process separate CPU-heavy tasks in parallel.

Remember: Concurrency is about coordinating multiple tasks. Parallelism is about simultaneous execution.
Q33. What is a race condition?
Answer: A race condition occurs when the outcome depends on the timing or interleaving of concurrent operations.

Suppose two requests read an account balance of ₹1,000 simultaneously. Each attempts to deduct ₹200 and writes back ₹800.

The final balance could incorrectly become ₹800 instead of ₹600 because one update overwrites the other.

Solutions include:
- Locks or mutexes
- Atomic operations
- Database transactions
- Optimistic concurrency control
- Appropriate isolation and consistency mechanisms
Interview tip: Race conditions are not limited to threads. Concurrent requests from different servers can cause similar problems.
Q34. What is a mutex versus a semaphore?
Answer:
- Mutex: Allows one thread at a time to hold a lock on a protected resource.
- Semaphore: Maintains a counter that controls how many operations can access a resource concurrently.
Example: A mutex protects a shared in-memory data structure from simultaneous modification. A semaphore with five permits can limit concurrent access to a resource to five operations.
Mutex	Semaphore
Commonly protects exclusive access	Controls access using permits
Usually has ownership semantics	Does not necessarily have ownership semantics
Typically one holder	Can permit multiple holders

Remember: Exact behavior depends on the implementation and programming language.
Q35. What is deadlock?
Answer: Deadlock occurs when two or more operations wait indefinitely for resources held by each other.

Example:
- Thread A holds Lock 1 and waits for Lock 2.
- Thread B holds Lock 2 and waits for Lock 1.
- Neither can proceed.
Four classic conditions are associated with deadlock:
1. Mutual exclusion
2. Hold and wait
3. No preemption
4. Circular wait
Prevention: Acquire locks in a consistent order, minimize lock scope, use timeouts where appropriate, and avoid unnecessary nested locking.
Q36. What is a context switch?
Answer: A context switch occurs when the operating system switches CPU execution from one process or thread to another.

The operating system saves the current execution state and restores another task's state.

Context switching enables multitasking, but it has overhead.

Example: If a server creates thousands of threads for a workload that spends most of its time waiting for I/O, excessive thread scheduling can reduce performance.

Solution: Choose suitable thread pools, asynchronous I/O, and concurrency limits based on the workload.
Q37. What is a thread pool?
Answer: A thread pool is a reusable collection of worker threads that execute submitted tasks.

Instead of creating a new thread for every request, the application submits work to existing workers.

Benefits:
- Reduces thread creation overhead
- Limits concurrent work
- Helps manage resource usage
- Makes overload control easier
Example: A backend may use a bounded worker pool to process report-generation jobs.

Important: An unbounded queue can still grow until memory is exhausted. Thread pools need appropriate queue limits, rejection policies, and monitoring.
Q38. What is a memory leak?
Answer: A memory leak occurs when a program retains memory that it no longer needs, preventing that memory from being reclaimed.

In garbage-collected languages such as JavaScript, a leak can still happen if objects remain reachable through references.

Example: A long-running server stores every request in a global array and never removes old entries.

Symptoms include:
- Increasing memory usage
- More garbage collection
- Slower responses
- Eventually, out-of-memory failures
Solution: Profile memory, inspect retained objects, clean up event listeners and references, and bound long-lived collections.
Q39. What is virtual memory?
Answer: Virtual memory gives each process an address space that the operating system maps to physical memory and, where configured, backing storage.

Benefits include:
- Process isolation
- Flexible memory allocation
- The ability to use more virtual address space than currently resident physical memory
- Memory protection
Example: Two processes can use the same virtual address while referring to different physical memory.

Interview point: Heavy paging or swapping can severely hurt performance. Virtual memory is not a magical substitute for sufficient RAM.
Q40. What is garbage collection?
Answer: Garbage collection automatically reclaims memory occupied by objects that are no longer reachable or otherwise needed, according to the language's memory-management rules.

Common approaches include:
- Reference counting
- Mark-and-sweep
- Generational collection
- Concurrent garbage collection
Example: In JavaScript, an object that is no longer reachable from active program references can generally be reclaimed.

Trade-off: Garbage collection reduces manual memory-management work but may introduce CPU overhead and latency pauses, depending on the runtime and collector.

Part 5: Data Structures Used in System Design (Q41–Q50)
Q41. What is a hash table, and why is it useful?
Answer: A hash table stores key-value pairs and uses a hash function to determine where a key should be stored.

Average lookup, insertion, and deletion are typically \(O(1)\), although collisions and resizing can affect performance.

Example:
const users = new Map();

users.set("u123", {
  name: "Alex"
});

console.log(users.get("u123"));


System-design applications:
- In-memory caches
- Session lookups
- Deduplication
- Routing metadata
Interview point: Hash tables are excellent for key-based lookups, but they do not inherently maintain sorted order.
Q42. What is a hash collision?
Answer: A hash collision occurs when different keys map to the same hash value or storage location.

Common handling methods include:
- Separate chaining: Store multiple entries in a bucket, often using a linked structure or another collection.
- Open addressing: Find another available slot according to a probing strategy.
Example: Two different usernames may map to the same hash-table bucket.

Remember: A collision does not mean the keys are identical. A correct implementation still checks key equality.
Q43. What is consistent hashing?
Answer: Consistent hashing distributes keys across nodes so that adding or removing a node generally moves only a fraction of the keys.

It is useful in distributed caches and partitioned storage systems.

Example: If a cache cluster has five nodes and one node is removed, consistent hashing can minimize how many keys need to be reassigned.

Benefits:
- Reduces data movement when membership changes
- Helps distribute keys across nodes
- Supports scalable partitioning
Interview point: Virtual nodes can improve distribution balance. Consistent hashing does not automatically solve hot keys or uneven workloads.
Q44. What is a Bloom filter?
Answer: A Bloom filter is a space-efficient probabilistic data structure that tests whether an item may belong to a set.

It can produce:
- False positives: It says an item may exist when it does not.
- No false negatives: For a standard correctly maintained Bloom filter, an inserted item will test as present.
Example: A storage engine may use a Bloom filter to avoid checking disk files that definitely do not contain a requested key.

Trade-off: It saves memory and unnecessary lookups, but it cannot provide the exact set of stored items.
Q45. What is a heap?
Answer: A heap is a tree-based data structure that efficiently exposes the minimum or maximum element, depending on its type.

A binary heap typically supports:
- Access to the root in \(O(1)\)
- Insertion in \(O(\log n)\)
- Removal of the root in \(O(\log n)\)
Example: A job scheduler can use a min-heap to select the job with the earliest scheduled execution time.

Remember: A heap is not a fully sorted data structure. It only guarantees the ordering relationship needed by the heap property.
Q46. What is a trie?
Answer: A trie is a tree-like data structure that stores strings by their prefixes.

It is useful for:
- Autocomplete
- Prefix searches
- Dictionary lookups
- Search suggestions
Example: If a user types sys, a trie can help find suggestions such as system, system design, and systematic.

Trade-off: Tries can make prefix searches efficient, but they may consume significant memory. Compressed tries can reduce that overhead.
Q47. What is a graph, and where is it used?
Answer: A graph consists of vertices (nodes) and edges connecting them. Edges can be directed or undirected, weighted or unweighted.

System-design applications:
- Social networks
- Route planning
- Dependency management
- Recommendation systems
- Service dependency mapping
Example: In Instagram, users can be nodes and follow relationships can be directed edges.

A graph may be stored using an adjacency list or adjacency matrix. The appropriate representation depends on graph density and query patterns.
Q48. What is a queue, and why is it important?
Answer: A queue follows FIFO, meaning first in, first out.

It is widely used for:
- Background jobs
- Event processing
- Request buffering
- Asynchronous communication
Example: An e-commerce service places order-confirmation emails into a queue. Background workers send them without making the checkout request wait for email delivery.

Interview point: A production queue needs policies for retries, duplicate messages, dead-letter handling, ordering, and backpressure.
Q49. What is a priority queue?
Answer: A priority queue retrieves elements according to priority rather than insertion order. A heap is a common implementation.

Example: A distributed job scheduler may process critical payment-reconciliation tasks before low-priority analytics jobs.

Operations often include:
- Insert an item with a priority
- Retrieve the highest- or lowest-priority item
- Update priority, depending on implementation
Trade-off: Priority scheduling can starve low-priority jobs if high-priority work never stops arriving. Aging or fairness policies can help.
Q50. What is a Merkle tree?
Answer: A Merkle tree is a tree in which leaf nodes contain hashes of data blocks and parent nodes contain hashes derived from their children.

It allows systems to compare large datasets efficiently and identify differences without transferring every record.

Example: Distributed storage systems can compare Merkle-tree hashes to identify which portions of two replicas differ.

Benefits:
- Efficient integrity checks
- Reduced data transfer during comparisons
- Support for synchronization and verification
Interview point: A Merkle tree helps detect differences; it does not by itself decide which replica contains the correct data or resolve conflicting updates.

Part 6: Databases and Data Modeling (Q51–Q60)
Q51. What is the difference between SQL and NoSQL databases?
Answer: SQL databases typically use relational tables and structured schemas. NoSQL is a broad category that includes document, key-value, wide-column, and graph databases.
SQL	NoSQL
Relational data model	Several possible data models
Often supports rich joins	Some designs favor denormalized access
Strong transactional support in many systems	Guarantees vary by database
Examples: PostgreSQL, MySQL	Examples: MongoDB, Cassandra, Redis

Example: Use PostgreSQL for relational order and payment data. A document database may suit flexible product catalogs, while Redis may suit fast key-value access.

Interview point: Don't choose a database based on popularity. Choose it based on query patterns, consistency requirements, data relationships, and scale.
Q52. What is database normalization?
Answer: Normalization organizes relational data to reduce unnecessary duplication and update anomalies.

Suppose every order row stores the customer's name and address. If the customer changes their address, many rows might need updating.

A normalized design separates the data into tables such as:
- Customers
- Orders
- OrderItems
Each table stores data about a specific entity, connected using keys.

Benefits: Better consistency and fewer update anomalies.

Trade-off: Reading related information may require joins. Some systems deliberately denormalize data to improve read performance.
Q53. What is denormalization?
Answer: Denormalization deliberately duplicates or precomputes data to make important reads faster or simpler.

Example: A social-media feed may store references to posts in each user's feed instead of calculating all followed accounts' posts on every request.

Benefits:
- Faster reads
- Fewer expensive joins or calculations
- More predictable response times
Costs:
- Duplicate data
- More complicated updates
- Possible stale copies
- Extra storage
Interview point: Denormalization is a trade-off, not a universal optimization. Identify the expensive read first.
Q54. What is a database index?
Answer: An index is an additional data structure that helps the database find records without scanning the entire table.

For example:
CREATE INDEX idx_users_email
ON users(email);


This can speed up queries that filter by email:
SELECT *
FROM users
WHERE email = 'alex@example.com';


Benefits: Faster supported queries.

Costs: Additional storage and write overhead because indexes must be maintained when data changes.

Remember: Index usefulness depends on query patterns, selectivity, and the execution plan. Verify with tools such as EXPLAIN.
Q55. What is a transaction, and what are ACID properties?
Answer: A transaction groups database operations into a logical unit.

ACID stands for:
- Atomicity: The transaction succeeds as a unit or is rolled back.
- Consistency: It preserves defined database rules and constraints.
- Isolation: Concurrent transactions are controlled according to the chosen isolation level.
- Durability: Committed changes survive failures within the database's durability guarantees.
Example: A bank transfer should debit one account and credit another within a transaction so that a partial transfer does not leave the records inconsistent.

Interview point: ACID guarantees depend on the database and configuration. Understand the actual isolation and durability settings rather than assuming every system behaves identically.
Q56. What is database replication?
Answer: Replication maintains copies of data on multiple database nodes.

A common arrangement has a primary that accepts writes and replicas that copy changes and may serve reads.

Benefits:
- Read scaling
- Redundancy
- Failover options
- Geographic distribution
Trade-off: Replication consumes storage and network resources. Replicas may lag behind the primary.

Important: Replication does not automatically increase write capacity when all writes still go through one primary.
Q57. What is database sharding?
Answer: Sharding splits a dataset across multiple database nodes. Each shard holds only part of the data.

Example: A user service could assign records to shards using a user ID.
Users 1–1,000,000       → Shard A
Users 1,000,001–2,000,000 → Shard B
Users 2,000,001–3,000,000 → Shard C


These ranges are just an illustration of range-based sharding.

Benefits:
- Distributes storage
- Can distribute read and write load
- Allows capacity to grow across machines
Challenges:
- Choosing a good shard key
- Handling hot shards
- Cross-shard queries and transactions
- Rebalancing data
Q58. What is the difference between partitioning and sharding?
Answer: Partitioning divides data into smaller logical pieces. Sharding usually refers to distributing those pieces across separate database nodes.

For example:
- Partitioning orders by month can keep historical data organized.
- Sharding users by user ID can distribute the records across several servers.
Remember: The terminology varies between database systems. In interviews, explain where the data lives and how requests are routed rather than arguing over labels.
Q59. What is a primary key versus a foreign key?
Answer:
- Primary key: Uniquely identifies a row in a table.
- Foreign key: References a key in another table, helping enforce a relationship.
Example:
CREATE TABLE Customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id)
    REFERENCES Customers(customer_id)
);


Here, customer_id identifies a customer and links an order to that customer.

Interview point: Foreign keys can help maintain referential integrity, but constraints and relationships must be designed with the workload and database architecture in mind.
Q60. What is a database connection pool?
Answer: A connection pool maintains reusable database connections so the application doesn't need to establish a new connection for every query.

Benefits:
- Reduces connection setup overhead
- Limits database connections
- Improves resource management
Example: Instead of allowing 10,000 incoming requests to open 10,000 database connections, a service uses a controlled pool and queues or rejects excess work.

Trade-off: A pool that is too small can create wait times. A pool that is too large can overwhelm the database.

Part 7: Caching, Scaling, and Distributed Systems (Q61–Q70)
Q61. What is the difference between cache-aside and write-through caching?
Answer: These are two strategies for keeping a cache and a data store coordinated.

Cache-aside:
1. Application checks the cache.
2. On a miss, it reads from the database.
3. It puts the result into the cache.
Write-through:
1. Application writes through the caching layer.
2. The cache and underlying data store are updated as part of the write flow.
Cache-aside	Write-through
Loads data when needed	Updates cache as part of writes
Commonly used for read-heavy workloads	Helps keep cached values current
Can serve stale data if invalidation fails	Adds write-path overhead

Interview point: Neither strategy guarantees perfect consistency in every implementation. Define what happens when updates or invalidations fail.
Q62. What is cache invalidation?
Answer: Cache invalidation removes or refreshes cached data when it is no longer correct.

Common approaches:
- TTL: Automatically expire data after a time limit.
- Explicit invalidation: Delete or refresh a cache entry after a write.
- Versioning: Include a version in the cache key so old entries are no longer used.
Example: When a product price changes, the system should prevent users from seeing the old price indefinitely.

Why it's difficult: Multiple application servers and caches can hold copies of the same data. Keeping every copy current is a coordination problem.
Q63. What is a cache stampede?
Answer: A cache stampede occurs when many requests simultaneously miss the same cache entry and overload the underlying database or service.

Example: A popular product's cache entry expires. Thousands of users request it, and every request queries the database.

Solutions:
- Single-flight request coalescing
- Refreshing data before expiry
- Randomized TTLs
- Briefly serving stale data when safe
- Rate-limiting expensive cache-miss work
Interview point: Popular keys and synchronized expiration times make stampedes more likely.
Q64. What is horizontal scaling, and what challenges does it introduce?
Answer: Horizontal scaling adds more machines or service instances to handle more workload.

For example, an API may grow from two instances to ten behind a load balancer.

Challenges include:
- Shared-state management
- Database capacity
- Distributed coordination
- Network failures
- Uneven load distribution
- Deployment and monitoring complexity
Key point: A service scales horizontally more easily when instances are stateless and can handle requests independently.
Q65. What is stateless versus stateful architecture?
Answer:
- Stateless service: Does not rely on local, persistent session state between requests.
- Stateful service: Maintains state that influences subsequent operations.
Example: An API server that validates a signed token on each request can often remain stateless. A WebSocket server maintains live connections and therefore has connection state.

Stateless application servers are easier to replace and scale. Stateful systems need strategies for state placement, recovery, routing, and replication.

Remember: Stateless does not mean the whole application has no state. The state may live in a database, cache, or another dedicated service.
Q66. What is the CAP theorem?
Answer: The CAP theorem describes a trade-off in a distributed data system during a network partition.
- Consistency: Clients see data according to a single, up-to-date ordering of operations, as defined by the system's consistency model.
- Availability: Every request to a non-failing node receives a response.
- Partition tolerance: The system continues operating despite communication failures between nodes.
When a partition occurs, a system must choose whether to reject or delay some requests to preserve stronger consistency, or continue responding with weaker consistency guarantees.

Example: A banking operation may reject a write during a partition rather than risk accepting conflicting updates. A social-media feed may tolerate temporarily stale data.

Important: CAP is specifically about behavior during partitions. It does not simply mean every database permanently chooses any two of the three properties.
Q67. What is eventual consistency?
Answer: Eventual consistency means replicas may temporarily disagree, but if updates stop and synchronization succeeds, they are expected to converge.

Example: After changing a profile photo, one user might briefly see the old image while cached copies update.

Benefits:
- Can support highly distributed systems
- Allows some operations to continue despite temporary replication delays
Trade-offs:
- Users may see stale data
- Concurrent updates may require conflict resolution
- Application logic must tolerate temporary disagreement
Interview point: Eventual consistency is often suitable for likes, feeds, and some profile information. It may be unsuitable for operations that must enforce immediate correctness, such as preventing an overspend.
Q68. What is strong consistency?
Answer: Strong consistency is a broad term for guarantees that prevent clients from observing certain stale or conflicting results. One common guarantee is linearizability: each operation appears to take effect at a single point between its invocation and completion, respecting real-time ordering.

Example: When a payment is confirmed, a strongly consistent balance check can help ensure the next payment does not spend the same funds again.

Trade-off: Stronger guarantees may require coordination between nodes, which can increase latency or reduce the ability to complete operations during failures.

Remember: Be precise about the guarantee. “Strong consistency” can refer to different models in different systems.
Q69. What is a quorum in distributed systems?
Answer: A quorum is a required number of nodes whose responses or votes are needed for an operation.

In a simple replicated system with three replicas, a design might require two acknowledgements for a write.

For a majority quorum:
\[
Q=\left\lfloor\frac{N}{2}\right\rfloor+1
\]

For \(N=3\), the majority is 2.

Quorums can help coordinate replicated reads and writes, but their actual guarantees depend on the protocol, replica placement, and read/write quorum rules.

Interview point: A quorum alone does not guarantee linearizability or prevent every stale read.
Q70. What is consensus in distributed systems?
Answer: Consensus is a process by which distributed nodes agree on a value or an ordered sequence of decisions despite certain failures.

Consensus algorithms such as Raft and Paxos are used in coordination systems and replicated state machines.

Example: A cluster may need to agree on which node is the leader before accepting certain operations.

Consensus is useful for:
- Leader election
- Coordinating configuration changes
- Maintaining ordered replicated logs
- Implementing strongly coordinated metadata operations
Trade-off: Consensus usually requires communication among nodes. Network partitions and unavailable majorities can prevent progress.

Part 8: Messaging, Transactions, and Event-Driven Systems (Q71–Q80)
Q71. What is a message queue?
Answer: A message queue lets one service send work or messages to another service without requiring the receiver to process them immediately.

Example:
Order Service
     |
     v
 Message Queue
     |
     v
Email Worker
     |
     v
Send Confirmation


When a customer places an order, the order service can enqueue an email job. A worker sends the email separately.

Benefits: Decoupling, buffering traffic spikes, asynchronous processing, and independent scaling.

Challenges: Retries, duplicate messages, queue backlogs, ordering, and failed jobs.
Q72. What is the difference between a message queue and a publish-subscribe system?
Answer:
- Queue: Often distributes each job to one worker in a consumer group.
- Publish-subscribe (pub/sub): Distributes an event to multiple interested subscribers.
Example: An OrderCreated event could notify the inventory service, analytics service, and notification service.
Queue	Pub/sub
Often used for work distribution	Often used for event distribution
Workers share processing	Multiple subscribers can receive the event
Useful for background jobs	Useful for event-driven architectures

Important: Modern brokers can support both patterns, so the exact behavior depends on the product and configuration.
Q73. What is Kafka, and when would you use it?
Answer: Apache Kafka is a distributed event-streaming platform that stores ordered records in partitioned logs and allows consumers to process those records.

Use it when you need:
- High-throughput event ingestion
- Durable event retention
- Multiple independent consumers
- Replay of historical events
- Stream-processing pipelines
Example: An e-commerce platform publishes order events. Analytics, fraud detection, and inventory systems consume them independently.

Trade-off: Kafka adds operational complexity. For a small application needing a simple background job queue, a simpler broker may be enough.
Q74. What is at-most-once, at-least-once, and exactly-once delivery?
Answer: These terms describe message-processing guarantees.
- At-most-once: A message is delivered zero or one time. It may be lost.
- At-least-once: A message is retried until acknowledged under the system's delivery rules, so duplicates may occur.
- Exactly-once: Processing is guaranteed to have the specified effect exactly once within a defined scope and set of failure assumptions.
Example: An order-processing worker using at-least-once delivery might receive the same event twice.

A common solution is idempotent processing using a unique event or operation ID.

Interview point: Exactly-once behavior across independent systems is difficult. Broker-level guarantees do not automatically make an external payment or email happen exactly once.
Q75. What is idempotency?
Answer: An operation is idempotent if repeating it produces the same intended result as performing it once.

Example: Setting a user's status to inactive is naturally idempotent. Retrying a payment request that charges the customer each time is not.

For payment APIs, a client can provide an idempotency key:
POST /payments
Idempotency-Key: pay-abc123


The server stores the result associated with the key and returns the same logical result for retries instead of creating another charge.

Important: Idempotency requires correct key scoping, persistence, concurrency handling, and a defined retention period.
Q76. What is the Saga pattern?
Answer: The Saga pattern manages a business transaction that spans multiple independent services using a sequence of local transactions and, when needed, compensating actions.

Example: E-commerce checkout
1. Reserve inventory.
2. Authorize payment.
3. Arrange shipping.
If shipping cannot be arranged, the workflow might release inventory and refund or void the payment authorization, depending on the payment state.

Benefits: Avoids requiring one global database transaction across all services.

Trade-offs: Compensation is business logic, not a magical rollback. Some actions cannot be perfectly undone, and the workflow needs retries, state tracking, and recovery.
Q77. What is the difference between two-phase commit and Saga?
Answer: Both coordinate work across multiple components, but they use different approaches.
Two-phase commit (2PC)	Saga
Coordinates a distributed transaction	Coordinates a sequence of local transactions
Participants prepare before final commit	Steps commit individually
Can block during coordinator or participant failures	Uses retries and compensating actions
Aims for atomic commit across participants	Does not provide automatic global atomicity

Example: A traditional distributed transaction might use 2PC where supported. A large e-commerce workflow may use a Saga.

Interview point: Sagas commonly allow intermediate states to be visible. The application must handle them deliberately.
Q78. What is the transactional outbox pattern?
Answer: The transactional outbox pattern ensures a database update and the intent to publish an event are stored in the same local transaction.

Example:
1. An order is created.
2. An OrderCreated event is written to an outbox table in the same transaction.
3. A background publisher reads the outbox and publishes the event.
4. The event is marked as published or otherwise tracked.
Why it matters: Without an outbox, the database update might succeed while event publishing fails, leaving downstream services unaware of the order.

Trade-off: Publishing may occur more than once, so consumers should be idempotent.
Q79. What is event-driven architecture?
Answer: Event-driven architecture uses events to communicate that something has happened.

Example:
Order Service
     |
     | OrderCreated
     v
 Event Broker
   /   |    \
  v    v     v
Stock Email Analytics


Benefits:
- Loose coupling
- Independent consumers
- Asynchronous processing
- Easier integration of additional event consumers
Challenges:
- Eventual consistency
- Debugging across services
- Duplicate events
- Schema evolution
- Event ordering
Interview point: Events should have clear names, stable schemas, unique IDs, and documented meanings.
Q80. How do you handle retries and failed messages?
Answer: Use a deliberate retry policy rather than retrying forever.

A robust approach includes:
1. Set timeouts for external calls.
2. Retry transient errors.
3. Use exponential backoff with jitter.
4. Make operations idempotent.
5. Limit the number of attempts.
6. Move repeatedly failing messages to a dead-letter queue.
7. Monitor failures and provide a recovery or replay process.
Example: If an email provider temporarily returns an error, retry later. If an event has invalid data, repeatedly retrying it may never help, so it may need investigation instead.

Warning: Aggressive retries can make an overloaded service even less healthy.

Part 9: Reliability, Resilience, and Operations (Q81–Q90)
Q81. What is a timeout, and why is it important?
Answer: A timeout sets the maximum time an operation is allowed to wait before it is treated as unsuccessful or cancelled.

Without timeouts, a service may keep resources occupied while waiting for a dependency that never responds.

Example: An API might allow a database query 500 milliseconds before returning an error or attempting a fallback.

Interview point: Use appropriate timeouts for connection establishment, request execution, and the overall operation. A timeout does not necessarily mean the remote operation never happened.
Q82. What is a circuit breaker?
Answer: A circuit breaker stops sending requests to a dependency that is repeatedly failing, allowing it time to recover.

It commonly has three states:
- Closed: Requests are allowed.
- Open: Requests fail fast or use a fallback.
- Half-open: A limited number of test requests determine whether recovery has occurred.
Example: If a payment provider is unavailable, a circuit breaker can prevent every incoming checkout request from waiting for a long timeout.

Benefits: Limits cascading failures and reduces wasted resources.
Q83. What is bulkheading?
Answer: Bulkheading isolates resources so that failure or overload in one area does not consume everything.

The concept comes from ship compartments: flooding one compartment should not sink the entire vessel.

Example: A backend can use separate connection pools for payment requests and analytics queries. If analytics becomes slow, it should not consume every connection needed by payments.

Common techniques: Separate pools, worker limits, concurrency limits, and service isolation.
Q84. What is graceful degradation?
Answer: Graceful degradation means preserving core functionality when optional components fail.

Example: If a recommendation service fails, an e-commerce application can still display products using a popular-items list instead of failing the entire page.

Other examples:
- Show cached data if safe.
- Delay noncritical notifications.
- Disable expensive optional features.
- Use a simpler fallback response.
Interview point: Decide in advance which features are essential and which can be degraded safely.
Q85. What is fault tolerance?
Answer: Fault tolerance is a system's ability to continue providing an acceptable level of service despite failures in components.

Techniques include:
- Redundant instances
- Replication
- Failover
- Health checks
- Retry policies
- Failure isolation
Example: A service with several healthy instances behind a load balancer can continue serving requests when one instance crashes.

Remember: Redundancy alone does not guarantee fault tolerance. Shared dependencies and correlated failures can still take down the whole system.
Q86. What is disaster recovery?
Answer: Disaster recovery is the process of restoring service and data after a major incident, such as a regional outage, destructive error, or infrastructure failure.

Two important metrics:
- RPO (Recovery Point Objective): How much data loss, measured in time, is acceptable.
- RTO (Recovery Time Objective): How long recovery may take before service must be restored.
Example: An RPO of five minutes means the recovery plan aims to limit data loss to roughly the last five minutes of changes.

Interview point: Backups are useful only if they can actually be restored. Test recovery procedures regularly.
Q87. What is observability?
Answer: Observability is the ability to understand a system's internal behavior from the information it exposes.

The three commonly discussed pillars are:
- Logs: Records of events.
- Metrics: Numeric measurements over time.
- Traces: The path of a request across services.
Example: If checkout becomes slow, a distributed trace can help identify whether the delay is in inventory, payment, or database access.

Interview point: Observability helps teams investigate unexpected problems. It is not the same as merely collecting large volumes of logs.
Q88. What are SLIs, SLOs, and SLAs?
Answer:
- SLI (Service Level Indicator): A measured property, such as request success rate.
- SLO (Service Level Objective): The target for that property.
- SLA (Service Level Agreement): An agreement with users or customers, potentially including consequences for missing commitments.
Example:
- SLI: Percentage of successful requests.
- SLO: 99.9% successful requests over a defined measurement window.
- SLA: A contractual availability commitment with specified remedies.
Remember: An SLO is an engineering target. An SLA is a formal commitment, when one exists.
Q89. What is a rate limiter?
Answer: A rate limiter controls how many requests a client, user, or service can make during a period.

Common algorithms:
- Fixed window
- Sliding window
- Token bucket
- Leaky bucket
Example: An API might permit 100 requests per minute per user to reduce abuse and protect backend resources.

A distributed rate limiter must coordinate counters or tokens across instances if it is expected to enforce a shared global limit.

Trade-off: Strict coordination can add latency. Local limits are faster but may allow the aggregate traffic to exceed the intended limit.
Q90. What is backpressure?
Answer: Backpressure prevents an overloaded component from accepting work faster than it can process it.

Methods include:
- Bounded queues
- Concurrency limits
- Request rejection
- Rate limiting
- Pausing producers where supported
Example: If a video-processing queue is full, the upload service may reject new jobs temporarily or return a retryable response.

Why it matters: Without backpressure, queues and memory usage can grow until the system collapses under its own backlog.

Part 10: Practical System Design and Architecture Defense (Q91–Q100)
Q91. How would you design a URL shortener?
Answer: A URL shortener converts a long URL into a short identifier that redirects users to the original URL.

Architecture:
Client
  |
API Service
  |
URL Database
  |
Short Code → Original URL

Visitor → Short Code → Lookup → Redirect


Core components:
- API service
- Short-code generator
- Database
- Cache for popular links
- Analytics pipeline, if required
Key challenges: Unique IDs, redirect latency, abuse prevention, expiration, and analytics.

Interview trade-off: Redirects are typically read-heavy, so caching popular short codes can reduce database load.
Q92. How would you design WhatsApp?
Answer: A messaging system must support sending messages, receiving them, storing history, and delivering messages to offline users.

Architecture:
- WebSocket gateways for persistent connections
- Messaging service
- Message broker for asynchronous delivery
- Database for message history
- Push notification service for offline users
Important design decisions:
- Give each message a unique ID.
- Store messages durably before acknowledging them according to the chosen guarantee.
- Track delivery and read status.
- Preserve per-conversation ordering where required.
- Use idempotency to handle retries.
Hardest challenge: Delivering messages reliably while handling millions of concurrent connections and large group chats.
Q93. How would you design Instagram?
Answer: Instagram needs user profiles, follows, posts, media uploads, feeds, likes, comments, and notifications.

Architecture:
- User and social-graph services
- Post and feed services
- Object storage for media
- CDN for media delivery
- Database for post metadata
- Cache and ranking service
Feed strategies:
- Fan-out on write: Distribute post references to followers when someone publishes.
- Fan-out on read: Build the feed when a user opens it.
Trade-off: Fan-out on write makes reads faster but can be expensive for celebrities with millions of followers. A hybrid strategy can handle ordinary users and very large accounts differently.
Q94. How would you design YouTube?
Answer: YouTube needs video upload, processing, storage, discovery, and reliable playback.

Architecture:
Upload
  |
Object Storage
  |
Transcoding Workers
  |
Multiple Video Formats
  |
CDN
  |
Viewer


Supporting components include video metadata storage, search, recommendations, analytics, and access control.

Key decisions:
- Process videos asynchronously.
- Generate multiple resolutions and bitrates.
- Store large media in object storage.
- Deliver content through a CDN.
- Use adaptive bitrate streaming to respond to changing network conditions.
Hardest challenge: Efficient video processing and delivery at massive scale without overwhelming origin infrastructure.
Q95. How would you design Uber?
Answer: A ride-hailing platform must match riders with nearby drivers while handling changing locations and trip states.

Core services:
- Rider and driver services
- Location ingestion
- Geospatial index
- Matching service
- Trip service
- Pricing and payment services
- Notification service
How matching works:
1. Drivers send location updates.
2. The system indexes nearby drivers.
3. A rider requests a trip.
4. The matching service finds eligible drivers.
5. The system offers the trip and manages acceptance.
6. Trip status is updated throughout the journey.
Hardest challenge: Low-latency matching with rapidly changing locations, geographic partitioning, and concurrency around driver assignment.
Q96. How would you design a notification service?
Answer: A notification service sends email, SMS, push notifications, or in-app alerts triggered by application events.

Architecture:
Application Events
       |
 Message Queue
       |
Notification Workers
   /      |      \
 Email    SMS    Push


Important features:
- User notification preferences
- Message templates
- Provider integrations
- Retry and dead-letter handling
- Delivery status tracking
- Rate limits and deduplication
Trade-off: Asynchronous delivery improves the responsiveness of the calling service, but notifications may arrive later or fail. The system should track and recover failed deliveries.
Q97. How would you design a search engine?
Answer: A search engine collects documents, builds an index, and retrieves relevant results for queries.

Core components:
- Crawlers or content ingestion
- Document processing
- Inverted index
- Index storage
- Query service
- Ranking service
- Cache
An inverted index maps terms to documents containing those terms.

Example: Searching for distributed systems retrieves documents containing the query terms, then ranks them according to relevance signals.

Hardest challenge: Keeping indexes fresh while delivering low-latency, relevant results at scale.
Q98. How would you design a distributed job scheduler?
Answer: A distributed job scheduler stores scheduled jobs and assigns them to workers for execution.

Architecture:
- Scheduler service
- Durable job database
- Queue or task broker
- Worker pool
- Retry and dead-letter handling
- Monitoring
A job record might contain a job ID, scheduled time, status, retry count, and payload reference.

Important challenges:
- Avoiding lost jobs
- Preventing or tolerating duplicate execution
- Recovering after worker crashes
- Handling recurring jobs and time zones
- Controlling retries and concurrency
Interview point: A job may execute more than once after failures. Idempotent handlers and durable state transitions are essential.
Q99. How would you design a distributed file-storage system?
Answer: A file-storage system must accept uploads, store content durably, and let authorized users retrieve it.

Architecture:
- API service for metadata and permissions
- Object storage for file contents
- Metadata database
- Upload and download services
- CDN for suitable public or cacheable content
- Replication and backup systems
Important decisions:
- Split large uploads into chunks where appropriate.
- Validate permissions before serving private files.
- Use checksums to detect corruption.
- Track upload state so interrupted uploads can resume.
- Define replication, retention, and recovery policies.
Trade-off: Object storage is suitable for large blobs, while a database is generally better for structured metadata and queries.
Q100. How do you defend your system-design decisions in an interview?
Answer: Explain the requirement, the chosen design, the alternatives, and the trade-offs. Every major choice should solve a specific problem.

Use this structure:
1. Requirement: What must the system do?
2. Assumption: What workload or constraint are you designing for?
3. Choice: Which component or approach will you use?
4. Reason: Why does it fit the requirement?
5. Trade-off: What does it cost or make harder?
6. Failure handling: What happens when it breaks?
7. Evolution: What changes when traffic grows?
Example: Why use a queue for notifications?
- Requirement: Sending notifications should not delay checkout.
- Choice: Publish notification jobs to a durable queue.
- Reason: Workers can process notifications asynchronously.
- Trade-off: Delivery becomes eventually consistent, and the system needs retries and monitoring.
- Failure handling: Failed jobs are retried according to policy and moved to a dead-letter queue after repeated failures.
Strong interview answer: Don't say, “We use Kafka because big companies use Kafka.” Explain the workload, required guarantees, alternatives, and why the added complexity is justified.
# Q1. What is system design?
Answer: System design is the process of planning how different components of a software application work together to handle users, data, traffic, and failures.

Example: For a food delivery app, we need to design how users place orders, restaurants receive them, payments are processed, and delivery partners track orders.

A good design considers:
- Scalability: Can it handle more users?
- Reliability: Does it keep working during failures?
- Performance: Does it respond quickly?
- Security: Is user data protected?
- Cost: Is the system affordable to run?

# Q2. What is the difference between functional and non-functional requirements?
Answer:
Functional requirements	Non-functional requirements
What the system does	How well it does it
Users can place orders	Orders load quickly
Users can log in	Login remains secure
Users can send messages	Messages are delivered reliably


# Q3. What is scalability?
Answer: Scalability is a system’s ability to handle increasing traffic, data, or workload.

There are two main approaches:
- Vertical scaling: Increase the power of one server, such as adding RAM or CPU.
- Horizontal scaling: Add more servers to distribute the workload.
Example: If one server cannot handle 10,000 requests per second, you might add several servers behind a load balancer.

Horizontal scaling often offers more flexibility, but it introduces coordination and data-management challenges.

# Q4. What is the difference between latency and throughput?
Answer:
- Latency: How long one request takes.
- Throughput: How many requests the system processes per unit of time.
Example: An API responds in 100 milliseconds and handles 2,000 requests per second.

Here, 100 ms is latency and 2,000 requests/second is throughput.

A system can have high throughput but still have poor latency for individual users.

# Q5. What is a monolithic architecture?
Answer: A monolith is an application where major features are built and deployed as one unit.

Example: An e-commerce application contains authentication, products, orders, and payments in one application.

Advantages: Simple to develop, test, deploy, and debug initially.

Disadvantages: As the application grows, deploying changes and scaling individual features can become difficult.

# Q6. What is microservices architecture?
Answer: Microservices split an application into smaller services that can be developed and deployed independently.

Example: An e-commerce system might have separate services for users, products, orders, and payments.

Advantages: Independent scaling and deployment; clear service boundaries.

Disadvantages: Network failures, distributed debugging, data consistency issues, and operational complexity.

Interview point: Microservices are not automatically better. Start with a monolith when it fits the problem, then split services when there's a concrete reason.

# Q7. How would you approach a system design interview?
Answer: Follow this sequence:
1. Clarify requirements.
2. Estimate traffic and storage.
3. Define APIs and data models.
4. Draw the high-level architecture.
5. Identify bottlenecks and scale the system.
6. Discuss failures, security, and trade-offs.
Example: For a URL shortener, first clarify whether links need expiration, analytics, custom aliases, and global availability before selecting databases or caches.

Part 2: Networking and Web Architecture

# Q8. What happens when you enter a URL in your browser?
Answer: The simplified flow is:
1. The browser checks available caches.
2. DNS resolves the domain name to an IP address.
3. The browser establishes a connection, usually TCP with TLS for HTTPS, or uses QUIC for HTTP/3.
4. The browser sends an HTTP request.
5. A server or load balancer routes it to the application.
6. The application may query a database or cache.
7. The server returns a response.
8. The browser renders the page.


# Q9. What is DNS?
Answer: DNS, or Domain Name System, translates domain names into IP addresses.

Example: A browser needs the IP address associated with example.com to connect to the server.

DNS is like the internet’s address directory. Without it, users would need to memorize IP addresses, which would be a spectacularly unpopular design decision.

# Q10. What is the difference between HTTP and HTTPS?
Answer:
- HTTP: Transfers data without built-in transport encryption.
- HTTPS: Uses TLS to encrypt the connection and authenticate the server.
HTTPS helps protect data against interception and tampering while it travels between client and server.

Example: A login form should use HTTPS so passwords aren't sent over an unencrypted connection.

# Q11. What is the difference between TCP and UDP?
- TCP	
Connection-oriented	
Reliable, ordered byte stream	
Retransmits lost data	
Used by HTTP/1.1 and HTTP/2	

- UDP
Connectionless
No built-in delivery or ordering guarantee
Application handles reliability if needed
Used by DNS in many cases, voice/video, and QUIC transport

Example: A file download generally needs reliable delivery. A live voice call may prefer low delay over retransmitting every old packet.

Note that HTTP/3 uses QUIC, which runs over UDP while providing reliable streams and security.

# Q12. What is a REST API?
Answer: REST is an architectural style commonly used to expose resources through HTTP APIs.

Typical examples:
- GET /users/10 retrieves a user.
- POST /orders creates an order.
- PUT /users/10 replaces a user resource.
- PATCH /users/10 partially updates a user.
- DELETE /users/10 deletes a user resource.
A good API uses consistent resource naming, appropriate HTTP methods, status codes, validation, and authentication.

# Q13. What is the difference between cookies and tokens?
Answer:
- Cookies are browser-managed pieces of data sent according to cookie rules.
- Tokens are credentials or claims used to authenticate or authorize requests.
A session ID can be stored in a cookie. A bearer token can be sent in an HTTP Authorization header.

Security point: Cookies can use HttpOnly, Secure, and SameSite attributes. Tokens also need secure storage, expiration, and careful handling. Neither approach is automatically secure just because it has a fashionable name.

# Q14. What is a CDN?
Answer: A Content Delivery Network stores or serves content from locations closer to users.

Example: If a user in India watches a video hosted by a global platform, a nearby CDN edge may serve cached video segments instead of sending every byte from a distant origin server.

Benefits: Lower latency, reduced origin traffic, and better handling of traffic spikes.

Part 3: Performance and Capacity Estimation

# Q15. Why do we estimate traffic before designing a system?
Answer: Estimates help us select suitable servers, databases, caches, and storage.

We usually estimate:
- Daily active users
- Requests per second
- Read-to-write ratio
- Storage growth
- Network bandwidth
The numbers do not need to be exact. They need to make our design assumptions explicit.

# Q16. How do you calculate requests per second (RPS)?
Answer:
\[
\text{Average RPS}=\frac{\text{Requests per day}}{86,400}
\]

Example: A service receives 8.64 million requests per day.
\[
\frac{8,640,000}{86,400}=100
\]

Average traffic is 100 requests per second.

If peak traffic is five times the average, design for roughly 500 RPS initially, then validate with realistic load tests.

# Q17. How do you estimate storage requirements?
Answer:
\[
\text{Storage}=\text{Records}\times\text{Average record size}
\]

Example: A service stores 10 million records, averaging 2 KB each.
\[
10,000,000\times2\text{ KB}\approx20\text{ GB}
\]

This is a rough estimate. Indexes, replication, metadata, backups, and growth increase the actual storage requirement.

# Q18. What is the difference between average and peak traffic?
Answer:
- Average traffic: Typical request rate over a period.
- Peak traffic: The highest or near-highest request rate during busy periods.
Example: An online shopping site may average 1,000 RPS but reach 8,000 RPS during a major sale.

Designing only for average traffic may cause timeouts and outages during peak periods.

# Q19. What is a bottleneck?
Answer: A bottleneck is the component limiting the performance of the overall system.

Example: Your application servers can process 5,000 RPS, but your database can handle only 1,000 RPS for the current query pattern. The database becomes the bottleneck.

How to solve it: Measure first, then consider query optimization, indexes, caching, read replicas, partitioning, or reducing unnecessary work.

Adding more application servers won't magically repair a database that is already overloaded.

# Q20. What is the difference between bandwidth and latency?
Answer:
- Bandwidth: How much data can be transferred per unit of time.
- Latency: How long it takes data or a request to travel and receive a response.
Example: A network connection can have high bandwidth but still have high latency when communicating with a distant server.

For large file transfers, bandwidth matters heavily. For interactive applications, latency is often critical.

# Q21. What is Little’s Law?
Answer: Little’s Law relates the average number of requests in a system, throughput, and time spent in the system.
\[
L=\lambda W
\]

Where:
- \(L\) = average number of requests in the system
- \(\lambda\) = average throughput
- \(W\) = average time in the system
Example: A service handles 200 requests per second, and each request spends an average of 0.25 seconds in the system.
\[
L=200\times0.25=50
\]

On average, 50 requests are in the system.

Part 4: Operating Systems and Concurrency

# Q22. What is the difference between a process and a thread?
Answer:
- Process: A running program with its own virtual address space and resources.
- Thread: A sequence of execution within a process. Threads in the same process generally share memory.
Example: A web server process may use multiple threads to handle work concurrently.

Threads can be cheaper to create than separate processes, but shared memory introduces synchronization challenges.

# Q23. What is concurrency versus parallelism?
Answer:
- Concurrency: Multiple tasks make progress during overlapping periods.
- Parallelism: Multiple tasks execute at the same time, typically on different CPU cores.
Example: A single-threaded event loop can manage many network connections concurrently without executing all their code simultaneously.

A multi-core server can run CPU-intensive tasks in parallel.

# Q24. What is a race condition?
Answer: A race condition occurs when the result depends on the timing or interleaving of concurrent operations.

Example: Two requests read a bank balance of ₹1,000. Each attempts to deduct ₹100. If both read the old balance and overwrite one another's update incorrectly, the final balance may be wrong.

Solution: Use suitable atomic operations, locks, database transactions, or concurrency-control mechanisms.

# Q25. What is a deadlock?
Answer: A deadlock occurs when tasks wait indefinitely for resources held by one another.

Example:
- Thread A holds Lock 1 and waits for Lock 2.
- Thread B holds Lock 2 and waits for Lock 1.
Neither can proceed.

Prevention: Acquire locks in a consistent order, reduce lock scope, use timeouts where appropriate, and avoid unnecessary nested locking.
Q26. What is a mutex?
Answer: A mutex is a synchronization mechanism that allows only one thread at a time to enter a protected critical section.

Example: A mutex can protect an in-memory counter that multiple threads update.

A mutex protects shared access within the relevant process or synchronization environment. It does not automatically coordinate multiple application servers.
Q27. What is a thread pool?
Answer: A thread pool reuses a fixed or bounded set of worker threads to execute tasks.

Why it helps:
- Avoids repeatedly creating threads.
- Limits concurrent work.
- Helps control resource consumption.
Example: A server might use a worker pool to process database operations or CPU tasks.

Important: A pool that is too small causes queues and delays. One that is too large can exhaust memory or overwhelm downstream services.
Q28. What is an event loop?
Answer: An event loop processes events and schedules callbacks, often allowing one thread to manage many I/O operations.

Example: Node.js uses an event loop for much of its asynchronous I/O.

It works well for I/O-heavy workloads. Long-running CPU-intensive work can block the loop, so it may need worker threads or separate services.

Part 5: Data Structures for System Design
Study time: 5 minutes · Choose structures based on access patterns
Q29. Why do data structures matter in system design?
Answer: They affect lookup speed, memory usage, ordering, and the cost of updates.

Example: A cache may use a hash map for fast key lookup and a doubly linked list to track which item was used least recently.

The right choice depends on how the application reads, writes, searches, and deletes data.
Q30. What is a hash map?
Answer: A hash map stores key-value pairs and typically provides average \(O(1)\) lookup, insertion, and deletion.

Example:
const users = new Map();

users.set("u101", "Asha");

console.log(users.get("u101")); // Asha


System design use: Cache lookups, in-memory indexes, and mapping user IDs to data.

Worst-case behavior can differ from average behavior, and a regular in-memory map does not persist data or share it across servers.
Q31. What is a queue, and where is it used?
Answer: A queue usually follows FIFO: first in, first out.

Example: A background job queue stores image-processing tasks so workers can process them asynchronously.

Benefits: It separates request handling from slower work, absorbs bursts, and allows workers to scale independently.

Caution: Queues introduce concerns such as retries, duplicate delivery, ordering, and growing backlogs.
Q32. What is a stack?
Answer: A stack follows LIFO: last in, first out.

Example: Function calls use a call stack. A stack can also help implement undo operations.

In system design, stacks are less commonly the central distributed component than queues, but the concept appears in execution, parsing, and traversal algorithms.
Q33. What is a tree, and why do databases use tree indexes?
Answer: A tree organizes data hierarchically. Database indexes commonly use balanced tree structures, such as B-trees or B+ trees, to support efficient searches and range queries.

Example: An index on created_at can help a database retrieve records within a date range without scanning every row.

Indexes speed up suitable reads, but consume storage and add overhead to writes.
Q34. What is a graph, and where is it useful?
Answer: A graph consists of vertices (nodes) and edges (relationships).

Examples:
- Social networks: users and friendships.
- Maps: locations and roads.
- Recommendation systems: users, products, and interactions.
Graphs are useful when relationships are central to the problem, especially when queries traverse multiple connections.
Q35. What is a Bloom filter?
Answer: A Bloom filter is a probabilistic data structure that efficiently tests whether an item might be present in a set.
- It can return false positives.
- With a standard Bloom filter, it does not return false negatives for items inserted correctly, assuming no unsupported operations such as deletion are introduced.
- It stores a compact representation rather than the full items.
Example: A storage system checks a Bloom filter before reading a disk-based index. If the filter says an item is definitely absent, the system can skip that lookup.

Interview point: Bloom filters reduce unnecessary reads; they do not replace the actual data store.

Part 6: Database Internals
Study time: 5 minutes · Questions 36–42
Q36. What is an index in a database?
Answer: An index is a data structure that helps a database find records faster without scanning the entire table.

Example:
CREATE INDEX idx_users_email ON users(email);


Now, searching for a user by email can be much faster.

Advantages: Faster reads and searches.

Disadvantages: Extra storage and slower writes because the index must be maintained.
Q37. What is the difference between clustered and non-clustered indexes?
Answer:
- Clustered index: Determines how table rows are organized around the index key in databases that support clustered storage.
- Non-clustered index: Stores a separate index structure that points to the corresponding rows.
Think of a clustered index as a book organized around its main ordering, and a non-clustered index as the index pages at the back.

Exact behavior depends on the database engine. For example, InnoDB organizes its table around the primary key.
Q38. What is a database transaction?
Answer: A transaction is a group of database operations treated as one logical unit.

Example: transferring ₹500 between two accounts.
1. Deduct ₹500 from Account A.
2. Add ₹500 to Account B.
3. Commit both changes together.
If the operation fails, the database can roll back the transaction so that only one account isn't accidentally updated.
Q39. Explain ACID properties.
Answer: ACID helps ensure reliable database transactions.
Property	Simple meaning
Atomicity	All operations happen or none do
Consistency	Constraints remain satisfied
Isolation	Concurrent transactions are controlled
Durability	Committed changes survive failures covered by the database's durability guarantees

Example: A payment transfer should not deduct money from one account without properly crediting the other.
Q40. What is database normalization?
Answer: Normalization organizes relational data to reduce duplication and prevent inconsistent updates.

Example: Instead of storing a customer's address repeatedly in every order row, store customer information in a users table and reference the user from orders.

Benefits: Less duplication and better data integrity.

Trade-off: Queries may require more joins.
Q41. What is denormalization?
Answer: Denormalization deliberately duplicates or precomputes some data to make reads faster.

Example: An order record may store the product name and price as they were at the time of purchase, even though product details also exist in another table.

Why? It reduces expensive joins and preserves historical order details.

Trade-off: Duplicated data must be updated or managed carefully.
Q42. What is the N+1 query problem?
Answer: It happens when an application runs one query to fetch a list and then runs another query for each item.

Example: Fetch 100 orders, then execute a separate query to fetch each order's customer.

That can mean 101 database queries instead of one or a small number of efficient queries.

Solutions: Use joins, batch fetching, eager loading where appropriate, or a DataLoader-style batching mechanism.

Part 7: Data Modeling and Choosing a Database
Study time: 5 minutes · Questions 43–49
Q43. What is the difference between SQL and NoSQL databases?
Answer:
SQL	NoSQL
Relational tables	Document, key-value, graph, or wide-column models
Often uses a predefined schema	Often supports more flexible data models
Supports joins and relational queries	Query capabilities depend on the database
Examples: PostgreSQL, MySQL	Examples: MongoDB, Redis, Cassandra

Interview point: SQL is not only for small applications, and NoSQL is not automatically faster. Choose based on relationships, query patterns, consistency needs, and scale.
Q44. When would you choose SQL over NoSQL?
Answer: Choose SQL when relational integrity, joins, and transactions are important.

Example: A banking or order-management system may use PostgreSQL or MySQL to maintain relationships between accounts, payments, and orders.

Choose a NoSQL database when its data model and scaling characteristics fit the workload better, such as a key-value store for sessions or a document store for flexible product metadata.
Q45. What is a primary key?
Answer: A primary key uniquely identifies each row in a table.

Example:
CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  email VARCHAR(255) NOT NULL
);


A primary key must be unique and cannot be NULL.
Q46. What is a foreign key?
Answer: A foreign key links a row in one table to a valid row in another table, enforcing a relationship.

Example:
CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  user_id BIGINT REFERENCES users(id)
);


This relationship can prevent an order from referencing a nonexistent user, depending on the database constraints and transaction behavior.
Q47. What is a database schema?
Answer: A schema defines how data is organized, including tables, columns, data types, constraints, and relationships.

For an e-commerce application, you might have:
- users
- products
- orders
- order_items
- payments
A good schema reflects the application's requirements and the queries it needs to support.
Q48. What is a composite index?
Answer: A composite index covers multiple columns.

Example:
CREATE INDEX idx_orders_user_date
ON orders(user_id, created_at);


This is useful for queries such as:
SELECT *
FROM orders
WHERE user_id = 101
ORDER BY created_at DESC;


Important: Column order matters. An index on (user_id, created_at) generally helps queries filtering by user_id or by user_id plus created_at, but it may not efficiently support a query filtering only by created_at.
Q49. How would you design a database for an e-commerce application?
Answer: Start with the core entities and their relationships.
- users: customer details.
- products: product information.
- orders: order status, customer, totals.
- order_items: products and quantities per order.
- payments: payment status and transaction references.
Relationships:
- One user can have many orders.
- One order can contain many order items.
- Each order item references a product.
- An order can have associated payment records, depending on the payment model.
I'd typically start with a relational database because orders, payments, and inventory need well-defined relationships and transactional guarantees. I'd then add indexes based on measured query patterns.

Part 8: Scaling and Load Balancing
Study time: 5 minutes · Questions 50–56
Q50. What is horizontal scaling?
Answer: Horizontal scaling means adding more machines or instances to handle more workload.

Example: Instead of running one application server, run five behind a load balancer.

Benefits: More capacity and potentially better fault tolerance.

Challenges: Shared state, distributed coordination, network failures, and data consistency.
Q51. What is a load balancer?
Answer: A load balancer distributes incoming traffic across multiple servers.

Example:
Clients

Load balancer

Server 1

Server 2

Server 3



Benefits: Distributes load, supports health checks, and helps route traffic away from unhealthy servers.
Q52. What are common load-balancing algorithms?
Answer:
- Round robin: Sends requests to servers in rotation.
- Least connections: Favors servers with fewer active connections.
- Weighted round robin: Sends more traffic to servers with higher assigned weights.
- IP hash: Uses a client IP-derived hash to select a server.
The right choice depends on request duration, server capacity, connection behavior, and session requirements.
Q53. What is the difference between a reverse proxy and a load balancer?
Answer:

A reverse proxy sits in front of backend servers and forwards client requests. It may handle TLS termination, caching, routing, or compression.

A load balancer distributes traffic across backend instances.

They overlap: a reverse proxy can also act as a load balancer.
Q54. What is stateless architecture?
Answer: A stateless application server does not depend on its local memory to retain essential user session state between requests.

Example: Multiple API servers can serve the same user because session information is stored in a shared session store or represented by a validated token.

Benefits: Easier horizontal scaling and server replacement.

Important: Stateless application servers can still use databases, caches, and other stateful services.
Q55. What is sticky session or session affinity?
Answer: Session affinity tries to send the same client to the same server across multiple requests.

Why use it? Legacy applications may store session state locally.

Disadvantage: It can create uneven traffic distribution and make failures harder to handle.

A shared session store or properly designed stateless authentication often reduces the need for sticky sessions.
Q56. What happens if one application server fails?
Answer: A properly designed load balancer detects unhealthy instances through health checks and stops sending them new requests.

The system should also:
- Run multiple instances.
- Avoid essential state existing only on one server.
- Use timeouts and retries carefully.
- Monitor capacity after the failure.
Interview point: Removing one failed server is not enough if the remaining servers cannot handle the extra traffic.

Part 9: Caching
Study time: 5 minutes · Questions 57–63
Q57. What is caching?
Answer: Caching stores frequently accessed data in a faster location so future requests can retrieve it with less work.

Example: An e-commerce application caches popular product details instead of querying the database for every request.

Benefits: Lower latency, reduced database load, and potentially higher throughput.
Q58. What is the difference between cache hit and cache miss?
Answer:
- Cache hit: Requested data is available in the cache.
- Cache miss: The cache doesn't have the requested data, so the system must fetch it elsewhere.
A high cache hit rate can reduce database load, but the best target depends on the workload and the cost of a miss.
Q59. Explain cache-aside.
Answer: Cache-aside is a common caching pattern.
1. Application checks the cache.
2. If the data exists, return it.
3. If not, read from the database.
4. Store the result in the cache.
5. Return the result.
Example:
let product = await cache.get(productId);

if (!product) {
  product = await database.getProduct(productId);

  if (product) {
    await cache.set(productId, product, 300);
  }
}


This example assumes the cache and database clients support these methods. The 300 represents a five-minute TTL if the client uses seconds.
Q60. What is TTL in caching?
Answer: TTL stands for Time to Live. It determines how long cached data remains valid before expiring.

Example: A product listing might have a TTL of 60 seconds, while relatively static reference data might remain cached longer.

Trade-off: Short TTLs can reduce stale data but increase cache misses. Long TTLs improve reuse but may serve outdated information for longer.
Q61. What is cache invalidation?
Answer: Cache invalidation removes or refreshes cached data when the underlying source changes.

Example: When a product's price changes, the application invalidates the cached product entry.

Common approaches:
- TTL-based expiration.
- Explicit deletion after updates.
- Updating the cache alongside the database.
- Event-driven invalidation.
There is no universally perfect strategy. Cache invalidation is difficult because two copies of the same data can disagree.
Q62. What is a cache stampede?
Answer: A cache stampede happens when many requests simultaneously miss or expire the same cached entry, causing a flood of requests to the database.

Solutions:
- Request coalescing or single-flight loading.
- Staggered expiration or TTL jitter.
- Background refresh.
- Briefly serving stale data when appropriate.
- Rate-limiting expensive cache-miss work.
Q63. What is the difference between Redis and Memcached?
Answer: Both are commonly used in-memory data stores for caching.
Redis	Memcached
Supports several data structures	Primarily simple key-value caching
Offers persistence options and replication features	Generally focused on ephemeral caching
Useful for caching, counters, sets, and other supported patterns	Useful for straightforward distributed caching

Interview point: Redis isn't automatically the answer to every caching problem. Choose based on required features, operational complexity, memory limits, and workload.

Part 10: Replication and Partitioning
Study time: 5 minutes · Questions 64–70
Q64. What is database replication?
Answer: Replication maintains copies of data on multiple database servers.

Example: A primary database handles writes while replica databases serve some reads.

Benefits: Read scaling, redundancy, and potentially improved availability.

Challenges: Replication lag, failover, and keeping replicas sufficiently up to date.
Q65. What is the difference between a primary and a replica?
Answer:
- Primary: Commonly accepts writes and coordinates replication.
- Replica: Receives replicated changes and may serve reads.
Some databases support more complex multi-primary or leaderless designs, so this isn't the only possible architecture.
Q66. What is synchronous versus asynchronous replication?
Answer:
- Synchronous replication: A write waits for the required replica acknowledgement or replication condition before being considered complete.
- Asynchronous replication: The primary can acknowledge a write before replicas have received it.
Trade-off: Synchronous replication can improve durability or consistency guarantees but may increase latency or reduce availability when replicas are slow. Asynchronous replication can reduce write latency but risks losing acknowledged writes in certain failures, depending on the setup.
Q67. What is replication lag?
Answer: Replication lag is the delay between a change being committed on the primary and becoming visible on a replica.

Example: A user changes their profile name, then immediately reads from a lagging replica and sees the old name.

Solutions: Read recent writes from the primary, wait for replication to catch up, or use consistency-aware routing.
Q68. What is database sharding?
Answer: Sharding divides data across multiple database nodes so each node stores only a portion of the dataset.

Example: Users are distributed across shards based on their user IDs.

Benefits: More storage and write capacity than a single node can provide.

Challenges: Cross-shard queries, transactions, rebalancing, and shard hotspots.
Q69. What is a shard key?
Answer: A shard key determines which shard stores a particular record.

Example:
user_id = 101  → Shard A
user_id = 202  → Shard B
user_id = 303  → Shard C


A good shard key distributes traffic and data evenly while supporting common query patterns.

A poor key, such as one that sends nearly all active writes to a single shard, creates a hotspot.
Q70. What is the difference between replication and sharding?
Answer:
Replication	Sharding
Copies data across nodes	Splits data across nodes
Helps redundancy and read scaling	Helps distribute storage and workload
Multiple nodes may contain the same records	Different shards contain different subsets
Can improve availability, depending on failover design	Can expand total dataset capacity

Remember: Replication makes copies. Sharding divides the data. A system can use both simultaneously.

Part 11: Distributed Systems Fundamentals
Questions 71–84 · Partial failures, timeouts, retries, clocks, ordering, and failure detection
Q71. What is a distributed system?
A distributed system consists of multiple computers or services that communicate over a network to work as one system.

Example: An online shopping application uses separate services for users, products, payments, and orders.
Q72. What is partial failure?
Partial failure occurs when one component fails while the rest of the system continues working.

Example: The payment service is unavailable, but the product catalogue still works.

Solution: Use timeouts, retries where appropriate, and graceful degradation.
Q73. Why are distributed systems difficult to design?
Because networks can fail, messages can be delayed or duplicated, servers can crash, and different machines can disagree about the current time.

Interview answer: Distributed systems must handle failures and uncertainty without assuming every component is always available.
Q74. What is a timeout?
A timeout defines how long a system waits for a response before stopping the wait.

Example: An API waits 2 seconds for a payment service. If no response arrives, it times out.

Timeouts prevent requests from waiting indefinitely, but a timeout does not prove that the operation failed.
Q75. What is a retry?
A retry repeats an operation after a temporary failure.

Example: A service retries a request after a temporary network error.

Retries should use limits, backoff, and often jitter to avoid overwhelming a struggling service.
Q76. What is exponential backoff?
Exponential backoff increases the waiting time between retries.

Example:
- First retry: 1 second
- Second retry: 2 seconds
- Third retry: 4 seconds
- Fourth retry: 8 seconds
Jitter adds randomness to these delays so many clients don't retry simultaneously.
Q77. What is the difference between a timeout and a retry?
- Timeout: Stops waiting after a defined period.
- Retry: Attempts the operation again.
A timeout may trigger a retry, but only if retrying is safe and useful.
Q78. What is idempotency?
An operation is idempotent if repeating it produces the same intended result as performing it once.

Example: Setting a user's email address to the same value repeatedly is idempotent.

For payments, an idempotency key helps prevent duplicate charges when a client retries a request.
Q79. What is clock skew?
Clock skew is the difference between the clocks of different machines.

Example: One server reports 10:00:05 while another reports 10:00:02.

This can cause problems with event ordering, token expiration, and timestamp-based processing.
Q80. Why can't we rely entirely on timestamps to order distributed events?
Machines have imperfect clocks, and network delays can cause events to arrive out of order.

Use sequence numbers, logical clocks, or application-level ordering rules when the system requires them.
Q81. What is a race condition in a distributed system?
A race condition occurs when the result depends on the timing or order of concurrent operations.

Example: Two users attempt to buy the last available ticket simultaneously.

Solution: Use atomic database updates, transactions, constraints, or appropriate coordination.
Q82. What is message ordering?
Message ordering determines the sequence in which messages are processed.

Example: A bank account should process a deposit and withdrawal according to the required transaction rules.

Systems may guarantee ordering only within a particular partition, session, or key rather than globally.
Q83. What is failure detection?
Failure detection attempts to determine whether a component is unavailable or unresponsive.

Methods include heartbeats, health checks, and timeouts.

A missed heartbeat doesn't always mean a server has crashed. It might simply be slow or disconnected.
Q84. What is a heartbeat?
A heartbeat is a periodic signal sent by a service or machine to indicate that it is still responsive.

Example: A worker sends a heartbeat every 5 seconds. If heartbeats stop arriving, a monitoring system may suspect a failure.

Part 12: Consistency Models and CAP
Questions 85–98 · Linearizability, serializability, eventual consistency, CAP, and PACELC
Q85. What is consistency in a distributed system?
Consistency describes what values clients can observe when data is read and updated across different machines.

Example: After changing a username, should every server immediately return the new username?
Q86. What is strong consistency?
Strong consistency usually means that reads reflect the latest completed write according to the system's consistency guarantee.

Example: A bank balance service should avoid showing an outdated balance when its API promises linearizable reads.
Q87. What is eventual consistency?
Eventual consistency means replicas may temporarily contain different values, but they converge if updates stop and replication eventually succeeds.

Example: A newly uploaded profile picture might take a short time to appear on every server.
Q88. What is linearizability?
Linearizability is a consistency guarantee in which each operation appears to occur atomically at some point between its invocation and completion, while respecting real-time ordering.

Example: If a balance update completes before a subsequent read begins, that read must reflect the completed update under a linearizable register model.
Q89. What is serializability?
Serializability is a transaction isolation property: concurrent transactions produce a result equivalent to some serial execution of those transactions.

Example: Two transfers between bank accounts should preserve the intended transaction rules despite concurrent execution.

Remember: Linearizability concerns the ordering of operations, while serializability concerns the correctness of concurrent transactions.
Q90. What is the CAP theorem?
During a network partition, a distributed data system must choose between:
- Consistency (C): Maintaining a single consistent view under the formal CAP definition.
- Availability (A): Every request to a non-failing node receives a response.
- Partition tolerance (P): The system continues operating despite network partitions.
When a partition occurs, a system cannot guarantee both CAP consistency and CAP availability for all requests.
Q91. Does CAP mean you can choose only two of three properties all the time?
No. The important trade-off occurs when a network partition happens.

When the network is healthy, a system may provide both consistency and availability. During a partition, it may reject or delay some requests to preserve consistency, or respond with potentially stale data to preserve availability.
Q92. What is a CP system?
A CP-oriented system prioritizes consistency over availability during a network partition.

Example: A distributed coordination service may refuse some operations when it cannot safely determine the authoritative state.
Q93. What is an AP system?
An AP-oriented system prioritizes availability during a partition, accepting that some responses may be stale or conflicting.

Example: A multi-region profile service might accept updates locally and reconcile them later.
Q94. What is PACELC?
PACELC extends CAP by describing two situations:
- If a Partition occurs: choose between Availability and Consistency.
- Else, when the network is healthy: choose between Latency and Consistency.
It highlights that consistency can have a latency cost even without a network partition.
Q95. What is read-your-writes consistency?
A user who has completed a write can subsequently read their own update.

Example: After changing a profile name, the same user sees the updated name instead of the previous value.
Q96. What is monotonic read consistency?
Once a client has observed a particular version of data, subsequent reads do not show an older version.
Q97. What is stale data?
Stale data is data that does not reflect the latest relevant update.

Example: A product page displays yesterday's inventory count because its cache hasn't refreshed.
Q98. When would you choose eventual consistency?
When temporary differences between replicas are acceptable and the system benefits from low latency, high availability, or geographically distributed writes.

Example: Likes, view counts, and some social-media feeds.

Part 13: Consensus and Coordination
Questions 99–112 · Quorums, leader election, Raft, split-brain, and distributed locks
Q99. What is consensus?
Consensus is the process through which distributed nodes agree on a value or sequence of decisions despite certain failures.

Example: Replicated servers agree on the next entry in a shared log.
Q100. What is leader election?
Leader election selects one node to coordinate a group of distributed nodes.

Example: One server becomes the leader responsible for accepting replicated database writes.
Q101. What is a quorum?
A quorum is a minimum number of nodes whose participation or agreement is required for an operation.

For a simple majority quorum among \(N\) nodes:
\[
Q=\left\lfloor\frac{N}{2}\right\rfloor+1
\]

With five nodes, a majority quorum is three.
Q102. What is the purpose of a majority quorum?
It helps prevent two disjoint groups from independently claiming majority authority in the same fixed voting configuration.

Any two majorities overlap, which helps consensus protocols maintain safety.
Q103. What is Raft?
Raft is a consensus algorithm that helps a cluster of servers maintain a replicated log.

Its key ideas include leader election, log replication, terms, and commitment of log entries.
Q104. What are the roles in Raft?
- Leader: Accepts client commands and coordinates log replication.
- Follower: Receives replicated log entries and responds to leader requests.
- Candidate: Requests votes when an election begins.
Q105. What is split-brain?
Split-brain occurs when different parts of a distributed system act as if each has the authority to be the leader.

Example: Two database nodes both accept conflicting writes as leaders.

Prevention: Use quorum-based coordination, fencing tokens, and safe leader-election protocols.
Q106. What is a distributed lock?
A distributed lock coordinates access to a shared resource across multiple processes or machines.

Example: Prevent two workers from generating the same report simultaneously.
Q107. Why can distributed locks be dangerous?
A client might pause, lose its lock lease, and later resume while another client already owns the lock.

Without safeguards, both clients may modify the resource.
Q108. What is a fencing token?
A fencing token is a monotonically increasing number associated with lock ownership. The protected resource rejects operations carrying older tokens.

This helps prevent an expired lock holder from making stale writes.
Q109. What is the difference between a distributed lock and a mutex?
- Mutex: Usually coordinates threads or processes within a limited execution environment.
- Distributed lock: Coordinates clients across machines through a distributed coordination mechanism.
Both protect shared resources, but distributed locks must account for network failures, leases, and stale owners.
Q110. What happens if the Raft leader crashes?
The remaining nodes can elect a new leader if they can form the required majority. Progress may pause during the election.
Q111. Can consensus work if a majority of nodes are unavailable?
A majority-based consensus cluster generally cannot commit new decisions without its required quorum.

For example, a five-node cluster normally needs three voting nodes.
Q112. When is consensus useful?
Consensus is useful for replicated logs, distributed coordination, leader election, and metadata that must remain consistent across nodes.

Part 14: Transactions and Distributed Data
Questions 113–126 · ACID, isolation anomalies, MVCC, 2PC, sagas, and outbox patterns
Q113. What are ACID properties?
- Atomicity: A transaction succeeds entirely or has no committed effect.
- Consistency: A transaction preserves defined data constraints.
- Isolation: Concurrent transactions are controlled to meet an isolation guarantee.
- Durability: Committed changes survive the failures covered by the database's durability guarantee.
Q114. What is a dirty read?
A dirty read occurs when a transaction reads changes made by another transaction that has not committed.

If the other transaction rolls back, the first transaction has read data that never became committed state.
Q115. What is a non-repeatable read?
A transaction reads the same row twice and gets different values because another transaction updated and committed that row in between.
Q116. What is a phantom read?
A transaction repeats a query and finds additional or missing rows because another transaction changed which rows match the query.

The exact anomalies permitted depend on the database's isolation level and implementation.
Q117. What is MVCC?
Multi-Version Concurrency Control maintains multiple versions of records so readers and writers can often operate concurrently with less blocking.

Example: A database reader may see a consistent snapshot while another transaction updates a row.
Q118. What is two-phase commit (2PC)?
2PC is a distributed transaction protocol with two phases:
1. Prepare: Participants indicate whether they can commit.
2. Commit or abort: The coordinator tells participants the final decision.
It helps coordinate an all-or-nothing outcome, but a failure can leave participants waiting for a decision.
Q119. What is a distributed transaction?
A transaction that involves multiple services, databases, or resource managers.

Example: An order operation updates an order database and a separate inventory database.
Q120. What is a saga pattern?
A saga coordinates a long-running business operation through a sequence of local transactions.

If a later step fails, compensating actions can reverse or offset earlier business effects.
Q121. What is a compensating transaction?
A compensating transaction performs a business action that counteracts an earlier action.

Example: If shipping cannot be arranged after payment succeeds, the system might initiate a refund.

A compensation is not always a literal rollback. Some actions, such as sending an email, cannot truly be undone.
Q122. What is the outbox pattern?
The outbox pattern stores a business change and an event record in the same local database transaction.

A separate publisher later sends the event to a message broker.

This reduces the risk that a database update succeeds but its corresponding event is never published.
Q123. What is the dual-write problem?
The dual-write problem occurs when an application updates two separate systems, such as a database and a message broker, and only one update succeeds.

The outbox pattern is one common solution.
Q124. When would you use 2PC versus a saga?
- 2PC: When participating systems support the protocol and a coordinated atomic transaction is required.
- Saga: When a business workflow spans services and can tolerate eventual completion with compensating actions.
Q125. What is transaction isolation?
Transaction isolation determines how concurrent transactions interact and which intermediate or committed states they can observe.

Stronger isolation generally provides stronger guarantees but may reduce concurrency or increase retries.
Q126. How do you maintain consistency across microservices?
Use suitable local transactions, idempotent event handling, outbox patterns, sagas, and reconciliation processes. Choose based on the business consistency requirements rather than assuming one global transaction is always practical.

Part 15: Messaging and Event-Driven Architecture
Questions 127–140 · Queues, Kafka, delivery guarantees, ordering, idempotency, and backpressure
Q127. What is a message queue?
A message queue allows producers to send messages that consumers process asynchronously.

Example: An order service publishes an order-confirmation task, and a worker sends the email later.
Q128. What is event-driven architecture?
An architecture in which components communicate through events representing things that happened.

Example: OrderPlaced triggers inventory reservation, payment processing, and email notifications.
Q129. What is the difference between a queue and publish-subscribe?
- Queue: A message is generally assigned to one consumer within a competing-consumer group.
- Publish-subscribe: An event can be delivered to multiple independent subscribers.
Exact behavior depends on the messaging platform.
Q130. What is Apache Kafka?
Kafka is a distributed event-streaming platform that stores events in partitioned logs and allows consumers to process them.

It is commonly used for event pipelines, activity streams, and data integration.
Q131. What is a Kafka topic?
A topic is a named stream of records.

Topics are divided into partitions to enable parallelism and distribute data across brokers.
Q132. What is a Kafka partition?
A partition is an ordered log of records within a topic.

Kafka provides ordering within a partition, not automatically across every partition in a topic.
Q133. What is a consumer group?
A consumer group allows multiple consumers to share the work of reading a topic's partitions.

Within a consumer group, each partition is assigned to at most one consumer at a time under normal group assignment.
Q134. What is at-most-once delivery?
At-most-once delivery means a message is delivered zero or one time. Messages can be lost, but they are not redelivered under the delivery guarantee.
Q135. What is at-least-once delivery?
At-least-once delivery means messages are retried until acknowledged or otherwise handled, so duplicates can occur.

Consumers should often be idempotent to handle repeated delivery safely.
Q136. What is exactly-once processing?
Exactly-once is a guarantee that a defined operation's effects occur once within a specified scope.

Kafka supports certain exactly-once processing workflows, but end-to-end exactly-once effects across external databases and services require additional coordination or idempotency mechanisms.
Q137. What is a dead-letter queue (DLQ)?
A dead-letter queue stores messages that cannot be processed successfully after the configured handling or retry policy.

It helps operators inspect failures without endlessly retrying the same problematic message.
Q138. What is backpressure?
Backpressure prevents producers from overwhelming consumers or downstream systems.

Example: A service limits incoming work when its processing queue grows too large.
Q139. How do you preserve message ordering?
Route related events through the same ordered partition or queue, often using an entity ID as the partition key. Ensure consumers process the events in the required order.
Q140. How do you handle duplicate messages?
Use idempotent consumers, unique event IDs, deduplication records, or database constraints. Make sure the deduplication check and business update are coordinated appropriately.

Part 21: Design a URL Shortener
Questions 141–154 · Key generation, redirects, storage, caching, and analytics
Q141. What is a URL shortener?
A URL shortener converts a long URL into a short link that redirects users to the original URL.

Example:

https://example.com/products/electronics/phone?id=12345

becomes:

https://short.ly/aB91x

When someone opens the short link, the service looks up the original URL and redirects the user.
Q142. What are the functional requirements?
- Create a short URL from a long URL.
- Redirect short URLs to the original destination.
- Handle invalid or expired links.
- Optionally track clicks and analytics.
- Optionally allow custom aliases and expiration dates.
Q143. What are the non-functional requirements?
- Low redirect latency.
- High availability.
- Scalability for large traffic volumes.
- Reliable storage of URL mappings.
- Abuse prevention for malicious links.
Redirects are usually much more frequent than URL creation, so the architecture should optimize the read path.
Q144. What APIs would you design?
Create a short URL
POST /api/urls
Content-Type: application/json


{
  "longUrl": "https://example.com/products/123"
}


Response:
{
  "shortUrl": "https://short.ly/aB91x"
}


Redirect
GET /aB91x


The service looks up the mapping and returns an HTTP redirect, commonly 301 or 302 depending on caching and redirect semantics.
Q145. What database schema would you use?
A simple relational table could be:
Column	Purpose
short_code	Unique short identifier
long_url	Original destination
created_at	Creation time
expires_at	Optional expiration
user_id	Optional link owner

Make short_code unique and indexed.

For a large distributed system, a key-value store can also be a good fit because the primary lookup is short_code → long_url.
Q146. How do you generate a short code?
Three common approaches:
- Random string: Generate a random code and check for collisions.
- Base62 encoding: Convert a unique numeric ID into letters and digits.
- Hash-based approach: Hash the URL and derive a code, with collision handling.
Base62 uses 62 characters: a-z, A-Z, and 0-9.

A code of length 7 has \(62^7\), or roughly 3.5 trillion, possible combinations.
Q147. Why not use the long URL's hash directly?
Different URLs can produce the same shortened prefix, and identical URLs may need different links or ownership rules. A hash-based system needs collision handling and a clear policy for duplicate URLs.
Q148. How would you scale the service?
- Run multiple stateless application servers behind a load balancer.
- Partition URL mappings by short code.
- Cache frequently accessed mappings.
- Replicate storage for availability.
- Separate click analytics from the redirect path.
Q149. Why use caching?
Popular short links may be requested millions of times.

A cache such as Redis can store:

short_code → long_url

This reduces database reads and improves redirect latency.

Cache expiration and invalidation must account for deleted or expired links.
Q150. How do you handle redirects efficiently?
1. Receive the short code.
2. Check the cache.
3. If there is a cache miss, query persistent storage.
4. Validate expiration and link status.
5. Return the redirect response.
6. Send click analytics asynchronously when possible.
Do not make the user wait for analytics processing unless the product requires synchronous tracking.
Q151. How would you handle duplicate short codes?
Use a unique constraint or atomic key allocation. If random generation creates an existing code, generate another and retry within a defined limit.
Q152. How would you prevent malicious links?
Validate URLs, block known malicious destinations, rate-limit link creation, detect abuse, and provide reporting or takedown mechanisms.

A short URL is not automatically a trustworthy URL. It's just a long URL wearing a tiny disguise.
Q153. How would you design click analytics?
Send click events to a queue or event stream. Process them asynchronously to calculate totals, geographic aggregates where appropriate, and time-based statistics.

Keep analytics writes off the critical redirect path where possible.
Q154. What trade-offs would you explain to an interviewer?
- Random IDs are simple but require collision handling.
- Sequential IDs are efficient but can expose creation patterns.
- Cache improves latency but introduces invalidation complexity.
- 301 redirects may be cached aggressively; 302 is often more appropriate when destinations can change.
- Synchronous analytics may provide immediate tracking but can slow redirects.
Interview summary: A URL shortener is a key-value lookup service with a write path for creating mappings and a high-volume read path for redirects. The key design priorities are unique key generation, fast lookups, caching, and reliable redirect behavior.

Part 22: Design WhatsApp
Questions 155–168 · Connections, messaging, delivery, ordering, presence, and group chats
Q155. What are the functional requirements?
Users should send and receive messages, create group chats, see delivery status, receive notifications, and optionally share media and presence information.
Q156. What are the non-functional requirements?
Low message latency, high availability, durable message storage, privacy, and reliable delivery despite temporary disconnections.
Q157. What architecture would you use?
- API gateway for client requests.
- WebSocket gateways for persistent connections.
- Messaging service for message processing.
- Message broker for asynchronous delivery.
- Database for message history.
- Push notification service for offline users.
Q158. Why use WebSockets?
WebSockets provide a persistent, bidirectional connection between client and server. This allows the server to push new messages without waiting for the client to poll repeatedly.
Q159. How would you store messages?
A message record might contain:
{
  "messageId": "m123",
  "conversationId": "c456",
  "senderId": "u1",
  "content": "Hello",
  "timestamp": "2026-10-29T12:00:00Z"
}


Add sequence information or other metadata if the application requires ordered conversation history.
Q160. How do you deliver messages to offline users?
Persist the message, mark it as pending delivery, and deliver it when the recipient reconnects. Push notifications can alert the user while they are offline.
Q161. What do sent, delivered, and read mean?
- Sent: The server accepted or stored the message.
- Delivered: The recipient's device acknowledged receipt.
- Read: The recipient's application indicated that the message was viewed.
These statuses should have clearly defined meanings.
Q162. How do you preserve message ordering?
Assign a sequence number per conversation or partition messages by conversation ID. Process related messages in order and handle retries without creating duplicate messages.
Q163. How would you design group chats?
Store group membership separately from messages. A message sent to a group can be distributed to its members through a fan-out mechanism.

For large groups, asynchronous distribution avoids making the sender wait for every recipient.
Q164. What is message fan-out?
Fan-out means distributing one event or message to multiple recipients or downstream consumers.

For a group message, the system may create recipient-specific delivery tasks.
Q165. How do you handle duplicate messages?
Assign each message a unique ID. Use idempotent processing and deduplication so retries do not create duplicate conversation entries.
Q166. How would you show online presence?
Maintain a short-lived presence record updated by connections and heartbeats. Use expiration to handle disconnected clients whose disconnect event never arrived.

Presence is approximate, not an eternal truth carved into a database.
Q167. How would you protect message privacy?
Use authenticated connections, access controls, encryption in transit, secure storage, and carefully designed key management. End-to-end encryption requires that only intended endpoints can decrypt message contents.
Q168. How would you scale WhatsApp?
Partition conversations, scale WebSocket gateways horizontally, separate message persistence from delivery, and use queues for asynchronous fan-out and notifications.

Interview summary: The hardest parts are persistent connections, durable delivery, message ordering, offline delivery, and scaling group fan-out.

Part 23: Design Instagram
Questions 169–182 · Feeds, fan-out, media storage, ranking, and hot users
Q169. What are the main requirements?
Users can publish posts, upload photos or videos, follow accounts, view feeds, like posts, comment, and receive notifications.
Q170. What services would you design?
User service, social graph service, post service, feed service, media service, ranking service, and notification service.
Q171. How would you design the feed?
Store posts as metadata in a database, media in object storage, and use a feed service to select and rank relevant posts.
Q172. What is fan-out on write?
When a user publishes a post, the system proactively adds a reference to that post in followers' feed collections.

It makes feed reads faster but increases work during publishing.
Q173. What is fan-out on read?
When a user opens their feed, the system fetches recent posts from accounts they follow and combines them at read time.

It reduces publishing work but can make feed reads more expensive.
Q174. Which fan-out strategy is better?
A hybrid strategy is often useful.
- Normal accounts: fan-out on write.
- Extremely popular accounts: fan-out on read or partial fan-out.
The choice depends on follower counts and traffic patterns.
Q175. How would you store photos and videos?
Store media files in object storage and keep metadata and references in a database. Use a CDN to deliver frequently requested media close to users.
Q176. What is a CDN?
A Content Delivery Network caches content at geographically distributed edge locations to reduce latency and origin load.
Q177. How would you rank feed posts?
Use signals such as recency, user interactions, relationship strength, content relevance, and quality signals.

Ranking can happen asynchronously for some candidates and dynamically during feed retrieval.
Q178. What is a hot user problem?
A hot user has unusually high follower counts or traffic, creating a disproportionate load on feed generation and delivery.

Mitigate it with hybrid fan-out, caching, batching, and asynchronous processing.
Q179. How would you handle likes and view counts?
Use durable event processing and aggregation. Exact counts may require transactional updates or careful coordination, while approximate counters can scale better when small inaccuracies are acceptable.
Q180. How would you scale the social graph?
Represent follower relationships in a database designed for efficient adjacency lookups. Partition or cache relationship data based on access patterns.
Q181. How would you prevent duplicate posts during retries?
Use client-generated request IDs or idempotency keys and enforce uniqueness at the appropriate storage boundary.
Q182. What are the major trade-offs?
- Fan-out on write improves reads but makes writes expensive.
- Fan-out on read saves write work but makes reads expensive.
- Precomputed feeds reduce latency but may become stale.
- Caching helps popular content but requires invalidation strategies.
Interview summary: Instagram is a social graph and feed-generation system combined with a large media delivery pipeline.

Part 24: Design YouTube
Questions 183–196 · Uploads, transcoding, object storage, CDN, and streaming
Q183. What are the main requirements?
Users upload videos, watch videos, search content, manage channels, and receive recommendations.
Q184. What is the high-level architecture?
Upload service, video metadata service, object storage, transcoding workers, video catalog, search service, CDN, and analytics pipeline.
Q185. How would video upload work?
1. Authenticate the user.
2. Create an upload session.
3. Upload the video, possibly in chunks.
4. Store the original file.
5. Queue a transcoding job.
6. Update video status when processing finishes.
Q186. Why use multipart or resumable uploads?
Large uploads can fail due to network interruptions. Chunked or resumable uploads allow the client to retry failed portions instead of restarting the entire file.
Q187. What is transcoding?
Transcoding converts a video into different resolutions, bitrates, formats, or codecs for compatibility and adaptive streaming.
Q188. Why use asynchronous transcoding?
Video processing is computationally expensive and may take a long time. A queue allows uploads to finish independently while workers process videos in the background.
Q189. Where would you store videos?
Use object storage for large media files and a database for metadata such as title, owner, duration, processing status, and storage locations.
Q190. What is adaptive bitrate streaming?
The player switches between video qualities based on available bandwidth and device conditions.

Common technologies include HLS and MPEG-DASH.
Q191. Why use a CDN?
Video files are large and frequently watched. A CDN caches video segments close to viewers, reducing latency and load on origin storage.
Q192. How would you handle failed transcoding jobs?
Retry transient failures with limits and backoff. Send persistently failing jobs to a dead-letter queue and expose job status for monitoring or manual recovery.
Q193. How would you design video metadata?
A record may include videoId, ownerId, title, status, duration, createdAt, and references to processed video variants.

Keep large binary media out of the ordinary metadata table.
Q194. How would you scale video delivery?
Use object storage, CDN caching, multiple transcoding workers, job queues, and capacity-aware processing.
Q195. How would you count views?
Define what counts as a valid view, emit view events, filter invalid traffic, and aggregate events asynchronously. Avoid updating one database row synchronously for every view on a popular video.
Q196. What are the main trade-offs?
- More video variants improve compatibility but increase storage.
- Higher bitrates improve quality but increase bandwidth.
- Aggressive caching improves delivery but complicates content invalidation.
- More transcoding workers reduce delays but increase compute costs.
Interview summary: Separate upload, processing, metadata, and delivery. Store large media in object storage and deliver it through a CDN.

Part 25: Design Uber
Questions 197–210 · Geospatial indexes, matching, location updates, and trip state
Q197. What are the main requirements?
Riders request trips, drivers share locations, the system matches drivers to riders, and both parties track trip progress and payment.
Q198. What services would you design?
Rider service, driver service, location service, dispatch service, trip service, pricing service, payment service, and notification service.
Q199. How would you store driver locations?
Maintain frequently updated driver coordinates in a low-latency location store, potentially with geospatial indexes. Durable trip history belongs in separate persistent storage.
Q200. What is a geospatial index?
A data structure that helps query geographic objects by proximity or area.

Examples include geohashes, quadtrees, and R-trees.
Q201. How would you find nearby drivers?
1. Find drivers in nearby geographic cells.
2. Filter unavailable or unsuitable drivers.
3. Calculate actual distance or travel time.
4. Rank candidates.
5. Send dispatch requests to eligible drivers.
A nearby driver is not necessarily the fastest driver to reach the rider.
Q202. Why not search every driver?
A global scan becomes expensive as the driver population grows. Geographic partitioning narrows the candidate set before more precise filtering.
Q203. How frequently should drivers update locations?
It depends on movement, speed, network conditions, and product requirements. Use adaptive update frequency and discard or downsample unnecessary updates.
Q204. How would you prevent one driver from accepting two trips?
Use an atomic assignment operation, conditional database update, or appropriate distributed coordination so only one request can claim the driver.
Q205. How would you model a trip's lifecycle?
A simplified state machine:

Requested → Searching → Driver Assigned → Driver Arrived → In Progress → Completed

Other states can include Cancelled and No Driver Found.
Q206. How would you handle driver location staleness?
Attach timestamps to location updates and exclude drivers whose latest location is too old for reliable dispatch.
Q207. How would you estimate arrival time?
Combine road-network distance, historical travel times, current traffic, and route information. Straight-line distance alone is usually insufficient.
Q208. How would you scale dispatch?
Partition location data geographically, run dispatch workers by region, cache active driver availability, and avoid repeatedly processing the same request.
Q209. What if a driver loses connectivity mid-trip?
Use the last known state, reconnect and synchronize when possible, and allow the trip service to recover from missed events. Safety-critical trip transitions must be persisted reliably.
Q210. What are the main trade-offs?
- Frequent location updates improve accuracy but increase network and storage load.
- Wider search regions find more drivers but increase matching cost.
- Aggressive caching reduces latency but may use stale availability.
- Distributed dispatch needs careful protection against duplicate assignments.
Interview summary: Uber is a real-time geospatial matching system combined with a carefully managed trip state machine.

Part 26: Design a Payment System
Questions 211–224 · Idempotency, ledger design, reconciliation, consistency, and failure recovery
Q211. What are the main requirements?
Accept payment requests, communicate with payment providers, track payment status, prevent duplicate charges, record financial movements, and support refunds and reconciliation.
Q212. What services would you design?
Payment API, payment orchestration service, provider adapters, payment database, ledger service, reconciliation service, and notification service.
Q213. What is idempotency in payments?
It ensures that repeated requests using the same idempotency key do not create multiple intended payment operations.

The server must persist and coordinate the key with the payment result.
Q214. Why is a payment timeout dangerous?
The provider might have charged the customer even though the application never received the response.

Do not blindly create a new payment. Query the provider or reconcile the existing transaction.
Q215. What is a ledger?
A ledger records financial movements as entries rather than merely storing the latest balance.

A properly designed double-entry ledger records balanced debits and credits for each transaction.
Q216. Why use double-entry bookkeeping?
It helps preserve accounting invariants and makes discrepancies easier to detect.

For each balanced journal transaction, total debits equal total credits.
Q217. How would you model payment states?
A simplified lifecycle:

Created → Pending → Processing → Succeeded / Failed

Additional states may include Unknown, Refund Pending, and Refunded. Avoid treating every timeout as a definite failure.
Q218. What is reconciliation?
Reconciliation compares internal payment and ledger records with external provider or bank records to identify missing, duplicated, or mismatched transactions.
Q219. How would you process refunds?
Create a separate refund record linked to the original payment. Track refund status independently, prevent duplicate refund requests, and record resulting ledger entries.
Q220. Why is eventual consistency risky in payments?
Different services may temporarily disagree about payment status. Financial decisions should rely on authoritative transaction records and explicit consistency guarantees, not arbitrary cached values.
Q221. How would you handle provider failure?
Use bounded retries for safe operations, provider status queries, circuit breakers where appropriate, durable state transitions, and reconciliation for uncertain outcomes.
Q222. What is a circuit breaker?
A mechanism that temporarily stops sending requests to a failing dependency after a threshold of failures, allowing recovery and preventing excessive load.
Q223. How would you secure payment data?
Use strong authentication and authorization, TLS, secure secret management, least privilege, audit logging, and appropriate payment-industry compliance controls. Minimize storage of sensitive card data.
Q224. What are the main trade-offs?
- Synchronous confirmation gives immediate feedback but increases dependency on provider latency.
- Asynchronous processing improves resilience but requires clear pending states.
- Stronger coordination helps preserve correctness but can reduce availability.
- A ledger offers auditability but requires careful schema and invariant design.
Interview summary: Payment systems prioritize correctness, idempotency, auditability, and recovery from uncertain outcomes over simply returning a fast response.

Part 27: Design a Notification Platform
Questions 225–238 · Push, email, SMS, retries, priorities, and delivery tracking
Q225. What does a notification platform do?
It sends notifications through channels such as push notifications, email, SMS, and in-app messages.

Example: An order service emits OrderShipped, and the notification platform sends the customer an update.
Q226. What architecture would you use?
Notification API, message queue, template service, preference service, channel workers, provider adapters, and delivery-status storage.
Q227. Why use a queue?
It separates notification requests from delivery. If an email provider is temporarily unavailable, messages can wait in a queue rather than blocking the order service.
Q228. How would you support multiple channels?
Define a common notification interface and implement separate adapters for email, SMS, and push providers.

This makes it easier to add a provider without rewriting the entire platform.
Q229. How would you prioritize notifications?
Use separate queues or priority classes for urgent and ordinary messages. Reserve capacity for critical alerts so marketing traffic cannot overwhelm them.
Q230. How would you handle provider failures?
Retry transient failures with exponential backoff and jitter. Stop retrying permanent failures, such as invalid recipient addresses, unless the underlying issue changes.
Q231. How would you avoid duplicate notifications?
Assign a unique notification or event ID and deduplicate processing. Provider-side idempotency can help when supported.

Exactly-once delivery cannot be assumed across arbitrary external providers.
Q232. How would you track delivery status?
Store states such as Queued, Sending, Accepted, Delivered, and Failed.

Distinguish provider acceptance from actual delivery. An email provider accepting a message does not mean the recipient read it.
Q233. How would you handle user preferences?
Store channel preferences, consent, unsubscribe status, and notification categories. Check preferences before sending messages where applicable.
Q234. What is a notification template?
A reusable message definition containing text, formatting, and variables.

Example: Your order {{orderId}} has shipped.

Templates support localization and consistent communication.
Q235. How would you handle provider rate limits?
Limit outgoing requests, monitor provider responses, queue excess work, and retry after the provider's suggested delay where available.
Q236. How would you scale the platform?
Partition queues by channel or workload, scale workers independently, batch requests where supported, and isolate unhealthy providers.
Q237. What is a dead-letter queue?
It stores messages that repeatedly fail processing so they can be investigated or retried after correction.
Q238. What are the main trade-offs?
- More retries improve eventual delivery but increase load.
- Batching improves throughput but can increase latency.
- Multiple providers improve resilience but complicate routing and delivery tracking.
- Priority queues protect urgent traffic but can starve lower-priority work if poorly configured.
Interview summary: Build notifications as an asynchronous, multi-channel pipeline with retries, idempotency, user preferences, and delivery tracking.

Part 28: Design a Search Engine
Questions 239–252 · Crawling, indexing, inverted indexes, ranking, and distributed search
Q239. What are the main components of a search engine?
A crawler, URL frontier, document parser, indexing pipeline, inverted index, query service, ranking system, and result cache.
Q240. What is web crawling?
Crawling automatically discovers and fetches web pages.

A crawler maintains a queue of URLs, fetches pages, extracts links, and schedules eligible URLs for future crawling.
Q241. What is an inverted index?
An inverted index maps a term to the documents containing it.

Example:
- database → document 1, document 4
- indexing → document 2, document 4
This makes keyword search much faster than scanning every document.
Q242. How does indexing work?
1. Fetch documents.
2. Extract and normalize text.
3. Tokenize text into terms.
4. Build term-to-document mappings.
5. Store the index for efficient retrieval.
Additional processing can include language analysis, deduplication, and metadata extraction.
Q243. How would you process a search query?
Normalize the query, retrieve candidate documents using the index, calculate relevance scores, apply filters, and return ranked results.
Q244. How would you rank search results?
Use relevance signals such as term matching, document quality, freshness, popularity, and user intent. The exact ranking model depends on the search product.
Q245. What is TF-IDF?
TF-IDF is a traditional text relevance measure combining how often a term appears in a document with how rare it is across the collection.

Terms that are common everywhere generally provide less discriminatory value.
Q246. What is distributed indexing?
Large collections are split across index shards. Indexing workers process documents in parallel, and the query service searches multiple shards.
Q247. What is sharding in search?
Sharding divides an index into smaller pieces that can be stored and searched independently.

The query coordinator merges results from relevant shards.
Q248. How would you keep search results fresh?
Use incremental indexing, update events, scheduled recrawling, and controlled index refreshes.

Freshness requirements must be balanced against indexing cost and query latency.
Q249. How would you avoid crawling the same URL repeatedly?
Normalize URLs, track visited URLs, deduplicate crawl tasks, and use policies for canonical URLs and query parameters.
Q250. How would you prevent crawler abuse?
Respect crawling policies, control request rates, limit concurrent connections per host, and avoid repeatedly overwhelming the same website.
Q251. How would you scale query traffic?
Replicate query-serving nodes, cache popular queries, partition indexes, and use parallel shard searches with strict timeouts.
Q252. What are the main trade-offs?
- Larger indexes improve coverage but increase storage and maintenance cost.
- Frequent indexing improves freshness but consumes more compute.
- More shards improve parallelism but increase coordination overhead.
- Caching reduces latency but can serve stale results.
Interview summary: A search engine transforms documents into an inverted index and uses distributed retrieval plus ranking to return relevant results quickly.

Part 29: Design a Rate Limiter and Distributed Job Scheduler
Questions 253–266 · Token bucket, sliding windows, fairness, leases, retries, and deduplication
Q253. What is a rate limiter?
A rate limiter restricts how many operations a client can perform during a specified period.

Example: An API permits 100 requests per minute per user.
Q254. Why do we need rate limiting?
To prevent abuse, protect downstream services, control costs, and maintain fair access to shared resources.
Q255. What is the token bucket algorithm?
A bucket accumulates tokens at a fixed rate up to a maximum capacity. Each request consumes a token.

If no token is available, the request is delayed or rejected.

It allows short bursts while controlling the long-term request rate.
Q256. What is a sliding-window rate limiter?
It tracks requests within a moving time window, enforcing a limit over that period.

It can be more accurate than fixed windows, though exact sliding-window implementations may require more storage or computation.
Q257. Fixed window vs. sliding window?
A fixed window resets counters at fixed boundaries, which can allow bursts around a boundary. A sliding window considers recent activity across a moving interval.
Q258. How would you implement a distributed rate limiter?
Use shared state in a store such as Redis, with atomic operations or scripts to update counters or token buckets.

The algorithm must handle concurrent requests safely across multiple application servers.
Q259. What happens if the rate-limiter store fails?
Choose an explicit policy:
- Fail open: Allow requests, favoring availability.
- Fail closed: Reject or restrict requests, favoring protection.
The choice depends on the endpoint's risk and business requirements.
Q260. What is a distributed job scheduler?
A system that schedules tasks to run at a particular time or according to a recurring schedule, then assigns those tasks to workers.

Examples include report generation, cleanup tasks, and scheduled notifications.
Q261. What is a lease in job scheduling?
A lease grants a worker temporary ownership of a task. If the worker crashes and the lease expires, another worker can reclaim the job.

Leases need expiration and ownership checks to prevent stale workers from completing jobs incorrectly.
Q262. How would you prevent a job from running twice?
Use durable job IDs, atomic claiming, lease ownership, deduplication, and idempotent job handlers.

Distributed systems can deliver work more than once, so exactly-once execution should not be assumed.
Q263. How would you retry failed jobs?
Retry transient failures with bounded exponential backoff and jitter. After the retry limit, mark the job as failed or send it for manual investigation.
Q264. How would you ensure fairness?
Use per-customer queues, quotas, weighted scheduling, or round-robin selection so one customer cannot monopolize worker capacity.
Q265. How would you handle a worker crashing mid-job?
Allow the lease to expire or explicitly release it, then make the job eligible for retry. Design the handler so repeated execution does not cause duplicate side effects.
Q266. What are the main trade-offs?
- Strict rate limiting provides stronger control but may add latency.
- Shared counters provide consistency but create dependency on the shared store.
- Short leases recover faster but risk premature reassignment.
- Longer leases reduce reassignment but delay recovery after worker failure.
Interview summary: A rate limiter controls traffic, while a job scheduler controls background execution. Both need atomic coordination, explicit failure policies, and protection against duplicate work.

Part 30: Mock Interviews and Architecture Defense
Questions 267–280 · Requirements, estimation, architecture, trade-offs, bottlenecks, and interviewer follow-ups

This part is different: these questions test whether you can design and defend a system rather than simply define terminology.
Q267. How do you start a system design interview?
Clarify requirements before drawing the architecture.

Ask about:
- Core user actions.
- Expected traffic and data volume.
- Latency and availability requirements.
- Consistency and security needs.
- Features explicitly outside the scope.
Example: For a chat application, clarify whether group chats, message history, read receipts, and offline delivery are required.
Q268. How do you estimate system capacity?
Estimate requests per second, storage, bandwidth, and peak traffic.

Suppose an application receives 10 million requests per day.
\[
\text{Average RPS}=\frac{10{,}000{,}000}{86{,}400}\approx116
\]

If peak traffic is five times the average, plan for roughly 580 requests per second as an initial estimate.

Actual capacity planning needs workload assumptions and performance testing.
Q269. How do you choose a database?
Choose based on access patterns, data relationships, consistency requirements, and operational needs.
- Relational database: Transactions and structured relationships.
- Key-value store: Fast lookups by key.
- Document database: Flexible document-shaped records.
- Search engine: Full-text search and relevance ranking.
- Object storage: Large files such as images and videos.
Do not choose a database merely because a popular company uses it.
Q270. When should you use caching?
Use caching when data is read frequently, recomputation or retrieval is expensive, and the system can tolerate the cache's freshness guarantees.

Consider cache invalidation, expiration, memory limits, and cache stampedes.
Q271. How do you identify the system's bottleneck?
Measure latency, throughput, error rates, CPU, memory, database queries, network usage, and queue depth.

Use profiling and load testing to determine which component limits performance.

Key idea: Optimize measured bottlenecks, not whichever component looks complicated on a diagram.
Q272. How do you design for high availability?
Use redundancy, health checks, automated failover, replicated data, and recovery procedures.

Avoid single points of failure, including dependencies such as a single database, queue, or authentication service.
Q273. How do you handle a service failure?
Detect the failure, bound waiting time with timeouts, retry safe operations where appropriate, isolate unhealthy dependencies, and degrade noncritical functionality if possible.

Preserve data correctness even when some functionality must become temporarily unavailable.
Q274. How do you decide between a monolith and microservices?
A monolith is often simpler to build, test, and deploy initially.

Microservices can support independent deployment and scaling, but add network failures, distributed data management, observability requirements, and operational complexity.

Choose microservices when their benefits justify those costs.
Q275. How do you handle database scaling?
Start by optimizing queries and indexing. Then consider caching, read replicas, partitioning, and sharding as demand grows.

Sharding introduces additional complexity in queries, transactions, and data rebalancing, so it should solve a real scaling problem.
Q276. How do you make an API reliable?
Use request validation, authentication, clear error responses, timeouts, appropriate rate limits, idempotency for retryable operations, and observability.

For APIs that modify data, define what happens when the client times out but the server may have completed the operation.
Q277. How do you explain trade-offs in an interview?
State the requirement, explain your choice, acknowledge its disadvantages, and describe when you would choose another approach.

Example: “I would use asynchronous messaging to decouple order creation from email delivery. This improves resilience, but introduces delivery delay and duplicate-message handling.”
Q278. What would you do if the interviewer changes the requirements?
Revisit the affected components and explain the consequences.

For example, if a URL shortener must support frequently changing destinations, reconsider redirect caching, invalidation, and whether 301 or 302 is appropriate.

Don't redesign the entire system unnecessarily.
Q279. How do you defend your architecture?
Explain why each component exists and what requirement it satisfies.

Be ready to discuss:
- Expected traffic and capacity.
- Data consistency.
- Failure scenarios.
- Security boundaries.
- Cost and operational complexity.
- Alternative approaches and their trade-offs.
Q280. What is the best way to conclude a system design interview?
Summarize the architecture, the main data flow, the scaling strategy, the key failure scenarios, and the biggest trade-offs.

For example:

“I would use stateless API servers, a relational database for transactional data, a queue for asynchronous processing, and caching for frequent reads. I would protect critical operations with transactions and idempotency, then scale based on measured bottlenecks.”
# Part 1: Design a URL Shortener

Requirements, APIs, database schema, architecture, scaling and implementation.
Starting now

- medium.com


1. The practical problem
Interviewer asks:

"Design a URL-shortening service like Bitly. A user submits a long URL and receives a short link. When someone opens that link, they should be redirected to the original URL. Design the system so it can scale to millions of users."

Example:
- Original: https://example.com/products/electronics/smartphone/model-123
- Shortened: https://sho.rt/aB92xK
- Opening https://sho.rt/aB92xK redirects to the original page.
The important engineering challenge isn't shortening a string. It's building a service that can generate unique identifiers, redirect quickly, and keep working as traffic grows.
2. Q&A: Start with requirements
Q1. What questions should you ask before designing the system?

Answer:

I would clarify the requirements first:
- Can users create short links without an account?
- Should users choose custom aliases?
- Do links expire?
- Do we need click analytics?
- How much traffic should we support?
- Is fast redirection more important than immediate analytics?
For this exercise, assume anonymous link creation is supported, links do not expire by default, and analytics are collected asynchronously.

Q2. What are the functional requirements?

Answer:
1. Create a short URL from a valid long URL.
2. Redirect a short URL to its destination.
3. Reject invalid input and handle unknown short codes.
4. Optionally support expiration, custom aliases and click analytics.
Q3. What are the non-functional requirements?

Answer:
- Low redirect latency.
- High availability.
- Unique short codes.
- Durable URL mappings.
- Protection against abuse.
- Scalability as traffic increases.
Functional requirements describe what the service does. Non-functional requirements describe how well and how reliably it must do it.
3. Estimate the traffic before choosing technology
Interviewers want to see whether you can turn vague requirements into approximate infrastructure needs.

Assume:
- 10 million new short links per month.
- 100 million redirects per day.
- Each URL mapping occupies approximately 500 bytes before database/index overhead.
- Read traffic is much higher than write traffic.
Q4. How many redirects per second must the system handle?

Average requests per second:
\[
\frac{100,000,000}{86,400}\approx1,157
\]

So we need to handle roughly 1,200 redirects per second on average.

Traffic isn't constant. If peak traffic is five times the average, plan for approximately 6,000 redirects per second, then validate this assumption with load testing.

Q5. How much storage do we need?

Ten million new links monthly means 120 million links yearly.

At 500 bytes per mapping:
\[
120,000,000 \times 500 = 60\text{ GB/year}
\]

That is approximately 60 GB of raw mapping data per year, excluding indexes, replication, backups and database overhead.

The lesson: estimate first, then select infrastructure. Buying a distributed database before calculating whether you need one is a remarkably popular way to create expensive problems.
4. Design the API
We need two core endpoints.
POST
/api/links

Create a short URL.
{
  "url": "https://example.com/products/123"
}


Example response:
{
  "code": "aB92xK",
  "shortUrl": "https://sho.rt/aB92xK"
}




GET
/{code}

Redirect to the original URL.
GET /aB92xK


Example response:
HTTP/1.1 302 Found
Location: https://example.com/products/123




Q6. Why use POST to create a link?

Because creating a resource changes server state. POST is suitable for submitting a URL and creating its mapping.

Q7. Why return HTTP 302 for redirection?

A temporary redirect is useful when destinations may change or when we want the browser to contact the service again on subsequent visits. A 301 permanent redirect may be cached aggressively by clients and intermediaries, making later destination changes harder to enforce.

For this design, use 302 by default unless the product has a clear reason to use permanent redirects.
5. Choose the database and schema
Start with PostgreSQL. It provides durable storage, unique constraints, transactions and straightforward indexing. At our assumed scale, we don't need to begin with a complicated distributed database.

Example schema:
CREATE TABLE links (
    id BIGSERIAL PRIMARY KEY,
    code VARCHAR(16) NOT NULL UNIQUE,
    original_url TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ
);

CREATE INDEX idx_links_expires_at
ON links (expires_at);


The unique constraint on code is critical. Application-level checks alone cannot reliably prevent duplicate codes when multiple servers create links concurrently.

Q8. Why do we need a database index on code?

The redirect handler repeatedly searches for a mapping using its code. An index avoids scanning every row as the table grows.

PostgreSQL already creates an index for the UNIQUE constraint on code, so we don't need to create a second index on that same column.

Q9. Why not store everything in Redis?

Redis is excellent for caching frequently accessed mappings, but the primary database should normally retain durable records. A cache can be evicted, restarted or lose data depending on its configuration.

We can add Redis after measuring database load and cache requirements.
6. Generate unique short codes
There are two common approaches.
Approach A: Random Base62 code

Generate a random identifier using a-z, A-Z and 0-9, giving 62 possible characters.

Advantages: simple, unpredictable-looking codes. Disadvantages: collisions must be handled.


Approach B: Encode a unique numeric ID

Allocate a unique database ID, then encode it in Base62.

Advantages: no collision between distinct IDs when encoding is implemented correctly. Disadvantages: IDs can be enumerable and may require a coordinated ID-generation strategy at scale.


For our first implementation, we'll use a cryptographically secure random code and rely on the database's unique constraint to guarantee that duplicate codes aren't stored.

Example TypeScript:
import { randomBytes } from "node:crypto";

const alphabet =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateCode(length = 7): string {
  const bytes = randomBytes(length);
  let code = "";

  for (const byte of bytes) {
    code += alphabet[byte % alphabet.length];
  }

  return code;
}


This is illustrative. Modulo mapping introduces a tiny distribution bias because 256 is not divisible by 62. A production implementation can use rejection sampling or a library with unbiased random selection.

Seven Base62 characters provide:
\[
62^7 \approx 3.52 \times 10^{12}
\]

possible codes.

Q10. What happens if two users receive the same code?

The database rejects the duplicate insert because code is unique. The application catches that specific uniqueness violation, generates another code and retries a limited number of times.

Never rely on "the probability is small" as a replacement for enforcing uniqueness.
7. Draw the complete system architecture
Client / Browser

Create links and open short URLs

Load Balancer

Distributes incoming requests across application servers

Application Servers

Validate requests, create codes, handle redirects

Redis Cache

Fast mapping lookups


PostgreSQL

Durable URL mappings



On a cache miss, the application queries PostgreSQL, then populates Redis. Successful redirects can publish click events to a queue for asynchronous analytics.


Q11. Explain the redirect flow step by step.

Answer:
1. A browser requests sho.rt/aB92xK.
2. The load balancer forwards the request to an application server.
3. The server checks Redis for aB92xK.
4. If the mapping exists in Redis, the server obtains the original URL.
5. If it is missing, the server queries PostgreSQL and populates the cache.
6. The server returns an HTTP redirect.
7. If analytics are enabled, a click event is sent to a queue for background processing.
The browser follows the redirect to the original destination.

Q12. What is a cache hit versus a cache miss?
- Cache hit: Redis already has the mapping. We avoid a database query.
- Cache miss: Redis doesn't have it. We fetch it from PostgreSQL.
A cache improves performance, but it does not replace the database.
8. Make the design production-ready
Q13. How would you scale to millions of users?
Answer:

Scale in stages rather than introducing every technology on day one.
- Stage 1: One application server and PostgreSQL.
- Stage 2: Multiple stateless application servers behind a load balancer.
- Stage 3: Redis caching for frequently requested links.
- Stage 4: Read replicas if database read capacity becomes a bottleneck.
- Stage 5: Partition or shard the mapping data if one database can no longer meet capacity or availability requirements.
- Stage 6: Add multi-region infrastructure if geographic latency and disaster recovery justify the extra complexity.
Each step should solve a measured problem.
Q14. What happens if Redis goes down?
Answer:

The application falls back to PostgreSQL. Redirects can continue, although latency and database load may increase.

We should also use connection limits, timeouts and circuit breakers to avoid overwhelming PostgreSQL during a cache outage. If the database becomes overloaded, rate limiting or temporary load shedding may be necessary.
Q15. How do you handle a sudden traffic spike?
Answer:
- Add application instances automatically where appropriate.
- Cache popular mappings.
- Use request rate limits to prevent abuse.
- Protect PostgreSQL with connection pooling and bounded concurrency.
- Apply backpressure to analytics processing.
- Monitor latency, error rates, cache hit ratio and database saturation.
One subtle issue: a single extremely popular link can overload a cache key or application path. Caching helps, but we must still test the actual traffic pattern.
Q16. How do you prevent malicious URLs?
Answer:
- Validate URL syntax and allow only supported schemes, typically http and https.
- Block or flag known phishing and malware destinations.
- Rate-limit link creation.
- Provide abuse reporting and link takedown mechanisms.
- Avoid fetching submitted URLs from the backend without strict SSRF protections.
- Never trust user-supplied URLs simply because they are syntactically valid.
Short links can hide dangerous destinations, so security is a core requirement rather than a feature to add after launch.
Q17. What consistency guarantees does this system need?
Answer:

A newly created short code should resolve to the correct destination immediately.

We can write the mapping to PostgreSQL first and return success only after the durable write succeeds. Redis can then be populated, or filled on the first read.

If reads use asynchronous replicas, a redirect immediately following creation could miss the new record because of replication lag. We can avoid that path for fresh links, use the primary for fallback reads, or implement another explicit read-after-write strategy.
Q18. How would you collect click analytics without slowing redirects?
Answer:

Publish click events to a message queue and process them asynchronously.

For example:

Redirect API → Queue → Analytics Workers → Analytics Database

The redirect handler should not wait for a slow analytics database transaction. If analytics are not business-critical, queue failures can be handled with a bounded retry policy and an explicitly defined policy for dropping or buffering events.

For important events, use durable queue acknowledgments and idempotent processing to reduce event loss and double-counting.

9. Practical implementation exercise
Now turn the architecture into a working project using TypeScript, Node.js, PostgreSQL and Redis.
URL Shortener: Implementation checklist
Track your progress
0/8



[ ] 1. Create the Node.js + TypeScript project

Configure the server, scripts and environment variables.


[ ] 2. Connect PostgreSQL

Create the links table and unique code constraint.


[ ] 3. Implement POST /api/links

Validate URLs, generate codes and persist mappings.


[ ] 4. Implement GET /:code

Look up the destination and return a 302 redirect.


[ ] 5. Add Redis caching

Cache hits, cache misses and expiration behavior.


[ ] 6. Add automated tests

Test duplicate codes, unknown links, invalid URLs and redirects.


[ ] 7. Add Docker and load testing

Run dependencies reproducibly and measure throughput and latency.


[ ] 8. Add analytics and failure testing

Queue click events and test Redis, database and queue failures.



10. Advanced interview questions
These are the follow-up questions that distinguish someone who can draw an architecture from someone who can reason about its behavior.

Q19. Why not generate sequential IDs and expose them directly?

Sequential IDs are easy to encode, but can reveal creation patterns and make links enumerable. A Base62-encoded ID is compact, but not inherently secret. If unpredictability matters, use random codes or a carefully designed identifier strategy, alongside access controls where necessary.

Q20. What if the destination URL changes after creation?

Update the database mapping and invalidate or refresh the corresponding cache entry. The application must handle concurrent updates consistently. HTTP 302 is useful because clients generally continue to request the short URL rather than permanently caching the destination.

Q21. How would you make link creation idempotent?

Accept an idempotency key from the client and persist the association between that key and the creation result. Repeated requests with the same key return the same result instead of creating multiple links. The key must be scoped appropriately and stored atomically with the operation.

Q22. What if the analytics queue is full?

Apply backpressure, bounded retries and a defined overflow policy. Depending on business requirements, we might buffer locally, use a durable broker, or drop nonessential analytics events. We should never allow an unbounded analytics backlog to consume all application memory.

Q23. How would you measure system health?

Track:
- Redirect latency at p50, p95 and p99.
- Redirect success and error rates.
- Requests per second and peak concurrency.
- Redis hit ratio and eviction rate.
- PostgreSQL query latency, connection saturation and replication lag.
- Queue lag, event-processing failures and retry counts.
Averages alone can conceal terrible tail latency, which is why percentiles matter.

Q24. When would you choose a NoSQL database instead of PostgreSQL?

When access patterns, write volume, horizontal scaling needs, or availability requirements justify it. A key-value database can be a good fit for code-to-URL lookups, but it introduces different consistency, indexing, operational and cost trade-offs. High traffic alone does not automatically make NoSQL the right answer.

11. Your first interview challenge
Imagine the interviewer changes the requirements:
Your URL shortener now receives 50,000 redirects per second. Redis becomes unavailable, and a popular link receives 20% of all traffic. How do you keep the service available without overwhelming the database?

A strong answer should discuss:
1. Traffic distribution and stateless application servers.
2. Database capacity, connection pooling and concurrency limits.
3. Cache recovery and protection against a thundering herd.
4. Load shedding, timeouts and fallback behavior.
5. Monitoring and a tested recovery plan.
The key is to explain what happens during the failure, not just name five technologies.


Part 2: Database and Data Architecture

SQL vs. NoSQL, indexing, replication, sharding, transactions and consistency.




Part 3: Scaling and Distributed Systems

Load balancing, caching, queues, partitioning, rate limiting and service discovery.




Part 4: Real-Time Systems

Chat applications, notifications, WebSockets, feeds and presence.




Part 5: Large-Scale Platforms

Search, file storage, video streaming, social media feeds and cloud infrastructure.




Part 6: Reliability and Advanced Design

Fault tolerance, disaster recovery, observability, security, CAP theorem and consistency models.




Part 7: Hands-on Implementation

Build systems with TypeScript, Node.js, PostgreSQL, Redis, Docker and queues, then test their behavior under load and failure.




Part 8: Advanced Interview Challenges

Open-ended design problems, capacity estimation, architecture trade-offs, failure scenarios and mock interviews.
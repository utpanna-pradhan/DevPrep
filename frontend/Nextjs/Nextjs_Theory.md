# 1. What is Next.js?

Next.js is a React framework used to build full-stack web applications.

It provides features such as file-based routing, server-side rendering, static site generation, API endpoints, image optimization, and SEO support.

React is mainly used to build UI components, while Next.js provides additional tools to build and deploy complete web applications.

Example: I can use Next.js to build a business website with multiple pages, server-rendered content, and optimized images.

# 2. React vs Next.js

React is a JavaScript library for building user interfaces. Next.js is a framework built on top of React.

- React	
  UI library	
  Routing requires an additional library
  Client-side rendering is common	
  SEO requires additional consideration	
  No built-in backend routing	

- Next.js
  React framework
  Built-in file-based routing
  Supports server and client rendering
  Provides built-in SEO features
  Supports Route Handlers

Interview example: I can use React with Vite to build a frontend application, or Next.js when I need features like server rendering, routing, and SEO support.

# 3. App Router vs Pages Router

Next.js provides two routing systems.

The Pages Router uses the pages directory, while the App Router uses the app directory.

- App Router	
Uses app/ directory	
Introduced in Next.js 13	
Supports React Server Components	
Uses layouts and nested layouts	
Supports loading and error boundaries through files	

- Pages Router
Uses pages/ directory
Older routing system
Uses traditional page components
Uses _app.js and _document.js
Uses different patterns for loading and error handling

The App Router is the recommended choice for most new Next.js projects.

# 4. What is file-based routing?

File-based routing means that routes are automatically created based on the folder and file structure of the application.

In Next.js App Router, a page.js file defines a route.

Example:
app/
├── page.js
├── about/
│   └── page.js
└── contact/
    └── page.js


This creates:
- /
- /about
- /contact
I don't need to manually configure each route using React Router.

# 5. What are dynamic routes?

Dynamic routes are used when a page needs to display different content based on a URL parameter.

In Next.js, dynamic route segments are created using square brackets.

Example:
app/
└── products/
    └── [id]/
        └── page.js


This can match URLs like:
/products/101
/products/102


The id parameter can be used to fetch the appropriate product.

export default async function ProductPage({ params }) {
  const { id } = await params;

  return <h1>Product ID: {id}</h1>;
}

In modern Next.js App Router versions, params is asynchronous and should be awaited.

# 6. Server Components vs Client Components

Server Components are rendered on the server, while Client Components can run in the browser and support interactive features like state, event handlers, and effects.

In the Next.js App Router, components are Server Components by default.

- Server Components	
  Default in App Router
  Can fetch data on the server	
  Cannot use useState or useEffect	
  Good for static content and data fetching	

- Client Components
	Require "use client"
  Can use browser APIs
  Can use React hooks
  Good for interactive UI

Example:

A product page can be a Server Component that fetches product data, while an Add to Cart button can be a Client Component.

This helps reduce unnecessary JavaScript sent to the browser.

# 7. SSR vs SSG vs ISR


These are different rendering strategies in Next.js.
Strategy	    Meaning	                                        Example
SSR	        Server-side rendering	                            Personalized dashboard
SSG	        Static site generation	                          Marketing website
ISR	        Static generation with periodic updates	          Product listing page

SSR: Server-Side Rendering
The page is rendered on the server for a request.
```js
export default async function Page() {
  const res = await fetch(
    "https://api.example.com/products",
    { cache: "no-store" }
  );

  const products = await res.json();

  return <div>{products.length} products</div>;
}
```

SSG: Static Site Generation
The page is generated ahead of time and served as static content.
```js
export default function Page() {
  return <h1>Welcome to our website</h1>;
}
```

ISR: Incremental Static Regeneration
ISR allows a static page to be regenerated after a specified time.
```js
const res = await fetch(
  "https://api.example.com/products",
  { next: { revalidate: 60 } }
);
```

This tells Next.js that the data can be revalidated after 60 seconds.

SSR is useful for frequently changing or request-specific data. SSG is useful for content that rarely changes. ISR combines static performance with periodic updates.

# 8. What is "use client"?

"use client" is a directive that marks a component as a Client Component.

It allows the component to use React hooks, event handlers, and browser APIs.

Example:
```js
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Without "use client", I cannot use useState in a Server Component.

Important: I don't add "use client" to every component. I use it only where client-side interactivity is required.

# 9. What are layouts and nested layouts?

Layouts are reusable UI structures shared across multiple pages.

They are useful for elements like navigation bars, sidebars, and footers.

In Next.js, a layout.js file defines a layout.

Example:
app/
├── layout.js
├── page.js
└── dashboard/
    ├── layout.js
    ├── page.js
    └── settings/
        └── page.js


The root layout can contain the main navbar and footer.

The dashboard layout can contain a dashboard sidebar.

The settings page automatically uses both layouts.

Benefit: Layouts prevent code duplication and preserve shared UI during navigation.

# 10. What are loading and error boundaries?

Next.js provides special files to handle loading states and errors.
loading.js
Displays a loading UI while a route's content is being loaded.
```js
export default function Loading() {
  return <p>Loading...</p>;
}
```

error.js
Displays a fallback UI when an error occurs in a route segment.
```js
"use client";

export default function Error({ reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>

      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
```

The error.js component must be a Client Component.

I use loading boundaries to improve the user experience during data fetching and error boundaries to prevent an error from breaking the entire application.

# 11. What are Route Handlers?
Answer:

Route Handlers allow me to create backend API endpoints directly inside a Next.js application.

They use the Web Request and Response APIs and support HTTP methods like GET, POST, PUT, PATCH, and DELETE.

Example:
app/
└── api/
    └── users/
        └── route.js

```js
export async function GET() {
  return Response.json({
    message: "Users fetched successfully"
  });
}

```
This creates an API endpoint:
/api/users


Use cases: Fetching data, handling form submissions, processing webhooks, and building simple backend APIs.

# 12. What is the Metadata API?

The Metadata API is a Next.js feature used to define SEO metadata such as page titles, descriptions, and Open Graph information.

Example:
```js
export const metadata = {
  title: "My Website",
  description: "A modern business website"
};

export default function Page() {
  return <h1>Welcome</h1>;
}
```

Next.js generates the appropriate HTML metadata tags.

For dynamic pages, I can use generateMetadata() to create metadata based on fetched data.

Benefit: It helps improve search engine understanding and social media previews.

# 13. How does image optimization work in Next.js?

Next.js provides the built-in Image component from next/image.

It helps optimize images by supporting responsive image sizes, lazy loading, and modern image formats when supported by the image optimization setup.

Example:
```js
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/product.jpg"
      alt="Product image"
      width={500}
      height={300}
    />
  );
}

```
The Image component helps reduce unnecessary image downloads and improve website performance.

I use optimized images, appropriate dimensions, descriptive alt text, and lazy loading for images that are not immediately visible.

# 14. SEO in Next.js
Q14. What is SEO in Next.js?

SEO stands for Search Engine Optimization. It helps a website appear higher in search engine results.

Next.js provides several features that help improve SEO:
- Server-side rendering for accessible page content.
- Metadata API for titles and descriptions.
- Dynamic metadata for individual pages.
- Sitemap and robots.txt support.
- Optimized images and performance.
- Semantic HTML and accessible content.

Example:
```js
export const metadata = {
  title: "Best Web Development Services",
  description:
    "Build modern and responsive websites for your business."
};

```
This helps search engines understand the content of the page.

# Q15. What is hydration in Next.js?

Hydration is the process where React attaches event handlers and client-side functionality to HTML that was already rendered on the server.

For example, Next.js can send HTML to the browser so the user can see the page immediately.

React then hydrates the page to make interactive elements, such as buttons and forms, functional.

Simple explanation:
- Server: Generates HTML.
- Browser: Displays the HTML.
- React: Hydrates the HTML to make it interactive.

# Q16. What is a hydration error?

A hydration error occurs when the HTML rendered on the server does not match the initial HTML rendered by React in the browser.

Example:
```js
"use client";

export default function Page() {
  return <p>{Math.random()}</p>;
}

```
The server and browser may generate different random numbers.

Because the initial output differs, React can report a hydration mismatch.
Common causes
- Using Math.random() or Date.now() during rendering.
- Accessing window or localStorage during the initial render.
- Rendering different content based on the browser environment.
- Invalid HTML nesting.
- Browser extensions modifying HTML before hydration.

How to avoid hydration errors
1. Keep the server and initial client output consistent.
2. Avoid browser-only APIs during initial rendering.
3. Use useEffect for browser-only logic after hydration.
4. Use suppressHydrationWarning only for narrow, intentional mismatches.

Example: Fixing a localStorage hydration issue
```js
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("name") || "Guest");
  }, []);

  return <p>Hello, {value}</p>;
}
```

Why does this work?

The server and initial browser render both display an empty value.

After hydration, useEffect runs in the browser and reads the value from localStorage.

This prevents the initial HTML mismatch.


# 17. What is the difference between Server Components and Client Components?

Server Components run on the server and are useful for data fetching and rendering content.

Client Components support browser interactivity, such as state, event handlers, and effects.

```js
// Server Component
export default async function Page() {
  const res = await fetch("https://api.example.com/users");
  const users = await res.json();

  return <h1>{users.length} Users</h1>;
}


"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

```
 Server Components are best for server-side data fetching and reducing client JavaScript. Client Components are used for interactive UI.

# 18. Can a Server Component import a Client Component?
Yes.

A Server Component can render a Client Component.

```js
// app/page.jsx
import Counter from "./Counter";

export default function Page() {
  return (
    <main>
      <h1>Home Page</h1>
      <Counter />
    </main>
  );
}


// app/Counter.jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Server Components can render Client Components, but Client Components cannot directly import Server Components as ordinary components. Server-rendered content can be passed through props such as children.

# 19. Can Client Components fetch data?
Yes.

Client Components can fetch data using useEffect, event handlers, or libraries such as SWR and React Query.

```js
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return <p>{users.length} users</p>;
}

```
Client Components can fetch data, but Server Components are often preferred for initial data fetching because they can access server resources directly and avoid unnecessary client-side requests.

# 20. What is the difference between SSR, SSG, and ISR?

Method	 Meaning
SSR	     Render HTML on the server for a request
SSG	     Generate HTML ahead of time
ISR	     Regenerate static content after a defined interval or invalidation

SSR is useful for request-specific content, SSG is useful for content that rarely changes, and ISR combines static performance with periodic updates.

# 21. What is static rendering?

Static rendering means a page is generated ahead of time and can be served without rendering it from scratch for every request.

```js
export default function Page() {
  return <h1>Welcome to WebNest</h1>;
}
```

Static rendering generates a page ahead of time, which improves response speed and reduces server work.

# 22. What is dynamic rendering?

Dynamic rendering means the page is rendered on the server when a request requires it.

It is useful for personalized or request-specific content.
```js
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");

  return <h1>{user?.value || "Guest"}</h1>;
}
```

Dynamic rendering is useful when a page depends on request-specific information, such as cookies, headers, or user-specific data.

# 23. What is the difference between generateStaticParams and dynamic routes?

Dynamic routes use URL parameters such as [id].

generateStaticParams tells Next.js which dynamic routes can be generated ahead of time.
```js
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default async function Page({ params }) {
  const { id } = await params;

  return <h1>Product {id}</h1>;
}
```

Dynamic routes define parameterized URLs, while generateStaticParams provides parameter values that Next.js can use to generate pages during build time.

# 24. What is streaming in Next.js?

Streaming allows the server to send parts of a page as they become ready instead of waiting for the entire page.

It works with React Suspense and Next.js loading boundaries.
```js
import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <h1>Dashboard</h1>

      <Suspense fallback={<p>Loading data...</p>}>
        <SlowComponent />
      </Suspense>
    </main>
  );
}
```

Streaming improves perceived performance by allowing users to see available content while slower parts of the page are still loading.

# 25. What is the React Server Component payload?

The React Server Component payload is a representation of the rendered Server Component tree.

It contains information needed by React to display Server Components and connect them with Client Components.

The RSC payload helps Next.js communicate server-rendered component output to the browser and supports navigation and hydration.

# 26. What is the difference between hydration and rendering?

Rendering creates the UI.

Hydration attaches client-side React behavior to HTML that has already been rendered.

Rendering creates the UI, while hydration makes server-rendered HTML interactive by attaching React event handlers and behavior.

# 27. What is a hydration mismatch?
A hydration mismatch occurs when the initial HTML rendered on the server differs from the initial client render.

Example:
```js
"use client";

export default function Page() {
  return <p>{Math.random()}</p>;
}

```
The server and browser may generate different values.

Hydration mismatches occur when server and client output differs. I avoid browser-only values or random values during the initial render.

# 28. What is the difference between useEffect and useLayoutEffect?

useEffect runs after the browser has painted the UI.

useLayoutEffect runs after DOM changes but before the browser paints.

UseEffect is suitable for most side effects. UseLayoutEffect is useful when DOM measurements or changes must happen before the browser paints.

# 29. What is a Suspense boundary?

A Suspense boundary allows React to display fallback UI while a component is waiting for something, such as asynchronous content.

```js
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductList />
    </Suspense>
  );
}

```
Suspense displays fallback content while a component is not ready, making it useful for loading states and streaming.

# 30. What is partial rendering in Next.js?

Partial rendering allows shared layouts to remain in place while only the relevant route content changes.

Partial rendering improves navigation by reusing shared layouts instead of rebuilding the entire page structure for every navigation.


# 31. What is data fetching in Next.js?
Data fetching means retrieving data from APIs, databases, or other sources.

In the App Router, Server Components can fetch data directly.
```js
export default async function Page() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await res.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

```
Next.js supports server-side and client-side data fetching. Server Components allow data to be fetched directly before rendering the UI.

# 32. What is caching in Next.js?

Caching stores previously generated or fetched data so it can be reused.

It helps reduce repeated work and improve performance.

Caching improves performance by reusing previously fetched or generated data instead of repeating the same operation.

# 33. What is the difference between cache and no-store?
cache: "force-cache" requests cached data.

cache: "no-store" requests fresh data without using the persistent Data Cache.

```js
const res = await fetch(url, {
  cache: "no-store",
});
```

Force-cache allows data to be reused from the cache, while no-store requests fresh data for each execution.

# 34. What is revalidation?

Revalidation updates cached data when it becomes stale or when explicitly requested.

```js
const res = await fetch(
  "https://api.example.com/products",
  {
    next: {
      revalidate: 60,
    },
  }
);

```
This configures a 60-second revalidation interval.

Revalidation allows Next.js to refresh cached data so users can receive updated content without rebuilding the entire application.

# 35. What is the difference between time-based and on-demand revalidation?

Time-based revalidation refreshes data after a configured interval.

On-demand revalidation refreshes data when triggered by code.

```js
import { revalidatePath } from "next/cache";

export async function POST() {
  revalidatePath("/products");

  return Response.json({
    success: true,
  });
}
```

Time-based revalidation refreshes data according to a time interval, while on-demand revalidation refreshes data when an event or action triggers it.
36. What are revalidatePath and revalidateTag?
- revalidatePath() invalidates cached data associated with a route.
- revalidateTag() invalidates cached data associated with a tag.
import { revalidateTag } from "next/cache";

revalidateTag("products", "max");


Interview answer: RevalidatePath targets a route, while revalidateTag targets data associated with a specific cache tag.
37. What is the difference between generateMetadata and metadata?
metadata is used for static metadata.

generateMetadata() is used for dynamic metadata.
export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Product ${id}`,
    description: `Details for product ${id}`,
  };
}


Interview answer: Metadata defines static page metadata, while generateMetadata creates metadata dynamically based on route parameters or fetched data.
38. What is parallel data fetching?
Parallel data fetching means fetching multiple independent resources at the same time.
const [users, products] = await Promise.all([
  fetch("/api/users"),
  fetch("/api/products"),
]);


Interview answer: Parallel fetching reduces total waiting time when multiple requests do not depend on each other.
39. What is sequential data fetching?
Sequential fetching means one request depends on the result of another request.
const user = await getUser();

const orders = await getOrders(user.id);


Interview answer: Sequential fetching is needed when a later request requires data returned by an earlier request.
40. How do you handle errors during data fetching?
You can handle errors with try...catch, HTTP status checks, and route error boundaries.
export default async function Page() {
  try {
    const res = await fetch(
      "https://api.example.com/products"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await res.json();

    return <p>{products.length} products</p>;
  } catch {
    return <p>Unable to load products.</p>;
  }
}


Interview answer: I check response status, handle errors with try-catch, and provide a meaningful fallback UI instead of allowing the page to fail unexpectedly.

Next.js Interview Questions 41–50
41. What are Route Handlers?
Route Handlers allow you to create API endpoints inside the App Router.
// app/api/users/route.js

export async function GET() {
  return Response.json({
    message: "Users fetched",
  });
}


Interview answer: Route Handlers provide backend API functionality within a Next.js application using standard HTTP methods.
42. What is the difference between Route Handlers and Server Actions?
Route Handlers expose HTTP endpoints.

Server Actions are server-side functions that can be called from forms or client interactions.
"use server";

export async function createUser(formData) {
  const name = formData.get("name");

  // Save user to database
}


Interview answer: Route Handlers are useful for APIs and external integrations. Server Actions are useful for performing server-side mutations directly from the application UI.
43. What are Server Actions?
Server Actions are asynchronous functions executed on the server.

They are useful for form submissions and database mutations.
"use server";

export async function submitForm(formData) {
  const email = formData.get("email");

  console.log(email);
}


Interview answer: Server Actions allow client UI to trigger server-side logic without manually creating a separate API endpoint.
44. What is middleware in Next.js?
Middleware runs before a request is completed.

It can inspect requests and perform actions such as redirects or access checks.

Interview answer: Middleware allows request processing before a route is reached. In current Next.js versions, the newer convention is called Proxy, using proxy.js or proxy.ts.
45. How do you protect a route in Next.js?
Routes can be protected using authentication checks and authorization logic.
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <h1>Dashboard</h1>;
}


Interview answer: I check the authenticated user on the server and verify permissions before returning protected content. Middleware or Proxy can provide an additional request-level check.
46. What is authentication vs authorization?
Authentication checks who the user is.

Authorization checks what the user is allowed to do.

Interview answer: Authentication verifies identity, while authorization determines access permissions.
47. How do you store authentication tokens securely?
For sensitive authentication tokens, secure HTTP-only cookies are commonly used.

Important cookie attributes:
- HttpOnly
- Secure
- SameSite
Interview answer: I use secure HTTP-only cookies for sensitive tokens and implement appropriate expiration, validation, and CSRF protection.
48. What is CSRF?
CSRF stands for Cross-Site Request Forgery.

It is an attack where a malicious website attempts to make a user's browser perform an unwanted action on another website where the user is authenticated.

Interview answer: CSRF tricks an authenticated browser into sending an unwanted request. Protection can include SameSite cookies, CSRF tokens, and origin validation.
49. What is XSS?
XSS stands for Cross-Site Scripting.

It occurs when malicious JavaScript is injected into a webpage and executed in another user's browser.

Interview answer: XSS is prevented by avoiding unsafe HTML injection, escaping untrusted content, validating inputs, and applying suitable security policies.
50. How do you connect Next.js with a database?
A Server Component, Server Action, or Route Handler can access a database through a server-side database client.
import { db } from "@/lib/db";

export default async function Page() {
  const users = await db.user.findMany();

  return <p>{users.length} users</p>;
}


Interview answer: I access the database through server-side code, keep credentials in environment variables, and avoid exposing database connections to the browser.

Next.js Interview Questions 51–60
51. What is SEO in Next.js?
SEO means Search Engine Optimization.

Next.js supports SEO through metadata, server-rendered content, semantic HTML, and sitemap generation.

Interview answer: Next.js helps SEO by making page content and metadata available to search engines and supporting optimized page delivery.
52. How do you add metadata in Next.js?
export const metadata = {
  title: "WebNest",
  description: "Premium websites ready to launch.",
};


Interview answer: I use the Metadata API to define page titles, descriptions, and other metadata.
53. What is Open Graph metadata?
Open Graph metadata controls how a webpage appears when shared on social platforms.
export const metadata = {
  openGraph: {
    title: "WebNest",
    description: "Premium websites ready to launch.",
    images: ["/og-image.jpg"],
  },
};


Interview answer: Open Graph metadata defines the title, description, and image used in social media previews.
54. What is sitemap.xml?
A sitemap lists important URLs on a website to help search engines discover them.

In Next.js, it can be generated using app/sitemap.js.
export default function sitemap() {
  return [
    {
      url: "https://example.com",
      lastModified: new Date(),
    },
  ];
}


Interview answer: A sitemap helps search engines discover and crawl important pages of a website.
55. What is robots.txt?
Robots.txt provides crawling instructions to search engine bots.

In Next.js, it can be created using app/robots.js.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
  };
}


Interview answer: Robots.txt gives crawlers instructions about which paths they should or should not crawl. It does not provide security or prevent access to protected pages.
56. What is the Next.js Image component?
The Image component from next/image provides image optimization features.
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/product.jpg"
      alt="Product"
      width={500}
      height={300}
    />
  );
}


Interview answer: Next.js Image supports responsive image delivery, lazy loading, and image optimization.
57. What is the difference between Image and img?
The standard img element displays an image.

Next.js Image provides additional optimization capabilities.

Interview answer: The native img element is simple and standard. Next.js Image provides additional features such as optimized image delivery and responsive sizing.
58. How do you improve performance in Next.js?
Important methods:
- Use Server Components where appropriate.
- Optimize images.
- Reduce unnecessary JavaScript.
- Use caching and revalidation.
- Avoid unnecessary client-side requests.
- Use dynamic imports for large components when useful.
Interview answer: I improve performance by reducing client JavaScript, optimizing images, using appropriate caching strategies, and avoiding unnecessary work during rendering.
59. What is code splitting?
Code splitting divides JavaScript into smaller bundles so the browser does not need to load all code immediately.

Interview answer: Code splitting improves initial loading performance by loading only the JavaScript required for a particular route or component.
60. What is dynamic import in Next.js?
Dynamic import loads a component when it is needed instead of including it in the initial bundle.
"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(
  () => import("./Chart"),
  {
    loading: () => <p>Loading chart...</p>,
  }
);

export default function Page() {
  return <Chart />;
}


Interview answer: Dynamic imports help reduce initial JavaScript loading by loading components on demand.

Next.js Interview Questions 61–70
61. What is the difference between redirect and useRouter?
redirect() is used for navigation from server-side code.

useRouter() is used for client-side navigation inside a Client Component.
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/dashboard")}>
      Dashboard
    </button>
  );
}


Interview answer: Redirect is useful for server-side navigation, while useRouter supports programmatic navigation in Client Components.
62. What is usePathname?
usePathname() returns the current URL pathname.
"use client";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  return <p>{pathname}</p>;
}


Interview answer: UsePathname helps identify the current route and is useful for active navigation links.
63. What is useSearchParams?
useSearchParams() reads query parameters from the URL.

For example:
/products?category=shoes


"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  return <p>{category}</p>;
}


Interview answer: UseSearchParams allows Client Components to read URL query parameters, which is useful for search, filters, and pagination.
64. What is the notFound() function?
notFound() displays the not-found UI for a route segment.
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <h1>{product.name}</h1>;
}


Interview answer: NotFound is useful when a requested resource does not exist and the application should display a 404 page.
65. What is the difference between layout.js and template.js?
A layout is reused across navigation and can preserve state.

A template creates a new instance when its route segment is navigated.

Interview answer: Layouts preserve shared UI across navigation, while templates remount their children and are useful when a fresh component instance is required.
66. What is the public folder in Next.js?
The public folder stores static assets that can be accessed directly by URL.

Example:
public/
  logo.png
  favicon.ico


The logo can be accessed using:
/logo.png


Interview answer: The public folder stores static files such as images, icons, and downloadable resources that are served from the root URL.
67. What are environment variables in Next.js?
Environment variables store configuration values outside the source code.

Example:
DATABASE_URL=your_database_url


Server-side code can access it:
const databaseUrl = process.env.DATABASE_URL;


Interview answer: Environment variables store configuration and secrets. Variables prefixed with NEXT_PUBLIC_ can be exposed to the browser, so sensitive credentials should never use that prefix.
68. What is the difference between development and production in Next.js?
Development mode supports debugging and fast development.

Production mode uses an optimized build.

Commands:
npm run dev


npm run build
npm run start


Interview answer: Development mode is optimized for coding and debugging, while production mode serves an optimized application built for deployment.

# 69. How do you deploy a Next.js application?

A Next.js application can be deployed to platforms such as Vercel or other compatible hosting providers.

Typical process:
1. Push code to GitHub.
2. Connect the repository to the hosting platform.
3. Configure environment variables.
4. Build the application.
5. Deploy the application.
6. Test the deployed website.
Interview answer: I deploy by connecting the repository, configuring environment variables, building the application, and verifying the production deployment.

# 70. How would you build a full-stack Next.js application?

A full-stack Next.js application can use:
- App Router for routing.
- Server Components for data fetching.
- Client Components for interactive UI.
- Server Actions or Route Handlers for backend operations.
- A database such as PostgreSQL.
- Authentication for user access.
- Metadata and image optimization for SEO and performance.
Interview answer: I would use Next.js App Router for the frontend and backend, Server Components for data fetching, Server Actions or Route Handlers for mutations, PostgreSQL for data storage, and secure authentication for protected routes.
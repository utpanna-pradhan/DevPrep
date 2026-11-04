1. What is Next.js?
Answer:

Next.js is a React framework used to build full-stack web applications.

It provides features such as file-based routing, server-side rendering, static site generation, API endpoints, image optimization, and SEO support.

React is mainly used to build UI components, while Next.js provides additional tools to build and deploy complete web applications.

Example: I can use Next.js to build a business website with multiple pages, server-rendered content, and optimized images.
2. React vs Next.js
Answer:

React is a JavaScript library for building user interfaces. Next.js is a framework built on top of React.
React	Next.js
UI library	React framework
Routing requires an additional library	Built-in file-based routing
Client-side rendering is common	Supports server and client rendering
SEO requires additional consideration	Provides built-in SEO features
No built-in backend routing	Supports Route Handlers

Interview example: I can use React with Vite to build a frontend application, or Next.js when I need features like server rendering, routing, and SEO support.
3. App Router vs Pages Router
Answer:

Next.js provides two routing systems.

The Pages Router uses the pages directory, while the App Router uses the app directory.
App Router	Pages Router
Uses app/ directory	Uses pages/ directory
Introduced in Next.js 13	Older routing system
Supports React Server Components	Uses traditional page components
Uses layouts and nested layouts	Uses _app.js and _document.js
Supports loading and error boundaries through files	Uses different patterns for loading and error handling

The App Router is the recommended choice for most new Next.js projects.
4. What is file-based routing?
Answer:

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
5. What are dynamic routes?
Answer:

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
6. Server Components vs Client Components
Answer:

Server Components are rendered on the server, while Client Components can run in the browser and support interactive features like state, event handlers, and effects.

In the Next.js App Router, components are Server Components by default.
Server Components	Client Components
Default in App Router	Require "use client"
Can fetch data on the server	Can use browser APIs
Cannot use useState or useEffect	Can use React hooks
Good for static content and data fetching	Good for interactive UI

Example:

A product page can be a Server Component that fetches product data, while an Add to Cart button can be a Client Component.

This helps reduce unnecessary JavaScript sent to the browser.
7. SSR vs SSG vs ISR
Answer:

These are different rendering strategies in Next.js.
Strategy	Meaning	Example
SSR	Server-side rendering	Personalized dashboard
SSG	Static site generation	Marketing website
ISR	Static generation with periodic updates	Product listing page

SSR: Server-Side Rendering
The page is rendered on the server for a request.
export default async function Page() {
  const res = await fetch(
    "https://api.example.com/products",
    { cache: "no-store" }
  );

  const products = await res.json();

  return <div>{products.length} products</div>;
}


SSG: Static Site Generation
The page is generated ahead of time and served as static content.
export default function Page() {
  return <h1>Welcome to our website</h1>;
}


ISR: Incremental Static Regeneration
ISR allows a static page to be regenerated after a specified time.
const res = await fetch(
  "https://api.example.com/products",
  { next: { revalidate: 60 } }
);


This tells Next.js that the data can be revalidated after 60 seconds.

Interview tip: SSR is useful for frequently changing or request-specific data. SSG is useful for content that rarely changes. ISR combines static performance with periodic updates.
8. What is "use client"?
Answer:

"use client" is a directive that marks a component as a Client Component.

It allows the component to use React hooks, event handlers, and browser APIs.

Example:
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


Without "use client", I cannot use useState in a Server Component.

Important: I don't add "use client" to every component. I use it only where client-side interactivity is required.
9. What are layouts and nested layouts?
Answer:

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
10. What are loading and error boundaries?
Answer:

Next.js provides special files to handle loading states and errors.
loading.js
Displays a loading UI while a route's content is being loaded.
export default function Loading() {
  return <p>Loading...</p>;
}


error.js
Displays a fallback UI when an error occurs in a route segment.
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


The error.js component must be a Client Component.

Interview example: I use loading boundaries to improve the user experience during data fetching and error boundaries to prevent an error from breaking the entire application.
11. What are Route Handlers?
Answer:

Route Handlers allow me to create backend API endpoints directly inside a Next.js application.

They use the Web Request and Response APIs and support HTTP methods like GET, POST, PUT, PATCH, and DELETE.

Example:
app/
└── api/
    └── users/
        └── route.js


export async function GET() {
  return Response.json({
    message: "Users fetched successfully"
  });
}


This creates an API endpoint:
/api/users


Use cases: Fetching data, handling form submissions, processing webhooks, and building simple backend APIs.
12. What is the Metadata API?
Answer:

The Metadata API is a Next.js feature used to define SEO metadata such as page titles, descriptions, and Open Graph information.

Example:
export const metadata = {
  title: "My Website",
  description: "A modern business website"
};

export default function Page() {
  return <h1>Welcome</h1>;
}


Next.js generates the appropriate HTML metadata tags.

For dynamic pages, I can use generateMetadata() to create metadata based on fetched data.

Benefit: It helps improve search engine understanding and social media previews.
13. How does image optimization work in Next.js?
Answer:

Next.js provides the built-in Image component from next/image.

It helps optimize images by supporting responsive image sizes, lazy loading, and modern image formats when supported by the image optimization setup.

Example:
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


The Image component helps reduce unnecessary image downloads and improve website performance.

Interview tip: I use optimized images, appropriate dimensions, descriptive alt text, and lazy loading for images that are not immediately visible.
14. SEO in Next.js
Q14. What is SEO in Next.js?
Answer:

SEO stands for Search Engine Optimization. It helps a website appear higher in search engine results.

Next.js provides several features that help improve SEO:
- Server-side rendering for accessible page content.
- Metadata API for titles and descriptions.
- Dynamic metadata for individual pages.
- Sitemap and robots.txt support.
- Optimized images and performance.
- Semantic HTML and accessible content.
Example:
export const metadata = {
  title: "Best Web Development Services",
  description:
    "Build modern and responsive websites for your business."
};


This helps search engines understand the content of the page.
Q15. What is hydration in Next.js?
Answer:

Hydration is the process where React attaches event handlers and client-side functionality to HTML that was already rendered on the server.

For example, Next.js can send HTML to the browser so the user can see the page immediately.

React then hydrates the page to make interactive elements, such as buttons and forms, functional.

Simple explanation:
- Server: Generates HTML.
- Browser: Displays the HTML.
- React: Hydrates the HTML to make it interactive.
Q16. What is a hydration error?
Answer:

A hydration error occurs when the HTML rendered on the server does not match the initial HTML rendered by React in the browser.

Example:
"use client";

export default function Page() {
  return <p>{Math.random()}</p>;
}


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
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("name") || "Guest");
  }, []);

  return <p>Hello, {value}</p>;
}


Why does this work?

The server and initial browser render both display an empty value.

After hydration, useEffect runs in the browser and reads the value from localStorage.

This prevents the initial HTML mismatch.
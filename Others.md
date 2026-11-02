# 1. What is a CMS?

CMS (Content Management System) is software that lets users create, edit, organize, and publish website content without needing to write code for every change.

Examples:
- WordPress
- Shopify
- Drupal
- Wix

“A CMS is a platform that allows users to manage website content through an interface instead of directly editing code.”

# 2. Why use a CMS?

A CMS helps:
- Non-technical users manage content.
- Teams collaborate on publishing.
- Reuse page layouts and templates.
- Manage media and pages.
- Update content quickly.

“A CMS makes content management easier and faster. It allows content editors to update pages, images, and articles without depending on developers for every small change.”


# 3. WordPress themes vs plugins

- Themes	                                
Control website appearance and layout	
Colors, typography, templates	
Usually one active theme	
-  Plugins
Add features and functionality
Forms, SEO, security, backups
Multiple plugins can be active

Theme: controls the website’s overall design.
Plugin: adds a contact form or SEO tools.

“A WordPress theme controls the website’s presentation, while plugins add or extend functionality.”

# 4. What is a WordPress page builder?

A page builder is a visual editor that lets users create page layouts using a drag-and-drop interface.

Examples:
- Elementor
- Beaver Builder
- Divi Builder
- Gutenberg block editor

A page builder may offer sections, columns, text blocks, images, buttons, and styling controls.

“A page builder lets users visually design website pages without writing all the HTML and CSS manually. It helps build and edit layouts through reusable blocks or widgets.”

# 5. How do you create and manage website pages?

In WordPress:
1. Open the WordPress Dashboard.
2. Go to Pages → Add New Page.
3. Add the page title and content.
4. Use blocks or a page builder to create the layout.
5. Preview the page.
6. Publish or schedule it.
7. Edit it later through the Pages section.
For navigation, add the page to the site’s menu or navigation block.

# . What is a custom post type?

A Custom Post Type (CPT) lets WordPress manage a type of content beyond its default posts and pages.

Examples:
- Projects
- Testimonials
- Events
- Products
- Team members

For example, a portfolio website could have a “Projects” post type with fields for project name, image, technology, and URL.


# 7. WordPress vs custom React website
- WordPress
CMS included
Good for content-heavy sites
Editors can manage content through dashboard
Themes and plugins speed up development
Plugin maintenance can add complexity

- Custom React website
Content management needs to be built or connected
Good for highly interactive custom UI
Developers may need to build an editing workflow
More control over architecture and UI
Requires custom maintenance and infrastructure



# 8. How do you improve WordPress website performance?

Compress and resize images.
Use a caching plugin or server-side caching.
Use a CDN when appropriate.
Remove unused plugins and themes.
Choose reliable hosting.
Reduce unnecessary scripts and page-builder widgets.
Use optimized fonts and assets.
Keep WordPress, themes, and plugins updated.
Test with Lighthouse or PageSpeed Insights.

“I optimize images, enable caching, remove unnecessary plugins, reduce heavy scripts, use good hosting, and measure performance with Lighthouse or PageSpeed Insights.”

# 9. How do you manage content without changing code?

Use the WordPress dashboard:
- Pages for static content.
- Posts for blog articles.
- Media Library for images and files.
- Menus or navigation blocks for site navigation.
- Page builders or the block editor for page layouts.
- Custom post types for structured content.


Website Deployment and Performance
# 10. What is deployment?
Deployment means making a website or application available in an environment where users can access it.

Typical process:
1. Develop and test locally.
2. Build the application.
3. Upload or deploy it to a hosting platform.
4. Configure environment variables and domain.
5. Verify that the live website works.

“Deployment is the process of making an application available to users by building it and publishing it to a hosting environment.”

# 11. Development vs production build
Development	                            Production
Used while building and debugging	    Used by real users
Helpful error messages	                Optimized output
Often includes debugging tools	        Minified and optimized assets
Usually runs locally	                Runs on a production server or platform


For a React or Next.js project:
npm run dev


Runs the development server.
npm run build
Creates a production build.


# 12. What is Vercel?

Vercel is a cloud platform for deploying websites and frontend applications, especially React and Next.js projects.

Common features:
- GitHub integration
- Automatic deployments
- Preview deployments for branches and pull requests
- Environment variable configuration
- Custom domains
- CDN-based delivery

“Vercel is a deployment platform that simplifies hosting frontend applications. I can connect a Git repository and deploy automatically when I push changes.”


# 13. What is hosting?

Hosting is a service that stores or runs a website’s files and makes them available over the internet.

Types include:
- Shared hosting
- VPS hosting
- Cloud hosting
- Static hosting
- Managed WordPress hosting

“Hosting provides the infrastructure needed to make a website accessible online. Depending on the application, it may serve static files or run a backend server.”

# 14. What is a domain?
A domain name is the human-readable address used to access a website.

www.example.com
DNS connects the domain name to the appropriate server or hosting service.

“A domain is the readable address of a website. DNS translates that domain into the information needed to reach its hosting infrastructure.”

# 15. What are environment variables?

Environment variables store configuration values outside the source code.

Examples:
- API URLs
- Database connection strings
- API keys
- Authentication secrets

“Environment variables store configuration separately from application code. They help manage different environments and protect secrets, provided private values are not exposed to the browser.”

# 16. What is a CDN?
A Content Delivery Network (CDN) is a network of servers distributed across different locations. It delivers content from a server closer to the user.

CDNs commonly serve:
- Images
- CSS
- JavaScript
- Fonts
- Other static assets
“A CDN distributes content through geographically distributed servers. It can reduce latency and improve loading speed by serving content closer to users.”


# 17. Image optimization
Image optimization reduces image file size while maintaining acceptable visual quality.

Techniques:
- Resize images to the required dimensions.
- Use modern formats such as WebP or AVIF when suitable.
- Compress images.
- Use responsive image sizes.
- Provide width and height to reduce layout shifts.
- Lazy-load images that are below the fold.

```html
<img
  src="/images/team.webp"
  alt="Our development team"
  width="800"
  height="500"
/>
```
# 18. What is lazy loading?

Lazy loading delays loading resources until they are needed, often when they approach the visible area of the page.
```html
<img
  src="/images/gallery.webp"
  alt="Website gallery"
  loading="lazy"
/>
```
Useful for:
- Below-the-fold images
- Long image galleries
- Content that users may never scroll to
Avoid lazy-loading the main hero image if it is immediately visible. That can delay the page’s main content.

“Lazy loading delays loading offscreen resources until they are needed. It can reduce initial page loading work, especially on pages with many images.”


# 19. What is code splitting?
Code splitting divides JavaScript into smaller bundles so the browser does not need to download all application code immediately.
```js
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

export default function App() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

The Dashboard component can be loaded when needed.

“Code splitting divides an application’s JavaScript into smaller chunks. It can reduce the amount of code loaded initially and improve startup performance.”


# 20. Browser caching
Browser caching stores resources locally so they can be reused on later visits.

Common cached resources:
- Images
- CSS files
- JavaScript files
- Fonts
Caching is controlled through HTTP headers such as:
Cache-Control: max-age=3600


This allows a response to be cached for 3600 seconds, subject to the caching rules.

For versioned static assets, longer cache durations can be used safely when the filename changes with the content.

“Browser caching stores resources locally to avoid downloading them repeatedly. Correct cache headers can reduce network requests and improve repeat visits.”


# 21. Lighthouse performance metrics

Lighthouse is a tool that audits a website’s performance, accessibility, SEO, and best practices.

It reports metrics such as:
- FCP: Time until the first content is rendered.
- LCP: Time until the main content appears.
- CLS: Unexpected layout movement.
- TBT: Total time the main thread is blocked during the measured load.
- Speed Index: How quickly visible content appears.

“Lighthouse audits performance and other website quality areas. I use it to identify issues such as large images, render-blocking resources, JavaScript execution, and layout shifts.”


# 22. How do you troubleshoot a failed deployment?


I would check the issue step by step:
1. Read the deployment build logs.
2. Check whether dependencies install correctly.
3. Run the production build locally.
4. Look for TypeScript, lint, or compilation errors.
5. Verify environment variables.
6. Check the build command and output directory.
7. Inspect API URLs and configuration.
8. Check browser console and network errors after deployment.
Example:
npm install
npm run build


If the build fails locally, fix that issue before redeploying.

“I start with the deployment logs to identify the build error. Then I reproduce it locally, check dependencies and environment variables, fix the issue, and redeploy.”


# 23. How do you debug using Chrome DevTools?

Chrome DevTools helps inspect and debug websites.

Tool	            Use
Elements	        Inspect HTML and CSS
Console	            Find JavaScript errors and warnings
Network	            Inspect requests, API responses, and failed assets
Sources	            Debug JavaScript with breakpoints
Performance	        Analyze rendering and runtime performance
Lighthouse	        Audit performance, SEO, and accessibility

Example debugging workflow for an API issue:
1. Open DevTools.
2. Go to the Network tab.
3. Reload the page.
4. Select the failed request.
5. Check the status code, request URL, and response.
6. Check the Console for related errors.

“I use the Elements panel for layout issues, Console for JavaScript errors, Network for API and asset failures, and Sources for breakpoints. For performance, I use the Performance panel and Lighthouse.”
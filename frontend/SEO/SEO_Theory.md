# 1. What is SEO?

SEO (Search Engine Optimization) is the process of improving a website’s visibility in organic, unpaid search results.

Main goals:
- Help search engines understand the page.
- Make useful content easy for users to find.
- Improve website usability and performance.
- Increase relevant organic traffic.

“SEO is the process of optimizing a website to improve its visibility in organic search results. It includes content optimization, technical improvements, performance, and user experience.”


# 2. On-page vs Off-page SEO

- On-page SEO
Work done on your website
Content and keywords
Title and meta description
Headings and internal links

- Off-page SEO
Activities outside your website
Backlinks from other websites
Brand mentions
Online reputation

“On-page SEO improves elements within a website, such as content, headings, and metadata. Off-page SEO builds the website’s authority through external signals such as relevant, trustworthy backlinks.”


# 3. Technical SEO
Technical SEO helps search engines crawl, render, and index a website correctly.

Common tasks:
- Fix broken links and redirect issues.
- Create an XML sitemap.
- Configure robots.txt.
- Use canonical URLs.
- Improve page speed and Core Web Vitals.
- Ensure mobile usability.
- Avoid accidental noindex directives.


“Technical SEO focuses on the technical structure of a website so search engines can crawl, render, and index its pages efficiently.”


# 4. Title tags and meta descriptions

The title tag is the page title that can appear in search results and browser tabs.

The meta description is a short summary that may appear under the title in search results.

```html
<head>
  <title>Premium Website Templates | WebNest</title>

  <meta
    name="description"
    content="Explore premium, responsive website templates for modern businesses."
  />
</head>
```

- Give each page a unique, descriptive title.
- Write a useful and relevant description.
- Avoid keyword stuffing.
- Match the page’s actual content.
Meta descriptions can influence clicks, but they are not a direct ranking factor in the same way as page relevance.

“The title tag describes the page and is an important SEO element. The meta description summarizes the page and can help users decide whether to click the result.

# 5. Heading hierarchy

HTML headings organize content from most important to less important.
Use headings in a logical order.
Use one clear main page heading (h1) in most cases.
Use h2 for major sections and h3 for subsections.
Don’t choose heading tags just to make text look bigger. CSS exists for that.
“Heading hierarchy organizes content for users and search engines. I use headings logically to communicate the structure of the page.”

# 6. Semantic HTML
Semantic HTML uses elements that describe their purpose.
Examples:
- <header>: introductory content
- <nav>: navigation links
- <main>: main page content
- <article>: self-contained content
- <section>: related content group
- <footer>: footer information

“Semantic HTML gives meaning to page structure. It helps browsers, assistive technologies, and search engines understand the content more clearly.”


# 7. Image alt text

The alt attribute describes an image for users who cannot see it and for cases where the image fails to load.
```html
<img
  src="website-design.jpg"
  alt="Responsive website displayed on a laptop"
/>
```
Best practices:
- Describe the image accurately.
- Include relevant context when useful.
- Don’t stuff keywords.
- Use alt="" for purely decorative images.

“Alt text describes an image for screen readers and provides a text alternative if the image cannot load. It also helps search engines understand image content.”


# 8. Internal linking

Internal links connect one page of a website to another page on the same website.

```html
<a href="/services">Explore our services</a>
```

Benefits:
- Helps users navigate.
- Helps search engines discover pages.
- Communicates relationships between pages.
- Can distribute link value across the website.

“Internal linking connects related pages within a website. It improves navigation and helps search engines discover and understand the site’s structure.”

# 9. Canonical URLs

A canonical URL tells search engines which URL is the preferred version when similar or duplicate pages exist.

```html
<link
  rel="canonical"
  href="https://example.com/products/shoes"
/>
```

“A canonical URL identifies the preferred version of a page when duplicate or similar URLs exist. It helps reduce duplicate-content confusion.”


# 10. XML sitemap

An XML sitemap lists important URLs that a website wants search engines to discover.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
  </url>
  <url>
    <loc>https://example.com/about</loc>
  </url>
</urlset>
```

A sitemap can help search engines discover pages, especially on large or frequently updated websites. It does not guarantee indexing.


“An XML sitemap lists important website URLs to help search engines discover them. It is especially useful for large websites or sites with pages that are difficult to discover through links.”


# 11. robots.txt

“robots.txt gives crawlers instructions about which paths they may crawl. It is not a reliable way to prevent a URL from being indexed.”

The robots.txt file gives crawling instructions to compatible search engine bots.

Example:
User-agent: *
Disallow: /admin/

Sitemap: https://example.com/sitemap.xml


This tells bots not to crawl /admin/.

Important distinction:
- robots.txt controls crawling.
- noindex tells search engines not to index a page, when they can crawl and read that directive.
Blocking a page in robots.txt does not necessarily remove it from search results.



# 12. Mobile-friendly websites

A mobile-friendly website works well on smaller screens and touch devices.

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1"
/>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

Use responsive layouts.
Make text readable.
Avoid horizontal scrolling.
Make buttons easy to tap.
Ensure mobile content is equivalent to desktop content.


“Mobile-friendly design makes a website usable across screen sizes. It matters for user experience and SEO because Google primarily uses the mobile version of a site for indexing.”


# 13. Core Web Vitals
Core Web Vitals measure important aspects of real-world user experience.
Metric	    Measures	                Good target
LCP	        Loading performance	        ≤ 2.5 seconds
INP	        Interaction responsiveness	≤ 200 milliseconds
CLS	        Visual stability	        ≤ 0.1

- LCP: How quickly the main content appears.
- INP: How quickly the page responds to user interactions.
- CLS: How much the page layout unexpectedly shifts.
These targets are measured at the 75th percentile of page visits, separately for mobile and desktop.

“Core Web Vitals are user-experience metrics covering loading, responsiveness, and visual stability. The main metrics are LCP, INP, and CLS.”


# 14. Page speed optimization

A faster website improves user experience and can support SEO.

Common techniques:
- Optimize and compress images.
- Use responsive image sizes.
- Reduce unnecessary JavaScript.
- Lazy-load offscreen images.
- Cache static assets.
- Minify and compress resources.
- Avoid layout shifts by setting image dimensions.
- Use a CDN when appropriate.

```html
<img
  src="team.jpg"
  alt="Our development team"
  width="800"
  height="500"
  loading="lazy"
/>
```

# 15. Structured data and schema markup

Structured data is machine-readable information that describes page content. A common format is JSON-LD, which can help search engines understand entities and content.

```js
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WebNest",
  "url": "https://example.com"
}
</script>
```

Structured data can make a page eligible for certain rich search results, depending on the schema type and search engine requirements. It does not guarantee rich results or higher rankings.

“Structured data uses formats such as JSON-LD to describe content in a machine-readable way. It helps search engines understand the page and may enable eligible rich results.”

# 16. SSR and SEO

SSR (Server-Side Rendering) generates HTML on the server for a request.

Why it can help SEO:
- Search engines can receive meaningful HTML content.
- Content may be easier to discover without relying entirely on client-side JavaScript.
- Dynamic metadata can be generated for individual pages.
But SSR alone does not guarantee SEO success. Content quality, crawlability, metadata, performance, and indexing rules still matter.

In Next.js, a server-rendered page might look like:
```js
export default async function ProductsPage() {
  const response = await fetch("https://api.example.com/products");
  const products = await response.json();

  return (
    <main>
      <h1>Products</h1>

      {products.map(product => (
        <article key={product.id}>
          <h2>{product.name}</h2>
        </article>
      ))}
    </main>
  );
}
```

“SSR sends HTML generated on the server, which can make page content easier for search engines to discover. It is useful for dynamic pages, but SEO still depends on content and correct technical setup.”

# 17. Accessibility and SEO

Accessibility makes websites usable by people with different abilities, including people who use screen readers or keyboard navigation.

```html
<label for="email">Email address</label>
<input id="email" type="email" />

<button type="button">Submit</button>
```


Useful practices:
- Use semantic HTML.
- Provide meaningful alt text.
- Associate form labels with inputs.
- Support keyboard navigation.
- Maintain sufficient color contrast.
- Use descriptive link text.
- Provide visible focus indicators.

Accessibility and SEO overlap because both benefit from clear structure, descriptive content, and usable navigation. Accessibility is important in its own right, even when a particular technique does not directly affect rankings.



“Accessibility helps people use a website with different abilities and assistive technologies. Semantic HTML, clear headings, descriptive links, and accessible forms can also help search engines understand page content.”

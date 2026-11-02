# 1.What is HTML and how does the browser render it?

HTML stands for HyperText Markup Language. It is used to create the structure of a webpage.
```html
<h1>Hello World</h1>
<p>This is my website.</p>
```
The browser reads HTML, converts it into the DOM (Document Object Model), and displays the webpage.

# 2.Semantic vs non-semantic elements.

Semantic elements clearly describe their meaning to the browser and developers.

```html
<header></header>
<nav></nav>
<main></main>
<footer></footer>
```

Non-semantic elements do not describe the meaning of their content.

```html
<div></div>
<span></span>
```

Semantic HTML improves code readability, accessibility, and SEO because it gives meaning to webpage content.

# 3.HTML5 features.

HTML5 introduced several features that make web development easier.

mportant features:

- Semantic elements like header, footer, and article.

- Audio and video support.

- Canvas for drawing graphics.

- Improved form input types.

- Local storage and session storage APIs.

- Better support for modern web applications.

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

# 4. What are HTML forms and input types?

HTML forms collect information from users, such as login details or contact

```html
<form>
  <input type="text" placeholder="Enter name">
  <input type="email" placeholder="Enter email">
  <input type="password" placeholder="Enter password">
  <button type="submit">Submit</button>
</form>
```

Type	            Purpose
text	            Enter text
email	            Enter email
password	        Enter password
number	            Enter numbers
checkbox	        Select multiple options
radio	            Select one option
date	            Select a date
file	            Upload a file
submit	            Submit a form


# 5. Difference between id and class

Both are used to identify HTML elements.
```html
<p id="heading">Hello</p>

<p class="text">First paragraph</p>
<p class="text">Second paragraph</p>
```

ID	                            Class
Should be unique on a page	    Can be reused
Selected using # in CSS	        Selected using . in CSS
Used for a specific element	    Used for multiple elements

```css
#heading {
  color: red;
}

.text {
  color: blue;
}
```

# 6. Difference between block and inline elements

Block elements usually start on a new line and take the available width.

Examples: div, p, h1, section.

Inline elements stay within the same line and take only the space they need.

Examples: span, a, strong.
```html
<p>This is a block element.</p>

<span>Hello</span>
<span>World</span>
```
The two spans appear on the same line.

# 7. What is accessibility and what are ARIA attributes?

Accessibility means making websites usable by everyone, including people with disabilities.

Examples:
- Use semantic HTML.
- Provide labels for form inputs.
- Add alternative text to images.
- Ensure keyboard navigation works.
- Maintain readable color contrast.

ARIA stands for Accessible Rich Internet Applications. ARIA attributes provide additional information to assistive technologies.

```html
<button aria-label="Close menu">
  X
</button>
```

Accessibility makes websites usable by more people. ARIA attributes help screen readers understand elements when standard HTML alone is insufficient.

# 8. What is the alt attribute?

The alt attribute provides alternative text for an image.

```html
<img
  src="profile.jpg"
  alt="Developer working on a laptop"
/>

SEO-friendly HTML structure.

It helps:
- Screen readers describe images.
- Users understand images if they fail to load.
- Search engines understand image content.

For decorative images, an empty alt attribute is usually appropriate:

```html
<img src="decoration.png" alt="">
```

# 9. What is SEO-friendly HTML structure?

SEO-friendly HTML helps search engines understand the content and structure of a webpage.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Best Web Development Services</title>
  <meta
    name="description"
    content="Professional website development services."
  >
</head>

<body>
  <header>
    <nav>Navigation</nav>
  </header>

  <main>
    <h1>Web Development Services</h1>
    <p>We build responsive websites.</p>
  </main>

  <footer>Copyright 2026</footer>
</body>
</html>
```

Important practices:
- Use semantic HTML.
- Use a meaningful title and meta description.
- Maintain a logical heading hierarchy.
- Add descriptive image alt text.
- Use meaningful links.
- Make the website mobile-friendly.


# 10. What are meta tags and viewport configuration?

Meta tags provide information about a webpage to browsers and search engines.
```html
<meta charset="UTF-8">

<meta
  name="description"
  content="A website for web development services."
>

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>
```
The viewport meta tag tells the browser to match the page width to the device width.
It is important for responsive design.

Without it, mobile browsers may display the page as if it were a wider desktop page.


# 11. Difference between div, section, and article

Element     	Purpose
div	            Generic container without semantic meaning
section	        Groups related content into a section
article	        Contains independent, self-contained content

```html
<div class="container">

  <section>
    <h2>Our Services</h2>
    <p>We build websites.</p>
  </section>

  <article>
    <h2>Blog Post</h2>
    <p>This is an independent blog article.</p>
  </article>

</div>
```

Use div for general grouping, section for related content, and article for content that can stand independently.


# 12. Difference between button and a

The button element is used to perform an action.

The a (anchor) element is used to navigate to another page or location.
```html
<button type="button">
  Open Menu
</button>

<a href="/about">
  About Us
</a>
```

Button	                    Anchor
Performs an action	        Navigates somewhere
Uses button             	Uses a
Can trigger JavaScript	    Uses href for navigation
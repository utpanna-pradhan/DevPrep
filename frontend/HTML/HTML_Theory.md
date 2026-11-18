# 1. What is HTML and how does the browser render it?

HTML stands for HyperText Markup Language. It is used to create the structure of a webpage.

```html
<h1>Hello World</h1>
<p>This is my website.</p>
```

The browser reads HTML, converts it into the DOM (Document Object Model), and displays the webpage.

---

# 2. Semantic vs non-semantic elements

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

---

# 3. HTML5 features

HTML5 introduced several features that make web development easier.

Important features:
- Semantic elements like `header`, `footer`, and `article`.
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

---

# 4. What are HTML forms and input types?

HTML forms collect information from users, such as login details or contact forms.

```html
<form>
  <input type="text" placeholder="Enter name">
  <input type="email" placeholder="Enter email">
  <input type="password" placeholder="Enter password">
  <button type="submit">Submit</button>
</form>
```

| Type | Purpose |
| :--- | :--- |
| `text` | Enter text |
| `email` | Enter email |
| `password` | Enter password |
| `number` | Enter numbers |
| `checkbox` | Select multiple options |
| `radio` | Select one option |
| `date` | Select a date |
| `file` | Upload a file |
| `submit` | Submit a form |

---

# 5. Difference between id and class

Both are used to identify HTML elements.

```html
<p id="heading">Hello</p>

<p class="text">First paragraph</p>
<p class="text">Second paragraph</p>
```

| ID | Class |
| :--- | :--- |
| Should be unique on a page | Can be reused |
| Selected using `#` in CSS | Selected using `.` in CSS |
| Used for a specific element | Used for multiple elements |

```css
#heading {
  color: red;
}

.text {
  color: blue;
}
```

---

# 6. Difference between block and inline elements

Block elements usually start on a new line and take the available width.
- **Examples:** `div`, `p`, `h1`, `section`.

Inline elements stay within the same line and take only the space they need.
- **Examples:** `span`, `a`, `strong`.

```html
<p>This is a block element.</p>

<span>Hello</span>
<span>World</span>
```
*(The two spans appear on the same line.)*

---

# 7. What is accessibility and what are ARIA attributes?

Accessibility means making websites usable by everyone, including people with disabilities.

Examples:
- Use semantic HTML.
- Provide labels for form inputs.
- Add alternative text to images.
- Ensure keyboard navigation works.
- Maintain readable color contrast.

ARIA stands for **Accessible Rich Internet Applications**. ARIA attributes provide additional information to assistive technologies.

```html
<button aria-label="Close menu">
  X
</button>
```

Accessibility makes websites usable by more people. ARIA attributes help screen readers understand elements when standard HTML alone is insufficient.

---

# 8. What is the alt attribute?

The `alt` attribute provides alternative text for an image.

```html
<img
  src="profile.jpg"
  alt="Developer working on a laptop"
>
```

It helps:
- Screen readers describe images.
- Users understand images if they fail to load.
- Search engines understand image content.

For decorative images, an empty alt attribute is usually appropriate:

```html
<img src="decoration.png" alt="">
```

---

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

---

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

The viewport meta tag tells the browser to match the page width to the device width. It is important for responsive design. Without it, mobile browsers may display the page as if it were a wider desktop page.

---

# 11. Difference between div, section, and article

| Element | Purpose |
| :--- | :--- |
| `div` | Generic container without semantic meaning |
| `section` | Groups related content into a section |
| `article` | Contains independent, self-contained content |

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

Use `div` for general grouping, `section` for related content, and `article` for content that can stand independently.

---

# 12. Difference between button and a

The `button` element is used to perform an action. The `a` (anchor) element is used to navigate to another page or location.

```html
<button type="button">
  Open Menu
</button>

<a href="/about">
  About Us
</a>
```

| Button | Anchor |
| :--- | :--- |
| Performs an action | Navigates somewhere |
| Uses `button` tag | Uses `a` tag |
| Can trigger JavaScript | Uses `href` for navigation |

---

# 13. What is the difference between HTML and HTML5?

HTML is a markup language used to structure web pages. HTML5 is a modern version of HTML that introduced new semantic elements, multimedia support, and improved form features.

Important HTML5 features:
- Semantic elements like `<header>`, `<footer>`, and `<article>`.
- Native audio and video support.
- New input types like `email`, `date`, and `number`.
- Canvas for drawing graphics.
- Web storage APIs like `localStorage` and `sessionStorage`.

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

HTML5 introduced modern features that make websites more semantic, interactive, and capable of handling multimedia without relying on external plugins.

---

# 14. What is the difference between HTML attributes and properties?

Attributes are written in HTML to provide information about an element. Properties are values stored on the DOM object in JavaScript.

```html
<input id="username" value="John">
```

```javascript
const input = document.getElementById("username");

console.log(input.getAttribute("value"));
console.log(input.value);
```

Initially, both may return `"John"`. But if the user changes the input value:
- `getAttribute("value")` returns the original HTML attribute value.
- `input.value` returns the current input value.

**Interview Answer:** HTML attributes define the initial configuration of an element, while DOM properties represent its current state and behavior.

---

# 15. What is the difference between required, readonly, and disabled?

These attributes control how users interact with form elements.

| Attribute | Meaning |
| :--- | :--- |
| `required` | User must provide a value |
| `readonly` | User cannot edit the value |
| `disabled` | User cannot interact with the element |

```html
<input type="text" required>

<input type="text" value="John" readonly>

<input type="text" value="John" disabled>
```

Important interview points:
- Readonly inputs can still be submitted with the form.
- Disabled inputs are not submitted with the form.
- Required inputs must have a valid value before submission.

Required enforces input validation, readonly prevents editing while allowing submission, and disabled prevents interaction and excludes the field from form submission.

---

# 16. What is the difference between GET and POST in HTML forms?

GET and POST are HTTP methods used to send form data to a server.

| GET | POST |
| :--- | :--- |
| Sends data through the URL | Sends data in the request body |
| Used to retrieve data | Used to submit or modify data |
| Can be bookmarked | Cannot generally be bookmarked with the submitted data |
| Suitable for searches | Suitable for login or registration forms |

```html
<!-- GET Example -->
<form action="/search" method="GET">
  <input name="query">
  <button type="submit">Search</button>
</form>

<!-- POST Example -->
<form action="/register" method="POST">
  <input name="username">
  <button type="submit">Register</button>
</form>
```

GET is mainly used to retrieve data, while POST sends data in the request body to create or process information on the server.

*Important: POST does not automatically make data secure. HTTPS is required to protect data in transit.*

---

# 17. What is the difference between localStorage, sessionStorage, and cookies?

These are browser storage mechanisms used to store information.

| Feature | `localStorage` | `sessionStorage` | `Cookies` |
| :--- | :--- | :--- | :--- |
| **Lifetime** | Until removed | Until tab session ends | Configurable |
| **Storage** | Browser | Browser tab session | Browser |
| **Sent to server automatically** | No | No | Yes, when applicable |
| **Typical use** | Preferences | Temporary session data | Session identifiers |

```javascript
// localStorage
localStorage.setItem("theme", "dark");

// sessionStorage
sessionStorage.setItem("name", "John");

// Read data
console.log(localStorage.getItem("theme"));
```

**Interview Answer:** `localStorage` stores data persistently, `sessionStorage` stores data for a tab session, and cookies can store small pieces of data that are automatically sent with matching HTTP requests.

---

# 18. What is the difference between absolute and relative URLs?

An absolute URL contains the complete address of a resource. A relative URL refers to a resource based on the current page or document location.

```html
<!-- Absolute URL -->
<a href="[https://example.com/about](https://example.com/about)">About</a>

<!-- Relative URL -->
<a href="/about">About</a>

<!-- Relative file path -->
<img src="./images/profile.jpg" alt="Profile">
```

**Interview Answer:** Absolute URLs include the full address, while relative URLs depend on the current website or document location.

---

# 19. What is the difference between defer and async in script tags?

Both attributes allow JavaScript files to download without blocking HTML parsing, but they execute differently.

### `defer`
- Downloads JavaScript while HTML is being parsed.
- Executes after HTML parsing is complete.
- Maintains script order.
- Runs before the `DOMContentLoaded` event.

### `async`
- Downloads JavaScript while HTML is being parsed.
- Executes immediately when the file finishes downloading.
- Does not guarantee script order.

```html
<script src="app.js" defer></script>
<script src="analytics.js" async></script>
```

**Interview Answer:** Defer executes scripts after HTML parsing and preserves order. Async executes scripts as soon as they are downloaded, without guaranteeing order. Use `defer` for scripts that depend on the DOM or on other scripts, and `async` for independent scripts.

---

# 20. What is the difference between DOM and BOM?

### DOM (Document Object Model)
The DOM represents the HTML document as a tree of objects. It allows JavaScript to access and modify webpage content.

```javascript
document.querySelector("h1").textContent = "Hello";
```

### BOM (Browser Object Model)
The BOM provides access to browser-related features.

```javascript
window.alert("Hello");
console.log(window.location.href);
console.log(window.history);
```

| DOM | BOM |
| :--- | :--- |
| Represents webpage content | Represents browser environment |
| Uses `document` | Uses `window` |
| Modifies HTML elements | Accesses browser features |

**Interview Answer:** DOM allows JavaScript to interact with webpage content, while BOM allows JavaScript to interact with browser features such as location, history, and alerts.

---

# 21. What is the difference between iframe and embed?

Both are used to display external content inside a webpage.

### `iframe`
An iframe embeds another HTML page inside the current page.

```html
<iframe
  src="[https://example.com](https://example.com)"
  title="Example website"
  width="500"
  height="300">
</iframe>
```

### `embed`
The embed element is commonly used to embed external resources such as PDFs.

```html
<embed
  src="document.pdf"
  type="application/pdf"
  width="500"
  height="300">
```

**Interview Answer:** An iframe embeds another webpage or browsing context, while embed is used to embed external content such as PDFs or other supported resources. *(Note: Some websites block iframe embedding using security headers.)*

---

# 22. What is the difference between SVG and Canvas?

Both are used to create graphics on a webpage.

### SVG (Scalable Vector Graphics)
It uses XML-based markup and represents graphics as individual elements.

```html
<svg width="100" height="100">
  <circle
    cx="50"
    cy="50"
    r="40"
    fill="blue">
  </circle>
</svg>
```

### Canvas
Canvas provides a drawing area where graphics are created using JavaScript.

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 50);
```

| SVG | Canvas |
| :--- | :--- |
| Vector-based | Pixel-based |
| Elements can be accessed individually | Drawings are not separate DOM elements |
| Good for icons and diagrams | Good for games and complex animations |

**Interview Answer:** SVG is a vector-based graphics format where elements remain individually accessible, while Canvas is a pixel-based drawing surface controlled through JavaScript.

---

# 23. What are HTML tables?

HTML tables display structured data in rows and columns.

Important elements:
- `<table>`: Creates the table.
- `<tr>`: Creates a row.
- `<th>`: Creates a header cell.
- `<td>`: Creates a data cell.
- `<thead>`: Groups header rows.
- `<tbody>`: Groups body rows.

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

**Interview Answer:** HTML tables organize tabular data using rows and columns. They should be used for data, not for webpage layouts.

---

# 24. What is HTML form validation?

HTML form validation checks whether user input meets specific requirements before submission.

```html
<form>
  <input type="email" required>
  <input type="password" minlength="8" required>
  <button type="submit">Submit</button>
</form>
```

Here:
- `required` makes the field mandatory.
- `type="email"` checks the email format.
- `minlength="8"` requires at least 8 characters.

**Interview Answer:** HTML provides built-in validation attributes that help validate user input without writing JavaScript. Server-side validation is still necessary for security.

---

# 25. What are the min, max, and step attributes?

These attributes control the valid range and increments of numeric inputs.

```html
<input
  type="number"
  min="1"
  max="100"
  step="5">
```

This input accepts values such as 5, 10, 15, and so on, within the specified range.

**Interview Answer:** Min defines the minimum value, max defines the maximum value, and step defines the allowed increments.

---

# 26. What is the data-* attribute?

The `data-*` attribute stores custom information on HTML elements.

```html
<button data-user-id="101">
  View User
</button>
```

JavaScript can access it via the `dataset` property:

```javascript
const button = document.querySelector("button");
console.log(button.dataset.userId); // Output: 101
```

**Interview Answer:** The data attribute allows developers to store custom data on HTML elements and access it through JavaScript using the dataset property.

---

# 27. What are HTML entities?

HTML entities represent special characters that have meaning in HTML or cannot be easily typed.

| Entity | Character |
| :--- | :--- |
| `&lt;` | `<` |
| `&gt;` | `>` |
| `&amp;` | `&` |
| `&nbsp;` | Non-breaking space |
| `&copy;` | `©` |

```html
<p>5 &lt; 10</p>
<!-- Output: 5 < 10 -->
```

**Interview Answer:** HTML entities are used to display reserved characters and special symbols safely in HTML.

---

# 28. What is the difference between img and picture?

The `img` element displays an image. The `picture` element allows the browser to choose between different image sources based on conditions such as screen size or image format.

```html
<picture>
  <source
    media="(max-width: 600px)"
    srcset="mobile.jpg">

  <img
    src="desktop.jpg"
    alt="Mountain landscape">
</picture>
```

**Interview Answer:** Img displays an image, while picture provides multiple image sources so the browser can select the most appropriate one.

---

# 29. What are srcset and sizes?

These attributes help browsers select the appropriate image for different screen sizes and resolutions.

```html
<img
  src="small.jpg"
  srcset="small.jpg 480w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 1200px"
  alt="Landscape">
```

- `srcset` provides different image options.
- `sizes` tells the browser how much space the image is expected to occupy.

**Interview Answer:** Srcset provides multiple image sources, while sizes helps the browser choose the best image based on the expected display size.

---

# 30. What is lazy loading in HTML?

Lazy loading delays loading resources until they are needed.

```html
<img
  src="image.jpg"
  alt="Product"
  loading="lazy">
```

This is useful for images below the initial visible area of a webpage.

**Interview Answer:** Lazy loading improves initial page performance by delaying the loading of off-screen images until they are closer to being displayed.

---

# 31. What is the difference between audio and video elements?

HTML provides native elements to embed media.

### Audio:
```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
</audio>
```

### Video:
```html
<video controls width="500">
  <source src="video.mp4" type="video/mp4">
</video>
```

**Interview Answer:** The audio element embeds sound, while the video element embeds video content. Both support native browser playback controls.

---

# 32. What is the purpose of the source element?

The `source` element provides alternative media resources for elements such as audio, video, and picture.

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
</video>
```

The browser automatically selects a supported source.

**Interview Answer:** The source element allows developers to provide multiple media formats or image sources so the browser can select a suitable resource.

---

# 33. What is the purpose of the DOCTYPE declaration?

The DOCTYPE declaration tells the browser which document standard to use.

```html
<!DOCTYPE html>
```

It tells the browser to render the page in standards mode instead of quirks mode.

**Interview Answer:** DOCTYPE declares the document type and helps the browser render the page using standards mode instead of quirks mode.

---

# 34. What is the lang attribute?

The `lang` attribute specifies the language of the webpage.

```html
<html lang="en">
```

It helps screen readers, search engines, and browsers understand the language context.

**Interview Answer:** The lang attribute identifies the language of the document, improving accessibility and helping search engines interpret content.

---

# 35. What is the difference between head and body?

- The `head` contains metadata and resources used by the browser.
- The `body` contains the visible webpage content.

```html
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

**Interview Answer:** Head contains document metadata, while body contains the content displayed on the webpage.

---

# 36. What is the difference between absolute and fixed positioning in CSS?

*(While technically a CSS question, it is commonly asked alongside HTML)*

- **absolute**: Positioned relative to its nearest positioned ancestor.
- **fixed**: Positioned relative to the viewport.

```css
.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}
```

**Interview Answer:** Absolute positioning depends on a positioned ancestor, while fixed positioning stays relative to the viewport during scrolling.

---

# 37. What are ordered and unordered lists?

- Ordered lists display numbered items (`<ol>`).
- Unordered lists display bullet points (`<ul>`).

```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
</ol>

<ul>
  <li>React</li>
  <li>Next.js</li>
</ul>
```

**Interview Answer:** Ordered lists use `<ol>` for sequential items, while unordered lists use `<ul>` for items without a specific order.

---

# 38. What is the purpose of the label element?

The `label` element provides an accessible name for a form control.

```html
<label for="email">Email</label>
<input id="email" type="email">
```

Clicking the label focuses the associated input.

**Interview Answer:** Labels improve form accessibility by connecting descriptive text to input elements and making them easier to use.

---

# 39. What is the difference between placeholder and value?

- **Placeholder** provides a hint about the expected input.
- **Value** represents the actual input value.

```html
<input
  type="text"
  placeholder="Enter your name"
  value="John">
```

**Interview Answer:** Placeholder displays a hint that disappears when the user enters data, while value contains the actual input value.

---

# 40. What is the difference between strong and b?

Both can make text appear bold.
- **`<strong>`** indicates semantic importance.
- **`<b>`** draws visual attention without adding semantic importance.

```html
<strong>Important information</strong>
<b>Highlighted text</b>
```

**Interview Answer:** Strong gives semantic importance to content, while `b` is used to draw attention visually without implying importance.

---

# 41. What is the difference between em and i?

Both commonly display italic text.
- **`<em>`** indicates semantic emphasis.
- **`<i>`** represents text in an alternate voice or style.

```html
<em>This is important.</em>
<i>Scientific terminology</i>
```

**Interview Answer:** `em` adds semantic emphasis, while `i` represents text that is stylistically different from the surrounding content.

---

# 42. What is the difference between target="_blank" and target="_self"?

These attributes determine where a link opens.

```html
<a href="[https://example.com](https://example.com)" target="_blank">
  Open new tab
</a>

<a href="/about" target="_self">
  Open current tab
</a>
```

- **`_blank`**: Opens in a new browsing context, usually a new tab.
- **`_self`**: Opens in the current browsing context.

**Interview Answer:** `_blank` opens a link in a new browsing context, while `_self` opens it in the current one.

---

# 43. What is the difference between aria-label and alt?

Both provide accessible information, but they are used differently.
- **`alt`** describes an image.
- **`aria-label`** provides an accessible name for an element.

```html
<img src="profile.jpg" alt="Developer profile">

<button aria-label="Close">
  X
</button>
```

**Interview Answer:** `alt` provides alternative text for images, while `aria-label` provides an accessible name for elements that may not have a visible descriptive label.

---

# 44. What is the difference between hidden and display:none?

- The HTML **`hidden`** attribute hides an element visually while keeping its reserved space in the layout.
- CSS **`display: none`** removes the element from the document layout completely.

```html
<p hidden>This is hidden.</p>
```

```css
p {
  display: none;
}
```

Both generally remove the element from visual layout and accessibility exposure. The `hidden` attribute hides an element using HTML, while `display: none` hides it using CSS.

---

# 45. What is the difference between HTML validation and JavaScript validation?

- **HTML validation** uses built-in attributes.
- **JavaScript validation** allows custom validation logic.

```html
<!-- HTML Validation -->
<input type="email" required>
```

```javascript
// JavaScript Validation
if (!email.includes("@")) {
  console.log("Invalid email");
}
```

HTML validation handles common input rules, while JavaScript validation supports custom and more complex validation logic. Server-side validation is also necessary.

---

# 46. What is the difference between client-side and server-side rendering?

- **Client-side rendering (CSR)** generates much of the page content in the browser using JavaScript.
- **Server-side rendering (SSR)** generates HTML on the server and sends it to the browser.

Client-side rendering relies on the browser to generate content, while server-side rendering sends HTML generated by the server. SSR can improve initial content visibility and SEO when implemented correctly.

---

# 47. How does HTML improve SEO?

HTML provides structure and meaning to webpage content.

Important practices:
- Use semantic HTML.
- Add a meaningful title.
- Write a useful meta description.
- Use logical headings.
- Add descriptive image alt text.
- Use meaningful links.

Semantic HTML helps search engines understand page content and structure, while metadata, headings, and descriptive links improve how content is interpreted.

---

# 48. What is the difference between accessibility and usability?

- **Accessibility** ensures that people with disabilities can use a website.
- **Usability** focuses on how easy and efficient a website is for people to use.

Accessibility makes websites usable by people with different abilities, while usability focuses on making the experience easy and efficient for users.

---

# 49. What are common HTML performance optimization techniques?

Important techniques include:
- Use optimized images.
- Add lazy loading to off-screen images.
- Use `async` or `defer` for appropriate scripts.
- Avoid unnecessary DOM elements.
- Specify image width and height.
- Use responsive images with `srcset`.

HTML performance can be improved by optimizing images, reducing unnecessary resources, using appropriate script loading strategies, and preventing layout shifts.

---

# 50. What are the best practices for writing HTML?

Important practices:
1. Use semantic HTML elements.
2. Maintain proper nesting.
3. Use unique IDs.
4. Add alt text to meaningful images.
5. Associate labels with form controls
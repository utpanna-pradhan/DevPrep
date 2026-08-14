
# HTML Basic Coding Questions

## 1. Create a Basic HTML Page

### Code

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>

  <body>
    <h1>Hello World</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>
```

### Explanation

- `<!DOCTYPE html>` tells the browser that this is an HTML5 document.
- `<html>` is the root element of the page.
- `<head>` contains metadata and information about the page.
- `<title>` defines the browser tab title.
- `<body>` contains the visible content.
- `<h1>` creates the main heading.
- `<p>` creates a paragraph.

### Remember

```text
HTML
├── head → Information about the page
└── body → Visible page content
```

---

## 2. Create a Valid HTML5 Boilerplate

### Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>My Website</title>
  </head>

  <body>

    <h1>Welcome</h1>

  </body>
</html>
```

### Explanation

The HTML5 boilerplate is the basic structure you commonly start with when creating an HTML page.

```html
<!DOCTYPE html>
```

Tells the browser to use standards-based HTML5 rendering.

```html
<html lang="en">
```

The root element. `lang="en"` tells browsers and assistive technologies that the page is written in English.

```html
<meta charset="UTF-8">
```

Defines the character encoding.

UTF-8 allows the page to correctly represent a very large range of characters.

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0">
```

Helps the page display correctly on mobile devices.

```html
<title>My Website</title>
```

Sets the document title shown in the browser tab.

### Remember

```text
DOCTYPE
→ HTML5

html
→ Root

head
→ Metadata

body
→ Visible content

charset
→ Character encoding

viewport
→ Mobile/responsive behavior
```

---

## 3. Add Headings (`h1`–`h6`)

### Code

```html
<h1>Main Heading</h1>

<h2>Section Heading</h2>

<h3>Subsection Heading</h3>

<h4>Smaller Heading</h4>

<h5>Smaller Subheading</h5>

<h6>Smallest Heading</h6>
```

### Explanation

HTML provides six heading levels:

```text
<h1> → Highest-level heading
<h2> → Second level
<h3> → Third level
<h4> → Fourth level
<h5> → Fifth level
<h6> → Sixth level
```

The numbers represent the **heading hierarchy**, not simply font sizes.

For example:

```html
<h1>Web Development</h1>

<h2>Frontend</h2>

<h3>HTML</h3>

<h3>CSS</h3>

<h2>Backend</h2>
```

This represents:

```text
Web Development
├── Frontend
│   ├── HTML
│   └── CSS
└── Backend
```

### Important Interview Point

Do not choose headings just because you want a particular font size.

Use them according to the **meaning and structure of the content**.

CSS should control visual size:

```css
h2 {
  font-size: 40px;
}
```

### Remember

```text
h1
→ Main/top-level heading

h2
→ Major section

h3
→ Subsection

...

h6
→ Lowest heading level
```

---

## 4. Create Paragraphs

### Code

```html
<p>
  HTML is used to structure web pages.
</p>

<p>
  CSS is used to style those pages.
</p>

<p>
  JavaScript is used to add behavior and interactivity.
</p>
```

### Explanation

The `<p>` element represents a **paragraph of text**.

Each `<p>` creates a separate paragraph.

Example:

```html
<p>First paragraph.</p>

<p>Second paragraph.</p>
```

The browser normally displays them as separate blocks with spacing determined by the browser's default stylesheet.

### Important

Do not use multiple `<br>` elements just to create paragraph spacing.

Bad:

```html
This is paragraph one.<br><br><br>

This is paragraph two.
```

Better:

```html
<p>This is paragraph one.</p>

<p>This is paragraph two.</p>
```

### Remember

```text
<p>
→ Paragraph
```

---

## 5. Add Line Breaks

### Code

```html
<p>
  Hello<br>
  World
</p>
```

Output conceptually:

```text
Hello
World
```

### Explanation

`<br>` creates a **line break** within the current text content.

It is useful when the line break itself has meaning.

For example:

```html
<p>
  Utpanna Pradhan<br>
  Odisha, India
</p>
```

### Important

`<br>` is a **void element**.

It does not have a closing tag.

Correct:

```html
<br>
```

Not:

```html
<br></br>
```

### Don't Use `<br>` for Layout

Avoid doing this:

```html
<h1>Welcome</h1>
<br>
<br>
<br>
<p>Hello</p>
```

Use CSS for spacing instead:

```css
h1 {
  margin-bottom: 40px;
}
```

### Remember

```text
<br>
→ Line break

CSS
→ Layout and spacing
```

---

## 6. Add Horizontal Rules

### Code

```html
<h2>About</h2>

<p>
  Information about the website.
</p>

<hr>

<h2>Services</h2>

<p>
  Information about our services.
</p>
```

### Explanation

`<hr>` represents a **thematic break between sections of content**.

Browsers commonly display it as a horizontal line, but its meaning is more than simply "draw a line."

Example:

```text
About
───────
Services
```

The default appearance can be changed with CSS:

```css
hr {
  border: 0;
  border-top: 1px solid black;
}
```

### Important

`<hr>` is a void element.

Correct:

```html
<hr>
```

Not:

```html
<hr></hr>
```

### Remember

```text
<hr>
→ Thematic break

Not just:
→ "Draw a line"
```

---

## 7. Display Special Characters

### Code

```html
<p>
  Copyright &copy; 2026
</p>

<p>
  5 &lt; 10
</p>

<p>
  10 &gt; 5
</p>

<p>
  Tom &amp; Jerry
</p>

<p>
  &quot;Hello&quot;
</p>

<p>
  It&apos;s a website.
</p>

<p>
  Price: &dollar;100
</p>
```

### Explanation

HTML uses **character references** to represent certain characters.

Some characters have special meaning in HTML.

For example:

```html
<
```

is used to begin an HTML tag, so to display a literal `<` character, you can use:

```html
&lt;
```

### Common Character References

```text
&lt;      → <
&gt;      → >
&amp;     → &
&quot;    → "
&apos;    → '
&copy;    → ©
&nbsp;    → Non-breaking space
```

Example:

```html
<p>
  HTML &amp; CSS
</p>
```

Displays:

```text
HTML & CSS
```

### Why Not Just Type `<`?

Because HTML interprets `<` as the beginning of markup.

For example:

```html
<p>
  5 < 10
</p>
```

Using:

```html
&lt;
```

makes the intent explicit:

```html
<p>
  5 &lt; 10
</p>
```

### Remember

```text
&lt;  → <
&gt;  → >
&amp; → &
```

Think:

```text
HTML special character
→ Character reference
```

---

## 8. Use Comments

### Code

```html
<!-- This is an HTML comment -->

<h1>Welcome</h1>

<!--
  This is a
  multi-line comment.
-->

<p>Hello World</p>
```

### Explanation

An HTML comment is written using:

```html
<!-- comment -->
```

Comments are ignored when the browser renders the page.

They can be useful for:

```text
Explaining code
Leaving notes
Temporarily disabling markup
Organizing sections
```

Example:

```html
<!-- Header Section -->

<header>
  <h1>My Website</h1>
</header>

<!-- Main Content -->

<main>
  <p>Welcome to my website.</p>
</main>
```

### Important

Comments are still present in the HTML source sent to the browser.

Therefore:

```text
HTML comment
≠
Secret/private information
```

Do not put passwords, API keys, or sensitive information inside comments. Humans have spent decades putting secrets in places where everyone can inspect them.

### Remember

```text
<!--
    Comment
-->
```

---

## 9. Add Page Title

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <title>
      My Portfolio
    </title>

  </head>

  <body>

    <h1>
      Utpanna Pradhan
    </h1>

  </body>

</html>
```

### Explanation

The `<title>` element defines the **document's title**.

It belongs inside:

```html
<head>
```

Example:

```html
<head>
  <title>My Portfolio</title>
</head>
```

The title can appear in:

```text
Browser tab
Bookmarks
Browser history
Search engine results
```

### `<title>` vs `<h1>`

This is a common interview question.

```text
<title>
→ Document/browser title

<h1>
→ Main visible heading/content heading
```

Example:

```html
<head>
  <title>Frontend Developer Portfolio</title>
</head>

<body>
  <h1>Utpanna Pradhan</h1>
</body>
```

They serve different purposes.

### Important

A document should have one `<title>` element.

### Remember

```text
<title>
→ Browser/document title

<h1>
→ Main content heading
```

---

## 10. Add Favicon

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>My Portfolio</title>

    <link
      rel="icon"
      href="/favicon.ico">

  </head>

  <body>

    <h1>
      My Portfolio
    </h1>

  </body>

</html>
```

### Explanation

A favicon is the small icon associated with a website.

It can appear in places such as:

```text
Browser tab
Bookmarks
Browser history
```

The favicon is commonly added using:

```html
<link
  rel="icon"
  href="/favicon.ico">
```

### PNG Favicon

You can also use PNG:

```html
<link
  rel="icon"
  type="image/png"
  href="/favicon.png">
```

### SVG Favicon

You can also use SVG:

```html
<link
  rel="icon"
  type="image/svg+xml"
  href="/favicon.svg">
```

### Important

The favicon file must actually exist at the specified path.

For example:

```text
project/
├── index.html
└── favicon.ico
```

Then:

```html
<link
  rel="icon"
  href="/favicon.ico">
```

can reference it from the site's root.

### Remember

```text
favicon
→ Website icon

<link rel="icon">
→ Defines favicon
```

# Final Revision

```text
1. Basic HTML page
   → <html>, <head>, <body>

2. HTML5 boilerplate
   → <!DOCTYPE html> + basic metadata

3. Headings
   → <h1> to <h6>

4. Paragraph
   → <p>

5. Line break
   → <br>

6. Thematic break
   → <hr>

7. Special characters
   → Character references such as &lt; and &amp;

8. Comments
   → <!-- comment -->

9. Page title
   → <title>

10. Favicon
    → <link rel="icon">
```

# Quick Interview Memory

```text
DOCTYPE
→ HTML5

html
→ Root

head
→ Metadata

body
→ Visible content

h1-h6
→ Heading hierarchy

p
→ Paragraph

br
→ Line break

hr
→ Thematic break

&...
→ Character reference

<!-- -->
→ Comment

title
→ Browser/document title

favicon
→ Website icon
```
# HTML Basic Page Building

## 11. Create Nested Elements

### Code

```html
<div>
  <h1>My Website</h1>

  <section>
    <h2>About Me</h2>

    <p>
      I am a frontend developer.
    </p>
  </section>
</div>
```

### Explanation

**Nesting** means placing one HTML element inside another element.

Here:

```html
<div>
  <h1>My Website</h1>

  <section>
    <h2>About Me</h2>
    <p>I am a frontend developer.</p>
  </section>
</div>
```

The structure is:

```text
div
├── h1
└── section
    ├── h2
    └── p
```

The outer element is the **parent**.

The elements inside it are its **children**.

For example:

```text
<section>
    ↓
Parent

<h2>
    ↓
Child
```

### Important Rule

HTML elements must be properly nested.

Correct:

```html
<p>
  Hello <strong>World</strong>
</p>
```

Incorrect:

```html
<p>
  Hello <strong>World</p></strong>
```

The element opened first should generally be closed last.

Think of it like:

```text
Open A
  Open B
  Close B
Close A
```

### Remember

```text
Nested elements
→ Elements inside other elements

Parent
→ Contains children

Child
→ Exists inside parent
```

---

## 12. Create a Semantic Document Structure

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>My Website</title>
  </head>

  <body>

    <header>
      <h1>My Website</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>

    <main>

      <section>
        <h2>About Us</h2>
        <p>
          We build modern websites.
        </p>
      </section>

      <section>
        <h2>Our Services</h2>
        <p>
          We provide web development services.
        </p>
      </section>

    </main>

    <footer>
      <p>
        &copy; 2026 My Website
      </p>
    </footer>

  </body>

</html>
```

### Explanation

A semantic document structure uses HTML elements according to their **meaning and purpose**, rather than using `<div>` for everything.

Common semantic elements include:

```text
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

The structure above is:

```text
body
├── header
│   ├── h1
│   └── nav
│
├── main
│   ├── section
│   └── section
│
└── footer
```

### Why Use Semantic HTML?

Semantic HTML helps:

```text
Accessibility
SEO
Code readability
Maintainability
Screen readers
```

Instead of:

```html
<div class="header">
  ...
</div>

<div class="navigation">
  ...
</div>

<div class="main">
  ...
</div>
```

Prefer:

```html
<header>
  ...
</header>

<nav>
  ...
</nav>

<main>
  ...
</main>
```

### Remember

```text
Semantic HTML
→ Use elements according to their meaning
```

---

## 13. Create a Simple "About Me" Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>About Me</title>

  </head>

  <body>

    <header>
      <h1>About Me</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>

    <main>

      <section>

        <h2>Who I Am</h2>

        <p>
          My name is Utpanna Pradhan.
          I am a frontend developer interested
          in building modern web applications.
        </p>

      </section>

      <section>

        <h2>My Skills</h2>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>

      </section>

      <section>

        <h2>My Goal</h2>

        <p>
          My goal is to become a strong software engineer
          who can build reliable and scalable applications.
        </p>

      </section>

    </main>

    <footer>

      <p>
        &copy; 2026 Utpanna Pradhan
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A simple About page commonly contains:

```text
Header
Navigation
Introduction
Skills
Goals
Footer
```

The important part is not the specific content.

The important part is understanding how to structure a real page using semantic elements.

### Remember

```text
About page
→ Introduction
→ Skills
→ Background/Goals
→ Footer
```

---

## 14. Create a "Contact" Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>Contact Us</title>

  </head>

  <body>

    <header>

      <h1>Contact Us</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>

    </header>

    <main>

      <section>

        <h2>Get in Touch</h2>

        <p>
          We'd love to hear from you.
        </p>

      </section>

      <section>

        <h2>Contact Information</h2>

        <address>

          <p>
            Email:
            <a href="mailto:hello@example.com">
              hello@example.com
            </a>
          </p>

          <p>
            Phone:
            <a href="tel:+911234567890">
              +91 12345 67890
            </a>
          </p>

        </address>

      </section>

      <section>

        <h2>Send a Message</h2>

        <form>

          <label for="name">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required>

          <br><br>

          <label for="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required>

          <br><br>

          <label for="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            required></textarea>

          <br><br>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </main>

    <footer>

      <p>
        &copy; 2026 My Website
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A contact page commonly contains:

```text
Contact information
Email
Phone
Address
Contact form
```

Important semantic elements:

```text
<address>
→ Contact information

<form>
→ User input/submission

<label>
→ Describes a form control

<input>
→ Single-line input

<textarea>
→ Multi-line input

<button>
→ Performs an action
```

### Remember

```text
Contact Page
→ Contact information
→ Form
→ Email / phone links
```

---

## 15. Create a "Services" Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>Our Services</title>

  </head>

  <body>

    <header>

      <h1>Our Services</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>

    </header>

    <main>

      <section>

        <h2>What We Offer</h2>

        <p>
          We provide professional web development services.
        </p>

      </section>

      <section>

        <h2>Services</h2>

        <article>

          <h3>Web Development</h3>

          <p>
            We build responsive and modern websites.
          </p>

        </article>

        <article>

          <h3>UI Development</h3>

          <p>
            We convert designs into functional interfaces.
          </p>

        </article>

        <article>

          <h3>Website Maintenance</h3>

          <p>
            We maintain and improve existing websites.
          </p>

        </article>

      </section>

    </main>

    <footer>

      <p>
        &copy; 2026 My Website
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A services page can use:

```text
<section>
→ Groups related content

<article>
→ Represents an independent service item

<h3>
→ Service name

<p>
→ Service description
```

The important thing is to structure the information according to its meaning.

### Remember

```text
Services Page
→ Service section
→ Individual service items
→ Description
→ Call to action/contact
```

---

## 16. Create a "Portfolio" Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>My Portfolio</title>

  </head>

  <body>

    <header>

      <h1>My Portfolio</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </nav>

    </header>

    <main>

      <section>

        <h2>My Projects</h2>

        <article>

          <h3>Restaurant Website</h3>

          <p>
            A responsive restaurant website
            built using modern web technologies.
          </p>

          <a href="/projects/restaurant">
            View Project
          </a>

        </article>

        <article>

          <h3>Gym Website</h3>

          <p>
            A modern fitness website with
            responsive layouts and interactive sections.
          </p>

          <a href="/projects/gym">
            View Project
          </a>

        </article>

        <article>

          <h3>Portfolio Website</h3>

          <p>
            A personal portfolio showcasing
            my skills and projects.
          </p>

          <a href="/projects/portfolio">
            View Project
          </a>

        </article>

      </section>

    </main>

    <footer>

      <p>
        &copy; 2026 My Portfolio
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A portfolio page usually contains:

```text
Projects
Project title
Project description
Project link
Technologies
Screenshots/images
```

Each independent project can be represented with:

```html
<article>
```

### Remember

```text
Portfolio
→ Projects
→ Project details
→ Project links
```

---

## 17. Create a "Blog" Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>My Blog</title>

  </head>

  <body>

    <header>

      <h1>My Blog</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

    </header>

    <main>

      <section>

        <h2>Latest Articles</h2>

        <article>

          <header>
            <h3>Learning HTML</h3>

            <p>
              Published on
              <time datetime="2026-08-12">
                August 12, 2026
              </time>
            </p>
          </header>

          <p>
            HTML provides the structure of a web page.
          </p>

          <a href="/blog/learning-html">
            Read More
          </a>

        </article>

        <article>

          <header>
            <h3>Learning CSS</h3>

            <p>
              Published on
              <time datetime="2026-08-10">
                August 10, 2026
              </time>
            </p>
          </header>

          <p>
            CSS controls the presentation and layout
            of web pages.
          </p>

          <a href="/blog/learning-css">
            Read More
          </a>

        </article>

      </section>

    </main>

    <footer>

      <p>
        &copy; 2026 My Blog
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A blog listing page commonly contains:

```text
Page heading
Article list
Article title
Publication date
Short description
Read More link
```

Each blog post can be represented using:

```html
<article>
```

The `<time>` element represents a date or time.

Example:

```html
<time datetime="2026-08-12">
  August 12, 2026
</time>
```

### Remember

```text
Blog
→ Multiple articles

<article>
→ Individual blog post

<time>
→ Date/time
```

---

## 18. Create a "News Article" Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>New Technology Announced</title>

  </head>

  <body>

    <header>

      <h1>Daily News</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/technology">Technology</a>
        <a href="/business">Business</a>
        <a href="/contact">Contact</a>
      </nav>

    </header>

    <main>

      <article>

        <header>

          <h2>
            New Technology Announced
          </h2>

          <p>
            Published on
            <time datetime="2026-08-12">
              August 12, 2026
            </time>
          </p>

          <p>
            By
            <span>Utpanna Pradhan</span>
          </p>

        </header>

        <section>

          <h3>Introduction</h3>

          <p>
            A new technology has been announced
            that could change how developers build
            modern applications.
          </p>

        </section>

        <section>

          <h3>Key Details</h3>

          <p>
            The technology focuses on improving
            performance and developer productivity.
          </p>

          <ul>
            <li>Improved performance</li>
            <li>Better developer experience</li>
            <li>Modern architecture</li>
          </ul>

        </section>

        <section>

          <h3>Conclusion</h3>

          <p>
            Developers will continue to evaluate
            the technology as it becomes more widely available.
          </p>

        </section>

      </article>

    </main>

    <footer>

      <p>
        &copy; 2026 Daily News
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A news article is a good example of an independent piece of content.

The main article is represented by:

```html
<article>
```

Inside it, you can use:

```text
<header>
→ Article title, author, date

<section>
→ Major parts of the article

<footer>
→ Article metadata or related information
```

### Why `<article>`?

An article should represent content that could potentially stand on its own.

Examples:

```text
News article
Blog post
Forum post
Product review
Magazine article
```

### Remember

```text
News Article
→ article
   → header
   → sections
   → content
```

---

## 19. Create a "Privacy Policy" Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>Privacy Policy</title>

  </head>

  <body>

    <header>

      <h1>Privacy Policy</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy">
          Privacy Policy
        </a>
        <a href="/terms">
          Terms &amp; Conditions
        </a>
      </nav>

    </header>

    <main>

      <p>
        Last updated:
        <time datetime="2026-08-12">
          August 12, 2026
        </time>
      </p>

      <section>

        <h2>Information We Collect</h2>

        <p>
          We may collect information that you
          provide when using our services.
        </p>

      </section>

      <section>

        <h2>How We Use Information</h2>

        <p>
          Information may be used to provide,
          maintain, and improve our services.
        </p>

      </section>

      <section>

        <h2>Data Security</h2>

        <p>
          We take reasonable measures to protect
          information handled by our service.
        </p>

      </section>

      <section>

        <h2>Contact Us</h2>

        <p>
          If you have questions about this policy,
          contact us at
          <a href="mailto:privacy@example.com">
            privacy@example.com
          </a>.
        </p>

      </section>

    </main>

    <footer>

      <p>
        &copy; 2026 My Website
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A privacy policy page commonly contains sections such as:

```text
Information collected
How information is used
Cookies
Data sharing
Data retention
Security
User rights
Contact information
```

Use headings to create a clear hierarchy:

```text
Privacy Policy
├── Information We Collect
├── How We Use Information
├── Data Security
└── Contact Us
```

### Important

The HTML structure is only the technical part.

The actual legal content of a privacy policy depends on the website, jurisdiction, data practices, and applicable laws.

### Remember

```text
Privacy Policy
→ Explain data collection
→ Explain data usage
→ Explain relevant privacy practices
→ Provide contact information
```

---

## 20. Create a "Terms & Conditions" Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>Terms &amp; Conditions</title>

  </head>

  <body>

    <header>

      <h1>Terms &amp; Conditions</h1>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy">
          Privacy Policy
        </a>
        <a href="/terms">
          Terms &amp; Conditions
        </a>
      </nav>

    </header>

    <main>

      <p>
        Last updated:
        <time datetime="2026-08-12">
          August 12, 2026
        </time>
      </p>

      <section>

        <h2>Acceptance of Terms</h2>

        <p>
          By using this website, you agree
          to comply with the applicable terms
          described on this page.
        </p>

      </section>

      <section>

        <h2>Use of the Website</h2>

        <p>
          Users must use the website lawfully
          and must not misuse the services.
        </p>

      </section>

      <section>

        <h2>Intellectual Property</h2>

        <p>
          Content on this website may be protected
          by applicable intellectual property laws.
        </p>

      </section>

      <section>

        <h2>Limitation of Liability</h2>

        <p>
          The applicable limitations and disclaimers
          are described in this section.
        </p>

      </section>

      <section>

        <h2>Contact</h2>

        <p>
          Questions about these terms can be sent to
          <a href="mailto:legal@example.com">
            legal@example.com
          </a>.
        </p>

      </section>

    </main>

    <footer>

      <p>
        &copy; 2026 My Website
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A Terms & Conditions page commonly describes rules governing the use of a website or service.

Common sections include:

```text
Acceptance of terms
User responsibilities
Acceptable use
Intellectual property
Payments
Accounts
Disclaimers
Limitation of liability
Termination
Changes to terms
Contact information
```

A typical structure is:

```text
Terms & Conditions
├── Acceptance of Terms
├── Use of Website
├── Intellectual Property
├── Liability
└── Contact
```

### Important

Like a privacy policy, the actual legal terms depend on the service and applicable laws.

Do not treat a generic HTML example as a complete legal agreement. Apparently even lawyers require more context than a `<section>` tag.

### Remember

```text
Terms & Conditions
→ Rules for using the website/service
```

# Final Revision

```text
11. Nested Elements
    → Elements inside other elements

12. Semantic Structure
    → header + nav + main + section/article + footer

13. About Page
    → Introduction + skills + background

14. Contact Page
    → Contact information + form

15. Services Page
    → Service sections/items

16. Portfolio Page
    → Projects + descriptions + links

17. Blog Page
    → Multiple articles

18. News Article
    → Independent article + sections + metadata

19. Privacy Policy
    → Privacy/data-related information

20. Terms & Conditions
    → Rules governing website/service usage
```

# Master Structure to Remember

```text
<!DOCTYPE html>
<html>
  <head>
    Metadata
  </head>

  <body>

    <header>
      Site identity + navigation
    </header>

    <main>
      Main page content

      <section>
        Related content
      </section>

      <article>
        Independent content
      </article>
    </main>

    <footer>
      Footer information
    </footer>

  </body>
</html>
```
# Module 2 – Text Formatting (21–35)

## 21. How do you create bold text?

### Code

```html
<p>
  This is <strong>important text</strong>.
</p>

<p>
  This is <b>bold text</b>.
</p>
```

### Explanation

There are two common elements:

```text
<strong>
→ Gives text strong importance

<b>
→ Makes text visually bold without adding extra importance
```

Prefer `<strong>` when the text is semantically important.

Example:

```html
<p>
  <strong>Warning:</strong> Do not share your password.
</p>
```

Use `<b>` when you simply want to draw attention without implying importance.

### Remember

```text
<strong>
→ Important

<b>
→ Bold appearance
```

---

## 22. How do you create italic text?

### Code

```html
<p>
  This is <em>emphasized text</em>.
</p>

<p>
  This is <i>italic text</i>.
</p>
```

### Explanation

There are two common elements:

```text
<em>
→ Emphasis

<i>
→ Text in an alternate voice or mood, often displayed in italics
```

`<em>` has semantic meaning.

Example:

```html
<p>
  You <em>must</em> complete this task.
</p>
```

`<i>` is used when the text is visually or conventionally set apart, such as a technical term, foreign word, or other alternate voice.

### Remember

```text
<em>
→ Emphasis

<i>
→ Alternate text/voice, commonly italic
```

---

## 23. How do you underline text?

### Code

```html
<p>
  This is <u>underlined text</u>.
</p>
```

### Explanation

The `<u>` element represents text that should be stylistically distinguished from surrounding text.

It is not generally recommended just to underline ordinary text for decoration.

For purely visual styling, CSS is usually better:

```html
<p class="underlined">
  Underlined text
</p>
```

```css
.underlined {
  text-decoration: underline;
}
```

### Important

Do not use `<u>` to create links.

Links should use:

```html
<a href="/about">
  About
</a>
```

### Remember

```text
<u>
→ Underlined/distinguished text

CSS text-decoration
→ Visual underline styling
```

---

## 24. How do you highlight text?

### Code

```html
<p>
  This is <mark>highlighted text</mark>.
</p>
```

### Explanation

The `<mark>` element represents text that is **highlighted or marked because it is relevant in the current context**.

A browser commonly displays it with a yellow background.

Example:

```html
<p>
  Search result:
  HTML is a <mark>markup language</mark>.
</p>
```

### Remember

```text
<mark>
→ Highlight relevant text
```

---

## 25. How do you create superscript text?

### Code

```html
<p>
  x<sup>2</sup>
</p>

<p>
  10<sup>th</sup>
</p>
```

### Explanation

`<sup>` displays text slightly above the normal text line.

Common uses include:

```text
Mathematical powers
Ordinal numbers
Footnote markers
```

Example:

```html
<p>
  Area = x<sup>2</sup>
</p>
```

Displays conceptually as:

```text
x²
```

### Remember

```text
<sup>
→ Above the normal text line
```

---

## 26. How do you create subscript text?

### Code

```html
<p>
  H<sub>2</sub>O
</p>

<p>
  CO<sub>2</sub>
</p>
```

### Explanation

`<sub>` displays text slightly below the normal text line.

Common uses include:

```text
Chemical formulas
Mathematical notation
Scientific notation
```

Example:

```html
<p>
  H<sub>2</sub>O
</p>
```

Displays:

```text
H₂O
```

### Remember

```text
<sup>
→ Up

<sub>
→ Down
```

---

## 27. How do you create a code block?

### Code

```html
<pre><code>
function greet() {
  console.log("Hello World");
}
</code></pre>
```

### Explanation

A code block is commonly created using:

```text
<pre>
+
<code>
```

`<code>` indicates that the content is computer code.

`<pre>` preserves whitespace and line breaks.

This means indentation is preserved.

Example:

```html
<pre><code>
const user = {
  name: "Utpanna",
  role: "Frontend Developer"
};
</code></pre>
```

The browser preserves the formatting inside `<pre>`.

### Remember

```text
<code>
→ Code meaning

<pre>
→ Preserve whitespace/formatting

<pre><code>
→ Common code block pattern
```

---

## 28. How do you display inline code?

### Code

```html
<p>
  Use the <code>console.log()</code> function
  to print a value.
</p>
```

### Explanation

`<code>` represents a fragment of computer code.

Use it when code appears inside normal text.

Example:

```html
<p>
  Add the <code>required</code> attribute to the input.
</p>
```

This is different from a large code block.

```text
Inline code
→ <code>

Large code block
→ <pre><code>
```

### Remember

```text
<code>
→ Computer code

Inside a paragraph
→ Inline code

Inside <pre>
→ Formatted code block
```

---

## 29. How do you create a blockquote?

### Code

```html
<blockquote cite="https://example.com">
  <p>
    The web is built on open standards.
  </p>
</blockquote>
```

### Explanation

`<blockquote>` represents a **section of content quoted from another source**.

It is normally displayed as a separate block.

The optional `cite` attribute can identify the source of the quotation.

Example:

```html
<blockquote>
  <p>
    This is a longer quotation.
  </p>
</blockquote>
```

### Blockquote vs Q

```text
<blockquote>
→ Longer/block quotation

<q>
→ Short inline quotation
```

### Remember

```text
<blockquote>
→ Block-level quotation
```

---

## 30. How do you create an inline quote?

### Code

```html
<p>
  She said,
  <q>Practice makes progress.</q>
</p>
```

### Explanation

The `<q>` element represents a **short inline quotation**.

Browsers commonly add quotation marks automatically.

Example:

```html
<p>
  He said <q>Hello</q> and left.
</p>
```

### `q` vs `blockquote`

```text
<q>
→ Short quote inside a sentence

<blockquote>
→ Longer quotation as a separate block
```

### Remember

```text
<q>
→ Quote inside a sentence

<blockquote>
→ Quote as a block
```

---

## 31. How do you create an abbreviation?

### Code

```html
<p>
  <abbr title="HyperText Markup Language">
    HTML
  </abbr>
  is used to structure web pages.
</p>
```

### Explanation

The `<abbr>` element represents an abbreviation or acronym.

The `title` attribute can provide the expanded meaning.

Example:

```html
<abbr title="Cascading Style Sheets">
  CSS
</abbr>
```

Conceptually:

```text
CSS
↓
Cascading Style Sheets
```

The browser may show the full meaning when the user hovers over the abbreviation.

### Remember

```text
<abbr>
→ Abbreviation

title
→ Full meaning
```

---

## 32. How do you create an address block?

### Code

```html
<address>
  <p>
    Utpanna Pradhan
  </p>

  <p>
    Odisha, India
  </p>

  <p>
    <a href="mailto:hello@example.com">
      hello@example.com
    </a>
  </p>
</address>
```

### Explanation

The `<address>` element represents contact information for the relevant person, organization, or content.

It can contain:

```text
Name
Email
Phone
Physical address
Website/contact links
```

Example:

```html
<address>
  Written by Utpanna Pradhan.
  <a href="mailto:hello@example.com">
    Contact the author
  </a>
</address>
```

### Important

`<address>` does not simply mean:

```text
"Put any postal address here."
```

Its semantic purpose is contact information.

### Remember

```text
<address>
→ Contact information
```

---

## 33. How do you display a keyboard shortcut?

### Code

```html
<p>
  Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.
</p>
```

### Explanation

The `<kbd>` element represents **user input from a keyboard or other input device**.

Example:

```html
<p>
  Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.
</p>
```

Another example:

```html
<p>
  Press <kbd>Enter</kbd> to submit.
</p>
```

### Remember

```text
<kbd>
→ Keyboard/user input
```

---

## 34. How do you represent a time or date?

### Code

```html
<p>
  Published on
  <time datetime="2026-08-12">
    August 12, 2026
  </time>
</p>
```

### Explanation

The `<time>` element represents a specific period in time or a date.

The `datetime` attribute provides a machine-readable value.

Example:

```html
<time datetime="2026-08-12">
  August 12, 2026
</time>
```

The user sees:

```text
August 12, 2026
```

Machines can read:

```text
2026-08-12
```

### Date and Time

```html
<time datetime="2026-08-12T20:30">
  August 12, 2026 at 8:30 PM
</time>
```

### Why Is This Useful?

It helps:

```text
Search engines
Browsers
Applications
Assistive technologies
```

understand that the content represents a date or time.

### Remember

```text
<time>
→ Human-readable date/time

datetime
→ Machine-readable date/time
```

---

## 35. How do you create a citation element?

### Code

```html
<p>
  My favorite book is
  <cite>Clean Code</cite>.
</p>
```

### Explanation

The `<cite>` element represents the **title of a creative work**.

Examples include:

```text
Book
Article
Movie
Song
Painting
Research paper
Website/document
```

Example:

```html
<p>
  I am reading
  <cite>Clean Code</cite>.
</p>
```

Another example:

```html
<p>
  The movie
  <cite>Interstellar</cite>
  is a science-fiction film.
</p>
```

### Important Difference

`<cite>` represents the **title/source of a creative work**.

It does not mean:

```text
"Everything someone said."
```

For an actual quotation, use:

```html
<blockquote>
  <p>
    Quoted content goes here.
  </p>
</blockquote>
```

### Remember

```text
<cite>
→ Title of a creative work

<blockquote>
→ Quoted content
```

# Final Revision

```text
21. <strong>
    → Important text

22. <em>
    → Emphasized text

23. <u>
    → Underlined/distinguished text

24. <mark>
    → Highlighted text

25. <sup>
    → Superscript / above

26. <sub>
    → Subscript / below

27. <pre><code>
    → Code block

28. <code>
    → Inline code

29. <blockquote>
    → Block quotation

30. <q>
    → Inline quotation

31. <abbr>
    → Abbreviation

32. <address>
    → Contact information

33. <kbd>
    → Keyboard/user input

34. <time>
    → Date/time

35. <cite>
    → Title of a creative work
```

# Most Important Differences to Remember

```text
<strong> → Important
<b>      → Bold appearance

<em>     → Emphasis
<i>      → Alternate voice/style

<code>   → Code
<pre>    → Preserved whitespace

<q>      → Short inline quote
<blockquote> → Longer block quote

<sup>    → Up
<sub>    → Down

<time>   → Date/time
<cite>   → Creative work title

<kbd>    → Keyboard input
<abbr>   → Abbreviation
<mark>   → Highlight
```
# Module 3 – Links & Navigation (36–55)

## 36. How do you create an internal link?

### Code

```html
<a href="/about.html">
  About Us
</a>
```

### Explanation

An **internal link** points to another page within the same website.

For example:

```text
Current page
    ↓
/about.html
```

If your website contains:

```text
index.html
about.html
contact.html
```

You can create navigation like this:

```html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
```

### Relative URL

You can also use:

```html
<a href="./about.html">
  About
</a>
```

### Remember

```text
Internal link
→ Link to another page/resource within your website

<a>
→ Anchor element

href
→ Destination
```

---

## 37. How do you create an external link?

### Code

```html
<a href="https://www.example.com">
  Visit Example
</a>
```

### Explanation

An **external link** points to a resource on another website.

Example:

```html
<a href="https://developer.mozilla.org/">
  MDN Web Docs
</a>
```

The URL contains the complete address:

```text
https://
```

This is called an **absolute URL**.

### Opening an External Link Safely

If you want to open it in a new tab:

```html
<a
  href="https://www.example.com"
  target="_blank"
  rel="noopener noreferrer">
  Visit Example
</a>
```

### Remember

```text
Internal
→ Your website

External
→ Another website

Absolute URL
→ Complete URL
```

---

## 38. How do you create an email link?

### Code

```html
<a href="mailto:hello@example.com">
  Email Us
</a>
```

### Explanation

The `mailto:` scheme tells the browser to create an email link.

When the user clicks it, the browser can open the user's configured email application.

You can also specify a subject:

```html
<a
  href="mailto:hello@example.com?subject=Website%20Inquiry">
  Send Email
</a>
```

You can also include a body:

```html
<a
  href="mailto:hello@example.com?subject=Website%20Inquiry&body=Hello">
  Contact Us
</a>
```

### Important

Spaces and special characters in URLs should be properly URL-encoded.

For example:

```text
Space
→ %20
```

### Remember

```text
mailto:
→ Email link
```

---

## 39. How do you create a phone link?

### Code

```html
<a href="tel:+911234567890">
  Call Us
</a>
```

### Explanation

The `tel:` URL scheme allows a user to initiate a phone call using a compatible device or application.

Example:

```html
<a href="tel:+911234567890">
  +91 12345 67890
</a>
```

On a smartphone, tapping the link can open the phone/dialer interface.

### Remember

```text
tel:
→ Phone link

mailto:
→ Email link
```

---

## 40. How do you create a download link?

### Code

```html
<a
  href="/files/resume.pdf"
  download>
  Download Resume
</a>
```

### Explanation

The `download` attribute tells the browser that the linked resource is intended to be downloaded rather than simply navigated to.

You can optionally suggest a filename:

```html
<a
  href="/files/resume.pdf"
  download="Utpanna-Pradhan-Resume.pdf">
  Download Resume
</a>
```

The browser may use the suggested filename.

### Important

The `download` attribute does not guarantee that every resource will always download.

Browser behavior can depend on factors such as:

```text
Same-origin rules
Server response headers
Browser behavior
Resource type
```

### Remember

```text
download
→ Suggest downloading the linked resource
```

---

## 41. How do you open a link in a new tab?

### Code

```html
<a
  href="https://www.example.com"
  target="_blank"
  rel="noopener noreferrer">
  Open Example
</a>
```

### Explanation

The `target="_blank"` attribute tells the browser to open the link in a new browsing context, commonly a new tab.

```html
target="_blank"
```

means:

```text
Open somewhere new
```

### Why use `rel="noopener"`?

When opening a page in a new browsing context, `noopener` prevents the opened page from accessing the opener through `window.opener`.

Example:

```html
<a
  href="https://www.example.com"
  target="_blank"
  rel="noopener">
  Open Example
</a>
```

You will commonly see:

```html
rel="noopener noreferrer"
```

`noreferrer` additionally prevents the browser from sending the referring page URL in the HTTP `Referer` header.

### Remember

```text
target="_blank"
→ Open in a new browsing context

rel="noopener"
→ Prevent opener access

rel="noreferrer"
→ Don't send referrer information
```

---

## 42. How do you navigate to a section of the same page?

### Code

```html
<nav>
  <a href="#about">
    About
  </a>

  <a href="#services">
    Services
  </a>

  <a href="#contact">
    Contact
  </a>
</nav>

<main>

  <section id="about">
    <h2>About</h2>
    <p>About our company.</p>
  </section>

  <section id="services">
    <h2>Services</h2>
    <p>Our services.</p>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Contact information.</p>
  </section>

</main>
```

### Explanation

This is called **fragment navigation**.

The link contains:

```html
href="#about"
```

The `#` means the browser should navigate to the element with:

```html
id="about"
```

So:

```text
href="#about"
        ↓
id="about"
```

### Another Example

```html
<a href="#pricing">
  View Pricing
</a>

<section id="pricing">
  <h2>Pricing</h2>
</section>
```

Clicking the link moves the page to the `pricing` section.

### Remember

```text
href="#something"
        ↓
id="something"
```

---

## 43. How do you create a table of contents?

### Code

```html
<nav aria-label="Table of contents">

  <h2>Table of Contents</h2>

  <ol>

    <li>
      <a href="#introduction">
        Introduction
      </a>
    </li>

    <li>
      <a href="#html">
        HTML
      </a>
    </li>

    <li>
      <a href="#css">
        CSS
      </a>
    </li>

    <li>
      <a href="#javascript">
        JavaScript
      </a>
    </li>

  </ol>

</nav>

<main>

  <section id="introduction">
    <h2>Introduction</h2>
    <p>Introduction content.</p>
  </section>

  <section id="html">
    <h2>HTML</h2>
    <p>HTML content.</p>
  </section>

  <section id="css">
    <h2>CSS</h2>
    <p>CSS content.</p>
  </section>

  <section id="javascript">
    <h2>JavaScript</h2>
    <p>JavaScript content.</p>
  </section>

</main>
```

### Explanation

A table of contents is usually built using:

```text
<nav>
→ Navigation area

<a>
→ Links

#fragment
→ Links to sections

id
→ Destination
```

The important relationship is:

```text
Table of Contents
        ↓
<a href="#html">
        ↓
<section id="html">
```

### Remember

```text
TOC
→ Navigation links
→ Fragment IDs
→ Page sections
```

---

## 44. How do you create breadcrumb navigation?

### Code

```html
<nav aria-label="Breadcrumb">

  <ol>

    <li>
      <a href="/">
        Home
      </a>
    </li>

    <li>
      <a href="/products">
        Products
      </a>
    </li>

    <li>
      <a href="/products/laptops">
        Laptops
      </a>
    </li>

    <li>
      Gaming Laptops
    </li>

  </ol>

</nav>
```

### Explanation

Breadcrumbs show the user's location within a website's hierarchy.

For example:

```text
Home
  ↓
Products
  ↓
Laptops
  ↓
Gaming Laptops
```

They help users understand:

```text
Where am I?
Where did I come from?
How can I move back?
```

The current page does not necessarily need to be a link.

Example:

```html
<li>
  Gaming Laptops
</li>
```

### Why Use `<nav>`?

Breadcrumbs are a type of navigation, so they can be represented with:

```html
<nav aria-label="Breadcrumb">
```

The `aria-label` helps distinguish this navigation from other navigation areas.

### Remember

```text
Breadcrumb
→ Shows page hierarchy/location

Home
→ Category
→ Subcategory
→ Current page
```

---

## 45. How do you create a multi-level navigation menu?

### Code

```html
<nav aria-label="Main navigation">

  <ul>

    <li>
      <a href="/">
        Home
      </a>
    </li>

    <li>
      <a href="/about">
        About
      </a>
    </li>

    <li>

      <a href="/services">
        Services
      </a>

      <ul>

        <li>
          <a href="/services/web-development">
            Web Development
          </a>
        </li>

        <li>
          <a href="/services/ui-design">
            UI Design
          </a>
        </li>

        <li>

          <a href="/services/marketing">
            Marketing
          </a>

          <ul>

            <li>
              <a href="/services/marketing/seo">
                SEO
              </a>
            </li>

            <li>
              <a href="/services/marketing/content">
                Content Marketing
              </a>
            </li>

          </ul>

        </li>

      </ul>

    </li>

    <li>
      <a href="/contact">
        Contact
      </a>
    </li>

  </ul>

</nav>
```

### Explanation

A multi-level navigation menu contains navigation items inside nested lists.

The structure is:

```text
Services
├── Web Development
├── UI Design
└── Marketing
    ├── SEO
    └── Content Marketing
```

The HTML hierarchy is:

```text
<nav>
└── <ul>
    ├── <li>
    ├── <li>
    ├── <li>
    │   └── <ul>
    │       ├── <li>
    │       ├── <li>
    │       └── <li>
    │           └── <ul>
    │               ├── <li>
    │               └── <li>
    └── <li>
```

### Why Use `<ul>` and `<li>`?

Navigation items form a list of related choices.

Therefore:

```text
<ul>
→ List

<li>
→ Individual navigation item

<a>
→ Destination/action
```

### Important

HTML provides the **structure**.

CSS can create the visual dropdown:

```css
nav ul {
  list-style: none;
}

nav li {
  position: relative;
}
```

JavaScript may be needed for interactive behavior such as:

```text
Opening/closing menus
Keyboard interactions
Mobile navigation
Dynamic state
```

### Accessibility Consideration

A multi-level menu should be keyboard accessible.

If a submenu is controlled by a button, use an actual `<button>` rather than making a fake button from a `<div>`.

Example:

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="services-menu">
  Services
</button>
```

### Remember

```text
Multi-level navigation
→ <nav>
   → <ul>
      → <li>
         → <a>

Nested <ul>
→ Submenu
```

# Final Revision

```text
36. Internal links
    → Link within your website

37. External links
    → Link to another website

38. Email link
    → mailto:

39. Phone link
    → tel:

40. Download link
    → download attribute

41. New tab
    → target="_blank"
    → commonly rel="noopener noreferrer"

42. Page section navigation
    → href="#section-id"

43. Table of contents
    → Navigation + fragment links

44. Breadcrumbs
    → Show website hierarchy/location

45. Multi-level navigation
    → Nested <ul> / <li> navigation
```

# Master Memory Trick

```text
<a href="/about">
→ Another page

<a href="https://example.com">
→ External website

<a href="mailto:...">
→ Email

<a href="tel:...">
→ Phone

<a href="/file.pdf" download>
→ Download

<a href="..." target="_blank">
→ New browsing context

<a href="#contact">
→ Same-page section

<nav>
→ Navigation area

<nav aria-label="Breadcrumb">
→ Breadcrumb navigation

<ul>
  <li>
    <ul>
      <li>
→ Multi-level navigation
```

# Module 3 – Links & Navigation (46–55)

## 46. How do you create sidebar navigation?

### Code

```html
<aside aria-label="Sidebar navigation">

  <nav>

    <h2>Dashboard</h2>

    <ul>
      <li>
        <a href="/dashboard">
          Dashboard
        </a>
      </li>

      <li>
        <a href="/profile">
          Profile
        </a>
      </li>

      <li>
        <a href="/settings">
          Settings
        </a>
      </li>

      <li>
        <a href="/help">
          Help
        </a>
      </li>
    </ul>

  </nav>

</aside>
```

### Explanation

A sidebar navigation is navigation placed in a side area of the page.

A common structure is:

```text
<aside>
    ↓
<nav>
    ↓
<ul>
    ↓
<li>
    ↓
<a>
```

Use `<aside>` when the sidebar represents content that is complementary to the main content.

Use `<nav>` specifically for a group of navigation links.

### Remember

```text
Sidebar
→ <aside>
   → <nav>
      → <ul>
         → <li>
            → <a>
```

---

## 47. How do you create footer navigation?

### Code

```html
<footer>

  <nav aria-label="Footer navigation">

    <ul>

      <li>
        <a href="/about">
          About
        </a>
      </li>

      <li>
        <a href="/contact">
          Contact
        </a>
      </li>

      <li>
        <a href="/privacy">
          Privacy Policy
        </a>
      </li>

      <li>
        <a href="/terms">
          Terms &amp; Conditions
        </a>
      </li>

    </ul>

  </nav>

  <p>
    &copy; 2026 My Website
  </p>

</footer>
```

### Explanation

Footer navigation contains links that are commonly useful at the bottom of the website.

Examples:

```text
About
Contact
Privacy Policy
Terms
Careers
Help
```

If the page has multiple navigation areas, `aria-label` helps distinguish them.

For example:

```html
<nav aria-label="Main navigation">
```

and:

```html
<nav aria-label="Footer navigation">
```

### Remember

```text
Footer navigation
→ <footer>
   → <nav>
      → Links
```

---

## 48. How do you create social media links?

### Code

```html
<nav aria-label="Social media">

  <ul>

    <li>
      <a
        href="https://www.example.com"
        target="_blank"
        rel="noopener noreferrer">
        Instagram
      </a>
    </li>

    <li>
      <a
        href="https://www.example.com"
        target="_blank"
        rel="noopener noreferrer">
        LinkedIn
      </a>
    </li>

    <li>
      <a
        href="https://www.example.com"
        target="_blank"
        rel="noopener noreferrer">
        GitHub
      </a>
    </li>

  </ul>

</nav>
```

### Explanation

Social media links are normal `<a>` elements pointing to social platforms.

The important part is:

```html
<a href="https://example.com">
```

You can open external social links in a new tab:

```html
target="_blank"
```

and commonly use:

```html
rel="noopener noreferrer"
```

### With accessible labels

If the link contains only an icon, provide an accessible name:

```html
<a
  href="https://www.example.com"
  aria-label="Visit our Instagram profile">
  <img
    src="instagram.svg"
    alt="">
</a>
```

The empty `alt` tells assistive technology that the image itself is decorative because the link already has an accessible label.

### Remember

```text
Social media link
→ <a>

Icon-only link
→ Give it an accessible name
```

---

## 49. How do you create navigation with icons?

### Code

```html
<nav aria-label="Main navigation">

  <ul>

    <li>
      <a href="/">

        <img
          src="home.svg"
          alt="">

        <span>
          Home
        </span>

      </a>
    </li>

    <li>
      <a href="/profile">

        <img
          src="profile.svg"
          alt="">

        <span>
          Profile
        </span>

      </a>
    </li>

    <li>
      <a href="/settings">

        <img
          src="settings.svg"
          alt="">

        <span>
          Settings
        </span>

      </a>
    </li>

  </ul>

</nav>
```

### Explanation

Icons can make navigation easier to scan visually.

However, the icon should not be the only way to understand the link unless it has an accessible name.

This is good:

```html
<a href="/profile">
  <img src="profile.svg" alt="">
  <span>Profile</span>
</a>
```

The visible text provides the link's meaning.

For an icon-only link:

```html
<a
  href="/profile"
  aria-label="Profile">
  <img
    src="profile.svg"
    alt="">
</a>
```

### Important

Don't put unnecessary alternative text on a decorative icon when the link already contains visible text.

For example:

```html
<a href="/profile">
  <img src="profile.svg" alt="">
  <span>Profile</span>
</a>
```

### Remember

```text
Icon + text
→ Best for clarity

Icon only
→ Provide an accessible name
```

---

## 50. How do you structure responsive navigation?

### Code

```html
<header>

  <a href="/" class="logo">
    My Website
  </a>

  <button
    type="button"
    aria-expanded="false"
    aria-controls="main-navigation">
    Menu
  </button>

  <nav
    id="main-navigation"
    aria-label="Main navigation">

    <ul>

      <li>
        <a href="/">
          Home
        </a>
      </li>

      <li>
        <a href="/about">
          About
        </a>
      </li>

      <li>
        <a href="/services">
          Services
        </a>
      </li>

      <li>
        <a href="/contact">
          Contact
        </a>
      </li>

    </ul>

  </nav>

</header>
```

### Explanation

Responsive navigation changes its presentation depending on screen size.

For example:

```text
Desktop
→ Full navigation visible

Mobile
→ Menu button
→ Navigation opens when activated
```

The HTML should provide the semantic structure.

CSS controls the layout:

```text
Desktop
→ Horizontal navigation

Mobile
→ Collapsed navigation
```

JavaScript can control whether the mobile menu is open.

The button can communicate its state with:

```html
aria-expanded="false"
```

When the menu is opened:

```html
aria-expanded="true"
```

The button can identify the controlled navigation using:

```html
aria-controls="main-navigation"
```

### Important

A responsive menu should not rely only on CSS if it requires interactive open/close behavior.

The menu should also be usable with:

```text
Keyboard
Mouse
Touch
Assistive technology
```

### Remember

```text
Responsive navigation
→ Same semantic navigation
→ CSS changes layout
→ Button/JS can control mobile menu
→ Accessibility state matters
```

---

## 51. How do you create a mega menu HTML structure?

### Code

```html
<nav aria-label="Main navigation">

  <ul>

    <li>
      <a href="/">
        Home
      </a>
    </li>

    <li>

      <a href="/products">
        Products
      </a>

      <div class="mega-menu">

        <section>

          <h2>Web Development</h2>

          <ul>
            <li>
              <a href="/products/frontend">
                Frontend
              </a>
            </li>

            <li>
              <a href="/products/backend">
                Backend
              </a>
            </li>

            <li>
              <a href="/products/full-stack">
                Full Stack
              </a>
            </li>
          </ul>

        </section>

        <section>

          <h2>Design</h2>

          <ul>
            <li>
              <a href="/design/ui">
                UI Design
              </a>
            </li>

            <li>
              <a href="/design/ux">
                UX Design
              </a>
            </li>
          </ul>

        </section>

        <section>

          <h2>Resources</h2>

          <ul>
            <li>
              <a href="/resources/blog">
                Blog
              </a>
            </li>

            <li>
              <a href="/resources/docs">
                Documentation
              </a>
            </li>
          </ul>

        </section>

      </div>

    </li>

    <li>
      <a href="/about">
        About
      </a>
    </li>

    <li>
      <a href="/contact">
        Contact
      </a>
    </li>

  </ul>

</nav>
```

### Explanation

A mega menu is a large navigation panel containing many groups of related links.

Conceptually:

```text
Products
├── Web Development
│   ├── Frontend
│   ├── Backend
│   └── Full Stack
│
├── Design
│   ├── UI Design
│   └── UX Design
│
└── Resources
    ├── Blog
    └── Documentation
```

The HTML provides the structure.

CSS can make the mega menu appear as:

```text
----------------------------------------
| Web Development | Design | Resources |
| Frontend        | UI     | Blog      |
| Backend         | UX     | Docs      |
----------------------------------------
```

JavaScript may be used for interactive behavior.

### Remember

```text
Mega menu
→ Large navigation panel
→ Multiple categories
→ Multiple groups of links
```

---

## 52. How do you create sticky navigation markup?

### Code

```html
<header class="site-header">

  <nav aria-label="Main navigation">

    <a href="/">
      My Website
    </a>

    <ul>

      <li>
        <a href="/about">
          About
        </a>
      </li>

      <li>
        <a href="/services">
          Services
        </a>
      </li>

      <li>
        <a href="/contact">
          Contact
        </a>
      </li>

    </ul>

  </nav>

</header>

<main>

  <section>
    <h1>Welcome</h1>
    <p>Page content.</p>
  </section>

</main>
```

### CSS

```css
.site-header {
  position: sticky;
  top: 0;
}
```

### Explanation

Sticky navigation means the navigation remains visible as the user scrolls after reaching a specified position.

The important CSS is:

```css
position: sticky;
top: 0;
```

HTML itself does not make navigation sticky.

HTML provides the structure:

```html
<header>
  <nav>
    ...
  </nav>
</header>
```

CSS controls the sticky behavior.

### Remember

```text
HTML
→ Navigation structure

CSS
→ Sticky behavior
```

---

## 53. How do you create a sitemap page?

### Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>Sitemap</title>

  </head>

  <body>

    <header>

      <h1>Sitemap</h1>

    </header>

    <main>

      <section>

        <h2>Main Pages</h2>

        <ul>

          <li>
            <a href="/">
              Home
            </a>
          </li>

          <li>
            <a href="/about">
              About
            </a>
          </li>

          <li>
            <a href="/services">
              Services
            </a>
          </li>

          <li>
            <a href="/contact">
              Contact
            </a>
          </li>

        </ul>

      </section>

      <section>

        <h2>Resources</h2>

        <ul>

          <li>
            <a href="/blog">
              Blog
            </a>
          </li>

          <li>
            <a href="/docs">
              Documentation
            </a>
          </li>

        </ul>

      </section>

    </main>

    <footer>

      <p>
        &copy; 2026 My Website
      </p>

    </footer>

  </body>

</html>
```

### Explanation

A sitemap page is a human-readable page that organizes important links on a website.

For example:

```text
Sitemap
├── Main Pages
│   ├── Home
│   ├── About
│   ├── Services
│   └── Contact
│
└── Resources
    ├── Blog
    └── Documentation
```

### Important

A **HTML sitemap page** is different from an **XML sitemap**.

HTML sitemap:

```text
Designed for website visitors
```

XML sitemap:

```text
Designed primarily for search engines
```

### Remember

```text
HTML sitemap
→ Human-readable page

XML sitemap
→ Machine-readable sitemap
```

---

## 54. How do you create pagination markup?

### Code

```html
<nav aria-label="Pagination">

  <ul>

    <li>
      <a href="/articles?page=1">
        1
      </a>
    </li>

    <li>
      <a
        href="/articles?page=2"
        aria-current="page">
        2
      </a>
    </li>

    <li>
      <a href="/articles?page=3">
        3
      </a>
    </li>

    <li>
      <a href="/articles?page=4">
        4
      </a>
    </li>

    <li>
      <a href="/articles?page=3">
        Next
      </a>
    </li>

  </ul>

</nav>
```

### Explanation

Pagination allows users to move through multiple pages of content.

For example:

```text
Previous
1
2
3
4
5
Next
```

The current page should be communicated.

A useful attribute is:

```html
aria-current="page"
```

Example:

```html
<a
  href="/articles?page=2"
  aria-current="page">
  2
</a>
```

This tells assistive technologies that page 2 is the current page.

### Why use `<nav>`?

Pagination is navigation, so:

```html
<nav aria-label="Pagination">
```

makes its purpose clear.

### Remember

```text
Pagination
→ <nav>
   → <ul>
      → <li>
         → <a>
```

Current page:

```text
aria-current="page"
```

---

## 55. How do you create Previous/Next navigation?

### Code

```html
<nav aria-label="Article navigation">

  <ul>

    <li>
      <a href="/articles/html-basics">
        ← Previous:
        HTML Basics
      </a>
    </li>

    <li>
      <a href="/articles/css-basics">
        Next:
        CSS Basics →
      </a>
    </li>

  </ul>

</nav>
```

### Explanation

Previous/Next navigation allows users to move sequentially between related pages.

For example:

```text
Article 1
   ↓
Article 2
   ↓
Article 3
```

On Article 2:

```text
Previous → Article 1
Next     → Article 3
```

The links should clearly identify where they lead.

This is better:

```html
<a href="/article-1">
  Previous: Introduction to HTML
</a>
```

than:

```html
<a href="/article-1">
  Click here
</a>
```

because the destination is obvious from the link text.

### If there is no previous or next page

Don't create a fake disabled `<a>`.

For example, on the first article:

```html
<nav aria-label="Article navigation">

  <a href="/article-2">
    Next: CSS Basics
  </a>

</nav>
```

### Remember

```text
Previous/Next
→ Sequential navigation

<a>
→ Actual destination

Clear link text
→ Better usability and accessibility
```

# Final Revision

```text
46. Sidebar navigation
    → <aside> + <nav>

47. Footer navigation
    → <footer> + <nav>

48. Social media links
    → External <a> links

49. Navigation with icons
    → Icon + accessible text/label

50. Responsive navigation
    → Semantic nav + responsive CSS
    → Button can control mobile menu

51. Mega menu
    → Large navigation
    → Multiple categories/groups

52. Sticky navigation
    → HTML structure + CSS position: sticky

53. Sitemap page
    → Human-readable page containing important links

54. Pagination
    → Navigation between pages
    → aria-current="page" for current page

55. Previous/Next
    → Sequential navigation between related pages
```

# Master Memory Trick

```text
Sidebar
→ ASIDE

Footer
→ FOOTER

Social
→ EXTERNAL LINKS

Icons
→ ICON + ACCESSIBLE NAME

Responsive
→ NAV + BUTTON + CSS/JS

Mega menu
→ NAV + CATEGORIES + NESTED LINKS

Sticky
→ position: sticky

Sitemap
→ ALL IMPORTANT PAGES

Pagination
→ PAGE 1 | 2 | 3 | 4

Previous/Next
→ ← Previous | Next →
```

# Module 4 – Lists (56–70)

## 56. How do you create an ordered list?

### Code

```html
<ol>
  <li>Install Node.js</li>
  <li>Create the project</li>
  <li>Install dependencies</li>
  <li>Start the development server</li>
</ol>
```

### Explanation

`<ol>` means **ordered list**.

The items have a meaningful order or sequence.

The individual items are written using:

```html
<li>
```

The browser normally displays numbers:

```text
1. Install Node.js
2. Create the project
3. Install dependencies
4. Start the development server
```

Use `<ol>` when changing the order would change the meaning.

Examples:

```text
Steps
Rankings
Instructions
Procedures
```

### Custom Starting Number

```html
<ol start="5">
  <li>Fifth item</li>
  <li>Sixth item</li>
</ol>
```

### Remember

```text
<ol>
→ Ordered list

<li>
→ List item
```

---

## 57. How do you create an unordered list?

### Code

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
</ul>
```

### Explanation

`<ul>` means **unordered list**.

The order of the items does not normally matter.

The browser commonly displays bullet points:

```text
• HTML
• CSS
• JavaScript
• React
```

Use `<ul>` for collections such as:

```text
Features
Navigation items
Shopping items
Categories
Skills
Options
```

### Remember

```text
<ul>
→ Unordered list

<ol>
→ Ordered list
```

---

## 58. How do you create a nested list?

### Code

```html
<ul>

  <li>
    Frontend

    <ul>

      <li>
        HTML
      </li>

      <li>
        CSS
      </li>

      <li>
        JavaScript
      </li>

    </ul>

  </li>

  <li>
    Backend

    <ul>

      <li>
        Node.js
      </li>

      <li>
        Express
      </li>

    </ul>

  </li>

</ul>
```

### Explanation

A nested list is a list inside another list item.

The structure is:

```text
Frontend
├── HTML
├── CSS
└── JavaScript

Backend
├── Node.js
└── Express
```

The important rule is:

```text
Nested <ul> or <ol>
→ Should be inside an <li>
```

Correct:

```html
<li>
  Frontend

  <ul>
    <li>HTML</li>
  </ul>
</li>
```

Avoid placing a nested list directly inside another `<ul>` without an `<li>`.

### Remember

```text
Nested list
→ <ul>/<ol>
   → <li>
      → <ul>/<ol>
         → <li>
```

---

## 59. How do you create a checklist?

### Code

```html
<ul>

  <li>
    <label>
      <input type="checkbox">
      Learn HTML
    </label>
  </li>

  <li>
    <label>
      <input type="checkbox" checked>
      Learn CSS
    </label>
  </li>

  <li>
    <label>
      <input type="checkbox">
      Learn JavaScript
    </label>
  </li>

</ul>
```

### Explanation

A checklist can be created using:

```text
<ul>
→ List

<li>
→ Individual item

<input type="checkbox">
→ Checkbox

<label>
→ Describes the checkbox
```

The `checked` attribute makes a checkbox checked by default.

Example:

```html
<input
  type="checkbox"
  checked>
```

### Important

The label should be associated with the input.

Wrapping the input inside the label is one simple method:

```html
<label>
  <input type="checkbox">
  Learn HTML
</label>
```

### Remember

```text
Checklist
→ <ul>
   → <li>
      → <label>
         → checkbox
```

---

## 60. How do you create an FAQ list?

### Code

```html
<section>

  <h2>Frequently Asked Questions</h2>

  <details>

    <summary>
      What is HTML?
    </summary>

    <p>
      HTML is the standard markup language
      used to structure web pages.
    </p>

  </details>

  <details>

    <summary>
      What is CSS?
    </summary>

    <p>
      CSS is used to style and lay out web pages.
    </p>

  </details>

  <details>

    <summary>
      What is JavaScript?
    </summary>

    <p>
      JavaScript is a programming language
      commonly used to add behavior to web pages.
    </p>

  </details>

</section>
```

### Explanation

The semantic HTML pattern for a simple expandable FAQ is:

```text
<details>
→ Expandable section

<summary>
→ Visible question/title
```

Clicking the `<summary>` opens or closes the `<details>` element.

Example:

```html
<details>
  <summary>
    What is CSS?
  </summary>

  <p>
    CSS styles web pages.
  </p>
</details>
```

No JavaScript is required for this basic behavior.

### Remember

```text
FAQ
→ <details>
   → <summary>
      → Answer
```

---

## 61. How do you create a recipe ingredients list?

### Code

```html
<section>

  <h2>Chocolate Cake</h2>

  <h3>Ingredients</h3>

  <ul>

    <li>2 cups flour</li>
    <li>1 cup sugar</li>
    <li>1/2 cup cocoa powder</li>
    <li>2 eggs</li>
    <li>1 cup milk</li>

  </ul>

</section>
```

### Explanation

Recipe ingredients are normally represented using an unordered list because the ingredients do not have to be used in a specific sequence.

```text
Ingredients
→ <ul>

Ingredient
→ <li>
```

For the preparation instructions, an ordered list is more appropriate:

```html
<h3>Instructions</h3>

<ol>
  <li>Mix the dry ingredients.</li>
  <li>Add the wet ingredients.</li>
  <li>Pour into a baking pan.</li>
  <li>Bake until done.</li>
</ol>
```

### Remember

```text
Ingredients
→ <ul>

Instructions
→ <ol>
```

---

## 62. How do you create a shopping list?

### Code

```html
<h2>Shopping List</h2>

<ul>

  <li>Milk</li>
  <li>Rice</li>
  <li>Vegetables</li>
  <li>Eggs</li>
  <li>Fruits</li>

</ul>
```

### Explanation

A shopping list normally uses an unordered list because the order of items does not matter.

If the items are grouped into categories:

```html
<h2>Shopping List</h2>

<h3>Vegetables</h3>

<ul>
  <li>Potatoes</li>
  <li>Tomatoes</li>
  <li>Onions</li>
</ul>

<h3>Fruits</h3>

<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>
```

### Remember

```text
Shopping list
→ Usually <ul>
```

---

## 63. How do you create a task list?

### Code

```html
<section>

  <h2>Today's Tasks</h2>

  <ul>

    <li>
      <label>
        <input type="checkbox" checked>
        Complete HTML practice
      </label>
    </li>

    <li>
      <label>
        <input type="checkbox">
        Study CSS
      </label>
    </li>

    <li>
      <label>
        <input type="checkbox">
        Practice JavaScript
      </label>
    </li>

  </ul>

</section>
```

### Explanation

A task list is similar to a checklist.

Each task can contain a checkbox:

```html
<input type="checkbox">
```

The label describes the task.

For an application where tasks can be added, removed, reordered, or persisted, JavaScript would control the behavior.

HTML provides the basic structure.

### Remember

```text
Task list
→ List of tasks
→ Checkbox for completion
→ Label for task description
```

---

## 64. How do you create a category list?

### Code

```html
<section>

  <h2>Categories</h2>

  <ul>

    <li>
      <a href="/category/technology">
        Technology
      </a>
    </li>

    <li>
      <a href="/category/design">
        Design
      </a>
    </li>

    <li>
      <a href="/category/business">
        Business
      </a>
    </li>

    <li>
      <a href="/category/tutorials">
        Tutorials
      </a>
    </li>

  </ul>

</section>
```

### Explanation

A category list is generally an unordered list because the categories don't have a required sequence.

If the categories are navigation links, use anchors:

```html
<li>
  <a href="/category/design">
    Design
  </a>
</li>
```

This makes the category item clickable.

### Remember

```text
Categories
→ <ul>

Clickable category
→ <li> + <a>
```

---

## 65. How do you create a timeline?

### Code

```html
<section>

  <h2>My Career Timeline</h2>

  <ol>

    <li>
      <time datetime="2022">
        2022
      </time>

      <h3>Started Learning Web Development</h3>

      <p>
        Began learning HTML, CSS, and JavaScript.
      </p>
    </li>

    <li>
      <time datetime="2024">
        2024
      </time>

      <h3>Started Building Projects</h3>

      <p>
        Built frontend and full-stack projects.
      </p>
    </li>

    <li>
      <time datetime="2026">
        2026
      </time>

      <h3>Focused on Software Engineering</h3>

      <p>
        Started focusing on deeper engineering skills.
      </p>
    </li>

  </ol>

</section>
```

### Explanation

A timeline represents events in a sequence.

An ordered list is often appropriate because the events have a meaningful order.

The structure is:

```text
2022
 ↓
2024
 ↓
2026
```

The `<time>` element gives the date semantic meaning.

### Remember

```text
Timeline
→ Ordered sequence
→ Often <ol>
→ Use <time> for dates
```

---

## 66. How do you create a feature list?

### Code

```html
<section>

  <h2>Why Choose Our Product?</h2>

  <ul>

    <li>
      <strong>Fast Performance</strong>
      <p>
        Optimized for fast loading and smooth interaction.
      </p>
    </li>

    <li>
      <strong>Responsive Design</strong>
      <p>
        Works across mobile, tablet, and desktop devices.
      </p>
    </li>

    <li>
      <strong>Easy to Use</strong>
      <p>
        Designed with a simple and intuitive interface.
      </p>
    </li>

  </ul>

</section>
```

### Explanation

A feature list presents the important features of a product, service, or application.

Usually:

```text
<ul>
→ Features don't have a required order

<li>
→ Individual feature

<strong>
→ Feature name

<p>
→ Feature description
```

### Remember

```text
Feature list
→ <ul>
   → <li>
      → Feature title + description
```

---

## 67. How do you create a pricing features list?

### Code

```html
<section>

  <h2>Pro Plan</h2>

  <p>
    <strong>$19/month</strong>
  </p>

  <ul>

    <li>
      Unlimited projects
    </li>

    <li>
      Advanced analytics
    </li>

    <li>
      Priority support
    </li>

    <li>
      Team collaboration
    </li>

  </ul>

  <a href="/signup">
    Choose Pro
  </a>

</section>
```

### Explanation

A pricing feature list shows what is included in a particular pricing plan.

A typical structure is:

```text
Plan name
Price
Features
Call-to-action
```

For multiple plans:

```html
<section>

  <article>
    <h2>Basic</h2>
    ...
  </article>

  <article>
    <h2>Pro</h2>
    ...
  </article>

  <article>
    <h2>Enterprise</h2>
    ...
  </article>

</section>
```

Each plan can be represented as an independent `<article>` when appropriate.

### Remember

```text
Pricing plan
→ Name
→ Price
→ Feature list
→ Action
```

---

## 68. How do you create a documentation sidebar?

### Code

```html
<aside>

  <nav aria-label="Documentation">

    <h2>Documentation</h2>

    <ul>

      <li>
        <a href="/docs/getting-started">
          Getting Started
        </a>
      </li>

      <li>

        <span>
          HTML
        </span>

        <ul>

          <li>
            <a href="/docs/html/elements">
              Elements
            </a>
          </li>

          <li>
            <a href="/docs/html/attributes">
              Attributes
            </a>
          </li>

        </ul>

      </li>

      <li>

        <span>
          CSS
        </span>

        <ul>

          <li>
            <a href="/docs/css/selectors">
              Selectors
            </a>
          </li>

          <li>
            <a href="/docs/css/layout">
              Layout
            </a>
          </li>

        </ul>

      </li>

    </ul>

  </nav>

</aside>
```

### Explanation

Documentation sidebars often contain hierarchical navigation.

Example:

```text
Documentation
├── Getting Started
├── HTML
│   ├── Elements
│   └── Attributes
└── CSS
    ├── Selectors
    └── Layout
```

Nested lists represent the hierarchy.

The navigation can be placed inside `<aside>` when it is complementary to the main documentation content.

### Important

If a heading such as `HTML` is itself a destination, use a link:

```html
<a href="/docs/html">
  HTML
</a>
```

If it is only a category label, a non-link element such as `<span>` may be appropriate.

### Remember

```text
Documentation sidebar
→ <aside>
   → <nav>
      → Nested lists
```

---

## 69. How do you create a tree structure?

### Code

```html
<ul>

  <li>
    Frontend

    <ul>

      <li>
        HTML

        <ul>

          <li>
            Elements
          </li>

          <li>
            Attributes
          </li>

        </ul>

      </li>

      <li>
        CSS

        <ul>

          <li>
            Selectors
          </li>

          <li>
            Layout
          </li>

        </ul>

      </li>

    </ul>

  </li>

  <li>
    Backend

    <ul>

      <li>
        Node.js
      </li>

      <li>
        Databases
      </li>

    </ul>

  </li>

</ul>
```

### Explanation

A tree structure represents hierarchical relationships.

The structure above is:

```text
Frontend
├── HTML
│   ├── Elements
│   └── Attributes
│
└── CSS
    ├── Selectors
    └── Layout

Backend
├── Node.js
└── Databases
```

Nested lists naturally represent hierarchical data.

For simple static trees, HTML lists are enough.

For interactive trees, JavaScript and additional accessibility behavior may be required.

### Remember

```text
Tree
→ Parent
   → Child
      → Grandchild
```

---

## 70. How do you choose between <ul>, <ol>, and <dl>?

### Code

```html
<!-- Unordered list -->

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>


<!-- Ordered list -->

<ol>
  <li>Open the project</li>
  <li>Install dependencies</li>
  <li>Start the server</li>
</ol>


<!-- Description list -->

<dl>

  <dt>HTML</dt>
  <dd>Structures web pages.</dd>

  <dt>CSS</dt>
  <dd>Styles web pages.</dd>

  <dt>JavaScript</dt>
  <dd>Adds behavior to web pages.</dd>

</dl>
```

### Explanation

These three elements have different purposes.

### `<ul>`

Use `<ul>` when the order doesn't matter.

```text
<ul>
→ Unordered collection
```

Example:

```text
• HTML
• CSS
• JavaScript
```

### `<ol>`

Use `<ol>` when the order matters.

```text
<ol>
→ Ordered sequence
```

Example:

```text
1. Install
2. Configure
3. Run
```

### `<dl>`

Use `<dl>` for a list of **terms and descriptions**.

```text
<dl>
→ Description list

<dt>
→ Term

<dd>
→ Description
```

Example:

```html
<dl>

  <dt>HTML</dt>
  <dd>Markup language for structuring web pages.</dd>

  <dt>CSS</dt>
  <dd>Stylesheet language for presentation.</dd>

</dl>
```

### The Most Important Rule

Don't choose a list element based only on how the browser displays it.

Choose it based on the **meaning of the content**.

For example:

```text
Bullets
→ Usually <ul>

Numbered steps
→ <ol>

Term + explanation
→ <dl>
```

# Final Revision

```text
56. Ordered list
    → <ol>

57. Unordered list
    → <ul>

58. Nested list
    → <ul>/<ol> inside <li>

59. Checklist
    → <ul> + checkbox + <label>

60. FAQ list
    → <details> + <summary>

61. Recipe ingredients
    → Usually <ul>

62. Shopping list
    → Usually <ul>

63. Task list
    → <ul> + checkbox

64. Category list
    → <ul> + links when clickable

65. Timeline
    → Often <ol> + <time>

66. Feature list
    → <ul> + feature descriptions

67. Pricing features
    → Plan + price + <ul> + CTA

68. Documentation sidebar
    → <aside> + <nav> + nested lists

69. Tree structure
    → Nested lists

70. List selection
    → <ul> = unordered
    → <ol> = ordered
    → <dl> = terms/descriptions
```

# Master Memory Trick

```text
UL
↓
Order doesn't matter

OL
↓
Order matters

DL
↓
Term + Description

Nested
↓
List inside <li>

Checklist
↓
List + checkbox

FAQ
↓
<details> + <summary>

Timeline
↓
Usually OL + time

Documentation
↓
Nested navigation lists

Tree
↓
Parent → Child → Grandchild
```


# Module 5 – Images & Media (71–95)

## 71. Display an Image

### Code

```html
<img
  src="images/profile.jpg"
  alt="Profile photo">
```

### Explanation

The `<img>` element displays an image on a webpage.

Important attributes:

```text
src
→ Path or URL of the image

alt
→ Text alternative describing the image
```

Example:

```html
<img
  src="images/logo.png"
  alt="Company logo">
```

### Remember

```text
<img>
→ Display an image

src
→ Where is the image?

alt
→ What does the image represent?
```

---

## 72. Image with Caption

### Code

```html
<figure>

  <img
    src="images/mountain.jpg"
    alt="Snow-covered mountain">

  <figcaption>
    Snow-covered mountain during winter.
  </figcaption>

</figure>
```

### Explanation

Use `<figure>` when an image is a self-contained piece of content.

Use `<figcaption>` to provide a caption for it.

```text
<figure>
    ↓
Image + related content

<figcaption>
    ↓
Caption
```

### Remember

```text
<figure>
→ Groups the image and its caption

<figcaption>
→ Describes or captions the figure
```

---

## 73. Responsive Image

### Code

```html
<img
  src="images/photo.jpg"
  alt="Beach at sunset"
  width="1200"
  height="800"
  style="max-width: 100%; height: auto;">
```

### Explanation

A responsive image should adapt to the available space instead of overflowing its container.

A common CSS approach is:

```css
img {
  max-width: 100%;
  height: auto;
}
```

This means:

```text
max-width: 100%
→ Image cannot become wider than its container

height: auto
→ Preserve the original aspect ratio
```

### Better Practice

Specify intrinsic dimensions when possible:

```html
<img
  src="images/photo.jpg"
  alt="Beach at sunset"
  width="1200"
  height="800">
```

This gives the browser information about the image's dimensions and can help reduce layout shifts.

### Remember

```text
Responsive image
→ max-width: 100%
→ height: auto
→ Preserve aspect ratio
```

---

## 74. Picture Element

### Code

```html
<picture>

  <source
    media="(max-width: 600px)"
    srcset="images/mobile.jpg">

  <source
    media="(min-width: 601px)"
    srcset="images/desktop.jpg">

  <img
    src="images/desktop.jpg"
    alt="Mountain landscape">

</picture>
```

### Explanation

The `<picture>` element allows you to provide **different image sources for different conditions**.

For example:

```text
Small screen
→ mobile.jpg

Large screen
→ desktop.jpg
```

The `<img>` element inside `<picture>` is required as the fallback and provides the `alt` text.

### Common Uses

```text
Art direction
→ Different crop for mobile and desktop

Different formats
→ WebP / AVIF / JPEG fallback

Different image sources
→ Depending on browser or viewport
```

### Remember

```text
<picture>
→ Choose between different image sources

<source>
→ Provides an alternative source

<img>
→ Required fallback
```

---

## 75. SVG Image

### Code

```html
<img
  src="images/logo.svg"
  alt="Company logo">
```

### Explanation

SVG stands for **Scalable Vector Graphics**.

SVG images are vector-based, so they can scale to different sizes without becoming pixelated in the same way raster images can.

Example:

```text
PNG
→ Raster image

JPEG
→ Raster image

SVG
→ Vector graphics
```

SVG is commonly used for:

```text
Logos
Icons
Illustrations
Charts
Simple graphics
```

### Remember

```text
SVG
→ Vector
→ Scales well
→ Useful for logos and icons
```

---

## 76. Inline SVG

### Code

```html
<svg
  width="100"
  height="100"
  viewBox="0 0 100 100"
  aria-label="Blue circle">

  <circle
    cx="50"
    cy="50"
    r="40"
    fill="blue">
  </circle>

</svg>
```

### Explanation

An inline SVG is written directly inside the HTML document.

Unlike:

```html
<img src="logo.svg" alt="Logo">
```

the SVG markup itself exists in the HTML.

This allows CSS and JavaScript to interact directly with the SVG elements.

For a decorative inline SVG, you might use:

```html
<svg
  aria-hidden="true"
  viewBox="0 0 100 100">

  <circle
    cx="50"
    cy="50"
    r="40">
  </circle>

</svg>
```

### Important

If an SVG communicates meaningful information, it needs an accessible name or appropriate alternative.

### Remember

```text
External SVG
→ <img src="logo.svg">

Inline SVG
→ <svg>...</svg>
→ Directly part of HTML
```

---

## 77. Audio Player

### Code

```html
<audio controls>

  <source
    src="audio/podcast.mp3"
    type="audio/mpeg">

  <source
    src="audio/podcast.ogg"
    type="audio/ogg">

  Your browser does not support
  the audio element.

</audio>
```

### Explanation

The `<audio>` element embeds audio content.

The `controls` attribute displays the browser's audio controls.

```text
Play
Pause
Volume
Progress
```

The `<source>` elements provide different audio formats.

### Common Attributes

```text
controls
→ Show playback controls

autoplay
→ Attempt to start automatically

muted
→ Start muted

loop
→ Repeat playback
```

Example:

```html
<audio
  controls
  loop>

  <source
    src="audio/music.mp3"
    type="audio/mpeg">

</audio>
```

### Important

Autoplay can be restricted by browsers, especially when audio would play unexpectedly with sound.

### Remember

```text
<audio>
→ Audio player

controls
→ Show controls

<source>
→ Audio file source
```

---

# Final Revision

```text
71. Display Image
    → <img>
    → src + alt

72. Image with Caption
    → <figure>
    → <figcaption>

73. Responsive Image
    → max-width: 100%
    → height: auto

74. Picture Element
    → Different image sources
    → <source> + <img>

75. SVG Image
    → Vector image
    → Scales well

76. Inline SVG
    → <svg> directly in HTML
    → Can be styled/manipulated directly

77. Audio Player
    → <audio>
    → controls
    → <source>
```

# Master Memory Trick

```text
<img>
→ SHOW IMAGE

<figure> + <figcaption>
→ IMAGE + CAPTION

Responsive image
→ FIT SCREEN

<picture>
→ CHOOSE IMAGE

SVG
→ VECTOR

Inline SVG
→ SVG INSIDE HTML

<audio>
→ PLAY AUDIO
```

# Important Interview Comparison

```text
<img>
→ Display one image source

<picture>
→ Choose between multiple image sources

SVG as <img>
→ SVG treated as an external image

Inline <svg>
→ SVG markup is directly inside the document
→ Can be styled/manipulated as part of the document
```

## 78. Video Player

### Code

```html
<video
  controls
  width="640"
  height="360">

  <source
    src="videos/demo.mp4"
    type="video/mp4">

  Your browser does not support
  the video element.

</video>
```

### Explanation

The `<video>` element embeds video content in an HTML page.

The `controls` attribute displays the browser's built-in controls.

```text
controls
→ Play / pause / volume / seek

width
→ Video width

height
→ Video height
```

Common attributes:

```html
<video
  controls
  muted
  loop
  playsinline>
```

### Remember

```text
<video>
→ Video player

controls
→ Show controls

source
→ Video file
```

---

## 79. Multiple Video Sources

### Code

```html
<video controls>

  <source
    src="videos/movie.mp4"
    type="video/mp4">

  <source
    src="videos/movie.webm"
    type="video/webm">

  Your browser does not support
  the video element.

</video>
```

### Explanation

You can provide multiple `<source>` elements so the browser can choose a supported format.

The browser checks the sources in order.

```text
MP4
↓
Can I play this?
↓
Yes → Use it

No
↓
Try WebM
```

The `type` attribute tells the browser what format the source contains.

### Remember

```text
Multiple <source>
→ Browser chooses a supported source
```

---

## 80. Multiple Audio Sources

### Code

```html
<audio controls>

  <source
    src="audio/podcast.mp3"
    type="audio/mpeg">

  <source
    src="audio/podcast.ogg"
    type="audio/ogg">

  Your browser does not support
  the audio element.

</audio>
```

### Explanation

Multiple `<source>` elements can also be used with `<audio>`.

The browser checks the sources and uses one it can play.

```text
MP3
↓
Try it

Not supported
↓
Try OGG
```

### Remember

```text
<audio>
→ Audio player

Multiple <source>
→ Provide format alternatives
```

---

## 81. Add Subtitles

### Code

```html
<video controls>

  <source
    src="videos/lesson.mp4"
    type="video/mp4">

  <track
    kind="subtitles"
    src="captions/en.vtt"
    srclang="en"
    label="English"
    default>

</video>
```

### Explanation

The `<track>` element provides timed text for media.

For subtitles, use:

```html
<track
  kind="subtitles"
  src="captions/en.vtt"
  srclang="en"
  label="English">
```

The subtitle file commonly uses the **WebVTT (`.vtt`)** format.

Example:

```text
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to the course.

00:00:05.000 --> 00:00:08.000
Today we will learn HTML.
```

Important attributes:

```text
kind
→ Type of track

src
→ Track file

srclang
→ Language

label
→ Name shown to the user

default
→ Default track
```

### Remember

```text
<track>
→ Timed text

kind="subtitles"
→ Subtitles

.vtt
→ Common subtitle format
```

---

## 82. Lazy-Loaded Images

### Code

```html
<img
  src="images/product.jpg"
  alt="Blue running shoes"
  loading="lazy"
  width="800"
  height="600">
```

### Explanation

The `loading="lazy"` attribute tells the browser that the image can be loaded lazily.

Instead of loading every image immediately:

```text
Page loads
↓
Only images needed near the viewport
↓
Other images can load later
```

This can reduce unnecessary initial network work, especially on pages with many images.

### Important

Do not blindly lazy-load every image.

Images that are immediately visible, especially important hero or LCP images, generally should not be lazy-loaded.

For example:

```html
<img
  src="hero.jpg"
  alt="Mountain landscape"
  width="1600"
  height="900">
```

### Remember

```text
loading="lazy"
→ Delay loading when appropriate

Above-the-fold important image
→ Usually don't lazy-load it
```

---

## 83. Image Gallery Markup

### Code

```html
<section aria-labelledby="gallery-title">

  <h2 id="gallery-title">
    Travel Gallery
  </h2>

  <div class="gallery">

    <figure>
      <img
        src="images/mountain.jpg"
        alt="Snow-covered mountain"
        width="400"
        height="300">

      <figcaption>
        Mountain
      </figcaption>
    </figure>

    <figure>
      <img
        src="images/beach.jpg"
        alt="Tropical beach with palm trees"
        width="400"
        height="300">

      <figcaption>
        Beach
      </figcaption>
    </figure>

    <figure>
      <img
        src="images/forest.jpg"
        alt="Green forest surrounded by trees"
        width="400"
        height="300">

      <figcaption>
        Forest
      </figcaption>
    </figure>

  </div>

</section>
```

### Explanation

An image gallery is usually a collection of related images.

A semantic structure can use:

```text
<section>
→ Gallery section

<figure>
→ Individual image/content item

<img>
→ Image

<figcaption>
→ Caption
```

CSS can then create the visual grid.

### Remember

```text
Gallery
→ Section
→ Figure
→ Image
→ Caption
```

---

## 84. Hero Banner

### Code

```html
<section
  class="hero"
  aria-labelledby="hero-title">

  <img
    src="images/hero.jpg"
    alt=""
    width="1600"
    height="900">

  <div class="hero-content">

    <h1 id="hero-title">
      Build Better Websites
    </h1>

    <p>
      Create fast and accessible
      web experiences.
    </p>

    <a href="/projects">
      View Projects
    </a>

  </div>

</section>
```

### Explanation

A hero banner is usually the prominent introductory section at the top of a page.

It commonly contains:

```text
Heading
Description
Call-to-action
Image or visual
```

If the hero image is purely decorative and the important information is already provided by the heading and content, its `alt` can be empty:

```html
alt=""
```

If the image itself communicates important information, provide meaningful alternative text.

### Remember

```text
Hero
→ Main introductory section

Usually contains:
→ Heading
→ Supporting text
→ CTA
→ Visual
```

---

## 85. Product Image Gallery

### Code

```html
<section
  aria-labelledby="product-title">

  <h1 id="product-title">
    Classic Running Shoes
  </h1>

  <div class="product-gallery">

    <div class="main-image">

      <img
        src="images/shoe-main.jpg"
        alt="Classic running shoes viewed from the side"
        width="800"
        height="800">

    </div>

    <div
      class="thumbnail-gallery"
      aria-label="Product images">

      <button type="button">

        <img
          src="images/shoe-main.jpg"
          alt="Side view of running shoes"
          width="100"
          height="100">

      </button>

      <button type="button">

        <img
          src="images/shoe-top.jpg"
          alt="Top view of running shoes"
          width="100"
          height="100">

      </button>

      <button type="button">

        <img
          src="images/shoe-back.jpg"
          alt="Back view of running shoes"
          width="100"
          height="100">

      </button>

    </div>

  </div>

</section>
```

### Explanation

A product image gallery usually contains:

```text
Main product image
        ↓
Thumbnail images
        ↓
User selects a thumbnail
        ↓
Main image changes
```

The important accessibility point is that thumbnails that perform an action should generally be **buttons**, not just clickable images.

For example:

```html
<button type="button">
  <img
    src="shoe-top.jpg"
    alt="Top view of running shoes">
</button>
```

JavaScript can later update the main image when a thumbnail is selected.

### Remember

```text
Product Gallery
→ Main image
→ Thumbnail controls
→ Buttons for interaction
→ Meaningful alt text
```

---

# Final Revision

```text
78. Video Player
    → <video>
    → controls

79. Multiple Video Sources
    → Multiple <source>
    → Browser chooses supported source

80. Multiple Audio Sources
    → Multiple <source>
    → Browser chooses supported source

81. Add Subtitles
    → <track>
    → kind="subtitles"
    → .vtt file

82. Lazy-Loaded Images
    → loading="lazy"
    → Load later when appropriate

83. Image Gallery
    → section
    → figure
    → img
    → figcaption

84. Hero Banner
    → Main introductory section
    → Heading + content + CTA + visual

85. Product Image Gallery
    → Main image
    → Thumbnail buttons
    → Meaningful alt text
```

# Master Memory Trick

```text
VIDEO
→ <video>

MULTIPLE VIDEO FORMATS
→ <source>

AUDIO FORMATS
→ <source>

SUBTITLES
→ <track>

LAZY IMAGE
→ loading="lazy"

GALLERY
→ <figure>

HERO
→ Intro + CTA

PRODUCT GALLERY
→ Main image + thumbnail buttons
```




## 86. Avatar List

### Code

```html
<section aria-labelledby="members-title">

  <h2 id="members-title">
    Our Community
  </h2>

  <ul class="avatar-list">

    <li>
      <img
        src="images/alex.jpg"
        alt="Alex Johnson"
        width="64"
        height="64">
    </li>

    <li>
      <img
        src="images/sarah.jpg"
        alt="Sarah Williams"
        width="64"
        height="64">
    </li>

    <li>
      <img
        src="images/david.jpg"
        alt="David Smith"
        width="64"
        height="64">
    </li>

  </ul>

</section>
```

### Explanation

An avatar list displays multiple user profile images.

A semantic structure can use:

```text
<ul>
→ List of users

<li>
→ One user

<img>
→ User avatar
```

The `alt` text should identify the person when the avatar communicates their identity.

### Remember

```text
Avatar List
→ ul
→ li
→ img
```

---

## 87. Company Logo Section

### Code

```html
<section aria-labelledby="company-title">

  <h2 id="company-title">
    About Our Company
  </h2>

  <div class="company-logo">
    <img
      src="images/company-logo.svg"
      alt="Acme Technologies"
      width="180"
      height="60">
  </div>

  <p>
    We build modern digital products
    for growing businesses.
  </p>

</section>
```

### Explanation

A company logo section can introduce the brand together with supporting information.

The logo should have meaningful alternative text when it communicates the company's identity.

```html
alt="Acme Technologies"
```

If the company name is already clearly provided as text immediately next to the logo, the image may sometimes be treated as decorative:

```html
alt=""
```

### Remember

```text
Logo
→ <img>
→ Meaningful alt when needed
```

---

## 88. Client Logos

### Code

```html
<section aria-labelledby="clients-title">

  <h2 id="clients-title">
    Trusted by Leading Companies
  </h2>

  <ul class="client-logos">

    <li>
      <img
        src="images/client-1.svg"
        alt="Google"
        width="160"
        height="60">
    </li>

    <li>
      <img
        src="images/client-2.svg"
        alt="Microsoft"
        width="160"
        height="60">
    </li>

    <li>
      <img
        src="images/client-3.svg"
        alt="Adobe"
        width="160"
        height="60">
    </li>

  </ul>

</section>
```

### Explanation

Client logos are commonly displayed in a list or grid.

A semantic structure is:

```text
<section>
→ Client logo section

<ul>
→ Collection of clients

<li>
→ One client

<img>
→ Client logo
```

If the client name is already available as visible text, the image can be decorative:

```html
<img
  src="client.svg"
  alt="">
```

### Remember

```text
Client Logos
→ Section
→ List
→ Logo images
```

---

## 89. Team Member Cards

### Code

```html
<section aria-labelledby="team-title">

  <h2 id="team-title">
    Meet Our Team
  </h2>

  <div class="team-grid">

    <article class="team-card">

      <img
        src="images/utpanna.jpg"
        alt="Utpanna Pradhan"
        width="300"
        height="300">

      <h3>
        Utpanna Pradhan
      </h3>

      <p>
        Frontend Developer
      </p>

    </article>

    <article class="team-card">

      <img
        src="images/sarah.jpg"
        alt="Sarah Williams"
        width="300"
        height="300">

      <h3>
        Sarah Williams
      </h3>

      <p>
        Product Designer
      </p>

    </article>

  </div>

</section>
```

### Explanation

A team member card represents one person and their information.

`<article>` is useful when each card is an independent piece of content.

Typical content:

```text
Photo
Name
Role
Short description
Social links
```

### Remember

```text
Team Section
→ section

Team Member
→ article

Photo
→ img

Name
→ h3
```

---

## 90. Testimonial Cards

### Code

```html
<section aria-labelledby="testimonials-title">

  <h2 id="testimonials-title">
    What Our Clients Say
  </h2>

  <div class="testimonial-grid">

    <article class="testimonial">

      <blockquote>
        <p>
          The website was fast, clean,
          and easy to use.
        </p>
      </blockquote>

      <footer>
        <p>
          <strong>
            Priya Sharma
          </strong>
        </p>

        <p>
          Business Owner
        </p>
      </footer>

    </article>

    <article class="testimonial">

      <blockquote>
        <p>
          The team delivered exactly
          what we needed.
        </p>
      </blockquote>

      <footer>
        <p>
          <strong>
            Rahul Das
          </strong>
        </p>

        <p>
          Founder
        </p>
      </footer>

    </article>

  </div>

</section>
```

### Explanation

A testimonial card represents feedback from a customer or client.

The quotation itself can use:

```html
<blockquote>
```

The person providing the testimonial can be identified in the surrounding content.

A testimonial can contain:

```text
Quote
Name
Role
Company
Photo
```

### Remember

```text
Testimonial
→ blockquote
→ Person information
```

---

## 91. Feature Cards

### Code

```html
<section aria-labelledby="features-title">

  <h2 id="features-title">
    Our Features
  </h2>

  <div class="feature-grid">

    <article class="feature-card">

      <img
        src="icons/speed.svg"
        alt=""
        width="48"
        height="48">

      <h3>
        Fast Performance
      </h3>

      <p>
        Optimized pages that load quickly
        and provide a smooth experience.
      </p>

    </article>

    <article class="feature-card">

      <img
        src="icons/security.svg"
        alt=""
        width="48"
        height="48">

      <h3>
        Secure
      </h3>

      <p>
        Built with security and
        reliability in mind.
      </p>

    </article>

    <article class="feature-card">

      <img
        src="icons/responsive.svg"
        alt=""
        width="48"
        height="48">

      <h3>
        Responsive
      </h3>

      <p>
        Works across phones,
        tablets, and desktops.
      </p>

    </article>

  </div>

</section>
```

### Explanation

Feature cards highlight important benefits or capabilities of a product or service.

Each feature can be represented by an `<article>` when it is an independent item.

Typical structure:

```text
Icon
Heading
Description
```

If the icon is purely decorative, use:

```html
alt=""
```

because the heading already communicates the meaning.

### Remember

```text
Feature Card
→ Icon
→ Heading
→ Description
```

---

## 92. Portfolio Gallery

### Code

```html
<section aria-labelledby="portfolio-title">

  <h2 id="portfolio-title">
    Our Work
  </h2>

  <div class="portfolio-gallery">

    <article class="project">

      <a href="/projects/restaurant">

        <img
          src="images/restaurant.jpg"
          alt="Restaurant website project"
          width="800"
          height="600">

        <h3>
          Restaurant Website
        </h3>

      </a>

    </article>

    <article class="project">

      <a href="/projects/gym">

        <img
          src="images/gym.jpg"
          alt="Gym website project"
          width="800"
          height="600">

        <h3>
          Gym Website
        </h3>

      </a>

    </article>

  </div>

</section>
```

### Explanation

A portfolio gallery displays a collection of projects.

When each project links to a project page, use an `<a>` element.

```text
Portfolio
→ Section

Project
→ Article

Project navigation
→ Anchor

Project image
→ Image
```

### Remember

```text
Portfolio Gallery
→ Projects
→ Images
→ Links
```

---

## 93. Masonry-Ready Gallery Markup

### Code

```html
<section aria-labelledby="gallery-title">

  <h2 id="gallery-title">
    Photo Gallery
  </h2>

  <div class="masonry-gallery">

    <figure class="gallery-item">

      <img
        src="images/photo-1.jpg"
        alt="Mountain landscape"
        width="600"
        height="800">

      <figcaption>
        Mountain Landscape
      </figcaption>

    </figure>

    <figure class="gallery-item">

      <img
        src="images/photo-2.jpg"
        alt="Ocean coastline"
        width="800"
        height="600">

      <figcaption>
        Ocean Coastline
      </figcaption>

    </figure>

    <figure class="gallery-item">

      <img
        src="images/photo-3.jpg"
        alt="Forest path"
        width="600"
        height="900">

      <figcaption>
        Forest Path
      </figcaption>

    </figure>

  </div>

</section>
```

### Explanation

A masonry gallery displays images with different heights in a layout similar to a masonry wall.

The HTML should focus on the **content structure**.

CSS can later create the masonry-style layout.

For example:

```css
.masonry-gallery {
  columns: 3 250px;
  column-gap: 1rem;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}
```

The important idea is:

```text
HTML
→ Defines gallery content

CSS
→ Creates masonry layout
```

### Remember

```text
Masonry-ready
→ Semantic gallery markup
→ CSS controls the visual layout
```

---

## 94. Image Comparison Layout

### Code

```html
<section aria-labelledby="comparison-title">

  <h2 id="comparison-title">
    Before & After
  </h2>

  <div class="image-comparison">

    <figure>

      <img
        src="images/before.jpg"
        alt="Website before redesign"
        width="800"
        height="600">

      <figcaption>
        Before
      </figcaption>

    </figure>

    <figure>

      <img
        src="images/after.jpg"
        alt="Website after redesign"
        width="800"
        height="600">

      <figcaption>
        After
      </figcaption>

    </figure>

  </div>

</section>
```

### Explanation

An image comparison layout displays two related images so users can compare them.

Common examples:

```text
Before / After
Old design / New design
Original / Edited
Low resolution / High resolution
```

The HTML provides the content structure.

CSS can place the images:

```text
Side by side
```

or:

```text
One over another
```

For an interactive before/after slider, JavaScript can control how much of one image is revealed.

### Remember

```text
Image Comparison
→ Related images
→ Clear labels
→ Before / After
```

---

## 95. Responsive Media Section

### Code

```html
<section aria-labelledby="media-title">

  <div class="media-content">

    <div class="media-text">

      <h2 id="media-title">
        Build Better Experiences
      </h2>

      <p>
        Our platform helps businesses
        create modern digital experiences.
      </p>

      <a href="/learn-more">
        Learn More
      </a>

    </div>

    <div class="media-visual">

      <picture>

        <source
          media="(max-width: 600px)"
          srcset="images/mobile.jpg">

        <source
          media="(min-width: 601px)"
          srcset="images/desktop.jpg">

        <img
          src="images/desktop.jpg"
          alt="Team working together"
          width="1200"
          height="800">

      </picture>

    </div>

  </div>

</section>
```

### Explanation

A responsive media section combines:

```text
Text
+
Image / video / other media
```

The layout should adapt to different screen sizes.

For example:

```text
Desktop
→ Text | Image

Mobile
→ Text
→ Image
```

The `<picture>` element can also provide different image sources for different viewport conditions.

### Remember

```text
Responsive Media Section
→ Content
→ Media
→ Responsive layout
→ Appropriate image source
```

---

# Final Revision

```text
86. Avatar List
    → List of user avatars

87. Company Logo Section
    → Brand logo + company information

88. Client Logos
    → Collection of client/brand logos

89. Team Member Cards
    → Person + image + name + role

90. Testimonial Cards
    → blockquote + customer information

91. Feature Cards
    → Icon + heading + description

92. Portfolio Gallery
    → Project + image + link

93. Masonry Gallery
    → Gallery markup + CSS masonry layout

94. Image Comparison
    → Related images + clear labels

95. Responsive Media Section
    → Text + media + responsive layout
```

# Master Memory Trick

```text
AVATARS
→ PEOPLE

COMPANY LOGO
→ BRAND

CLIENT LOGOS
→ CLIENTS

TEAM CARDS
→ TEAM MEMBERS

TESTIMONIALS
→ CUSTOMER QUOTES

FEATURE CARDS
→ BENEFITS

PORTFOLIO
→ PROJECTS

MASONRY
→ VARIABLE HEIGHT IMAGES

COMPARISON
→ BEFORE / AFTER

RESPONSIVE MEDIA
→ CONTENT + MEDIA
```

# Interview Pattern to Remember

```text
<section>
    ↓
    Gives the section a purpose

<article>
    ↓
    Represents an independent item

<figure>
    ↓
    Groups media with related content

<img>
    ↓
    Displays the image

<figcaption>
    ↓
    Provides a caption

<a>
    ↓
    Navigates somewhere

<button>
    ↓
    Performs an action
```

The big lesson here is **HTML describes what the content is, while CSS decides how the collection looks**. Don't turn your HTML into a pile of `<div>` soup just because CSS will eventually make it pretty. Humans have suffered enough div soup.


# Module 6 – Tables (96–115)

## 96. Basic Table

### Code

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>

  <tr>
    <td>Rahul</td>
    <td>24</td>
    <td>Delhi</td>
  </tr>

  <tr>
    <td>Priya</td>
    <td>22</td>
    <td>Mumbai</td>
  </tr>
</table>
```

### Explanation

A `<table>` represents tabular data.

```text
<table>
→ Entire table

<tr>
→ Table row

<th>
→ Header cell

<td>
→ Data cell
```

### Remember

```text
table
→ rows
→ cells
```

---

## 97. Student Marks Table

### Code

```html
<table>
  <caption>
    Student Marks
  </caption>

  <thead>
    <tr>
      <th>Name</th>
      <th>Math</th>
      <th>Science</th>
      <th>English</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Rahul</td>
      <td>85</td>
      <td>90</td>
      <td>88</td>
    </tr>

    <tr>
      <td>Priya</td>
      <td>92</td>
      <td>89</td>
      <td>95</td>
    </tr>
  </tbody>
</table>
```

### Explanation

A student marks table contains structured relationships between students and their subjects.

Using `<thead>` and `<tbody>` makes the table structure clearer.

```text
<caption>
→ Table title

<thead>
→ Header rows

<tbody>
→ Main data rows
```

### Remember

```text
Student Marks
→ Student
→ Subject
→ Marks
```

---

## 98. Employee Table

### Code

```html
<table>
  <caption>
    Employee Directory
  </caption>

  <thead>
    <tr>
      <th>Employee ID</th>
      <th>Name</th>
      <th>Department</th>
      <th>Salary</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>EMP001</td>
      <td>Rahul Sharma</td>
      <td>Engineering</td>
      <td>₹80,000</td>
    </tr>

    <tr>
      <td>EMP002</td>
      <td>Priya Das</td>
      <td>Marketing</td>
      <td>₹70,000</td>
    </tr>
  </tbody>
</table>
```

### Explanation

An employee table represents structured information about employees.

Each row represents one employee.

```text
Row
→ One employee

Column
→ One attribute
```

### Remember

```text
Employee table
→ Each row = employee
→ Each column = employee information
```

---

## 99. Product Table

### Code

```html
<table>
  <caption>
    Product Inventory
  </caption>

  <thead>
    <tr>
      <th>Product</th>
      <th>Category</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Laptop</td>
      <td>Electronics</td>
      <td>₹60,000</td>
      <td>15</td>
    </tr>

    <tr>
      <td>Keyboard</td>
      <td>Accessories</td>
      <td>₹2,000</td>
      <td>40</td>
    </tr>
  </tbody>
</table>
```

### Explanation

A product table can display inventory or product information.

```text
Product
Category
Price
Stock
```

Each product gets its own row.

### Remember

```text
Product table
→ One product per row
```

---

## 100. Invoice Table

### Code

```html
<table>
  <caption>
    Invoice #1001
  </caption>

  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Laptop</td>
      <td>1</td>
      <td>₹60,000</td>
      <td>₹60,000</td>
    </tr>

    <tr>
      <td>Mouse</td>
      <td>2</td>
      <td>₹1,000</td>
      <td>₹2,000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th colspan="3">
        Grand Total
      </th>
      <td>
        ₹62,000
      </td>
    </tr>
  </tfoot>
</table>
```

### Explanation

An invoice table is useful for displaying purchased items and their totals.

The `<tfoot>` element is useful for summary information such as:

```text
Subtotal
Tax
Discount
Grand Total
```

### Remember

```text
<thead>
→ Column headings

<tbody>
→ Items

<tfoot>
→ Summary / totals
```

---

## 101. `rowspan` Example

### Code

```html
<table>
  <tr>
    <th>Department</th>
    <th>Employee</th>
    <th>Role</th>
  </tr>

  <tr>
    <td rowspan="2">
      Engineering
    </td>

    <td>
      Rahul
    </td>

    <td>
      Frontend Developer
    </td>
  </tr>

  <tr>
    <td>
      Priya
    </td>

    <td>
      Backend Developer
    </td>
  </tr>
</table>
```

### Explanation

`rowspan` makes a cell span across multiple rows.

```html
rowspan="2"
```

means the cell occupies two rows vertically.

Think:

```text
rowspan
→ Span rows
→ Vertical
```

### Remember

```text
rowspan = rows
```

---

## 102. `colspan` Example

### Code

```html
<table>
  <tr>
    <th colspan="3">
      Student Information
    </th>
  </tr>

  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Grade</th>
  </tr>

  <tr>
    <td>Rahul</td>
    <td>20</td>
    <td>A</td>
  </tr>
</table>
```

### Explanation

`colspan` makes a cell span across multiple columns.

```html
colspan="3"
```

means the cell occupies three columns horizontally.

Think:

```text
colspan
→ Span columns
→ Horizontal
```

### Remember

```text
colspan = columns
```

---

## 103. Accessible Table

### Code

```html
<table>
  <caption>
    Employee Salaries by Department
  </caption>

  <thead>
    <tr>
      <th scope="col">
        Employee
      </th>

      <th scope="col">
        Department
      </th>

      <th scope="col">
        Salary
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">
        Rahul Sharma
      </th>

      <td>
        Engineering
      </td>

      <td>
        ₹80,000
      </td>
    </tr>

    <tr>
      <th scope="row">
        Priya Das
      </th>

      <td>
        Marketing
      </td>

      <td>
        ₹70,000
      </td>
    </tr>
  </tbody>
</table>
```

### Explanation

An accessible table helps users, including screen-reader users, understand the relationship between headers and data.

Important elements:

```text
<caption>
→ Describes the table

<th>
→ Header cell

scope="col"
→ Header applies to a column

scope="row"
→ Header applies to a row
```

Notice that the employee name can be a row header:

```html
<th scope="row">
  Rahul Sharma
</th>
```

### Remember

```text
caption
→ What is this table?

scope="col"
→ This header describes a column

scope="row"
→ This header describes a row
```

---

## 104. Pricing Comparison Table

### Code

```html
<table>
  <caption>
    Pricing Plans
  </caption>

  <thead>
    <tr>
      <th scope="col">
        Feature
      </th>

      <th scope="col">
        Basic
      </th>

      <th scope="col">
        Pro
      </th>

      <th scope="col">
        Enterprise
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">
        Users
      </th>

      <td>5</td>
      <td>25</td>
      <td>Unlimited</td>
    </tr>

    <tr>
      <th scope="row">
        Storage
      </th>

      <td>10 GB</td>
      <td>100 GB</td>
      <td>1 TB</td>
    </tr>

    <tr>
      <th scope="row">
        Support
      </th>

      <td>Email</td>
      <td>Priority</td>
      <td>24/7</td>
    </tr>
  </tbody>
</table>
```

### Explanation

A pricing comparison table compares the same features across different plans.

The first column contains row headers:

```text
Users
Storage
Support
```

The other columns represent plans:

```text
Basic
Pro
Enterprise
```

### Remember

```text
Rows
→ Features

Columns
→ Plans
```

---

## 105. Tournament Table

### Code

```html
<table>
  <caption>
    Football Tournament Standings
  </caption>

  <thead>
    <tr>
      <th scope="col">
        Team
      </th>

      <th scope="col">
        Played
      </th>

      <th scope="col">
        Won
      </th>

      <th scope="col">
        Draw
      </th>

      <th scope="col">
        Lost
      </th>

      <th scope="col">
        Points
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">
        Tigers FC
      </th>

      <td>10</td>
      <td>7</td>
      <td>2</td>
      <td>1</td>
      <td>23</td>
    </tr>

    <tr>
      <th scope="row">
        Eagles FC
      </th>

      <td>10</td>
      <td>6</td>
      <td>3</td>
      <td>1</td>
      <td>21</td>
    </tr>

    <tr>
      <th scope="row">
        Lions FC
      </th>

      <td>10</td>
      <td>5</td>
      <td>2</td>
      <td>3</td>
      <td>17</td>
    </tr>
  </tbody>
</table>
```

### Explanation

A tournament table represents structured competition data.

Each row represents a team.

Each column represents a statistic.

```text
Team
→ Row

Played / Won / Draw / Lost / Points
→ Columns
```

The team name is a row header:

```html
<th scope="row">
  Tigers FC
</th>
```

This makes the relationship between the team and its statistics clearer.

### Remember

```text
Tournament table
→ One team per row
→ Statistics in columns
→ Team name can be row header
```

# Final Revision

```text
96. Basic Table
    → <table> + <tr> + <th> + <td>

97. Student Marks Table
    → Student + subjects + marks

98. Employee Table
    → Employee information

99. Product Table
    → Product + category + price + stock

100. Invoice Table
     → Items + quantities + prices + totals

101. rowspan
     → Cell spans multiple rows
     → Vertical

102. colspan
     → Cell spans multiple columns
     → Horizontal

103. Accessible Table
     → <caption> + <th> + scope

104. Pricing Comparison
     → Features in rows
     → Plans in columns

105. Tournament Table
     → Teams in rows
     → Statistics in columns
```

# Master Memory Trick

```text
<table>
→ Whole table

<tr>
→ Row

<th>
→ Header

<td>
→ Data

<caption>
→ Table description

<thead>
→ Header section

<tbody>
→ Main data

<tfoot>
→ Summary

rowspan
→ Rows → Vertical

colspan
→ Columns → Horizontal

scope="col"
→ Header describes column

scope="row"
→ Header describes row
```

# Important Interview Rule

```text
Use <table> for TABULAR DATA.

Do NOT use tables to create page layouts.

Table
→ Data relationships

CSS Grid / Flexbox
→ Page and component layout
```

That distinction matters. HTML is supposed to describe the meaning of the content, not recreate 1998's web design choices out of sheer nostalgia.





# Module 6 – Tables (96–115)

## 106. Attendance Sheet

### Code

```html
<table>
  <caption>
    Student Attendance - August 2026
  </caption>

  <thead>
    <tr>
      <th scope="col">Student</th>
      <th scope="col">August 10</th>
      <th scope="col">August 11</th>
      <th scope="col">August 12</th>
      <th scope="col">August 13</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Rahul</th>
      <td>Present</td>
      <td>Present</td>
      <td>Absent</td>
      <td>Present</td>
    </tr>

    <tr>
      <th scope="row">Priya</th>
      <td>Present</td>
      <td>Absent</td>
      <td>Present</td>
      <td>Present</td>
    </tr>
  </tbody>
</table>
```

### Explanation

An attendance table records whether students were present or absent on particular dates.

```text
Rows
→ Students

Columns
→ Dates

Cells
→ Attendance status
```

Using `scope="row"` makes each student's name a row header.

### Remember

```text
Attendance
→ Students in rows
→ Dates in columns
```

---

## 107. Timetable

### Code

```html
<table>
  <caption>
    Weekly Class Timetable
  </caption>

  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Monday</th>
      <th scope="col">Tuesday</th>
      <th scope="col">Wednesday</th>
      <th scope="col">Thursday</th>
      <th scope="col">Friday</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">9:00 AM</th>
      <td>Math</td>
      <td>Science</td>
      <td>English</td>
      <td>Math</td>
      <td>History</td>
    </tr>

    <tr>
      <th scope="row">10:00 AM</th>
      <td>English</td>
      <td>Math</td>
      <td>Science</td>
      <td>History</td>
      <td>Computer</td>
    </tr>
  </tbody>
</table>
```

### Explanation

A timetable maps activities to time periods.

```text
Rows
→ Time slots

Columns
→ Days

Cells
→ Scheduled activity
```

### Remember

```text
Timetable
→ Time + Day + Activity
```

---

## 108. Calendar Table

### Code

```html
<table>
  <caption>
    August 2026
  </caption>

  <thead>
    <tr>
      <th scope="col">Sun</th>
      <th scope="col">Mon</th>
      <th scope="col">Tue</th>
      <th scope="col">Wed</th>
      <th scope="col">Thu</th>
      <th scope="col">Fri</th>
      <th scope="col">Sat</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>2</td>
    </tr>

    <tr>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>

    <tr>
      <td>10</td>
      <td>11</td>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
      <td>16</td>
    </tr>
  </tbody>
</table>
```

### Explanation

A calendar can be represented as a table because the data has a clear relationship between:

```text
Rows
→ Weeks

Columns
→ Days of the week

Cells
→ Dates
```

### Important

A calendar used for **date selection or interaction** may require additional accessibility and interactive behavior. A simple table is only the structural starting point.

### Remember

```text
Calendar
→ Week rows
→ Day columns
→ Date cells
```

---

## 109. Monthly Expense Table

### Code

```html
<table>
  <caption>
    Monthly Expenses - August 2026
  </caption>

  <thead>
    <tr>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
      <th scope="col">Payment Method</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Rent</th>
      <td>₹12,000</td>
      <td>Bank Transfer</td>
    </tr>

    <tr>
      <th scope="row">Food</th>
      <td>₹5,000</td>
      <td>UPI</td>
    </tr>

    <tr>
      <th scope="row">Transport</th>
      <td>₹2,000</td>
      <td>Card</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>₹19,000</td>
      <td></td>
    </tr>
  </tfoot>
</table>
```

### Explanation

An expense table organizes spending by category.

```text
Rows
→ Expense categories

Columns
→ Expense details

<tfoot>
→ Total
```

### Remember

```text
Expense table
→ Category
→ Amount
→ Payment method
→ Total
```

---

## 110. Financial Report

### Code

```html
<table>
  <caption>
    Annual Financial Report
  </caption>

  <thead>
    <tr>
      <th scope="col">Year</th>
      <th scope="col">Revenue</th>
      <th scope="col">Expenses</th>
      <th scope="col">Profit</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">2024</th>
      <td>₹50,00,000</td>
      <td>₹35,00,000</td>
      <td>₹15,00,000</td>
    </tr>

    <tr>
      <th scope="row">2025</th>
      <td>₹65,00,000</td>
      <td>₹42,00,000</td>
      <td>₹23,00,000</td>
    </tr>

    <tr>
      <th scope="row">2026</th>
      <td>₹80,00,000</td>
      <td>₹50,00,000</td>
      <td>₹30,00,000</td>
    </tr>
  </tbody>
</table>
```

### Explanation

A financial report contains related financial values organized into rows and columns.

```text
Rows
→ Years

Columns
→ Financial metrics
```

The important HTML concept is not the money itself. It is the **relationship between the data**.

### Remember

```text
Financial report
→ Structured numerical data
→ Rows + columns
```

---

## 111. Sales Dashboard Table

### Code

```html
<table>
  <caption>
    Sales Dashboard
  </caption>

  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Orders</th>
      <th scope="col">Units Sold</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Laptop</th>
      <td>120</td>
      <td>135</td>
      <td>₹81,00,000</td>
    </tr>

    <tr>
      <th scope="row">Keyboard</th>
      <td>250</td>
      <td>300</td>
      <td>₹6,00,000</td>
    </tr>

    <tr>
      <th scope="row">Mouse</th>
      <td>320</td>
      <td>350</td>
      <td>₹3,50,000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>690</td>
      <td>785</td>
      <td>₹90,50,000</td>
    </tr>
  </tfoot>
</table>
```

### Explanation

A sales dashboard table displays business metrics in a structured form.

```text
Product
→ Row

Orders
→ Number of orders

Units Sold
→ Quantity sold

Revenue
→ Money generated
```

### Remember

```text
Dashboard table
→ Metrics in columns
→ Items in rows
```

---

## 112. Leaderboard

### Code

```html
<table>
  <caption>
    Coding Competition Leaderboard
  </caption>

  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Participant</th>
      <th scope="col">Score</th>
      <th scope="col">Problems Solved</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rahul</td>
      <td>980</td>
      <td>48</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Priya</td>
      <td>940</td>
      <td>45</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Arjun</td>
      <td>900</td>
      <td>42</td>
    </tr>
  </tbody>
</table>
```

### Explanation

A leaderboard ranks participants based on scores or another metric.

```text
Rows
→ Participants

Columns
→ Rank and performance data
```

### Remember

```text
Leaderboard
→ Rank
→ Participant
→ Score
→ Performance
```

---

## 113. Responsive-Ready Table

### Code

```html
<div class="table-wrapper">

  <table>
    <caption>
      Employee Directory
    </caption>

    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Department</th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
        <th scope="col">Location</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">Rahul Sharma</th>
        <td>Engineering</td>
        <td>Frontend Developer</td>
        <td>rahul@example.com</td>
        <td>Delhi</td>
      </tr>

      <tr>
        <th scope="row">Priya Das</th>
        <td>Design</td>
        <td>UI Designer</td>
        <td>priya@example.com</td>
        <td>Mumbai</td>
      </tr>
    </tbody>
  </table>

</div>
```

### CSS

```css
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 700px;
}
```

### Explanation

Large tables can overflow on small screens.

A common approach is to wrap the table in a container:

```css
overflow-x: auto;
```

On a small screen, the user can scroll horizontally instead of the entire page becoming awkwardly wider.

```text
Desktop
→ Full table

Mobile
→ Horizontal table scrolling
```

### Important

Do not destroy meaningful table relationships simply to make the table look mobile-friendly.

### Remember

```text
Responsive table
→ Wrapper
→ overflow-x: auto
→ Preserve table structure
```

---

## 114. Nested Table

### Code

```html
<table>
  <caption>
    Departments and Employees
  </caption>

  <thead>
    <tr>
      <th scope="col">Department</th>
      <th scope="col">Employees</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Engineering</th>

      <td>

        <table>
          <caption>
            Engineering Employees
          </caption>

          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul</td>
              <td>Frontend Developer</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>Backend Developer</td>
            </tr>
          </tbody>
        </table>

      </td>
    </tr>
  </tbody>
</table>
```

### Explanation

A nested table means a `<table>` exists inside another table cell.

```text
Outer table
    ↓
<td>
    ↓
Inner table
```

Nested tables are technically possible, but they should generally be avoided when another semantic structure can represent the relationship more clearly.

They can make:

```text
Accessibility
Styling
Responsive behavior
Maintenance
```

more complicated.

### Remember

```text
Nested table
→ Table inside a table cell

Possible
→ Yes

Preferred
→ Usually no, unless the data genuinely requires it
```

---

## 115. Complex Data Table

### Code

```html
<table>
  <caption>
    Quarterly Department Performance
  </caption>

  <thead>
    <tr>
      <th rowspan="2" scope="col">Department</th>

      <th colspan="2" scope="colgroup">
        Q1
      </th>

      <th colspan="2" scope="colgroup">
        Q2
      </th>
    </tr>

    <tr>
      <th scope="col">Revenue</th>
      <th scope="col">Expenses</th>
      <th scope="col">Revenue</th>
      <th scope="col">Expenses</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Engineering</th>

      <td>₹20,00,000</td>
      <td>₹12,00,000</td>
      <td>₹25,00,000</td>
      <td>₹14,00,000</td>
    </tr>

    <tr>
      <th scope="row">Marketing</th>

      <td>₹15,00,000</td>
      <td>₹9,00,000</td>
      <td>₹18,00,000</td>
      <td>₹10,00,000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th scope="row">Total</th>

      <td>₹35,00,000</td>
      <td>₹21,00,000</td>
      <td>₹43,00,000</td>
      <td>₹24,00,000</td>
    </tr>
  </tfoot>
</table>
```

### Explanation

A complex data table contains multiple levels of headers.

Here:

```text
Q1
→ Revenue
→ Expenses

Q2
→ Revenue
→ Expenses
```

`colspan` groups columns horizontally:

```html
<th colspan="2" scope="colgroup">
  Q1
</th>
```

`rowspan` makes the Department header span both header rows:

```html
<th rowspan="2" scope="col">
  Department
</th>
```

### Important

For complex real-world tables, `scope` may not always be enough to express every header-to-data relationship. More advanced tables can use `id` and `headers` attributes to explicitly associate data cells with their relevant header cells.

Example:

```html
<th id="q1-revenue">
  Q1 Revenue
</th>

<td headers="engineering q1-revenue">
  ₹20,00,000
</td>
```

### Remember

```text
Complex table
→ Multiple header levels

rowspan
→ Header spans rows

colspan
→ Header spans columns

scope
→ Describes header relationship

id + headers
→ Explicit header/data association
```

# Final Revision

```text
106. Attendance Sheet
     → Students + dates + attendance

107. Timetable
     → Time + days + activities

108. Calendar
     → Weeks + days + dates

109. Monthly Expense Table
     → Categories + amounts + total

110. Financial Report
     → Financial metrics

111. Sales Dashboard
     → Sales metrics

112. Leaderboard
     → Rank + participants + scores

113. Responsive-Ready Table
     → Wrapper + horizontal scrolling

114. Nested Table
     → Table inside another table

115. Complex Data Table
     → Multiple header levels
     → rowspan + colspan + scope
```

# Master Memory Trick

```text
Attendance
→ Student × Date

Timetable
→ Time × Day

Calendar
→ Week × Day

Expenses
→ Category × Amount

Financial Report
→ Year × Metrics

Sales Dashboard
→ Product × Metrics

Leaderboard
→ Rank × Participant

Responsive Table
→ Table + Scroll Wrapper

Nested Table
→ Table inside Table

Complex Table
→ Multiple Header Levels
```

# Interview Rule

```text
Use a table when the information has
a meaningful ROW ↔ COLUMN relationship.

Do not use <table> just because you
want things to appear in rows and columns.

Data relationship
→ <table>

Page/component layout
→ CSS Grid / Flexbox
```

This is the point where HTML tables stop being "make some boxes line up" and start being about **relationships between data**. That's the part interviewers actually care about.

# Module 7 – Forms (116–160)

## 116. Login Form

### Code

```html
<form action="/login" method="post">

  <h2>Login</h2>

  <div>
    <label for="email">Email:</label>

    <input
      type="email"
      id="email"
      name="email"
      autocomplete="username"
      required>
  </div>

  <div>
    <label for="password">Password:</label>

    <input
      type="password"
      id="password"
      name="password"
      autocomplete="current-password"
      required>
  </div>

  <button type="submit">
    Login
  </button>

</form>
```

### Explanation

A login form collects credentials needed to authenticate a user.

Typical fields are:

```text
Email / Username
Password
Submit button
```

Important points:

```text
<label>
→ Describes the input

name
→ Identifies the submitted field

required
→ Prevents empty submission in native validation

autocomplete
→ Helps browsers and password managers

method="post"
→ Sends the form data using POST
```

### Remember

```text
Login
→ Identity + Password
→ Submit
```

---

## 117. Registration Form

### Code

```html
<form action="/register" method="post">

  <h2>Create Account</h2>

  <div>
    <label for="name">Full Name:</label>

    <input
      type="text"
      id="name"
      name="name"
      autocomplete="name"
      required>
  </div>

  <div>
    <label for="email">Email:</label>

    <input
      type="email"
      id="email"
      name="email"
      autocomplete="email"
      required>
  </div>

  <div>
    <label for="password">Password:</label>

    <input
      type="password"
      id="password"
      name="password"
      autocomplete="new-password"
      required>
  </div>

  <div>
    <label for="confirm-password">
      Confirm Password:
    </label>

    <input
      type="password"
      id="confirm-password"
      name="confirm-password"
      autocomplete="new-password"
      required>
  </div>

  <button type="submit">
    Create Account
  </button>

</form>
```

### Explanation

A registration form collects information needed to create a new account.

Common fields include:

```text
Name
Email
Password
Password confirmation
```

The browser's native validation does not automatically verify that two password fields match. That requires JavaScript or server-side validation.

### Remember

```text
Registration
→ Create a new account
```

---

## 118. Contact Form

### Code

```html
<form action="/contact" method="post">

  <h2>Contact Us</h2>

  <div>
    <label for="name">Name:</label>

    <input
      type="text"
      id="name"
      name="name"
      required>
  </div>

  <div>
    <label for="email">Email:</label>

    <input
      type="email"
      id="email"
      name="email"
      required>
  </div>

  <div>
    <label for="message">Message:</label>

    <textarea
      id="message"
      name="message"
      rows="6"
      required></textarea>
  </div>

  <button type="submit">
    Send Message
  </button>

</form>
```

### Explanation

A contact form allows users to send a message to a business, organization, or individual.

Typical fields:

```text
Name
Email
Message
```

Use `<textarea>` when the user needs to enter multiple lines of text.

### Remember

```text
Contact form
→ Identity + Contact + Message
```

---

## 119. Feedback Form

### Code

```html
<form action="/feedback" method="post">

  <h2>Feedback</h2>

  <fieldset>

    <legend>How satisfied are you?</legend>

    <label>
      <input
        type="radio"
        name="satisfaction"
        value="very-satisfied"
        required>
      Very satisfied
    </label>

    <label>
      <input
        type="radio"
        name="satisfaction"
        value="satisfied">
      Satisfied
    </label>

    <label>
      <input
        type="radio"
        name="satisfaction"
        value="unsatisfied">
      Unsatisfied
    </label>

  </fieldset>

  <div>
    <label for="comments">
      Additional comments:
    </label>

    <textarea
      id="comments"
      name="comments"
      rows="5"></textarea>
  </div>

  <button type="submit">
    Submit Feedback
  </button>

</form>
```

### Explanation

A feedback form collects opinions about a product, service, or experience.

`<fieldset>` groups related controls.

`<legend>` provides a label for that group.

### Remember

```text
Feedback
→ Rating / opinion
→ Optional comments
```

---

## 120. Survey Form

### Code

```html
<form action="/survey" method="post">

  <h2>Website Survey</h2>

  <fieldset>

    <legend>How did you find us?</legend>

    <label>
      <input
        type="radio"
        name="source"
        value="google"
        required>
      Google
    </label>

    <label>
      <input
        type="radio"
        name="source"
        value="social-media">
      Social Media
    </label>

    <label>
      <input
        type="radio"
        name="source"
        value="friend">
      Friend
    </label>

  </fieldset>

  <fieldset>

    <legend>What are you interested in?</legend>

    <label>
      <input
        type="checkbox"
        name="interest"
        value="web-development">
      Web Development
    </label>

    <label>
      <input
        type="checkbox"
        name="interest"
        value="design">
      Design
    </label>

    <label>
      <input
        type="checkbox"
        name="interest"
        value="marketing">
      Marketing
    </label>

  </fieldset>

  <div>
    <label for="comments">
      Additional feedback:
    </label>

    <textarea
      id="comments"
      name="comments"
      rows="5"></textarea>
  </div>

  <button type="submit">
    Submit Survey
  </button>

</form>
```

### Explanation

A survey can contain different types of questions.

```text
Radio
→ Usually one answer

Checkbox
→ Multiple answers

Textarea
→ Open-ended answer
```

### Remember

```text
Survey
→ Questions + Answers
```

---

## 121. Admission Form

### Code

```html
<form action="/admission" method="post">

  <h2>Student Admission Form</h2>

  <fieldset>

    <legend>Personal Information</legend>

    <div>
      <label for="student-name">
        Full Name:
      </label>

      <input
        type="text"
        id="student-name"
        name="student-name"
        autocomplete="name"
        required>
    </div>

    <div>
      <label for="dob">
        Date of Birth:
      </label>

      <input
        type="date"
        id="dob"
        name="dob"
        required>
    </div>

  </fieldset>

  <fieldset>

    <legend>Contact Information</legend>

    <div>
      <label for="email">Email:</label>

      <input
        type="email"
        id="email"
        name="email"
        required>
    </div>

    <div>
      <label for="phone">Phone:</label>

      <input
        type="tel"
        id="phone"
        name="phone"
        autocomplete="tel"
        required>
    </div>

  </fieldset>

  <fieldset>

    <legend>Course</legend>

    <label for="course">
      Select Course:
    </label>

    <select
      id="course"
      name="course"
      required>

      <option value="">
        Select a course
      </option>

      <option value="computer-science">
        Computer Science
      </option>

      <option value="business">
        Business
      </option>

      <option value="design">
        Design
      </option>

    </select>

  </fieldset>

  <button type="submit">
    Apply
  </button>

</form>
```

### Explanation

An admission form collects information required for enrollment.

`<fieldset>` helps divide a large form into logical sections.

```text
Personal Information
Contact Information
Course Information
```

### Remember

```text
Large form
→ Divide into logical fieldsets
```

---

## 122. Job Application Form

### Code

```html
<form
  action="/apply"
  method="post"
  enctype="multipart/form-data">

  <h2>Job Application</h2>

  <fieldset>

    <legend>Personal Information</legend>

    <label for="name">Full Name:</label>

    <input
      type="text"
      id="name"
      name="name"
      autocomplete="name"
      required>

    <label for="email">Email:</label>

    <input
      type="email"
      id="email"
      name="email"
      autocomplete="email"
      required>

  </fieldset>

  <fieldset>

    <legend>Application Details</legend>

    <label for="position">
      Position:
    </label>

    <select
      id="position"
      name="position"
      required>

      <option value="">
        Select a position
      </option>

      <option value="frontend">
        Frontend Developer
      </option>

      <option value="backend">
        Backend Developer
      </option>

      <option value="designer">
        UI Designer
      </option>

    </select>

    <label for="resume">
      Resume:
    </label>

    <input
      type="file"
      id="resume"
      name="resume"
      accept=".pdf,.doc,.docx"
      required>

  </fieldset>

  <button type="submit">
    Submit Application
  </button>

</form>
```

### Explanation

A job application commonly needs:

```text
Personal information
Position
Resume
```

Because a resume is uploaded as a file, the form uses:

```html
enctype="multipart/form-data"
```

### Remember

```text
File upload
→ multipart/form-data
```

---

## 123. Payment Form

### Code

```html
<form action="/payment" method="post">

  <h2>Payment Information</h2>

  <div>
    <label for="card-name">
      Name on Card:
    </label>

    <input
      type="text"
      id="card-name"
      name="card-name"
      autocomplete="cc-name"
      required>
  </div>

  <div>
    <label for="card-number">
      Card Number:
    </label>

    <input
      type="text"
      id="card-number"
      name="card-number"
      autocomplete="cc-number"
      inputmode="numeric"
      required>
  </div>

  <div>
    <label for="expiry">
      Expiration Date:
    </label>

    <input
      type="text"
      id="expiry"
      name="expiry"
      placeholder="MM/YY"
      autocomplete="cc-exp"
      required>
  </div>

  <div>
    <label for="cvv">
      Security Code:
    </label>

    <input
      type="password"
      id="cvv"
      name="cvv"
      autocomplete="cc-csc"
      inputmode="numeric"
      required>
  </div>

  <button type="submit">
    Pay Now
  </button>

</form>
```

### Explanation

A payment form collects information required for a payment.

In a real application, sensitive payment information should generally be handled by a trusted payment provider rather than being casually stored by your own application.

HTML only creates the form interface. It does not make payment processing secure.

### Remember

```text
HTML form
→ Collects input

Payment provider / backend
→ Processes payment securely
```

---

## 124. Checkout Form

### Code

```html
<form
  action="/checkout"
  method="post">

  <h2>Checkout</h2>

  <fieldset>

    <legend>Shipping Information</legend>

    <label for="name">
      Full Name:
    </label>

    <input
      type="text"
      id="name"
      name="name"
      autocomplete="name"
      required>

    <label for="address">
      Address:
    </label>

    <textarea
      id="address"
      name="address"
      autocomplete="street-address"
      rows="4"
      required></textarea>

    <label for="city">
      City:
    </label>

    <input
      type="text"
      id="city"
      name="city"
      autocomplete="address-level2"
      required>

    <label for="postal-code">
      Postal Code:
    </label>

    <input
      type="text"
      id="postal-code"
      name="postal-code"
      autocomplete="postal-code"
      required>

  </fieldset>

  <fieldset>

    <legend>Payment Method</legend>

    <label>
      <input
        type="radio"
        name="payment-method"
        value="card"
        required>
      Card
    </label>

    <label>
      <input
        type="radio"
        name="payment-method"
        value="cash">
      Cash on Delivery
    </label>

  </fieldset>

  <button type="submit">
    Place Order
  </button>

</form>
```

### Explanation

A checkout form combines information needed to complete an order.

Typical sections include:

```text
Shipping
Payment
Order confirmation
```

`<fieldset>` keeps related information grouped.

### Remember

```text
Checkout
→ Shipping + Payment + Order
```

---

## 125. Search Form

### Code

```html
<form
  action="/search"
  method="get"
  role="search">

  <label for="search">
    Search:
  </label>

  <input
    type="search"
    id="search"
    name="q"
    placeholder="Search products..."
    autocomplete="off">

  <button type="submit">
    Search
  </button>

</form>
```

### Explanation

A search form collects a search query.

`method="get"` is commonly used because search requests are usually safe and the query can appear in the URL.

For example:

```text
/search?q=laptop
```

`type="search"` indicates that the input is intended for search terms.

`role="search"` can identify the search landmark. In modern semantic HTML, a `<search>` element can also be used to represent a search-related section.

### Remember

```text
Search form
→ GET
→ Search query
→ URL can contain the query
```

# Final Revision

```text
116. Login Form
     → Email / Username + Password

117. Registration Form
     → Create account

118. Contact Form
     → Name + Email + Message

119. Feedback Form
     → Rating + Comments

120. Survey Form
     → Questions + Answers

121. Admission Form
     → Student enrollment information

122. Job Application Form
     → Candidate information + Resume

123. Payment Form
     → Payment information

124. Checkout Form
     → Shipping + Payment + Order

125. Search Form
     → Search query + GET
```

# Master Memory Trick

```text
LOGIN
→ Authenticate

REGISTRATION
→ Create account

CONTACT
→ Send message

FEEDBACK
→ Give opinion

SURVEY
→ Answer questions

ADMISSION
→ Apply to institution

JOB APPLICATION
→ Apply for job

PAYMENT
→ Pay

CHECKOUT
→ Complete order

SEARCH
→ Find information
```

# Important Interview Concepts

```text
<label>
→ Gives an input an accessible name

<fieldset>
→ Groups related controls

<legend>
→ Names a fieldset

required
→ Enables native required-field validation

autocomplete
→ Helps browser autofill

enctype="multipart/form-data"
→ Used when submitting files

method="get"
→ Common for searches

method="post"
→ Common when submitting data that changes server state
```

# Most Important Rule

```text
HTML form
→ Collects and submits data

HTML validation
→ Provides basic browser-side validation

JavaScript
→ Adds custom client-side behavior/validation

Server
→ Must validate submitted data again

Security
→ Cannot be provided by HTML alone
```

Never trust client-side validation as your security system. Humans can disable it, modify requests, or simply behave like humans.

# Module 7 – Forms (116–160)

## 126. Newsletter Subscription

### Code

```html
<form action="/subscribe" method="post">

  <h2>Subscribe to our newsletter</h2>

  <label for="newsletter-email">
    Email:
  </label>

  <input
    type="email"
    id="newsletter-email"
    name="email"
    autocomplete="email"
    placeholder="you@example.com"
    required>

  <button type="submit">
    Subscribe
  </button>

</form>
```

### Explanation

A newsletter form collects an email address so a user can subscribe to updates.

The most important input is:

```text
type="email"
→ Email address

required
→ User must provide a value

name="email"
→ Name sent with the form
```

### Remember

```text
Newsletter
→ Email + Subscribe
```

---

## 127. OTP Verification Form

### Code

```html
<form action="/verify-otp" method="post">

  <h2>Verify Your Account</h2>

  <label for="otp">
    Enter the 6-digit code:
  </label>

  <input
    type="text"
    id="otp"
    name="otp"
    inputmode="numeric"
    autocomplete="one-time-code"
    pattern="[0-9]{6}"
    maxlength="6"
    required>

  <button type="submit">
    Verify
  </button>

</form>
```

### Explanation

An OTP form allows the user to enter a one-time verification code.

Important attributes:

```text
inputmode="numeric"
→ Suggests a numeric keyboard on supported devices

autocomplete="one-time-code"
→ Helps supported browsers/devices autofill OTPs

pattern="[0-9]{6}"
→ Requires exactly 6 digits

maxlength="6"
→ Limits the input length
```

### Important

HTML validation only checks the format.

The server must actually verify whether the OTP is correct and valid.

### Remember

```text
OTP
→ Enter code
→ Format validation
→ Server verifies code
```

---

## 128. Password Reset Form

### Code

```html
<form action="/reset-password" method="post">

  <h2>Reset Password</h2>

  <label for="new-password">
    New Password:
  </label>

  <input
    type="password"
    id="new-password"
    name="new-password"
    autocomplete="new-password"
    required>

  <label for="confirm-password">
    Confirm Password:
  </label>

  <input
    type="password"
    id="confirm-password"
    name="confirm-password"
    autocomplete="new-password"
    required>

  <button type="submit">
    Reset Password
  </button>

</form>
```

### Explanation

A password reset form collects a new password.

The browser's native validation does not automatically check whether the two password fields are identical.

That comparison requires JavaScript and/or server-side validation.

### Remember

```text
Password reset
→ New password
→ Confirm password
→ Server validates
```

---

## 129. File Upload Form

### Code

```html
<form
  action="/upload"
  method="post"
  enctype="multipart/form-data">

  <label for="document">
    Upload document:
  </label>

  <input
    type="file"
    id="document"
    name="document"
    accept=".pdf,.doc,.docx"
    required>

  <button type="submit">
    Upload
  </button>

</form>
```

### Explanation

A file upload form allows the user to select a file from their device.

The important part is:

```html
enctype="multipart/form-data"
```

This encoding is used when a form submits files.

`accept` can provide a hint about the file types the user should select.

```text
accept=".pdf,.doc,.docx"
→ Suggests these file types

accept="image/*"
→ Suggests image files
```

### Remember

```text
File upload
→ type="file"
→ multipart/form-data
```

---

## 130. Multi-Step Form Structure

### Code

```html
<form action="/register" method="post">

  <fieldset>
    <legend>Step 1: Personal Information</legend>

    <label for="name">
      Full Name:
    </label>

    <input
      type="text"
      id="name"
      name="name"
      required>

    <label for="email">
      Email:
    </label>

    <input
      type="email"
      id="email"
      name="email"
      required>

  </fieldset>

  <fieldset>
    <legend>Step 2: Account Information</legend>

    <label for="username">
      Username:
    </label>

    <input
      type="text"
      id="username"
      name="username"
      required>

    <label for="password">
      Password:
    </label>

    <input
      type="password"
      id="password"
      name="password"
      required>

  </fieldset>

  <button type="submit">
    Create Account
  </button>

</form>
```

### Explanation

A multi-step form divides a large form into smaller logical sections.

For example:

```text
Step 1
→ Personal information

Step 2
→ Account information

Step 3
→ Confirmation
```

The HTML structure can use `<fieldset>` for each logical group.

The actual "Next" and "Back" behavior usually requires JavaScript.

### Remember

```text
Multi-step form
→ One large form
→ Multiple logical steps
→ JavaScript controls visibility/navigation
```

---

## 131. Date Picker Form

### Code

```html
<form action="/appointment" method="get">

  <label for="appointment-date">
    Select appointment date:
  </label>

  <input
    type="date"
    id="appointment-date"
    name="appointment-date"
    min="2026-08-14"
    required>

  <button type="submit">
    Continue
  </button>

</form>
```

### Explanation

`type="date"` provides a date input.

The browser may display a date picker depending on the browser and device.

Useful attributes:

```text
min
→ Earliest allowed date

max
→ Latest allowed date

required
→ A value must be provided
```

### Remember

```text
date
→ Date picker / date value
```

---

## 132. Time Picker Form

### Code

```html
<form action="/appointment" method="get">

  <label for="appointment-time">
    Select appointment time:
  </label>

  <input
    type="time"
    id="appointment-time"
    name="appointment-time"
    min="09:00"
    max="18:00"
    step="900"
    required>

  <button type="submit">
    Book Time
  </button>

</form>
```

### Explanation

`type="time"` is used to enter or select a time.

```text
min
→ Earliest allowed time

max
→ Latest allowed time

step
→ Time increment in seconds
```

Here:

```text
step="900"
→ 900 seconds
→ 15 minutes
```

### Remember

```text
time
→ Time value
```

---

## 133. Color Picker Form

### Code

```html
<form action="/theme" method="post">

  <label for="theme-color">
    Choose theme color:
  </label>

  <input
    type="color"
    id="theme-color"
    name="theme-color"
    value="#000000">

  <button type="submit">
    Save Color
  </button>

</form>
```

### Explanation

`type="color"` provides a color picker.

The value is typically represented using a color such as:

```text
#000000
#ffffff
#ff0000
```

### Remember

```text
color
→ Color picker
```

---

## 134. Range Slider

### Code

```html
<form action="/settings" method="get">

  <label for="volume">
    Volume:
  </label>

  <input
    type="range"
    id="volume"
    name="volume"
    min="0"
    max="100"
    step="1"
    value="50">

  <button type="submit">
    Save
  </button>

</form>
```

### Explanation

`type="range"` creates a slider.

Important attributes:

```text
min
→ Minimum value

max
→ Maximum value

step
→ Increment

value
→ Starting value
```

### Remember

```text
range
→ Slider
```

---

## 135. Radio Buttons

### Code

```html
<form action="/preferences" method="post">

  <fieldset>

    <legend>
      Choose your preferred language:
    </legend>

    <label>
      <input
        type="radio"
        name="language"
        value="english"
        required>
      English
    </label>

    <label>
      <input
        type="radio"
        name="language"
        value="hindi">
      Hindi
    </label>

    <label>
      <input
        type="radio"
        name="language"
        value="odia">
      Odia
    </label>

  </fieldset>

  <button type="submit">
    Save
  </button>

</form>
```

### Explanation

Radio buttons are used when the user should normally select one option from a group.

The buttons must share the same `name`:

```html
name="language"
```

This creates one radio group.

```text
○ English
○ Hindi
○ Odia
```

### Remember

```text
Radio
→ Usually ONE choice

Same name
→ Same group
```

---

## 136. Checkboxes

### Code

```html
<form action="/skills" method="post">

  <fieldset>

    <legend>
      Select your skills:
    </legend>

    <label>
      <input
        type="checkbox"
        name="skills"
        value="html">
      HTML
    </label>

    <label>
      <input
        type="checkbox"
        name="skills"
        value="css">
      CSS
    </label>

    <label>
      <input
        type="checkbox"
        name="skills"
        value="javascript">
      JavaScript
    </label>

  </fieldset>

  <button type="submit">
    Submit
  </button>

</form>
```

### Explanation

Checkboxes allow users to select or deselect options.

Unlike radio buttons, multiple checkboxes can normally be selected.

```text
☑ HTML
☑ CSS
☐ JavaScript
```

A checkbox can also represent a single yes/no choice.

### Remember

```text
Checkbox
→ Select / deselect
→ Multiple choices possible
```

---

## 137. Dropdown Menu

### Code

```html
<form action="/profile" method="post">

  <label for="country">
    Country:
  </label>

  <select
    id="country"
    name="country"
    required>

    <option value="">
      Select a country
    </option>

    <option value="india">
      India
    </option>

    <option value="usa">
      United States
    </option>

    <option value="japan">
      Japan
    </option>

  </select>

  <button type="submit">
    Save
  </button>

</form>
```

### Explanation

`<select>` creates a selection control.

`<option>` represents an individual choice.

```text
<select>
    ↓
<option>
<option>
<option>
```

### Remember

```text
<select>
→ Dropdown

<option>
→ One choice
```

---

## 138. Grouped Dropdown

### Code

```html
<form action="/products" method="get">

  <label for="product">
    Choose a product:
  </label>

  <select
    id="product"
    name="product"
    required>

    <option value="">
      Select a product
    </option>

    <optgroup label="Laptops">

      <option value="macbook">
        MacBook
      </option>

      <option value="thinkpad">
        ThinkPad
      </option>

    </optgroup>

    <optgroup label="Phones">

      <option value="iphone">
        iPhone
      </option>

      <option value="pixel">
        Pixel
      </option>

    </optgroup>

  </select>

  <button type="submit">
    Continue
  </button>

</form>
```

### Explanation

`<optgroup>` groups related `<option>` elements inside a `<select>`.

Here:

```text
Laptops
→ MacBook
→ ThinkPad

Phones
→ iPhone
→ Pixel
```

The `label` attribute gives the group its visible label.

### Remember

```text
<select>
    ↓
<optgroup>
    ↓
<option>
```

---

## 139. Multiple Select

### Code

```html
<form action="/skills" method="post">

  <label for="skills">
    Select your skills:
  </label>

  <select
    id="skills"
    name="skills"
    multiple
    size="4"
    required>

    <option value="html">
      HTML
    </option>

    <option value="css">
      CSS
    </option>

    <option value="javascript">
      JavaScript
    </option>

    <option value="react">
      React
    </option>

  </select>

  <button type="submit">
    Submit
  </button>

</form>
```

### Explanation

The `multiple` attribute allows the user to select more than one option.

```html
multiple
```

`size` can control how many options are visible at once.

```html
size="4"
```

means four options can be displayed at a time.

### Remember

```text
<select>
→ One selection by default

<select multiple>
→ Multiple selections
```

---

## 140. Textarea Form

### Code

```html
<form action="/feedback" method="post">

  <label for="message">
    Your message:
  </label>

  <textarea
    id="message"
    name="message"
    rows="6"
    cols="40"
    placeholder="Write your message..."
    required></textarea>

  <button type="submit">
    Send
  </button>

</form>
```

### Explanation

`<textarea>` is used when the user needs to enter multi-line text.

Common uses:

```text
Messages
Comments
Feedback
Descriptions
Addresses
```

Important attributes:

```text
rows
→ Suggested visible height

cols
→ Suggested visible width

placeholder
→ Hint for the user

required
→ Value is required
```

Unlike `<input>`, the default text of a `<textarea>` goes between its opening and closing tags.

```html
<textarea>
Default text
</textarea>
```

### Remember

```text
<input>
→ Usually single-line input

<textarea>
→ Multi-line input
```

# Final Revision

```text
126. Newsletter Subscription
     → Email + Subscribe

127. OTP Verification
     → One-time code

128. Password Reset
     → New password + Confirmation

129. File Upload
     → type="file"
     → multipart/form-data

130. Multi-Step Form
     → Multiple logical steps

131. Date Picker
     → type="date"

132. Time Picker
     → type="time"

133. Color Picker
     → type="color"

134. Range Slider
     → type="range"

135. Radio Buttons
     → Usually one choice from a group

136. Checkboxes
     → Multiple choices possible

137. Dropdown
     → <select> + <option>

138. Grouped Dropdown
     → <select> + <optgroup> + <option>

139. Multiple Select
     → <select multiple>

140. Textarea
     → Multi-line text
```

# Master Memory Trick

```text
EMAIL
→ Newsletter

CODE
→ OTP

PASSWORD
→ Reset

FILE
→ Upload

STEPS
→ Multi-step

DATE
→ Date picker

TIME
→ Time picker

COLOR
→ Color picker

RANGE
→ Slider

RADIO
→ One choice

CHECKBOX
→ Multiple choices

SELECT
→ Dropdown

OPTGROUP
→ Group dropdown options

MULTIPLE
→ Multiple dropdown choices

TEXTAREA
→ Multi-line text
```

# Important Interview Comparisons

```text
Radio
→ Usually one choice from a group

Checkbox
→ Zero, one, or multiple choices
```

```text
<select>
→ Selection control

<option>
→ Individual choice

<optgroup>
→ Groups related choices
```

```text
<input type="text">
→ Usually single-line text

<textarea>
→ Multi-line text
```

```text
type="date"
→ Date

type="time"
→ Time

type="color"
→ Color

type="range"
→ Slider
```

```text
File upload
→ type="file"
→ enctype="multipart/form-data"
```

# Form Structure to Remember

```html
<form>
  <fieldset>
    <legend>Group name</legend>

    <label for="field">
      Field label
    </label>

    <input
      id="field"
      name="field">

  </fieldset>

  <button type="submit">
    Submit
  </button>
</form>
```

```text
<form>
→ Form container

<fieldset>
→ Groups related controls

<legend>
→ Names the group

<label>
→ Names the input

<input> / <select> / <textarea>
→ Collects user input

<button>
→ Performs an action
```
# Module 7 – Forms (116–160)

## 141. Disabled Fields

### Code

```html
<form>
  <label for="username">
    Username:
  </label>

  <input
    type="text"
    id="username"
    name="username"
    value="utpanna"
    disabled>

  <button type="submit">
    Submit
  </button>
</form>
```

### Explanation

The `disabled` attribute makes a form control unavailable for interaction.

A disabled control:

```text
→ Cannot normally be edited
→ Cannot normally receive focus
→ Is not submitted with the form
```

Example:

```html
<input
  type="text"
  name="username"
  value="utpanna"
  disabled>
```

Even though the input has a value, that value is not included in a normal form submission.

### Remember

```text
disabled
→ Cannot use
→ Not submitted
```

---

## 142. Readonly Fields

### Code

```html
<form>
  <label for="email">
    Email:
  </label>

  <input
    type="email"
    id="email"
    name="email"
    value="user@example.com"
    readonly>

  <button type="submit">
    Submit
  </button>
</form>
```

### Explanation

`readonly` means the user cannot edit the value, but the control remains part of the form.

A readonly control:

```text
→ Cannot normally be edited
→ Can normally receive focus
→ Is submitted with the form
```

### Disabled vs Readonly

```text
disabled
→ Cannot edit
→ Not submitted

readonly
→ Cannot edit
→ Submitted
```

### Remember

> `readonly` = Can see/use the value, but cannot change it.

---

## 143. Required Validation

### Code

```html
<form action="/register" method="post">

  <label for="username">
    Username:
  </label>

  <input
    type="text"
    id="username"
    name="username"
    required>

  <button type="submit">
    Register
  </button>

</form>
```

### Explanation

The `required` attribute tells the browser that the field must have a value before the form can pass native validation.

```html
required
```

If the user tries to submit the form without entering a username, the browser can show a validation message.

### Remember

```text
required
→ Value must be provided
```

---

## 144. Pattern Validation

### Code

```html
<form>

  <label for="username">
    Username:
  </label>

  <input
    type="text"
    id="username"
    name="username"
    pattern="[A-Za-z0-9]{5,15}"
    required>

  <button type="submit">
    Submit
  </button>

</form>
```

### Explanation

The `pattern` attribute provides a regular expression that the value must satisfy for native constraint validation.

Here:

```text
[A-Za-z0-9]
→ Letters and numbers

{5,15}
→ Between 5 and 15 characters
```

Therefore, the username must contain between 5 and 15 letters or numbers.

### Remember

```text
pattern
→ Must match a pattern
```

---

## 145. Number Validation

### Code

```html
<form>

  <label for="age">
    Age:
  </label>

  <input
    type="number"
    id="age"
    name="age"
    min="18"
    max="60"
    step="1"
    required>

  <button type="submit">
    Submit
  </button>

</form>
```

### Explanation

`type="number"` is designed for numeric input.

You can restrict the acceptable range using:

```text
min
→ Minimum value

max
→ Maximum value

step
→ Allowed increment
```

Here:

```text
Minimum → 18
Maximum → 60
Step    → 1
```

### Remember

```text
number
→ Numeric input

min / max
→ Range

step
→ Increment
```

---

## 146. Email Validation

### Code

```html
<form>

  <label for="email">
    Email:
  </label>

  <input
    type="email"
    id="email"
    name="email"
    required>

  <button type="submit">
    Submit
  </button>

</form>
```

### Explanation

`type="email"` tells the browser that the field is intended for an email address.

The browser provides native validation appropriate to the input type.

```text
type="email"
→ Email-oriented validation
```

For example, a value that does not resemble a valid email address can fail native validation.

### Remember

```text
email
→ Email input + native validation
```

---

## 147. URL Validation

### Code

```html
<form>

  <label for="website">
    Website:
  </label>

  <input
    type="url"
    id="website"
    name="website"
    placeholder="https://example.com"
    required>

  <button type="submit">
    Submit
  </button>

</form>
```

### Explanation

`type="url"` is used when the user should enter a URL.

The browser can perform native validation based on the URL input type.

### Remember

```text
url
→ URL input + native validation
```

---

## 148. Telephone Validation

### Code

```html
<form>

  <label for="phone">
    Phone:
  </label>

  <input
    type="tel"
    id="phone"
    name="phone"
    autocomplete="tel"
    pattern="[0-9]{10}"
    inputmode="numeric"
    required>

  <button type="submit">
    Submit
  </button>

</form>
```

### Explanation

`type="tel"` is intended for telephone numbers.

Unlike `email` and `url`, `tel` does not impose a universal telephone-number format because phone-number formats vary between countries.

If your application needs a specific format, you can add validation such as `pattern`.

Here:

```text
[0-9]{10}
→ Exactly 10 digits
```

### Remember

```text
tel
→ Telephone number

pattern
→ Apply your own format rule
```

---

## 149. Accessible Form

### Code

```html
<form action="/contact" method="post">

  <div>
    <label for="name">
      Full Name:
    </label>

    <input
      type="text"
      id="name"
      name="name"
      autocomplete="name"
      required>
  </div>

  <div>
    <label for="email">
      Email:
    </label>

    <input
      type="email"
      id="email"
      name="email"
      autocomplete="email"
      aria-describedby="email-help"
      required>

    <p id="email-help">
      We will use this email to contact you.
    </p>
  </div>

  <div>
    <label for="message">
      Message:
    </label>

    <textarea
      id="message"
      name="message"
      rows="5"
      required></textarea>
  </div>

  <button type="submit">
    Send Message
  </button>

</form>
```

### Explanation

An accessible form should provide clear names, relationships, instructions, and keyboard access.

Important practices:

```text
<label>
→ Gives controls a clear accessible name

for + id
→ Connects label to input

aria-describedby
→ Connects additional instructions

required
→ Communicates required status

Semantic HTML
→ Gives browsers and assistive technologies useful structure
```

### Remember

```text
Accessible form
→ Label
→ Clear instructions
→ Keyboard usable
→ Semantic structure
```

---

## 150. Fieldset & Legend

### Code

```html
<form>

  <fieldset>

    <legend>
      Contact Information
    </legend>

    <label for="email">
      Email:
    </label>

    <input
      type="email"
      id="email"
      name="email"
      required>

    <label for="phone">
      Phone:
    </label>

    <input
      type="tel"
      id="phone"
      name="phone">

  </fieldset>

  <fieldset>

    <legend>
      Preferred Contact Method
    </legend>

    <label>
      <input
        type="radio"
        name="contact-method"
        value="email"
        required>
      Email
    </label>

    <label>
      <input
        type="radio"
        name="contact-method"
        value="phone">
      Phone
    </label>

  </fieldset>

  <button type="submit">
    Submit
  </button>

</form>
```

### Explanation

`<fieldset>` groups related form controls.

`<legend>` provides a caption for that group.

```text
<fieldset>
→ Groups related controls

<legend>
→ Describes the group
```

This is particularly useful for groups of radio buttons and checkboxes.

### Remember

```text
fieldset
→ Group

legend
→ Group's name
```

---

## 151. Shipping Address Form

### Code

```html
<form action="/checkout" method="post">

  <fieldset>

    <legend>
      Shipping Address
    </legend>

    <label for="shipping-name">
      Full Name:
    </label>

    <input
      type="text"
      id="shipping-name"
      name="shipping-name"
      autocomplete="shipping name"
      required>

    <label for="shipping-address">
      Address:
    </label>

    <textarea
      id="shipping-address"
      name="shipping-address"
      autocomplete="shipping street-address"
      rows="4"
      required></textarea>

    <label for="shipping-city">
      City:
    </label>

    <input
      type="text"
      id="shipping-city"
      name="shipping-city"
      autocomplete="shipping address-level2"
      required>

    <label for="shipping-postal">
      Postal Code:
    </label>

    <input
      type="text"
      id="shipping-postal"
      name="shipping-postal"
      autocomplete="shipping postal-code"
      required>

  </fieldset>

  <button type="submit">
    Continue
  </button>

</form>
```

### Explanation

A shipping address form collects the destination where an order should be delivered.

`autocomplete` helps browsers understand what each field represents.

### Remember

```text
Shipping
→ Where the order should be delivered
```

---

## 152. Billing Address Form

### Code

```html
<form action="/checkout" method="post">

  <fieldset>

    <legend>
      Billing Address
    </legend>

    <label for="billing-name">
      Full Name:
    </label>

    <input
      type="text"
      id="billing-name"
      name="billing-name"
      autocomplete="billing name"
      required>

    <label for="billing-address">
      Address:
    </label>

    <textarea
      id="billing-address"
      name="billing-address"
      autocomplete="billing street-address"
      rows="4"
      required></textarea>

    <label for="billing-city">
      City:
    </label>

    <input
      type="text"
      id="billing-city"
      name="billing-city"
      autocomplete="billing address-level2"
      required>

    <label for="billing-postal">
      Postal Code:
    </label>

    <input
      type="text"
      id="billing-postal"
      name="billing-postal"
      autocomplete="billing postal-code"
      required>

  </fieldset>

  <button type="submit">
    Continue
  </button>

</form>
```

### Explanation

A billing address is the address associated with billing or payment information.

It may be different from the shipping address.

```text
Shipping address
→ Where the order goes

Billing address
→ Address associated with billing
```

### Remember

```text
Shipping ≠ Billing
```

They can be the same, but they represent different purposes.

---

## 153. Profile Edit Form

### Code

```html
<form action="/profile" method="post">

  <h2>Edit Profile</h2>

  <label for="profile-name">
    Name:
  </label>

  <input
    type="text"
    id="profile-name"
    name="name"
    autocomplete="name"
    required>

  <label for="profile-email">
    Email:
  </label>

  <input
    type="email"
    id="profile-email"
    name="email"
    autocomplete="email"
    required>

  <label for="bio">
    Bio:
  </label>

  <textarea
    id="bio"
    name="bio"
    rows="5"></textarea>

  <button type="submit">
    Save Changes
  </button>

</form>
```

### Explanation

A profile edit form allows a user to update information associated with their account.

Typical fields:

```text
Name
Email
Bio
Profile information
```

### Remember

```text
Profile form
→ View existing data
→ Edit
→ Save changes
```

---

## 154. Settings Page Form

### Code

```html
<form action="/settings" method="post">

  <fieldset>

    <legend>
      Notification Settings
    </legend>

    <label>
      <input
        type="checkbox"
        name="email-notifications">
      Email notifications
    </label>

    <label>
      <input
        type="checkbox"
        name="push-notifications">
      Push notifications
    </label>

  </fieldset>

  <fieldset>

    <legend>
      Theme
    </legend>

    <label for="theme">
      Choose theme:
    </label>

    <select
      id="theme"
      name="theme">

      <option value="system">
        System
      </option>

      <option value="light">
        Light
      </option>

      <option value="dark">
        Dark
      </option>

    </select>

  </fieldset>

  <button type="submit">
    Save Settings
  </button>

</form>
```

### Explanation

Settings forms usually contain preferences rather than large amounts of personal data.

Common controls:

```text
Checkboxes
→ Enable / disable features

Select
→ Choose a preference

Radio buttons
→ Choose one setting
```

### Remember

```text
Settings
→ User preferences
```

---

## 155. Medical Information Form

### Code

```html
<form action="/medical-information" method="post">

  <fieldset>

    <legend>
      Medical Information
    </legend>

    <label for="blood-type">
      Blood Type:
    </label>

    <select
      id="blood-type"
      name="blood-type">

      <option value="">
        Select blood type
      </option>

      <option value="a-positive">
        A+
      </option>

      <option value="a-negative">
        A-
      </option>

      <option value="b-positive">
        B+
      </option>

      <option value="b-negative">
        B-
      </option>

      <option value="ab-positive">
        AB+
      </option>

      <option value="ab-negative">
        AB-
      </option>

      <option value="o-positive">
        O+
      </option>

      <option value="o-negative">
        O-
      </option>

    </select>

    <label for="allergies">
      Allergies:
    </label>

    <textarea
      id="allergies"
      name="allergies"
      rows="4"></textarea>

    <label for="medications">
      Current Medications:
    </label>

    <textarea
      id="medications"
      name="medications"
      rows="4"></textarea>

  </fieldset>

  <button type="submit">
    Save Information
  </button>

</form>
```

### Explanation

A medical information form can collect sensitive health information.

The important HTML concepts here are:

```text
fieldset
→ Groups related information

legend
→ Names the group

label
→ Identifies controls

textarea
→ Allows longer descriptions
```

### Important

HTML provides the structure of the form. It does not provide the privacy, authorization, encryption, or regulatory protections required for handling sensitive medical information.

### Remember

```text
Medical form
→ Sensitive data
→ HTML alone is NOT security
```

---

## 156. Hotel Booking Form

### Code

```html
<form action="/hotel-booking" method="post">

  <fieldset>

    <legend>
      Hotel Booking
    </legend>

    <label for="check-in">
      Check-in:
    </label>

    <input
      type="date"
      id="check-in"
      name="check-in"
      required>

    <label for="check-out">
      Check-out:
    </label>

    <input
      type="date"
      id="check-out"
      name="check-out"
      required>

    <label for="guests">
      Guests:
    </label>

    <input
      type="number"
      id="guests"
      name="guests"
      min="1"
      max="10"
      value="1"
      required>

    <label for="room-type">
      Room Type:
    </label>

    <select
      id="room-type"
      name="room-type"
      required>

      <option value="">
        Select room type
      </option>

      <option value="single">
        Single
      </option>

      <option value="double">
        Double
      </option>

      <option value="suite">
        Suite
      </option>

    </select>

  </fieldset>

  <button type="submit">
    Check Availability
  </button>

</form>
```

### Explanation

A hotel booking form commonly collects:

```text
Check-in date
Check-out date
Number of guests
Room type
```

The actual availability must be checked by the application backend.

### Remember

```text
Hotel booking
→ Dates + Guests + Room
```

---

## 157. Flight Booking Form

### Code

```html
<form action="/flight-search" method="get">

  <fieldset>

    <legend>
      Flight Search
    </legend>

    <label for="from">
      From:
    </label>

    <input
      type="text"
      id="from"
      name="from"
      placeholder="Departure city"
      required>

    <label for="to">
      To:
    </label>

    <input
      type="text"
      id="to"
      name="to"
      placeholder="Destination city"
      required>

    <label for="departure">
      Departure:
    </label>

    <input
      type="date"
      id="departure"
      name="departure"
      required>

    <label for="passengers">
      Passengers:
    </label>

    <input
      type="number"
      id="passengers"
      name="passengers"
      min="1"
      max="9"
      value="1"
      required>

  </fieldset>

  <button type="submit">
    Search Flights
  </button>

</form>
```

### Explanation

A flight search form commonly collects:

```text
Departure
Destination
Date
Passengers
```

This example searches for flights rather than completing a ticket purchase.

### Remember

```text
Flight search
→ From + To + Date + Passengers
```

---

## 158. Restaurant Reservation Form

### Code

```html
<form action="/reservation" method="post">

  <fieldset>

    <legend>
      Restaurant Reservation
    </legend>

    <label for="reservation-date">
      Date:
    </label>

    <input
      type="date"
      id="reservation-date"
      name="reservation-date"
      required>

    <label for="reservation-time">
      Time:
    </label>

    <input
      type="time"
      id="reservation-time"
      name="reservation-time"
      required>

    <label for="party-size">
      Number of Guests:
    </label>

    <input
      type="number"
      id="party-size"
      name="party-size"
      min="1"
      max="20"
      value="2"
      required>

    <label for="reservation-name">
      Name:
    </label>

    <input
      type="text"
      id="reservation-name"
      name="name"
      autocomplete="name"
      required>

  </fieldset>

  <button type="submit">
    Reserve Table
  </button>

</form>
```

### Explanation

A restaurant reservation form typically collects:

```text
Date
Time
Party size
Name
```

The backend must check whether a table is actually available.

### Remember

```text
Restaurant reservation
→ Date + Time + Guests
```

---

## 159. Event Registration Form

### Code

```html
<form action="/event-registration" method="post">

  <fieldset>

    <legend>
      Event Registration
    </legend>

    <label for="attendee-name">
      Full Name:
    </label>

    <input
      type="text"
      id="attendee-name"
      name="name"
      autocomplete="name"
      required>

    <label for="attendee-email">
      Email:
    </label>

    <input
      type="email"
      id="attendee-email"
      name="email"
      autocomplete="email"
      required>

    <label for="ticket">
      Ticket Type:
    </label>

    <select
      id="ticket"
      name="ticket"
      required>

      <option value="">
        Select ticket type
      </option>

      <option value="standard">
        Standard
      </option>

      <option value="vip">
        VIP
      </option>

    </select>

  </fieldset>

  <button type="submit">
    Register
  </button>

</form>
```

### Explanation

An event registration form collects information needed to register an attendee.

Typical fields:

```text
Name
Email
Ticket type
Preferences
```

### Remember

```text
Event registration
→ Attendee + Event + Ticket
```

---

## 160. Resume Upload Form

### Code

```html
<form
  action="/resume"
  method="post"
  enctype="multipart/form-data">

  <fieldset>

    <legend>
      Resume Upload
    </legend>

    <label for="candidate-name">
      Full Name:
    </label>

    <input
      type="text"
      id="candidate-name"
      name="name"
      autocomplete="name"
      required>

    <label for="candidate-email">
      Email:
    </label>

    <input
      type="email"
      id="candidate-email"
      name="email"
      autocomplete="email"
      required>

    <label for="resume">
      Resume:
    </label>

    <input
      type="file"
      id="resume"
      name="resume"
      accept=".pdf,.doc,.docx"
      required>

  </fieldset>

  <button type="submit">
    Upload Resume
  </button>

</form>
```

### Explanation

A resume upload form combines normal form fields with a file input.

Because a file is being submitted, the form uses:

```html
enctype="multipart/form-data"
```

The `accept` attribute gives the browser a hint about acceptable file types.

```text
accept=".pdf,.doc,.docx"
→ Suggests these file formats
```

It does not provide security by itself. The server must validate the uploaded file.

### Remember

```text
Resume upload
→ Personal information
→ File input
→ multipart/form-data
→ Server validates the file
```

# Final Revision

```text
141. Disabled Fields
     → Cannot edit
     → Not submitted

142. Readonly Fields
     → Cannot edit
     → Usually submitted

143. Required Validation
     → Value is required

144. Pattern Validation
     → Value must match a pattern

145. Number Validation
     → min + max + step

146. Email Validation
     → type="email"

147. URL Validation
     → type="url"

148. Telephone Validation
     → type="tel"
     → Use pattern for a specific format

149. Accessible Form
     → Labels + semantic structure + instructions

150. Fieldset & Legend
     → Group + group name

151. Shipping Address
     → Delivery address

152. Billing Address
     → Billing address

153. Profile Edit
     → Update user information

154. Settings Form
     → User preferences

155. Medical Information
     → Sensitive health information

156. Hotel Booking
     → Dates + guests + room

157. Flight Booking
     → From + To + date + passengers

158. Restaurant Reservation
     → Date + time + party size

159. Event Registration
     → Attendee + ticket

160. Resume Upload
     → Personal information + file
```

# Master Memory Trick

```text
disabled
→ Can't use
→ Not submitted

readonly
→ Can't edit
→ Submitted

required
→ Must provide

pattern
→ Must match

min / max
→ Range

step
→ Increment

email
→ Email format

url
→ URL format

tel
→ Telephone input

fieldset
→ Group

legend
→ Group name

shipping
→ Where it goes

billing
→ Where it is billed

profile
→ User information

settings
→ Preferences

medical
→ Sensitive health information

hotel
→ Date + guests + room

flight
→ From + To + date

restaurant
→ Date + time + guests

event
→ Attendee + ticket

resume
→ File upload
```

# Most Important Interview Comparisons

```text
disabled vs readonly

disabled
→ User cannot interact normally
→ Not submitted

readonly
→ User cannot edit
→ Usually submitted
```

```text
required vs pattern

required
→ Checks that a value exists

pattern
→ Checks that a value matches a specified pattern
```

```text
min/max vs pattern

min/max
→ Best for numeric/date/time boundaries

pattern
→ Best for matching a text format
```

```text
type="email"
→ Browser knows the field represents an email

type="tel"
→ Browser knows the field represents a telephone number

type="url"
→ Browser knows the field represents a URL
```

# Critical Form Rule

```text
Browser validation
→ User experience

JavaScript validation
→ Custom client-side behavior

Server-side validation
→ MUST happen for submitted data

Security
→ Never trust the browser
```

A user can modify HTML, disable JavaScript, or send a request without using your form at all. The browser is not a security guard. It is barely a receptionist.


# Module 8 – Semantic HTML (161–175)

## 161. Create a Blog Layout

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
</head>

<body>

  <header>
    <h1>My Blog</h1>

    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <main>

    <section>
      <h2>Latest Articles</h2>

      <article>
        <h3>Learning HTML</h3>
        <p>
          HTML provides the structure of a webpage.
        </p>
        <a href="/blog/learning-html">
          Read article
        </a>
      </article>

      <article>
        <h3>Learning CSS</h3>
        <p>
          CSS controls the presentation and layout of webpages.
        </p>
        <a href="/blog/learning-css">
          Read article
        </a>
      </article>

    </section>

    <aside>
      <h2>Popular Posts</h2>
      <ul>
        <li>
          <a href="/blog/html">HTML Basics</a>
        </li>
        <li>
          <a href="/blog/css">CSS Basics</a>
        </li>
      </ul>
    </aside>

  </main>

  <footer>
    <p>&copy; 2026 My Blog</p>
  </footer>

</body>
</html>
```

### Explanation

A blog layout commonly contains:

```text
<header>
→ Website identity and navigation

<main>
→ Main page content

<section>
→ Group of related content

<article>
→ Independent blog post

<aside>
→ Related content

<footer>
→ Footer information
```

### Remember

```text
Blog
→ main
→ article
→ aside
→ footer
```

---

## 162. Create a News Article

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>News Article</title>
</head>

<body>

  <header>
    <h1>Daily News</h1>

    <nav aria-label="News navigation">
      <a href="/latest">Latest</a>
      <a href="/world">World</a>
      <a href="/technology">Technology</a>
      <a href="/sports">Sports</a>
    </nav>
  </header>

  <main>

    <article>

      <header>
        <h2>New Technology Changes the Industry</h2>

        <p>
          Published on
          <time datetime="2026-08-14">
            August 14, 2026
          </time>
        </p>
      </header>

      <p>
        Technology continues to change how people work,
        communicate, and build products.
      </p>

      <p>
        New tools are helping teams create applications
        faster while also changing the skills developers need.
      </p>

      <footer>
        <p>Written by Utpanna Pradhan</p>
      </footer>

    </article>

  </main>

  <footer>
    <p>&copy; 2026 Daily News</p>
  </footer>

</body>
</html>
```

### Explanation

A news article is a good use case for `<article>` because the article can exist independently from the rest of the page.

The article can contain its own:

```text
<header>
→ Title and publication information

Main content
→ News story

<footer>
→ Author or article metadata
```

### Remember

```text
News story
→ <article>
```

---

## 163. Create a Magazine Homepage

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Magazine</title>
</head>

<body>

  <header>

    <h1>Modern Magazine</h1>

    <nav aria-label="Magazine navigation">
      <a href="/">Home</a>
      <a href="/culture">Culture</a>
      <a href="/technology">Technology</a>
      <a href="/travel">Travel</a>
      <a href="/lifestyle">Lifestyle</a>
    </nav>

  </header>

  <main>

    <section>
      <h2>Featured Stories</h2>

      <article>
        <h3>The Future of Technology</h3>
        <p>
          Exploring how technology is changing everyday life.
        </p>
      </article>

      <article>
        <h3>Travel in 2026</h3>
        <p>
          Discover new ways to explore the world.
        </p>
      </article>

    </section>

    <section>
      <h2>Latest Stories</h2>

      <article>
        <h3>Modern Design Trends</h3>
        <p>Design ideas shaping modern websites.</p>
      </article>

      <article>
        <h3>Healthy Living</h3>
        <p>Simple ideas for a healthier lifestyle.</p>
      </article>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 Modern Magazine</p>
  </footer>

</body>
</html>
```

### Explanation

A magazine homepage usually contains multiple groups of independent stories.

Use:

```text
<section>
→ Groups related stories

<article>
→ Individual story
```

### Remember

```text
Magazine
→ Sections
→ Articles
```

---

## 164. Create an E-commerce Homepage

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shop</title>
</head>

<body>

  <header>

    <h1>My Shop</h1>

    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/categories">Categories</a>
      <a href="/cart">Cart</a>
    </nav>

  </header>

  <main>

    <section>
      <h2>Featured Products</h2>

      <article>
        <h3>Wireless Headphones</h3>

        <p>
          High-quality wireless headphones.
        </p>

        <p>
          ₹2,999
        </p>

        <a href="/products/headphones">
          View Product
        </a>
      </article>

      <article>
        <h3>Smart Watch</h3>

        <p>
          A modern smartwatch for everyday use.
        </p>

        <p>
          ₹4,999
        </p>

        <a href="/products/smart-watch">
          View Product
        </a>
      </article>

    </section>

    <section>
      <h2>Categories</h2>

      <ul>
        <li>
          <a href="/electronics">Electronics</a>
        </li>
        <li>
          <a href="/fashion">Fashion</a>
        </li>
        <li>
          <a href="/home">Home</a>
        </li>
      </ul>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 My Shop</p>
  </footer>

</body>
</html>
```

### Explanation

An e-commerce homepage commonly contains:

```text
<header>
→ Brand + navigation

<section>
→ Product categories

<article>
→ Individual product/content item

<footer>
→ Business information
```

### Remember

```text
E-commerce
→ Products
→ Categories
→ Navigation
```

---

## 165. Create a Landing Page Structure

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Landing Page</title>
</head>

<body>

  <header>

    <a href="/">
      <strong>MyProduct</strong>
    </a>

    <nav aria-label="Main navigation">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </nav>

  </header>

  <main>

    <section aria-labelledby="hero-title">

      <h1 id="hero-title">
        Build Better Products
      </h1>

      <p>
        A simple platform for building and managing your projects.
      </p>

      <a href="/signup">
        Get Started
      </a>

    </section>

    <section id="features">

      <h2>Features</h2>

      <article>
        <h3>Fast</h3>
        <p>Build and launch quickly.</p>
      </article>

      <article>
        <h3>Secure</h3>
        <p>Keep your data protected.</p>
      </article>

      <article>
        <h3>Simple</h3>
        <p>Easy to use and understand.</p>
      </article>

    </section>

    <section id="pricing">

      <h2>Pricing</h2>

      <p>
        Plans designed for different needs.
      </p>

    </section>

    <section id="contact">

      <h2>Contact</h2>

      <p>
        Get in touch with our team.
      </p>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 MyProduct</p>
  </footer>

</body>
</html>
```

### Explanation

A landing page usually has a clear hierarchy:

```text
<header>
    ↓
Hero section
    ↓
Features
    ↓
Benefits / Content
    ↓
Pricing
    ↓
Contact / CTA
    ↓
<footer>
```

### Remember

```text
Landing page
→ Introduce
→ Explain
→ Convince
→ Call to action
```

---

## 166. Create a Dashboard Layout

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
</head>

<body>

  <header>

    <h1>Dashboard</h1>

    <nav aria-label="Dashboard navigation">
      <a href="/dashboard">Dashboard</a>
      <a href="/reports">Reports</a>
      <a href="/settings">Settings</a>
    </nav>

  </header>

  <main>

    <section aria-labelledby="overview-title">

      <h2 id="overview-title">
        Overview
      </h2>

      <article>
        <h3>Total Users</h3>
        <p>10,250</p>
      </article>

      <article>
        <h3>Revenue</h3>
        <p>₹2,50,000</p>
      </article>

      <article>
        <h3>Orders</h3>
        <p>1,250</p>
      </article>

    </section>

    <section>

      <h2>Recent Activity</h2>

      <ul>
        <li>New user registered</li>
        <li>Order completed</li>
        <li>Payment received</li>
      </ul>

    </section>

    <aside>

      <h2>Quick Links</h2>

      <nav aria-label="Quick links">
        <a href="/users">Users</a>
        <a href="/orders">Orders</a>
        <a href="/reports">Reports</a>
      </nav>

    </aside>

  </main>

  <footer>
    <p>Dashboard Footer</p>
  </footer>

</body>
</html>
```

### Explanation

A dashboard usually contains several independent information areas.

Semantic structure can be:

```text
<header>
→ Dashboard identity/navigation

<main>
→ Main dashboard information

<section>
→ Related metrics

<article>
→ Individual metric/card

<aside>
→ Secondary information

<footer>
→ Footer information
```

### Remember

```text
Dashboard
→ Main information
→ Metrics
→ Secondary controls
```

---

## 167. Create a Documentation Layout

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation</title>
</head>

<body>

  <header>

    <h1>My Documentation</h1>

    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/docs">Documentation</a>
      <a href="/contact">Contact</a>
    </nav>

  </header>

  <main>

    <aside>

      <nav aria-label="Documentation navigation">

        <h2>Documentation</h2>

        <ul>
          <li>
            <a href="#introduction">
              Introduction
            </a>
          </li>

          <li>
            <a href="#installation">
              Installation
            </a>
          </li>

          <li>
            <a href="#usage">
              Usage
            </a>
          </li>
        </ul>

      </nav>

    </aside>

    <article>

      <h2 id="introduction">
        Introduction
      </h2>

      <p>
        Welcome to the documentation.
      </p>

      <h2 id="installation">
        Installation
      </h2>

      <p>
        Follow these steps to install the application.
      </p>

      <h2 id="usage">
        Usage
      </h2>

      <p>
        Learn how to use the application.
      </p>

    </article>

  </main>

  <footer>
    <p>&copy; 2026 Documentation</p>
  </footer>

</body>
</html>
```

### Explanation

Documentation pages often have:

```text
<header>
→ Documentation identity

<aside>
→ Secondary navigation

<nav>
→ Navigation links

<article>
→ Main documentation content
```

### Remember

```text
Documentation
→ Navigation + Content
```

---

## 168. Create an FAQ Page

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ</title>
</head>

<body>

  <header>

    <h1>Frequently Asked Questions</h1>

    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/faq">FAQ</a>
      <a href="/contact">Contact</a>
    </nav>

  </header>

  <main>

    <section>

      <h2>General Questions</h2>

      <details>
        <summary>
          What is this service?
        </summary>

        <p>
          This service helps users manage their projects.
        </p>
      </details>

      <details>
        <summary>
          How much does it cost?
        </summary>

        <p>
          Pricing depends on the selected plan.
        </p>
      </details>

      <details>
        <summary>
          Can I cancel my plan?
        </summary>

        <p>
          Yes, you can cancel according to the service terms.
        </p>
      </details>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 Example</p>
  </footer>

</body>
</html>
```

### Explanation

`<details>` and `<summary>` are especially useful for FAQ sections.

```text
<details>
→ Expandable content

<summary>
→ Visible question/title
```

### Remember

```text
FAQ
→ <details>
→ <summary>
```

---

## 169. Create a Help Center

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Help Center</title>
</head>

<body>

  <header>

    <h1>Help Center</h1>

    <nav aria-label="Help navigation">
      <a href="/help">Help Center</a>
      <a href="/contact">Contact Support</a>
    </nav>

  </header>

  <main>

    <section>

      <h2>How can we help?</h2>

      <form action="/search" method="get">

        <label for="help-search">
          Search the Help Center:
        </label>

        <input
          type="search"
          id="help-search"
          name="q">

        <button type="submit">
          Search
        </button>

      </form>

    </section>

    <section>

      <h2>Help Categories</h2>

      <article>
        <h3>Getting Started</h3>
        <p>
          Learn how to start using the product.
        </p>
      </article>

      <article>
        <h3>Account</h3>
        <p>
          Manage your account and profile.
        </p>
      </article>

      <article>
        <h3>Billing</h3>
        <p>
          Learn about payments and subscriptions.
        </p>
      </article>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 Help Center</p>
  </footer>

</body>
</html>
```

### Explanation

A help center typically provides:

```text
Search
→ Find answers

Categories
→ Group related help content

Articles
→ Individual pieces of help content
```

### Remember

```text
Help Center
→ Search + Categories + Articles
```

---

## 170. Create a Portfolio Website

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Developer Portfolio</title>
</head>

<body>

  <header>

    <h1>Utpanna Pradhan</h1>

    <p>Frontend Developer</p>

    <nav aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

  </header>

  <main>

    <section id="about">

      <h2>About Me</h2>

      <p>
        I build modern and responsive web applications.
      </p>

    </section>

    <section id="projects">

      <h2>Projects</h2>

      <article>

        <h3>Restaurant Website</h3>

        <p>
          A responsive website for a restaurant.
        </p>

        <a href="/projects/restaurant">
          View Project
        </a>

      </article>

      <article>

        <h3>Gym Website</h3>

        <p>
          A modern website template for a gym.
        </p>

        <a href="/projects/gym">
          View Project
        </a>

      </article>

    </section>

    <section id="contact">

      <h2>Contact</h2>

      <address>
        <a href="mailto:hello@example.com">
          hello@example.com
        </a>
      </address>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 Utpanna Pradhan</p>
  </footer>

</body>
</html>
```

### Explanation

A portfolio commonly contains:

```text
<header>
→ Name + role + navigation

<section>
→ About

<section>
→ Projects

<article>
→ Individual project

<section>
→ Contact

<footer>
→ Copyright/footer information
```

### Remember

```text
Portfolio
→ About
→ Work
→ Contact
```

---

## 171. Create a Restaurant Homepage

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Restaurant</title>
</head>

<body>

  <header>

    <h1>My Restaurant</h1>

    <nav aria-label="Restaurant navigation">
      <a href="/">Home</a>
      <a href="/menu">Menu</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>

  </header>

  <main>

    <section>

      <h2>Welcome to My Restaurant</h2>

      <p>
        Fresh food made with quality ingredients.
      </p>

      <a href="/menu">
        View Menu
      </a>

    </section>

    <section>

      <h2>Popular Dishes</h2>

      <article>
        <h3>Paneer Curry</h3>
        <p>Rich and flavorful paneer curry.</p>
      </article>

      <article>
        <h3>Vegetable Biryani</h3>
        <p>Fragrant rice with fresh vegetables.</p>
      </article>

    </section>

    <section>

      <h2>Visit Us</h2>

      <address>
        123 Main Street<br>
        Bhubaneswar, Odisha<br>
        India
      </address>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 My Restaurant</p>
  </footer>

</body>
</html>
```

### Explanation

A restaurant homepage can use:

```text
<header>
→ Restaurant identity + navigation

<section>
→ Hero/introduction

<article>
→ Individual dishes

<address>
→ Location/contact information
```

### Remember

```text
Restaurant
→ Introduction
→ Menu
→ Location
→ Contact
```

---

## 172. Create a Hospital Homepage

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>City Hospital</title>
</head>

<body>

  <header>

    <h1>City Hospital</h1>

    <nav aria-label="Hospital navigation">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/doctors">Doctors</a>
      <a href="/appointments">Appointments</a>
      <a href="/contact">Contact</a>
    </nav>

  </header>

  <main>

    <section>

      <h2>Quality Healthcare</h2>

      <p>
        Providing healthcare services to our community.
      </p>

      <a href="/appointments">
        Book an Appointment
      </a>

    </section>

    <section>

      <h2>Our Services</h2>

      <article>
        <h3>Emergency Care</h3>
        <p>Emergency medical services.</p>
      </article>

      <article>
        <h3>Cardiology</h3>
        <p>Heart and cardiovascular care.</p>
      </article>

      <article>
        <h3>Pediatrics</h3>
        <p>Healthcare services for children.</p>
      </article>

    </section>

    <section>

      <h2>Contact</h2>

      <address>
        City Hospital<br>
        100 Health Avenue<br>
        Bhubaneswar, Odisha
      </address>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 City Hospital</p>
  </footer>

</body>
</html>
```

### Explanation

A hospital website commonly contains:

```text
Services
Doctors
Appointments
Contact information
Emergency information
```

Semantic HTML helps organize these areas clearly.

### Remember

```text
Hospital
→ Services
→ Doctors
→ Appointments
→ Contact
```

---

## 173. Create a School Homepage

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunrise School</title>
</head>

<body>

  <header>

    <h1>Sunrise School</h1>

    <nav aria-label="School navigation">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/academics">Academics</a>
      <a href="/admissions">Admissions</a>
      <a href="/contact">Contact</a>
    </nav>

  </header>

  <main>

    <section>

      <h2>Welcome to Sunrise School</h2>

      <p>
        Empowering students through education and creativity.
      </p>

    </section>

    <section>

      <h2>Academics</h2>

      <article>
        <h3>Primary Education</h3>
        <p>
          Building strong foundations for young learners.
        </p>
      </article>

      <article>
        <h3>Secondary Education</h3>
        <p>
          Preparing students for higher education.
        </p>
      </article>

    </section>

    <section>

      <h2>Admissions</h2>

      <p>
        Learn about our admission process.
      </p>

      <a href="/admissions">
        Apply Now
      </a>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 Sunrise School</p>
  </footer>

</body>
</html>
```

### Explanation

A school homepage can organize content into:

```text
About
Academics
Admissions
Events
Contact
```

Use sections to group related information.

### Remember

```text
School
→ About
→ Academics
→ Admissions
→ Contact
```

---

## 174. Create a Travel Homepage

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Explore India</title>
</head>

<body>

  <header>

    <h1>Explore India</h1>

    <nav aria-label="Travel navigation">
      <a href="/">Home</a>
      <a href="/destinations">Destinations</a>
      <a href="/packages">Packages</a>
      <a href="/contact">Contact</a>
    </nav>

  </header>

  <main>

    <section>

      <h2>Discover Your Next Destination</h2>

      <p>
        Explore beautiful destinations and unforgettable experiences.
      </p>

      <a href="/destinations">
        Explore Destinations
      </a>

    </section>

    <section>

      <h2>Popular Destinations</h2>

      <article>
        <h3>Odisha</h3>
        <p>
          Discover beaches, temples, culture, and local food.
        </p>
        <a href="/destinations/odisha">
          Explore Odisha
        </a>
      </article>

      <article>
        <h3>Kerala</h3>
        <p>
          Explore backwaters, nature, and local culture.
        </p>
        <a href="/destinations/kerala">
          Explore Kerala
        </a>
      </article>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 Explore India</p>
  </footer>

</body>
</html>
```

### Explanation

A travel homepage commonly contains:

```text
Hero
→ Main travel message

Destinations
→ Places to explore

Packages
→ Travel offerings

Contact
→ Business/contact information
```

### Remember

```text
Travel
→ Destination
→ Experience
→ Booking
```

---

## 175. Create a SaaS Homepage

### Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ProjectFlow</title>
</head>

<body>

  <header>

    <a href="/">
      <strong>ProjectFlow</strong>
    </a>

    <nav aria-label="Main navigation">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="/signup">
      Start Free
    </a>

  </header>

  <main>

    <section>

      <h1>
        Manage Your Projects Better
      </h1>

      <p>
        ProjectFlow helps teams organize projects,
        tasks, and collaboration in one place.
      </p>

      <a href="/signup">
        Start Free
      </a>

    </section>

    <section id="features">

      <h2>Features</h2>

      <article>
        <h3>Project Management</h3>
        <p>
          Organize projects and tasks.
        </p>
      </article>

      <article>
        <h3>Team Collaboration</h3>
        <p>
          Work together with your team.
        </p>
      </article>

      <article>
        <h3>Reports</h3>
        <p>
          Understand project performance.
        </p>
      </article>

    </section>

    <section id="pricing">

      <h2>Pricing</h2>

      <article>
        <h3>Free</h3>
        <p>
          For individuals getting started.
        </p>
      </article>

      <article>
        <h3>Pro</h3>
        <p>
          For growing teams.
        </p>
      </article>

    </section>

    <section id="about">

      <h2>About ProjectFlow</h2>

      <p>
        ProjectFlow helps teams work more efficiently.
      </p>

    </section>

    <section id="contact">

      <h2>Contact</h2>

      <address>
        <a href="mailto:hello@example.com">
          hello@example.com
        </a>
      </address>

    </section>

  </main>

  <footer>

    <p>
      &copy; 2026 ProjectFlow
    </p>

  </footer>

</body>
</html>
```

### Explanation

A SaaS homepage commonly contains:

```text
Header
→ Brand + navigation + CTA

Hero
→ Product value proposition

Features
→ What the product does

Pricing
→ Plans

About
→ Product/company information

Contact
→ Contact information

Footer
→ Supporting links and copyright
```

### Remember

```text
SaaS
→ Problem
→ Solution
→ Features
→ Pricing
→ CTA
```

# Final Revision

```text
161. Blog
     → article + section + aside

162. News Article
     → article + article header/footer

163. Magazine
     → sections + articles

164. E-commerce
     → products + categories

165. Landing Page
     → hero + features + CTA

166. Dashboard
     → sections + metrics + aside

167. Documentation
     → aside + nav + article

168. FAQ
     → details + summary

169. Help Center
     → search + categories + articles

170. Portfolio
     → about + projects + contact

171. Restaurant
     → menu + dishes + address

172. Hospital
     → services + doctors + appointments

173. School
     → academics + admissions

174. Travel
     → destinations + experiences

175. SaaS
     → hero + features + pricing + CTA
```

# Master Memory Rule

```text
<header>
→ Introductory content + navigation

<nav>
→ Navigation links

<main>
→ Main content of the page

<section>
→ Group of related content

<article>
→ Independent/reusable piece of content

<aside>
→ Related but secondary content

<footer>
→ Footer information

<address>
→ Contact information

<details>
→ Expandable information

<summary>
→ Label for expandable information
```

# Most Important Interview Idea

```text
Semantic HTML is not about making a page look different.

Semantic HTML is about choosing HTML elements
that describe what the content means.
```

```text
<div>
→ Generic container

<article>
→ Independent content

<nav>
→ Navigation

<main>
→ Main content

<section>
→ Related group of content

<aside>
→ Secondary related content

<footer>
→ Footer content
```

### Final Memory Trick

```text
HTML semantics
→ "What IS this content?"

CSS
→ "What should this content LOOK like?"
```

Use semantic HTML first, then CSS to make the browser endure whatever beautiful design humans have invented this week.

# Module 9 – Accessibility (176–190)

## 176. Create Accessible Navigation

### Code

```html
<header>
  <a href="/" aria-label="MyWebsite home">
    MyWebsite
  </a>

  <nav aria-label="Main navigation">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>

      <li>
        <a href="/about">About</a>
      </li>

      <li>
        <a href="/services">Services</a>
      </li>

      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>
```

### Explanation

Use `<nav>` for a group of navigation links.

`aria-label` gives the navigation a meaningful name for assistive technologies.

```text
<nav>
→ Navigation region

aria-label
→ Describes which navigation this is
```

Use real `<a>` elements for links because they are naturally keyboard accessible.

### Remember

> `<nav>` = navigation  
> `<a>` = link

---

## 177. Create an Accessible Login Form

### Code

```html
<form action="/login" method="post">

  <fieldset>

    <legend>Login</legend>

    <div>
      <label for="email">
        Email address
      </label>

      <input
        type="email"
        id="email"
        name="email"
        autocomplete="email"
        required>
    </div>

    <div>
      <label for="password">
        Password
      </label>

      <input
        type="password"
        id="password"
        name="password"
        autocomplete="current-password"
        required>
    </div>

    <button type="submit">
      Log in
    </button>

  </fieldset>

</form>
```

### Explanation

An accessible form should have a proper `<label>` for each form control.

The connection is:

```text
<label for="email">
        ↓
<input id="email">
```

The `for` value must match the input's `id`.

`required` tells the browser that the field must be completed.

### Remember

```text
Accessible form
→ label
→ correctly associated input
→ keyboard-friendly controls
→ clear instructions
```

---

## 178. Create an Accessible Table

### Code

```html
<table>

  <caption>
    Student Examination Results
  </caption>

  <thead>
    <tr>
      <th scope="col">Student</th>
      <th scope="col">HTML</th>
      <th scope="col">CSS</th>
      <th scope="col">JavaScript</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Rahul</th>
      <td>85</td>
      <td>90</td>
      <td>88</td>
    </tr>

    <tr>
      <th scope="row">Priya</th>
      <td>92</td>
      <td>87</td>
      <td>95</td>
    </tr>
  </tbody>

</table>
```

### Explanation

Use semantic table elements to explain the relationships between data.

```text
<table>
→ Table

<caption>
→ Table description/title

<th>
→ Header cell

scope="col"
→ Header describes a column

scope="row"
→ Header describes a row

<td>
→ Data cell
```

### Remember

> `th` tells assistive technology what a data cell belongs to.

---

## 179. Create Accessible Modal Markup

### Code

```html
<button type="button">
  Open Settings
</button>

<dialog
  id="settings-dialog"
  aria-labelledby="dialog-title">

  <h2 id="dialog-title">
    Settings
  </h2>

  <p>
    Update your account settings.
  </p>

  <form method="dialog">
    <button type="submit">
      Close
    </button>
  </form>

</dialog>
```

### Explanation

The native `<dialog>` element is designed for dialog interfaces.

The heading identifies the dialog:

```html
<h2 id="dialog-title">
  Settings
</h2>
```

The dialog references that heading:

```html
aria-labelledby="dialog-title"
```

A real application must also manage opening, focus, and closing behavior correctly with JavaScript.

### Remember

```text
<dialog>
→ Dialog container

aria-labelledby
→ Gives the dialog an accessible name
```

---

## 180. Create an Accessible Image Gallery

### Code

```html
<section aria-labelledby="gallery-title">

  <h2 id="gallery-title">
    Travel Gallery
  </h2>

  <figure>

    <img
      src="mountain.jpg"
      alt="Snow-covered mountain surrounded by trees">

    <figcaption>
      Mountain landscape
    </figcaption>

  </figure>

  <figure>

    <img
      src="beach.jpg"
      alt="Sandy beach beside blue ocean water">

    <figcaption>
      Beach landscape
    </figcaption>

  </figure>

</section>
```

### Explanation

Every meaningful image should have useful alternative text.

```text
alt
→ Describes the image

<figure>
→ Groups image/content

<figcaption>
→ Provides a visible caption
```

If an image is purely decorative, an empty `alt` can be appropriate:

```html
<img
  src="decoration.svg"
  alt="">
```

### Remember

> `alt` describes the image's purpose or meaning.

---

## 181. Create an Accessible Accordion

### Code

```html
<section>

  <h2>Frequently Asked Questions</h2>

  <details>
    <summary>
      What is HTML?
    </summary>

    <p>
      HTML provides the structure of a webpage.
    </p>
  </details>

  <details>
    <summary>
      What is CSS?
    </summary>

    <p>
      CSS controls the presentation and layout of a webpage.
    </p>
  </details>

</section>
```

### Explanation

The native `<details>` and `<summary>` elements provide a simple accessible disclosure pattern.

```text
<details>
→ Expandable container

<summary>
→ Control used to open/close it
```

They are preferable to creating a custom accordion when the simple native behavior is enough.

### Remember

> Native HTML is often the easiest accessibility feature. Humanity invented JavaScript for everything, including things HTML already knows how to do.

---

## 182. Create Accessible Tabs

### Code

```html
<div>

  <div role="tablist" aria-label="Product information">

    <button
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="description-panel"
      id="description-tab">

      Description

    </button>

    <button
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="reviews-panel"
      id="reviews-tab">

      Reviews

    </button>

  </div>

  <section
    id="description-panel"
    role="tabpanel"
    aria-labelledby="description-tab">

    <h2>Description</h2>

    <p>
      Product description goes here.
    </p>

  </section>

  <section
    id="reviews-panel"
    role="tabpanel"
    aria-labelledby="reviews-tab"
    hidden>

    <h2>Reviews</h2>

    <p>
      Product reviews go here.
    </p>

  </section>

</div>
```

### Explanation

Tabs require relationships between the controls and their panels.

```text
tab
→ Controls a panel

aria-controls
→ Identifies the controlled panel

aria-selected
→ Tells which tab is selected

tabpanel
→ Content associated with a tab

aria-labelledby
→ Names the panel using its tab
```

A complete tab component also needs JavaScript for keyboard behavior and switching panels.

### Remember

```text
Tab
→ Select

Tabpanel
→ Show content
```

---

## 183. Create an Accessible Dropdown

### Code

```html
<label for="country">
  Choose your country
</label>

<select
  id="country"
  name="country">

  <option value="">
    Select a country
  </option>

  <option value="india">
    India
  </option>

  <option value="usa">
    United States
  </option>

  <option value="uk">
    United Kingdom
  </option>

</select>
```

### Explanation

For a normal form selection, the native `<select>` is usually the best choice.

It already provides:

```text
Keyboard support
→ Built in

Screen reader support
→ Built in

Selection behavior
→ Built in
```

Avoid replacing a native `<select>` with a complicated collection of `<div>` elements unless there is a real requirement.

### Remember

> Native `<select>` = accessible dropdown with much less suffering.

---

## 184. Create an Accessible FAQ

### Code

```html
<main>

  <h1>Frequently Asked Questions</h1>

  <section aria-labelledby="account-faq">

    <h2 id="account-faq">
      Account Questions
    </h2>

    <details>
      <summary>
        How do I create an account?
      </summary>

      <p>
        Select the sign-up option and complete the registration form.
      </p>
    </details>

    <details>
      <summary>
        How do I reset my password?
      </summary>

      <p>
        Use the password reset link on the login page.
      </p>
    </details>

  </section>

</main>
```

### Explanation

The native `<details>` and `<summary>` elements are useful for FAQs because users can expand and collapse answers.

The page also has a logical heading structure:

```text
h1
 ↓
h2
 ↓
FAQ items
```

### Remember

```text
FAQ
→ details
→ summary
→ answer
```

---

## 185. Create an Accessible Search

### Code

```html
<header>

  <form
    action="/search"
    method="get"
    role="search">

    <label for="site-search">
      Search this website
    </label>

    <input
      type="search"
      id="site-search"
      name="q">

    <button type="submit">
      Search
    </button>

  </form>

</header>
```

### Explanation

`type="search"` identifies the input as a search field.

The form uses:

```html
role="search"
```

to identify the search landmark.

The `<label>` gives the input an accessible name.

### Remember

```text
Search
→ <form>
→ type="search"
→ label
→ button
```

---

## 186. Create Accessible Pagination

### Code

```html
<nav
  aria-label="Pagination">

  <a href="/articles?page=1">
    <span aria-hidden="true">&laquo;</span>
    <span>Previous</span>
  </a>

  <a
    href="/articles?page=1"
    aria-label="Page 1">
    1
  </a>

  <a
    href="/articles?page=2"
    aria-current="page">
    2
  </a>

  <a
    href="/articles?page=3"
    aria-label="Page 3">
    3
  </a>

  <a href="/articles?page=3">
    <span>Next</span>
    <span aria-hidden="true">&raquo;</span>
  </a>

</nav>
```

### Explanation

Pagination is navigation, so `<nav>` is appropriate.

`aria-label` identifies the navigation.

`aria-current="page"` tells assistive technology which page is currently active.

```text
aria-current="page"
→ This is the current page
```

### Remember

```text
Pagination
→ nav
→ aria-label
→ aria-current="page"
```

---

## 187. Create Accessible Breadcrumbs

### Code

```html
<nav
  aria-label="Breadcrumb">

  <ol>

    <li>
      <a href="/">
        Home
      </a>
    </li>

    <li>
      <a href="/products">
        Products
      </a>
    </li>

    <li>
      <span aria-current="page">
        Shoes
      </span>
    </li>

  </ol>

</nav>
```

### Explanation

Breadcrumbs show the user's location within a website hierarchy.

Example:

```text
Home
 ↓
Products
 ↓
Shoes
```

The current page uses:

```html
aria-current="page"
```

### Remember

> Breadcrumbs = navigation showing the current location in the site hierarchy.

---

## 188. Create a Skip Navigation Link

### Code

```html
<a
  href="#main-content"
  class="skip-link">

  Skip to main content

</a>

<header>

  <h1>My Website</h1>

  <nav aria-label="Main navigation">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
  </nav>

</header>

<main id="main-content">

  <h2>Main Content</h2>

  <p>
    This is the main content of the page.
  </p>

</main>
```

### Explanation

A skip link allows keyboard users to bypass repeated navigation and move directly to the main content.

The link points to:

```html
href="#main-content"
```

The target element has:

```html
id="main-content"
```

CSS commonly hides the skip link until it receives keyboard focus.

### Remember

```text
Skip link
→ Skip repeated navigation
→ Jump to main content
```

---

## 189. Create an ARIA Landmark Page

### Code

```html
<header>

  <h1>My Website</h1>

  <nav aria-label="Main navigation">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>

</header>

<main>

  <section aria-labelledby="content-title">

    <h2 id="content-title">
      Main Content
    </h2>

    <p>
      This is the primary content of the page.
    </p>

  </section>

  <aside aria-labelledby="related-title">

    <h2 id="related-title">
      Related Content
    </h2>

    <p>
      Additional information appears here.
    </p>

  </aside>

</main>

<footer>

  <p>
    &copy; 2026 My Website
  </p>

</footer>
```

### Explanation

Landmark regions help assistive technology users understand the major areas of a page.

Common semantic landmarks include:

```text
<header>
→ banner landmark in the appropriate page context

<nav>
→ navigation landmark

<main>
→ main landmark

<aside>
→ complementary landmark

<footer>
→ contentinfo landmark in the appropriate page context
```

Semantic HTML often creates the landmark automatically, so you should not add ARIA roles unnecessarily.

### Remember

> Use semantic HTML first. ARIA is for cases where native HTML does not already provide the required semantics.

---

## 190. Create a Keyboard-Friendly Form

### Code

```html
<form action="/contact" method="post">

  <fieldset>

    <legend>Contact Information</legend>

    <p>
      <label for="name">
        Full name
      </label>

      <input
        type="text"
        id="name"
        name="name"
        autocomplete="name"
        required>
    </p>

    <p>
      <label for="email">
        Email address
      </label>

      <input
        type="email"
        id="email"
        name="email"
        autocomplete="email"
        required>
    </p>

    <p>
      <label for="message">
        Message
      </label>

      <textarea
        id="message"
        name="message"
        rows="5"
        required></textarea>
    </p>

    <button type="submit">
      Send Message
    </button>

  </fieldset>

</form>
```

### Explanation

Native form controls are naturally designed to work with the keyboard.

Users can normally move through controls using:

```text
Tab
→ Move forward

Shift + Tab
→ Move backward

Enter / Space
→ Activate appropriate controls
```

Use real:

```text
<input>
<textarea>
<button>
<select>
```

instead of creating fake controls with `<div>` elements.

### Remember

```text
Keyboard-friendly form
→ Native controls
→ Labels
→ Logical order
→ Visible focus
→ No keyboard traps
```

# Final Revision

```text
176. Accessible Navigation
     → nav + meaningful links

177. Accessible Login
     → label + input + fieldset

178. Accessible Table
     → caption + th + scope

179. Accessible Modal
     → dialog + accessible name + focus management

180. Accessible Image Gallery
     → meaningful alt + figure + figcaption

181. Accessible Accordion
     → details + summary

182. Accessible Tabs
     → tablist + tab + tabpanel + ARIA relationships

183. Accessible Dropdown
     → native select

184. Accessible FAQ
     → details + summary

185. Accessible Search
     → search form + label + search input

186. Accessible Pagination
     → nav + aria-current

187. Accessible Breadcrumbs
     → nav + aria-current

188. Skip Navigation
     → jump directly to main content

189. ARIA Landmarks
     → semantic HTML first

190. Keyboard-Friendly Form
     → native controls + logical order
```

# Master Accessibility Rule

```text
1. Use semantic HTML first.
2. Use native controls whenever possible.
3. Give controls accessible names.
4. Make everything usable with a keyboard.
5. Use ARIA only when native HTML does not provide the needed semantics.
6. Never use ARIA to compensate for badly chosen HTML.
```

# The Most Important Mental Model

```text
Semantic HTML
      ↓
Browser understands the structure
      ↓
Assistive technology can understand the page
      ↓
Keyboard and screen-reader users can navigate
      ↓
Accessible experience
```

```text
Native HTML
→ First choice

ARIA
→ Enhancement when needed

JavaScript
→ Behavior and interaction
```

> **Best accessibility code is often the boring code.** A native `<button>` beats a `<div>` pretending to be a button, because browsers have already spent decades doing the boring accessibility work for you.
# Module 10 – Real Interview Projects (191–200)

## 191. Create a Netflix Homepage Using HTML Only

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Netflix - HTML Practice</title>
</head>

<body>

  <header>

    <a href="/">
      Netflix
    </a>

    <nav aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#tv-shows">TV Shows</a>
      <a href="#movies">Movies</a>
      <a href="#new">New & Popular</a>
      <a href="#my-list">My List</a>
    </nav>

    <a href="/login">
      Sign In
    </a>

  </header>

  <main>

    <!-- Hero section -->

    <section id="home">

      <h1>Stranger Things</h1>

      <p>
        A group of friends discovers mysterious events
        happening in their town.
      </p>

      <p>
        2026 · Drama · Mystery · 16+
      </p>

      <a href="/watch">
        Play
      </a>

      <a href="/details">
        More Info
      </a>

    </section>

    <!-- Popular content -->

    <section id="tv-shows">

      <h2>Popular TV Shows</h2>

      <article>

        <h3>Show One</h3>

        <img
          src="show-one.jpg"
          alt="Poster for Show One">

        <a href="/shows/show-one">
          View Show One
        </a>

      </article>

      <article>

        <h3>Show Two</h3>

        <img
          src="show-two.jpg"
          alt="Poster for Show Two">

        <a href="/shows/show-two">
          View Show Two
        </a>

      </article>

      <article>

        <h3>Show Three</h3>

        <img
          src="show-three.jpg"
          alt="Poster for Show Three">

        <a href="/shows/show-three">
          View Show Three
        </a>

      </article>

    </section>

    <!-- Movies -->

    <section id="movies">

      <h2>Popular Movies</h2>

      <article>

        <h3>Movie One</h3>

        <img
          src="movie-one.jpg"
          alt="Poster for Movie One">

        <a href="/movies/movie-one">
          View Movie One
        </a>

      </article>

      <article>

        <h3>Movie Two</h3>

        <img
          src="movie-two.jpg"
          alt="Poster for Movie Two">

        <a href="/movies/movie-two">
          View Movie Two
        </a>

      </article>

    </section>

    <!-- New content -->

    <section id="new">

      <h2>New & Popular</h2>

      <article>

        <h3>New Release</h3>

        <p>
          Check out the latest content.
        </p>

        <a href="/new">
          Explore
        </a>

      </article>

    </section>

    <!-- My List -->

    <section id="my-list">

      <h2>My List</h2>

      <p>
        Your saved movies and shows will appear here.
      </p>

    </section>

  </main>

  <footer>

    <nav aria-label="Footer navigation">
      <a href="/faq">FAQ</a>
      <a href="/help">Help Center</a>
      <a href="/terms">Terms of Use</a>
      <a href="/privacy">Privacy</a>
    </nav>

    <p>
      &copy; 2026 Netflix HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

The goal is **not** to reproduce Netflix's actual production HTML.

The interview goal is to understand how you would break a large homepage into semantic sections.

Think:

```text
Netflix Homepage
│
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Sign In
│
├── Main
│   ├── Hero
│   ├── Popular TV Shows
│   ├── Popular Movies
│   ├── New & Popular
│   └── My List
│
└── Footer
```

### Important Interview Point

Don't use hundreds of meaningless `<div>` elements just because the real website is complicated.

Start with the meaning of the content:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

### Remember

```text
Netflix
→ Hero
→ Content sections
→ Movies / Shows
→ Footer
```

---

## 192. Create an Amazon Homepage Structure

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Amazon - HTML Practice</title>
</head>

<body>

  <header>

    <a href="/">
      Amazon
    </a>

    <address>
      Deliver to India
    </address>

    <form
      action="/search"
      method="get">

      <label for="search">
        Search products
      </label>

      <input
        type="search"
        id="search"
        name="q">

      <button type="submit">
        Search
      </button>

    </form>

    <nav aria-label="Account navigation">
      <a href="/account">
        Account
      </a>

      <a href="/orders">
        Orders
      </a>

      <a href="/cart">
        Cart
      </a>
    </nav>

  </header>

  <nav aria-label="Product categories">

    <a href="/deals">
      Today's Deals
    </a>

    <a href="/electronics">
      Electronics
    </a>

    <a href="/fashion">
      Fashion
    </a>

    <a href="/home">
      Home
    </a>

    <a href="/books">
      Books
    </a>

  </nav>

  <main>

    <!-- Hero -->

    <section>

      <h1>
        Welcome to Amazon
      </h1>

      <p>
        Discover products for your everyday needs.
      </p>

      <a href="/products">
        Shop Now
      </a>

    </section>

    <!-- Product categories -->

    <section>

      <h2>
        Shop by Category
      </h2>

      <article>

        <h3>
          Electronics
        </h3>

        <img
          src="electronics.jpg"
          alt="Electronics products">

        <a href="/electronics">
          Shop Electronics
        </a>

      </article>

      <article>

        <h3>
          Fashion
        </h3>

        <img
          src="fashion.jpg"
          alt="Fashion products">

        <a href="/fashion">
          Shop Fashion
        </a>

      </article>

      <article>

        <h3>
          Home
        </h3>

        <img
          src="home.jpg"
          alt="Home products">

        <a href="/home">
          Shop Home
        </a>

      </article>

    </section>

    <!-- Deals -->

    <section>

      <h2>
        Today's Deals
      </h2>

      <article>

        <h3>
          Wireless Headphones
        </h3>

        <p>
          ₹2,999
        </p>

        <a href="/products/headphones">
          View Product
        </a>

      </article>

      <article>

        <h3>
          Smart Watch
        </h3>

        <p>
          ₹4,999
        </p>

        <a href="/products/smart-watch">
          View Product
        </a>

      </article>

    </section>

    <!-- Recommended products -->

    <section>

      <h2>
        Recommended For You
      </h2>

      <article>

        <h3>
          Product One
        </h3>

        <p>
          Recommended product description.
        </p>

        <a href="/products/one">
          View Product
        </a>

      </article>

      <article>

        <h3>
          Product Two
        </h3>

        <p>
          Recommended product description.
        </p>

        <a href="/products/two">
          View Product
        </a>

      </article>

    </section>

  </main>

  <footer>

    <nav aria-label="Footer navigation">

      <a href="/about">
        About Amazon
      </a>

      <a href="/careers">
        Careers
      </a>

      <a href="/privacy">
        Privacy
      </a>

      <a href="/help">
        Help
      </a>

    </nav>

    <p>
      &copy; 2026 Amazon HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

An Amazon-style homepage has several different types of content.

Think:

```text
Amazon Homepage
│
├── Header
│   ├── Logo
│   ├── Location
│   ├── Search
│   └── Account / Orders / Cart
│
├── Category Navigation
│
├── Main
│   ├── Hero
│   ├── Categories
│   ├── Deals
│   └── Recommendations
│
└── Footer
```

The search area is especially important:

```html
<form>
  <input type="search">
  <button>
</form>
```

A search action is a form submission, not merely a pretty box pretending to be useful.

### Remember

```text
Amazon
→ Search
→ Categories
→ Products
→ Deals
→ Recommendations
→ Footer
```

---

## 193. Create a YouTube Homepage Structure

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>YouTube - HTML Practice</title>
</head>

<body>

  <header>

    <a href="/">
      YouTube
    </a>

    <form
      action="/results"
      method="get">

      <label for="video-search">
        Search YouTube
      </label>

      <input
        type="search"
        id="video-search"
        name="search_query">

      <button type="submit">
        Search
      </button>

    </form>

    <nav aria-label="Account navigation">
      <a href="/create">
        Create
      </a>

      <a href="/account">
        Account
      </a>
    </nav>

  </header>

  <aside>

    <nav aria-label="YouTube navigation">

      <a href="/">
        Home
      </a>

      <a href="/shorts">
        Shorts
      </a>

      <a href="/subscriptions">
        Subscriptions
      </a>

      <a href="/history">
        History
      </a>

      <a href="/playlists">
        Playlists
      </a>

    </nav>

  </aside>

  <main>

    <section>

      <h1>
        Recommended Videos
      </h1>

      <article>

        <a href="/watch?v=video1">

          <img
            src="video-one.jpg"
            alt="Thumbnail for a web development tutorial">

          <h2>
            Learn HTML in One Hour
          </h2>

        </a>

        <p>
          Web Development Channel
        </p>

        <p>
          100K views · 2 days ago
        </p>

      </article>

      <article>

        <a href="/watch?v=video2">

          <img
            src="video-two.jpg"
            alt="Thumbnail for a JavaScript tutorial">

          <h2>
            JavaScript Fundamentals
          </h2>

        </a>

        <p>
          Programming Channel
        </p>

        <p>
          250K views · 5 days ago
        </p>

      </article>

      <article>

        <a href="/watch?v=video3">

          <img
            src="video-three.jpg"
            alt="Thumbnail for a CSS tutorial">

          <h2>
            Master CSS Layout
          </h2>

        </a>

        <p>
          Frontend Channel
        </p>

        <p>
          80K views · 1 week ago
        </p>

      </article>

    </section>

    <section>

      <h2>
        Trending
      </h2>

      <article>

        <h3>
          Trending Video One
        </h3>

        <p>
          500K views
        </p>

      </article>

      <article>

        <h3>
          Trending Video Two
        </h3>

        <p>
          750K views
        </p>

      </article>

    </section>

  </main>

  <footer>

    <nav aria-label="Footer navigation">

      <a href="/about">
        About
      </a>

      <a href="/press">
        Press
      </a>

      <a href="/copyright">
        Copyright
      </a>

      <a href="/terms">
        Terms
      </a>

      <a href="/privacy">
        Privacy
      </a>

    </nav>

    <p>
      &copy; 2026 YouTube HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

A YouTube-style homepage can be mentally divided into:

```text
YouTube Homepage
│
├── Header
│   ├── Logo
│   ├── Search
│   └── Account actions
│
├── Sidebar
│   └── Navigation
│
├── Main
│   ├── Recommended videos
│   └── Trending
│
└── Footer
```

Each video can be represented as an independent `<article>`.

```html
<article>
  <img>
  <h2>
  <p>
</article>
```

The thumbnail and title can be wrapped in a link because clicking the video should navigate somewhere.

### Remember

```text
YouTube
→ Header
→ Sidebar
→ Search
→ Video cards
→ Footer
```

# Interview Thinking

When an interviewer says:

> "Build the HTML structure for Netflix."

They usually do **not** expect you to memorize Netflix's actual source code.

They want to see whether you can translate a visual interface into meaningful HTML.

Use this process:

```text
1. Identify the page regions
        ↓
2. Identify navigation
        ↓
3. Identify the main content
        ↓
4. Group related content
        ↓
5. Identify independent content
        ↓
6. Choose semantic HTML
        ↓
7. Add accessibility
        ↓
8. Add CSS later
        ↓
9. Add JavaScript behavior later
```

# Master Comparison

```text
Netflix
→ Content platform
→ Hero + shows + movies

Amazon
→ E-commerce
→ Search + categories + products

YouTube
→ Video platform
→ Search + navigation + video content
```

# Most Important Rule

```text
Do NOT start with:

<div>
<div>
<div>
<div>
<div>

Start with:

<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Then use `<div>` only when you genuinely need a generic container.

That distinction matters in interviews because the interviewer is testing whether you understand HTML as a **document structure**, not whether you've discovered that `<div>` exists.

# Module 10 – Real Interview Projects (191–200)

## 194. Create a LinkedIn Homepage Structure

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>LinkedIn - HTML Practice</title>
</head>

<body>

  <header>

    <a href="/">
      LinkedIn
    </a>

    <form
      action="/search"
      method="get">

      <label for="linkedin-search">
        Search LinkedIn
      </label>

      <input
        type="search"
        id="linkedin-search"
        name="q">

      <button type="submit">
        Search
      </button>

    </form>

    <nav aria-label="Account navigation">

      <a href="/notifications">
        Notifications
      </a>

      <a href="/messages">
        Messages
      </a>

      <a href="/profile">
        Me
      </a>

    </nav>

  </header>

  <nav aria-label="Main navigation">

    <a href="/">
      Home
    </a>

    <a href="/network">
      My Network
    </a>

    <a href="/jobs">
      Jobs
    </a>

    <a href="/messaging">
      Messaging
    </a>

    <a href="/notifications">
      Notifications
    </a>

  </nav>

  <main>

    <aside>

      <section aria-labelledby="profile-title">

        <h2 id="profile-title">
          Your Profile
        </h2>

        <img
          src="profile.jpg"
          alt="Profile photo">

        <p>
          Utpanna Pradhan
        </p>

        <p>
          Frontend Developer
        </p>

        <a href="/profile">
          View Profile
        </a>

      </section>

    </aside>

    <section aria-labelledby="feed-title">

      <h1 id="feed-title">
        LinkedIn Feed
      </h1>

      <form
        action="/posts"
        method="post">

        <label for="post-content">
          Create a post
        </label>

        <textarea
          id="post-content"
          name="content"
          rows="4"
          placeholder="Start a post">
        </textarea>

        <button type="submit">
          Post
        </button>

      </form>

      <article>

        <header>

          <h2>
            Frontend Developer Community
          </h2>

          <p>
            2 hours ago
          </p>

        </header>

        <p>
          Sharing some useful frontend development tips
          for developers.
        </p>

        <footer>

          <button type="button">
            Like
          </button>

          <button type="button">
            Comment
          </button>

          <button type="button">
            Share
          </button>

        </footer>

      </article>

      <article>

        <header>

          <h2>
            Web Development Community
          </h2>

          <p>
            5 hours ago
          </p>

        </header>

        <p>
          Today I learned something interesting about
          semantic HTML.
        </p>

        <footer>

          <button type="button">
            Like
          </button>

          <button type="button">
            Comment
          </button>

          <button type="button">
            Share
          </button>

        </footer>

      </article>

    </section>

    <aside>

      <section aria-labelledby="news-title">

        <h2 id="news-title">
          LinkedIn News
        </h2>

        <ul>

          <li>
            <a href="/news/technology">
              Technology trends
            </a>
          </li>

          <li>
            <a href="/news/jobs">
              Latest job opportunities
            </a>
          </li>

          <li>
            <a href="/news/business">
              Business updates
            </a>
          </li>

        </ul>

      </section>

    </aside>

  </main>

  <footer>

    <nav aria-label="Footer navigation">

      <a href="/about">
        About
      </a>

      <a href="/accessibility">
        Accessibility
      </a>

      <a href="/privacy">
        Privacy
      </a>

      <a href="/terms">
        Terms
      </a>

    </nav>

    <p>
      &copy; 2026 LinkedIn HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

A LinkedIn-style homepage is mainly a **social feed layout**.

```text
LinkedIn
│
├── Header
│   ├── Logo
│   ├── Search
│   └── Account actions
│
├── Navigation
│
├── Main
│   ├── Profile sidebar
│   ├── Feed
│   │   ├── Create post
│   │   └── Posts
│   └── News sidebar
│
└── Footer
```

The important HTML idea is that each post is an independent piece of content, so `<article>` makes sense.

### Remember

```text
LinkedIn
→ Profile
→ Create Post
→ Feed
→ Posts
→ News
```

---

## 195. Create a GitHub Profile Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>GitHub Profile - HTML Practice</title>
</head>

<body>

  <header>

    <a href="/">
      GitHub
    </a>

    <form
      action="/search"
      method="get">

      <label for="github-search">
        Search GitHub
      </label>

      <input
        type="search"
        id="github-search"
        name="q">

      <button type="submit">
        Search
      </button>

    </form>

    <nav aria-label="Account navigation">

      <a href="/notifications">
        Notifications
      </a>

      <a href="/profile">
        Profile
      </a>

    </nav>

  </header>

  <main>

    <aside>

      <img
        src="avatar.jpg"
        alt="Profile picture of Utpanna Pradhan">

      <h1>
        Utpanna Pradhan
      </h1>

      <p>
        Frontend Developer
      </p>

      <p>
        Building modern web applications with React.
      </p>

      <a href="/settings">
        Edit Profile
      </a>

    </aside>

    <section>

      <nav aria-label="Profile navigation">

        <a href="#overview">
          Overview
        </a>

        <a href="#repositories">
          Repositories
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#stars">
          Stars
        </a>

      </nav>

      <section
        id="overview"
        aria-labelledby="overview-title">

        <h2 id="overview-title">
          Overview
        </h2>

        <p>
          Frontend developer interested in React,
          JavaScript, and modern web development.
        </p>

      </section>

      <section
        id="repositories"
        aria-labelledby="repositories-title">

        <h2 id="repositories-title">
          Popular Repositories
        </h2>

        <article>

          <h3>
            portfolio
          </h3>

          <p>
            A modern developer portfolio website.
          </p>

          <p>
            JavaScript · 120 stars
          </p>

          <a href="/utpanna/portfolio">
            View repository
          </a>

        </article>

        <article>

          <h3>
            gym-template
          </h3>

          <p>
            Responsive gym website template.
          </p>

          <p>
            React · 80 stars
          </p>

          <a href="/utpanna/gym-template">
            View repository
          </a>

        </article>

      </section>

      <section
        id="projects"
        aria-labelledby="projects-title">

        <h2 id="projects-title">
          Projects
        </h2>

        <ul>

          <li>
            React Portfolio
          </li>

          <li>
            Website Templates
          </li>

          <li>
            Full Stack Applications
          </li>

        </ul>

      </section>

    </section>

  </main>

  <footer>

    <p>
      &copy; 2026 GitHub HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

A GitHub profile can be divided into:

```text
GitHub Profile
│
├── Header
│   ├── Logo
│   ├── Search
│   └── Account
│
├── Main
│   ├── Profile information
│   ├── Profile navigation
│   ├── Overview
│   ├── Repositories
│   └── Projects
│
└── Footer
```

Repositories are independent pieces of content, so `<article>` is a reasonable semantic choice.

### Remember

```text
GitHub Profile
→ Profile information
→ Navigation
→ Overview
→ Repositories
→ Projects
```

---

## 196. Create an Apple Landing Page Structure

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Apple - HTML Practice</title>
</head>

<body>

  <header>

    <a href="/">
      Apple
    </a>

    <nav aria-label="Main navigation">

      <a href="/store">
        Store
      </a>

      <a href="/mac">
        Mac
      </a>

      <a href="/ipad">
        iPad
      </a>

      <a href="/iphone">
        iPhone
      </a>

      <a href="/watch">
        Watch
      </a>

      <a href="/airpods">
        AirPods
      </a>

      <a href="/support">
        Support
      </a>

    </nav>

    <a href="/search">
      Search
    </a>

    <a href="/bag">
      Shopping Bag
    </a>

  </header>

  <main>

    <section
      aria-labelledby="iphone-title">

      <h1 id="iphone-title">
        iPhone
      </h1>

      <p>
        Powerful technology designed for everyday life.
      </p>

      <a href="/iphone">
        Learn More
      </a>

      <a href="/shop-iphone">
        Buy
      </a>

      <figure>

        <img
          src="iphone.jpg"
          alt="Latest iPhone">

        <figcaption>
          Latest iPhone
        </figcaption>

      </figure>

    </section>

    <section
      aria-labelledby="mac-title">

      <h2 id="mac-title">
        Mac
      </h2>

      <p>
        Designed for performance and creativity.
      </p>

      <a href="/mac">
        Learn More
      </a>

      <a href="/shop-mac">
        Buy
      </a>

      <figure>

        <img
          src="mac.jpg"
          alt="Mac computer">

        <figcaption>
          Mac
        </figcaption>

      </figure>

    </section>

    <section
      aria-labelledby="watch-title">

      <h2 id="watch-title">
        Apple Watch
      </h2>

      <p>
        Technology that helps you stay connected.
      </p>

      <a href="/watch">
        Learn More
      </a>

      <a href="/shop-watch">
        Buy
      </a>

      <figure>

        <img
          src="watch.jpg"
          alt="Apple Watch">

        <figcaption>
          Apple Watch
        </figcaption>

      </figure>

    </section>

  </main>

  <footer>

    <nav aria-label="Footer navigation">

      <a href="/privacy">
        Privacy
      </a>

      <a href="/terms">
        Terms
      </a>

      <a href="/support">
        Support
      </a>

    </nav>

    <p>
      &copy; 2026 Apple HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

An Apple-style landing page is generally built around **large product-focused sections**.

```text
Apple Landing Page
│
├── Header
│   ├── Logo
│   ├── Product navigation
│   ├── Search
│   └── Shopping bag
│
├── Main
│   ├── iPhone section
│   ├── Mac section
│   └── Watch section
│
└── Footer
```

The important point is that each product promotion can be represented as a `<section>`.

### Remember

```text
Apple
→ Minimal navigation
→ Large product sections
→ Product image
→ Heading
→ Description
→ Learn More / Buy
```

---

## 197. Create a Spotify Homepage Structure

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Spotify - HTML Practice</title>
</head>

<body>

  <header>

    <a href="/">
      Spotify
    </a>

    <nav aria-label="Main navigation">

      <a href="/">
        Home
      </a>

      <a href="/search">
        Search
      </a>

      <a href="/library">
        Your Library
      </a>

    </nav>

    <nav aria-label="Account navigation">

      <a href="/signup">
        Sign Up
      </a>

      <a href="/login">
        Log In
      </a>

    </nav>

  </header>

  <main>

    <section
      aria-labelledby="recent-title">

      <h1 id="recent-title">
        Recently Played
      </h1>

      <article>

        <a href="/album/album-one">

          <img
            src="album-one.jpg"
            alt="Album One cover">

          <h2>
            Album One
          </h2>

        </a>

        <p>
          Artist One
        </p>

      </article>

      <article>

        <a href="/album/album-two">

          <img
            src="album-two.jpg"
            alt="Album Two cover">

          <h2>
            Album Two
          </h2>

        </a>

        <p>
          Artist Two
        </p>

      </article>

    </section>

    <section
      aria-labelledby="made-title">

      <h2 id="made-title">
        Made For You
      </h2>

      <article>

        <img
          src="playlist-one.jpg"
          alt="Daily Mix playlist cover">

        <h3>
          Daily Mix
        </h3>

        <p>
          Music selected for you.
        </p>

        <a href="/playlist/daily-mix">
          Play playlist
        </a>

      </article>

      <article>

        <img
          src="playlist-two.jpg"
          alt="Discover Weekly playlist cover">

        <h3>
          Discover Weekly
        </h3>

        <p>
          Discover new music every week.
        </p>

        <a href="/playlist/discover-weekly">
          Play playlist
        </a>

      </article>

    </section>

    <section
      aria-labelledby="popular-title">

      <h2 id="popular-title">
        Popular Artists
      </h2>

      <article>

        <h3>
          Artist One
        </h3>

        <a href="/artist/one">
          View Artist
        </a>

      </article>

      <article>

        <h3>
          Artist Two
        </h3>

        <a href="/artist/two">
          View Artist
        </a>

      </article>

    </section>

  </main>

  <footer>

    <nav aria-label="Footer navigation">

      <a href="/legal">
        Legal
      </a>

      <a href="/privacy">
        Privacy
      </a>

      <a href="/cookies">
        Cookies
      </a>

      <a href="/accessibility">
        Accessibility
      </a>

    </nav>

    <p>
      &copy; 2026 Spotify HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

A Spotify-style homepage focuses on music collections and personalized content.

```text
Spotify
│
├── Header
│   ├── Logo
│   ├── Home
│   ├── Search
│   ├── Library
│   └── Account
│
├── Main
│   ├── Recently Played
│   ├── Made For You
│   └── Popular Artists
│
└── Footer
```

Albums, playlists, and artists can be represented as independent content items.

```html
<article>
  ...
</article>
```

### Remember

```text
Spotify
→ Navigation
→ Recently Played
→ Playlists
→ Artists
→ Music content
```

# Interview Thinking

When given a real website, don't try to memorize the website.

Instead ask:

```text
What is the page?

        ↓

What are the major regions?

        ↓

Which regions are navigation?

        ↓

What is the main content?

        ↓

Which content is independent?

        ↓

Which semantic HTML element fits?
```

## Quick Comparison

```text
LinkedIn
→ Social network
→ Profile + Feed + Posts + News

GitHub
→ Developer platform
→ Profile + Repositories + Projects

Apple
→ Product landing page
→ Product-focused sections

Spotify
→ Music platform
→ Playlists + Albums + Artists
```

# Master Rule

```text
<header>
→ Top-level introductory content

<nav>
→ Navigation links

<main>
→ Primary page content

<section>
→ Thematic group of content

<article>
→ Independent piece of content

<aside>
→ Related/complementary content

<footer>
→ Footer information
```

> In an interview, **semantic structure matters more than copying the exact visual design**. CSS makes it look like the real website later. HTML's job is to explain what everything actually is.


# Module 10 – Real Interview Projects (191–200)

## 198. Create an Airbnb Homepage Structure

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Airbnb - HTML Practice</title>
</head>

<body>

  <header>

    <a href="/">
      Airbnb
    </a>

    <nav aria-label="Main navigation">

      <a href="/stays">
        Stays
      </a>

      <a href="/experiences">
        Experiences
      </a>

      <a href="/services">
        Services
      </a>

    </nav>

    <nav aria-label="Account navigation">

      <a href="/host">
        Airbnb your home
      </a>

      <a href="/login">
        Log in
      </a>

      <a href="/signup">
        Sign up
      </a>

    </nav>

  </header>

  <main>

    <section aria-labelledby="search-title">

      <h1 id="search-title">
        Find places to stay
      </h1>

      <form
        action="/search"
        method="get">

        <fieldset>

          <legend>
            Search for a stay
          </legend>

          <div>

            <label for="location">
              Where
            </label>

            <input
              type="search"
              id="location"
              name="location"
              placeholder="Search destinations">

          </div>

          <div>

            <label for="check-in">
              Check in
            </label>

            <input
              type="date"
              id="check-in"
              name="check_in">

          </div>

          <div>

            <label for="check-out">
              Check out
            </label>

            <input
              type="date"
              id="check-out"
              name="check_out">

          </div>

          <div>

            <label for="guests">
              Guests
            </label>

            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              value="1">

          </div>

          <button type="submit">
            Search
          </button>

        </fieldset>

      </form>

    </section>

    <section aria-labelledby="popular-title">

      <h2 id="popular-title">
        Popular destinations
      </h2>

      <article>

        <figure>

          <img
            src="goa.jpg"
            alt="Beach in Goa">

          <figcaption>
            Goa
          </figcaption>

        </figure>

        <p>
          Beach stays
        </p>

        <a href="/destinations/goa">
          Explore Goa
        </a>

      </article>

      <article>

        <figure>

          <img
            src="manali.jpg"
            alt="Mountain landscape in Manali">

          <figcaption>
            Manali
          </figcaption>

        </figure>

        <p>
          Mountain stays
        </p>

        <a href="/destinations/manali">
          Explore Manali
        </a>

      </article>

      <article>

        <figure>

          <img
            src="jaipur.jpg"
            alt="Historic architecture in Jaipur">

          <figcaption>
            Jaipur
          </figcaption>

        </figure>

        <p>
          Cultural stays
        </p>

        <a href="/destinations/jaipur">
          Explore Jaipur
        </a>

      </article>

    </section>

    <section aria-labelledby="stays-title">

      <h2 id="stays-title">
        Featured stays
      </h2>

      <article>

        <figure>

          <img
            src="villa.jpg"
            alt="Modern villa with swimming pool">

          <figcaption>
            Modern Villa
          </figcaption>

        </figure>

        <h3>
          Modern Villa
        </h3>

        <p>
          4 guests · 2 bedrooms · 2 bathrooms
        </p>

        <p>
          ₹8,000 night
        </p>

        <a href="/stays/villa">
          View stay
        </a>

      </article>

      <article>

        <figure>

          <img
            src="cabin.jpg"
            alt="Wooden cabin surrounded by trees">

          <figcaption>
            Forest Cabin
          </figcaption>

        </figure>

        <h3>
          Forest Cabin
        </h3>

        <p>
          2 guests · 1 bedroom · 1 bathroom
        </p>

        <p>
          ₹5,000 night
        </p>

        <a href="/stays/cabin">
          View stay
        </a>

      </article>

    </section>

    <section aria-labelledby="experiences-title">

      <h2 id="experiences-title">
        Experiences
      </h2>

      <article>

        <h3>
          Local Food Experience
        </h3>

        <p>
          Discover local food with experienced hosts.
        </p>

        <a href="/experiences/food">
          Explore experience
        </a>

      </article>

      <article>

        <h3>
          Photography Tour
        </h3>

        <p>
          Explore beautiful locations with a local guide.
        </p>

        <a href="/experiences/photography">
          Explore experience
        </a>

      </article>

    </section>

  </main>

  <footer>

    <nav aria-label="Footer navigation">

      <a href="/support">
        Support
      </a>

      <a href="/safety">
        Safety
      </a>

      <a href="/privacy">
        Privacy
      </a>

      <a href="/terms">
        Terms
      </a>

    </nav>

    <p>
      &copy; 2026 Airbnb HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

An Airbnb-style homepage is primarily a **search and discovery page**.

Think:

```text
Airbnb
│
├── Header
│   ├── Logo
│   ├── Main navigation
│   └── Account navigation
│
├── Main
│   ├── Search
│   ├── Popular destinations
│   ├── Featured stays
│   └── Experiences
│
└── Footer
```

The search area is a form because the user provides information and submits it.

```text
Where
Check in
Check out
Guests
    ↓
  Search
```

### Remember

```text
Airbnb
→ Search
→ Destinations
→ Stays
→ Experiences
```

---

## 199. Create a Medium Article Page

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>How I Learned Web Development</title>
</head>

<body>

  <header>

    <a href="/">
      Medium
    </a>

    <nav aria-label="Main navigation">

      <a href="/search">
        Search
      </a>

      <a href="/write">
        Write
      </a>

      <a href="/login">
        Sign In
      </a>

    </nav>

  </header>

  <main>

    <article>

      <header>

        <h1>
          How I Learned Web Development
        </h1>

        <p>
          A practical journey from beginner to developer.
        </p>

        <address>

          Written by
          <a href="/author/utpanna">
            Utpanna Pradhan
          </a>

        </address>

        <p>
          Published August 14, 2026
        </p>

        <p>
          8 min read
        </p>

      </header>

      <figure>

        <img
          src="web-development.jpg"
          alt="Laptop displaying web development code">

        <figcaption>
          Learning web development through practical projects.
        </figcaption>

      </figure>

      <section aria-labelledby="introduction">

        <h2 id="introduction">
          Introduction
        </h2>

        <p>
          Learning web development is a process of understanding
          how websites are structured, styled, and made interactive.
        </p>

        <p>
          Instead of learning only through tutorials, building
          projects provides practical experience.
        </p>

      </section>

      <section aria-labelledby="html-section">

        <h2 id="html-section">
          Start With HTML
        </h2>

        <p>
          HTML provides the structure of a webpage.
        </p>

        <pre><code>&lt;h1&gt;Hello World&lt;/h1&gt;</code></pre>

        <p>
          Semantic HTML also helps browsers and assistive
          technologies understand the meaning of content.
        </p>

      </section>

      <section aria-labelledby="css-section">

        <h2 id="css-section">
          Learn CSS
        </h2>

        <p>
          CSS controls the visual presentation of HTML elements.
        </p>

        <blockquote>
          <p>
            Build projects instead of only watching tutorials.
          </p>
        </blockquote>

      </section>

      <section aria-labelledby="javascript-section">

        <h2 id="javascript-section">
          Add JavaScript
        </h2>

        <p>
          JavaScript adds behavior and interactivity to websites.
        </p>

        <ul>

          <li>
            Handle user interactions
          </li>

          <li>
            Update page content
          </li>

          <li>
            Communicate with APIs
          </li>

        </ul>

      </section>

      <section aria-labelledby="conclusion">

        <h2 id="conclusion">
          Conclusion
        </h2>

        <p>
          The best way to improve is to combine learning
          with consistent project building.
        </p>

      </section>

      <footer>

        <p>
          Tags:
        </p>

        <ul>

          <li>
            <a href="/tags/html">
              HTML
            </a>
          </li>

          <li>
            <a href="/tags/css">
              CSS
            </a>
          </li>

          <li>
            <a href="/tags/javascript">
              JavaScript
            </a>
          </li>

        </ul>

      </footer>

    </article>

    <aside aria-labelledby="related-title">

      <h2 id="related-title">
        Related Articles
      </h2>

      <ul>

        <li>
          <a href="/articles/learn-css">
            How to Start Learning CSS
          </a>
        </li>

        <li>
          <a href="/articles/javascript">
            JavaScript Fundamentals
          </a>
        </li>

        <li>
          <a href="/articles/projects">
            Why Projects Matter
          </a>
        </li>

      </ul>

    </aside>

  </main>

  <footer>

    <nav aria-label="Footer navigation">

      <a href="/about">
        About
      </a>

      <a href="/help">
        Help
      </a>

      <a href="/privacy">
        Privacy
      </a>

      <a href="/terms">
        Terms
      </a>

    </nav>

    <p>
      &copy; 2026 Medium HTML Practice
    </p>

  </footer>

</body>

</html>
```

### Explanation

An article page is one of the best places to understand `<article>`.

The structure is:

```text
Medium Article
│
├── Header
│
├── Main
│   ├── Article
│   │   ├── Article header
│   │   ├── Hero image
│   │   ├── Introduction
│   │   ├── Content sections
│   │   └── Article footer
│   │
│   └── Related articles
│
└── Footer
```

The entire article is independent content, so:

```html
<article>
```

is appropriate.

Inside the article, individual topics can be grouped with:

```html
<section>
```

### Remember

```text
Article
→ title
→ author
→ date
→ image
→ content
→ tags
```

---

## 200. Create a Complete Portfolio Website Using HTML Only

### Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta
    name="description"
    content="Portfolio website of a frontend developer.">

  <title>Utpanna Pradhan - Frontend Developer</title>
</head>

<body>

  <!-- ============================= -->
  <!-- HEADER -->
  <!-- ============================= -->

  <header>

    <a href="#home">
      Utpanna Pradhan
    </a>

    <nav aria-label="Main navigation">

      <a href="#home">
        Home
      </a>

      <a href="#about">
        About
      </a>

      <a href="#skills">
        Skills
      </a>

      <a href="#projects">
        Projects
      </a>

      <a href="#experience">
        Experience
      </a>

      <a href="#contact">
        Contact
      </a>

    </nav>

  </header>

  <!-- ============================= -->
  <!-- MAIN -->
  <!-- ============================= -->

  <main>

    <!-- HERO -->

    <section
      id="home"
      aria-labelledby="hero-title">

      <p>
        Hello, I'm
      </p>

      <h1 id="hero-title">
        Utpanna Pradhan
      </h1>

      <p>
        Frontend Developer
      </p>

      <p>
        I build responsive and user-friendly web applications
        using modern web technologies.
      </p>

      <a href="#projects">
        View My Work
      </a>

      <a href="#contact">
        Contact Me
      </a>

    </section>

    <!-- ABOUT -->

    <section
      id="about"
      aria-labelledby="about-title">

      <h2 id="about-title">
        About Me
      </h2>

      <img
        src="profile.jpg"
        alt="Portrait of Utpanna Pradhan">

      <p>
        I am a frontend developer focused on creating
        production-ready web applications.
      </p>

      <p>
        I enjoy working with React, JavaScript,
        responsive design, and modern frontend technologies.
      </p>

    </section>

    <!-- SKILLS -->

    <section
      id="skills"
      aria-labelledby="skills-title">

      <h2 id="skills-title">
        Skills
      </h2>

      <ul>

        <li>
          HTML
        </li>

        <li>
          CSS
        </li>

        <li>
          JavaScript
        </li>

        <li>
          TypeScript
        </li>

        <li>
          React
        </li>

        <li>
          Next.js
        </li>

        <li>
          Tailwind CSS
        </li>

        <li>
          Node.js
        </li>

        <li>
          Express
        </li>

        <li>
          Git
        </li>

      </ul>

    </section>

    <!-- PROJECTS -->

    <section
      id="projects"
      aria-labelledby="projects-title">

      <h2 id="projects-title">
        Projects
      </h2>

      <article>

        <h3>
          Restaurant Website
        </h3>

        <img
          src="restaurant.jpg"
          alt="Preview of restaurant website">

        <p>
          A responsive restaurant website with menu,
          gallery, testimonials, contact information,
          and WhatsApp integration.
        </p>

        <p>
          Technologies:
          React, Tailwind CSS, Vite
        </p>

        <a href="/projects/restaurant">
          View Project
        </a>

        <a href="https://github.com/example/restaurant">
          View Source Code
        </a>

      </article>

      <article>

        <h3>
          Gym Website
        </h3>

        <img
          src="gym.jpg"
          alt="Preview of gym website">

        <p>
          A responsive gym website designed to showcase
          services, programs, trainers, and contact information.
        </p>

        <p>
          Technologies:
          React, Tailwind CSS, Vite
        </p>

        <a href="/projects/gym">
          View Project
        </a>

        <a href="https://github.com/example/gym">
          View Source Code
        </a>

      </article>

      <article>

        <h3>
          Portfolio Website
        </h3>

        <img
          src="portfolio.jpg"
          alt="Preview of portfolio website">

        <p>
          A personal portfolio website showcasing projects,
          technical skills, and professional experience.
        </p>

        <p>
          Technologies:
          HTML, CSS, JavaScript
        </p>

        <a href="/projects/portfolio">
          View Project
        </a>

        <a href="https://github.com/example/portfolio">
          View Source Code
        </a>

      </article>

    </section>

    <!-- EXPERIENCE -->

    <section
      id="experience"
      aria-labelledby="experience-title">

      <h2 id="experience-title">
        Experience
      </h2>

      <article>

        <h3>
          Frontend Developer Intern
        </h3>

        <p>
          Heart It Out
        </p>

        <p>
          Built responsive landing pages using
          React, Tailwind CSS, and Bootstrap.
        </p>

      </article>

      <article>

        <h3>
          Full Stack Developer Intern
        </h3>

        <p>
          Unified Mentor
        </p>

        <p>
          Built full-stack applications using
          React, Node.js, Express, and Bootstrap.
        </p>

      </article>

    </section>

    <!-- EDUCATION -->

    <section
      aria-labelledby="education-title">

      <h2 id="education-title">
        Education
      </h2>

      <article>

        <h3>
          Bachelor of Technology
        </h3>

        <p>
          Computer Science and Engineering
        </p>

        <p>
          2022 - 2026
        </p>

      </article>

    </section>

    <!-- SERVICES -->

    <section
      aria-labelledby="services-title">

      <h2 id="services-title">
        Services
      </h2>

      <article>

        <h3>
          Website Development
        </h3>

        <p>
          Building responsive websites for businesses
          and individuals.
        </p>

      </article>

      <article>

        <h3>
          Frontend Development
        </h3>

        <p>
          Building modern interfaces using React
          and modern CSS.
        </p>

      </article>

      <article>

        <h3>
          Website Optimization
        </h3>

        <p>
          Improving performance, responsiveness,
          and user experience.
        </p>

      </article>

    </section>

    <!-- CONTACT -->

    <section
      id="contact"
      aria-labelledby="contact-title">

      <h2 id="contact-title">
        Contact Me
      </h2>

      <p>
        Interested in working together?
        Send me a message.
      </p>

      <form
        action="/contact"
        method="post">

        <div>

          <label for="name">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            autocomplete="name"
            required>

        </div>

        <div>

          <label for="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            autocomplete="email"
            required>

        </div>

        <div>

          <label for="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            required></textarea>

        </div>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>

  </main>

  <!-- ============================= -->
  <!-- FOOTER -->
  <!-- ============================= -->

  <footer>

    <nav aria-label="Social media links">

      <a href="https://github.com/example">
        GitHub
      </a>

      <a href="https://www.linkedin.com/in/example">
        LinkedIn
      </a>

    </nav>

    <p>
      Email:
      <a href="mailto:hello@example.com">
        hello@example.com
      </a>
    </p>

    <p>
      &copy; 2026 Utpanna Pradhan.
      All rights reserved.
    </p>

  </footer>

</body>

</html>
```

### Explanation

A complete portfolio combines almost everything you've learned so far.

```text
Portfolio
│
├── Header
│   ├── Logo / Name
│   └── Navigation
│
├── Main
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   ├── Experience
│   ├── Education
│   ├── Services
│   └── Contact
│
└── Footer
    ├── Social links
    ├── Email
    └── Copyright
```

### Why use `<article>` for projects?

Each project can stand independently.

```html
<article>
  <h3>Project Name</h3>
  <p>Project description</p>
  <a href="#">View Project</a>
</article>
```

That makes `<article>` a good semantic choice.

### Why use `<section>`?

Each major part of the portfolio has its own topic:

```text
About
Skills
Projects
Experience
Education
Services
Contact
```

Therefore:

```html
<section>
```

is appropriate.

### Why use `<nav>`?

Navigation links should be grouped using `<nav>`.

```html
<nav aria-label="Main navigation">
```

Social links can also be placed in a separately labelled navigation region.

### Why use `<form>`?

The contact section collects user information and submits it.

```text
Name
Email
Message
   ↓
Submit
```

Therefore a `<form>` is appropriate.

# Final Revision

```text
198. Airbnb
     → Search
     → Destinations
     → Stays
     → Experiences

199. Medium Article
     → Article
     → Author
     → Content
     → Sections
     → Related articles

200. Portfolio
     → Hero
     → About
     → Skills
     → Projects
     → Experience
     → Education
     → Services
     → Contact
     → Footer
```

# Module 10 Master Memory

```text
191. Netflix
     → Streaming content

192. Amazon
     → E-commerce

193. YouTube
     → Video platform

194. LinkedIn
     → Social feed

195. GitHub
     → Developer profile

196. Apple
     → Product landing page

197. Spotify
     → Music platform

198. Airbnb
     → Travel + search

199. Medium
     → Article publishing

200. Portfolio
     → Personal/professional showcase
```

# The Interview Skill You Should Actually Remember

```text
Website screenshot
        ↓
Identify major regions
        ↓
Identify navigation
        ↓
Identify main content
        ↓
Group related content
        ↓
Choose semantic HTML
        ↓
Add accessibility
        ↓
Write HTML
        ↓
CSS comes later
        ↓
JavaScript comes later
```

> **HTML answers one question: "What is this content?"**

```text
<header>   → Header
<nav>      → Navigation
<main>     → Main content
<section>  → Thematic section
<article>  → Independent content
<aside>    → Related content
<footer>   → Footer
<form>     → User input/submission
```

That is the real interview skill. Memorizing a giant pile of tags is just human-flavored autocomplete.











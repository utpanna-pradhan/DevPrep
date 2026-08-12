
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


























Module 5 – Images & Media (71–95)
1. Display image.
2. Image with caption.
3. Responsive image.
4. Picture element.
5. SVG image.
6. Inline SVG.
7. Audio player.
8. Video player.
9. Multiple video sources.
10. Multiple audio sources.
11. Add subtitles.
12. Lazy-loaded images.
13. Image gallery markup.
14. Hero banner.
15. Product image gallery.
16. Avatar list.
17. Company logo section.
18. Client logos.
19. Team member cards.
20. Testimonial cards.
21. Feature cards.
22. Portfolio gallery.
23. Masonry-ready gallery markup.
24. Image comparison layout.
25. Responsive media section.

Module 6 – Tables (96–115)
1. Basic table.
2. Student marks table.
3. Employee table.
4. Product table.
5. Invoice table.
6. rowspan example.
7. colspan example.
8. Accessible table.
9. Pricing comparison table.
10. Tournament table.
11. Attendance sheet.
12. Timetable.
13. Calendar table.
14. Monthly expense table.
15. Financial report.
16. Sales dashboard table.
17. Leaderboard.
18. Responsive-ready table.
19. Nested table.
20. Complex data table.

Module 7 – Forms (116–160)
1. Login form.
2. Registration form.
3. Contact form.
4. Feedback form.
5. Survey form.
6. Admission form.
7. Job application form.
8. Payment form.
9. Checkout form.
10. Search form.
11. Newsletter subscription.
12. OTP verification form.
13. Password reset form.
14. File upload form.
15. Multi-step form structure.
16. Date picker form.
17. Time picker form.
18. Color picker form.
19. Range slider.
20. Radio buttons.
21. Checkboxes.
22. Dropdown menu.
23. Grouped dropdown.
24. Multiple select.
25. Textarea form.
26. Disabled fields.
27. Readonly fields.
28. Required validation.
29. Pattern validation.
30. Number validation.
31. Email validation.
32. URL validation.
33. Telephone validation.
34. Accessible form.
35. Fieldset & legend.
36. Shipping address form.
37. Billing address form.
38. Profile edit form.
39. Settings page form.
40. Medical information form.
41. Hotel booking form.
42. Flight booking form.
43. Restaurant reservation form.
44. Event registration form.
45. Resume upload form.

Module 8 – Semantic HTML (161–175)
1. Blog layout.
2. News article.
3. Magazine homepage.
4. E-commerce homepage.
5. Landing page structure.
6. Dashboard layout.
7. Documentation layout.
8. FAQ page.
9. Help center.
10. Portfolio website.
11. Restaurant homepage.
12. Hospital homepage.
13. School homepage.
14. Travel homepage.
15. SaaS homepage.

Module 9 – Accessibility (176–190)
1. Accessible navigation.
2. Accessible login form.
3. Accessible table.
4. Accessible modal markup.
5. Accessible image gallery.
6. Accessible accordion.
7. Accessible tabs.
8. Accessible dropdown.
9. Accessible FAQ.
10. Accessible search.
11. Accessible pagination.
12. Accessible breadcrumbs.
13. Skip navigation link.
14. ARIA landmark page.
15. Keyboard-friendly form.

Module 10 – Real Interview Projects (191–200)
1. Netflix homepage (HTML only).
2. Amazon homepage structure.
3. YouTube homepage structure.
4. LinkedIn homepage structure.
5. GitHub profile page.
6. Apple landing page structure.
7. Spotify homepage.
8. Airbnb homepage.
9. Medium article page.
10. Complete portfolio website (HTML only).

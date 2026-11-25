# 1. Create a Basic HTML Document

Answer:
```html
<!DOCTYPE html>
<!-- tells the browser to use modern HTML5. -->
<html lang="en">
  <!-- is the root element. -->
<head>
  <!-- contains page metadata. -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
    <!-- defines the browser tab title. -->
</head>
<body>
  <!-- contains visible page content. -->
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

The viewport meta tag helps the page display correctly on mobile devices.

# 2. Create a Semantic HTML Landing Page

Answer:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Business Website</title>
</head>
<body>

    <header>  
      <!-- contains introductory content. -->
        <h1>WebNest</h1>

        <nav>
          <!-- contains navigation links. -->
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main>
       <!-- contains the main page content. -->
        <section id="home">
           <!-- groups related content. -->
            <h2>Build Your Online Presence</h2>
            <p>We create modern websites for businesses.</p>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>We help businesses grow online.</p>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <p>Website development and digital solutions.</p>
        </section>
    </main>

    <footer>
      <!-- contains closing information. -->
        <p>&copy; 2026 WebNest</p>
    </footer>

</body>
</html>
```


Semantic elements describe the purpose of content:

Semantic HTML improves accessibility, maintainability, and search engine understanding.

# 3. Create a Registration Form

Answer:

<form action="/register" method="POST">

    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Register</button>

</form>

Explanation:

<form> creates a form.

action specifies where the form data is submitted.

method="POST" sends data in the request body.

<label> provides an accessible input description.

required makes a field mandatory.

type="password" hides the entered characters.

4. Create an Accessible Contact Form

Answer:

<form action="/contact" method="POST">

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject">

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Send Message</button>

</form>

Explanation:

A contact form collects information from visitors.

Using <label> with matching for and id attributes makes inputs easier to understand and use with assistive technologies. The <textarea> element allows users to enter longer messages.

5. Create a Navigation Bar

Answer:

<header>
    <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
    </nav>
</header>

Explanation:

<nav> defines a navigation section.

<a> creates clickable links.

href specifies the destination.

aria-label gives the navigation landmark a descriptive name.

Use CSS to arrange the links horizontally or vertically.

6. Create an Employee Table

Answer:

<table>
    <caption>Employee Information</caption>

    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>101</td>
            <td>Rahul</td>
            <td>Developer</td>
        </tr>

        <tr>
            <td>102</td>
            <td>Priya</td>
            <td>Designer</td>
        </tr>
    </tbody>
</table>

Explanation:

<table> creates a table.

<caption> describes the table.

<thead> contains the heading rows.

<tbody> contains the main data.

<tr> creates a row.

<th> defines a header cell.

<td> defines a data cell.

scope="col" identifies a column header.

7. Create a Table Using Colspan and Rowspan

Answer:

<table border="1">
    <tr>
        <th>Name</th>
        <th colspan="2">Contact Details</th>
    </tr>

    <tr>
        <td>Rahul</td>
        <td>rahul@example.com</td>
        <td>9876543210</td>
    </tr>

    <tr>
        <td rowspan="2">Priya</td>
        <td>priya@example.com</td>
        <td>9876501234</td>
    </tr>

    <tr>
        <td>priya2@example.com</td>
        <td>9876504321</td>
    </tr>
</table>

Explanation:

colspan makes a cell span multiple columns.

rowspan makes a cell span multiple rows.

These attributes are useful when building tables with grouped or merged cells.

8. Create Ordered and Unordered Lists

Answer:

<h2>Frontend Technologies</h2>

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<h2>Learning Steps</h2>

<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
</ol>

Explanation:

<ul> creates an unordered list with bullets.

<ol> creates an ordered list with numbers by default.

<li> defines each list item.

Use unordered lists when sequence does not matter and ordered lists when the sequence matters.

9. Create a Nested List

Answer:

<ul>
    <li>Frontend Development
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>

    <li>Backend Development
        <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
        </ul>
    </li>
</ul>

Explanation:

A nested list is a list inside another list. It helps organize related information into categories and subcategories.

10. Create a Description List

Answer:

<dl>
    <dt>HTML</dt>
    <dd>HTML defines the structure of web pages.</dd>

    <dt>CSS</dt>
    <dd>CSS controls the appearance of web pages.</dd>

    <dt>JavaScript</dt>
    <dd>JavaScript adds interactivity to web pages.</dd>
</dl>

Explanation:

<dl> creates a description list.

<dt> defines a term.

<dd> provides its description.

It is useful for glossaries, definitions, and metadata.

11. Add a Responsive Image

Answer:

<img
    src="images/profile.jpg"
    alt="Developer working on a laptop"
    width="800"
    height="500"
    loading="lazy"
>

Explanation:

src specifies the image path.

alt provides alternative text.

width and height help reserve space and reduce layout shifts.

loading="lazy" delays loading until the image is near the viewport.

For images that appear immediately at the top of a page, avoid lazy loading.

12. Create an Image Gallery

Answer:

<section>
    <h2>My Image Gallery</h2>

    <figure>
        <img src="images/image1.jpg" alt="Mountain landscape">
        <figcaption>Beautiful Mountains</figcaption>
    </figure>

    <figure>
        <img src="images/image2.jpg" alt="Beach at sunset">
        <figcaption>Sunset Beach</figcaption>
    </figure>

    <figure>
        <img src="images/image3.jpg" alt="Green forest">
        <figcaption>Green Forest</figcaption>
    </figure>
</section>

Explanation:

<figure> groups media content.

<figcaption> provides a caption.

<img> displays the image.

CSS Grid or Flexbox can be used to make the gallery responsive.

13. Use the Picture Element for Responsive Images

Answer:

<picture>
    <source
        media="(max-width: 600px)"
        srcset="images/mobile.jpg"
    >

    <source
        media="(min-width: 601px)"
        srcset="images/desktop.jpg"
    >

    <img
        src="images/desktop.jpg"
        alt="A beautiful landscape"
    >
</picture>

Explanation:

The <picture> element allows the browser to choose different images depending on screen conditions.

<source> provides alternative image sources.

media defines the condition.

<img> provides the fallback image.

It is useful for art direction, such as showing a cropped image on mobile.

14. Add an Image with a Caption

Answer:

<figure>
    <img
        src="images/laptop.jpg"
        alt="Laptop on a wooden desk"
        width="600"
    >

    <figcaption>
        A workspace for web development.
    </figcaption>
</figure>

Explanation:

<figure> represents self-contained content, while <figcaption> provides its description or caption.

15. Embed an Audio Player

Answer:

<audio controls>
    <source src="audio/music.mp3" type="audio/mpeg">
    <source src="audio/music.ogg" type="audio/ogg">

    Your browser does not support audio playback.
</audio>

Explanation:

<audio> embeds audio.

controls displays playback controls.

<source> provides alternative formats.

The browser selects a supported source.

16. Embed a Video Player

Answer:

<video width="640" height="360" controls poster="images/thumbnail.jpg">

    <source src="videos/demo.mp4" type="video/mp4">

    <track
        src="captions.vtt"
        kind="captions"
        srclang="en"
        label="English"
    >

    Your browser does not support video playback.

</video>

Explanation:

<video> embeds a video.

controls displays playback controls.

poster displays a thumbnail before playback.

<track> adds captions or subtitles.

Captions help users who cannot hear the audio.

17. Embed a YouTube Video

Answer:

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="HTML Tutorial"
    loading="lazy"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin">
</iframe>

Explanation:

<iframe> embeds another webpage or external resource inside the current page.

src specifies the embedded content.

title describes the frame for accessibility.

loading="lazy" delays loading when appropriate.

allowfullscreen allows full-screen playback.

Replace VIDEO_ID with the actual YouTube video ID.

18. Create a Search Form

Answer:

<form action="/search" method="GET" role="search">

    <label for="search">Search Website:</label>

    <input
        type="search"
        id="search"
        name="q"
        placeholder="Search here..."
        required
    >

    <button type="submit">Search</button>

</form>

Explanation:

type="search" creates a search input.

method="GET" places search parameters in the URL.

name="q" defines the query parameter.

role="search" identifies the search landmark.

19. Create Radio Buttons

Answer:

<form>
    <fieldset>
        <legend>Select Your Gender</legend>

        <label>
            <input type="radio" name="gender" value="male">
            Male
        </label>

        <label>
            <input type="radio" name="gender" value="female">
            Female
        </label>

        <label>
            <input type="radio" name="gender" value="other">
            Other
        </label>
    </fieldset>
</form>

Explanation:

Radio buttons allow users to select one option from a group.

All related radio buttons must share the same name attribute.

20. Create Checkboxes

Answer:

<form>
    <fieldset>
        <legend>Select Your Skills</legend>

        <label>
            <input type="checkbox" name="skills" value="html">
            HTML
        </label>

        <label>
            <input type="checkbox" name="skills" value="css">
            CSS
        </label>

        <label>
            <input type="checkbox" name="skills" value="javascript">
            JavaScript
        </label>
    </fieldset>
</form>

Explanation:

Checkboxes allow users to select multiple options independently.

Unlike radio buttons, checkboxes do not need to share a name to work together.

21. Create a Dropdown Menu

Answer:

<label for="country">Choose a Country:</label>

<select id="country" name="country" required>
    <option value="">Select Country</option>
    <option value="india">India</option>
    <option value="usa">USA</option>
    <option value="uk">United Kingdom</option>
    <option value="canada">Canada</option>
</select>

Explanation:

<select> creates a dropdown.

<option> defines each available choice.

value specifies the value submitted with the form.

An empty initial option encourages the user to make a selection.

22. Create a Dropdown with Optgroup

Answer:

<label for="course">Choose a Course:</label>

<select id="course" name="course">

    <optgroup label="Frontend">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="react">React</option>
    </optgroup>

    <optgroup label="Backend">
        <option value="node">Node.js</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
    </optgroup>

</select>

Explanation:

<optgroup> groups related dropdown options under a label.

It is useful when a dropdown contains many choices.

23. Create a File Upload Form

Answer:

<form action="/upload" method="POST" enctype="multipart/form-data">

    <label for="resume">Upload Your Resume:</label>

    <input
        type="file"
        id="resume"
        name="resume"
        accept=".pdf,.doc,.docx"
        required
    >

    <button type="submit">Upload</button>

</form>

Explanation:

type="file" allows users to select a file.

accept suggests allowed file types.

enctype="multipart/form-data" is required for standard file uploads.

POST sends the uploaded file in the request body.

The server must independently validate file type, size, and content. The accept attribute is not a security check.

24. Create a Form with HTML Validation

Answer:

<form action="/register" method="POST">

    <label for="username">Username:</label>
    <input
        type="text"
        id="username"
        name="username"
        minlength="3"
        maxlength="20"
        required
    >

    <label for="email">Email:</label>
    <input
        type="email"
        id="email"
        name="email"
        required
    >

    <label for="age">Age:</label>
    <input
        type="number"
        id="age"
        name="age"
        min="18"
        max="60"
        required
    >

    <button type="submit">Submit</button>

</form>

Explanation:

HTML provides built-in form validation.

required makes a field mandatory.

minlength defines minimum text length.

maxlength defines maximum text length.

min and max define numeric limits.

type="email" checks the basic email format.

Client-side validation improves usability but must be repeated on the server.

25. Use Fieldset and Legend

Answer:

<form>

    <fieldset>
        <legend>Personal Information</legend>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">

    </fieldset>

    <button type="submit">Submit</button>

</form>

Explanation:

<fieldset> groups related form controls.

<legend> provides a title for the group.

These elements improve form organization and accessibility.

26. Create a Textarea

Answer:

<form>
    <label for="message">Your Message:</label>

    <textarea
        id="message"
        name="message"
        rows="5"
        cols="40"
        placeholder="Enter your message..."
        required
    ></textarea>

    <button type="submit">Send</button>
</form>

Explanation:

<textarea> creates a multi-line text input.

rows controls the visible number of text lines.

cols controls the approximate visible width.

placeholder provides a hint.

required makes the field mandatory.

27. Create an Input with Datalist

Answer:

<label for="technology">Choose a Technology:</label>

<input
    type="text"
    id="technology"
    name="technology"
    list="technologies"
>

<datalist id="technologies">
    <option value="HTML">
    <option value="CSS">
    <option value="JavaScript">
    <option value="React">
    <option value="Node.js">
</datalist>

Explanation:

<datalist> provides suggested values for an input.

Unlike <select>, users can generally enter their own values instead of choosing only from the suggestions.

28. Create a Progress Bar

Answer:

<label for="course-progress">Course Completion:</label>

<progress id="course-progress" value="70" max="100">
    70%
</progress>

Explanation:

<progress> represents the completion progress of a task.

value defines current progress.

max defines total progress.

Here, the task is 70% complete.

29. Create a Meter Element

Answer:

<label for="storage">Storage Usage:</label>

<meter
    id="storage"
    min="0"
    max="100"
    low="30"
    high="80"
    optimum="20"
    value="65">
    65%
</meter>

Explanation:

<meter> represents a measurement within a known range, such as storage usage, battery level, or a score.

Difference:

<progress> shows how much of a task is completed.

<meter> shows a measurement within a defined range.

30. Create a Download Link

Answer:

<a href="files/resume.pdf" download="My-Resume.pdf">
    Download Resume
</a>

Explanation:

The download attribute suggests that the browser should download the linked file instead of navigating to it.

Browser behavior can vary, and cross-origin downloads may require additional server support.

31. Open an External Link Securely

Answer:

<a
    href="https://www.example.com"
    target="_blank"
    rel="noopener noreferrer">
    Visit Example Website
</a>

Explanation:

target="_blank" opens the link in a new tab.

rel="noopener" prevents the opened page from accessing the original page through window.opener.

rel="noreferrer" also prevents the browser from sending the referrer information.

32. Create a Skip Navigation Link

Answer:

<a href="#main-content">Skip to Main Content</a>

<header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>

<main id="main-content" tabindex="-1">
    <h1>Main Content</h1>
    <p>Welcome to the website.</p>
</main>

Explanation:

A skip link allows keyboard users to bypass repeated navigation and move directly to the main content.

CSS can visually hide the link until it receives keyboard focus.

33. Create a Semantic Page Layout with Sidebar

Answer:

<header>
    <h1>My Blog</h1>
</header>

<nav aria-label="Main navigation">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
</nav>

<main>
    <article>
        <h2>Learning HTML</h2>
        <p>HTML is used to structure web pages.</p>
    </article>

    <aside>
        <h2>Related Articles</h2>
        <a href="/css">Learn CSS</a>
    </aside>
</main>

<footer>
    <p>&copy; 2026 My Blog</p>
</footer>

Explanation:

<article> represents independent, reusable content.

<aside> contains related or supplementary information.

<main> contains the primary content.

<nav> defines navigation.

<footer> contains closing information.

34. Create an FAQ Using Details and Summary

Answer:

<section>
    <h2>Frequently Asked Questions</h2>

    <details>
        <summary>What is HTML?</summary>
        <p>HTML is used to structure web pages.</p>
    </details>

    <details>
        <summary>What is CSS?</summary>
        <p>CSS is used to style web pages.</p>
    </details>

    <details>
        <summary>What is JavaScript?</summary>
        <p>JavaScript adds interactivity to web pages.</p>
    </details>
</section>

Explanation:

<details> creates expandable and collapsible content.

<summary> defines the visible heading.

The browser provides the expand and collapse behavior without JavaScript.

35. Add Comments in HTML

Answer:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>HTML Comments</title>
</head>
<body>

    <!-- Main heading -->
    <h1>Welcome</h1>

    <!-- This paragraph describes the website -->
    <p>This is an HTML page.</p>

</body>
</html>

Explanation:

HTML comments are written using <!-- comment -->.

They help developers document code. Comments are not displayed as page content, but they can be viewed in the page source, so never store passwords or secrets in them.

36. Use Superscript and Subscript

Answer:

<p>Mathematical formula: X<sup>2</sup></p>

<p>Chemical formula: H<sub>2</sub>O</p>

Explanation:

<sup> displays text as superscript, slightly above the normal text line.

<sub> displays text as subscript, slightly below the normal text line.

They are useful for mathematical expressions and chemical formulas.

37. Display Date and Time

Answer:

<p>
    Published on:
    <time datetime="2026-11-18">November 18, 2026</time>
</p>

<p>
    Meeting time:
    <time datetime="2026-11-18T10:30">10:30 AM</time>
</p>

Explanation:

<time> represents dates and times in a machine-readable format.

The datetime attribute provides a standardized value that browsers and other tools can interpret.

38. Create Email and Telephone Links

Answer:

<p>
    Email:
    <a href="mailto:hello@example.com">
        hello@example.com
    </a>
</p>

<p>
    Phone:
    <a href="tel:+919876543210">
        +91 9876543210
    </a>
</p>

Explanation:

mailto: opens the user's default email application.

tel: allows compatible devices to initiate a phone call.

These links are useful on business websites and contact pages.

39. Add a Favicon

Answer:

<head>
    <title>My Website</title>

    <link
        rel="icon"
        type="image/png"
        href="/favicon.png"
    >
</head>

Explanation:

A favicon is a small icon displayed in browser tabs, bookmarks, and other browser interfaces.

The <link> element connects the favicon file to the webpage.

40. Add SEO Meta Tags

Answer:

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Best Web Development Services | WebNest</title>

    <meta
        name="description"
        content="Explore professional website development services, responsive designs, and digital solutions."
    >

    <meta name="robots" content="index, follow">
</head>

Explanation:

Important SEO-related tags include:

<title> defines the page title shown in search results and browser tabs.

description provides a summary that search engines may use in search snippets.

robots gives crawling and indexing instructions.

viewport supports responsive rendering.

A meta description does not directly guarantee higher rankings. Search engines may choose a different snippet.

41. Add Open Graph Meta Tags

Answer:

<head>
    <meta property="og:title" content="WebNest - Website Development">

    <meta
        property="og:description"
        content="Build a professional online presence with WebNest."
    >

    <meta
        property="og:image"
        content="https://example.com/images/preview.jpg"
    >

    <meta
        property="og:url"
        content="https://example.com"
    >

    <meta property="og:type" content="website">
</head>

Explanation:

Open Graph metadata controls how a webpage is presented when shared on supported social platforms and messaging applications.

Important properties include:

og:title: Page title.

og:description: Page description.

og:image: Preview image.

og:url: Canonical page URL.

og:type: Content type.

42. Add a Canonical URL

Answer:

<head>
    <link
        rel="canonical"
        href="https://example.com/services"
    >
</head>

Explanation:

A canonical URL tells search engines which URL is the preferred version of a page.

It helps consolidate duplicate or very similar URLs. The canonical URL should be an absolute URL pointing to the preferred page.

43. Connect an External CSS File

Answer:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>External CSS Example</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Welcome to My Website</h1>
    <p>This page uses external CSS.</p>

</body>
</html>

Explanation:

The <link> element connects an external CSS file to an HTML document.

External CSS keeps structure and styling separate, making projects easier to maintain and reuse.

44. Connect JavaScript Using Defer

Answer:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Defer</title>

    <script src="script.js" defer></script>
</head>
<body>

    <h1 id="heading">Hello World</h1>

</body>
</html>

Explanation:

The defer attribute tells the browser to download the external JavaScript file while parsing HTML and execute it after HTML parsing is complete.

Deferred scripts execute in document order and before the DOMContentLoaded event.

45. Use JavaScript Modules in HTML

Answer:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Module</title>
</head>
<body>

    <h1>JavaScript Modules</h1>

    <script type="module" src="main.js"></script>

</body>
</html>

Explanation:

type="module" loads JavaScript as an ES module.

Modules support:

import

export

Module-level scope

Strict mode by default

Module scripts are deferred automatically. They should generally be served over HTTP rather than opened directly using the file:// protocol.

46. Create an HTML Dialog Box

Answer:

<button id="openDialog">Open Dialog</button>

<dialog id="myDialog">
    <h2>Welcome!</h2>
    <p>This is an HTML dialog box.</p>

    <button id="closeDialog">Close</button>
</dialog>

<script>
    const dialog = document.getElementById("myDialog");

    document.getElementById("openDialog").addEventListener("click", () => {
        dialog.showModal();
    });

    document.getElementById("closeDialog").addEventListener("click", () => {
        dialog.close();
    });
</script>

Explanation:

<dialog> creates a native dialog element.

showModal() opens a modal dialog.

show() opens a non-modal dialog.

close() closes the dialog.

The browser provides built-in dialog behavior, including modal interaction support.

47. Create a Reusable HTML Template

Answer:

<template id="userTemplate">
    <div class="user-card">
        <h2 class="user-name"></h2>
        <p class="user-email"></p>
    </div>
</template>

<div id="userContainer"></div>

<script>
    const template = document.getElementById("userTemplate");
    const container = document.getElementById("userContainer");

    const clone = template.content.cloneNode(true);

    clone.querySelector(".user-name").textContent = "Rahul";
    clone.querySelector(".user-email").textContent = "rahul@example.com";

    container.appendChild(clone);
</script>

Explanation:

<template> stores HTML that is not displayed when the page initially loads.

JavaScript can clone its content and insert it into the document whenever needed.

It is useful for reusable cards, lists, and dynamic UI components.

48. Add an SVG Icon in HTML

Answer:

<button type="button" aria-label="Search">
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
    >
        <circle cx="11" cy="11" r="7"></circle>
        <line x1="16" y1="16" x2="21" y2="21"></line>
    </svg>
</button>

Explanation:

SVG stands for Scalable Vector Graphics.

<svg> defines the graphic.

<circle> creates a circle.

<line> creates a line.

viewBox defines the coordinate system.

aria-hidden="true" hides the decorative icon from assistive technologies.

The button has its own accessible name through aria-label.

49. Create Responsive Images Using Srcset

Answer:

<img
    src="images/image-800.jpg"
    srcset="
        images/image-400.jpg 400w,
        images/image-800.jpg 800w,
        images/image-1200.jpg 1200w
    "
    sizes="(max-width: 600px) 100vw, 800px"
    alt="A mountain landscape"
    width="1200"
    height="800"
>

Explanation:

srcset provides multiple image versions so the browser can choose a suitable image.

400w, 800w, and 1200w describe image widths.

sizes tells the browser how much space the image is expected to occupy.

src provides a fallback source.

This helps deliver appropriately sized images across different screen sizes and resolutions.

50. Create a Complete Accessible and SEO-Friendly Webpage

Answer:

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>WebNest | Professional Website Development</title>

    <meta
        name="description"
        content="WebNest builds responsive, accessible, and professional websites for growing businesses."
    >

    <meta name="robots" content="index, follow">

    <link rel="icon" href="/favicon.png">

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <a href="#main-content">Skip to main content</a>

    <header>
        <h1>WebNest</h1>

        <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main id="main-content">

        <section id="home">
            <h2>Build Your Digital Presence</h2>

            <p>
                We create modern and responsive websites
                for growing businesses.
            </p>

            <a href="#contact">Get Started</a>
        </section>

        <section id="about">
            <h2>About Us</h2>

            <p>
                WebNest helps businesses establish
                a professional online presence.
            </p>
        </section>

        <section id="services">
            <h2>Our Services</h2>

            <article>
                <h3>Website Development</h3>
                <p>Responsive and modern websites.</p>
            </article>

            <article>
                <h3>Website Redesign</h3>
                <p>Improve the design and usability of your website.</p>
            </article>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>

            <form action="/contact" method="POST">

                <label for="name">Your Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                >

                <label for="email">Your Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >

                <label for="message">Your Message:</label>
                <textarea
                    id="message"
                    name="message"
                    required
                ></textarea>

                <button type="submit">Send Message</button>

            </form>
        </section>

    </main>

    <footer>
        <p>&copy; 2026 WebNest. All rights reserved.</p>

        <a href="mailto:hello@example.com">
            Contact Us
        </a>
    </footer>

</body>
</html>

Explanation:

This example combines important HTML concepts used in real-world projects:

HTML5 document structure.

Semantic elements such as <header>, <nav>, <main>, <section>, <article>, and <footer>.

SEO title and meta description.

Responsive viewport configuration.

Accessible navigation and skip link.

Proper form labels and validation.

External CSS connection.

Meaningful heading structure.

It provides a strong foundation for building accessible, search-friendly websites.
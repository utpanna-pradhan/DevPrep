# 1.Create a semantic HTML structure for a landing page.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
</head>
<body>
    <header>
        <nav>
            <h2>My website </h2>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <section id="home">
            <h1>Welcome to my website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis saepe aperiam iure incidunt eius unde inventore, quis delectus. Pariatur!</p>
            <a href="#contact"><button>Get Started</button></a>
        </section>
        <section id="about">
            <h2>
                ABout us
            </h2>
            <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus natus nemo quo a sunt quas ducimus autem nesciunt facilis. Veniam, animi at. Nam impedit commodi a illum eos laboriosam!
            </p>
        </section>
        <section id="services">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, dolores ipsa, dolore perspiciatis, ab aperiam voluptatum quos tenetur velit sunt iste reprehenderit. Nesciunt sint recusandae provident, ea quae impedit obcaecati?</p>
        </section>
        <section id="contact">
            <h2>Contactus</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vero facilis, maxime fugit, blanditiis perferendis dicta, distinctio minima ullam voluptatem libero eos earum. Magni impedit repudiandae sapiente nulla dignissimos animi?</p>
        </section>
        
    </main>
    <footer>
        <p>Copyright 2026</p>
    </footer>
    
</body>
</html>
```



# 2.Create a registration form with name, email, and password fields.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Registration Form</h1>
    <form action="">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter Your Name " required> <br><br>
        <label for="email">Email : </label>
        <input type="text" name="email" id="email" placeholder="Enter Email" required> <br><br>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter Password" >
        <br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

# 3.Create a table displaying employee information.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Employee Details</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01</td>
                <td>Jina</td>
            </tr>
            <tr>
                <td>02</td>
                <td>Nini</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

# 4.Create a navigation bar with links.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nav Links</title>
</head>
<body>
    <header>
        <nav aria-label="Main navigation">
            <h2>Mt website</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
        </nav>
    </header>
</body>
</html>
```

# 5.Create a contact form with proper labels and validation.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Form</h1>
    <form action="">
        <label for="name">Name :</label>
        <input type="text" name="name" id="name" placeholder="Enter Your Name" required>
        <br><br>
        <label for="email">Email :</label>
        <input type="email" name="email" id="email" placeholder="Enter Email" required>
        <br><br>
        <label for="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" placeholder="Enter PhoneNumber" required>
        <br><br>
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="5"required></textarea>
        <br><br>
        <button type="submit">Send Message</button>
    </form>
</body>
</html>
```


# 6.Create an accessible button and dropdown.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Element</title>
</head>
<body>
    <h2>Select Your Course</h2>
    <label for="course">Choose a course : </label>
    <select name="course" id="course" required>
        <option value="">Select Course</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
    </select>
    <br><br>
    <button type="button" aria-label="Submit course selection">Submit</button>
</body>
</html>
```


# 7.Build a simple FAQ section using HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Section</title>
</head>
<body>
    <h1>FAQ Section</h1>

    <details>
        <summary>WHat is HTML?</summary>
        <p>HTML stands for hyper text mark of language</p>
    </details>

    <details>
        <summary>What is CSS</summary>
        <p>CSS stands for cascading style sheet</p>
    </details>
</body>
</html>
```

# 8.Create a webpage with header, main, sidebar, and footer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Layout</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
    </header>

    <main>
        <section>
            <h2>Main Content</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, amet!</p>
        </section>
        <aside>
            <h3>Aside Content</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, atque.</p>
        </aside>
    </main>

    <footer>
        <p>Copyright 2026</p>
    </footer>
</body>
</html>
```
# HTML Interview Preparation: 50 Additional Coding Questions (Q9–Q58)

## 9. Create a responsive image using HTML.

**Answer:**
```html
<img
  src="image.jpg"
  alt="Beautiful mountain landscape"
  width="800"
  height="500"
  loading="lazy"
  style="max-width: 100%; height: auto;"
>
```

**Explanation:**
- `src`: Specifies the image location.
- `alt`: Provides alternative text for accessibility.
- `loading="lazy"`: Loads the image when it approaches the viewport.
- `max-width: 100%`: Prevents the image from overflowing its container.

---

## 10. Create an image gallery using HTML.

**Answer:**
```html
<section>
  <h2>My Image Gallery</h2>

  <figure>
    <img src="image1.jpg" alt="Mountain view" width="300">
    <figcaption>Mountain View</figcaption>
  </figure>

  <figure>
    <img src="image2.jpg" alt="Ocean view" width="300">
    <figcaption>Ocean View</figcaption>
  </figure>

  <figure>
    <img src="image3.jpg" alt="Forest view" width="300">
    <figcaption>Forest View</figcaption>
  </figure>
</section>
```

**Explanation:**
- `figure`: Groups self-contained content such as images.
- `figcaption`: Provides a caption for the image.

---

## 11. Create a picture element with multiple image formats.

**Answer:**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.png" type="image/png">

  <img src="image.jpg" alt="Nature landscape">
</picture>
```

**Explanation:**
- `<picture>` allows browsers to choose between different image sources.
- `<source>` provides alternative image formats.
- `<img>` acts as the fallback image.

---

## 12. Create a video player using HTML5.

**Answer:**
```html
<video width="500" controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">

  Your browser does not support video.
</video>
```

**Explanation:**
- `controls`: Displays video controls.
- `poster`: Displays a thumbnail before playback.
- `source`: Specifies different video formats.

---

## 13. Create an audio player using HTML5.

**Answer:**
```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">

  Your browser does not support audio.
</audio>
```

**Explanation:**
- `<audio>` embeds audio content.
- `controls` displays play, pause and volume controls.
- Multiple sources provide format compatibility.

---

## 14. Embed a YouTube video using an iframe.

**Answer:**
```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  allowfullscreen>
</iframe>
```

**Explanation:**
- `<iframe>` embeds another webpage or external content.
- `src` specifies the embedded resource.
- `title` provides an accessible description.
- `allowfullscreen` allows fullscreen playback.

---

## 15. Create an ordered list with different numbering styles.

**Answer:**
```html
<h2>Programming Languages</h2>

<ol type="A">
  <li>JavaScript</li>
  <li>Python</li>
  <li>Java</li>
</ol>

<ol type="I">
  <li>React</li>
  <li>Angular</li>
  <li>Vue</li>
</ol>
```

**Explanation:**
The `type` attribute changes the numbering style:
- `1`: Numbers
- `A`: Uppercase letters
- `a`: Lowercase letters
- `I`: Uppercase Roman numerals
- `i`: Lowercase Roman numerals

---

## 16. Create a nested list using HTML.

**Answer:**
```html
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
      <li>Python</li>
      <li>PHP</li>
    </ul>
  </li>
</ul>
```

**Explanation:**
A nested list means placing one list inside another list item.

---

## 17. Create a description list for technical terms.

**Answer:**
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets.</dd>

  <dt>JavaScript</dt>
  <dd>A programming language used to create interactive websites.</dd>
</dl>
```

**Explanation:**
- `<dl>`: Description list.
- `<dt>`: Description term.
- `<dd>`: Description of the term.

---

## 18. Create a table with colspan and rowspan.

**Answer:**
```html
<table border="1">
  <tr>
    <th colspan="2">Employee Details</th>
  </tr>

  <tr>
    <th>ID</th>
    <th>Name</th>
  </tr>

  <tr>
    <td rowspan="2">101</td>
    <td>Rahul</td>
  </tr>

  <tr>
    <td>Priya</td>
  </tr>
</table>
```

**Explanation:**
- `colspan`: Merges multiple columns.
- `rowspan`: Merges multiple rows.

---

## 19. Create a table with a caption and footer.

**Answer:**
```html
<table border="1">
  <caption>Monthly Employee Salary</caption>

  <thead>
    <tr>
      <th>Name</th>
      <th>Salary</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Rahul</td>
      <td>30000</td>
    </tr>

    <tr>
      <td>Priya</td>
      <td>40000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Total</th>
      <td>70000</td>
    </tr>
  </tfoot>
</table>
```

**Explanation:**
- `<caption>`: Adds a table title.
- `<thead>`: Contains table headings.
- `<tbody>`: Contains table data.
- `<tfoot>`: Contains summary or footer information.

---

## 20. Create a search form with a search input.

**Answer:**
```html
<form action="/search" method="get">
  <label for="search">Search:</label>

  <input
    type="search"
    id="search"
    name="query"
    placeholder="Search here..."
  >

  <button type="submit">Search</button>
</form>
```

**Explanation:**
- `type="search"` creates a search input.
- `method="get"` sends search information through URL query parameters.
- `name` identifies the submitted field.

---

## 21. Create a form with radio buttons.

**Answer:**
```html
<form>
  <p>Select your gender:</p>

  <label>
    <input type="radio" name="gender" value="male" required>
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

  <button type="submit">Submit</button>
</form>
```

**Explanation:**
Radio buttons allow users to select one option from a group. Using the same `name` groups the radio buttons together.

---

## 22. Create a form with multiple checkboxes.

**Answer:**
```html
<form>
  <p>Select your skills:</p>

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

  <button type="submit">Submit</button>
</form>
```

**Explanation:**
Checkboxes allow users to select multiple options independently.

---

## 23. Create a file upload form.

**Answer:**
```html
<form>
  <label for="resume">Upload Resume:</label>

  <input
    type="file"
    id="resume"
    name="resume"
    accept=".pdf,.doc,.docx"
    required
  >

  <button type="submit">Upload</button>
</form>
```

**Explanation:**
- `type="file"` allows users to select files.
- `accept` restricts the suggested file types.
- For an actual file upload, the form generally needs `method="post"` and `enctype="multipart/form-data"`.

---

## 24. Create a date picker using HTML.

**Answer:**
```html
<form>
  <label for="birthday">Select Date of Birth:</label>

  <input
    type="date"
    id="birthday"
    name="birthday"
    min="1990-01-01"
    max="2020-12-31"
    required
  >

  <button type="submit">Submit</button>
</form>
```

**Explanation:**
- `type="date"` displays a date picker.
- `min` specifies the earliest allowed date.
- `max` specifies the latest allowed date.

---

## 25. Create a time input field.

**Answer:**
```html
<form>
  <label for="meeting">Select Meeting Time:</label>

  <input
    type="time"
    id="meeting"
    name="meeting"
    min="09:00"
    max="18:00"
    required
  >

  <button type="submit">Submit</button>
</form>
```

**Explanation:**
`type="time"` allows users to select a time. The `min` and `max` attributes define the allowed time range.

---

## 26. Create a number input with minimum and maximum values.

**Answer:**
```html
<form>
  <label for="age">Enter Your Age:</label>

  <input
    type="number"
    id="age"
    name="age"
    min="18"
    max="60"
    step="1"
    required
  >

  <button type="submit">Submit</button>
</form>
```

**Explanation:**
- `min`: Minimum allowed number.
- `max`: Maximum allowed number.
- `step`: Defines the allowed increment.

---

## 27. Create a phone number input with pattern validation.

**Answer:**
```html
<form>
  <label for="phone">Phone Number:</label>

  <input
    type="tel"
    id="phone"
    name="phone"
    pattern="[0-9]{10}"
    maxlength="10"
    required
    title="Enter a 10-digit phone number"
  >

  <button type="submit">Submit</button>
</form>
```

**Explanation:**
- `pattern` defines a regular expression for validation.
- `[0-9]{10}` requires exactly 10 digits.
- `title` provides additional validation guidance.

---

## 28. Create an email field with autocomplete.

**Answer:**
```html
<form>
  <label for="email">Email:</label>

  <input
    type="email"
    id="email"
    name="email"
    autocomplete="email"
    placeholder="Enter your email"
    required
  >

  <button type="submit">Submit</button>
</form>
```

**Explanation:**
`autocomplete="email"` allows the browser to suggest previously saved email information.

---

## 29. Create a dropdown with optgroup.

**Answer:**
```html
<label for="course">Select Course:</label>

<select id="course" name="course">
  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="react">React</option>
  </optgroup>

  <optgroup label="Backend">
    <option value="node">Node.js</option>
    <option value="python">Python</option>
  </optgroup>
</select>
```

**Explanation:**
`<optgroup>` groups related options inside a dropdown menu.

---

## 30. Create an input with datalist suggestions.

**Answer:**
```html
<label for="browser">Choose a browser:</label>

<input
  list="browsers"
  id="browser"
  name="browser"
>

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
```

**Explanation:**
`<datalist>` provides predefined suggestions while still allowing users to enter their own values.

---

## 31. Group related form fields using fieldset and legend.

**Answer:**
```html
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
```

**Explanation:**
- `<fieldset>` groups related form controls.
- `<legend>` provides a title for that group.

---

## 32. Create a password field with minimum and maximum length.

**Answer:**
```html
<form>
  <label for="password">Password:</label>

  <input
    type="password"
    id="password"
    name="password"
    minlength="8"
    maxlength="20"
    required
  >

  <button type="submit">Register</button>
</form>
```

**Explanation:**
- `minlength="8"` requires at least 8 characters.
- `maxlength="20"` limits the input to 20 characters.
- `required` prevents an empty submission.

---

## 33. Create a progress bar using HTML.

**Answer:**
```html
<label for="progress">Course Progress:</label>

<progress
  id="progress"
  value="70"
  max="100">
</progress>
```

**Explanation:**
`<progress>` represents the completion progress of a task.

Here, the progress is 70 out of 100.

---

## 34. Create a meter element to display a score.

**Answer:**
```html
<label for="score">Performance Score:</label>

<meter
  id="score"
  min="0"
  max="100"
  low="40"
  high="80"
  optimum="100"
  value="85">
  85%
</meter>
```

**Explanation:**
`<meter>` displays a measurement within a known range, such as a score, rating or disk usage.

Difference:
- `<progress>`: Task completion.
- `<meter>`: Measurement within a defined range.

---

## 35. Create a download link for a PDF file.

**Answer:**
```html
<a href="resume.pdf" download="MyResume.pdf">
  Download Resume
</a>
```

**Explanation:**
The `download` attribute suggests downloading the linked resource instead of navigating to it.

---

## 36. Create an email link using mailto.

**Answer:**
```html
<a href="mailto:contact@example.com">
  Send Email
</a>
```

**Explanation:**
`mailto:` opens the user's default email application with the specified email address.

---

## 37. Create a telephone link using tel.

**Answer:**
```html
<a href="tel:+919876543210">
  Call Us
</a>
```

**Explanation:**
`tel:` creates a clickable telephone link, especially useful on mobile devices.

---

## 38. Open an external website in a new tab securely.

**Answer:**
```html
<a
  href="https://www.example.com"
  target="_blank"
  rel="noopener noreferrer">
  Visit Website
</a>
```

**Explanation:**
- `target="_blank"` opens the link in a new browsing context, usually a tab.
- `rel="noopener"` prevents the opened page from accessing the original page through `window.opener`.
- `rel="noreferrer"` prevents sending the referrer information.

---

## 39. Create a skip navigation link for accessibility.

**Answer:**
```html
<a href="#main-content">
  Skip to Main Content
</a>

<header>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>

<main id="main-content">
  <h1>Main Content</h1>
  <p>Welcome to the website.</p>
</main>
```

**Explanation:**
A skip link helps keyboard users bypass repeated navigation and move directly to the main content.

---

## 40. Create a webpage with SEO meta tags.

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">

  <title>Frontend Developer Portfolio</title>

  <meta
    name="description"
    content="Explore my frontend development projects and skills."
  >

  <meta
    name="keywords"
    content="HTML, CSS, JavaScript, React"
  >

  <meta name="author" content="Your Name">
</head>
<body>
  <h1>My Portfolio</h1>
</body>
</html>
```

**Explanation:**
- `title`: Defines the webpage title.
- `description`: Provides a page summary for search engines.
- `author`: Identifies the content author.
- `viewport`: Helps configure mobile rendering.

Note: The keywords meta tag is generally ignored by major search engines such as Google.

---

## 41. Add Open Graph meta tags for social media sharing.

**Answer:**
```html
<head>
  <title>My Portfolio</title>

  <meta property="og:title" content="My Portfolio">

  <meta
    property="og:description"
    content="Explore my frontend projects."
  >

  <meta
    property="og:image"
    content="https://example.com/preview.jpg"
  >

  <meta
    property="og:url"
    content="https://example.com"
  >

  <meta property="og:type" content="website">
</head>
```

**Explanation:**
Open Graph tags control how a webpage appears when shared on social media platforms that support them.

---

## 42. Create a canonical URL for SEO.

**Answer:**
```html
<head>
  <title>My Website</title>

  <link
    rel="canonical"
    href="https://example.com/about"
  >
</head>
```

**Explanation:**
A canonical URL tells search engines which URL should be treated as the preferred version when similar or duplicate pages exist.

---

## 43. Add a favicon to a webpage.

**Answer:**
```html
<head>
  <title>My Website</title>

  <link
    rel="icon"
    type="image/png"
    href="/favicon.png"
  >
</head>
```

**Explanation:**
A favicon is the small icon displayed in the browser tab, bookmarks and other browser interfaces.

---

## 44. Add an external CSS file to HTML.

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>External CSS</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

**Explanation:**
The `<link>` element connects an external CSS stylesheet to the HTML document.

---

## 45. Add internal CSS to an HTML document.

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Internal CSS</title>

  <style>
    h1 {
      color: blue;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

**Explanation:**
The `<style>` element contains CSS rules inside the HTML document.

---

## 46. Add inline CSS to an HTML element.

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<body>
  <h1 style="color: red; text-align: center;">
    Hello World
  </h1>
</body>
</html>
```

**Explanation:**
Inline CSS applies styling directly through an element's `style` attribute.

---

## 47. Add JavaScript to an HTML document using defer.

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript Example</title>

  <script src="script.js" defer></script>
</head>
<body>
  <h1 id="heading">Hello World</h1>
</body>
</html>
```

**Explanation:**
`defer` downloads the external JavaScript file while HTML is being parsed and executes it after HTML parsing finishes, before `DOMContentLoaded`.

This helps avoid accessing HTML elements before they exist.

---

## 48. Add JavaScript using an external module.

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript Module</title>
</head>
<body>
  <h1>Hello World</h1>

  <script type="module" src="app.js"></script>
</body>
</html>
```

**Explanation:**
`type="module"` loads JavaScript as an ES module.

It supports:
- import and export.
- Module scope.
- Automatic deferred execution for module scripts.

---

## 49. Create a dialog box using HTML5.

**Answer:**
```html
<button id="openBtn">Open Dialog</button>

<dialog id="myDialog">
  <h2>Welcome!</h2>

  <p>This is an HTML dialog box.</p>

  <button id="closeBtn">Close</button>
</dialog>

<script>
  const dialog = document.getElementById("myDialog");

  document.getElementById("openBtn").onclick = () => {
    dialog.showModal();
  };

  document.getElementById("closeBtn").onclick = () => {
    dialog.close();
  };
</script>
```

**Explanation:**
- `<dialog>` creates a native dialog element.
- `showModal()` opens a modal dialog.
- `close()` closes the dialog.

---

## 50. Create a reusable HTML template.

**Answer:**
```html
<template id="cardTemplate">
  <div class="card">
    <h2>Card Title</h2>
    <p>Card Description</p>
  </div>
</template>

<div id="container"></div>

<script>
  const template = document.getElementById("cardTemplate");

  const clone = template.content.cloneNode(true);

  document.getElementById("container").appendChild(clone);
</script>
```

**Explanation:**
- `<template>` stores HTML that is not rendered immediately.
- `content.cloneNode(true)` creates a copy of its content.
- JavaScript can insert that copy wherever needed.

---

## 51. Create a semantic article and section structure.

**Answer:**
```html
<main>
  <article>
    <header>
      <h1>Introduction to HTML</h1>
      <p>Published on November 13, 2026</p>
    </header>

    <section>
      <h2>What is HTML?</h2>
      <p>HTML structures webpage content.</p>
    </section>

    <footer>
      <p>Written by the development team.</p>
    </footer>
  </article>
</main>
```

**Explanation:**
- `<article>` represents self-contained content.
- `<section>` groups related content.
- `<header>` introduces content.
- `<footer>` provides closing or related information.

---

## 52. Add a time element with a machine-readable date.

**Answer:**
```html
<article>
  <h2>Web Development Workshop</h2>

  <p>
    Date:
    <time datetime="2026-11-13">
      November 13, 2026
    </time>
  </p>
</article>
```

**Explanation:**
The `<time>` element represents dates or times in a machine-readable format using the `datetime` attribute.

---

## 53. Add a blockquote and citation.

**Answer:**
```html
<figure>
  <blockquote cite="https://example.com/article">
    <p>Learning never stops in technology.</p>
  </blockquote>

  <figcaption>
    Source:
    <cite>Web Development Article</cite>
  </figcaption>
</figure>
```

**Explanation:**
- `<blockquote>` represents a longer quotation.
- `cite` attribute can specify the source URL.
- `<cite>` identifies the title of a creative work or source.

---

## 54. Display computer code using HTML.

**Answer:**
```html
<h2>JavaScript Example</h2>

<p>Use the <code>console.log()</code> method.</p>

<pre>
function greet() {
  console.log("Hello World");
}
</pre>
```

**Explanation:**
- `<code>` represents a piece of computer code.
- `<pre>` preserves whitespace and line breaks.

They are often combined to display formatted code blocks.

---

## 55. Display text with superscript and subscript.

**Answer:**
```html
<p>Mathematical expression: X<sup>2</sup></p>

<p>Chemical formula: H<sub>2</sub>O</p>
```

**Explanation:**
- `<sup>` displays superscript text.
- `<sub>` displays subscript text.

---

## 56. Create a responsive image using the srcset attribute.

**Answer:**
```html
<img
  src="small.jpg"
  srcset="
    small.jpg 480w,
    medium.jpg 800w,
    large.jpg 1200w
  "
  sizes="
    (max-width: 600px) 100vw,
    (max-width: 1000px) 80vw,
    60vw
  "
  alt="Beautiful landscape"
>
```

**Explanation:**
- `srcset` provides multiple image sizes.
- `sizes` tells the browser how much space the image is expected to occupy.
- The browser selects a suitable image based on the available display conditions.

---

## 57. Create an accessible SVG icon directly in HTML.

**Answer:**
```html
<button type="button" aria-label="Add to favorites">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true">

    <path
      d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11z"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</button>
```

**Explanation:**
- `<svg>` creates scalable vector graphics.
- `viewBox` defines the SVG coordinate system.
- `aria-hidden="true"` hides the decorative icon from assistive technology.
- `aria-label` provides the button's accessible name.

---

## 58. Create a complete HTML webpage with accessibility and SEO best practices.

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <meta
    name="description"
    content="Learn web development with practical tutorials."
  >

  <title>Web Development Learning Platform</title>

  <link rel="icon" href="favicon.png">

  <link rel="stylesheet" href="style.css">

  <script src="script.js" defer></script>
</head>

<body>

  <a href="#main-content">Skip to content</a>

  <header>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/courses">Courses</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main id="main-content">

    <section>
      <h1>Learn Web Development</h1>

      <p>
        Improve your frontend development skills
        with practical tutorials.
      </p>

      <a href="/courses">Explore Courses</a>
    </section>

    <section>
      <h2>Popular Courses</h2>

      <article>
        <h3>HTML Fundamentals</h3>
        <p>Learn HTML from beginner to advanced level.</p>
      </article>

      <article>
        <h3>CSS Fundamentals</h3>
        <p>Learn to design responsive websites.</p>
      </article>

    </section>

  </main>

  <footer>
    <p>&copy; 2026 Web Development Platform.</p>
  </footer>

</body>
</html>
```

**Explanation:**
This combines several important HTML concepts:

- Semantic HTML elements.
- Proper document structure.
- SEO meta description.
- Responsive viewport.
- External CSS and JavaScript.
- Accessible navigation.
- Skip navigation link.
- Correct heading hierarchy.
- Meaningful page content.
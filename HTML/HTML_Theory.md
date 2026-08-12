# 1.What is HTML?
- HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages. It defines the content of a webpage using elements such as headings, paragraphs, images, links, forms, tables, and multimedia.
- HyperText is text that contains links to other documents or web pages.
```html
<a href="https://google.com">Google</a>
<!-- Clicking the link takes the user to another page. -->
```
- Markup means adding tags around content to describe its meaning.
```html
<h1>Hello World</h1>
<!-- The browser understands that this is a heading. -->
```
- HTML not a Programming Language
- HTML only describes the structure of a webpage.

- It does not contain:

Variables ,
Loops ,
Conditions ,
Functions ,
Algorithms

Therefore, HTML is a Markup Language, not a programming language.
```html
<h1>Welcome</h1>

<p>This is HTML.</p>

<img src="image.jpg" alt="Image">
<!-- HTML structures the page. -->
```

# 2.History of HTML

- HTML was created by Tim Berners-Lee in 1991 to share scientific documents over the World Wide Web. Over time, HTML evolved through several versions, with HTML5 becoming the modern standard.
- 1989-
Tim Berners-Lee proposed the World Wide Web.

    1991-
    First version of HTML released.

    1995-
    HTML 2.0
    First official standard.

    1997 - 
    HTML 3.2

    1999 - 
    HTML 4.01

    2008 - 
    HTML5 Draft released.

    2014- 
    HTML5 officially became the W3C recommendation.

- To allow scientists to share documents through hyperlinks.

# 3. HTML Versions

- HTML has evolved through several versions, each introducing new features. HTML5 is the latest major version and is maintained as a Living Standard by WHATWG.

- HTML 1.0 (1991)

Very basic , 
Only simple text and links.

- HTML 2.0 (1995)

First official HTML standard.

Added:

Forms , 
Basic structure

- HTML 3.2 (1997)

Added:

Tables , 
Fonts , 
Applets

- HTML 4.01 (1999)

Major improvements.

Added:

CSS integration , 
Better forms , 
JavaScript support , 
Accessibility improvements

- XHTML (2000)

A stricter version of HTML based on XML.

Required:

Proper nesting , 
Lowercase tags , 
Closing all elements

- HTML5 (2014)

Huge update.

Added:

Audio ,
Video , 
Canvas ,
SVG ,
Semantic elements ,
Local Storage ,
Web Workers ,
Drag & Drop ,
Geolocation ,

- Today HTML follows the Living Standard, meaning it is continuously updated instead of releasing HTML6, HTML7, etc.

# 4. HTML5 Features
- HTML5 introduced semantic elements, multimedia support, graphics, better forms, offline storage, and several browser APIs, making web development simpler and reducing reliance on third-party plugins.

1. Semantic Elements
```html
<!-- Instead of this -->
<div id="header"></div> 
<!-- use this -->
<header></header>
```
- Examples
```html
<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>
```
Better SEO , 
Better accessibility , 
Cleaner code

2. Audio
```html
<audio controls>

    <source src="music.mp3">

</audio>
<!-- No plugins needed. -->
```

3. Video

```html
<video controls width="400">

    <source src="movie.mp4">

</video>
<!-- Before HTML5, Flash plugins were commonly used. -->
```
4. Canvas
Draw graphics using JavaScript.
```html
<canvas width="400" height="200"></canvas>

```
Used for:

Games , 
Charts , 
Drawing apps

5. SVG
Vector graphics.
```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40"></circle>
</svg>
```

6. Local Storage
```html
localStorage.setItem("name","John");
<!-- Stores data in the browser even after it is closed. -->
```

7. Session Storage
```html
sessionStorage.setItem("user","Alice");
```
Data lasts only for the current browser tab/session.

8. Geolocation API
```html
navigator.geolocation.getCurrentPosition();
```





# 5. Why HTML is Not a Programming Language

- HTML is not a programming language because it cannot perform computations or implement programming logic. It only describes the structure and content of a webpage.

- Programming Languages Have
Variables ,
Loops,
Functions,
Conditions,
Classes,
Objects,
Algorithms

- HTML Has
Tags
Elements
Attributes
Structure

```html
<h1>Hello</h1>
<!-- Displays a heading.

It performs no computation. -->
```
```js
let age = 20;

if(age >= 18){

    console.log("Adult");

}
//This contains variables and logic.
```
- It marks up content with tags
```html
<p>Hello</p>
<!-- The browser understands that "Hello" is a paragraph. -->
```

- Why isn't HTML Turing Complete?

Because it cannot:

Execute algorithms
Make decisions
Repeat operations with loops
Perform computations on its own

# 6. HTML vs XHTML
- HTML (HyperText Markup Language) is flexible and forgiving, while XHTML (Extensible HyperText Markup Language) is a stricter version of HTML based on XML. XHTML requires well-formed documents with proper nesting, lowercase tags, quoted attributes, and all elements properly closed.
- It combines:

HTML , 
XML Rules
```html
<h1>Hello

<p>Welcome
    <!-- Most browsers will still render it correctly. -->

```
```xhtml
<h1>Hello</h1>

<p>Welcome</p>
<!-- Everything must be properly closed. -->
```

Major Differences
1. Closing Tags

html-
```html
<p>Hello
<!-- Allowed (browser usually fixes it). -->
    ```

XHTML
```xhtml
<p>Hello</p>
<!-- Mandatory closing tag -->
```
2. Lowercase Tags

html-
```html
<H1>Hello</H1>
<!-- Allowed. -->
```
xhtml - 
```xhtml
<h1>Hello</h1>
<!-- Required in lowercase -->
```

3. Attribute Quotes

html-
```html
<input type=text>
<!-- allowed -->
```
xhtml-
```xhtml
<input type="text" />
<!-- Quotes are mandatory. -->
```
4. Proper Nesting
```xhtml
<b>
    <i>Hello</i>
</b>
```

5. Empty Elements

html-
```html
<br>
```
xhtml-
```xhtml
<br/>
```
- HTML

Flexible , Closing tags optional (some elements) ,Error tolerant ,Uppercase allowed , Quotes optional (sometimes) ,Not XML-based
- XHTML

Strict ,  Well-formed documents required ,Lowercase only , Closing tags required , Quotes mandatory , XML-based
- Modern web development primarily uses HTML5, not XHTML.
- HTML is highly forgiving of coding errors, whereas XHTML uses strict XML parsing rules that completely break and freeze a webpage if a single syntax error is found

# 7. HTML vs XML
- HTML is designed to display and structure web content, while XML (Extensible Markup Language) is designed to store and transport data. HTML has predefined tags, whereas XML allows users to define their own tags.

html -
```html
<h1>Interview</h1>

<p>Hello World</p>
<!-- Browser displays content. -->
```

xml - 
```xml
<employee>

    <name>John</name>

    <age>25</age>

</employee>
<!-- Stores structured data. -->
```

- Html
 
 Display data , 

 ```html
 <h1>

<p>

<img>
<!-- Predefined tags -->
```
Forgiving. Browser fixes many errors.

Displays content.

Used for web pages

- XML  - 

Store and transfer data , 

Browser renders it

```xml
<student>

<salary>

<company>
<!-- Custom tags. -->
```

Strict.

Any syntax error makes the document invalid.

Does not define presentation

- XML stores data.

HTML displays data.

# 8. HTML vs CSS

- HTML structures the content of a webpage, while CSS styles and designs that content by controlling colors, layouts, fonts, spacing, animations, and responsiveness.

html
```html
<h1>Welcome</h1>

<p>Hello World</p>
<!-- Creates the structure. -->
```
css
```css
h1{

    color: blue;

    font-size:40px;

}
/* Styles the HTML. */
```
- Without CSS , 

Heading

Paragraph

Button

Looks plain.

- With CSS

Colors

Fonts

Layout

Animation

Responsive Design

- html

HTML builds the house. 

Structure , Content , Elements , Create DOM , No layout control

```html
<button>Login</button>
```
- css

CSS paints and decorates the house.

Styling , Design , Selectors , Styles DOM , Controls Layout
```css
 button{

    background:blue;

    color:white;

    padding:10px;

}
```

# 9. HTML vs JavaScript 
- HTML structures web pages, CSS styles them, and JavaScript adds behavior, interactivity, and dynamic functionality.
- HTML

Creates

Heading ,
Image , 
Form , 
Button .

Static , Markup Language ,  Creates Elements ,  No Logic

- JavaScript

Makes them interactive , Full Programming Logic ,  Programming Language  , Controls Elements  , Dynamic ,
Validate forms ,
Fetch APIs ,
Manipulate the DOM , 
Create animations , Handle events
Store data ,
Build SPAs 
```html
<button onclick="alert('Hello')">

Click Me

</button>
```
- Without JavaScript

Button does nothing.

With JavaScript

Button performs an action.

- HTML → Structure

CSS → Design

JavaScript → Functionality

# 10. Structure of an HTML Document

- Every HTML document follows a standard structure consisting of the DOCTYPE declaration, the html element, the head section containing metadata, and the body section containing visible content.
```html
<!DOCTYPE html>
<!-- Tells the browser which HTML version is being used. -->

<html lang="en">
<!-- Root element.
Everything goes inside it. -->

<head>
<!-- Contains metadata.
Examples:
Title  ,CSS ,Icons ,Meta tags ,Scripts
Not displayed on the page. -->

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>My Website</title>

</head>

<body>
    <!-- Contains everything visible to the user.
     Text ,Images ,Forms ,Tables , Videos -->

    <h1>Hello World</h1>

</body>

</html>
```

```
HTML Document

│

├── DOCTYPE

│

└── html

      │

      ├── head

      │      ├── meta

      │      ├── title

      │      └── link

      │

      └── body

             ├── h1

             ├── p

             ├── img

             └── footer
```
        
# 11. HTML Boilerplate
- An HTML boilerplate is the minimum standard template required to start an HTML document. It contains the essential tags needed for proper rendering by browsers.
```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

</body>

</html>
```
- Why Boilerplate?

Without it,

Browser compatibility decreases.
Responsive design may not work correctly.
Character encoding issues can occur.
SEO metadata may be missing.

# 12. DOCTYPE

- <!DOCTYPE html> tells the browser that the document uses HTML5 and instructs it to render the page in Standards Mode instead of Quirks Mode.

```html
<!DOCTYPE html>
```
Older versions were much longer.

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<!-- HTML 4.01 Example -->
```

- DOCTYPE is an HTML Tag ,It is a declaration.
- Without it,

Browsers may switch to Quirks Mode, where they emulate older browser behavior. This can cause inconsistent layouts and CSS rendering.

With <!DOCTYPE html>,

Browsers use Standards Mode, following modern HTML and CSS specifications.

- Modern browsers can still render pages without it, but you should always include it to ensure Standards Mode.
- At the very top of the HTML document, before the <html> tag -DOCTYPE be written

# 13. HTML Parser

-The HTML Parser is a component inside the browser that reads HTML code, checks its syntax, and converts it into a DOM (Document Object Model) tree that JavaScript and CSS can use.
- When you open a website,

The browser doesn't understand HTML directly.

Instead, it reads the HTML file character by character.
- 
HTML File

↓

Browser

↓

HTML Parser

↓

DOM Tree

↓

Screen
```html
<!DOCTYPE html>

<html>

<head>

<title>My Website</title>

</head>

<body>

<h1>Hello</h1>

<p>Welcome</p>

</body>

</html>
<!-- The parser reads every tag. -->
```
- What Does the Parser Do?

Step 1

Reads HTML

↓

Step 2

Checks syntax

↓

Step 3

Creates Nodes

↓

Step 4

Creates DOM Tree

↓

Step 5

Browser renders page
- 
HTML

```html
<body>

<h1>Hello</h1>

<p>World</p>

</body>
```
DOM - 
```
 Body

├── H1

│      Hello

│

└── P

       World
- The parser reads HTML from top to bottom.
```
Line 1

↓

Line 2

↓

Line 3

↓

...

↓

End

- Parser Ignore Errors
```html
<p>Hello

<h1>World
```
Even without closing tags,

Browsers automatically fix many HTML errors.

- HTML is error tolerant.

The browser tries to repair invalid HTML whenever possible.
- JavaScript only modifies the DOM after the parser creates it.

# 14. Rendering Process

- The browser rendering process converts HTML, CSS, and JavaScript into pixels displayed on the screen. It involves parsing HTML, parsing CSS, creating the DOM and CSSOM, combining them into the Render Tree, performing Layout, and finally Painting.

- HTML

↓

HTML Parser

↓

DOM

↓

CSS Parser

↓

CSSOM

↓

Render Tree

↓

Layout

↓

Paint

↓

Screen
- Step 1 — Download HTML

Browser requests

index.html

from the server.
- Step 2 — Parse HTML

Creates

DOM Tree
- Step 3 — Parse CSS

Browser reads
```css
h1{

color:red;

}
```
Creates

CSSOM

CSS Object Model

- Step 4 — Render Tree

Browser combines

DOM

+

CSSOM

↓

Render Tree

Only visible elements become part of the Render Tree.

```html
<div hidden>

Hello

</div>
<!-- Not included because it's hidden. -->
```

- Step 5 — Layout (Reflow)

Browser calculates

Width ,
Height ,
Position ,
Margin ,
Padding

Every element gets an exact location.

- Step 6 — Paint

Browser paints

Text ,
Borders ,
Images ,
Colors ,
Shadows

- Step 7 — Composite

Layers are combined and displayed on the screen.

HTML

↓

DOM

↓

CSSOM

↓

Render Tree

↓

Layout

↓

Paint

↓

Composite

↓

Display

- DOM + CSSOM = Render Tree


# 15. Browser DOM creation

- The browser creates the DOM by parsing HTML and converting every element, attribute, and text node into a tree of JavaScript objects called the Document Object Model.
```html
<html>

<body>

<h1>Hello</h1>

<p>World</p>

</body>

</html>
```
```
Document

│

└── html

      │

      ├── head

      │

      └── body

             │

             ├── h1

             │      │

             │      Hello

             │

             └── p

                    │

                    World
```
- Every Tag Becomes a Node
```html
<h1>Hello</h1>
```
Becomes

Element Node

↓

Text Node

- DOM is a Tree

Everything is connected.

Document

↓

HTML

↓

Body

↓

Section

↓

Paragraph

- JavaScript Uses DOM

```js
document.querySelector("h1")
```
The browser searches the DOM.

- JavaScript can change the DOM
```js
document.querySelector("h1").textContent = "Interview";
// The webpage updates immediately.
```
- The DOM is not the HTML file.

The DOM is an in-memory object representation of the HTML document.
- HTML is text.

DOM is objects.

# 16. HTML Elements
- An HTML element consists of an opening tag, content, and a closing tag. Some elements, known as void (empty) elements, do not have closing tags.

```html
<p>Hello World</p>
<h1>Interview</h1>
<!-- Entire line is one element. -->
```
Opening Tag

↓

Content

↓

Closing Tag
- Element Structure
<tag>

Content

</tag>

- Nested Elements
```html
<div>

<h1>Hello</h1>

<p>World</p>

</div>
<!-- The div contains two child elements. -->
```
- Element Types
```html<h1>

<p>

<div>

<span>

<section>

<article>

<footer>
```
- Everything from the opening tag to the closing tag (including the content) is called an element.

# 17.  HTML Tags
- HTML tags are keywords enclosed in angle brackets (< >) that define the beginning or end of an HTML element.
```html
<p>Hello</p>
```
- <p>

</p> tags

- Element

<p>Hello</p>

- Opening Tag

<p>
- Closing Tag

</p>

- Self-closing (Void) Tag

<img>

No closing tag is needed.

- Difference Between Tags and Elements
```html
<h1>Hello</h1>
```
Tags

<h1>

</h1>

Element

<h1>Hello</h1>

# 18.  Empty Elements

- Empty elements (also called void elements) are HTML elements that do not have any content or closing tag.
```html
<br>

<hr>

<img>

<input>

<meta>

<link>

<source>

<track>

<area>

<base>

<col>

<embed>

<wbr>
```
- Line 1

<br>

Line 2
- Output

Line 1

Line 2
- ```html
<img src="photo.jpg" alt="Photo">
<input type="text">
<!-- No closing tag. Because these elements don't wrap any content. -->
```
- Is <img></img> valid?

No.

<img> is a void element and must not have a closing tag in HTML.


# 19.  Nesting Rules
- Nesting means placing one HTML element inside another. HTML elements must be nested properly to create a valid document structure.
- ```html
<div>

<p>Hello</p>

</div>
```
```html
<!-- Incorrect Nesting -->
<div>

<p>Hello

</div>

</p>
```
- ```html
<ul>

<li>Apple</li>

<li>Mango</li>

</ul>
```

```html
<div>

<h1>Hello</h1>

</div>
<!-- Parent
div

Child
h1 -->
```
- Browsers try to fix incorrect nesting automatically, but you should never rely on this behavior because it can lead to unexpected layouts or accessibility issues.
- Always close the last opened element first.

# 20.  Validation
- HTML validation is the process of checking whether an HTML document follows the HTML specification and is free from syntax and structural errors.
- Why Validate?

Validation helps detect:

Missing closing tags ,
Invalid nesting ,
Duplicate IDs , 
Missing required attributes ,
Deprecated elements ,
Incorrect attribute values

- ```html
<p>

<div>Hello</div>

</p>
<!-- A <div> should not be placed inside a <p>. -->

<!-- Correct -->
<div>

<p>Hello</p>

</div>
```
- Benefits

Better browser compatibility ,
Improved accessibility ,
Cleaner code ,
Better maintainability ,
Fewer rendering issues
- Common Validation Errors
```html
<!-- Missing alt -->
<img src="cat.jpg">
<!-- Better -->
<img src="cat.jpg" alt="Cat">

<!-- Duplicate IDs -->
<div id="box"></div>
<div id="box"></div>
<!-- IDs should be unique within a page. -->

 <!-- Unclosed Tags -->
<ul>
    <li>Apple
    <li>Mango
</ul>
<!-- Correct -->
<ul>
    <li>Apple</li>
    <li>Mango</li>
</ul>
```
- A common tool is the official W3C Markup Validator, which checks your HTML against the standard and reports any errors or warnings.


# 21.  What are Elements?

- An HTML element is the complete structure consisting of an opening tag, content, and a closing tag. It represents a piece of content on a webpage. Some elements, called void (empty) elements, do not have a closing tag.
```html
<p>Hello World</p>
<h1>Interview Preparation</h1>
<!-- This entire line is one HTML element. -->
```
- Opening Tag

↓

Content

↓

Closing Tag
- Nested Elements
```html
<div>

    <h1>Welcome</h1>

    <p>Hello</p>

</div>
```
- div is the parent element.

h1 and p are child elements.
- Empty (Void) Elements

Some elements don't contain content.
```html
<br>

<hr>

<img>

<input>
```
- Browser DOM

Every HTML element becomes an object (node) in the DOM.
```html
<p>Hello</p>
```
Becomes

Paragraph Element

↓

Text Node
- Tag ≠ Element

# 22.  What are Attributes?
- HTML attributes provide additional information or configuration for an HTML element. They are written inside the opening tag as name-value pairs.

- <tag attribute="value">
- ```html
<img src="cat.jpg" alt="Cat">
```
Attributes

src="cat.jpg"

alt="Cat"

- ```html
<a href="https://google.com">

Google

</a>
<!-- Attribute - href -->
<input type="text">

<button disabled>

<p title="Hello">

<div class="container">

<div id="header">
```
- Rules

Attributes

Are written inside the opening tag. 
Usually have a name and value.
Multiple attributes are separated by spaces.
```html
<img
src="cat.jpg"
alt="Cat"
width="300"
height="200">
```
- Boolean Attributes
Some attributes don't require a value.
```html
<input disabled>

<input required>

<input checked>

<input readonly>
```
Equivalent to

<input disabled="disabled">
- element have multiple attributes
```html
<img
src="cat.jpg"
alt="Cat"
width="300">
```


# 23.  Global Attributes
- Global attributes are attributes that can be applied to almost every HTML element. They provide common functionality such as identification, styling, accessibility, language settings, editing, and metadata.
- id

class

style

title

lang

dir

hidden

tabindex

draggable

contenteditable

spellcheck

translate

data-*

- ```html
<p
id="para1"
class="text"
title="Paragraph"
style="color:red;"
lang="en">

Hello

</p>
<!-- Every attribute above is a global attribute. -->
```
- Why are they called Global?

Because they work on almost every HTML element.

```html
<h1 class="heading">

<p class="heading">

<div class="heading">

<section class="heading">
```
- Is href a Global Attribute?

❌ No.

Only works on elements like <a> and <area>.
- Global attributes can be used on nearly every HTML element.


# 24.  id
# 25.  class

# 26. title
- The title attribute provides additional information about an HTML element. Most browsers display this information as a tooltip when the user hovers over the element.
- 
```html
<p title="This is a paragraph">
    Hello World
</p>
<!-- When the mouse hovers over the paragraph, 
A small tooltip appears:, 
This is a paragraph -->
```
```html
<button title="Click to submit">
    Submit
</button>
<!-- Hovering over the button shows:
Click to submit -->
```
```html
<img
    src="cat.jpg"
    alt="Cat"
    title="Cute Cat">
<!-- Hovering over the image displays:
Cute Cat -->
```
- Uses

Helpful hints ,
Extra information , 
Tooltips ,
Improves user experience , 
It is completely optional.

- 
<title> defines the page title shown on the browser tab.

title="" is an attribute used on individual elements.

# 27. style
- The style attribute is used to apply inline CSS directly to an HTML element.
```css
<p style="color:red;">
    Hello
</p>
/* The text appears in red. */
<h1
style="color:blue;
font-size:40px;">
Interview
</h1>
<div
style="background:yellow;
padding:20px;
border:1px solid black;">
Content
</div>
```
- Advantages

Quick styling ,
Useful for testing , 
Small examples
- Disadvantages

Hard to maintain , 
Repeated code ,
Not reusable ,
Mixes HTML and CSS
- Best Practice

Instead of
```html

<p style="color:red">
```
Prefer
```html
<p class="error">
```
and
```css
.error{

color:red;

}
```
- higher priority

 Inline CSS

↓

Internal CSS

↓

External CSS

(Generally speaking, inline styles have higher specificity than typical stylesheet rules.)
- Use the style attribute only for quick examples or special cases.

In real projects, prefer external CSS.


# 28. lang
- The lang attribute specifies the language of the content in an HTML document or element. It helps browsers, screen readers, search engines, and translation tools understand the language being used.
```html
<html lang="en">
<!-- English. -->
<html lang="fr">
<!-- French -->
 <html lang="de">
<!-- German -->
<html lang="es">
<!-- Spanish -->
<html lang="hi">
<!-- Hindi -->
```
- It helps:

Screen readers ,
Search engines , 
Spell checkers, 
Browser translation tools ,
Accessibility software

```html
<html lang="en">

<body>

<p>Hello</p>

</body>

</html>
<!-- The browser knows the page is in English. -->
```
```html
<p>

Hello

<span lang="fr">

Bonjour

</span>

</p>
<!-- Multiple Languages
The document is English,
But "Bonjour" is French. -->
```
- Always add

<html lang="en">

or the appropriate language for your page.

It is considered a best practice.

# 29, dir
- The dir attribute specifies the text direction of an element. It supports left-to-right (ltr), right-to-left (rtl), and auto.
- ltr

Left → Right

Default for languages like:

English ,
French ,
German ,
Hindi (typically written left-to-right)

```html
<p dir="ltr">

Hello

</p>
```

- rtl

Right → Left

Used for:

Arabic ,
Hebrew , 
Persian 

```html
<p dir="rtl">

مرحبا

</p>
<!-- Arabic text starts from the right. -->
```
- auto

Browser automatically detects the direction based on the content.
```html
<p dir="auto">
مرحبا
</p>
```
- Supports internationalization.

Without it,

Arabic or Hebrew text may render with the wrong direction.
```html
<html
lang="ar"
dir="rtl">
<!-- Entire webpage becomes right-to-left. -->
```
- dir can be applied to individual elements

# 30. hidden
- The hidden attribute hides an HTML element from the page. The element remains in the DOM but is not rendered to the user.
```html
<p hidden>

Hello

</p>
<!-- Nothing appears on the page. -->
 <div hidden>

Welcome User

</div>
<!-- The div exists in the DOM,
but it is not displayed. -->
```
- Conceptually similar to:

display: none;
```html
<p id="msg" hidden>
Welcome
</p>
```
```js
document.getElementById("msg").hidden = false;
// Now the paragraph becomes visible.
```
- Useful for:

Messages ,
Loading screens , 
Popups , 
Tabs ,
Dynamic UI ,
Content shown later with JavaScript

- hidden vs CSS
```html
<div hidden>
 ```
 ```css
 display:none;
 ```
 Both hide the element visually.
 - However, the hidden attribute expresses the semantic intent that the content is currently not relevant or should not be shown.
 - It remains in the DOM.
 - JavaScript can access a hidden element
 ```js
 document.getElementById("msg");
 ```
- Can the hidden attribute be removed?

yes, 
element.hidden = false;

or 

element.removeAttribute("hidden");
# HTML Global Attributes

## 31. What is the `draggable` attribute?

The `draggable` attribute specifies whether an HTML element can be dragged by the user.

### Example

```html
<div draggable="true">
  Drag me
</div>
```

To prevent dragging:

```html
<div draggable="false">
  You cannot drag me
</div>
```

The `draggable` attribute itself does not create a complete custom drag-and-drop application. JavaScript is normally used when you need custom drag-and-drop behavior.

### Interview Answer

> The `draggable` attribute specifies whether an HTML element can be dragged by the user. It can be set to `true` or `false`.

### Remember

```text
draggable="true"
→ Element can be dragged

draggable="false"
→ Element cannot be dragged
```

---

## 32. What is the `spellcheck` attribute?

The `spellcheck` attribute tells the browser whether it should check the spelling of text entered by the user.

It is commonly used with:

```text
<input>
<textarea>
contenteditable elements
```

### Example

```html
<textarea spellcheck="true"></textarea>
```

To disable spelling checks:

```html
<textarea spellcheck="false"></textarea>
```

### Important

`spellcheck` does not itself provide a dictionary or spelling engine. It tells the browser whether its normal spelling-checking behavior should be enabled.

### Interview Answer

> The `spellcheck` attribute specifies whether the browser should check the spelling of user-entered text.

### Remember

```text
spellcheck="true"
→ Check spelling

spellcheck="false"
→ Don't check spelling
```

---

## 33. What is the `translate` attribute?

The `translate` attribute tells translation tools whether the text content of an element should be translated.

It accepts:

```html
translate="yes"
translate="no"
```

### Example

```html
<p translate="yes">
  Welcome to our website.
</p>
```

To prevent a brand name from being translated:

```html
<h1>
  Welcome to <span translate="no">WebNest</span>
</h1>
```

### Important

The `translate` attribute does not perform the translation.

It simply provides information to translation systems.

### Interview Answer

> The `translate` attribute indicates whether the content of an HTML element should be translated by translation tools.

### Remember

```text
translate="yes"
→ Translate the content

translate="no"
→ Do not translate the content
```

---

## 34. What is the `tabindex` attribute?

The `tabindex` attribute controls whether an element can receive keyboard focus and how it participates in keyboard navigation.

### `tabindex="0"`

`tabindex="0"` puts an element into the normal keyboard tab order.

Example:

```html
<div tabindex="0">
  Focusable content
</div>
```

The user can reach the element using the `Tab` key.

### `tabindex="-1"`

`tabindex="-1"` makes an element focusable programmatically but normally removes it from sequential keyboard navigation.

Example:

```html
<div tabindex="-1">
  Dialog content
</div>
```

JavaScript can focus it:

```js
element.focus();
```

This is useful for things such as:

```text
Dialogs
Error messages
Dynamic content
Custom focus management
```

### Positive `tabindex`

Positive values can create a custom keyboard order:

```html
<button tabindex="1">First</button>
<button tabindex="2">Second</button>
```

However, positive `tabindex` values are generally discouraged.

Why?

Because manually controlling the entire keyboard order can make accessibility difficult to maintain.

Prefer naturally focusable elements such as:

```html
<button>Submit</button>
<a href="/home">Home</a>
<input type="text">
```

### Interview Answer

> `tabindex` controls whether an element can receive keyboard focus and its participation in the tab order. `tabindex="0"` places an element in the normal tab order, while `tabindex="-1"` allows programmatic focus but normally skips the element during Tab navigation.

### Remember

```text
tabindex="0"
→ Normal Tab order

tabindex="-1"
→ Programmatically focusable
→ Normally skipped by Tab

positive tabindex
→ Custom Tab order
→ Generally avoid
```

---

## 35. What is the `accesskey` attribute?

The `accesskey` attribute defines a keyboard shortcut for an HTML element.

### Example

```html
<button accesskey="s">
  Save
</button>
```

The user can use a browser- and operating-system-specific keyboard combination to access the element.

The exact combination can vary between environments.

For example, a browser may use a modifier key such as:

```text
Alt
Ctrl
Command
```

along with the specified key.

### Why Should `accesskey` Be Used Carefully?

Keyboard shortcuts can conflict with:

```text
Browser shortcuts
Operating-system shortcuts
Screen-reader shortcuts
Application shortcuts
```

Therefore, using too many access keys can create a confusing experience.

### Interview Answer

> The `accesskey` attribute defines a keyboard shortcut for an HTML element. The exact keyboard combination depends on the browser and operating system.

### Remember

```text
accesskey
→ Keyboard shortcut
```

---

## 36. What is the `contenteditable` attribute?

The `contenteditable` attribute makes the content of an HTML element editable by the user.

### Example

```html
<div contenteditable="true">
  Edit this text.
</div>
```

The user can click the element and modify its content directly.

### `contenteditable="false"`

You can explicitly make an element non-editable:

```html
<div contenteditable="false">
  This content cannot be edited.
</div>
```

### `contenteditable="plaintext-only"`

Some browsers support:

```html
<div contenteditable="plaintext-only">
  Enter plain text here.
</div>
```

This requests plain-text editing rather than rich-text editing.

### Common Uses

`contenteditable` can be used for:

```text
Rich-text editors
Inline editing
Notes
Document editors
Content management interfaces
```

### Important Security Point

Content entered into a `contenteditable` element should not automatically be considered safe HTML.

If user-generated HTML is stored and later rendered without proper sanitization, it can create security vulnerabilities such as XSS.

### `contenteditable` vs `<input>`

An `<input>` is a form control:

```html
<input type="text">
```

`contenteditable` can make the content of many HTML elements directly editable:

```html
<div contenteditable="true">
  Editable content
</div>
```

Think:

```text
<input>
→ Designed for form input

contenteditable
→ Makes an element's content editable
```

### Interview Answer

> The `contenteditable` attribute specifies whether the content of an HTML element can be edited directly by the user. It is commonly used for inline editing and rich-text editors.

### Remember

```text
contenteditable="true"
→ User can edit the element's content
```

---

## 37. What are `data-*` attributes?

`data-*` attributes are custom HTML attributes used to store extra data on an HTML element.

The attribute name must begin with:

```text
data-
```

followed by a custom name.

### Example

```html
<button
  data-user-id="123"
  data-role="admin">
  View User
</button>
```

Here:

```text
data-user-id
data-role
```

are custom data attributes.

### Why Are `data-*` Attributes Useful?

They allow developers to attach small pieces of custom data to HTML elements.

For example:

```html
<button
  data-product-id="101"
  data-price="499"
  data-category="shoes">
  Buy
</button>
```

JavaScript can then read this information.

---

## Accessing `data-*` Attributes With JavaScript

Suppose we have:

```html
<button
  id="buyButton"
  data-product-id="101"
  data-category="shoes">
  Buy
</button>
```

First, select the element:

```js
const button = document.querySelector("#buyButton");
```

Then use the `dataset` property:

```js
console.log(button.dataset.productId);
```

Output:

```text
101
```

And:

```js
console.log(button.dataset.category);
```

Output:

```text
shoes
```

### Important Naming Rule

HTML:

```html
data-user-id="123"
```

JavaScript:

```js
element.dataset.userId
```

The hyphenated attribute name becomes camelCase.

For example:

```text
data-user-id
→ dataset.userId

data-product-name
→ dataset.productName

data-user-role
→ dataset.userRole
```

### Important: `dataset` Values Are Strings

Consider:

```html
<div id="product" data-price="500"></div>
```

JavaScript:

```js
const product = document.querySelector("#product");

console.log(product.dataset.price);
```

The result is:

```text
"500"
```

It is a string, not a number.

If you need a number:

```js
const price = Number(product.dataset.price);

console.log(price);
```

Now the value is:

```text
500
```

as a JavaScript number.

### `data-*` Is Not Application State

`data-*` attributes are useful for small pieces of element-specific information.

They should not be treated as a replacement for:

```text
Application state
Database
Large JSON objects
Complex application logic
```

For example, in React, you would normally use state, props, context, or an appropriate state-management solution for application state.

### Interview Answer

> `data-*` attributes are custom HTML attributes used to store additional data on HTML elements. They can be accessed in JavaScript through the element's `dataset` property. For example, `data-user-id` can be accessed as `element.dataset.userId`. The values returned through `dataset` are strings.

### Remember

```text
data-*
→ Custom data attached to an HTML element
```

Example:

```html
<button data-user-id="123">
  User
</button>
```

JavaScript:

```js
button.dataset.userId;
```

Result:

```text
"123"
```

---

# Final Memory Sheet

```text
draggable
→ Drag

spellcheck
→ Spelling

translate
→ Translation

tabindex
→ Keyboard focus / Tab order

accesskey
→ Keyboard shortcut

contenteditable
→ Edit content

data-*
→ Custom data
```

## Super Simple Memory Trick

```text
Drag → draggable
Spell → spellcheck
Translate → translate
Tab → tabindex
Access → accesskey
Edit → contenteditable
Data → data-*
```

> These are mostly **HTML global attributes**. Learn what problem each one solves rather than memorizing the specification like a human printer. In an interview, understanding the behavior and knowing one practical example is far more valuable than reciting definitions.

# HTML Attributes

## 38. What are Boolean Attributes?

Boolean attributes are HTML attributes that represent a `true` or `false` state.

The important rule is:

> **If a boolean attribute is present, it is considered true. If it is absent, it is considered false.**

### Example

```html
<input type="checkbox" disabled>
```

Because `disabled` is present, the input is disabled.

If we remove it:

```html
<input type="checkbox">
```

The input is not disabled.

### Common Boolean Attributes

Some common boolean attributes are:

```text
disabled
checked
required
readonly
multiple
autofocus
selected
hidden
controls
autoplay
loop
muted
```

### Important: The Value Is Not the Main Point

For boolean attributes, presence is what matters.

For example:

```html
<input disabled>
```

is disabled.

You may also see:

```html
<input disabled="disabled">
```

or:

```html
<input disabled="">
```

But this does not mean false.

Even:

```html
<input disabled="false">
```

still means the attribute is present, so the element is disabled.

This is a common interview trap.

### Example

```html
<input disabled="false">
```

The input is still disabled.

Why?

Because:

```text
Attribute present
→ true
```

not:

```text
disabled="false"
→ false
```

### Correct Way to Make It False

Remove the attribute:

```html
<input>
```

### Interview Answer

> Boolean attributes represent a true or false state. When the attribute is present, it is considered true, and when it is absent, it is considered false. The string value `"false"` does not make a boolean HTML attribute false.

### Remember

```text
Present
→ true

Absent
→ false
```

---

# 39. What are Custom Attributes?

Custom attributes are attributes created by developers to store additional information on HTML elements.

However, in modern HTML, you should generally use `data-*` attributes for custom data.

### Recommended Approach

```html
<button data-user-id="123">
  View User
</button>
```

Here:

```text
data-user-id
```

is a custom data attribute.

JavaScript can access it through:

```js
const button = document.querySelector("button");

console.log(button.dataset.userId);
```

Result:

```text
123
```

### What About Inventing Your Own Attribute?

You might see something like:

```html
<button user-id="123">
  View User
</button>
```

This is not the recommended way to store custom application data in HTML.

Instead, use:

```html
<button data-user-id="123">
  View User
</button>
```

### Why Use `data-*`?

Because `data-*` attributes are specifically designed for custom data.

They:

```text
Follow HTML standards
Can store custom element-specific data
Can be accessed through dataset
Are easy for JavaScript to read
```

### Important Distinction

There is a difference between:

```text
Custom data
```

and:

```text
Custom behavior
```

For custom data:

```html
<div data-user-id="123"></div>
```

For custom elements and components, Web Components provide mechanisms such as:

```html
<my-component></my-component>
```

Do not randomly invent attributes when a standard HTML attribute or `data-*` attribute already exists.

### Interview Answer

> Custom attributes are developer-defined attributes used to store additional information. For custom data in HTML, the recommended approach is to use `data-*` attributes, which can be accessed through JavaScript's `dataset` property.

### Remember

```text
Custom data
→ data-*

Example:
data-user-id
data-product-id
data-role
```

---

# 40. What is Attribute Inheritance?

HTML attributes generally do **not automatically inherit from parent elements**.

This is different from CSS inheritance.

For example:

```html
<div class="parent">
  <p>Child</p>
</div>
```

Having an attribute on the parent:

```html
<div class="parent" title="Parent title">
  <p>Child</p>
</div>
```

does not mean that the `<p>` automatically receives the `title` attribute.

The child does not have:

```html
<p title="Parent title">
```

automatically.

### HTML Attributes vs CSS Properties

This distinction is extremely important.

CSS can inherit certain properties:

```css
body {
  color: blue;
}
```

A child may inherit the `color`.

But HTML attributes generally do not work this way.

```html
<div lang="en">
  <p>Hello</p>
</div>
```

The `lang` behavior has special document-language semantics, but this should not be confused with ordinary HTML attribute inheritance.

### Some Attributes Affect Descendants

Some HTML attributes can affect the behavior or semantics of descendants even though they are not simply copied onto the children.

For example:

```html
<div lang="fr">
  <p>Bonjour</p>
</div>
```

The language context can apply to descendant content.

Similarly:

```html
<div hidden>
  <p>This is hidden.</p>
</div>
```

The child is hidden because of the parent's rendering state, not because the `hidden` attribute was copied onto the child.

### Important Concept

Think:

```text
HTML attribute inheritance
≠
CSS property inheritance
```

HTML has certain attributes and mechanisms that establish inherited context or affect descendants, but ordinary HTML attributes are not automatically copied from parent to child.

### Interview Answer

> HTML attributes generally do not automatically inherit from parent elements. This is different from CSS, where certain CSS properties are inherited. Some HTML attributes can establish context or affect descendants, but that does not mean the attribute is copied onto each child.

### Remember

```text
CSS
→ Some properties inherit

HTML attributes
→ Generally do not automatically inherit
```

---

# 41. What is the difference between Required and Optional Attributes?

Some HTML attributes are required for a particular element or feature to work correctly, while others are optional.

### Required Attribute

A required attribute is necessary in a particular context.

For example, an `<img>` element should have meaningful alternative text through the `alt` attribute for accessibility.

```html
<img src="cat.jpg" alt="A cat sitting on a chair">
```

For an image that is purely decorative, an empty `alt` is appropriate:

```html
<img src="decoration.png" alt="">
```

The `alt` attribute should not simply be omitted when an image conveys meaningful information.

### Optional Attribute

An optional attribute provides additional information or changes behavior but is not always required.

Example:

```html
<input type="text">
```

You can optionally add:

```html
<input type="text" placeholder="Enter your name">
```

The `placeholder` attribute is useful, but the input can still function without it.

### Another Example

```html
<a href="/about">
  About
</a>
```

The `href` is essential if you want the `<a>` element to behave as a normal link.

But an optional attribute could be:

```html
<a href="/about" target="_blank">
  About
</a>
```

The link works without `target`.

### Important

Whether an attribute is required depends on:

```text
The HTML element
The specific use case
Accessibility requirements
The behavior you need
```

Do not assume every attribute is universally required or optional.

### Interview Answer

> A required attribute is necessary for a particular element or use case to provide correct behavior, semantics, or accessibility. An optional attribute provides additional information or functionality but is not always necessary.

### Remember

```text
Required
→ Needed for the intended behavior or meaning

Optional
→ Adds extra behavior or information
```

---

# 42. Does Attribute Order Matter in HTML?

In normal HTML, the order of attributes does **not generally affect the meaning or behavior** of the element.

For example:

```html
<input type="text" id="username" class="input">
```

and:

```html
<input class="input" id="username" type="text">
```

have the same meaning.

### Why?

HTML attributes are associated with the element by their names.

The browser does not normally care whether:

```text
type
id
class
```

comes first or last.

### Important Exception: Duplicate Attributes

You should not write duplicate attributes with the same name.

Bad:

```html
<input class="input" class="large">
```

Do not rely on attribute order to decide which duplicate value should win.

Instead, combine the values when appropriate:

```html
<input class="input large">
```

### Why Consistent Attribute Order Is Still Useful

Even though order generally does not affect browser behavior, teams often establish a consistent ordering convention.

For example:

```html
<button
  id="submitButton"
  class="btn btn-primary"
  type="submit"
  disabled>
  Submit
</button>
```

This helps with:

```text
Readability
Code reviews
Consistency
Maintenance
```

### Interview Answer

> Attribute order generally does not affect HTML behavior. However, developers should use a consistent ordering convention for readability and should avoid duplicate attributes.

### Remember

```text
Attribute order
→ Usually doesn't matter

Consistent order
→ Helps humans
```

---

# 43. What are Inline Styles?

Inline styles are CSS declarations written directly inside an HTML element's `style` attribute.

### Example

```html
<p style="color: red; font-size: 20px;">
  Hello
</p>
```

Here:

```text
style="..."
```

contains CSS directly on the element.

### Multiple Properties

You can specify multiple CSS properties:

```html
<div style="color: blue; background-color: yellow; padding: 20px;">
  Hello
</div>
```

### Advantages

Inline styles can be useful when:

```text
A style is very specific to one element
Styles are generated dynamically
A framework or library intentionally uses inline styles
You need a quick small style
```

### Disadvantages

Using too many inline styles can make a project difficult to maintain.

For example:

```html
<div style="color: red; padding: 20px; margin: 10px; font-size: 18px;">
  Content
</div>

<div style="color: red; padding: 20px; margin: 10px; font-size: 18px;">
  Another content
</div>
```

The styling becomes repetitive.

A stylesheet is usually cleaner:

```css
.card {
  color: red;
  padding: 20px;
  margin: 10px;
  font-size: 18px;
}
```

Then:

```html
<div class="card">
  Content
</div>
```

### Important

Inline styles participate in the CSS cascade and have high author-level priority, but they are not automatically unbeatable.

For example:

```css
p {
  color: blue !important;
}
```

can override an inline normal declaration:

```html
<p style="color: red;">
  Hello
</p>
```

`!important` changes the cascade rules.

### Interview Answer

> Inline styles are CSS declarations written directly inside an HTML element's `style` attribute. They can be useful for element-specific or dynamically generated styles, but large applications generally prefer maintainable styling systems such as stylesheets, CSS modules, or other structured approaches.

### Remember

```text
Inline style
→ CSS inside style="..."

Example:
<p style="color: red;">
```

---

# 44. What are HTML Attribute Best Practices?

When using HTML attributes, follow a few important practices.

## 1. Prefer Semantic HTML

Use the correct HTML element instead of trying to recreate its behavior with attributes.

Prefer:

```html
<button>Save</button>
```

instead of:

```html
<div role="button">
  Save
</div>
```

A real `<button>` already provides keyboard behavior, semantics, and accessibility support.

### Remember

```text
Correct HTML element
→ Usually better than
Custom behavior on the wrong element
```

---

## 2. Use Standard Attributes

If HTML already provides an appropriate attribute, use it.

For example:

```html
<input required>
```

instead of inventing:

```html
<input must-fill="yes">
```

---

## 3. Use `data-*` for Custom Data

If you need custom data:

```html
<button data-product-id="123">
  Buy
</button>
```

Do not randomly invent custom attributes for ordinary application data.

---

## 4. Use Meaningful `alt` Text

For informative images:

```html
<img src="dog.jpg" alt="Golden retriever sitting in a garden">
```

For decorative images:

```html
<img src="decoration.png" alt="">
```

Do not use meaningless text such as:

```html
<img src="dog.jpg" alt="image">
```

if the image actually conveys useful information.

---

## 5. Avoid Unnecessary Attributes

Do not add attributes just because they exist.

Bad:

```html
<button
  tabindex="0"
  draggable="false"
  spellcheck="false"
  translate="yes">
  Submit
</button>
```

If none of those attributes are necessary, they only add noise.

Prefer:

```html
<button type="submit">
  Submit
</button>
```

---

## 6. Use Boolean Attributes Correctly

For boolean attributes:

```html
<input disabled>
```

Do not assume:

```html
<input disabled="false">
```

means false.

The presence of the attribute means true.

---

## 7. Consider Accessibility

Use attributes that improve accessibility when appropriate.

For example:

```html
<input
  id="email"
  type="email"
  aria-label="Email address">
```

But do not add ARIA attributes unnecessarily.

A good rule is:

```text
Use native HTML semantics first.
Use ARIA when necessary.
```

---

## 8. Keep HTML Readable

For an element with many attributes, formatting them clearly can improve readability:

```html
<button
  id="submit"
  class="btn btn-primary"
  type="submit"
  disabled>
  Submit
</button>
```

---

## 9. Do Not Put Sensitive Information in Attributes

Avoid putting sensitive information into HTML attributes because users can inspect the page.

Bad:

```html
<div data-password="secret123">
```

HTML is visible to the client.

Do not treat attributes as a secure storage mechanism.

### Interview Answer

> HTML attributes should be used semantically and only when necessary. Developers should prefer standard HTML attributes, use `data-*` for custom data, follow accessibility best practices, avoid unnecessary attributes, use boolean attributes correctly, and never store sensitive information in client-side HTML.

### Remember

```text
Use standard attributes
→ Prefer semantic HTML
→ Use data-* for custom data
→ Consider accessibility
→ Avoid unnecessary attributes
→ Don't store secrets
```

---

# 45. What is Attribute Validation?

Attribute validation means checking whether HTML attributes are valid according to HTML standards and whether they are used correctly.

Browsers are generally forgiving, but valid HTML is still important.

### Example of a Valid Attribute

```html
<input
  type="email"
  id="email"
  name="email"
  required>
```

These are standard HTML attributes for an input.

### Example of a Custom Data Attribute

```html
<div data-user-id="123">
  User
</div>
```

This follows the valid `data-*` convention.

### Why Validate HTML?

Validation can help identify:

```text
Invalid attributes
Misspelled attributes
Incorrect attribute usage
Invalid HTML structure
Accessibility problems
Potential compatibility issues
```

### Example of a Misspelled Attribute

Suppose you write:

```html
<input requried>
```

The correct attribute is:

```html
<input required>
```

The browser may not give you an obvious error on the page, but the intended behavior will not work correctly.

This is why validation and testing matter.

### HTML Validators

You can use an HTML validator such as the W3C Markup Validation Service to check your HTML.

The validator can identify problems such as invalid markup and attributes.

### Browser Developer Tools

Browser DevTools can also help you inspect:

```text
Elements
Attributes
Computed styles
DOM structure
Accessibility information
```

But DevTools is not a replacement for understanding HTML standards.

### Attribute Validation vs Form Validation

Do not confuse these two concepts.

#### Attribute/HTML Validation

Checks whether your HTML markup follows the rules of HTML.

Example:

```html
<input requried>
```

The problem is the invalid/misspelled attribute.

#### Form Validation

Checks whether user input satisfies requirements.

Example:

```html
<input
  type="email"
  required>
```

The browser can validate whether the user entered a value and whether it looks like a valid email address.

So:

```text
HTML validation
→ Is my markup valid?

Form validation
→ Is the user's input valid?
```

### Interview Answer

> Attribute validation means checking that HTML attributes are valid, correctly spelled, and used according to HTML standards and the intended semantics. HTML validators and browser developer tools can help identify invalid markup. This should not be confused with form validation, which checks user input.

### Remember

```text
Attribute validation
→ Check the HTML

Form validation
→ Check the user's input
```

---

# Final Revision Sheet

## Boolean Attributes

```text
Present → true
Absent  → false

Example:
disabled
checked
required
readonly
```

## Custom Attributes

```text
Custom data
→ Use data-*

Example:
data-user-id="123"
```

## Attribute Inheritance

```text
HTML attributes
→ Generally do not automatically inherit

CSS properties
→ Some properties inherit
```

## Required vs Optional

```text
Required
→ Needed for a particular purpose/context

Optional
→ Adds additional behavior/information
```

## Attribute Order

```text
Order generally doesn't matter
→ Consistent ordering improves readability
→ Avoid duplicate attributes
```

## Inline Styles

```text
style="..."
→ CSS directly on the HTML element
```

## Attribute Best Practices

```text
Use semantic HTML
→ Use standard attributes
→ Use data-* for custom data
→ Consider accessibility
→ Avoid unnecessary attributes
→ Never store secrets
```

## Attribute Validation

```text
Check whether HTML attributes are
valid, correctly spelled, and correctly used.
```

# Master Memory Trick

```text
Boolean
→ Present or absent

Custom
→ data-*

Inheritance
→ HTML attributes generally don't copy down

Required
→ Needed

Optional
→ Extra

Order
→ Usually doesn't matter

Inline
→ CSS inside style=""

Best practices
→ Semantic + accessible + clean

Validation
→ Check the HTML
```
# Semantic HTML (30)
# Semantic HTML

## 46. What is Semantic HTML?

Semantic HTML means using HTML elements according to their **meaning and purpose**, instead of choosing elements only based on how they look.

For example:

```html
<header>
  <h1>My Website</h1>
</header>

<main>
  <article>
    <h2>My Blog Post</h2>
    <p>This is my article.</p>
  </article>
</main>

<footer>
  <p>Copyright 2026</p>
</footer>
```

Each element tells the browser and developers what that part of the page represents.

Compare this with:

```html
<div class="header">
  <div class="title">My Website</div>
</div>

<div class="main">
  <div class="article">
    <div class="heading">My Blog Post</div>
    <p>This is my article.</p>
  </div>
</div>

<div class="footer">
  <p>Copyright 2026</p>
</div>
```

The second example may look the same visually, but it provides much less semantic meaning.

### Common Semantic Elements

```text
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
<figure>
<figcaption>
<time>
```

### Semantic vs Non-Semantic Elements

Semantic:

```html
<article>
  Blog post
</article>
```

Non-semantic:

```html
<div>
  Blog post
</div>
```

The `<article>` element tells us what the content represents.

The `<div>` simply says:

> "Here is a generic container."

Humanity has apparently decided that naming things properly is useful after all.

### Interview Answer

> Semantic HTML means using HTML elements that clearly describe the meaning and purpose of their content. Examples include `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`. Semantic HTML improves accessibility, SEO, maintainability, and code readability.

### Remember

```text
Semantic HTML
→ Meaning + Structure

<div>
→ Generic container

<article>
→ Independent article/content

<header>
→ Introductory/header content

<footer>
→ Footer information
```

---

# 47. Why should we use Semantic HTML?

Semantic HTML is important for several reasons.

## 1. Accessibility

Semantic elements help assistive technologies such as screen readers understand the structure of a webpage.

For example:

```html
<main>
  <h1>Products</h1>
</main>
```

A screen reader can understand that this is the main content of the page.

Compare:

```html
<div class="main">
  <div class="title">Products</div>
</div>
```

The browser does not get the same semantic information.

### Remember

```text
Semantic HTML
→ Better information for assistive technologies
```

---

## 2. SEO

Search engines can better understand the structure and meaning of your content when semantic elements are used correctly.

For example:

```html
<article>
  <h1>How CSS Grid Works</h1>
  <p>...</p>
</article>
```

This gives the document a meaningful structure.

### Important

Semantic HTML alone does not magically make a website rank higher.

SEO depends on many factors.

But semantic, well-structured HTML makes your content easier for machines to understand.

---

## 3. Readability

Compare:

```html
<div class="header">
  ...
</div>

<div class="main">
  ...
</div>

<div class="footer">
  ...
</div>
```

with:

```html
<header>
  ...
</header>

<main>
  ...
</main>

<footer>
  ...
</footer>
```

The second version is much easier to understand.

You can immediately see the structure.

---

## 4. Maintainability

Semantic HTML makes large applications easier for developers to understand and maintain.

For example:

```html
<main>
  <section>
    <article>
      ...
    </article>
  </section>
</main>
```

The structure itself communicates the purpose of each part.

---

## 5. Better Default Browser Behavior

Some semantic elements have built-in browser semantics and behavior.

For example:

```html
<button>Submit</button>
```

is preferable to:

```html
<div role="button">
  Submit
</div>
```

A real `<button>` already provides important keyboard and accessibility behavior.

### Important Rule

> Prefer native HTML elements before recreating their behavior with `<div>` and ARIA.

### Interview Answer

> Semantic HTML improves accessibility, SEO, readability, and maintainability by giving content meaningful structure. It also allows browsers and assistive technologies to understand the purpose of different parts of a webpage.

### Remember

```text
Semantic HTML
→ Accessibility
→ SEO
→ Readability
→ Maintainability
→ Better document structure
```

---

# 48. What is the `<header>` element?

The `<header>` element represents **introductory content or navigational content** for a page or a section.

Example:

```html
<header>
  <h1>My Website</h1>

  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
```

A header commonly contains:

```text
Logo
Heading
Navigation
Introductory content
Search
Author information
```

### Important

A `<header>` does not necessarily mean:

> "The top of the entire webpage."

It can also belong to a particular section or article.

Example:

```html
<article>
  <header>
    <h2>Understanding JavaScript Closures</h2>
    <p>Published on August 12, 2026</p>
  </header>

  <p>Article content...</p>
</article>
```

Here the `<header>` belongs to the `<article>`.

### Can There Be Multiple `<header>` Elements?

Yes.

For example:

```html
<body>

  <header>
    <h1>My Website</h1>
  </header>

  <main>

    <article>
      <header>
        <h2>First Article</h2>
      </header>

      <p>Article content...</p>
    </article>

  </main>

</body>
```

There is a page-level header and an article-level header.

### Important Restriction

A `<header>` should not be placed inside:

```text
<header>
<footer>
```

### `header` vs `div`

Instead of:

```html
<div class="header">
  ...
</div>
```

use:

```html
<header>
  ...
</header>
```

when the content represents introductory or navigational content.

### Interview Answer

> The `<header>` element represents introductory or navigational content for a page or a section. It commonly contains headings, logos, navigation, search, or introductory information. A page can have multiple headers because a header can belong to different sections or articles.

### Remember

```text
<header>
→ Introductory content
→ Navigation
→ Heading
→ Logo
→ Can belong to page or section
```

---

# 49. What is the `<footer>` element?

The `<footer>` element represents **footer information for its nearest sectioning context or the page**.

A footer commonly contains:

```text
Copyright information
Author information
Contact information
Related links
Privacy links
Terms links
Navigation
```

### Example

```html
<footer>
  <p>© 2026 My Website</p>

  <a href="/privacy">Privacy Policy</a>
  <a href="/terms">Terms</a>
</footer>
```

### Footer Can Belong to an Article

A footer does not necessarily mean the bottom of the entire webpage.

Example:

```html
<article>

  <header>
    <h2>My Blog Post</h2>
  </header>

  <p>Article content...</p>

  <footer>
    <p>Written by Utpanna</p>
  </footer>

</article>
```

Here the footer belongs to the article.

### Page Footer

You can also have a page-level footer:

```html
<body>

  <header>
    <h1>My Website</h1>
  </header>

  <main>
    <p>Main content...</p>
  </main>

  <footer>
    <p>© 2026 My Website</p>
  </footer>

</body>
```

### Important

A `<footer>` does not automatically mean:

```text
position: fixed
```

or:

```text
bottom of screen
```

It is a semantic element, not a CSS positioning instruction.

This is a common misunderstanding.

You would need CSS if you want a footer visually positioned somewhere specific.

### Interview Answer

> The `<footer>` element represents footer information for a page or section. It can contain copyright information, author details, related links, contact information, or navigation. A footer can belong to the whole page or to an individual article or section.

### Remember

```text
<footer>
→ Footer information
→ Copyright
→ Author information
→ Related links
→ Can belong to page or section
```

---

# 50. What is the `<main>` element?

The `<main>` element represents the **main content of the document**.

It should contain the content that is directly related to the primary purpose of the page.

Example:

```html
<body>

  <header>
    <h1>My Website</h1>
  </header>

  <main>
    <h2>Products</h2>

    <p>
      Browse our latest products.
    </p>
  </main>

  <footer>
    <p>© 2026 My Website</p>
  </footer>

</body>
```

The `<main>` contains the primary content.

### What Usually Goes Outside `<main>`?

Common page-level elements include:

```html
<header>
<nav>
<main>
<footer>
```

For example:

```html
<header>
  <h1>My Store</h1>
</header>

<nav>
  <a href="/">Home</a>
  <a href="/products">Products</a>
</nav>

<main>
  <h2>Products</h2>
  ...
</main>

<footer>
  ...
</footer>
```

### Can There Be Multiple `<main>` Elements?

A document should generally have **one active `<main>` element** representing the primary content.

You should not create multiple visible `<main>` elements for different sections of the same page.

### What Should Not Usually Be Inside `<main>`?

Content that is repeated across multiple pages, such as:

```text
Global navigation
Site-wide header
Site-wide footer
```

normally belongs outside `<main>`.

### Why Is `<main>` Important?

It provides an important landmark for accessibility.

Screen-reader users can use landmarks to quickly navigate to the main content.

### `main` vs `div`

Instead of:

```html
<div class="main">
  ...
</div>
```

prefer:

```html
<main>
  ...
</main>
```

when the content is the primary content of the page.

### Interview Answer

> The `<main>` element represents the primary content of a document. It should contain content that is directly related to the main purpose of the page and provides an important accessibility landmark. A document should generally have one main element representing its active primary content.

### Remember

```text
<main>
→ Primary content of the page
→ Important accessibility landmark
→ Usually one per document
```

---

# 51. What is the `<section>` element?

The `<section>` element represents a **thematic grouping of content**, usually with a heading.

Think of it as a meaningful section of a page.

Example:

```html
<main>

  <section>
    <h2>Our Services</h2>

    <p>
      We provide web development services.
    </p>
  </section>

  <section>
    <h2>Our Team</h2>

    <p>
      Meet our team members.
    </p>
  </section>

</main>
```

The page has two thematic sections:

```text
Our Services
Our Team
```

### A Section Usually Has a Heading

A good example:

```html
<section>
  <h2>Testimonials</h2>

  <p>
    Our customers love our service.
  </p>
</section>
```

The heading explains what the section is about.

### `section` vs `div`

This is an important interview question.

Use:

```html
<section>
```

when the content represents a meaningful thematic section.

Use:

```html
<div>
```

when you simply need a generic container for styling or layout.

Example:

```html
<section>
  <h2>Pricing</h2>

  <div class="pricing-grid">
    ...
  </div>
</section>
```

Here:

```text
<section>
→ Meaningful content grouping

<div>
→ Generic layout container
```

### `section` vs `article`

A `<section>` groups related content.

An `<article>` represents content that can generally stand on its own.

Example:

```html
<section>
  <h2>Latest Articles</h2>

  <article>
    <h3>Understanding CSS Grid</h3>
    <p>...</p>
  </article>

  <article>
    <h3>Understanding Flexbox</h3>
    <p>...</p>
  </article>
</section>
```

Think:

```text
section
→ Related group

article
→ Independent piece of content
```

### Can Sections Be Nested?

Yes.

Example:

```html
<section>
  <h2>Services</h2>

  <section>
    <h3>Web Development</h3>
    <p>...</p>
  </section>

  <section>
    <h3>App Development</h3>
    <p>...</p>
  </section>
</section>
```

However, nesting should make semantic sense.

Do not use `<section>` simply because you want extra spacing or a wrapper.

### Interview Answer

> The `<section>` element represents a thematic grouping of related content, usually identified by a heading. It should be used when the content forms a meaningful section of the document. A generic `<div>` is more appropriate when the element is only needed for styling or layout.

### Remember

```text
<section>
→ Thematic group of related content
→ Usually has a heading
→ Meaningful structure
```

---

# Final Memory Comparison

```text
<header>
→ Introductory or navigational content

<footer>
→ Footer information

<main>
→ Primary content of the page

<section>
→ Thematic grouping of related content

<article>
→ Independent/self-contained content
```

## Easy Mental Model

Imagine a blog website:

```html
<body>

  <header>
    Logo + Navigation
  </header>

  <main>

    <section>
      <h2>Latest Articles</h2>

      <article>
        <h3>CSS Grid</h3>
        <p>Article content...</p>
      </article>

      <article>
        <h3>Flexbox</h3>
        <p>Article content...</p>
      </article>

    </section>

  </main>

  <footer>
    Copyright + Links
  </footer>

</body>
```

Think:

```text
HEADER
→ "Here is the introduction/navigation."

MAIN
→ "Here is the primary content."

SECTION
→ "Here is a meaningful group of related content."

ARTICLE
→ "Here is one independent piece of content."

FOOTER
→ "Here is information related to this page/section."
```

## Most Important Interview Difference

```text
div
→ Generic container

section
→ Meaningful thematic section

article
→ Self-contained/independent content

main
→ Primary page content
```

## One-Line Memory Trick

```text
HEADER  → Start / Intro
MAIN    → Main content
SECTION → Group
ARTICLE → Independent content
FOOTER  → End / Related info
```
# Semantic HTML

## 52. What is the `<aside>` element?

The `<aside>` element represents content that is **indirectly related to the main content**.

It is commonly used for:

```text
Sidebars
Related articles
Related links
Advertisements
Author information
Additional information
```

### Example

```html
<main>
  <article>
    <h1>How CSS Works</h1>

    <p>
      CSS is used to style HTML documents.
    </p>
  </article>

  <aside>
    <h2>Related Articles</h2>

    <ul>
      <li><a href="/flexbox">Learn Flexbox</a></li>
      <li><a href="/grid">Learn CSS Grid</a></li>
    </ul>
  </aside>
</main>
```

The `<aside>` content is related to the article but is not the main article itself.

### Important

`<aside>` does not necessarily mean:

```text
"Content on the right side"
```

It is about **meaning**, not physical position.

You can place an `<aside>` on the left, right, top, or even below the main content using CSS.

### `<aside>` vs `<section>`

A `<section>` represents a thematic grouping of content.

An `<aside>` represents content that is related but **separate from the main flow**.

```text
<section>
→ Main thematic content

<aside>
→ Related/supporting content
```

### Interview Answer

> The `<aside>` element represents content that is indirectly related to the main content, such as sidebars, related links, advertisements, or additional information. Its position on the screen is controlled by CSS.

### Remember

```text
<aside>
→ Related but secondary content
→ Sidebar is a common use
→ Position does not matter
```

---

## 53. What is the `<nav>` element?

The `<nav>` element represents a section of a page containing **navigation links**.

Example:

```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/services">Services</a>
  <a href="/contact">Contact</a>
</nav>
```

It tells browsers and assistive technologies:

> "These links are used for navigation."

### Navigation Can Be Different Things

For example, a website's main navigation:

```html
<nav>
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/contact">Contact</a>
</nav>
```

Pagination:

```html
<nav aria-label="Pagination">
  <a href="?page=1">1</a>
  <a href="?page=2">2</a>
  <a href="?page=3">3</a>
</nav>
```

Table of contents:

```html
<nav aria-label="Table of contents">
  <a href="#intro">Introduction</a>
  <a href="#css">CSS</a>
  <a href="#summary">Summary</a>
</nav>
```

### Should Every Group of Links Use `<nav>`?

No.

This is a common mistake.

For example:

```html
<footer>
  <a href="/privacy">Privacy</a>
  <a href="/terms">Terms</a>
</footer>
```

These are links, but they do not necessarily need to be wrapped in `<nav>`.

Use `<nav>` when the links form an important navigation section.

### `<nav>` vs `<div>`

Instead of:

```html
<div class="navigation">
  <a href="/">Home</a>
  <a href="/about">About</a>
</div>
```

use:

```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

when the links represent navigation.

### Interview Answer

> The `<nav>` element represents a section of a webpage containing important navigation links. It provides semantic meaning and helps assistive technologies identify navigation landmarks.

### Remember

```text
<nav>
→ Important navigation links
```

---

## 54. What is the `<figure>` element?

The `<figure>` element represents **self-contained content**, often an image, diagram, chart, code example, or illustration.

Example:

```html
<figure>
  <img
    src="architecture.png"
    alt="System architecture diagram">
</figure>
```

The content inside `<figure>` is related to the surrounding content but can be treated as a separate unit.

### Figure With a Caption

A very common pattern is:

```html
<figure>
  <img
    src="architecture.png"
    alt="System architecture diagram">

  <figcaption>
    High-level system architecture.
  </figcaption>
</figure>
```

### Figure Is Not Only for Images

It can contain:

```text
Images
Diagrams
Charts
Illustrations
Code examples
Quotes
Other self-contained content
```

Example:

```html
<figure>
  <pre><code>
const total = price * quantity;
  </code></pre>

  <figcaption>
    Example calculation in JavaScript.
  </figcaption>
</figure>
```

### `<figure>` vs `<img>`

An `<img>` represents an image.

A `<figure>` represents a **self-contained piece of content**, which can contain an image and optionally a caption.

```text
<img>
→ Image

<figure>
→ Self-contained content
```

### Interview Answer

> The `<figure>` element represents self-contained content such as an image, diagram, chart, illustration, or code example. It is commonly used together with `<figcaption>` when the content needs a caption.

### Remember

```text
<figure>
→ Self-contained content
→ Often contains an image, chart, diagram, or code
```

---

## 55. What is the `<figcaption>` element?

The `<figcaption>` element provides a **caption or description for the content inside a `<figure>`**.

Example:

```html
<figure>
  <img
    src="mountain.jpg"
    alt="Snow-covered mountain">

  <figcaption>
    A snow-covered mountain during winter.
  </figcaption>
</figure>
```

The `<figcaption>` explains or labels the figure.

### Where Can `<figcaption>` Appear?

It should be inside a `<figure>`.

It can appear before or after the main figure content.

Example:

```html
<figure>

  <figcaption>
    System architecture diagram
  </figcaption>

  <img
    src="architecture.png"
    alt="System architecture">
</figure>
```

Or:

```html
<figure>

  <img
    src="architecture.png"
    alt="System architecture">

  <figcaption>
    System architecture diagram
  </figcaption>

</figure>
```

Both are valid.

### `<figcaption>` vs `alt`

This is an important interview distinction.

`alt` provides alternative text for an image:

```html
<img
  src="cat.jpg"
  alt="A cat sitting on a chair">
```

`figcaption` provides a visible caption for the figure:

```html
<figure>

  <img
    src="cat.jpg"
    alt="A cat sitting on a chair">

  <figcaption>
    Milo sitting on his favorite chair.
  </figcaption>

</figure>
```

They serve different purposes.

```text
alt
→ Alternative text for the image

figcaption
→ Caption for the figure
```

### Interview Answer

> The `<figcaption>` element provides a caption or description for content inside a `<figure>`. It is commonly used to label images, diagrams, charts, or other self-contained content.

### Remember

```text
<figure>
→ Content

<figcaption>
→ Caption for that content
```

---

## 56. What is the `<address>` element?

The `<address>` element represents **contact information for the nearest article or body element**.

Example:

```html
<address>
  Written by Utpanna Pradhan<br>
  Email:
  <a href="mailto:hello@example.com">
    hello@example.com
  </a>
</address>
```

It can contain information such as:

```text
Author contact information
Website information
Email address
Social media links
Business contact information
```

### Article Example

```html
<article>

  <h1>Understanding CSS</h1>

  <p>
    CSS controls the presentation of HTML documents.
  </p>

  <address>
    Written by Utpanna Pradhan
    <a href="mailto:hello@example.com">
      Contact author
    </a>
  </address>

</article>
```

Here, the `<address>` provides contact information for the article's author.

### Important Misunderstanding

`<address>` does **not simply mean "physical address."**

This is valid:

```html
<address>
  Email:
  <a href="mailto:hello@example.com">
    hello@example.com
  </a>
</address>
```

A physical address can also be included when it is contact information:

```html
<address>
  WebNest<br>
  Patamundai, Odisha, India
</address>
```

### `<address>` vs `<p>`

You could write contact information inside a `<p>`:

```html
<p>
  Contact: hello@example.com
</p>
```

But when the content specifically represents contact information for the relevant page or article, `<address>` provides more semantic meaning.

### Interview Answer

> The `<address>` element represents contact information for the nearest article or the document as a whole. It can contain author or business contact information such as email addresses, links, and physical contact details.

### Remember

```text
<address>
→ Contact information
→ Not only physical addresses
```

---

## 57. What is the `<details>` element?

The `<details>` element creates a **disclosure widget** that the user can open and close.

Example:

```html
<details>
  <summary>
    What is CSS?
  </summary>

  <p>
    CSS is used to style HTML documents.
  </p>
</details>
```

Initially, the content is hidden.

The user can click the `<summary>` to open it.

### Open by Default

You can add the `open` attribute:

```html
<details open>
  <summary>
    What is CSS?
  </summary>

  <p>
    CSS is used to style HTML documents.
  </p>
</details>
```

Now the content starts open.

### Common Uses

`<details>` is useful for:

```text
FAQs
Additional information
Settings
Explanations
Expandable sections
Disclosure widgets
```

Example FAQ:

```html
<details>
  <summary>
    What is JavaScript?
  </summary>

  <p>
    JavaScript is a programming language commonly used to
    add behavior and interactivity to web pages.
  </p>
</details>
```

### Important

`<details>` provides native browser behavior.

You do not need JavaScript just to implement the basic open/close functionality.

You can style it using CSS.

### `open` Attribute

`open` is a boolean attribute.

```html
<details open>
```

means:

```text
Open by default
```

Without it:

```html
<details>
```

means:

```text
Closed by default
```

### Interview Answer

> The `<details>` element creates a native disclosure widget whose content can be expanded or collapsed by the user. It is commonly used for FAQs and expandable information. The `open` attribute makes it expanded by default.

### Remember

```text
<details>
→ Expandable/collapsible content

open
→ Open by default
```

---

## 58. What is the `<summary>` element?

The `<summary>` element provides the **visible label or heading for a `<details>` element**.

Example:

```html
<details>
  <summary>
    What is HTML?
  </summary>

  <p>
    HTML provides the structure of a webpage.
  </p>
</details>
```

The user clicks:

```text
What is HTML?
```

to open or close the content.

### Relationship Between `<details>` and `<summary>`

Think of them as a pair:

```text
<details>
→ Container for expandable content

<summary>
→ Clickable label that controls it
```

### Example

```html
<details>
  <summary>Shipping Information</summary>

  <p>
    Orders are usually delivered within 3-5 business days.
  </p>
</details>
```

### Important

`<summary>` is designed to be used as the first child of `<details>`.

Good:

```html
<details>
  <summary>More information</summary>

  <p>Additional information.</p>
</details>
```

### Can You Use `<summary>` Without `<details>`?

You should not use `<summary>` as a general-purpose heading or button.

Its semantic purpose is tied to `<details>`.

If you need a heading:

```html
<h2>More Information</h2>
```

If you need a button:

```html
<button>Open</button>
```

Use the element that matches the actual purpose. HTML already gives us several perfectly good tools, so there is little reason to make one element pretend to be another.

### Interview Answer

> The `<summary>` element provides the visible label for a `<details>` disclosure widget. It is the part the user interacts with to expand or collapse the details content.

### Remember

```text
<details>
→ Expandable container

<summary>
→ Clickable label
```

---

# Final Comparison

```text
<aside>
→ Related / secondary content

<nav>
→ Navigation links

<figure>
→ Self-contained content

<figcaption>
→ Caption for a figure

<address>
→ Contact information

<details>
→ Expandable/collapsible content

<summary>
→ Label that controls <details>
```

# Easy Memory Trick

```text
ASIDE
→ "Extra related information"

NAV
→ "Where can I go?"

FIGURE
→ "Here is a self-contained visual/content unit"

FIGCAPTION
→ "What is this figure?"

ADDRESS
→ "How can I contact them?"

DETAILS
→ "Here is hidden/expandable information"

SUMMARY
→ "Click this to see the details"
```

# Most Important Interview Differences

## `<aside>` vs `<section>`

```text
<section>
→ Thematic grouping of related content

<aside>
→ Related but secondary content
```

## `<figure>` vs `<img>`

```text
<img>
→ Image

<figure>
→ Self-contained content
→ Can contain image + caption
```

## `<figcaption>` vs `alt`

```text
alt
→ Alternative text for an image

figcaption
→ Visible caption for a figure
```

## `<details>` vs `<summary>`

```text
<details>
→ Expandable container

<summary>
→ Visible clickable label
```

## `<address>` Does NOT Mean Only Physical Address

```text
<address>
→ Contact information
```

It can include:

```text
Email
Author information
Business contact information
Physical contact details
Contact links
```
# Semantic HTML

## 59. What is the `<mark>` element?

The `<mark>` element represents text that is **highlighted or marked because it is relevant to the current context**.

Example:

```html
<p>
  Learn <mark>CSS selectors</mark> for your interview.
</p>
```

The browser usually displays the marked text with a highlighted background.

### Common Use Cases

`<mark>` can be useful for:

```text
Search results
Highlighted keywords
Relevant portions of text
Matching search terms
```

For example:

```html
<p>
  Search results for "CSS":
  <mark>CSS</mark> is used to style webpages.
</p>
```

### `<mark>` vs CSS Background Color

This is an important distinction.

You could visually highlight text using CSS:

```html
<span class="highlight">
  CSS
</span>
```

```css
.highlight {
  background: yellow;
}
```

But this only creates a visual style.

Using:

```html
<mark>CSS</mark>
```

provides semantic meaning that the text is relevant or highlighted.

### Interview Answer

> The `<mark>` element represents text that is highlighted because it is relevant to the current context, such as a search result or matching keyword.

### Remember

```text
<mark>
→ Relevant / highlighted text
```

---

## 60. What is the `<time>` element?

The `<time>` element represents a **specific period in time or a date**.

Example:

```html
<p>
  The article was published on
  <time datetime="2026-08-12">
    August 12, 2026
  </time>.
</p>
```

The visible text is:

```text
August 12, 2026
```

The machine-readable value is:

```text
2026-08-12
```

### Why Use `datetime`?

The `datetime` attribute provides a machine-readable representation of the time or date.

Example:

```html
<time datetime="2026-08-12">
  August 12, 2026
</time>
```

Humans see:

```text
August 12, 2026
```

Machines can understand:

```text
2026-08-12
```

This can be useful for browsers, search engines, and other software.

### Date and Time

You can also represent a specific date and time:

```html
<time datetime="2026-08-12T19:30">
  August 12 at 7:30 PM
</time>
```

### Duration

`<time>` can also represent a duration:

```html
<time datetime="PT2H30M">
  2 hours 30 minutes
</time>
```

### Interview Answer

> The `<time>` element represents a specific date, time, or duration. Its `datetime` attribute can provide a machine-readable representation of the value.

### Remember

```text
<time>
→ Date / time / duration

datetime
→ Machine-readable value
```

---

## 61. What is the `<dialog>` element?

The `<dialog>` element represents a **dialog box or interactive modal window**.

Example:

```html
<dialog id="myDialog">
  <p>Hello! This is a dialog.</p>

  <button onclick="myDialog.close()">
    Close
  </button>
</dialog>
```

JavaScript can open it:

```js
myDialog.showModal();
```

### Modal Dialog

A modal dialog prevents normal interaction with the rest of the page while the dialog is active.

Example:

```js
myDialog.showModal();
```

### Non-Modal Dialog

You can also show a dialog without making it modal:

```js
myDialog.show();
```

The important difference is:

```text
show()
→ Non-modal

showModal()
→ Modal
```

### Closing the Dialog

You can close it with:

```js
myDialog.close();
```

You can also use a form with:

```html
<dialog id="dialog">

  <form method="dialog">

    <p>Are you sure?</p>

    <button value="cancel">
      Cancel
    </button>

    <button value="confirm">
      Confirm
    </button>

  </form>

</dialog>
```

### Why Use `<dialog>`?

It provides native browser semantics and behavior for dialogs instead of forcing developers to build everything from scratch with:

```text
<div>
CSS
JavaScript
```

Humans spent years rebuilding modal windows badly before browsers finally gave us a proper element. Progress, apparently.

### Interview Answer

> The `<dialog>` element represents a dialog box or modal window. It provides native dialog behavior and can be opened with `show()` for a non-modal dialog or `showModal()` for a modal dialog.

### Remember

```text
<dialog>
→ Dialog / modal

show()
→ Non-modal

showModal()
→ Modal

close()
→ Close dialog
```

---

## 62. What is the `<meter>` element?

The `<meter>` element represents a **scalar measurement within a known range**.

Think:

> "How much of something is there?"

Example:

```html
<label for="storage">
  Storage used:
</label>

<meter
  id="storage"
  min="0"
  max="100"
  value="70">
  70%
</meter>
```

This represents a measurement of:

```text
70 out of 100
```

### Common Uses

`<meter>` can represent:

```text
Disk usage
Battery level
Rating
Score
Temperature within a range
Available capacity
```

### Important Attributes

```text
min
→ Minimum value

max
→ Maximum value

value
→ Current value

low
→ Low threshold

high
→ High threshold

optimum
→ Preferred value
```

Example:

```html
<meter
  min="0"
  max="100"
  low="30"
  high="80"
  optimum="90"
  value="75">
  75
</meter>
```

### `<meter>` vs `<progress>`

This is a very important interview question.

Use `<meter>` when you are measuring a value within a known range.

```html
<meter min="0" max="100" value="75">
  75
</meter>
```

Think:

```text
Battery level
→ meter

Disk usage
→ meter

Rating
→ meter
```

Use `<progress>` when showing progress toward completion.

```text
File upload
→ progress

Installation
→ progress

Task completion
→ progress
```

### Interview Answer

> The `<meter>` element represents a scalar measurement within a known range, such as disk usage, a rating, or a battery level. It should not be used to represent progress toward completing a task.

### Remember

```text
<meter>
→ Measurement

Example:
70% storage used
```

---

## 63. What is the `<progress>` element?

The `<progress>` element represents the **completion progress of a task**.

Example:

```html
<label for="upload">
  Upload progress:
</label>

<progress
  id="upload"
  value="70"
  max="100">
  70%
</progress>
```

This means:

```text
Task progress = 70 / 100
```

### Common Uses

```text
File upload
File download
Installation
Form completion
Long-running task
Loading process
```

### `value` and `max`

```html
<progress value="30" max="100">
  30%
</progress>
```

Means:

```text
30 / 100 completed
```

### Indeterminate Progress

If you omit the `value` attribute:

```html
<progress></progress>
```

the progress is indeterminate.

This means:

> "Something is happening, but we don't know exactly how much has completed."

This is useful when the total amount of work is unknown.

### `<progress>` vs `<meter>`

Remember this carefully.

```text
<meter>
→ How much / measurement?

<progress>
→ How far along is the task?
```

Example:

```html
<meter value="70" min="0" max="100">
  70
</meter>
```

Means:

```text
70% of some measured value
```

While:

```html
<progress value="70" max="100">
  70%
</progress>
```

Means:

```text
70% of the task is complete
```

### Interview Answer

> The `<progress>` element represents the completion progress of a task. It can show a determinate value using `value` and `max`, or an indeterminate state when `value` is omitted.

### Remember

```text
<progress>
→ Task completion

value="70" max="100"
→ 70% complete

No value
→ Indeterminate progress
```

---

## 64. What is the `<search>` element?

The `<search>` element represents a **part of a page containing search or filtering controls**.

Example:

```html
<search>
  <form action="/search">
    <label for="query">
      Search
    </label>

    <input
      id="query"
      name="q"
      type="search">

    <button type="submit">
      Search
    </button>
  </form>
</search>
```

It gives semantic meaning to the search functionality.

### Important

`<search>` does not perform the search itself.

The search behavior still needs to be implemented using:

```text
HTML forms
Server-side code
JavaScript
APIs
```

depending on the application.

### `<search>` vs `<input type="search">`

These are different.

```html
<input type="search">
```

represents a search input control.

While:

```html
<search>
```

represents a section of the page containing search or filtering controls.

You can use them together:

```html
<search>

  <form>
    <input type="search" name="q">

    <button>
      Search
    </button>
  </form>

</search>
```

### Interview Answer

> The `<search>` element represents a section of a page containing search or filtering controls. It provides semantic meaning but does not implement the search functionality itself.

### Remember

```text
<search>
→ Search/filter section

<input type="search">
→ Search input control
```

---

# 65. What is the difference between Semantic and Non-Semantic HTML Elements?

Semantic elements clearly communicate the **meaning and purpose** of their content.

Non-semantic elements generally do not communicate a specific meaning.

### Semantic Elements

Examples:

```html
<header>
  Website Header
</header>

<nav>
  <a href="/">Home</a>
</nav>

<main>
  Main Content
</main>

<article>
  Blog Article
</article>

<footer>
  Footer Content
</footer>
```

These elements tell the browser and developers what the content represents.

### Non-Semantic Elements

The most common non-semantic elements are:

```html
<div>
```

and:

```html
<span>
```

Example:

```html
<div class="card">
  Product information
</div>
```

The `<div>` simply represents a generic block-level container.

Example:

```html
<span class="price">
  ₹499
</span>
```

The `<span>` is a generic inline container.

### Why Semantic HTML Is Better

Semantic HTML improves:

```text
Accessibility
SEO
Code readability
Maintainability
Document structure
```

For example, prefer:

```html
<button>
  Submit
</button>
```

over:

```html
<div onclick="submitForm()">
  Submit
</div>
```

The `<button>` already has appropriate semantics and built-in keyboard behavior.

### Important: Semantic Does Not Mean "Never Use `<div>`"

You should absolutely use `<div>` when you need a generic container.

For example:

```html
<section>
  <h2>Products</h2>

  <div class="product-grid">
    ...
  </div>
</section>
```

Here:

```text
<section>
→ Semantic structure

<div>
→ Generic layout container
```

There is nothing wrong with `<div>` when a semantic element does not accurately describe the content.

### Comparison

| Semantic | Non-Semantic |
|---|---|
| `<header>` | `<div>` |
| `<nav>` | `<div>` |
| `<main>` | `<div>` |
| `<article>` | `<div>` |
| `<section>` | `<div>` |
| `<footer>` | `<div>` |
| `<button>` | `<div>` |
| `<strong>` | `<span>` |

The important point is not:

```text
Semantic = good
Non-semantic = bad
```

The real rule is:

```text
Use the element whose meaning matches the content.
```

### Interview Answer

> Semantic HTML elements communicate the meaning and purpose of their content, such as `header`, `nav`, `main`, `section`, `article`, and `footer`. Non-semantic elements such as `div` and `span` are generic containers without a specific meaning. Semantic elements improve accessibility, SEO, readability, and maintainability.

### Remember

```text
Semantic
→ Meaning

Non-semantic
→ Generic container
```

---

# Final Revision Sheet

```text
<mark>
→ Highlighted/relevant text

<time>
→ Date, time, or duration

<dialog>
→ Dialog / modal

<meter>
→ Measurement within a range

<progress>
→ Task completion

<search>
→ Search/filter section
```

```text
Semantic
→ Meaningful HTML

Non-semantic
→ Generic containers
```

# Most Important Interview Differences

## `<meter>` vs `<progress>`

```text
<meter>
→ Measurement

Example:
Battery = 80%

<progress>
→ Task completion

Example:
File upload = 80% complete
```

## `<search>` vs `<input type="search">`

```text
<search>
→ Search/filter section

<input type="search">
→ Search input field
```

## `<mark>` vs CSS Highlighting

```text
<mark>
→ Semantic meaning: relevant/highlighted text

CSS background-color
→ Visual styling only
```

## Semantic vs Non-Semantic

```text
<header>
→ Meaningful header

<div class="header">
→ Generic container that happens to be called "header"
```

# Master Memory Trick

```text
MARK
→ Highlight

TIME
→ When

DIALOG
→ Talk / Modal

METER
→ Measure

PROGRESS
→ Complete

SEARCH
→ Find

SEMANTIC
→ Meaning
```
# Semantic HTML (Advanced)

## 66. What are the Accessibility Benefits of Semantic HTML?

Accessibility means making websites usable for everyone, including people who use:

```text
Screen readers
Keyboard navigation
Voice control software
Assistive technologies
```

Semantic HTML helps assistive technologies understand the structure of a webpage.

Example:

```html
<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="/">Home</a>
</nav>

<main>
  <article>
    <h2>Understanding CSS</h2>
    <p>CSS styles web pages.</p>
  </article>
</main>
```

A screen reader can understand:

```text
Header
Navigation
Main content
Article
```

Without semantic HTML:

```html
<div class="header">
  <div class="nav">
    ...
  </div>
</div>

<div class="main">
  ...
</div>
```

The meaning becomes less clear.

### Benefits

```text
Better navigation
Better understanding of page structure
Improved screen reader experience
Improved keyboard accessibility
```

### Interview Answer

> Semantic HTML improves accessibility because it helps assistive technologies understand the structure and meaning of a webpage. Elements such as `header`, `nav`, `main`, and `article` provide useful landmarks for users relying on screen readers.

### Remember

```text
Semantic HTML
→ Better accessibility
→ Better screen reader support
→ Better navigation
```

---

## 67. What are the SEO Benefits of Semantic HTML?

SEO stands for:

```text
Search Engine Optimization
```

Semantic HTML helps search engines understand the structure and content of a page.

Example:

```html
<article>
  <h1>How CSS Grid Works</h1>

  <p>...</p>
</article>
```

The browser and search engines understand:

```text
This is an article.
```

Compare with:

```html
<div class="content">
  <h1>How CSS Grid Works</h1>

  <p>...</p>
</div>
```

This still works, but provides less semantic meaning.

### Important

Semantic HTML alone does not guarantee higher rankings.

SEO also depends on:

```text
Content quality
Performance
Backlinks
User experience
Mobile friendliness
```

### Semantic HTML Helps By

```text
Improving document structure
Helping search engines understand content
Making pages easier to crawl
Providing meaningful content hierarchy
```

### Interview Answer

> Semantic HTML helps SEO by giving search engines a clearer understanding of the structure and meaning of a webpage. It improves content organization and makes pages easier to interpret and index.

### Remember

```text
Semantic HTML
→ Better structure
→ Better understanding by search engines
→ Better SEO foundation
```

---

## 68. What are Landmark Elements?

Landmark elements are semantic elements that define important regions of a webpage.

They help screen reader users quickly move between major sections.

### Common Landmarks

```html
<header>
<nav>
<main>
<aside>
<footer>
```

Example:

```html
<body>

  <header>
    Site Header
  </header>

  <nav>
    Navigation
  </nav>

  <main>
    Main Content
  </main>

  <aside>
    Related Content
  </aside>

  <footer>
    Footer Content
  </footer>

</body>
```

Screen readers can jump directly between these regions.

### Why Are Landmarks Useful?

Without landmarks:

```text
User must read everything sequentially.
```

With landmarks:

```text
Jump directly to:
Header
Navigation
Main Content
Footer
```

Much faster.

### Interview Answer

> Landmark elements are semantic elements that define important regions of a webpage. Examples include `header`, `nav`, `main`, `aside`, and `footer`. They help assistive technologies navigate a page efficiently.

### Remember

```text
Landmarks
→ Major sections of a page
→ Help screen reader navigation
```

---

## 69. What is Proper Page Structure?

A well-structured webpage should use semantic elements to organize content logically.

### Example

```html
<body>

  <header>
    Logo + Navigation
  </header>

  <nav>
    Main Navigation
  </nav>

  <main>

    <section>
      <h2>Services</h2>
    </section>

    <section>
      <h2>Projects</h2>
    </section>

  </main>

  <footer>
    Copyright
  </footer>

</body>
```

### Benefits

```text
Easy to read
Easy to maintain
Better accessibility
Better SEO
```

### Bad Example

```html
<div class="header">
</div>

<div class="menu">
</div>

<div class="content">
</div>

<div class="footer">
</div>
```

Everything works visually, but the semantic meaning is missing.

### Interview Answer

> Proper page structure uses semantic HTML elements to organize content logically. A common structure includes `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`.

### Remember

```text
Good structure
→ Meaningful HTML hierarchy
```

---

## 70. What are Nested Semantics?

Semantic elements can be placed inside other semantic elements when it makes logical sense.

Example:

```html
<main>

  <section>

    <h2>Latest Articles</h2>

    <article>

      <header>
        <h3>CSS Grid Guide</h3>
      </header>

      <p>Content...</p>

      <footer>
        Written by Utpanna
      </footer>

    </article>

  </section>

</main>
```

### Structure

```text
main
 └─ section
     └─ article
         ├─ header
         └─ footer
```

### Important

Nesting should reflect meaning.

Do not nest semantic elements randomly.

### Interview Answer

> Nested semantics means placing semantic elements inside other semantic elements when it accurately represents the structure of the content. For example, an article can contain its own header and footer.

### Remember

```text
Nested semantics
→ Meaningful hierarchy
```

---

## 71. What are Common Semantic HTML Mistakes?

### Mistake 1: Using `<div>` for Everything

Bad:

```html
<div class="header">
</div>

<div class="content">
</div>

<div class="footer">
</div>
```

Better:

```html
<header>
</header>

<main>
</main>

<footer>
</footer>
```

---

### Mistake 2: Missing Headings

Bad:

```html
<section>
  <p>Services</p>
</section>
```

Better:

```html
<section>
  <h2>Services</h2>
</section>
```

---

### Mistake 3: Using `<section>` Everywhere

Bad:

```html
<section>
  <section>
    <section>
      <section>
      </section>
    </section>
  </section>
</section>
```

Use `<section>` only when there is a meaningful thematic grouping.

---

### Mistake 4: Using `<article>` for Everything

An article should be independently meaningful.

Good examples:

```text
Blog post
News article
Forum post
Comment
```

Bad example:

```text
A random wrapper div replacement
```

---

### Mistake 5: Ignoring Accessibility

Bad:

```html
<div onclick="submitForm()">
  Submit
</div>
```

Better:

```html
<button>
  Submit
</button>
```

### Interview Answer

> Common mistakes include using divs for everything, misusing section and article elements, missing headings, creating unnecessary nesting, and ignoring accessibility-focused semantic elements.

### Remember

```text
Use the element that matches the meaning.
```

---

## 72. How Does Semantic HTML Help Screen Readers?

Screen readers convert webpage content into speech.

Example:

```html
<nav>
  ...
</nav>
```

A screen reader may announce:

```text
Navigation
```

Example:

```html
<main>
  ...
</main>
```

A screen reader may announce:

```text
Main content
```

### Benefits

```text
Faster navigation
Clear page structure
Better understanding
Improved usability
```

### Example

```html
<header>
</header>

<nav>
</nav>

<main>
</main>

<footer>
</footer>
```

A user can jump directly between these regions.

### Interview Answer

> Semantic HTML helps screen readers identify page structure and landmarks, allowing users to navigate more efficiently and understand the purpose of content regions.

### Remember

```text
Semantic HTML
→ Screen readers understand the page better
```

---

## 73. What are Semantic HTML Best Practices?

### 1. Use Native HTML Elements First

Prefer:

```html
<button>
  Save
</button>
```

Instead of:

```html
<div role="button">
  Save
</div>
```

---

### 2. Use Headings Properly

Good:

```html
<h1>Website</h1>

<h2>Services</h2>

<h2>Projects</h2>

<h3>Project A</h3>
```

---

### 3. Use Semantic Elements When Appropriate

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

---

### 4. Avoid Unnecessary Divs

Bad:

```html
<div class="header">
</div>
```

Good:

```html
<header>
</header>
```

---

### 5. Use Meaning Before Appearance

Choose elements based on meaning.

Not based on styling needs.

### Interview Answer

> Semantic HTML best practices include using native HTML elements, maintaining proper heading structure, using semantic landmarks, avoiding unnecessary divs, and selecting elements based on meaning rather than appearance.

### Remember

```text
Meaning first.
Styling second.
```

---

## 74. Common Semantic HTML Interview Scenarios

### Scenario 1

**Question:**

> Should I use `<section>` or `<div>`?

Answer:

```text
Use <section>
→ Meaningful content grouping

Use <div>
→ Generic container
```

---

### Scenario 2

**Question:**

> Should I use `<article>` or `<section>`?

Answer:

```text
<article>
→ Independent content

<section>
→ Related content group
```

---

### Scenario 3

**Question:**

> Why not use div for everything?

Answer:

```text
Accessibility
SEO
Readability
Maintainability
```

---

### Scenario 4

**Question:**

> Can a page have multiple headers?

Answer:

```text
Yes

Page header
Article header
Section header
```

---

### Scenario 5

**Question:**

> Can a page have multiple main elements?

Answer:

```text
Generally no

A document should have one active
<main> element.
```

---

### Scenario 6

**Question:**

> Which is better?

```html
<div onclick="save()">
  Save
</div>
```

or

```html
<button>
  Save
</button>
```

Answer:

```html
<button>
  Save
</button>
```

because it provides built-in semantics, keyboard support, and accessibility.

### Interview Answer

> Semantic HTML interview questions usually focus on choosing the correct element based on meaning, understanding accessibility benefits, proper page structure, and the differences between semantic and non-semantic elements.

### Remember

```text
Interview Rule:

Choose elements by meaning,
not by appearance.
```

---

# Final Revision Sheet

```text
Accessibility
→ Better support for assistive technologies

SEO
→ Better content understanding

Landmarks
→ header, nav, main, aside, footer

Proper Structure
→ Logical semantic hierarchy

Nested Semantics
→ Semantic elements inside semantic elements

Common Mistakes
→ Using div for everything

Screen Readers
→ Faster navigation

Best Practices
→ Native elements first

Interview Rule
→ Meaning > Appearance
```

# One-Line Memory Trick

```text
Semantic HTML
→ Better Accessibility
→ Better SEO
→ Better Structure
→ Better Developer Experience
```

# Text & Lists (20)
# HTML Text and Lists

## 75. What are HTML Headings?

HTML provides six heading elements:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

They represent different levels of headings in the document.

```text
<h1>
→ Main heading

<h2>
→ Major subsection

<h3>
→ Subsection of h2

<h4>
→ Subsection of h3

<h5>
→ Subsection of h4

<h6>
→ Subsection of h5
```

### Example

```html
<h1>CSS Guide</h1>

<h2>CSS Fundamentals</h2>

<h3>Selectors</h3>

<h3>Specificity</h3>

<h2>Layout</h2>

<h3>Flexbox</h3>

<h3>Grid</h3>
```

Think of headings like the table of contents of a book.

```text
h1
 ├── h2
 │    ├── h3
 │    └── h3
 └── h2
      ├── h3
      └── h3
```

### Important

Do not choose a heading based only on its visual size.

Bad:

```html
<h1>This is a small subsection</h1>
```

because you wanted big text.

Use CSS for visual size:

```css
h2 {
  font-size: 40px;
}
```

The heading level should represent the document structure.

### Interview Answer

> HTML provides six heading elements from `h1` to `h6`. They represent a hierarchy of headings, with `h1` being the highest level and `h6` the lowest. Headings should be chosen based on document structure, not visual size.

### Remember

```text
h1 → Main heading
h2 → Major section
h3 → Subsection
...
h6 → Lowest heading level
```

---

## 76. What is a Paragraph in HTML?

The `<p>` element represents a **paragraph of text**.

Example:

```html
<p>
  CSS is a stylesheet language used to control
  the presentation of HTML documents.
</p>
```

You can have multiple paragraphs:

```html
<p>
  HTML provides structure.
</p>

<p>
  CSS controls presentation.
</p>

<p>
  JavaScript adds behavior.
</p>
```

### Important

A `<p>` element is a semantic text element.

It is not simply a generic container.

### Interview Answer

> The `<p>` element represents a paragraph of text. It is used to group related sentences or text into a meaningful paragraph.

### Remember

```text
<p>
→ Paragraph
```

---

## 77. What is a Line Break in HTML?

The `<br>` element creates a **line break inside text**.

Example:

```html
<p>
  Hello<br>
  World
</p>
```

The browser displays:

```text
Hello
World
```

### `<br>` Is a Void Element

It does not have a closing tag.

Correct:

```html
<br>
```

Not:

```html
</br>
```

### When Should You Use `<br>`?

Use it when the line break itself is meaningful.

For example:

```html
<address>
  Utpanna Pradhan<br>
  Odisha, India<br>
  India
</address>
```

Here the line breaks are part of the address formatting.

### Don't Use `<br>` for Layout

Bad:

```html
<p>
  Hello<br><br><br><br>
  World
</p>
```

If you need spacing, use CSS:

```css
p {
  margin-bottom: 20px;
}
```

### Interview Answer

> The `<br>` element creates a line break within text. It is a void element and should be used when a line break has semantic or content-related meaning, not as a replacement for CSS layout.

### Remember

```text
<br>
→ Line break
→ No closing tag
→ Don't use it for spacing
```

---

## 78. What is the `<hr>` element?

The `<hr>` element represents a **thematic break or change of topic** between sections of content.

Example:

```html
<p>
  This section discusses HTML.
</p>

<hr>

<p>
  This section discusses CSS.
</p>
```

The browser commonly renders it as a horizontal line.

### Important

The semantic meaning is more important than the visual line.

```text
<hr>
→ Thematic break

Not simply:
→ "Draw a horizontal line"
```

You can style it with CSS:

```css
hr {
  border: none;
  border-top: 1px solid black;
}
```

### Interview Answer

> The `<hr>` element represents a thematic break or change in topic within a document. Although browsers commonly display it as a horizontal line, its semantic purpose is to separate different topics or sections.

### Remember

```text
<hr>
→ Thematic break
→ Often displayed as a horizontal line
```

---

# Text Formatting Elements

## 79. What is the `<strong>` element?

The `<strong>` element indicates that its content has **strong importance, seriousness, or urgency**.

Example:

```html
<p>
  <strong>Warning:</strong>
  Your account will expire soon.
</p>
```

Browsers usually display `<strong>` text in bold.

But the important part is its **meaning**, not its visual appearance.

### `<strong>` vs CSS `font-weight`

```html
<strong>Important information</strong>
```

communicates importance.

While:

```css
font-weight: bold;
```

only changes appearance.

### Interview Answer

> The `<strong>` element indicates that text has strong importance, seriousness, or urgency. Browsers commonly render it in bold, but its semantic meaning is more important than its visual appearance.

### Remember

```text
<strong>
→ Strong importance
→ Usually bold
```

---

## 80. What is the `<em>` element?

The `<em>` element represents **stress emphasis**.

Example:

```html
<p>
  You <em>must</em> submit the form.
</p>
```

Browsers commonly display `<em>` in italic.

But its purpose is semantic emphasis.

### Example

Compare:

```html
<p>
  I said <em>today</em>.
</p>
```

The word "today" receives emphasis.

### `<em>` vs CSS `font-style`

```html
<em>Important word</em>
```

has semantic meaning.

While:

```css
font-style: italic;
```

only changes appearance.

### Interview Answer

> The `<em>` element represents stress emphasis. Browsers usually render it in italic, but its semantic meaning is that the text should receive emphasis.

### Remember

```text
<em>
→ Emphasis
→ Usually italic
```

---

## 81. What is the `<b>` element?

The `<b>` element draws attention to text **without indicating special importance or emphasis**.

Example:

```html
<p>
  <b>CSS</b> is used to style webpages.
</p>
```

Browsers usually display it in bold.

### Important

`<b>` does not mean:

```text
"Important"
```

For importance, use:

```html
<strong>Important</strong>
```

### Example

```html
<p>
  Search results for:
  <b>CSS</b>
</p>
```

The word is visually distinguished, but not necessarily more important.

### Interview Answer

> The `<b>` element draws attention to text without conveying strong importance or emphasis. It is commonly rendered in bold, but unlike `<strong>`, it does not indicate importance.

### Remember

```text
<b>
→ Attention / stylistic distinction

<strong>
→ Importance
```

---

## 82. What is the `<i>` element?

The `<i>` element represents text that is **set apart from the normal prose for a different reason**, such as a technical term, foreign word, thought, or taxonomy term.

Example:

```html
<p>
  The word <i>bonjour</i> is French.
</p>
```

Browsers commonly display `<i>` in italic.

### `<i>` vs `<em>`

This is important.

```text
<i>
→ Text set apart for a different voice, mood,
  terminology, or convention

<em>
→ Stress emphasis
```

Example:

```html
<p>
  The scientific name is
  <i>Homo sapiens</i>.
</p>
```

While:

```html
<p>
  You <em>really</em> need to learn CSS.
</p>
```

### Interview Answer

> The `<i>` element represents text set apart from the normal prose for a different reason, such as a technical term, foreign phrase, or taxonomy term. It is commonly displayed in italic but has a different semantic purpose from `<em>`.

### Remember

```text
<i>
→ Different voice / term / convention

<em>
→ Stress emphasis
```

---

## 83. What is the `<small>` element?

The `<small>` element represents **side comments, small print, disclaimers, or other text that is less prominent than surrounding content**.

Example:

```html
<p>
  Price: ₹999
  <small>Taxes may apply.</small>
</p>
```

Browsers commonly display it smaller than surrounding text.

### Common Uses

```text
Copyright information
Legal notices
Disclaimers
Side comments
Fine print
```

Example:

```html
<p>
  © 2026 WebNest
  <small>All rights reserved.</small>
</p>
```

### Important

Do not use `<small>` just because you want smaller text.

If the text has no semantic reason to be side content or fine print, use CSS.

### Interview Answer

> The `<small>` element represents side comments, fine print, disclaimers, or less prominent text. It usually renders text smaller, but its semantic meaning is more important than its visual size.

### Remember

```text
<small>
→ Fine print / side comments
```

---

## 84. What are `<sup>` and `<sub>`?

`<sup>` represents **superscript text**.

`<sub>` represents **subscript text**.

### Superscript

Example:

```html
<p>
  x<sup>2</sup>
</p>
```

Displays approximately:

```text
x²
```

Another example:

```html
<p>
  10<sup>th</sup> anniversary
</p>
```

### Subscript

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

### Common Uses

```text
<sup>
→ Mathematical exponents
→ Ordinal indicators
→ Footnote references

<sub>
→ Chemical formulas
→ Mathematical notation
```

### Interview Answer

> `<sup>` represents superscript text, while `<sub>` represents subscript text. They are commonly used for mathematical notation, chemical formulas, exponents, and footnote references.

### Remember

```text
sup
→ Up

sub
→ Down
```

---

# Code and Quotation Elements

## 85. What is the `<code>` element?

The `<code>` element represents a **short fragment of computer code**.

Example:

```html
<p>
  Use the <code>display: flex</code> property.
</p>
```

The browser commonly displays it in a monospace font.

### JavaScript Example

```html
<p>
  Call <code>console.log()</code> to print a value.
</p>
```

### Important

`<code>` is for code semantics, not simply for making text look like code.

### `<code>` vs `<pre>`

```text
<code>
→ Code fragment

<pre>
→ Preformatted text preserving whitespace
```

They are often combined:

```html
<pre><code>
function hello() {
  console.log("Hello");
}
</code></pre>
```

### Interview Answer

> The `<code>` element represents a fragment of computer code. It is commonly used for inline code or combined with `<pre>` for larger preformatted code blocks.

### Remember

```text
<code>
→ Code
```

---

## 86. What is the `<pre>` element?

The `<pre>` element represents **preformatted text**.

Whitespace and line breaks inside the element are preserved.

Example:

```html
<pre>
Hello
    World
        CSS
</pre>
```

The spacing and line breaks are preserved.

### Common Use

Code blocks:

```html
<pre><code>
const name = "Utpanna";

console.log(name);
</code></pre>
```

### Important

`<pre>` does not specifically mean "code."

It means:

```text
Preserve whitespace and line breaks
```

Therefore, `<pre>` can contain other types of preformatted text.

### `<pre>` vs `<code>`

```text
<pre>
→ Preserves formatting/whitespace

<code>
→ Indicates computer code
```

For a code block, use both:

```html
<pre><code>
const x = 10;
console.log(x);
</code></pre>
```

### Interview Answer

> The `<pre>` element represents preformatted text where whitespace and line breaks are preserved. It is commonly combined with `<code>` to display formatted code blocks.

### Remember

```text
pre
→ Preserve formatting

code
→ Computer code
```

---

## 87. What is the `<blockquote>` element?

The `<blockquote>` element represents a **long quotation taken from another source**.

Example:

```html
<blockquote cite="https://example.com/article">
  Good documentation helps developers understand
  complex systems.
</blockquote>
```

The browser commonly displays it with indentation.

### `cite` Attribute

The `<blockquote>` element can have a `cite` attribute containing the URL of the source.

```html
<blockquote cite="https://example.com/article">
  Quoted content...
</blockquote>
```

### Important

`<blockquote>` is for longer quotations.

For a short inline quotation, use:

```html
<q>
```

### Interview Answer

> The `<blockquote>` element represents a longer quotation from another source. Its `cite` attribute can provide the URL of the source.

### Remember

```text
<blockquote>
→ Long quotation
```

---

## 88. What is the `<q>` element?

The `<q>` element represents a **short inline quotation**.

Example:

```html
<p>
  She said <q>Practice makes progress.</q>
</p>
```

Browsers commonly add quotation marks automatically.

### `<q>` vs `<blockquote>`

```text
<q>
→ Short inline quote

<blockquote>
→ Longer standalone quote
```

Example:

```html
<p>
  The teacher said <q>Keep practicing.</q>
</p>
```

Versus:

```html
<blockquote>
  Keep practicing even when the concepts
  become difficult.
</blockquote>
```

### Interview Answer

> The `<q>` element represents a short inline quotation, while `<blockquote>` is used for longer standalone quotations.

### Remember

```text
q
→ Quick/short quote

blockquote
→ Long quote
```

---

## 89. What is the `<cite>` element?

The `<cite>` element represents the **title of a creative work**.

Examples of creative works include:

```text
Books
Movies
Songs
Articles
Paintings
Research papers
Other works
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
  My favorite movie is
  <cite>Interstellar</cite>.
</p>
```

### Important

`<cite>` does not generally mean:

```text
"Any person who said something"
```

It is primarily for the title of the work being referenced.

### `<cite>` vs `cite` Attribute

Do not confuse these.

Element:

```html
<cite>Clean Code</cite>
```

represents the title of a creative work.

Attribute:

```html
<blockquote cite="https://example.com">
  ...
</blockquote>
```

provides a URL for the source of the quotation.

### Interview Answer

> The `<cite>` element represents the title of a creative work, such as a book, movie, article, painting, or research paper. It is different from the `cite` attribute, which can provide the source URL for quoted content.

### Remember

```text
<cite>
→ Title of a creative work

cite=""
→ Source URL
```

---

# HTML Lists

## 90. What is an Ordered List?

An ordered list represents a list where **the order of the items matters**.

Use:

```html
<ol>
  <li>Install Node.js</li>
  <li>Create the project</li>
  <li>Run the application</li>
</ol>
```

The browser typically displays:

```text
1. Install Node.js
2. Create the project
3. Run the application
```

### Common Uses

```text
Instructions
Rankings
Steps
Procedures
Ordered items
```

### Changing the Starting Number

You can use the `start` attribute:

```html
<ol start="5">
  <li>Step Five</li>
  <li>Step Six</li>
</ol>
```

### Different Numbering Types

The `type` attribute can specify different numbering styles:

```html
<ol type="A">
  <li>First</li>
  <li>Second</li>
</ol>
```

Possible values include:

```text
1
A
a
I
i
```

### Interview Answer

> An ordered list is created using `<ol>` and represents a list where the order of items is meaningful. Each item is normally represented using an `<li>` element.

### Remember

```text
<ol>
→ Ordered list
→ Order matters
```

---

## 91. What is an Unordered List?

An unordered list represents a list where **the order of items does not matter**.

Use:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

The browser commonly displays:

```text
• HTML
• CSS
• JavaScript
```

### Common Uses

```text
Navigation menus
Features
Shopping items
General lists
Categories
```

### Example Navigation

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### Interview Answer

> An unordered list is created using `<ul>` and represents a list where the order of items is not important. Each item is represented using an `<li>` element.

### Remember

```text
<ul>
→ Unordered list
→ Order doesn't matter
```

---

## 92. What is a Description List?

A description list represents a list of **terms and their descriptions or associated information**.

It uses:

```text
<dl>
→ Description list

<dt>
→ Description term

<dd>
→ Description/details
```

Example:

```html
<dl>

  <dt>HTML</dt>
  <dd>
    Markup language used to structure webpages.
  </dd>

  <dt>CSS</dt>
  <dd>
    Stylesheet language used to style webpages.
  </dd>

  <dt>JavaScript</dt>
  <dd>
    Programming language used to add behavior.
  </dd>

</dl>
```

Think:

```text
Term
↓
Description
```

### Multiple Descriptions

A term can have multiple descriptions.

```html
<dl>

  <dt>CSS</dt>

  <dd>
    Styles webpages.
  </dd>

  <dd>
    Controls layout and presentation.
  </dd>

</dl>
```

### Multiple Terms

A description can also be associated with multiple terms.

```html
<dl>

  <dt>Frontend Development</dt>
  <dt>Web Development</dt>

  <dd>
    Development focused on the client side of web applications.
  </dd>

</dl>
```

### Common Uses

```text
Glossaries
FAQs
Metadata
Key-value information
Definitions
Specifications
```

### Interview Answer

> A description list represents terms and their associated descriptions or information. It uses `<dl>` as the container, `<dt>` for terms, and `<dd>` for descriptions.

### Remember

```text
<dl>
→ Description List

<dt>
→ Term

<dd>
→ Description
```

---

## 93. What are Nested Lists?

A nested list is a list placed inside another list item.

Example:

```html
<ul>

  <li>
    Frontend

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

  </li>

  <li>
    Backend

    <ul>
      <li>Node.js</li>
      <li>Express</li>
    </ul>

  </li>

</ul>
```

Structure:

```text
Frontend
  ├── HTML
  ├── CSS
  └── JavaScript

Backend
  ├── Node.js
  └── Express
```

### Important Rule

A nested list should normally be placed **inside an `<li>` element**.

Correct:

```html
<ul>

  <li>
    Frontend

    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>

  </li>

</ul>
```

Avoid:

```html
<ul>
  <li>Frontend</li>

  <ul>
    <li>HTML</li>
  </ul>
</ul>
```

### Ordered and Unordered Lists Can Be Nested

Example:

```html
<ol>

  <li>
    Learn HTML

    <ul>
      <li>Semantic HTML</li>
      <li>Forms</li>
      <li>Accessibility</li>
    </ul>

  </li>

  <li>
    Learn CSS

    <ol>
      <li>Selectors</li>
      <li>Box Model</li>
      <li>Flexbox</li>
    </ol>

  </li>

</ol>
```

### Interview Answer

> A nested list is a list placed inside another list item. Both ordered and unordered lists can be nested. The nested list should normally be placed inside the relevant `<li>` element.

### Remember

```text
Nested list
→ List inside <li>
```

---

# Final Revision Sheet

```text
<h1> - <h6>
→ Heading hierarchy

<p>
→ Paragraph

<br>
→ Line break

<hr>
→ Thematic break

<strong>
→ Strong importance

<em>
→ Stress emphasis

<b>
→ Attention without importance

<i>
→ Text set apart for another reason

<small>
→ Fine print / side comments

<sup>
→ Superscript

<sub>
→ Subscript

<code>
→ Computer code

<pre>
→ Preformatted text

<blockquote>
→ Long quotation

<q>
→ Short inline quotation

<cite>
→ Title of a creative work

<ol>
→ Ordered list

<ul>
→ Unordered list

<dl>
→ Description list

<dt>
→ Description term

<dd>
→ Description/details
```

# Most Important Interview Differences

## `<strong>` vs `<b>`

```text
<strong>
→ Semantic importance

<b>
→ Draw attention without importance
```

## `<em>` vs `<i>`

```text
<em>
→ Stress emphasis

<i>
→ Text set apart for another reason
```

## `<code>` vs `<pre>`

```text
<code>
→ Computer code

<pre>
→ Preserves whitespace and line breaks
```

They can be combined:

```html
<pre><code>
const x = 10;
console.log(x);
</code></pre>
```

## `<blockquote>` vs `<q>`

```text
<blockquote>
→ Long quotation

<q>
→ Short inline quotation
```

## `<ol>` vs `<ul>`

```text
<ol>
→ Order matters

<ul>
→ Order does not matter
```

## `<dl>` vs `<ul>` / `<ol>`

```text
<dl>
→ Terms + descriptions

<ul>
→ Unordered items

<ol>
→ Ordered items
```

# Master Memory Trick

```text
TEXT
→ p, strong, em, b, i, small

POSITION
→ sup, sub

CODE
→ code, pre

QUOTES
→ blockquote, q, cite

LISTS
→ ol, ul, dl
```

The key interview principle for all of these is:

```text
Do not choose an HTML element only
because of how the browser makes it look.

Choose it because of what the content means.
```

#  Links & Navigation (20)
# HTML Links

## 94. What is the Anchor Tag?

The `<a>` element, called the **anchor element**, is used to create hyperlinks.

Example:

```html
<a href="https://example.com">
  Visit Example
</a>
```

When the user clicks the link, the browser navigates to the URL in `href`.

### Important Attribute

The most important attribute is:

```html
href
```

It specifies the destination of the link.

Example:

```html
<a href="/about">
  About Us
</a>
```

### Links Can Point To

```text
Another webpage
Another website
A file
An email address
A phone number
A section of the current page
```

Example:

```html
<a href="/about">About</a>

<a href="https://example.com">Example</a>

<a href="#contact">Contact Section</a>

<a href="mailto:hello@example.com">Email</a>

<a href="tel:+911234567890">Call</a>
```

### `<a>` vs `<button>`

This is a common interview question.

Use `<a>` when the user is **navigating somewhere**:

```html
<a href="/profile">
  View Profile
</a>
```

Use `<button>` when the user is **performing an action**:

```html
<button type="button">
  Open Menu
</button>
```

Think:

```text
<a>
→ Go somewhere

<button>
→ Do something
```

### Interview Answer

> The `<a>` element creates a hyperlink. Its `href` attribute specifies the destination. Anchors are used for navigation, while buttons are generally used for actions.

### Remember

```text
<a>
→ Link / navigation

href
→ Destination
```

---

## 95. What are Relative URLs?

A relative URL specifies a resource **relative to the current document or a specified base URL**.

Example:

```html
<a href="/about">
  About
</a>
```

If your website is:

```text
https://example.com
```

then:

```text
/about
```

points to:

```text
https://example.com/about
```

### Common Relative URL Forms

#### Root-relative

```html
<a href="/about">
  About
</a>
```

Starts from the website's root.

```text
/about
```

---

#### Same-directory relative path

```html
<a href="about.html">
  About
</a>
```

Refers to `about.html` relative to the current document's location.

---

#### Parent directory

```html
<a href="../about.html">
  About
</a>
```

`..` means:

```text
Go up one directory
```

Example:

```text
pages/
  contact.html
about.html
```

From:

```text
pages/contact.html
```

this:

```html
<a href="../about.html">
```

can point to:

```text
about.html
```

### Why Use Relative URLs?

They are useful when linking resources within the same website.

Example:

```html
<a href="/products">
  Products
</a>
```

```html
<img src="/images/logo.png" alt="Company Logo">
```

### Interview Answer

> A relative URL identifies a resource relative to the current document or base URL. It is commonly used for links and resources within the same website.

### Remember

```text
Relative URL
→ Depends on current/base location

/about
../about.html
images/logo.png
```

---

## 96. What are Absolute URLs?

An absolute URL contains the **complete address of a resource**.

Example:

```html
<a href="https://example.com/about">
  About
</a>
```

It includes:

```text
Protocol
Domain
Path
```

For example:

```text
https://example.com/products
```

contains:

```text
https://
    ↓
Protocol

example.com
    ↓
Domain

/products
    ↓
Path
```

### Another Example

```html
<img
  src="https://example.com/images/logo.png"
  alt="Logo">
```

### Relative vs Absolute

Relative:

```html
<a href="/about">
  About
</a>
```

Absolute:

```html
<a href="https://example.com/about">
  About
</a>
```

### When Are Absolute URLs Commonly Used?

```text
External websites
External resources
Canonical URLs
Social links
External APIs/resources
```

Example:

```html
<a href="https://github.com">
  GitHub
</a>
```

### Interview Answer

> An absolute URL contains the complete address of a resource, including its scheme and domain. It is commonly used when linking to external websites or when a complete URL is required.

### Remember

```text
Absolute
→ Complete URL

https://example.com/about
```

---

## 97. What are Fragment Links?

A fragment link navigates to a **specific location within a webpage**.

Example:

```html
<a href="#contact">
  Contact Us
</a>
```

The target element:

```html
<section id="contact">

  <h2>Contact Us</h2>

</section>
```

When the user clicks the link, the browser navigates to the element with:

```text
id="contact"
```

### How It Works

```text
<a href="#contact">
        ↓
Looks for id="contact"
        ↓
Browser moves to that element
```

### Another Example

```html
<nav>
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</nav>

<main>

  <section id="home">
    <h2>Home</h2>
  </section>

  <section id="services">
    <h2>Services</h2>
  </section>

  <section id="contact">
    <h2>Contact</h2>
  </section>

</main>
```

### Fragment Identifier

The part after `#` is called a **fragment identifier**.

```text
https://example.com/about#team
                           ↑
                       fragment
```

### Important

The target ID should be unique within the document.

```html
<section id="contact">
```

Good.

Do not create multiple elements with:

```html
id="contact"
```

### Interview Answer

> A fragment link navigates to a specific element within a document using a URL fragment such as `#contact`. The fragment usually matches the `id` of the target element.

### Remember

```text
#contact
→ Find id="contact"
→ Navigate there
```

---

## 98. What is the `download` Attribute?

The `download` attribute tells the browser that a link is intended to **download a resource rather than navigate to it**.

Example:

```html
<a href="/files/resume.pdf" download>
  Download Resume
</a>
```

The browser may download the file instead of opening it normally.

### Providing a Filename

You can also provide a suggested filename:

```html
<a
  href="/files/resume.pdf"
  download="Utpanna-Resume.pdf">

  Download Resume

</a>
```

The browser can use:

```text
Utpanna-Resume.pdf
```

as the suggested filename.

### Important

`download` is a **hint to the browser**, not an absolute guarantee that a download will happen in every situation.

For example, browser security rules and cross-origin restrictions can affect its behavior.

### Example

```html
<a
  href="/images/profile.jpg"
  download="profile.jpg">

  Download Image

</a>
```

### Interview Answer

> The `download` attribute indicates that a linked resource is intended to be downloaded instead of navigated to. It can optionally specify a suggested filename.

### Remember

```text
download
→ Download the linked resource
```

---

## 99. What is the `target` Attribute?

The `target` attribute specifies **where a linked document should be opened**.

Example:

```html
<a
  href="https://example.com"
  target="_blank">

  Open Example

</a>
```

### Common Values

```text
_self
_blank
_parent
_top
```

### `_self`

Opens the link in the current browsing context.

```html
<a href="/about" target="_self">
  About
</a>
```

This is generally the default behavior.

```text
_self
→ Current tab/frame
```

---

### `_blank`

Opens the link in a new browsing context, commonly a new tab.

```html
<a
  href="https://example.com"
  target="_blank">

  Open Example

</a>
```

### Security Best Practice

When using `_blank` for external links, commonly use:

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer">

  Open Example

</a>
```

`noopener` prevents the newly opened page from getting access to the opener through `window.opener`.

Modern browsers have protections around `_blank`, but explicitly using `noopener` remains a clear and useful practice.

---

### `_parent`

Opens the link in the parent browsing context.

This is mainly relevant when working with nested browsing contexts such as iframes.

```html
<a
  href="/page"
  target="_parent">

  Open Page

</a>
```

---

### `_top`

Opens the link in the top-level browsing context.

```html
<a
  href="/page"
  target="_top">

  Open Page

</a>
```

This is also mainly relevant when working with frames/iframes.

### Interview Answer

> The `target` attribute specifies the browsing context where the linked resource should open. Common values are `_self` for the current context, `_blank` for a new browsing context, `_parent` for the parent context, and `_top` for the top-level context.

### Remember

```text
_self
→ Same

_blank
→ New

_parent
→ Parent

_top
→ Top
```

---

## 100. What is the `rel` Attribute?

The `rel` attribute specifies the **relationship between the current document and the linked resource**.

Example:

```html
<a
  href="https://example.com"
  rel="noopener noreferrer">

  Visit Example

</a>
```

It does not primarily tell the browser where to open the link.

That is the job of:

```text
target
```

Instead:

```text
rel
→ Relationship / behavior relationship
```

### Common `rel` Values

#### `noopener`

Used with links opened in a new browsing context.

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener">

  Open Example

</a>
```

It prevents the opened page from accessing the opener through `window.opener`.

---

#### `noreferrer`

```html
<a
  href="https://example.com"
  rel="noreferrer">

  Open Example

</a>
```

It tells the browser not to send the HTTP `Referer` header for that navigation and also provides the `noopener` behavior.

---

#### `nofollow`

```html
<a
  href="https://example.com"
  rel="nofollow">

  Example
</a>
```

It tells search engines not to treat the link as a normal endorsement for crawling/ranking purposes.

It is commonly used for certain links where you do not want to signal endorsement.

---

#### `sponsored`

Used for links that are advertisements or paid placements.

```html
<a
  href="https://example.com"
  rel="sponsored">

  Sponsored Link
</a>
```

---

#### `ugc`

Used for links contained in user-generated content.

```html
<a
  href="https://example.com"
  rel="ugc">

  User Link
</a>
```

### `rel` Can Have Multiple Values

Multiple relationship tokens can be specified separated by spaces.

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer">

  Visit Example

</a>
```

Here:

```text
noopener
→ Opener protection

noreferrer
→ Don't send referrer information
```

### `rel` Is Not Only for `<a>`

The `rel` attribute can also be used with elements such as:

```html
<link>
<a>
<area>
```

For example:

```html
<link
  rel="stylesheet"
  href="style.css">
```

Here:

```text
rel="stylesheet"
→ The linked resource is a stylesheet
```

### Interview Answer

> The `rel` attribute describes the relationship between the current document and the linked resource. Common values include `noopener`, `noreferrer`, `nofollow`, `sponsored`, and `ugc`. It can also be used on elements such as `<link>`.

### Remember

```text
rel
→ Relationship

target
→ Where to open
```

---

# Final Revision Sheet

```text
<a>
→ Creates a hyperlink

href
→ Link destination

Relative URL
→ Depends on current/base location

Absolute URL
→ Complete URL

#fragment
→ Navigate to an element by id

download
→ Download linked resource

target
→ Where to open the link

rel
→ Relationship with linked resource
```

# Most Important Interview Differences

## Relative URL vs Absolute URL

```text
Relative:

/about

→ Depends on the current/base website location
```

```text
Absolute:

https://example.com/about

→ Complete URL
```

---

## `<a>` vs `<button>`

```text
<a>
→ Navigation

<button>
→ Action
```

Example:

```html
<a href="/profile">
  View Profile
</a>

<button type="button">
  Open Menu
</button>
```

---

## `target` vs `rel`

```text
target
→ Where should the link open?

rel
→ What is the relationship with the linked resource?
```

Example:

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer">

  Open Example

</a>
```

Think:

```text
target
→ LOCATION

rel
→ RELATIONSHIP
```

---

## `download` vs Normal Link

Normal:

```html
<a href="/resume.pdf">
  Resume
</a>
```

The browser may open the PDF.

Download:

```html
<a href="/resume.pdf" download>
  Download Resume
</a>
```

The link tells the browser the resource is intended for downloading.

# Master Memory Trick

```text
A      → Anchor / Link
href   → Where
relative → Nearby
absolute → Complete
#      → Inside page
download → Save
target   → Where to open
rel      → Relationship
```
# HTML Links - Advanced

## 101. What is `noopener`?

`noopener` is a value of the `rel` attribute that prevents a newly opened page from accessing the page that opened it through `window.opener`.

It is commonly used with:

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener">
  Open Example
</a>
```

### Why is it useful?

When a link uses:

```html
target="_blank"
```

the new browsing context can potentially have access to the opener.

Using:

```html
rel="noopener"
```

prevents that access.

Think:

```text
target="_blank"
→ Open another browsing context

noopener
→ Don't give that page access to the opener
```

### Important

Modern browsers have built-in protections for many `_blank` links, but explicitly using `noopener` is still a clear security practice.

### Interview Answer

> `noopener` prevents a newly opened page from accessing the opener through `window.opener`. It is commonly used with links that use `target="_blank"`.

### Remember

```text
noopener
→ Protect the opener
```

---

## 102. What is `noreferrer`?

`noreferrer` is a value of the `rel` attribute that tells the browser not to send referrer information when navigating to the linked resource.

Example:

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noreferrer">
  Visit Example
</a>
```

Normally, a browser can send information about the previous page in the HTTP `Referer` header.

With:

```html
rel="noreferrer"
```

that referrer information is not sent for the navigation.

### Important Relationship With `noopener`

`noreferrer` also provides the protection associated with `noopener` for the opened browsing context.

Therefore:

```html
rel="noreferrer"
```

provides both:

```text
No referrer information
+
Opener protection
```

### `noopener` vs `noreferrer`

```text
noopener
→ Prevent access to window.opener

noreferrer
→ Don't send referrer information
→ Also provides opener protection
```

### Common Usage

You may see:

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer">
  Visit Example
</a>
```

This makes both intentions explicit.

### Interview Answer

> `noreferrer` prevents the browser from sending referrer information to the destination and also provides the opener protection associated with `noopener`.

### Remember

```text
noreferrer
→ Hide referrer
→ Also protects opener
```

---

## 103. What are External Links?

An external link points to a resource on a **different website or domain**.

Example:

```html
<a href="https://github.com">
  GitHub
</a>
```

Here the current website might be:

```text
https://mywebsite.com
```

and the link points to:

```text
https://github.com
```

Therefore, it is an external link.

### Example

```html
<a href="https://www.google.com">
  Google
</a>

<a href="https://github.com">
  GitHub
</a>

<a href="https://developer.mozilla.org">
  MDN
</a>
```

### Opening External Links in a New Tab

If you want to open an external link in a new browsing context:

```html
<a
  href="https://github.com"
  target="_blank"
  rel="noopener noreferrer">
  GitHub
</a>
```

### Important

An external link does **not** have to open in a new tab.

This is perfectly valid:

```html
<a href="https://github.com">
  GitHub
</a>
```

External vs new tab are two separate concepts.

### Interview Answer

> An external link points to a resource on another website or domain. External links can use normal navigation or `target="_blank"` when opening in another browsing context is appropriate.

### Remember

```text
External
→ Another website/domain
```

---

## 104. What are Internal Links?

An internal link points to another location **within the same website**.

Example:

```html
<a href="/about">
  About Us
</a>
```

If the current website is:

```text
https://example.com
```

then:

```text
/about
```

points to:

```text
https://example.com/about
```

### Examples

```html
<a href="/">
  Home
</a>

<a href="/about">
  About
</a>

<a href="/services">
  Services
</a>

<a href="/contact">
  Contact
</a>
```

### Fragment Links Are Also Common

You can link to a section on the current page:

```html
<a href="#services">
  Services
</a>

<section id="services">
  <h2>Services</h2>
</section>
```

### Internal vs External

```text
Internal
→ Same website

External
→ Different website
```

Example:

```html
<a href="/about">
  Internal
</a>

<a href="https://github.com">
  External
</a>
```

### Interview Answer

> An internal link points to another page or location within the same website. Internal links are commonly used for website navigation and can use relative URLs or root-relative URLs.

### Remember

```text
Internal
→ Same website
```

---

## 105. What are Mail Links?

A mail link uses the `mailto:` URL scheme to open the user's default email application.

Example:

```html
<a href="mailto:hello@example.com">
  Email Us
</a>
```

When clicked, the browser can open the user's configured email application.

### Adding a Subject

You can provide a subject:

```html
<a
  href="mailto:hello@example.com?subject=Website%20Inquiry">
  Send Email
</a>
```

The email application can open with:

```text
To:
hello@example.com

Subject:
Website Inquiry
```

### Adding a Body

You can also specify a message body:

```html
<a
  href="mailto:hello@example.com?subject=Website%20Inquiry&body=Hello%20there">
  Contact Us
</a>
```

### Important

Spaces and special characters in URLs should be properly URL-encoded.

For example:

```text
Website Inquiry
```

becomes:

```text
Website%20Inquiry
```

### Interview Answer

> A mail link uses the `mailto:` URL scheme to allow users to open their default email application with a specified email address. It can also include parameters such as `subject` and `body`.

### Remember

```text
mailto:
→ Open email client
```

---

## 106. What are Telephone Links?

A telephone link uses the `tel:` URL scheme to allow users to initiate a phone call.

Example:

```html
<a href="tel:+911234567890">
  Call Us
</a>
```

On a mobile device, tapping the link can open the phone application.

### Example

```html
<a href="tel:+919876543210">
  +91 98765 43210
</a>
```

### Why Is It Useful?

Telephone links are especially useful for:

```text
Contact pages
Business websites
Mobile websites
Customer support
Local businesses
```

### Interview Answer

> A telephone link uses the `tel:` URL scheme to allow users to initiate a phone call using a compatible device or application.

### Remember

```text
tel:
→ Call
```

---

## 107. What are Navigation Menus?

A navigation menu provides links that allow users to move between important pages or sections of a website.

The semantic HTML element for navigation is:

```html
<nav>
```

Example:

```html
<nav>
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
```

### Why Use `<nav>`?

`<nav>` tells browsers and assistive technologies:

```text
"This section contains navigation links."
```

It creates a semantic navigation landmark.

### Should Every Link Be Inside `<nav>`?

No.

For example:

```html
<p>
  Read our
  <a href="/privacy">
    Privacy Policy
  </a>.
</p>
```

This is a link, but it does not necessarily represent a navigation section.

Use `<nav>` for major groups of navigation links.

### Multiple Navigation Areas

A page can have more than one navigation area when they represent different navigation groups.

Example:

```html
<nav aria-label="Main navigation">
  ...
</nav>

<nav aria-label="Footer navigation">
  ...
</nav>
```

The labels help users of assistive technologies distinguish between them.

### Interview Answer

> A navigation menu is a group of links that helps users move around a website or application. The `<nav>` element should be used to identify major navigation sections semantically.

### Remember

```text
<nav>
→ Major navigation links
```

---

## 108. What are Breadcrumbs?

Breadcrumbs are a navigation pattern that shows the user's **current location within a website's hierarchy**.

Example:

```text
Home > Products > Laptops > Gaming Laptop
```

They help users understand where they are and navigate back to higher-level pages.

### Semantic HTML Example

```html
<nav aria-label="Breadcrumb">

  <ol>

    <li>
      <a href="/">Home</a>
    </li>

    <li>
      <a href="/products">Products</a>
    </li>

    <li>
      <a href="/products/laptops">Laptops</a>
    </li>

    <li aria-current="page">
      Gaming Laptop
    </li>

  </ol>

</nav>
```

### Why Use `<ol>`?

Breadcrumbs represent an ordered hierarchy:

```text
Home
 ↓
Products
 ↓
Laptops
 ↓
Gaming Laptop
```

The order represents the user's position in the hierarchy.

Therefore, `<ol>` is often a good semantic choice.

### Why Use `aria-current="page"`?

The current page should be identified to assistive technologies.

Example:

```html
<li aria-current="page">
  Gaming Laptop
</li>
```

This tells assistive technologies:

```text
"This is the current page."
```

### Styling Breadcrumb Separators

You don't need to put `>` directly into the HTML.

Instead, CSS can add separators.

Example:

```css
li + li::before {
  content: ">";
  margin: 0 8px;
}
```

HTML:

```html
<nav aria-label="Breadcrumb">

  <ol>

    <li>
      <a href="/">Home</a>
    </li>

    <li>
      <a href="/products">Products</a>
    </li>

    <li aria-current="page">
      Laptop
    </li>

  </ol>

</nav>
```

### Important

The separator is visual presentation.

The actual hierarchy comes from the HTML structure.

### Interview Answer

> Breadcrumbs are a navigation pattern that shows the user's current location within a website's hierarchy. They are commonly implemented using a `<nav>` element containing an ordered list, with the current page identified using `aria-current="page"`.

### Remember

```text
Breadcrumbs
→ Show where you are

Home
 ↓
Products
 ↓
Laptops
 ↓
Current Page
```

---

# Final Revision Sheet

```text
noopener
→ Prevent opener access

noreferrer
→ Don't send referrer information
→ Also provides opener protection

External Link
→ Another website/domain

Internal Link
→ Same website

mailto:
→ Email

tel:
→ Phone call

<nav>
→ Navigation section

Breadcrumbs
→ Show current location in site hierarchy
```

# Most Important Interview Differences

## `noopener` vs `noreferrer`

```text
noopener
→ Protects against access through window.opener
```

```text
noreferrer
→ Prevents referrer information from being sent
→ Also provides noopener behavior
```

---

## External vs Internal Links

```text
Internal
→ Same website

<a href="/about">
  About
</a>
```

```text
External
→ Different website

<a href="https://github.com">
  GitHub
</a>
```

---

## `<nav>` vs Normal Links

```text
<a>
→ Individual link

<nav>
→ Section containing major navigation links
```

---

## Navigation Menu vs Breadcrumbs

```text
Navigation Menu
→ Helps users move around the main areas of a website

Breadcrumbs
→ Shows the user's current location in the website hierarchy
```

# Master Memory Trick

```text
noopener
→ Protect

noreferrer
→ Hide referrer

External
→ Outside

Internal
→ Inside

mailto
→ Mail

tel
→ Telephone

nav
→ Navigate

Breadcrumb
→ Where am I?
```
# HTML Links - SEO, Security, and Metadata

## 109. What is a Canonical Link?

A canonical link tells search engines which URL should be treated as the **preferred or primary version of a page** when multiple URLs contain the same or very similar content.

It is usually placed inside the `<head>` using:

```html
<link
  rel="canonical"
  href="https://example.com/products">
```

### Why Do We Need It?

Imagine the same product page can be accessed through several URLs:

```text
https://example.com/products/shoes
https://example.com/products/shoes?color=black
https://example.com/products/shoes?sort=price
```

The content might be mostly the same.

You can tell search engines:

```html
<link
  rel="canonical"
  href="https://example.com/products/shoes">
```

This communicates:

> "This is the preferred URL for this content."

### Important

A canonical link is a **hint to search engines**, not an absolute command.

It helps search engines understand which URL you prefer to represent the content.

### Where Is It Placed?

Inside `<head>`:

```html
<head>

  <title>Running Shoes</title>

  <link
    rel="canonical"
    href="https://example.com/products/running-shoes">

</head>
```

### Interview Answer

> A canonical link specifies the preferred URL for a page when multiple URLs may represent the same or similar content. It helps search engines consolidate duplicate or similar URLs and understand which URL should be treated as the canonical version.

### Remember

```text
canonical
→ Preferred URL

<link rel="canonical" href="...">
```

---

## 110. What is a Favicon?

A favicon is the small icon associated with a website.

It can appear in places such as:

```text
Browser tab
Bookmarks
Browser history
Other browser UI
```

Example:

```html
<head>

  <link
    rel="icon"
    href="/favicon.ico">

</head>
```

You can also use another image format:

```html
<link
  rel="icon"
  type="image/png"
  href="/favicon.png">
```

### Common Formats

Favicons can commonly use:

```text
ICO
PNG
SVG
```

Example:

```html
<link
  rel="icon"
  href="/favicon.svg"
  type="image/svg+xml">
```

### Why Is a Favicon Useful?

It helps users quickly identify your website among multiple browser tabs and bookmarks.

Without a favicon:

```text
Tab → Generic browser icon
```

With a favicon:

```text
Tab → Your website's icon
```

### Interview Answer

> A favicon is a small icon associated with a website, commonly displayed in browser tabs, bookmarks, and browser history. It is usually declared using a `<link rel="icon">` element in the document's `<head>`.

### Remember

```text
favicon
→ Website's small browser icon

rel="icon"
→ Defines the favicon
```

---

## 111. What is the `<base>` Tag?

The `<base>` element specifies the **base URL and/or default target for relative URLs in a document**.

It must be placed inside `<head>`.

Example:

```html
<head>

  <base href="https://example.com/">

</head>
```

Now a relative link:

```html
<a href="about">
  About
</a>
```

is resolved relative to:

```text
https://example.com/
```

So it becomes:

```text
https://example.com/about
```

### `target` With `<base>`

You can also specify a default target:

```html
<head>

  <base
    href="https://example.com/"
    target="_blank">

</head>
```

Now relative links can inherit that default browsing context unless they specify their own target.

### Important

A document should generally have **only one `<base>` element**.

Also, `<base>` can affect more than just `<a>` links.

It can affect resolution of relative URLs used by elements and resources such as:

```text
<a>
<img>
<script>
<link>
```

depending on how the URL is resolved.

### Potential Problem

Because `<base>` changes how relative URLs are resolved, it can cause unexpected behavior if used without understanding its effect.

For example:

```html
<base href="https://example.com/">
```

Then:

```html
<img src="images/logo.png" alt="Logo">
```

is resolved relative to:

```text
https://example.com/
```

rather than necessarily relative to the current document URL.

### Interview Answer

> The `<base>` element defines the base URL used to resolve relative URLs in a document. It can also define a default target for links. It is placed inside `<head>` and a document should generally contain only one `<base>` element.

### Remember

```text
<base>
→ Sets the base for relative URLs

href
→ Base URL

target
→ Default link target
```

---

# Hyperlink Security

## 112. What is Hyperlink Security?

Hyperlink security means using links safely so that navigation does not introduce unnecessary security or privacy risks.

One common case involves:

```html
target="_blank"
```

Example:

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer">

  Open Example

</a>
```

### Why Can `_blank` Matter?

A newly opened page may have access to the opener through:

```javascript
window.opener
```

Using:

```html
rel="noopener"
```

prevents the opened page from accessing the opener through that mechanism.

### `noreferrer`

Using:

```html
rel="noreferrer"
```

also prevents referrer information from being sent and provides opener protection.

### Example

Good practice:

```html
<a
  href="https://external.example"
  target="_blank"
  rel="noopener noreferrer">

  External Website

</a>
```

### Other Security Considerations

Be careful with URLs whose destinations are controlled by users or external data.

For example:

```html
<a href="USER_PROVIDED_URL">
  Click Here
</a>
```

You should validate and safely handle URLs rather than blindly trusting arbitrary input.

You generally do not want to accidentally create links to dangerous schemes such as:

```text
javascript:
```

### Interview Answer

> Hyperlink security involves safely handling navigation, especially when opening links in a new browsing context. Common practices include using `rel="noopener"` or `rel="noreferrer"` with appropriate `_blank` links and validating untrusted URLs.

### Remember

```text
target="_blank"
+
rel="noopener noreferrer"
→ Safer external link pattern
```

---

# SEO Links

## 113. What are SEO-Friendly Links?

SEO-friendly links are links that help users and search engines understand **where the link leads and what the destination represents**.

### Use Descriptive Link Text

Good:

```html
<a href="/css-flexbox">
  Learn CSS Flexbox
</a>
```

Bad:

```html
<a href="/css-flexbox">
  Click here
</a>
```

The first link tells both users and search engines what the destination is about.

### Why Is Descriptive Text Better?

Consider:

```html
<a href="/services">
  Click here
</a>
```

The phrase:

```text
Click here
```

provides almost no useful information.

Compare:

```html
<a href="/services">
  View our web development services
</a>
```

Now the purpose is much clearer.

### Use Meaningful URLs

Good:

```text
/services/web-development
```

Less descriptive:

```text
/page?id=123
```

Human-readable URLs can make the structure and purpose of pages easier to understand.

### Internal Linking

Use internal links to connect related pages.

Example:

```html
<p>
  Learn more about
  <a href="/css/flexbox">
    CSS Flexbox
  </a>
  before moving on to
  <a href="/css/grid">
    CSS Grid
  </a>.
</p>
```

This helps users discover related content and helps search engines understand relationships between pages.

### Avoid Excessive or Manipulative Links

Do not fill a page with unnecessary links just because you think more links automatically means better SEO.

Humans have to read the page too. A remarkable design feature of civilization.

Use links when they are useful and relevant.

### `nofollow`, `sponsored`, and `ugc`

Some links may need additional relationship information.

#### `nofollow`

```html
<a
  href="https://example.com"
  rel="nofollow">
  External Link
</a>
```

This tells search engines not to treat the link as a normal editorial endorsement.

#### `sponsored`

For paid or sponsored links:

```html
<a
  href="https://example.com"
  rel="sponsored">
  Sponsored Product
</a>
```

#### `ugc`

For links in user-generated content:

```html
<a
  href="https://example.com"
  rel="ugc">
  User Submitted Link
</a>
```

### Interview Answer

> SEO-friendly links use descriptive anchor text, meaningful URLs, and relevant internal linking so that users and search engines can better understand the destination and relationship between pages. Appropriate `rel` values such as `nofollow`, `sponsored`, and `ugc` can also be used when applicable.

### Remember

```text
SEO-friendly links
→ Descriptive text
→ Meaningful URLs
→ Relevant internal links
→ Correct rel values
```

---

# Final Revision Sheet

```text
Canonical
→ Preferred URL for duplicate/similar pages

Favicon
→ Website icon

<base>
→ Base URL for relative URLs

noopener
→ Protect opener

noreferrer
→ Hide referrer + opener protection

SEO links
→ Descriptive + useful + relevant links
```

# Most Important Interview Differences

## Canonical vs Normal Link

```text
<a href="/about">
→ User navigation
```

```html
<link
  rel="canonical"
  href="https://example.com/about">
```

```text
→ Tells search engines the preferred URL
```

---

## Favicon vs Canonical

```text
Favicon
→ Identifies the website visually

Canonical
→ Identifies the preferred URL
```

---

## `<base>` vs Canonical

```text
<base>
→ Changes how relative URLs are resolved

canonical
→ Tells search engines which URL is preferred
```

---

## `noopener` vs `noreferrer`

```text
noopener
→ Prevent opener access
```

```text
noreferrer
→ Don't send referrer information
→ Also provides opener protection
```

---

## SEO-Friendly Link

Remember this example:

```html
<a href="/frontend-development">
  Learn Frontend Development
</a>
```

Why is it good?

```text
Descriptive text
       ↓
Meaningful destination
       ↓
Useful to users
       ↓
Clearer to search engines
```

# Master Memory Trick

```text
Canonical
→ Which URL?

Favicon
→ Which website?

Base
→ Relative to what?

noopener
→ Protect opener

noreferrer
→ Hide referrer

SEO Link
→ Where am I going?
```















6. Images & Media (25)
- [ ] img Tag
- [ ] alt Attribute
- [ ] title Attribute
- [ ] Responsive Images
- [ ] srcset
- [ ] picture Element
- [ ] figure
- [ ] figcaption
- [ ] Lazy Loading
- [ ] Image Optimization
- [ ] SVG
- [ ] Canvas
- [ ] Audio
- [ ] Video
- [ ] Source Tag
- [ ] Track Tag
- [ ] Poster Image
- [ ] Controls
- [ ] Autoplay
- [ ] Muted
- [ ] Loop
- [ ] Media Accessibility
- [ ] Media Formats
- [ ] Image SEO
- [ ] Performance Best Practices

7. Tables (15)
- [ ] Table Structure
- [ ] tr
- [ ] td
- [ ] th
- [ ] caption
- [ ] thead
- [ ] tbody
- [ ] tfoot
- [ ] colspan
- [ ] rowspan
- [ ] scope
- [ ] Accessibility
- [ ] Responsive Tables
- [ ] Nested Tables
- [ ] Best Practices

8. Forms (35)
- [ ] Form Element
- [ ] Action Attribute
- [ ] Method Attribute
- [ ] GET vs POST
- [ ] Input Types
- [ ] Text Input
- [ ] Password
- [ ] Email
- [ ] Number
- [ ] Range
- [ ] Date
- [ ] Time
- [ ] Color
- [ ] File
- [ ] Radio
- [ ] Checkbox
- [ ] Select
- [ ] Option
- [ ] Optgroup
- [ ] Textarea
- [ ] Button Types
- [ ] Label
- [ ] Fieldset
- [ ] Legend
- [ ] Placeholder
- [ ] Required
- [ ] Pattern
- [ ] Min & Max
- [ ] Step
- [ ] Autocomplete
- [ ] Autofocus
- [ ] Disabled
- [ ] Readonly
- [ ] Native Validation
- [ ] Form Accessibility

9. Metadata & SEO (20)
- [ ] meta Tag
- [ ] Charset
- [ ] Viewport
- [ ] Description
- [ ] Keywords
- [ ] Robots
- [ ] Author
- [ ] Open Graph
- [ ] Twitter Cards
- [ ] Canonical URL
- [ ] Structured Data
- [ ] JSON-LD
- [ ] hreflang
- [ ] Manifest
- [ ] Theme Color
- [ ] Title Tag
- [ ] Meta Refresh
- [ ] SEO Best Practices
- [ ] Mobile SEO
- [ ] Core Web Vitals (HTML perspective)

10. Accessibility (25)
- [ ] What is Accessibility?
- [ ] WCAG
- [ ] Semantic HTML
- [ ] ARIA
- [ ] aria-label
- [ ] aria-labelledby
- [ ] aria-describedby
- [ ] role Attribute
- [ ] alt Text
- [ ] Keyboard Navigation
- [ ] Focus Management
- [ ] tabindex
- [ ] Skip Links
- [ ] Accessible Forms
- [ ] Accessible Tables
- [ ] Accessible Images
- [ ] Accessible Media
- [ ] Color Contrast
- [ ] Screen Readers
- [ ] Landmark Roles
- [ ] Live Regions
- [ ] Accessible Dialogs
- [ ] Common Accessibility Mistakes
- [ ] Accessibility Testing
- [ ] Best Practices

11. HTML APIs & Modern Features (15)
- [ ] Drag and Drop API
- [ ] Content Editable
- [ ] Web Storage
- [ ] Local Storage
- [ ] Session Storage
- [ ] Geolocation
- [ ] Web Workers (HTML integration)
- [ ] History API
- [ ] Custom Data Attributes
- [ ] Details & Summary
- [ ] Dialog Element
- [ ] Template Element
- [ ] Slot Element
- [ ] Popover Attribute
- [ ] HTML Living Standard



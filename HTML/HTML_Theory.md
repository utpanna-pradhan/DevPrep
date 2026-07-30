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
Variables
Loops
Functions
Conditions
Classes
Objects
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
- 
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
- ```html
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

 Body

├── H1

│      Hello

│

└── P

       World
- The parser reads HTML from top to bottom.

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

# 31. draggable
# 32.  spellcheck
# 33.  translate
# 34.  tabindex
# 35.  accesskey
# 36.  contenteditable
# 37.  data-* attributes
# 38.  Boolean Attributes
# 39.  Custom Attributes
# 40.  Attribute Inheritance
# 41.  Required vs Optional Attributes
# 42.  Attribute Order
# 43.  Inline Styles
# 44.  Attribute Best Practices
# 45.  Attribute Validation
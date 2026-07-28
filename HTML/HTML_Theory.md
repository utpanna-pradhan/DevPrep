# What is HTML?
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

Variables
Loops
Conditions
Functions
Algorithms

Therefore, HTML is a Markup Language, not a programming language.
```html
<h1>Welcome</h1>

<p>This is HTML.</p>

<img src="image.jpg" alt="Image">
<!-- HTML structures the page. -->
```

# History of HTML

# HTML5 Features
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
Better SEO
Better accessibility
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







# Why HTML is Not a Programming Language

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


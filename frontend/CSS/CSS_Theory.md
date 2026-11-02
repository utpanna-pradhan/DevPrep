# 1. What is the CSS Box Model?

The CSS Box Model describes how every HTML element is displayed as a rectangular box.

It has four parts:
1. Content: Actual text or image inside the element.
2. Padding: Space between content and border.
3. Border: Line surrounding the padding and content.
4. Margin: Space outside the border.

```html
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

To make width calculations easier:
* {
  box-sizing: border-box;
}


Now the declared width includes content, padding, and border.
The CSS Box Model consists of content, padding, border, and margin. It determines the size and spacing of HTML elements.

# 2. What is CSS Specificity and Cascade?

CSS specificity decides which CSS rule gets applied when multiple rules target the same element.
```html
<p id="text" class="heading">Hello World</p>
```

```css
p {
  color: blue;
}

.heading {
  color: green;
}

#text {
  color: red;
}
```

Selector	            Priority
Inline style	        Highest (among normal author styles)
ID selector	            High
Class selector	        Medium
Element selector	    Low
Universal selector *	Lowest

Output: Red, because the ID selector has higher specificity.

Specificity determines which CSS selector has higher priority. Generally, ID selectors have higher specificity than classes, and classes have higher specificity than element selectors.

# 3. What is Flexbox?

Flexbox is a CSS layout system used to arrange elements in one direction, either horizontally or vertically.

```html
<div class="container">
  <div>Box 1</div>
  <div>Box 2</div>
  <div>Box 3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

Property	            Purpose
display: flex	        Enables Flexbox
justify-content	        Aligns items along the main axis
align-items	            Aligns items along the cross axis
flex-direction	        Sets row or column direction
flex-wrap	            Allows items to move to another line
gap	                    Adds space between items

Flexbox is used to arrange and align elements in a row or column. It is especially useful for navigation bars, buttons, and card alignment.


# 4. What is CSS Grid?

CSS Grid is a two-dimensional layout system that arranges elements in rows and columns.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```
This creates three equal-width columns.
grid-template-columns: Defines columns.
grid-template-rows: Defines rows.
gap: Adds spacing.
grid-column: Controls how many columns an item spans.
grid-row: Controls how many rows an item spans.


CSS Grid is used to create two-dimensional layouts with rows and columns. It is useful for dashboards, galleries, and website layouts.

- Flexbox vs Grid:
Flexbox	                        Grid
One-dimensional	                Two-dimensional
Row or column	                Rows and columns
Navigation bars	                Page layouts
Content-driven alignment	    More structured layouts


# 5. Explain CSS positioning.

CSS positioning controls where an element appears on a webpage.

There are five main values.

1. Static
Default positioning. Elements follow normal document flow.
```css
.box {
  position: static;
}
```

2. Relative
Element stays in normal flow but can move relative to its original position.
```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```
Responsive design.



Media queries.



Mobile-first design.



Units: px, %, rem, em, vh, vw.



Pseudo-classes and pseudo-elements.



CSS transitions and animations.



# 12. What are CSS Variables?

CSS variables are reusable values that can be defined once and used throughout a stylesheet.


# 13. What are Overflow and Z-index?

Overflow controls what happens when content is larger than its container.

Value	        Meaning
visible	        Content can extend outside
hidden	        Extra content is clipped
scroll	        Scrollbars are provided
auto	        Scrollbars appear when needed

```css
.box {
  width: 200px;
  height: 100px;
  overflow: auto;
}
```
Z-index controls the stacking order of overlapping elements.

```css
.box1 {
  position: relative;
  z-index: 1;
}

.box2 {
  position: relative;
  z-index: 2;
}
```
Here, box2 appears above box1 when they overlap within the same stacking context.

Overflow controls how extra content is displayed, while z-index controls which overlapping element appears in front.

# 14. What are Responsive Images?

Responsive images automatically adjust to fit different screen sizes without overflowing or losing their proportions.

```css
img {
  max-width: 100%;
  height: auto;
}
```
```css
<picture>
  <source
    media="(max-width: 600px)"
    srcset="mobile.jpg"
  >

  <img src="desktop.jpg" alt="Website banner">
</picture>
```
The browser uses the mobile image when the viewport matches the media condition.

Responsive images adapt to different screen sizes. I use max-width, height auto, and the picture or srcset attributes to deliver suitable images.

# 15. What is Browser Compatibility?

Browser compatibility means ensuring that a website works correctly across different browsers and devices.

Examples:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

Ways to improve compatibility:
1. Use standard CSS and HTML.
2. Test on different browsers.
3. Use CSS feature detection when necessary.
4. Use appropriate fallbacks.
5. Use tools like Autoprefixer for vendor prefixes.
6. Test responsive layouts on different devices.

```css
.container {
  display: flex;
  gap: 20px;
}
```

You can also use tools like BrowserStack to test websites across browsers and devices.

Browser compatibility ensures that a website behaves consistently across different browsers.
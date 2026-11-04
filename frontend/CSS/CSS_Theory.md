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

The element moves 10px down and 20px right. Its original space is still reserved.

3. absolute

The element is removed from normal flow and positioned relative to its nearest positioned ancestor.

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
```
If no positioned ancestor exists, it is positioned relative to the initial containing block.

4. fixed
The element is positioned relative to the viewport and stays in place while scrolling.
```css
.button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```
floating WhatsApp buttons or back-to-top buttons.

5. sticky
The element behaves normally until it reaches a specified position, then sticks.
```css
.navbar {
  position: sticky;
  top: 0;
}
```

Common use: sticky navigation bars.

CSS positioning determines how an element is placed in the document. Static follows normal flow, relative moves from its original position, absolute is positioned relative to a containing block, fixed stays attached to the viewport, and sticky sticks after reaching a threshold.


# 6. What is responsive design?

Responsive design means creating websites that adapt to different screen sizes, such as mobile, tablet, and desktop.

```css
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}
```

This makes the container flexible while preventing it from becoming too wide.

Other common techniques:
- CSS media queries
- Flexbox
- CSS Grid
- Flexible widths
- Responsive images

Responsive design allows a website to adapt its layout and content to different screen sizes and devices.


# 7. What are media queries?

Media queries apply CSS styles based on conditions such as screen width.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

Explanation:
- Desktop: three columns.
- Tablet: two columns.
- Mobile: one column.

Media queries allow us to apply CSS styles based on device or viewport conditions, commonly screen width, to make layouts responsive.

# 8. What is mobile-first design?

Mobile-first design means writing the default CSS for smaller screens first, then adding styles for larger screens.

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
}

/* Tablet and larger */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and larger */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Why use it?
- Prioritizes mobile users.
- Encourages simpler layouts.
- Helps build responsive interfaces progressively.

Mobile-first design starts with styles for smaller screens and uses min-width media queries to enhance the layout for larger screens.


# 9. Explain CSS units: px, %, rem, em, vh, vw

Unit	  Meaning	          Example
px	    Pixel-based unit	                            font-size: 16px
%	      Relative to a reference size, often parent	  width: 80%
rem	    Relative to root font size	                  font-size: 2rem
em	    Relative to the element's font size context	  padding:1em
vh	    1% of viewport height	                        height: 100vh
vw	     1% of viewport width	                        width: 100vw

rem is based on the root element's font size.
em depends on the relevant element's font size; nested em sizing can compound.
% depends on the property and its reference context.

CSS units define sizes and spacing. Pixels are fixed-size units, percentages are relative, rem is based on the root font size, em is based on font-size context, and vh/vw are based on viewport dimensions.


# 10. What are pseudo-classes and pseudo-elements?

Pseudo-classes style an element based on its state or position.

Examples:
```css
button:hover {
  background: blue;
}

input:focus {
  border: 2px solid green;
}

li:first-child {
  color: red;
}
```

Common pseudo-classes:
- :hover
- :focus
- :active
- :first-child
- :checked

Pseudo-elements
Pseudo-elements style a specific part of an element or create generated content.
p::first-letter {
  font-size: 30px;
}

.box::before {
  content: "★ ";
}


Common pseudo-elements:
- ::before
- ::after
- ::first-letter
- ::placeholder

Pseudo-classes style elements based on states or positions, while pseudo-elements style specific parts of elements or generate content.

# 11. Explain CSS transitions and animations

CSS transition
A transition creates a smooth change between CSS property values, usually when a state changes.
```css
.button {
  background: blue;
  transition: background 0.3s ease;
}

.button:hover {
  background: red;
}
```
When the user hovers over the button, the background changes smoothly.

CSS animation
Animations use @keyframes to define multiple stages of an animation.
```css
.box {
  animation: move 2s infinite;
}

@keyframes move {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}


```


# 12. What are CSS Variables?

CSS variables are reusable values that can be defined once and used throughout a stylesheet.

They are also called CSS custom properties.

Example:
:root {
  --primary-color: #2563eb;
  --spacing: 20px;
  --border-radius: 8px;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}

.card {
  border: 2px solid var(--primary-color);
  padding: var(--spacing);
}


Explanation:
- Variables begin with --.
- :root makes them available globally.
- var() reads the variable's value.
- Updating one variable can update many elements.

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
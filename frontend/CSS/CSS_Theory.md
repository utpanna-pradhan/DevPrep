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

Browser compatibility means ensuring that a website works correctly across different browsers and devices. question 16 and do no

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

# CSS Interview Preparation: 50 Important Theory Questions and Answers (Q16–Q65)

## 16. What is CSS?

CSS stands for Cascading Style Sheets. It is used to style HTML elements and control the appearance of a webpage.

CSS controls:
- Colors and backgrounds.
- Fonts and text.
- Spacing and sizing.
- Layout and alignment.
- Animations and visual effects.

**Example:**
```css
h1 {
  color: blue;
  font-size: 32px;
}
```

## 17. What are the three ways to add CSS to HTML?

There are three ways:

**1. Inline CSS:** Written directly inside an HTML element using the style attribute.

```html
<h1 style="color: red;">Hello</h1>
```

**2. Internal CSS:** Written inside the `<style>` tag in the HTML document.

```html
<style>
  h1 {
    color: blue;
  }
</style>
```

**3. External CSS:** Written in a separate CSS file and connected using the link tag.

```html
<link rel="stylesheet" href="style.css">
```

External CSS is generally preferred for larger projects because it keeps HTML and CSS separate and reusable.

## 18. What is the difference between block, inline and inline-block elements?

These values control how elements behave in the page layout.

**Block:**
- Starts on a new line.
- Takes the available width by default.
- Supports width and height.

Example: `div`, `p`, `h1`.

**Inline:**
- Stays in the same line.
- Takes only the required content width.
- Width and height do not control its normal layout size.

Example: `span`, `a`, `strong`.

**Inline-block:**
- Stays in the same line.
- Supports width and height.
- Combines features of inline and block elements.

```css
.box {
  display: inline-block;
  width: 150px;
  height: 100px;
}
```

## 19. What is the difference between display: none and visibility: hidden?

Both hide an element, but they behave differently.

**display: none**
- Hides the element.
- Removes its layout space.

**visibility: hidden**
- Hides the element.
- Keeps its original layout space.

```css
.box1 {
  display: none;
}

.box2 {
  visibility: hidden;
}
```

## 20. What is the difference between opacity and visibility?

**opacity: 0**
- Makes an element completely transparent.
- Keeps its layout space.
- It can still receive pointer events and keyboard focus unless separately disabled.

**visibility: hidden**
- Hides the element.
- Keeps its layout space.
- Normally prevents interaction and keyboard focus.

```css
.box {
  opacity: 0;
}
```

## 21. What is the difference between float and clear in CSS?

**float** moves an element to the left or right, allowing surrounding text or inline content to wrap around it.

**clear** prevents an element from sitting alongside floated elements on the specified side.

```css
.image {
  float: left;
}

.footer {
  clear: both;
}
```

Float was commonly used for layouts in older websites. Modern layouts generally use Flexbox and Grid.

## 22. What is CSS inheritance?

Inheritance means some CSS properties are automatically passed from a parent element to its child elements.

For example, text color and font family are normally inherited.

```css
.parent {
  color: blue;
  font-family: Arial, sans-serif;
}
```

Child elements inside `.parent` inherit these properties unless overridden.

Not all CSS properties are inherited. For example, margin, padding and border are not inherited by default.

## 23. What are CSS selectors?

CSS selectors are used to target HTML elements so that styles can be applied to them.

Common selectors:

**Element selector**
```css
p {
  color: red;
}
```

**Class selector**
```css
.box {
  background: blue;
}
```

**ID selector**
```css
#header {
  height: 80px;
}
```

**Universal selector**
```css
* {
  margin: 0;
}
```

## 24. What are combinators in CSS?

Combinators define relationships between HTML elements.

There are four common combinators:

**1. Descendant selector (space):**
Selects elements inside another element at any depth.

```css
div p {
  color: red;
}
```

**2. Child selector (>):**
Selects only direct children.

```css
div > p {
  color: blue;
}
```

**3. Adjacent sibling selector (+):**
Selects the immediately following sibling.

```css
h2 + p {
  color: green;
}
```

**4. General sibling selector (~):**
Selects all following siblings.

```css
h2 ~ p {
  color: orange;
}
```

## 25. What are attribute selectors in CSS?

Attribute selectors target HTML elements based on their attributes or attribute values.

```css
input[type="text"] {
  border: 1px solid gray;
}

a[target="_blank"] {
  color: blue;
}
```

They are useful when we want to style elements based on specific HTML attributes.

## 26. What is the difference between ID and Class selectors?

**ID selector:**
- Uses `#`.
- Should identify one unique element per page.
- An HTML element can have only one ID value.

**Class selector:**
- Uses `.`.
- Can be reused on multiple elements.
- An element can have multiple classes.

```css
#header {
  background: black;
}

.card {
  padding: 20px;
}
```

## 27. What is the universal selector in CSS?

The universal selector `*` selects all elements in the document.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

It is commonly used in CSS resets and global styling.

## 28. What is the difference between margin collapse and normal margin spacing?

Margin collapse happens when certain vertical margins of block-level elements combine into one margin instead of adding together.

For example:

```css
.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}
```

Their vertical gap is generally 30px, not 50px, when their margins collapse.

Margin collapse does not normally happen with horizontal margins.

## 29. What is the difference between min-width, max-width and width?

- `width`: Sets the preferred width of an element.
- `min-width`: Sets the minimum allowed width.
- `max-width`: Sets the maximum allowed width.

```css
.container {
  width: 100%;
  min-width: 300px;
  max-width: 1200px;
}
```

These properties help control element sizing.

## 30. What is the difference between min-height, max-height and height?

- `height`: Sets the preferred height.
- `min-height`: Prevents the element from becoming too short.
- `max-height`: Limits the maximum height.

```css
.container {
  min-height: 100vh;
  max-height: 800px;
}
```

They are useful for controlling content containers and page sections.

## 31. What is the CSS calc() function?

`calc()` allows us to perform mathematical calculations directly inside CSS properties.

```css
.container {
  width: calc(100% - 40px);
  height: calc(100vh - 80px);
}
```

It supports addition, subtraction, multiplication and division, subject to CSS value and type rules.

It is useful for creating flexible layouts.

## 32. What are min(), max() and clamp() in CSS?

These CSS functions help create flexible sizes.

**min():** Selects the smallest value.

```css
width: min(100%, 1200px);
```

**max():** Selects the largest value.

```css
width: max(300px, 50%);
```

**clamp():** Sets a value between a minimum and maximum.

```css
font-size: clamp(20px, 4vw, 48px);
```

They are useful for responsive typography and layouts.

## 33. What is the difference between background-image and the img tag?

**background-image:**
- Used for decorative images.
- Can use background positioning and repeat properties.
- Does not provide alternative text.

**img tag:**
- Used for meaningful content images.
- Supports alt text.
- Supports image loading and responsive image attributes.

Use an image element when the image carries important information.

## 34. What are background properties in CSS?

Background properties control the appearance of an element's background.

Common properties:

- `background-color`: Sets background color.
- `background-image`: Adds a background image.
- `background-size`: Controls image size.
- `background-position`: Controls image position.
- `background-repeat`: Controls image repetition.
- `background-attachment`: Controls background scrolling behavior.

```css
.hero {
  background-image: url("banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

## 35. What is the difference between cover and contain?

Both are values of `background-size` and also commonly used with `object-fit`.

**cover:**
- Fills the entire container.
- May crop some parts of the image.

**contain:**
- Displays the complete image.
- May leave empty space inside the container.

```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
```

## 36. What is object-fit in CSS?

`object-fit` controls how an image or video fits inside its specified container.

Common values:

- `fill`: Stretches the content to fill the container.
- `contain`: Shows the complete image.
- `cover`: Fills the container, possibly cropping the image.
- `none`: Keeps its original size.
- `scale-down`: Uses the smaller result of none or contain.

```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
```

## 37. What is the difference between border and outline?

**Border:**
- Appears around an element's padding and content.
- Takes part in the box model.
- Can have different sides and styles.

**Outline:**
- Drawn outside the border.
- Does not take up layout space.
- Commonly used to show keyboard focus.

```css
button {
  border: 2px solid blue;
  outline: 2px solid orange;
}
```

## 38. What is border-radius in CSS?

`border-radius` is used to create rounded corners on elements.

```css
.card {
  border-radius: 12px;
}
```

To create a circular element:

```css
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```

## 39. What is box-shadow in CSS?

`box-shadow` adds shadow effects around an element.

```css
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

Syntax:

`box-shadow: horizontal vertical blur spread color;`

It is commonly used to create depth in cards, buttons and containers.

## 40. What is text-shadow in CSS?

`text-shadow` adds shadow effects to text.

```css
h1 {
  text-shadow: 2px 2px 4px gray;
}
```

It accepts horizontal offset, vertical offset, blur radius and color.

## 41. What are font properties in CSS?

Font properties control the appearance of text.

Common properties:

- `font-family`: Sets the font type.
- `font-size`: Sets text size.
- `font-weight`: Sets text thickness.
- `font-style`: Sets normal or italic style.
- `font-variant`: Controls font variants.
- `line-height`: Controls line spacing.

```css
h1 {
  font-family: Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
}
```

## 42. What is the difference between serif and sans-serif fonts?

**Serif:**
Fonts with small decorative strokes at the ends of letters.

Example: Times New Roman.

**Sans-serif:**
Fonts without decorative strokes.

Examples: Arial, Helvetica and Roboto.

Sans-serif fonts are commonly used in modern web interfaces.

## 43. What is line-height in CSS?

`line-height` controls the vertical space occupied by each line of text.

```css
p {
  font-size: 16px;
  line-height: 1.6;
}
```

It improves readability by providing appropriate spacing between lines.

## 44. What are text properties in CSS?

Text properties control how text appears.

Common properties:

- `text-align`: Aligns text.
- `text-decoration`: Adds underline or other decorations.
- `text-transform`: Changes letter capitalization.
- `letter-spacing`: Controls spacing between characters.
- `word-spacing`: Controls spacing between words.
- `text-indent`: Adds indentation to the first line.

```css
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}
```

## 45. What is the difference between relative and absolute font sizes?

**Relative font sizes:**
Depend on another font-size value or a scalable reference.

Examples: `em`, `rem`, `%`.

**Absolute CSS font-size keywords and units:**
Examples: `xx-small`, `small`, `large`, `px`, `pt`.

Relative units are useful when creating scalable and accessible designs.

## 46. What are CSS gradients?

Gradients create smooth transitions between two or more colors.

Three common types:

**Linear gradient:**
```css
.box {
  background: linear-gradient(to right, red, blue);
}
```

**Radial gradient:**
```css
.box {
  background: radial-gradient(circle, red, blue);
}
```

**Conic gradient:**
```css
.box {
  background: conic-gradient(red, yellow, blue);
}
```

Gradients are commonly used in backgrounds, buttons and hero sections.

## 47. What is the cursor property in CSS?

The `cursor` property controls the mouse pointer appearance when it moves over an element.

Common values:

- `pointer`: Hand cursor.
- `default`: Normal cursor.
- `not-allowed`: Indicates an unavailable action.
- `text`: Text selection cursor.
- `move`: Indicates movable content.
- `wait`: Indicates that the user should wait.

```css
button {
  cursor: pointer;
}
```

## 48. What is the user-select property?

`user-select` controls whether users can select text inside an element.

```css
button {
  user-select: none;
}
```

Common values:
- `auto`: Browser decides.
- `none`: Prevents text selection.
- `text`: Allows text selection.
- `all`: Selecting part of the text selects the entire element's text.

It should not be used to prevent users from copying normal content without a good reason.

## 49. What is the pointer-events property?

`pointer-events` controls whether an element can be the target of pointer interactions.

```css
.disabled {
  pointer-events: none;
}
```

Common values:
- `auto`: Normal pointer interaction.
- `none`: The element itself does not receive pointer events.

Note: It does not automatically disable keyboard interaction or form submission.

## 50. What is the difference between RGB, RGBA and HEX colors?

These are different ways of defining colors in CSS.

**HEX:**
```css
color: #ff0000;
```

**RGB:**
```css
color: rgb(255, 0, 0);
```

**RGBA:**
```css
color: rgba(255, 0, 0, 0.5);
```

- RGB defines red, green and blue values.
- RGBA also defines alpha transparency.
- HEX represents colors using hexadecimal notation.

## 51. What is HSL in CSS?

HSL stands for Hue, Saturation and Lightness.

```css
.box {
  background: hsl(240, 100%, 50%);
}
```

- Hue: Represents the color.
- Saturation: Controls color intensity.
- Lightness: Controls how light or dark the color is.

HSL makes it easier to create different shades of a color.

## 52. What is CSS reset?

A CSS reset removes or reduces browser default styles so developers can start with more predictable styling.

Example:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

It helps reduce unexpected differences caused by default browser styles.

## 53. What is Normalize.css?

Normalize.css is a CSS stylesheet that makes default browser styling more consistent across different browsers.

Unlike a traditional CSS reset, it preserves useful default styles while correcting inconsistencies.

It helps improve cross-browser consistency.

## 54. What is the !important rule in CSS?

`!important` gives a CSS declaration priority over normal declarations in the cascade.

```css
p {
  color: red !important;
}
```

It can override normal declarations regardless of their normal specificity.

However, it does not automatically win against every other important declaration. Cascade origin, importance, layers and specificity still matter.

It should be avoided unless genuinely necessary because it makes CSS harder to maintain.

## 55. What are vendor prefixes in CSS?

Vendor prefixes are browser-specific prefixes used for certain CSS features.

Examples:

- `-webkit-`: WebKit-based browser features.
- `-moz-`: Firefox-related features.
- `-ms-`: Older Microsoft browser features.

```css
.box {
  -webkit-user-select: none;
  user-select: none;
}
```

Modern CSS features usually do not need manual prefixes. Tools like Autoprefixer can generate necessary prefixes based on browser support targets.

## 56. What is a CSS preprocessor?

A CSS preprocessor is a tool that extends CSS with additional features and converts the code into regular CSS.

Popular examples:

- Sass/SCSS
- Less
- Stylus

Features can include:
- Variables.
- Nesting.
- Mixins.
- Functions.
- Reusable code.

Example in SCSS:

```scss
$primary-color: blue;

button {
  background: $primary-color;

  &:hover {
    background: darkblue;
  }
}
```

## 57. What is the difference between CSS and SCSS?

**CSS:**
- Standard stylesheet language.
- Directly understood by browsers.
- Does not provide built-in Sass variables or mixins.

**SCSS:**
- A syntax of Sass.
- Supports variables, nesting and mixins.
- Must be compiled into CSS before browsers can use it.

Example:

```scss
$color: red;

h1 {
  color: $color;
}
```

## 58. What is BEM in CSS?

BEM stands for Block, Element and Modifier.

It is a CSS naming methodology that makes class names organized and reusable.

**Block:** Independent component.

**Element:** Part of a block.

**Modifier:** Variation of a block or element.

Example:

```css
.card {
  padding: 20px;
}

.card__title {
  font-size: 24px;
}

.card--featured {
  background: lightblue;
}
```

BEM helps maintain clean CSS in larger projects.

## 59. What is CSS architecture?

CSS architecture means organizing CSS code so that it is reusable, maintainable and easy to manage.

Common practices:

- Use reusable classes.
- Follow consistent naming conventions.
- Separate component styles.
- Avoid unnecessary duplication.
- Keep selectors simple.
- Organize styles into logical files.

It becomes especially important in large applications.

## 60. What is the difference between @import and the link tag?

Both can load external CSS files.

**link tag:**
```html
<link rel="stylesheet" href="style.css">
```

It is written in HTML and is generally preferred for loading external stylesheets.

**@import:**
```css
@import url("style.css");
```

It is written inside CSS.

Using multiple CSS imports can delay stylesheet discovery and loading, so the link tag is generally preferred for important stylesheets.

## 61. What is CSS feature detection?

Feature detection checks whether a browser supports a particular CSS feature before applying specific styles.

CSS provides the `@supports` rule.

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

If the browser supports Grid, the styles inside the block are applied.

It helps provide fallbacks for unsupported features.

## 62. What is the difference between CSS transitions and animations in real projects?

Transitions usually happen when a CSS property changes from one state to another.

Animations can run automatically and define multiple stages using keyframes.

**Transition example:**
```css
button {
  transition: transform 0.3s ease;
}

button:hover {
  transform: scale(1.1);
}
```

**Animation example:**
```css
.box {
  animation: fade 2s infinite;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

Transitions are commonly used for hover effects, while animations are useful for loaders and repeated visual effects.

## 63. What are CSS logical properties?

Logical properties control layout based on writing direction rather than fixed physical directions such as left and right.

Examples:

- `margin-inline`
- `padding-block`
- `border-inline`
- `inset-inline-start`

```css
.box {
  margin-inline: 20px;
  padding-block: 10px;
}
```

They help support different writing directions, including right-to-left languages.

## 64. What is the prefers-reduced-motion media query?

It detects whether the user has requested reduced motion in their operating system or browser settings.

It helps make websites more accessible to users who prefer fewer animations.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In production, it is better to selectively reduce or remove nonessential motion rather than blindly overriding every animation.

## 65. What are container queries in CSS?

Container queries allow styles to change based on the size of a parent container instead of the entire viewport.

First, define a query container:

```css
.card-container {
  container-type: inline-size;
}
```

Then apply styles based on its width:

```css
@container (min-width: 500px) {
  .card {
    display: flex;
    gap: 20px;
  }
}
```

**Explanation:**

- Media queries respond to viewport or device conditions.
- Container queries respond to the size of a particular container.

They are useful for reusable components that need to adapt to different layouts.
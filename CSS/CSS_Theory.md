# CSS Fundamentals

## 1. What is CSS and how does it work with HTML?

### Simple Answer

**CSS (Cascading Style Sheets)** is used to **style and design HTML elements**.

HTML creates the **structure and content** of a webpage, while CSS controls **how that structure looks**.

Think of a website like a house:

- **HTML = Structure**
- **CSS = Design and appearance**
- **JavaScript = Behavior and interaction**

### Example

HTML:

```html
<h1>Hello World</h1>
```

CSS:

```css
h1 {
  color: blue;
  font-size: 40px;
}
```

HTML creates the heading.

CSS tells the browser how that heading should look.

### How CSS works with HTML

The basic process is:

```text
HTML
  ↓
Browser reads HTML
  ↓
DOM is created
  ↓
Browser reads CSS
  ↓
CSS rules are matched with HTML elements
  ↓
Styles are calculated
  ↓
Browser lays out and paints the page
```

### Remember

```text
HTML       → What exists?
CSS        → How does it look?
JavaScript → How does it behave?
```

### Interview Answer

> CSS is a stylesheet language used to control the presentation, styling, and layout of HTML elements. HTML provides the structure of a webpage, while CSS controls colors, fonts, spacing, sizes, positioning, and responsive layouts.

---

## 2. What are inline, internal, and external CSS?

There are three common ways to apply CSS to HTML:

1. Inline CSS
2. Internal CSS
3. External CSS

### 1. Inline CSS

CSS is written directly inside an HTML element using the `style` attribute.

```html
<p style="color: red; font-size: 20px;">
  Hello
</p>
```

The CSS applies directly to that particular element.

### Remember

```text
Inline → CSS is written inside the HTML element
```

### 2. Internal CSS

CSS is written inside a `<style>` tag, usually inside the `<head>`.

```html
<head>
  <style>
    p {
      color: red;
      font-size: 20px;
    }
  </style>
</head>
```

The styles can apply to multiple elements on that HTML page.

### Remember

```text
Internal → CSS is inside <style>
```

### 3. External CSS

CSS is written in a separate `.css` file.

HTML:

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

CSS:

```css
p {
  color: red;
  font-size: 20px;
}
```

External CSS is generally preferred for larger applications because it keeps styling separate from HTML and makes styles easier to reuse and maintain.

### Comparison

| Type | Where CSS is written | Common use |
|---|---|---|
| Inline | Inside the HTML element | Specific/small styling |
| Internal | Inside `<style>` | Single-page styling |
| External | Separate `.css` file | Real applications |

### Interview Answer

> CSS can be applied in three ways: inline, internal, and external. Inline CSS is written directly on an HTML element, internal CSS is written inside a `<style>` tag, and external CSS is written in a separate stylesheet. External CSS is generally preferred for larger applications because it improves organization, reuse, and maintainability.

### Remember

```text
Inline   → inside the element
Internal → inside <style>
External → separate .css file
```

---

## 3. What is the Cascade?

The **cascade** is the system CSS uses to decide **which CSS declaration should win when multiple rules apply to the same element and property**.

### Example

```css
p {
  color: blue;
}

p {
  color: red;
}
```

Both rules target the same `<p>`.

Both have the same specificity.

Therefore, the second rule wins:

```text
color: red;
```

Why?

Because it appears later in the stylesheet.

### Think of the Cascade Like a Competition

```text
Multiple CSS rules
        ↓
CSS compares their priority
        ↓
Cascade decides the winner
        ↓
Winning declaration is applied
```

The cascade considers things such as:

1. Origin and importance
2. Cascade layers
3. Specificity
4. Source order

### Example with Specificity

```css
p {
  color: blue;
}

.text {
  color: red;
}
```

HTML:

```html
<p class="text">Hello</p>
```

`.text` is a class selector.

`p` is an element selector.

A class selector has higher specificity than an element selector.

Therefore:

```text
red → wins
```

### Cascade vs Specificity

These are **not the same thing**.

```text
Cascade
   ↓
The complete system that decides which CSS declaration wins

Specificity
   ↓
One factor used by the cascade
```

### Interview Answer

> The CSS cascade is the process used by the browser to determine which CSS declaration should be applied when multiple rules target the same element. It considers factors such as importance, cascade layers, specificity, and source order.

### Remember

> **CSS rules fight. The cascade decides the winner.**

---

## 4. What is Inheritance?

**Inheritance means that certain CSS properties automatically get their value from a parent element and pass that value to its children.**

### Example

HTML:

```html
<div>
  <p>Hello</p>
</div>
```

CSS:

```css
div {
  color: blue;
}
```

The `<p>` will normally also have blue text.

Why?

Because `color` is an **inherited property**.

```text
div
 ↓
color: blue
 ↓
p inherits blue
```

### Common Inherited Properties

```text
color
font-family
font-size
line-height
text-align
```

### Common Non-Inherited Properties

```text
margin
padding
border
width
height
background
```

### Why Does Inheritance Exist?

Inheritance prevents us from repeating the same CSS for every child element.

Instead of:

```css
h1 {
  color: blue;
}

p {
  color: blue;
}

span {
  color: blue;
}
```

We can often write:

```css
body {
  color: blue;
}
```

Then the child elements can inherit the color.

### Important Point

**Not every CSS property is inherited.**

For example:

```css
body {
  color: blue;
}
```

Children can inherit `color`.

But:

```css
body {
  margin: 20px;
}
```

The children do **not** automatically get `margin: 20px`.

### Interview Answer

> CSS inheritance is the mechanism where certain properties of a parent element are automatically passed to its child elements. Properties such as `color` and `font-family` are commonly inherited, while properties such as `margin`, `padding`, and `width` are generally not inherited.

### Remember

> **Inheritance = Parent's style can flow down to children.**

But:

> **Only inheritable properties automatically flow down.**

---

## 5. What is the difference between `inherit`, `initial`, `unset`, and `revert`?

These are CSS keywords that tell the browser **where a property's value should come from**.

The easiest way to remember them is:

```text
inherit  → Take the parent's value
initial  → Use the property's initial value
unset    → Inherit if possible, otherwise initial
revert   → Go back to an earlier cascade value
```

---

## `inherit`

### Meaning

`inherit` means:

> **"Use the value from my parent element."**

### Example

```css
.parent {
  color: blue;
}

.child {
  color: inherit;
}
```

Result:

```text
Parent → blue
Child  → blue
```

### Remember

```text
inherit = parent value
```

---

## `initial`

### Meaning

`initial` means:

> **"Use the property's CSS-defined initial value."**

### Example

```css
.child {
  color: initial;
}
```

The browser uses the property's defined initial value rather than inheriting the parent's value.

### Remember

```text
initial = CSS initial value
```

---

## `unset`

### Meaning

`unset` behaves differently depending on whether the property is normally inherited.

```text
If property is normally inherited
        ↓
     inherit

If property is normally NOT inherited
        ↓
     initial
```

### Example

`color` is normally inherited:

```css
.child {
  color: unset;
}
```

Therefore:

```text
unset
  ↓
inherit
  ↓
parent's color
```

`margin` is normally not inherited:

```css
.child {
  margin: unset;
}
```

Therefore:

```text
unset
  ↓
initial
```

### Remember

```text
unset =
  inherited property     → inherit
  non-inherited property → initial
```

---

## `revert`

### Meaning

`revert` means:

> **"Go back to the value that would have been used from an earlier cascade origin."**

It is useful when you want to undo styling from your current stylesheet while allowing earlier browser or user styles to apply.

### Example

```css
button {
  all: revert;
}
```

This can remove your author-level styling and allow the browser's normal button styling to come back.

### Remember

```text
revert = go back in the cascade
```

---

## Easy Comparison

| Keyword | Simple Meaning |
|---|---|
| `inherit` | Take the parent's value |
| `initial` | Use the property's CSS initial value |
| `unset` | Inherit if normally inherited, otherwise use initial |
| `revert` | Go back to an earlier cascade origin |

### Best Memory Trick

```text
inherit
↓
PARENT

initial
↓
CSS INITIAL

unset
↓
NORMAL RESET

revert
↓
GO BACK
```

### Interview Answer

> `inherit` takes the value from the parent. `initial` resets the property to its CSS-defined initial value. `unset` behaves like `inherit` for inherited properties and like `initial` for non-inherited properties. `revert` rolls the value back to what would have applied from an earlier cascade origin.

### Final Memory Rule

```text
inherit  → Parent
initial  → Initial
unset    → Normal
revert   → Earlier cascade
```


# CSS Selectors and Specificity

## 1. What are the different types of CSS selectors?

A **CSS selector** is a pattern used to select HTML elements that we want to style.

Example:

```css
p {
  color: blue;
}
```

Here, `p` is the selector.

It tells CSS:

> Select all `<p>` elements and apply these styles.

### 1. Universal Selector `*`

Selects all elements.

```css
* {
  margin: 0;
  padding: 0;
}
```

### Remember

```text
* → Everything
```

### 2. Element / Type Selector

Selects elements based on their HTML tag name.

```css
p {
  color: blue;
}

h1 {
  font-size: 40px;
}
```

### Remember

```text
p  → all <p>
h1 → all <h1>
```

### 3. Class Selector `.`

Selects elements based on their `class` attribute.

HTML:

```html
<p class="text">Hello</p>
<div class="text">World</div>
```

CSS:

```css
.text {
  color: red;
}
```

Both elements with `class="text"` are selected.

### Remember

```text
. → class
```

### 4. ID Selector `#`

Selects an element based on its `id`.

HTML:

```html
<div id="header">Header</div>
```

CSS:

```css
#header {
  background: black;
}
```

### Remember

```text
# → ID
```

### 5. Attribute Selector

Selects elements based on their attributes.

```css
input[type="text"] {
  border: 1px solid black;
}

input[required] {
  border-color: red;
}

img[alt] {
  display: block;
}
```

### Remember

```text
[attribute] → select based on attributes
```

### 6. Descendant Selector

Selects elements that are inside another element at any nesting level.

```css
div p {
  color: blue;
}
```

This means:

> Select every `<p>` that is somewhere inside a `<div>`.

Example:

```html
<div>
  <section>
    <p>Hello</p>
  </section>
</div>
```

The `<p>` is selected.

### Remember

```text
A B → B anywhere inside A
```

### 7. Child Selector `>`

Selects only direct children.

```css
div > p {
  color: red;
}
```

Example:

```html
<div>
  <p>Selected</p>

  <section>
    <p>Not selected</p>
  </section>
</div>
```

Only the first `<p>` is selected.

### Remember

```text
A > B → B must be a direct child of A
```

### 8. Adjacent Sibling Selector `+`

Selects the element that comes immediately after another element.

```css
h2 + p {
  color: green;
}
```

Example:

```html
<h2>Title</h2>
<p>Selected</p>
<p>Not selected</p>
```

Only the first `<p>` is selected.

### Remember

```text
A + B → first B immediately after A
```

### 9. General Sibling Selector `~`

Selects all matching siblings that come after an element.

```css
h2 ~ p {
  color: purple;
}
```

Example:

```html
<h2>Title</h2>
<p>Selected</p>
<div>Something</div>
<p>Selected</p>
```

Both `<p>` elements after the `<h2>` are selected.

### Remember

```text
A ~ B → all B siblings after A
```

### 10. Grouping Selector `,`

Allows multiple selectors to share the same styles.

```css
h1,
h2,
h3 {
  font-family: Arial;
}
```

### Remember

```text
, → multiple selectors
```

### 11. Pseudo-Class Selector `:`

Selects an element based on its state, position, or condition.

```css
button:hover {
  background: black;
}

input:focus {
  border-color: blue;
}

li:first-child {
  color: red;
}
```

Common pseudo-classes:

```text
:hover
:focus
:active
:visited
:first-child
:last-child
:nth-child()
:not()
:checked
:disabled
```

### Remember

```text
: → state or condition
```

### 12. Pseudo-Element Selector `::`

Selects or creates a specific part of an element.

```css
p::first-letter {
  font-size: 40px;
}

p::first-line {
  font-weight: bold;
}

button::before {
  content: "→ ";
}
```

Common pseudo-elements:

```text
::before
::after
::first-letter
::first-line
::selection
```

### Remember

```text
:: → part of an element
```

### Selector Cheat Sheet

```text
*          → Universal
p          → Element
.class     → Class
#id        → ID
[attr]     → Attribute
A B        → Descendant
A > B      → Direct child
A + B      → Immediate sibling
A ~ B      → General sibling
A, B       → Grouping
:hover     → Pseudo-class
::before   → Pseudo-element
```

### Interview Answer

> CSS selectors are patterns used to target HTML elements for styling. Common selectors include universal, element, class, ID, attribute, descendant, child, sibling, grouping, pseudo-class, and pseudo-element selectors.

### Remember

> **Selectors answer: "Which HTML elements do I want to style?"**

---

## 2. What is selector specificity?

**Specificity is the priority system CSS uses to determine which selector wins when multiple selectors target the same element and property.**

In simple words:

> **Specificity tells CSS which selector is more specific.**

### Example

```css
p {
  color: blue;
}

.text {
  color: red;
}
```

HTML:

```html
<p class="text">Hello</p>
```

Both selectors target the same `<p>`.

But `.text` is more specific than `p`.

Therefore:

```text
red → wins
```

### Another Example

```css
p {
  color: blue;
}

.text {
  color: red;
}

#message {
  color: green;
}
```

HTML:

```html
<p id="message" class="text">
  Hello
</p>
```

All three selectors match.

The winner is:

```text
#message → green
```

because an ID selector has higher specificity than a class or element selector.

### Simplified Specificity Priority

```text
Inline styles
      ↓
ID
      ↓
Class / Attribute / Pseudo-class
      ↓
Element / Pseudo-element
      ↓
Universal
```

### Remember

> **More specific selector = higher priority.**

---

## 3. How is specificity calculated?

Specificity can be understood using four categories:

```text
A → Inline styles
B → IDs
C → Classes, attributes, pseudo-classes
D → Elements and pseudo-elements
```

We can represent specificity as:

```text
(A, B, C, D)
```

### 1. Inline Styles

Example:

```html
<p style="color: red;">
  Hello
</p>
```

Think of the specificity as:

```text
(1, 0, 0, 0)
```

### 2. ID Selectors

Example:

```css
#header {
  color: red;
}
```

Specificity:

```text
(0, 1, 0, 0)
```

### 3. Class, Attribute, and Pseudo-Class Selectors

Examples:

```css
.card {}

input[type="text"] {}

button:hover {}
```

Each contributes to the third category.

Example:

```text
.card
→ (0, 0, 1, 0)
```

### 4. Element and Pseudo-Element Selectors

Examples:

```css
p {}

div {}

p::before {}
```

Each contributes to the fourth category.

Example:

```text
p
→ (0, 0, 0, 1)
```

### Example

Consider:

```css
#container .card p {
  color: red;
}
```

Count:

```text
#container → 1 ID
.card      → 1 class
p          → 1 element
```

Specificity:

```text
(0, 1, 1, 1)
```

Another selector:

```css
.container .card p {
  color: blue;
}
```

Specificity:

```text
(0, 0, 2, 1)
```

The first selector wins:

```text
(0, 1, 1, 1)
```

because it contains an ID.

### How to Compare Specificity

Compare from left to right:

```text
Inline → ID → Class → Element
```

Example:

```text
(0, 1, 0, 0)
(0, 0, 10, 10)
```

The first selector wins because it has an ID.

Do not simply count the total number of selectors.

### Important Interview Point

This is wrong:

> 10 classes are always stronger than 1 ID.

Specificity is compared by category.

One ID beats any number of classes in normal specificity comparison.

### Special Case: `:where()`

`:where()` always has zero specificity.

```css
:where(#header .nav) {
  color: red;
}
```

Specificity:

```text
(0, 0, 0, 0)
```

Even though it contains an ID.

### Special Case: `:is()`

`:is()` takes the specificity of its most specific argument.

Example:

```css
:is(#header, .header) {
  color: red;
}
```

The specificity is based on the most specific selector inside `:is()`, which is `#header`.

### What About `!important`?

`!important` is not simply another specificity value.

It changes the priority of a declaration in the cascade.

Example:

```css
p {
  color: red !important;
}
```

Avoid using `!important` as the normal solution to specificity problems.

### Interview Answer

> CSS specificity is calculated based on the types of selectors used. Inline styles have the highest normal specificity, followed by IDs, then classes, attributes and pseudo-classes, and finally elements and pseudo-elements. Specificity is compared from the highest category to the lowest category.

### Remember

```text
Inline
  ↓
ID
  ↓
Class / Attribute / Pseudo-class
  ↓
Element / Pseudo-element
```

Simple memory:

```text
Inline → ID → Class → Element
```

---

## 4. What are pseudo-classes and pseudo-elements?

Pseudo-classes and pseudo-elements both start with `:` or `::`, but they have different purposes.

The easiest way to remember:

```text
Pseudo-class  → State or condition
Pseudo-element → Part of an element
```

### What is a Pseudo-Class?

A **pseudo-class** selects an element based on its state, position, or condition.

Syntax:

```css
selector:pseudo-class
```

### Example

```css
button:hover {
  background: black;
}
```

`:hover` applies when the mouse is over the button.

Other examples:

```css
input:focus {
  border-color: blue;
}

button:disabled {
  opacity: 0.5;
}

li:first-child {
  color: red;
}
```

Common pseudo-classes:

```text
:hover
:focus
:active
:visited
:checked
:disabled
:first-child
:last-child
:nth-child()
:nth-of-type()
:not()
```

### Remember

```text
button:hover
      ↑
"What state is the button in?"
```

### What is a Pseudo-Element?

A **pseudo-element** allows you to style a specific part of an element or create generated content.

Syntax:

```css
selector::pseudo-element
```

### Example

```css
p::first-letter {
  font-size: 40px;
}
```

This styles only the first letter of the paragraph.

Another example:

```css
p::first-line {
  font-weight: bold;
}
```

You can also create generated content:

```css
button::before {
  content: "→ ";
}
```

### Common Pseudo-Elements

```text
::before
::after
::first-letter
::first-line
::selection
```

### `::before` and `::after`

These are commonly used for decorative elements.

Example:

```css
.title::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 3px;
}
```

The `content` property is generally required for `::before` and `::after`.

### Pseudo-Class vs Pseudo-Element

| Pseudo-Class | Pseudo-Element |
|---|---|
| Selects based on state/condition | Selects a part of an element |
| Uses `:` | Uses `::` |
| `:hover` | `::before` |
| `:focus` | `::after` |
| `:checked` | `::first-letter` |
| `:nth-child()` | `::first-line` |

### Easy Memory Trick

```text
:  → Pseudo-class  → State / Condition

:: → Pseudo-element → Part of element
```

Think:

```text
:hover
  ↓
"What state is it in?"

::before
  ↓
"What part or generated content do I want?"
```

### Interview Answer

> A pseudo-class selects an element based on its state, position, or condition, such as `:hover`, `:focus`, and `:nth-child()`. A pseudo-element targets a specific part of an element or creates generated content, such as `::before`, `::after`, and `::first-letter`.

---

## 5. What is the difference between `:nth-child()` and `:nth-of-type()`?

Both are pseudo-classes used to select elements based on their position.

The key difference is:

```text
:nth-child()
      ↓
Counts ALL siblings

:nth-of-type()
      ↓
Counts only the SAME element type
```

### `:nth-child()`

`:nth-child()` looks at the element's position among **all its siblings**.

Example:

```html
<div class="container">
  <p>One</p>
  <div>Two</div>
  <p>Three</p>
</div>
```

Now:

```css
.container p:nth-child(2) {
  color: red;
}
```

Will this select anything?

**No.**

Let's number all children:

```text
1 → <p>One</p>
2 → <div>Two</div>
3 → <p>Three</p>
```

The second child is a `<div>`, not a `<p>`.

Therefore:

```css
p:nth-child(2)
```

does not match.

### Important

`:nth-child(2)` means:

> "Is this element the second child of its parent?"

It does **not** mean:

> "Give me the second `<p>`."

---

### `:nth-of-type()`

`:nth-of-type()` counts only siblings of the **same element type**.

Using the same HTML:

```html
<div class="container">
  <p>One</p>
  <div>Two</div>
  <p>Three</p>
</div>
```

CSS:

```css
.container p:nth-of-type(2) {
  color: red;
}
```

This selects:

```html
<p>Three</p>
```

Why?

The `<p>` elements are counted separately:

```text
<p>One</p>      → p #1
<div>Two</div>  → ignored
<p>Three</p>    → p #2
```

Therefore:

```text
p:nth-of-type(2)
        ↓
Second <p>
```

### Side-by-Side Example

HTML:

```html
<div>
  <p>Paragraph 1</p>
  <h2>Heading</h2>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>
```

### Using `:nth-child()`

```css
p:nth-child(2) {
  color: red;
}
```

Result:

```text
No match
```

Why?

The second child is:

```html
<h2>Heading</h2>
```

### Using `:nth-of-type()`

```css
p:nth-of-type(2) {
  color: blue;
}
```

Result:

```text
Paragraph 2 → blue
```

Because only `<p>` elements are counted:

```text
p #1 → Paragraph 1
p #2 → Paragraph 2
p #3 → Paragraph 3
```

### Easy Comparison

| Selector | What does it count? |
|---|---|
| `:nth-child(n)` | All sibling elements |
| `:nth-of-type(n)` | Only siblings of the same element type |

### Best Memory Trick

```text
:nth-child
    ↓
COUNT EVERYTHING

:nth-of-type
    ↓
COUNT SAME TYPE
```

Or remember:

```text
:nth-child(2)
→ "Am I the parent's 2nd child?"

:nth-of-type(2)
→ "Am I the 2nd element of my type?"
```

### Interview Answer

> `:nth-child()` selects an element based on its position among all sibling elements, while `:nth-of-type()` selects an element based on its position among siblings of the same element type.

### Final Example to Memorize

HTML:

```html
<div>
  <p>1</p>
  <span>2</span>
  <p>3</p>
</div>
```

```css
p:nth-child(2) {
  color: red;
}
```

**Nothing is selected**, because the second child is `<span>`.

```css
p:nth-of-type(2) {
  color: blue;
}
```

**`<p>3</p>` is selected**, because it is the second `<p>`.


# CSS Cascade, Specificity, and Cascade Layers

## 11. What happens when multiple CSS rules target the same element?

When multiple CSS rules target the **same element and the same CSS property**, the browser has to decide which rule should win.

The **CSS cascade** makes this decision.

Think of it like a competition:

```text
Multiple CSS rules
        ↓
Which declarations have priority?
        ↓
Which cascade layer?
        ↓
Which selector is more specific?
        ↓
If still equal → which rule comes later?
        ↓
Winning declaration is applied
```

### Example

```css
p {
  color: blue;
}

p {
  color: red;
}
```

HTML:

```html
<p>Hello</p>
```

Both rules target the same `<p>`.

Both selectors have the same specificity.

Therefore, the second rule wins because it appears later.

```text
color: red
```

### Example with Specificity

```css
p {
  color: blue;
}

.text {
  color: red;
}
```

HTML:

```html
<p class="text">Hello</p>
```

Both rules match.

But:

```text
p
↓
Element selector

.text
↓
Class selector
```

A class selector has higher specificity than an element selector.

Therefore:

```text
red → wins
```

### Example with an ID

```css
p {
  color: blue;
}

.text {
  color: red;
}

#title {
  color: green;
}
```

HTML:

```html
<p id="title" class="text">Hello</p>
```

All three rules match.

The ID selector wins because it has higher specificity.

```text
green → wins
```

### Important

Do not think:

> "The last CSS rule always wins."

That is wrong.

The last rule wins only when the competing declarations are otherwise tied in the cascade.

For example:

```css
#title {
  color: green;
}

p {
  color: red;
}
```

HTML:

```html
<p id="title">Hello</p>
```

The `p` rule comes later, but the result is still:

```text
green
```

Why?

Because:

```text
#title → ID selector
p      → Element selector
```

The ID has higher specificity.

### Interview Answer

> When multiple CSS rules target the same element and property, the browser uses the CSS cascade to determine which declaration wins. It considers factors such as importance, cascade layers, specificity, and source order. If the relevant priorities and specificity are equal, the later declaration wins.

### Remember

> **CSS does not blindly choose the last rule. The cascade chooses the highest-priority rule.**

---

## 12. What is the specificity hierarchy?

The **specificity hierarchy** describes the priority of different types of CSS selectors.

A simplified hierarchy is:

```text
Inline styles
      ↓
ID selectors
      ↓
Class / Attribute / Pseudo-class
      ↓
Element / Pseudo-element
      ↓
Universal selector
```

### 1. Inline Styles

Example:

```html
<p style="color: red;">
  Hello
</p>
```

Inline styles have very high normal author-level specificity.

### 2. ID Selector

Example:

```css
#title {
  color: blue;
}
```

Specificity:

```text
(0, 1, 0, 0)
```

### 3. Class Selector

Example:

```css
.title {
  color: green;
}
```

Specificity:

```text
(0, 0, 1, 0)
```

### 4. Attribute Selector

Example:

```css
input[type="text"] {
  border: 1px solid black;
}
```

An attribute selector belongs to the same specificity category as a class.

```text
(0, 0, 1, 0)
```

### 5. Pseudo-Class

Example:

```css
button:hover {
  background: black;
}
```

`:hover` belongs to the class/pseudo-class specificity category.

```text
(0, 0, 1, 0)
```

### 6. Element Selector

Example:

```css
p {
  color: blue;
}
```

Specificity:

```text
(0, 0, 0, 1)
```

### 7. Pseudo-Element

Example:

```css
p::before {
  content: "";
}
```

A pseudo-element contributes to the element specificity category.

```text
(0, 0, 0, 1)
```

### 8. Universal Selector

Example:

```css
* {
  margin: 0;
}
```

The universal selector contributes zero specificity.

```text
(0, 0, 0, 0)
```

### Specificity Table

| Selector | Specificity |
|---|---|
| Inline style | Inline |
| `#id` | ID |
| `.class` | Class |
| `[attribute]` | Attribute |
| `:hover` | Pseudo-class |
| `p` | Element |
| `::before` | Pseudo-element |
| `*` | Zero |

### Example

```css
#app .card p {
  color: red;
}
```

Count the selectors:

```text
#app  → 1 ID
.card → 1 class
p     → 1 element
```

Specificity:

```text
(0, 1, 1, 1)
```

Another selector:

```css
.container .card p {
  color: blue;
}
```

Specificity:

```text
(0, 0, 2, 1)
```

The first selector wins because it contains an ID.

### Important Rule

Do not simply add the number of selectors.

For example:

```text
(0, 1, 0, 0)
```

beats:

```text
(0, 0, 100, 100)
```

because specificity is compared from left to right.

The ID category is checked before the class category.

### Interview Answer

> CSS specificity determines the priority of selectors. In the normal specificity hierarchy, inline styles have very high priority, followed by IDs, then classes, attributes and pseudo-classes, and finally elements and pseudo-elements. The universal selector contributes zero specificity.

### Remember

```text
Inline
  ↓
ID
  ↓
Class / Attribute / Pseudo-class
  ↓
Element / Pseudo-element
  ↓
Universal
```

Simple memory:

```text
Inline → ID → Class → Element
```

---

## 13. What happens when specificity is equal?

When two CSS declarations have **equal specificity**, the browser looks at the next relevant cascade factors.

In the simple case, if everything else is equal:

> **The rule that appears later wins.**

### Example

```css
p {
  color: blue;
}

p {
  color: red;
}
```

Both selectors are:

```text
p
```

Therefore, both have the same specificity.

The second rule comes later.

So:

```text
red → wins
```

### Another Example

```css
.text {
  color: blue;
}

.text {
  color: green;
}
```

Both selectors have the same specificity:

```text
(0, 0, 1, 0)
```

The second rule wins.

Result:

```text
green
```

### Important

Source order matters only after the declarations are otherwise tied in the cascade.

Consider:

```css
#title {
  color: blue;
}

.text {
  color: red;
}
```

HTML:

```html
<p id="title" class="text">Hello</p>
```

The `.text` rule comes later.

But the result is:

```text
blue
```

Why?

Because specificity is not equal:

```text
#title → (0, 1, 0, 0)

.text  → (0, 0, 1, 0)
```

The ID wins before source order becomes relevant.

### Example with Same Specificity

```css
.card {
  color: blue;
}

.card {
  color: red;
}
```

Both have:

```text
(0, 0, 1, 0)
```

Therefore:

```text
Later rule → wins
```

Result:

```text
red
```

### Interview Answer

> When two declarations have equal specificity and are otherwise tied in the cascade, the declaration that appears later in source order wins.

### Remember

```text
Same specificity
       ↓
Check source order
       ↓
Later rule wins
```

### One-Line Memory Rule

> **Equal specificity → later rule wins.**

But remember:

> **Later does not beat higher specificity.**

---

## 14. How does `!important` work?

`!important` changes the **cascade priority** of a CSS declaration.

Example:

```css
p {
  color: red !important;
}
```

It tells the browser that this declaration should participate in the important-declaration part of the cascade.

### Normal CSS

```css
p {
  color: blue;
}

.text {
  color: red;
}
```

The `.text` selector is more specific than `p`.

Therefore:

```text
red → wins
```

### With `!important`

```css
p {
  color: blue !important;
}

.text {
  color: red;
}
```

The `p` declaration is important.

The `.text` declaration is normal.

The important declaration wins.

Result:

```text
blue
```

### Important: `!important` Is Not Specificity

This is a common interview mistake.

Do not say:

> "`!important` increases specificity."

That is incorrect.

The correct explanation is:

> **`!important` changes the cascade priority of the declaration.**

### Example

```css
#title {
  color: blue;
}

.text {
  color: red !important;
}
```

HTML:

```html
<p id="title" class="text">Hello</p>
```

Normally:

```text
#title
↓
Higher specificity
```

But:

```text
.text
↓
!important
```

The important declaration wins over the normal declaration.

Result:

```text
red
```

### What If Both Use `!important`?

Example:

```css
p {
  color: blue !important;
}

.text {
  color: red !important;
}
```

Now both declarations are important.

Specificity matters again.

```text
p      → element selector
.text  → class selector
```

The class selector has higher specificity.

Therefore:

```text
red → wins
```

### Same Specificity + Both Important

```css
.text {
  color: blue !important;
}

.text {
  color: red !important;
}
```

Both have the same specificity.

Both are important.

Therefore, assuming the other cascade factors are equal:

```text
Later rule → wins
```

Result:

```text
red
```

### Why Should You Avoid Too Much `!important`?

Using `!important` everywhere makes CSS difficult to maintain.

For example:

```css
.title {
  color: red !important;
}

.card .title {
  color: blue !important;
}

#app .card .title {
  color: green !important;
}
```

Now you have created a specificity war.

The CSS becomes harder to understand and change.

Prefer fixing the underlying selector or cascade structure.

### When Can `!important` Be Useful?

It can be appropriate in some situations, such as:

- Overriding third-party CSS
- Certain utility classes
- User styles and accessibility needs
- Situations where intentional cascade priority is required

But it should not be your default solution.

### Interview Answer

> `!important` changes the cascade priority of a CSS declaration. It does not increase selector specificity. An important declaration can override a normal declaration, but when multiple important declarations compete, the browser continues using the cascade rules such as origin, layers, specificity, and source order.

### Remember

```text
!important
     ↓
Changes cascade priority
     ↓
NOT specificity
```

---

## 15. What are CSS cascade layers?

**CSS cascade layers** allow developers to organize CSS into named layers and control their priority in the cascade.

They are created using:

```css
@layer
```

They are especially useful in large projects where CSS from many sources can conflict.

### Why Do We Need Cascade Layers?

Imagine a project containing:

```text
Browser styles
      ↓
Third-party library
      ↓
Framework
      ↓
Base styles
      ↓
Component styles
      ↓
Utility styles
```

Without cascade layers, developers may need increasingly specific selectors to control which styles win.

Cascade layers give us a cleaner way to organize priority.

### Basic Example

```css
@layer base {
  p {
    color: blue;
  }
}

@layer components {
  p {
    color: red;
  }
}
```

For normal declarations, the later layer has higher priority.

Therefore:

```text
components
     ↓
higher priority
     ↓
red wins
```

### Creating Named Layers

You can define layers like this:

```css
@layer reset;
@layer base;
@layer components;
@layer utilities;
```

Then use them:

```css
@layer reset {
  * {
    margin: 0;
    padding: 0;
  }
}

@layer base {
  body {
    font-family: Arial, sans-serif;
  }
}

@layer components {
  .button {
    padding: 10px 20px;
  }
}

@layer utilities {
  .text-center {
    text-align: center;
  }
}
```

### Defining Layer Order

You can explicitly define the order:

```css
@layer reset, base, components, utilities;
```

For normal declarations, the later layer has higher priority.

Therefore:

```text
utilities
    ↓
components
    ↓
base
    ↓
reset
```

### Example

```css
@layer base {
  .button {
    color: blue;
  }
}

@layer components {
  .button {
    color: red;
  }
}
```

Both selectors have the same specificity.

But:

```text
components
     ↓
later layer
     ↓
higher priority
```

Therefore:

```text
red → wins
```

### Cascade Layers Can Prevent Specificity Wars

Consider:

```css
@layer framework {
  #app .button {
    color: blue;
  }
}

@layer application {
  .button {
    color: red;
  }
}
```

The framework selector contains an ID and therefore has higher specificity.

However, cascade layer priority is considered before specificity.

If the application layer has higher priority for normal declarations, the application rule can win without requiring an even more specific selector.

This is one of the major benefits of cascade layers.

### Important Rule About `!important`

There is a special rule for important declarations.

For **normal declarations**:

```text
Later layer
     ↓
Higher priority
```

For **important declarations**:

```text
Earlier layer
     ↓
Higher priority
```

Example:

```css
@layer base {
  p {
    color: blue !important;
  }
}

@layer components {
  p {
    color: red !important;
  }
}
```

Because both declarations are important, the layer order is reversed.

The earlier `base` layer wins.

Therefore:

```text
blue → wins
```

You do not need to memorize every edge case immediately. Remember the main rule first:

```text
Normal:
Later layer → stronger

Important:
Earlier layer → stronger
```

### What About CSS Outside Layers?

CSS that is not inside a layer is called **unlayered CSS**.

For normal author declarations, unlayered declarations have higher priority than layered normal declarations.

Example:

```css
@layer components {
  .button {
    color: blue;
  }
}

.button {
  color: red;
}
```

The unlayered rule wins.

Result:

```text
red
```

### Why Use Cascade Layers?

Cascade layers are useful because they let you intentionally organize CSS priority.

For example:

```text
@layer reset
      ↓
@layer base
      ↓
@layer components
      ↓
@layer utilities
```

This can make large CSS codebases easier to maintain.

### Interview Answer

> CSS cascade layers are a feature that allows developers to organize CSS into named layers and control their priority in the cascade. They help manage CSS conflicts and reduce the need for highly specific selectors. For normal declarations, later layers have higher priority, while important declarations use the reverse layer order.

### Remember

```text
@layer
   ↓
Organize CSS
   ↓
Control cascade priority
   ↓
Reduce specificity conflicts
```

### Final Memory Sheet

```text
Multiple rules
      ↓
Cascade decides the winner

Specificity:
Inline → ID → Class → Element

Equal specificity:
Later rule wins

!important:
Changes cascade priority
NOT specificity

@layer:
Controls cascade priority
and helps organize CSS
```

### Most Important Mental Model

When CSS rules compete, think:

```text
Cascade
   ↓
Importance / Origin
   ↓
Cascade Layer
   ↓
Specificity
   ↓
Source Order
```

The key idea is:

> **Specificity is not the whole cascade. It is only one step in the cascade decision.**

# CSS Box Model and Spacing

## 16. Explain the CSS Box Model.

The **CSS box model** explains how the browser calculates the size and space occupied by every HTML element.

Every element is treated like a box with four parts:

```text
┌──────────────────────────────────────┐
│               Margin                 │
│  ┌────────────────────────────────┐  │
│  │            Border              │  │
│  │  ┌──────────────────────────┐  │  │
│  │  │         Padding          │  │  │
│  │  │  ┌────────────────────┐  │  │  │
│  │  │  │      Content       │  │  │  │
│  │  │  └────────────────────┘  │  │  │
│  │  └──────────────────────────┘  │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

The four parts are:

```text
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

### 1. Content

The **content** is the actual information inside the element.

For example:

```html
<div>Hello World</div>
```

`Hello World` is the content.

If we write:

```css
.box {
  width: 200px;
  height: 100px;
}
```

With the default `box-sizing: content-box`, the `width` and `height` refer to the **content area**.

### 2. Padding

**Padding** is the space between the content and the border.

```css
.box {
  padding: 20px;
}
```

Think:

```text
Content
   ↓
Padding
   ↓
Border
```

Padding creates space **inside** the element.

### 3. Border

The **border** surrounds the padding and content.

```css
.box {
  border: 2px solid black;
}
```

Think:

```text
Content
   ↓
Padding
   ↓
Border
```

### 4. Margin

**Margin** is the space outside the border.

```css
.box {
  margin: 20px;
}
```

Margin creates space **outside** the element.

### Easy Visual

```text
Margin
  ↓
┌──────────────────────┐
│ Border               │
│  ┌────────────────┐  │
│  │ Padding        │  │
│  │  ┌──────────┐  │  │
│  │  │ Content  │  │  │
│  │  └──────────┘  │  │
│  └────────────────┘  │
└──────────────────────┘
```

### Example

```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 30px;
}
```

The element consists of:

```text
Content
Padding
Border
Margin
```

### Important Formula

With the default `content-box`:

```text
Total width =
content width
+ left padding
+ right padding
+ left border
+ right border
+ left margin
+ right margin
```

For example:

```text
width = 200px
padding = 20px on each side
border = 5px on each side
margin = 30px on each side
```

The visible box width is:

```text
200 + 20 + 20 + 5 + 5
= 250px
```

The total space occupied including margins is:

```text
250 + 30 + 30
= 310px
```

### Important Distinction

Margin is not part of the element's box dimensions in the same way padding and border are.

Think:

```text
Content + Padding + Border
        ↓
Element's box

Margin
   ↓
Space outside the box
```

### Interview Answer

> The CSS box model describes how the browser calculates the size of an element. Every element consists of content, padding, border, and margin. Content is the actual content, padding is space inside the border, border surrounds the padding, and margin creates space outside the border.

### Remember

```text
Content → Actual content
Padding → Space inside
Border  → Surrounds the content and padding
Margin  → Space outside
```

---

## 17. What is the difference between `content-box` and `border-box`?

`content-box` and `border-box` are values of the CSS `box-sizing` property.

They determine **what the declared `width` and `height` represent**.

```css
box-sizing: content-box;
```

or:

```css
box-sizing: border-box;
```

---

### `content-box`

`content-box` is the default value.

With:

```css
box-sizing: content-box;
```

the declared `width` and `height` apply only to the **content area**.

Padding and border are added outside that width and height.

### Example

```css
.box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

The content width is:

```text
200px
```

Padding:

```text
20px left
20px right
```

Border:

```text
5px left
5px right
```

Total visible width:

```text
200
+ 20
+ 20
+ 5
+ 5
= 250px
```

So:

```text
Declared width = 200px

Actual box width = 250px
```

---

### `border-box`

With:

```css
box-sizing: border-box;
```

the declared `width` and `height` include:

```text
Content
+ Padding
+ Border
```

### Example

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

Now the total box width is:

```text
200px
```

The padding and border are included inside those 200px.

Therefore:

```text
Total width = 200px
```

The content area becomes smaller to make room for padding and border.

Calculation:

```text
200
- 20
- 20
- 5
- 5
= 150px
```

So:

```text
Total box width = 200px
Content width   = 150px
```

### Visual Difference

#### `content-box`

```text
width: 200px

┌──────────────────────────────┐
│       Content 200px          │
└──────────────────────────────┘
     + padding + border

Actual width > 200px
```

#### `border-box`

```text
width: 200px

┌──────────────────────┐
│ Border               │
│ ┌──────────────────┐ │
│ │ Padding          │ │
│ │ ┌──────────────┐ │ │
│ │ │   Content    │ │ │
│ │ └──────────────┘ │ │
│ └──────────────────┘ │
└──────────────────────┘

Total width = 200px
```

### Comparison

| Property | `content-box` | `border-box` |
|---|---|---|
| Default | Yes | No |
| Declared width includes content | Yes | Yes |
| Includes padding | No | Yes |
| Includes border | No | Yes |
| Easier for predictable layouts | Less | More |

### Interview Answer

> With `content-box`, the declared width and height apply only to the content, so padding and border are added outside them. With `border-box`, the declared width and height include the content, padding, and border.

### Remember

```text
content-box
→ width = content only

border-box
→ width = content + padding + border
```

---

## 18. Why is `box-sizing: border-box` commonly used?

`box-sizing: border-box` is commonly used because it makes element dimensions **more predictable and easier to control**.

With `border-box`:

```css
* {
  box-sizing: border-box;
}
```

If you say:

```css
.card {
  width: 300px;
}
```

the entire box remains:

```text
300px
```

even if you add padding and border.

### Without `border-box`

Using the default:

```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
```

The actual width becomes:

```text
300
+ 20
+ 20
+ 2
+ 2
= 344px
```

That can cause unexpected layout problems.

### With `border-box`

```css
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
```

Total width remains:

```text
300px
```

The content area adjusts automatically.

```text
300
- 20
- 20
- 2
- 2
= 256px
```

### Why This Is Useful

Suppose you have:

```css
.container {
  width: 100%;
}

.container {
  padding: 20px;
}
```

With `content-box`, padding can make the element's total size larger than expected.

With `border-box`:

```text
width: 100%
      ↓
padding stays inside
      ↓
box remains within the declared width
```

This makes responsive layouts easier to reason about.

### Common Global Rule

You will often see:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

This applies `border-box` to all elements and their pseudo-elements.

### Why Include `::before` and `::after`?

Pseudo-elements can also have dimensions and padding/borders.

So:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

ensures the same box-sizing behavior applies to them.

### Interview Answer

> `box-sizing: border-box` is commonly used because it makes width and height more predictable. The declared dimensions include padding and border, which makes responsive layouts and component sizing easier to manage.

### Remember

```text
border-box
     ↓
Declared width stays predictable
     ↓
Padding + border fit inside it
```

---

## 19. What is margin collapsing?

**Margin collapsing** is a CSS behavior where the vertical margins of certain block-level elements combine into a single margin instead of adding together.

This mainly happens with **vertical margins**.

### Simple Example

HTML:

```html
<div class="box1"></div>
<div class="box2"></div>
```

CSS:

```css
.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}
```

You might expect:

```text
30px + 20px = 50px
```

But the margins can collapse.

The resulting space can be:

```text
30px
```

The larger margin wins.

```text
max(30px, 20px)
= 30px
```

### Important

Margin collapsing usually applies to:

```text
Vertical margins
```

Not:

```text
Horizontal margins
```

For example:

```css
.box1 {
  margin-right: 30px;
}

.box2 {
  margin-left: 20px;
}
```

These horizontal margins do not collapse into one margin.

### Think of It Like This

Two vertical margins:

```text
30px
  ↓
[Element 1]
  ↓
20px
  ↓
[Element 2]
```

Instead of:

```text
30 + 20 = 50px
```

they can collapse to:

```text
max(30, 20)
= 30px
```

### What If Both Margins Are Positive?

Example:

```css
.first {
  margin-bottom: 40px;
}

.second {
  margin-top: 20px;
}
```

Collapsed margin:

```text
40px
```

### What If One Is Negative?

Negative margins make the calculation more interesting.

For example:

```text
positive margin = 40px
negative margin = -10px
```

The resulting collapsed margin is:

```text
40px - 10px
= 30px
```

### What If Both Are Negative?

The more negative value is used.

For example:

```text
-20px
-40px
```

Result:

```text
-40px
```

You do not need to memorize the advanced mathematical rules immediately.

For interviews, first remember:

> **Vertical margins of certain block elements can collapse into one margin.**

### Interview Answer

> Margin collapsing is a CSS behavior where vertical margins of certain block-level elements combine into a single margin instead of being added together. When two positive margins collapse, the larger margin generally wins.

### Remember

```text
Vertical margins
      ↓
Can collapse
      ↓
Usually the larger positive margin wins
```

---

## 20. When does margin collapse happen?

Margin collapsing can happen in several situations.

The most important ones are:

```text
1. Adjacent block siblings
2. Parent and first child
3. Parent and last child
4. Empty block elements
```

Let's understand each one.

---

### 1. Adjacent Block Siblings

This is the most common case.

HTML:

```html
<div class="one"></div>
<div class="two"></div>
```

CSS:

```css
.one {
  margin-bottom: 30px;
}

.two {
  margin-top: 20px;
}
```

The two vertical margins can collapse.

Instead of:

```text
30 + 20 = 50px
```

the resulting margin is generally:

```text
30px
```

### Remember

```text
Sibling 1 → margin-bottom
Sibling 2 → margin-top
             ↓
        Can collapse
```

---

### 2. Parent and First Child

Consider:

```html
<div class="parent">
  <p class="child">Hello</p>
</div>
```

CSS:

```css
.child {
  margin-top: 30px;
}
```

If there is no border, padding, inline content, or other separation preventing the collapse, the child's top margin can collapse with the parent's top margin.

This can produce a surprising result:

```text
Parent
  ↓
Child margin appears to move outside the parent
```

### Important

A common way to prevent this is adding padding or border to the parent.

For example:

```css
.parent {
  padding-top: 1px;
}
```

Now the parent's padding separates the child from the parent's edge, preventing that particular margin collapse.

Another modern technique is:

```css
.parent {
  display: flow-root;
}
```

This creates a new block formatting context and prevents the parent's margins from collapsing with its children.

---

### 3. Parent and Last Child

The same idea can happen with the bottom margin of the last child.

HTML:

```html
<div class="parent">
  <p class="child">Hello</p>
</div>
```

CSS:

```css
.child {
  margin-bottom: 30px;
}
```

If there is no border, padding, height, min-height, or other content separating the bottom margin, the child's bottom margin can collapse with the parent's bottom margin.

### Preventing It

Adding padding or border can prevent the collapse:

```css
.parent {
  padding-bottom: 1px;
}
```

Or:

```css
.parent {
  display: flow-root;
}
```

---

### 4. Empty Block Elements

An empty block element can also have its top and bottom margins collapse.

Example:

```html
<div class="empty"></div>
```

CSS:

```css
.empty {
  margin-top: 20px;
  margin-bottom: 30px;
}
```

If the element has:

```text
No content
No height
No padding
No border
```

its top and bottom margins can collapse.

The resulting margin is generally:

```text
30px
```

because:

```text
max(20px, 30px)
= 30px
```

---

### When Does Margin NOT Collapse?

Margin collapse does not happen in many situations.

For example, margins generally do not collapse across:

```text
Flex containers
Grid containers
Absolutely positioned elements
Fixed positioned elements
Floats
```

Also, padding and borders can prevent parent-child margin collapse.

### Example: Flexbox

```css
.container {
  display: flex;
  flex-direction: column;
}
```

Margins of flex items do not collapse with each other.

### Example: Grid

```css
.container {
  display: grid;
}
```

Grid items' margins do not collapse with each other.

### Important Interview Point

Do not say:

> "All vertical margins always collapse."

That is false.

Margin collapsing occurs only in specific block formatting contexts and relationships.

### Interview Answer

> Margin collapsing can occur between adjacent block-level siblings, between a parent and its first or last child, and with certain empty block elements. It mainly affects vertical margins. Flex and grid items do not have their margins collapsed with each other.

### Remember

```text
Common margin collapse cases:

Sibling margins
      ↓
Parent + first child
      ↓
Parent + last child
      ↓
Empty block
```

---

## 21. Why doesn't padding collapse?

Padding does not collapse because **padding belongs to the element's box**, while margin represents external spacing between elements.

### Margin

Margin creates space **outside** the element.

```text
Margin
  ↓
outside the box
```

Because margins represent external spacing between boxes, CSS allows certain vertical margins to collapse.

### Padding

Padding creates space **inside** the element.

```text
┌─────────────────────┐
│       Padding       │
│   ┌─────────────┐   │
│   │   Content   │   │
│   └─────────────┘   │
└─────────────────────┘
```

Padding is part of the element's box.

Therefore, it does not collapse with another element's padding.

### Example

```css
.box1 {
  padding-bottom: 30px;
}

.box2 {
  padding-top: 20px;
}
```

The padding does not collapse.

The spacing between the content and the relevant box edges is preserved according to each element's box.

### Why?

Because padding has a different job from margin.

```text
Margin
  ↓
Space outside the element

Padding
  ↓
Space inside the element
```

Margin collapsing exists because CSS has special rules for combining certain external vertical margins.

Padding is part of the element's own box and therefore does not participate in margin collapsing.

### Important Example

Suppose:

```css
.parent {
  padding-top: 20px;
}

.child {
  margin-top: 30px;
}
```

The parent's padding prevents the child's top margin from touching the parent's outer edge.

Think:

```text
Parent
┌────────────────────────┐
│ Padding: 20px           │
│    ↓                    │
│    Child                │
│    margin-top: 30px     │
└────────────────────────┘
```

The padding creates a boundary between the parent and child.

### Margin vs Padding

| Margin | Padding |
|---|---|
| Outside the element | Inside the element |
| Can collapse in some situations | Does not collapse |
| Separates elements | Separates content from border |
| Not part of the box's content/padding/border area | Part of the element's box |
| Can be negative | Cannot be negative |

### Interview Answer

> Padding does not collapse because padding is part of an element's own box and represents internal spacing. Margin collapsing is a special behavior for certain vertical margins between or around block-level elements. Padding always remains part of the element's box.

### Remember

```text
Margin
→ Outside
→ Can collapse

Padding
→ Inside
→ Does NOT collapse
```

### Final Box Model Memory

```text
            MARGIN
              ↓
    ┌─────────────────────┐
    │       BORDER        │
    │  ┌───────────────┐  │
    │  │    PADDING    │  │
    │  │  ┌─────────┐  │  │
    │  │  │ CONTENT │  │  │
    │  │  └─────────┘  │  │
    │  └───────────────┘  │
    └─────────────────────┘
```

Remember:

```text
Content → What is inside
Padding → Space inside
Border  → Edge of the box
Margin  → Space outside
```

And the two most important box-sizing rules:

```text
content-box
→ width/height = content only

border-box
→ width/height = content + padding + border
```

And the most important margin rule:

```text
Vertical margins
       ↓
Can collapse

Padding
       ↓
Does not collapse
```

# CSS Units and Responsive Measurements

## 22. What is the difference between `px`, `%`, `em`, and `rem`?

CSS units tell the browser **how much size, spacing, or distance an element should have**.

The four important units here are:

```text
px
%
em
rem
```

They are not interchangeable.

---

### 1. `px`

`px` means **CSS pixel**.

It is commonly used when you want a relatively fixed size.

Example:

```css
.box {
  width: 300px;
  padding: 20px;
  border: 1px solid black;
}
```

Here:

```text
width  → 300px
padding → 20px
border → 1px
```

The value does not depend directly on the parent element's size or font size.

### Example

```css
button {
  padding: 12px 24px;
  border-radius: 8px;
}
```

`px` is commonly useful for:

- Borders
- Small spacing
- Icons
- Precise dimensions
- UI elements where a fixed CSS size is appropriate

### Remember

```text
px → relatively fixed CSS size
```

---

### 2. `%`

`%` is a **relative unit**.

Its meaning depends on the property and its containing context.

For properties such as `width`, a percentage is commonly calculated relative to the containing block.

Example:

```css
.container {
  width: 100%;
}

.child {
  width: 50%;
}
```

If the container is:

```text
1000px
```

then the child's width is:

```text
50% of 1000px
= 500px
```

### Example

```css
.container {
  width: 800px;
}

.box {
  width: 50%;
}
```

The box width becomes approximately:

```text
400px
```

### Important

Do not memorize:

> `%` always means percentage of the parent.

That is too simplistic.

The reference used by `%` depends on **which CSS property you are using**.

For example, percentage values for width, height, padding, margin, and other properties have different rules.

For basic responsive layouts, think:

```text
% → relative to a containing context
```

### Remember

```text
% → relative size
```

---

### 3. `em`

`em` is a relative unit based on **font size**.

Its exact reference depends on where the value is used, which is why `em` can sometimes be confusing.

For an element's own `font-size`, `em` is based on the inherited font size from its parent.

For other properties such as `padding`, `margin`, and `width`, `em` is based on the element's computed font size.

### Example

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

The child gets:

```text
2 × 20px
= 40px
```

So:

```text
child font-size = 40px
```

### `em` Can Compound

This is where beginners sometimes get ambushed by CSS.

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;
}

.grandchild {
  font-size: 1.5em;
}
```

The child:

```text
1.5 × 20px
= 30px
```

The grandchild:

```text
1.5 × 30px
= 45px
```

So:

```text
Parent       → 20px
Child        → 30px
Grandchild   → 45px
```

This happens because `em` can compound through nested elements when used for font sizes.

### Remember

```text
em → relative to font size
```

---

### 4. `rem`

`rem` means **root em**.

It is relative to the font size of the root element, usually:

```html
<html>
```

The root element is represented by:

```css
:root
```

or:

```css
html
```

### Example

```css
html {
  font-size: 16px;
}

.box {
  width: 20rem;
}
```

Then:

```text
1rem = 16px

20rem = 20 × 16px
      = 320px
```

So:

```text
width = 320px
```

### Example

```css
html {
  font-size: 16px;
}

.heading {
  font-size: 2rem;
}

.text {
  font-size: 1rem;
}
```

Result:

```text
heading → 32px
text    → 16px
```

### Why Developers Like `rem`

`rem` provides a consistent reference point.

Unlike nested `em` values, `rem` does not compound based on the font size of every parent.

### Remember

```text
rem → relative to root font size
```

---

## Quick Comparison

| Unit | Relative To | Example |
|---|---|---|
| `px` | CSS pixel | `20px` |
| `%` | Property-dependent containing context | `50%` |
| `em` | Font-size context | `2em` |
| `rem` | Root element's font size | `2rem` |

### Easy Memory Trick

```text
px  → Fixed-ish
%   → Context
em  → Element font size
rem → Root font size
```

---

## 23. What is the difference between `em` and `rem`?

Both `em` and `rem` are **relative units based on font size**, but they use different reference points.

The easiest way to remember:

```text
em  → current element's font-size context
rem → root element's font-size
```

---

### `em`

`em` depends on the font-size context.

Example:

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

The child becomes:

```text
2 × 20px
= 40px
```

So:

```text
child = 40px
```

### `em` Can Compound

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}

.grandchild {
  font-size: 2em;
}
```

Calculations:

```text
Parent:
20px

Child:
2 × 20px
= 40px

Grandchild:
2 × 40px
= 80px
```

Result:

```text
Parent      → 20px
Child       → 40px
Grandchild  → 80px
```

This compounding behavior can become difficult to control in deeply nested components.

---

### `rem`

`rem` always refers to the root element's font size.

Example:

```css
html {
  font-size: 16px;
}

.parent {
  font-size: 20px;
}

.child {
  font-size: 2rem;
}
```

The child is:

```text
2 × 16px
= 32px
```

The parent's `20px` does not change the `rem` calculation.

Result:

```text
parent → 20px
child  → 32px
```

### Comparison

```text
em
↓
Depends on font-size context
↓
Can compound

rem
↓
Depends on root font-size
↓
Does not compound through nested parents
```

### Example Side by Side

```css
html {
  font-size: 16px;
}

.parent {
  font-size: 24px;
}

.child-em {
  font-size: 2em;
}

.child-rem {
  font-size: 2rem;
}
```

Results:

```text
.child-em
→ 2 × 24px
→ 48px

.child-rem
→ 2 × 16px
→ 32px
```

### When Would You Use `em`?

`em` can be useful when you want a component's spacing or sizing to scale with its own typography.

Example:

```css
.button {
  font-size: 1rem;
  padding: 0.75em 1.5em;
}
```

If the button's font size changes, its padding scales with it.

This can be useful for reusable components.

### When Would You Use `rem`?

`rem` is commonly used for:

- Font sizes
- Spacing systems
- Consistent component dimensions
- Global design systems

Example:

```css
.card {
  padding: 1.5rem;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
}
```

### Interview Answer

> `em` is relative to the relevant font-size context and can compound when nested, while `rem` is relative to the root element's font size and provides a consistent reference throughout the document.

### Remember

```text
em
→ Element/context font size
→ Can compound

rem
→ Root font size
→ Consistent reference
```

### Best Memory Trick

Think:

```text
em  → E = Element
rem → R = Root
```

---

## 24. What are `vw` and `vh`?

`vw` and `vh` are **viewport-relative units**.

The viewport is the visible area of the browser window.

### `vw`

`vw` means **viewport width**.

```text
1vw = 1% of the viewport width
```

Therefore:

```text
100vw = 100% of viewport width
```

### Example

```css
.box {
  width: 50vw;
}
```

If the viewport width is:

```text
1200px
```

then:

```text
50vw
= 50% of 1200px
= 600px
```

---

### `vh`

`vh` means **viewport height**.

```text
1vh = 1% of the viewport height
```

Therefore:

```text
100vh = 100% of viewport height
```

### Example

```css
.hero {
  height: 100vh;
}
```

If the viewport height is:

```text
800px
```

then:

```text
100vh = 800px
```

The element attempts to fill the viewport height.

---

### Common Example

A full-screen hero section:

```css
.hero {
  width: 100vw;
  height: 100vh;
}
```

This means:

```text
Width  → viewport width
Height → viewport height
```

### Important Mobile Problem

`100vh` historically caused problems on mobile browsers because the visible viewport can change when browser UI such as the address bar appears or disappears.

For example:

```text
Browser UI visible
       ↓
Available viewport changes

Browser UI hidden
       ↓
Available viewport changes again
```

This is one reason newer viewport units such as `dvh`, `svh`, and `lvh` exist.

### `vw` vs `%`

These are not always the same.

```css
.box {
  width: 50%;
}
```

Usually means 50% of the containing block.

Whereas:

```css
.box {
  width: 50vw;
}
```

means 50% of the viewport width.

### Example

```text
Parent width = 800px
Viewport width = 1200px
```

Then:

```text
50%  → 400px
50vw → 600px
```

### Interview Answer

> `vw` and `vh` are viewport-relative units. `1vw` represents 1% of the viewport width, while `1vh` represents 1% of the viewport height.

### Remember

```text
vw → Viewport Width

vh → Viewport Height
```

---

## 25. What are `dvh`, `svh`, and `lvh`?

`dvh`, `svh`, and `lvh` are newer **viewport height units** designed to handle dynamic browser UI, especially on mobile devices.

They solve problems that can occur when using `100vh` on mobile.

The three units mean:

```text
svh → Small Viewport Height
lvh → Large Viewport Height
dvh → Dynamic Viewport Height
```

---

### Why Were These Units Introduced?

On mobile browsers, the visible area can change when browser UI appears or disappears.

For example:

```text
Address bar visible
        ↓
Smaller available viewport

Address bar hidden
        ↓
Larger available viewport
```

A single `vh` value could therefore produce undesirable layouts.

The newer units give developers more control.

---

## `svh` — Small Viewport Height

`svh` means **small viewport height**.

It represents the viewport height when the browser's dynamic UI is taking up more space.

Think:

```text
svh
 ↓
Smallest practical viewport
```

For example:

```css
.hero {
  min-height: 100svh;
}
```

This is useful when you want content to fit safely within the smaller viewport.

### Remember

```text
svh → Small
```

---

## `lvh` — Large Viewport Height

`lvh` means **large viewport height**.

It represents the viewport height when the browser's dynamic UI is minimized or hidden.

Think:

```text
lvh
 ↓
Largest viewport
```

Example:

```css
.hero {
  min-height: 100lvh;
}
```

This can use the maximum available viewport height.

### Remember

```text
lvh → Large
```

---

## `dvh` — Dynamic Viewport Height

`dvh` means **dynamic viewport height**.

It changes as the browser UI changes.

Think:

```text
dvh
 ↓
Dynamic
 ↓
Changes with the current viewport
```

Example:

```css
.hero {
  min-height: 100dvh;
}
```

As the mobile browser UI expands or collapses, the dynamic viewport value can change accordingly.

### Remember

```text
dvh → Dynamic
```

---

## Easy Comparison

```text
svh
↓
Small viewport height
↓
Stable smaller size

lvh
↓
Large viewport height
↓
Stable larger size

dvh
↓
Dynamic viewport height
↓
Changes with current viewport
```

### Comparison Table

| Unit | Meaning | Simple Idea |
|---|---|---|
| `svh` | Small Viewport Height | Smaller viewport |
| `lvh` | Large Viewport Height | Larger viewport |
| `dvh` | Dynamic Viewport Height | Changes dynamically |

### Example

```css
.hero {
  min-height: 100dvh;
}
```

This is often useful for mobile-friendly full-screen sections.

But don't blindly replace every `100vh` with `100dvh`.

The correct unit depends on the behavior you want.

### Interview Answer

> `svh`, `lvh`, and `dvh` are viewport height units designed to handle dynamic browser UI on mobile devices. `svh` represents the small viewport height, `lvh` represents the large viewport height, and `dvh` represents the dynamically changing viewport height.

### Memory Trick

```text
S = Small
L = Large
D = Dynamic
```

Therefore:

```text
svh → Small
lvh → Large
dvh → Dynamic
```

---

## 26. When would you use relative units?

Relative units are useful when you want your layout or typography to **adapt to different screen sizes, parent sizes, or font sizes**.

Common relative units include:

```text
%
em
rem
vw
vh
dvh
svh
lvh
```

### 1. Use `%` for Relative Container Sizes

Use `%` when an element should scale relative to its containing block.

Example:

```css
.container {
  width: 80%;
}
```

This allows the container to become wider or narrower as its containing block changes.

Good for:

```text
Responsive widths
Fluid layouts
Columns
Containers
```

---

### 2. Use `rem` for Consistent Typography and Spacing

`rem` is useful when you want values based on the root font size.

Example:

```css
h1 {
  font-size: 2rem;
}

.card {
  padding: 1.5rem;
}

.section {
  margin-bottom: 3rem;
}
```

This creates a consistent sizing system.

Think:

```text
rem
 ↓
Global design scale
```

---

### 3. Use `em` for Component-Relative Scaling

Use `em` when you want a component's dimensions or spacing to scale with its font size.

Example:

```css
.button {
  font-size: 1rem;
  padding: 0.75em 1.5em;
}
```

If the button's font size changes, the padding scales with it.

This can be useful for reusable components.

Think:

```text
em
 ↓
Component typography relationship
```

---

### 4. Use `vw` for Viewport-Based Width

Use `vw` when something should scale based on the viewport width.

Example:

```css
.hero-title {
  font-size: 5vw;
}
```

As the viewport gets wider, the text size grows.

However, using raw `vw` for typography can make text too small or too large.

A common modern solution is:

```css
.hero-title {
  font-size: clamp(2rem, 5vw, 5rem);
}
```

Now:

```text
Minimum → 2rem
Preferred → 5vw
Maximum → 5rem
```

This creates more controlled responsive typography.

---

### 5. Use `vh` for Viewport Height

Use `vh` when an element should relate to the viewport height.

Example:

```css
.hero {
  min-height: 80vh;
}
```

This makes the hero roughly 80% of the viewport height.

---

### 6. Use `dvh` for Mobile Full-Height Sections

For mobile layouts where the browser UI changes dynamically:

```css
.hero {
  min-height: 100dvh;
}
```

This makes the section respond to the current dynamic viewport height.

---

### 7. Use `svh` When You Want Safer Small-Viewport Sizing

Example:

```css
.hero {
  min-height: 100svh;
}
```

This can be useful when ensuring content fits within the smaller viewport state.

---

### 8. Use `lvh` When You Want the Large Viewport

Example:

```css
.hero {
  min-height: 100lvh;
}
```

This is useful when you intentionally want to size against the large viewport.

---

## Real-World Example

A responsive card might use several units together:

```css
.card {
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
  border-radius: 0.75rem;
}

.card-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}
```

Here:

```text
90%
→ Responsive width

400px
→ Maximum width

1.5rem
→ Consistent spacing

0.75rem
→ Consistent radius

4vw
→ Responsive preferred font size

clamp()
→ Prevents the font from becoming too small or large
```

### Should You Always Use Relative Units?

No.

That would be another classic CSS superstition.

Use the unit that matches the requirement.

For example:

```css
border: 1px solid black;
```

Using:

```text
1px
```

is perfectly reasonable.

You do not need:

```css
border: 0.0625rem solid black;
```

just because `rem` exists.

### Practical Rule

```text
px
→ Precise small/fixed values

%
→ Relative to containing context

rem
→ Global typography and spacing

em
→ Component-relative scaling

vw
→ Viewport width

vh
→ Viewport height

dvh
→ Dynamic viewport height

svh
→ Small viewport height

lvh
→ Large viewport height
```

### Interview Answer

> Relative units are useful when a layout needs to adapt to its context. I would commonly use percentages for fluid widths, `rem` for consistent typography and spacing, `em` when component sizing should scale with its font size, and viewport units such as `vw`, `vh`, or the newer `dvh`, `svh`, and `lvh` for viewport-based layouts.

### Final Memory Sheet

```text
px
→ CSS pixel
→ Precise/fixed-ish sizing

%
→ Relative to containing context
→ Fluid layouts

em
→ Font-size based
→ Can compound

rem
→ Root font-size based
→ Consistent sizing

vw
→ Viewport width

vh
→ Viewport height

svh
→ Small viewport height

lvh
→ Large viewport height

dvh
→ Dynamic viewport height
```

### The Most Important Differences

```text
em vs rem

em
→ Element/context font size

rem
→ Root font size
```

```text
% vs vw

%
→ Usually related to containing block/property rules

vw
→ Viewport width
```

```text
vh vs dvh

vh
→ Traditional viewport-height unit

dvh
→ Dynamic viewport-height unit
→ Better suited to changing mobile browser UI
```

### One-Line Memory Rule

> **Use relative units when the size should adapt; use fixed units when you need predictable, precise dimensions.**
# CSS Display

## 27. What is the difference between `block`, `inline`, and `inline-block`?

The `display` property controls **how an element participates in the layout**.

The three important values are:

```text
block
inline
inline-block
```

---

### 1. `display: block`

A block element normally:

- Starts on a new line
- Takes the available width by default
- Allows `width` and `height`
- Allows `margin` and `padding`

Example:

```css
.box {
  display: block;
  width: 300px;
  height: 100px;
}
```

HTML:

```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>
```

The boxes normally appear one below another:

```text
┌──────────────┐
│    Box 1     │
└──────────────┘

┌──────────────┐
│    Box 2     │
└──────────────┘
```

Common block-level elements include:

```text
div
p
section
article
header
footer
h1 - h6
```

### Remember

```text
block
↓
New line
↓
Usually takes available width
↓
width/height work
```

---

### 2. `display: inline`

An inline element:

- Does not normally start on a new line
- Takes only as much horizontal space as its content needs
- `width` and `height` generally do not apply as they do to block-level boxes
- Horizontal margins and padding work
- Vertical margins do not affect layout in the same way as block elements

Example:

```css
span {
  display: inline;
}
```

HTML:

```html
<span>Hello</span>
<span>World</span>
```

They appear on the same line when there is enough space:

```text
Hello World
```

Common inline elements include:

```text
span
a
strong
em
```

### Example

```css
span {
  display: inline;
  width: 300px;
  height: 100px;
}
```

The `width` and `height` do not make the inline element behave like a 300px × 100px block.

### Remember

```text
inline
↓
Stays in the text flow
↓
Does not start a new line
↓
width/height do not work like block elements
```

---

### 3. `display: inline-block`

`inline-block` combines important characteristics of both inline and block.

It:

- Sits inline with other elements
- Allows `width` and `height`
- Allows padding and margins
- Does not automatically start a new line

Example:

```css
.box {
  display: inline-block;
  width: 150px;
  height: 100px;
}
```

HTML:

```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>
```

They can appear side by side:

```text
┌──────────────┐  ┌──────────────┐
│    Box 1     │  │    Box 2     │
└──────────────┘  └──────────────┘
```

### Why Is `inline-block` Useful?

Suppose you want two elements:

```text
Side by side
+
Custom width
+
Custom height
```

`inline-block` can provide that behavior.

### Comparison

| Property | `block` | `inline` | `inline-block` |
|---|---|---|---|
| Starts new line | Yes | No | No |
| Takes available width by default | Yes | No | No |
| Width works | Yes | Not like a block | Yes |
| Height works | Yes | Not like a block | Yes |
| Can sit beside other elements | No, normally | Yes | Yes |
| Padding works | Yes | Yes | Yes |

### Important Modern CSS Note

Today, flexbox and grid are usually preferred for complex layouts instead of relying on `inline-block`.

For example:

```css
.container {
  display: flex;
  gap: 20px;
}
```

This gives much more control over alignment and spacing.

### Interview Answer

> A block element starts on a new line and normally takes the available width. An inline element stays within the text flow and does not behave like a block box for width and height. An inline-block element stays inline but allows width and height like a block-level box.

### Remember

```text
block
→ New line
→ Width/height work

inline
→ Same line
→ Width/height don't behave like block

inline-block
→ Same line
→ Width/height work
```

---

## 28. What is the difference between `display: none`, `visibility: hidden`, and `opacity: 0`?

All three can make an element appear invisible, but they behave very differently.

The key difference is:

```text
display: none
→ Removed from layout

visibility: hidden
→ Keeps layout space

opacity: 0
→ Keeps layout space and becomes transparent
```

---

### 1. `display: none`

`display: none` removes the element from the layout.

Example:

```css
.box {
  display: none;
}
```

The element:

```text
Does not appear
Does not take up layout space
```

Example:

```html
<div class="box">Hello</div>
<div>World</div>
```

If `.box` has:

```css
.box {
  display: none;
}
```

The result is effectively:

```text
World
```

There is no empty space where the box was.

### Remember

```text
display: none
↓
Not rendered as a box
↓
No layout space
```

---

### 2. `visibility: hidden`

The element becomes invisible, but its layout space is preserved.

Example:

```css
.box {
  visibility: hidden;
}
```

HTML:

```html
<div class="box">Hello</div>
<div>World</div>
```

The browser still reserves space for the first element:

```text
[ Empty space where Hello was ]

World
```

### Remember

```text
visibility: hidden
↓
Invisible
↓
Space remains
```

---

### 3. `opacity: 0`

`opacity: 0` makes the element completely transparent.

Example:

```css
.box {
  opacity: 0;
}
```

The element still participates in layout.

Unlike `display: none`, it still exists as a rendered element and can still affect interaction depending on the situation.

For example, an element with:

```css
opacity: 0;
```

can still receive pointer events unless you disable them separately.

If you want it not to receive pointer events:

```css
.box {
  opacity: 0;
  pointer-events: none;
}
```

### Remember

```text
opacity: 0
↓
Transparent
↓
Layout space remains
↓
Can still be interactive unless interaction is disabled
```

---

### Comparison

| Property | Visible? | Layout Space? | Can Receive Pointer Events? |
|---|---|---|---|
| `display: none` | No | No | No |
| `visibility: hidden` | No | Yes | Generally no |
| `opacity: 0` | No visually | Yes | Yes, unless disabled |

### Important Difference

Think about a person hiding a chair:

```text
display: none
→ Remove the chair completely

visibility: hidden
→ Chair is invisible but still occupies space

opacity: 0
→ Chair is transparent but still exists
```

CSS has apparently decided that invisible furniture needs three different philosophical states.

### When Would You Use Each?

#### Use `display: none`

When the element should not participate in the layout.

Example:

```css
.mobile-menu {
  display: none;
}
```

#### Use `visibility: hidden`

When the element should remain in its layout position but not be visible.

#### Use `opacity: 0`

When you want transparency, especially for animations.

Example:

```css
.modal {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal.show {
  opacity: 1;
}
```

### Interview Answer

> `display: none` removes an element from the layout. `visibility: hidden` hides the element but preserves its layout space. `opacity: 0` makes the element transparent while keeping it in the layout, and it can still receive pointer events unless those are disabled.

### Remember

```text
display: none
→ Gone from layout

visibility: hidden
→ Invisible + space remains

opacity: 0
→ Transparent + space remains
```

---

## 29. What is `display: flex`?

`display: flex` turns an element into a **flex container** and its direct children become **flex items**.

Flexbox is mainly designed for arranging elements in **one dimension**:

```text
Row
or
Column
```

Example:

```css
.container {
  display: flex;
}
```

HTML:

```html
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

By default, the items are arranged in a row:

```text
One   Two   Three
```

### Flex Container

The parent is called the:

```text
Flex container
```

The direct children are called:

```text
Flex items
```

Example:

```css
.container {
  display: flex;
}
```

```text
.container
     ↓
Flex Container
     ↓
┌───────┬───────┬───────┐
│ One   │ Two   │ Three │
└───────┴───────┴───────┘
   ↑       ↑       ↑
Flex items
```

### Main Axis

Flexbox has two important axes:

```text
Main axis
Cross axis
```

By default:

```css
flex-direction: row;
```

The main axis is horizontal:

```text
←──────── Main Axis ────────→
```

The cross axis is vertical:

```text
        ↑
        │
        │ Cross Axis
        │
        ↓
```

### `flex-direction`

You can change the direction:

```css
.container {
  display: flex;
  flex-direction: column;
}
```

Now:

```text
One
Two
Three
```

### `justify-content`

Controls alignment along the **main axis**.

Example:

```css
.container {
  display: flex;
  justify-content: center;
}
```

Items move toward the center of the main axis.

Common values:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

### `align-items`

Controls alignment along the **cross axis**.

Example:

```css
.container {
  display: flex;
  align-items: center;
}
```

### Example

A common centered layout:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

This centers the flex items along both axes when the container has the relevant available space.

### `gap`

Flexbox supports `gap` for spacing between items.

```css
.container {
  display: flex;
  gap: 20px;
}
```

This is usually cleaner than adding margins to every child.

### Why Use Flexbox?

Flexbox is excellent for:

```text
Navigation bars
Buttons
Cards in a row
Centering elements
Horizontal layouts
Vertical layouts
Small component layouts
```

### Interview Answer

> `display: flex` turns an element into a flex container and its direct children into flex items. Flexbox is mainly used for one-dimensional layouts, allowing developers to control direction, alignment, spacing, and distribution of items along a main axis and cross axis.

### Remember

```text
display: flex
      ↓
Parent = Flex container
      ↓
Children = Flex items
      ↓
One-dimensional layout
      ↓
Row or column
```

---

## 30. What is `display: grid`?

`display: grid` turns an element into a **grid container** and its direct children become **grid items**.

CSS Grid is designed primarily for **two-dimensional layouts**:

```text
Rows
+
Columns
```

Example:

```css
.container {
  display: grid;
}
```

HTML:

```html
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

### Creating Columns

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

This creates three columns:

```text
┌────────┬────────┬────────┐
│  One   │  Two   │ Three  │
├────────┼────────┼────────┤
│  Four  │        │        │
└────────┴────────┴────────┘
```

### What Is `fr`?

`fr` means **fraction of the available space** in the grid container.

Example:

```css
.container {
  grid-template-columns: 1fr 1fr;
}
```

The available space is divided into two equal fractions.

```text
1fr : 1fr

50% : 50%
```

Another example:

```css
.container {
  grid-template-columns: 1fr 2fr;
}
```

The available space is divided:

```text
1fr : 2fr

1/3 : 2/3
```

### Creating Rows

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 200px;
}
```

You now have explicit row sizes.

### `gap`

Grid supports `gap`:

```css
.container {
  display: grid;
  gap: 20px;
}
```

This creates spacing between grid items.

### Grid Is Two-Dimensional

Flexbox:

```text
One dimension

──────────────→
```

Grid:

```text
Two dimensions

→ columns
↓ rows
```

### Flexbox vs Grid

| Flexbox | Grid |
|---|---|
| One-dimensional | Two-dimensional |
| Row OR column | Rows AND columns |
| Excellent for components | Excellent for page layouts |
| Content-driven layouts | Structure-driven layouts |
| Navigation, buttons, small groups | Dashboards, galleries, page layouts |

This is not an absolute rule.

You can use both together.

### Example

A page could use Grid:

```css
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
}
```

Then the navigation could use Flexbox:

```css
.nav {
  display: flex;
  flex-direction: column;
}
```

### Interview Answer

> `display: grid` turns an element into a grid container and its direct children into grid items. CSS Grid is primarily designed for two-dimensional layouts, allowing developers to control rows and columns together.

### Remember

```text
Flexbox
→ One dimension
→ Row or column

Grid
→ Two dimensions
→ Rows and columns
```

---

## 31. What is `display: contents`?

`display: contents` makes an element's **box disappear from the layout**, while its children continue to participate in the layout as though the parent box were not there.

Example:

```css
.wrapper {
  display: contents;
}
```

Consider:

```html
<div class="wrapper">
  <div class="item">One</div>
  <div class="item">Two</div>
</div>
```

Normally:

```text
Wrapper
   ↓
Items
```

With:

```css
.wrapper {
  display: contents;
}
```

the wrapper does not generate its own box.

Its children participate in the surrounding layout.

### Example With Grid

Suppose:

```html
<div class="grid">
  <div class="wrapper">
    <div class="item">One</div>
    <div class="item">Two</div>
  </div>

  <div class="item">Three</div>
</div>
```

CSS:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.wrapper {
  display: contents;
}
```

The `.wrapper` itself does not become a grid item box.

Its children can participate directly in the grid layout.

Conceptually:

```text
Without display: contents

Grid
 ├── Wrapper
 │    ├── One
 │    └── Two
 └── Three
```

With:

```css
.wrapper {
  display: contents;
}
```

the layout behaves more like:

```text
Grid
 ├── One
 ├── Two
 └── Three
```

### Important

`display: contents` does **not** mean:

```text
display: none
```

The element is not simply removed along with its children.

Instead:

```text
Element's own box
→ Does not participate

Children
→ Continue participating
```

### `display: contents` vs `display: none`

```text
display: none
→ Element disappears
→ Children disappear from layout too

display: contents
→ Element's own box disappears
→ Children remain
```

### Why Use `display: contents`?

One useful case is when you have a wrapper element that is needed for HTML structure but you do not want that wrapper to create an extra layout box.

Example:

```html
<div class="card">
  <div class="wrapper">
    <h2>Title</h2>
    <p>Description</p>
  </div>
</div>
```

You might use:

```css
.wrapper {
  display: contents;
}
```

when you specifically want the children to participate in the parent's layout.

### Important Accessibility Consideration

`display: contents` has had accessibility and browser-interoperability concerns historically, especially around how some browsers and assistive technologies handle the element's semantics.

Modern browsers have improved significantly, but you should not use `display: contents` casually just to "remove a wrapper."

Always make sure the semantic and accessibility behavior remains correct.

### Interview Answer

> `display: contents` removes the element's own layout box while allowing its children to participate in the surrounding layout. It is different from `display: none` because the children remain in the layout. It can be useful when a wrapper is needed structurally but should not create an additional layout box.

### Remember

```text
display: contents
        ↓
Parent box disappears
        ↓
Children remain
        ↓
Children participate in surrounding layout
```

---

# Final Memory Sheet

## Block vs Inline vs Inline-block

```text
block
→ New line
→ Width/height work
→ Usually full available width

inline
→ Same line
→ Width/height do not behave like block
→ Follows text flow

inline-block
→ Same line
→ Width/height work
```

## Hiding Elements

```text
display: none
→ No layout space

visibility: hidden
→ Layout space remains

opacity: 0
→ Transparent
→ Layout space remains
→ Can still receive pointer events
```

## Flexbox

```text
display: flex
→ Flex container
→ Direct children = flex items
→ One-dimensional
→ Row or column
```

## Grid

```text
display: grid
→ Grid container
→ Direct children = grid items
→ Two-dimensional
→ Rows + columns
```

## `display: contents`

```text
display: contents
→ Parent's own box disappears
→ Children remain
→ Children participate in surrounding layout
```

## The Most Important Interview Comparison

```text
Flexbox
→ One-dimensional
→ Row OR column

Grid
→ Two-dimensional
→ Rows AND columns
```

## One-Line Memory Rule

> **Block controls normal block flow, inline follows text flow, flex handles one-dimensional layouts, grid handles two-dimensional layouts, and `display: contents` removes the parent's layout box while keeping its children.**
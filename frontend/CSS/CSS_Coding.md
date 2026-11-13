# Top 50 CSS Coding Interview Questions with Answers

## 1. Create a centered div using CSS.

```css
.container {
  width: 300px;
  height: 200px;
  background: lightblue;
  margin: 0 auto;
}
```

**Explanation:** `margin: 0 auto` horizontally centers a fixed-width block element.

## 2. Center an element horizontally and vertically.

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

**Explanation:** `justify-content` centers horizontally and `align-items` centers vertically.

## 3. Create a responsive navigation bar.

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 15px;
  }

  .nav-links {
    flex-direction: column;
    text-align: center;
  }
}
```

## 4. Create a responsive two-column layout.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

## 5. Create a three-column card layout.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  padding: 20px;
  background: #f2f2f2;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

## 6. Create a responsive image.

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

**Explanation:** The image adjusts to its parent's width without losing its proportions.

## 7. Create a full-screen background image.

```css
.hero {
  min-height: 100vh;
  background-image: url("hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

## 8. Create a button with a hover effect.

```css
button {
  background: blue;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: darkblue;
}
```

## 9. Create a card with a hover animation.

```css
.card {
  padding: 20px;
  background: white;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
}
```

## 10. Create a circular profile image.

```css
.profile {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}
```

## 11. Create a CSS-only dropdown menu.

```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 150px;
  box-shadow: 0 4px 10px #0002;
}

.dropdown:hover .dropdown-content {
  display: block;
}
```

## 12. Create a tooltip using CSS.

```css
.tooltip {
  position: relative;
}

.tooltip::after {
  content: "More information";
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  color: white;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
}

.tooltip:hover::after {
  opacity: 1;
  visibility: visible;
}
```

## 13. Create a sticky header.

```css
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  padding: 15px;
}
```

## 14. Create a fixed WhatsApp-style floating button.

```css
.floating-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: green;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 15. Create a two-column layout with a sidebar.

```css
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

## 16. Create a CSS loading spinner.

```css
.spinner {
  width: 45px;
  height: 45px;
  border: 5px solid #ddd;
  border-top-color: blue;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

## 17. Create a bouncing animation.

```css
.ball {
  width: 50px;
  height: 50px;
  background: red;
  border-radius: 50%;
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  to {
    transform: translateY(-100px);
  }
}
```

## 18. Create a pulsing button.

```css
.pulse-button {
  padding: 15px 25px;
  background: blue;
  color: white;
  border: none;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.08);
    opacity: 0.8;
  }
}
```

## 19. Create a gradient background.

```css
.hero {
  min-height: 300px;
  background: linear-gradient(
    135deg,
    #667eea,
    #764ba2
  );
}
```

## 20. Create a gradient text effect.

```css
.gradient-text {
  background: linear-gradient(90deg, blue, purple);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

## 21. Create a card with a shadow.

```css
.card {
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}
```

## 22. Create a border animation on hover.

```css
.button {
  border: 2px solid transparent;
  padding: 12px 25px;
  transition: border-color 0.3s ease;
}

.button:hover {
  border-color: blue;
}
```

## 23. Create a text truncation effect with ellipsis.

```css
.text {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## 24. Display text on top of an image.

```css
.image-box {
  position: relative;
}

.image-box img {
  width: 100%;
  display: block;
}

.image-box h2 {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}
```

## 25. Create an image zoom effect on hover.

```css
.image-box {
  overflow: hidden;
}

.image-box img {
  width: 100%;
  transition: transform 0.4s ease;
}

.image-box:hover img {
  transform: scale(1.1);
}
```

## 26. Create a horizontal divider with text in the middle.

```css
.divider {
  display: flex;
  align-items: center;
  gap: 15px;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #ccc;
}
```

## 27. Create a custom checkbox.

```css
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: blue;
  cursor: pointer;
}
```

## 28. Create a custom radio button.

```css
input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: purple;
  cursor: pointer;
}
```

## 29. Create a responsive pricing table.

```css
.pricing-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.pricing-card {
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: center;
}

@media (max-width: 768px) {
  .pricing-container {
    grid-template-columns: 1fr;
  }
}
```

## 30. Create a CSS-only hamburger icon.

```css
.hamburger {
  width: 30px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hamburger span {
  height: 3px;
  width: 100%;
  background: black;
  border-radius: 5px;
}
```

## 31. Create a notification badge.

```css
.notification {
  position: relative;
}

.notification::after {
  content: "3";
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
}
```

## 32. Create a CSS progress bar.

```css
.progress {
  width: 100%;
  height: 12px;
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  width: 70%;
  height: 100%;
  background: green;
}
```

## 33. Create a skeleton loading effect.

```css
.skeleton {
  width: 250px;
  height: 100px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    #eee 25%,
    #ddd 50%,
    #eee 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  to {
    background-position: -200% 0;
  }
}
```

## 34. Create a responsive footer with three columns.

```css
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 40px;
  background: #222;
  color: white;
}

@media (max-width: 600px) {
  .footer {
    grid-template-columns: 1fr;
  }
}
```

## 35. Create a CSS-only accordion.

```css
.accordion-content {
  display: none;
  padding: 15px;
}

.accordion input {
  display: none;
}

.accordion input:checked ~ .accordion-content {
  display: block;
}
```

**Explanation:** Use a checkbox or radio input in the HTML to control the content. CSS cannot provide all the behavior of a full accessible accordion by itself.

## 36. Create a full-width hero section.

```css
.hero {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  background: #f5f5f5;
}
```

## 37. Create a responsive font size.

```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

**Explanation:** The font size changes with screen width but stays between 2rem and 4rem.

## 38. Create a horizontal scrolling card section.

```css
.card-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.card {
  flex: 0 0 250px;
  scroll-snap-align: start;
}
```

## 39. Create a CSS-only image overlay.

```css
.image-box {
  position: relative;
}

.image-box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}

.image-box:hover::after {
  opacity: 1;
}
```

## 40. Create a glassmorphism card.

```css
.glass-card {
  padding: 30px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
}
```

## 41. Create a dark mode using CSS variables.

```css
:root {
  --bg: white;
  --text: black;
}

.dark {
  --bg: #121212;
  --text: white;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

**Explanation:** Add the `dark` class to a parent element to apply dark theme colors.

## 42. Create a responsive 4-column gallery.

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
```

## 43. Create a button with a sliding background effect.

```css
.button {
  position: relative;
  overflow: hidden;
  padding: 12px 25px;
  color: white;
  background: blue;
  border: none;
  z-index: 1;
}

.button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: purple;
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: -1;
}

.button:hover::before {
  transform: translateX(0);
}
```

## 44. Create a responsive form.

```css
.form {
  width: min(100% - 30px, 450px);
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form input,
.form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
```

## 45. Create an input field with a focus effect.

```css
input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
}
```

## 46. Create a CSS triangle.

```css
.triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 50px solid red;
}
```

## 47. Create a circular shape using CSS.

```css
.circle {
  width: 100px;
  height: 100px;
  background: orange;
  border-radius: 50%;
}
```

## 48. Create a 16:9 responsive video container.

```css
.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.video-container iframe,
.video-container video {
  width: 100%;
  height: 100%;
  border: 0;
}
```

## 49. Create a CSS grid layout with different-sized sections.

```css
.dashboard {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}

.main {
  grid-row: span 2;
}

@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
  }

  .main {
    grid-row: auto;
  }
}
```

## 50. Create a responsive website layout with header, sidebar, main content, and footer.

```css
.website {
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 15px;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}

@media (max-width: 768px) {
  .website {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

---

# Most Important CSS Coding Questions to Practice First

If you have limited interview preparation time, prioritize these:

1. Center a div horizontally and vertically.
2. Create a responsive navbar.
3. Create a responsive card layout.
4. Build a two-column layout.
5. Create a sticky header.
6. Create a CSS loading spinner.
7. Create a hover animation.
8. Create a dropdown menu.
9. Create a responsive pricing section.
10. Create a responsive image gallery.
11. Build a responsive form.
12. Create a skeleton loader.
13. Create a glassmorphism card.
14. Create a dark mode.
15. Build a complete responsive webpage.

**Interview tip:** Don't just memorize these CSS snippets. Practice writing them without looking, understand why each property is used, and test the layouts at desktop, tablet, and mobile widths. Interviewers love changing one small requirement just when you think you're done.
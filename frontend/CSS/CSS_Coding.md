Level 1: Fundamentals
1. Center a box
Create a 200px × 200px box and center it both horizontally and vertically.
Practice: Flexbox / Grid.
2. Three equal columns
Create three equal-width cards in one row with equal spacing.
3. Responsive three-column layout
Create three cards that become:

Desktop → 3 columns
Tablet  → 2 columns
Mobile  → 1 column

4. Navbar
Create a responsive navbar containing:

Logo | Home | About | Services | Contact | Login

On mobile, convert it into a hamburger-style layout.
5. Card component
Create a reusable card containing:

Image
Title
Description
Price
Button

Make the card responsive.
6. Equal-height cards
Create multiple cards with different amounts of text but make all cards in the same row equal height.
7. Full-screen hero
Create a hero section that occupies the viewport height with:

Heading
Description
CTA
Image

8. Button states
Create a button with:

normal
hover
active
focus
disabled

states.
9. Custom checkbox
Create a checkbox without using the browser's default visual appearance.
10. Custom radio button
Create a custom radio button using CSS.

Level 2: Box Model & Positioning
11. Badge positioning
Create a card with a "NEW" badge positioned at the top-right corner.
12. Notification badge
Create a notification bell with a red notification counter positioned over it.
13. Image overlay
Create an image where a dark overlay appears when the user hovers over it.
14. Center absolute element
Create a parent container and vertically/horizontally center an absolutely positioned child.
15. Sticky header
Create a header that remains at the top while scrolling.
16. Sticky sidebar
Create:

Sidebar | Main Content

The sidebar should remain visible while the main content scrolls.
17. Fixed chat button
Create a floating WhatsApp/chat-style button fixed to the bottom-right corner.
18. Modal
Create a centered modal with:

Overlay
Modal
Close button
Heading
Content
Action buttons

19. Tooltip
Create a tooltip that appears when hovering over a button.
20. Dropdown
Create a CSS-only dropdown menu using hover/focus states.

Level 3: Flexbox
21. Perfect centering
Center an element horizontally and vertically using:
1. Flexbox
2. Grid
Then compare the implementations.
22. Navbar with right-aligned button
Create:

Logo    Links Links Links             Login

The Login button must stay on the far right.
23. Space-between layout
Create:

Logo                         Profile

using Flexbox.
24. Card footer alignment
Cards contain different amounts of description text, but their buttons must all align along the same bottom line.
25. Sidebar layout
Create:

Sidebar | Content

where sidebar is 250px and content takes the remaining width.
26. Holy Grail layout
Create:

       Header
---------------------
Sidebar | Main | Aside
---------------------
       Footer

using Flexbox.
27. Flex wrapping gallery
Create a gallery where cards automatically wrap to the next line.
28. Responsive navigation
Create a navigation that:

Desktop → horizontal
Mobile  → vertical

using Flexbox and media queries.
29. Flex-grow challenge
Create three elements:

A = flex-grow: 1
B = flex-grow: 2
C = flex-grow: 1

Observe and explain how the available space is distributed.
30. Flex overflow debugging
Create a long text inside a Flexbox layout that causes overflow.
Fix it using the appropriate CSS.
This is a very good interview problem because it tests whether you actually understand min-width: 0.

Level 4: CSS Grid
31. Basic Grid
Create a:

3 × 3

Grid.
32. Dashboard layout
Create:

-------------------------
| Header                |
-------------------------
| Sidebar | Main        |
|         |             |
-------------------------
| Footer                |
-------------------------

using Grid.
33. 12-column layout
Create a 12-column Grid system.
Make one element span:

grid-column: span 4;

and another:

grid-column: span 8;

34. Responsive card grid
Create a card grid that automatically changes the number of columns depending on available space.
Try solving it with:

repeat(auto-fit, minmax(...))

35. auto-fit vs auto-fill
Build the same gallery twice:

auto-fit
auto-fill

Resize the browser and observe the difference.
36. Magazine layout
Create a layout like:

-------------------------
|       |               |
|   A   |       B       |
|       |               |
-------------------------
| C | C |       D       |
-------------------------

using CSS Grid.
37. Image gallery
Create a responsive gallery where some images occupy:

1 column × 1 row
2 columns × 1 row
2 columns × 2 rows

38. Dashboard cards
Create a dashboard containing:

Revenue
Users
Orders
Conversion
Analytics
Activity

with different card sizes using Grid areas.

Level 5: Responsive CSS
39. Responsive landing page
Build:

Navbar
Hero
Features
Services
Testimonials
Pricing
Footer

with responsive layouts.
40. Responsive typography
Create a heading whose font size smoothly changes between:

Mobile → 32px
Desktop → 64px

using clamp().
41. Responsive container
Create a reusable container:

small screen → 100%
medium → max-width
large → larger max-width

with consistent horizontal padding.
42. Responsive pricing section
Desktop:

Basic | Pro | Enterprise

Mobile:

Basic
Pro
Enterprise

43. Responsive image
Create an image that:
* never overflows its container
* maintains aspect ratio
* changes size responsively
44. Mobile-first page
Build a complete page starting only from the mobile design, then progressively enhance it for tablet and desktop.
45. Container query component
Create a reusable card that changes its layout based on its container's width, not the viewport width.
This is a particularly useful modern CSS exercise.

Level 6: Typography & UI
46. One-line ellipsis
Create:

This is a very long title that should...

using CSS.
47. Two-line ellipsis
Limit text to exactly two lines and show an ellipsis.
48. Text overlay
Place text over an image with a gradient background so the text remains readable.
49. Skeleton loader
Create a loading skeleton:

┌─────────────────┐
│ ████████████    │
│ █████████       │
│ █████████████   │
└─────────────────┘

with a shimmering animation.
50. Dark/light theme
Create a page with:

Light Theme
Dark Theme

using CSS custom properties.

Level 7: Animation
After the first 50, practice these.
51. Hover card animation
Card slightly moves upward on hover.
52. Button animation
Create a button with a smooth hover background transition.
53. Loading spinner
Create a spinner using only CSS.
54. Pulsing notification
Create a pulsing notification dot.
55. Skeleton shimmer
Create a continuously moving gradient shimmer.
56. Image zoom
Image smoothly zooms on hover without overflowing its container.
57. Dropdown animation
Create an animated dropdown.
58. Modal animation
Create a modal that fades and scales into view.
59. Slide-in sidebar
Create a sidebar that slides in from the left.
60. Infinite marquee
Create a horizontally scrolling text/logo animation using CSS.

Level 8: Real Interview Challenges
These are more valuable than another 100 "what does justify-content do?" questions.
61. Fix broken Flexbox
Given:

Sidebar | Main Content

the main content overflows because of a very long URL.
Task: fix the layout without hardcoding the content width.

62. Fix broken Grid
A Grid contains long content and causes horizontal scrolling.
Task: identify why and fix it.

63. Fix sticky positioning
A developer writes:

.sidebar {
  position: sticky;
  top: 0;
}

but it doesn't stick.
Task: identify possible causes and fix the layout.

64. Fix z-index
You have:

Navbar
Modal
Dropdown

but the modal appears behind the navbar despite:

z-index: 999999;

Task: debug the stacking context.

65. Fix mobile viewport
A full-screen mobile hero uses:

height: 100vh;

and behaves incorrectly on mobile browsers.
Task: implement a modern solution.

66. Fix horizontal scrolling
A page has a mysterious horizontal scrollbar.
Task: find which element causes the overflow using DevTools and fix it.

67. Build a responsive dashboard
Create:

Desktop

┌────────┬───────────────────────┐
│        │ Header                │
│ Side   ├───────────────────────┤
│ bar    │ Dashboard             │
│        │ Cards / Charts        │
└────────┴───────────────────────┘

Mobile:

Header
Navigation
Cards
Charts


68. Build a responsive ecommerce product page
Include:

Product images
Product information
Price
Variants
Quantity
Add to cart
Reviews
Related products

Must work on mobile, tablet, and desktop.

69. Build a SaaS landing page
Create:

Navbar
Hero
Trusted companies
Features
How it works
Pricing
Testimonials
FAQ
CTA
Footer

No CSS framework.

70. Recreate a real website section
Pick any real website and recreate one section without inspecting its source CSS.
This tests whether you can translate visual design into actual CSS rather than merely copy-pasting the internet's collective homework.

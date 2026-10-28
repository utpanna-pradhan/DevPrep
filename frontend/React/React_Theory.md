# Module 1: React Fundamentals 

---

# 1. What is React?

## Answer

React is an open-source JavaScript library used to build fast, interactive, and reusable user interfaces (UIs), especially for Single Page Applications (SPAs).

It allows developers to build applications by breaking the UI into small, reusable components.

React was developed by Meta (formerly Facebook) and released in 2013.

### Example

```jsx
function App() {
  return <h1>Hello, React!</h1>;
}
```

Here, `App` is a React component that renders a heading.

### Key Points

- JavaScript library
- Used for building User Interfaces
- Component-based architecture
- Developed by Meta
- Open source
- Uses a Virtual DOM for better performance

---

# 2. Why was React created?

## Answer

React was created to solve the challenges of building large, dynamic, and interactive user interfaces.

Before React, developers manually updated the DOM whenever data changed, making applications difficult to maintain and slower as they grew.

React introduced a declarative programming model and the Virtual DOM to simplify UI updates.

### Problems Before React

- Manual DOM manipulation
- Repetitive code
- Difficult state management
- Poor performance for frequent UI updates
- Hard to maintain large applications

### React's Solution

- Component-based architecture
- Declarative UI
- Virtual DOM
- Efficient updates
- Reusable code

---

# 3. What problems does React solve?

## Answer

React solves several common frontend development problems.

### 1. Manual DOM Manipulation

Instead of manually updating HTML elements, React automatically updates only the necessary parts of the page.

### 2. Code Reusability

Components can be reused across different parts of an application.

### 3. Performance

React uses the Virtual DOM to minimize expensive DOM operations.

### 4. State Management

React makes UI updates predictable when data changes.

### 5. Maintainability

Breaking applications into components makes them easier to develop and maintain.

### Summary

React helps developers build applications that are:

- Faster
- More maintainable
- Reusable
- Easier to scale

---

# 4. What are the main features of React?

## Answer

React provides several powerful features.

### Component-Based Architecture

Applications are built using reusable components.

### Virtual DOM

Improves rendering performance by updating only changed elements.

### Declarative UI

Developers describe how the UI should look instead of manually changing it.

### JSX

Allows writing HTML-like syntax inside JavaScript.

### One-Way Data Flow

Data flows from parent components to child components through props.

### State Management

Components can manage their own data using state.

### React Hooks

Hooks allow functional components to use state and lifecycle features.

### Key Features

- Components
- JSX
- Virtual DOM
- One-way data flow
- Hooks
- Declarative programming
- Fast rendering

---

# 5. What are the advantages of using React?

## Answer

React offers many benefits.

### Advantages

- Reusable components
- Faster rendering using the Virtual DOM
- Easy to learn compared to many frameworks
- Strong ecosystem
- Large community support
- Excellent developer tools
- Easy integration with other libraries
- Good performance
- Easy testing
- Scalable architecture

### Real-World Benefits

- Faster development
- Cleaner code
- Better maintainability
- Improved user experience

---

# 6. What are the limitations of React?

## Answer

Although React is powerful, it has some limitations.

### Limitations

- React only handles the UI layer.
- Additional libraries are needed for routing, state management, and API handling.
- The ecosystem changes quickly.
- Beginners may find JSX confusing.
- Build configuration can be overwhelming initially.

### Common Libraries Used with React

- React Router
- Redux Toolkit
- Zustand
- React Query
- Axios

### Summary

React is excellent for building UIs but requires additional tools for complete application development.

---

# 7. What is a Single Page Application (SPA)?

## Answer

A Single Page Application (SPA) loads a single HTML page and updates the content dynamically without reloading the entire page.

Instead of requesting a new HTML page from the server for every navigation, JavaScript updates the current page.

### Traditional Website

```
Home
↓

Browser requests new page
↓

Entire page reloads
```

### SPA

```
Home
↓

JavaScript updates UI

↓

No full page reload
```

### Examples

- Gmail
- Facebook
- Instagram
- Trello
- Notion

### Benefits

- Faster navigation
- Better user experience
- Less server load
- Smooth interactions

---

# 8. How is React different from traditional websites?

## Answer

Traditional websites reload the entire page whenever users navigate.

React applications update only the changed parts of the page.

| Traditional Website | React Application |
|---------------------|------------------|
| Full page reload | Partial UI update |
| Slower navigation | Faster navigation |
| Server renders every page | Client updates UI |
| More network requests | Fewer network requests |
| Less interactive | Highly interactive |

### Example

Traditional Website

```
Click About

↓

Entire page reloads
```

React

```
Click About

↓

Only About component changes
```

---

# 9. Is React a framework or a library? Explain.

## Answer

React is a **JavaScript library**, not a framework.

### Why is it a Library?

React focuses only on building user interfaces.

It does not include built-in solutions for:

- Routing
- State management
- HTTP requests
- Form validation

Developers choose the libraries they want to use alongside React.

### Framework vs Library

| Library | Framework |
|----------|-----------|
| Solves one specific problem | Provides a complete solution |
| Flexible | Opinionated |
| You control the flow | Framework controls the flow |

### Example

A typical React project may include:

- React
- React Router
- Redux Toolkit
- Axios
- React Query

Together, these create a complete application.

---

# 10. How does React fit into the MVC architecture?

## Answer

MVC stands for:

- **Model** → Data
- **View** → User Interface
- **Controller** → Business Logic

React primarily represents the **View** layer.

```
Model
   │
   ▼
Controller
   │
   ▼
React (View)
```

### Responsibilities

**Model**

- Stores application data
- Database
- APIs

**Controller**

- Handles business logic
- Processes user requests

**React (View)**

- Displays data
- Updates the UI
- Responds to user interactions

### Example

```
User clicks button

↓

Controller updates data

↓

Model changes

↓

React automatically re-renders UI
```

### Interview Tip

If asked:

> "Where does React fit in MVC?"

Answer:

> React is primarily the **View** layer of the MVC architecture. It focuses on rendering and updating the user interface, while business logic and data management are typically handled by other libraries or backend services.

---


## JSX

---

# 11. What is JSX?

## Answer

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It makes React components easier to read and write.

Although JSX looks like HTML, it is **not HTML**. It is syntactic sugar that gets converted into JavaScript.

### Example

```jsx
const element = <h1>Hello, React!</h1>;
```

Without JSX:

```javascript
const element = React.createElement("h1", null, "Hello, React!");
```

### Key Points

- JSX stands for JavaScript XML.
- It is a syntax extension for JavaScript.
- Makes UI code more readable.
- Is not required, but widely used in React.
- Gets compiled into JavaScript.

---

# 12. Why does React use JSX?

## Answer

React uses JSX because it makes writing and maintaining UI components much easier.

Instead of creating elements using `React.createElement()`, developers can write HTML-like syntax that is easier to understand.

### Without JSX

```javascript
React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Welcome")
);
```

### With JSX

```jsx
<div>
  <h1>Welcome</h1>
</div>
```

### Advantages

- Easier to read.
- Easier to write.
- Reduces boilerplate code.
- Keeps UI and JavaScript together.
- Improves developer productivity.

---

# 13. How does JSX work behind the scenes?

## Answer

Browsers cannot understand JSX directly.

A compiler such as **Babel** converts JSX into regular JavaScript before the code runs.

### JSX

```jsx
const element = <h1>Hello</h1>;
```

### After Babel Compilation

```javascript
const element = React.createElement(
  "h1",
  null,
  "Hello"
);
```

### Compilation Flow

```
JSX

↓

Babel

↓

React.createElement()

↓

React Element (JavaScript Object)

↓

Virtual DOM

↓

Real DOM
```

### Key Point

JSX is **compiled**, not interpreted by the browser.

---

# 14. How is JSX different from HTML?

## Answer

JSX looks similar to HTML, but there are several important differences.

| HTML | JSX |
|------|------|
| Uses `class` | Uses `className` |
| Uses `for` | Uses `htmlFor` |
| Can return multiple root elements | Must return one parent element |
| Attribute names are lowercase | Uses camelCase for many attributes |
| Browser understands HTML directly | JSX must be compiled |

### Example

HTML

```html
<label for="name">Name</label>
```

JSX

```jsx
<label htmlFor="name">Name</label>
```

---

# 15. Why must JSX return a single parent element?

## Answer

A React component must return **one React element**.

If multiple sibling elements are returned without a wrapper, React doesn't know how to return them as a single value.

### Incorrect

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

### Correct

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

Or use a Fragment:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

### Why?

Because a function can return only one value, and React components return one React element.

---

# 16. Why do we use className instead of class in JSX?

## Answer

`class` is a reserved keyword in JavaScript used for defining classes.

Since JSX is JavaScript, React uses `className` to avoid conflicts.

### HTML

```html
<div class="box"></div>
```

### JSX

```jsx
<div className="box"></div>
```

### Interview Tip

Always use `className` in React unless you're working with Web Components.

---

# 17. How do you write JavaScript expressions inside JSX?

## Answer

JavaScript expressions are written inside **curly braces `{}`**.

### Example

```jsx
const name = "Alex";

return <h1>Hello {name}</h1>;
```

You can use expressions like:

```jsx
{5 + 10}

{name.toUpperCase()}

{isLoggedIn ? "Welcome" : "Login"}

{items.length}
```

### Key Point

Curly braces allow embedding JavaScript expressions inside JSX.

---

# 18. What can and cannot be rendered in JSX?

## Answer

### Can Be Rendered

- Strings
- Numbers
- JSX elements
- Arrays of JSX
- React components
- `null`
- `undefined`
- `false`
- `true` (ignored)

Example

```jsx
<h1>{"Hello"}</h1>

<h1>{100}</h1>

{items.map(item => <p>{item}</p>)}
```

### Cannot Be Rendered Directly

Objects

```jsx
const user = {
  name: "Alex"
};

<div>{user}</div>
```

Error:

```
Objects are not valid as a React child
```

Functions

```jsx
<div>{myFunction}</div>
```

Instead:

```jsx
<div>{myFunction()}</div>
```

---

# 19. What is the difference between JSX expressions and statements?

## Answer

JSX accepts **expressions**, not **statements**.

### Expression

Produces a value.

Examples:

```jsx
{name}

{10 + 20}

{isLoggedIn ? "Yes" : "No"}
```

### Statement

Performs an action but doesn't produce a value.

Not allowed directly inside JSX:

```jsx
{
if (isLoggedIn) {
  return "Hello";
}
}
```

Instead use:

```jsx
{isLoggedIn ? "Hello" : "Login"}
```

### Summary

| Expressions | Statements |
|-------------|------------|
| Return a value | Perform an action |
| Allowed in JSX | Not allowed directly |
| `5 + 5` | `if`, `for`, `while` |

---

# 20. How is JSX converted into JavaScript?

## Answer

JSX is converted into JavaScript during the build process using **Babel** (or another JSX compiler).

### JSX

```jsx
const element = <button>Click Me</button>;
```

### Compiled JavaScript

```javascript
const element = React.createElement(
  "button",
  null,
  "Click Me"
);
```

In modern React (React 17+), Babel often compiles JSX using the new JSX runtime:

```javascript
import { jsx as _jsx } from "react/jsx-runtime";

const element = _jsx("button", {
  children: "Click Me"
});
```

### JSX Compilation Process

```
JSX

↓

Babel Compiler

↓

JavaScript

↓

React Elements

↓

Virtual DOM

↓

Diffing (Reconciliation)

↓

Real DOM Update
```

### Interview Tip

A common interview question is:

**"Does the browser understand JSX?"**

**Answer:** No. Browsers only understand JavaScript. JSX must first be compiled into JavaScript using Babel (or another compiler) before it can run.


# Module 1: React Fundamentals (21–30)

## Components

---

# 21. What is a React component?

## Answer

A React component is a reusable, independent piece of UI that returns React elements (JSX). Components allow you to divide a user interface into smaller, manageable pieces.

Think of components as JavaScript functions that describe what should appear on the screen.

### Example

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

Usage:

```jsx
function App() {
  return <Welcome />;
}
```

### Key Points

- Reusable UI building blocks.
- Return JSX.
- Can receive data through props.
- Can manage their own state.
- Help organize large applications.

---

# 22. Why do we use components?

## Answer

Components help break a complex UI into small, reusable, and maintainable pieces.

Instead of writing one huge file, you create separate components for different parts of the application.

### Example

An e-commerce website might have:

```
App
│
├── Navbar
├── Sidebar
├── ProductList
│     ├── ProductCard
│     ├── ProductCard
│     └── ProductCard
├── Cart
└── Footer
```

Each component has a single responsibility.

### Advantages

- Reusable code
- Easier maintenance
- Better readability
- Easier debugging
- Better testing
- Scalable architecture

---

# 23. What is the difference between functional and class components?

## Answer

React supports two types of components: **Functional Components** and **Class Components**.

### Functional Component

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

### Class Component

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

### Comparison

| Functional Component | Class Component |
|----------------------|-----------------|
| JavaScript function | ES6 class |
| Uses Hooks | Uses lifecycle methods |
| Less code | More boilerplate |
| Easier to understand | More complex |
| Preferred today | Mostly legacy code |

### Interview Tip

Most modern React applications use **functional components**.

---

# 24. Why are functional components preferred today?

## Answer

Since the introduction of **React Hooks (React 16.8)**, functional components can perform everything class components can, while remaining simpler and easier to maintain.

### Advantages

- Less code
- Easier to read
- Easier to test
- Hooks replace lifecycle methods
- Better code reuse with custom Hooks
- Better TypeScript support
- Recommended by the React team

### Example

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

### Interview Tip

Today, unless maintaining an older project, choose functional components.

---

# 25. What makes a good reusable component?

## Answer

A reusable component is designed to work in multiple places without modification.

### Characteristics

- Has a single responsibility.
- Accepts data through props.
- Avoids hardcoded values.
- Has minimal internal state.
- Is easy to understand.
- Can be customized.

### Poor Example

```jsx
function Button() {
  return <button>Submit</button>;
}
```

This always shows **Submit**.

### Better Example

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}
```

Usage:

```jsx
<Button text="Login" />
<Button text="Register" />
<Button text="Save" />
```

### Best Practices

- Keep components small.
- Make them configurable.
- Avoid duplicated logic.

---

# 26. What is component composition?

## Answer

Component composition is the practice of building complex UIs by combining smaller components.

Instead of creating one large component, you assemble multiple reusable components.

### Example

```jsx
function Header() {
  return <h1>Store</h1>;
}

function ProductList() {
  return <p>Products</p>;
}

function Footer() {
  return <footer>Copyright</footer>;
}

function App() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}
```

### Benefits

- Better organization
- Reusability
- Easier testing
- Easier maintenance
- Cleaner architecture

---

# 27. What is the difference between a parent component and a child component?

## Answer

A **parent component** renders another component.

A **child component** is rendered by the parent.

### Example

```jsx
function Child() {
  return <h2>I am the Child</h2>;
}

function Parent() {
  return (
    <>
      <h1>I am the Parent</h1>
      <Child />
    </>
  );
}
```

### Relationship

```
Parent
   │
   ▼
Child
```

### Key Point

Parents usually pass data to children using **props**.

---

# 28. Can one component render another component?

## Answer

Yes.

One component can render any number of other components. This is how React applications are built.

### Example

```jsx
function Navbar() {
  return <nav>Navbar</nav>;
}

function Footer() {
  return <footer>Footer</footer>;
}

function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
```

### Component Tree

```
App
│
├── Navbar
└── Footer
```

This nested structure forms the **React component tree**.

---

# 29. What is component reusability?

## Answer

Component reusability means creating a component once and using it multiple times with different data.

Instead of duplicating UI code, you pass different props to the same component.

### Example

```jsx
function Card({ title }) {
  return <h2>{title}</h2>;
}
```

Usage:

```jsx
<Card title="React" />
<Card title="JavaScript" />
<Card title="Node.js" />
```

### Benefits

- Less duplicated code
- Easier maintenance
- Consistent UI
- Faster development
- Easier testing

---

# 30. What are common mistakes beginners make when creating components?

## Answer

New React developers often make mistakes that reduce reusability and maintainability.

### Common Mistakes

#### 1. Creating components that are too large

One component should have one clear responsibility.

#### 2. Hardcoding values

Bad:

```jsx
<button>Login</button>
```

Better:

```jsx
<button>{text}</button>
```

#### 3. Duplicating components

Instead of copying code, create reusable components with props.

#### 4. Keeping unnecessary state

Not everything needs `useState`.

#### 5. Mixing business logic with UI

Separate logic from presentation whenever possible.

#### 6. Not using composition

Prefer combining small components instead of building giant ones.

#### 7. Poor component naming

Bad:

```
Component1
```

Good:

```
UserCard
ProductList
LoginForm
```

### Interview Tip

A good React component is:

- Small
- Reusable
- Focused on one responsibility
- Configurable through props
- Easy to test
- Easy to maintain

Following these principles makes your applications easier to scale and is a hallmark of production-quality React code.

# Module 1: React Fundamentals (41–50)

---

# Rendering

## 41. What does rendering mean in React?

**Answer:**

Rendering is the process of converting a React component into UI elements that appear on the screen.

When React renders a component, it:

1. Executes the component function.
2. Creates a Virtual DOM representation.
3. Compares it with the previous Virtual DOM.
4. Updates only the necessary parts of the Real DOM.

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

Here React renders `<h1>Hello React</h1>`.

---

## 42. What is the difference between the initial render and a re-render?

**Initial Render**

The first time a component is displayed.

```jsx
ReactDOM.createRoot(root).render(<App />);
```

Everything is created for the first time.

---

**Re-render**

Occurs after state, props, or context changes.

```jsx
setCount(count + 1);
```

React executes the component again and updates only changed UI.

---

| Initial Render | Re-render |
|----------------|-----------|
| First display | Happens after updates |
| Creates initial Virtual DOM | Creates a new Virtual DOM |
| Mounts UI | Updates existing UI |

---

## 43. What causes a React component to re-render?

**Answer:**

A component re-renders when:

- State changes (`setState`, `useState`)
- Props change
- Context value changes
- Parent component re-renders (unless optimized)
- A force update is triggered (rare)

Example:

```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
```

This causes the component to render again.

---

## 44. Does React re-render the entire page every time? Explain.

**Answer:**

No.

React re-executes the component function, but it **does not rebuild the entire page**.

Instead, React:

1. Creates a new Virtual DOM.
2. Compares it with the previous Virtual DOM (diffing).
3. Updates only the changed elements in the Real DOM.

Example:

Before:

```html
<h1>Hello</h1>
<p>0</p>
```

After changing the count:

```html
<h1>Hello</h1>
<p>1</p>
```

Only the `<p>` element is updated.

This selective update is one of React's biggest performance advantages.

---

## 45. What is the React rendering process from a state change to a UI update?

**Answer:**

The rendering process follows these steps:

1. A state or prop changes.
2. React schedules an update.
3. The component function runs again.
4. React creates a new Virtual DOM.
5. React compares it with the old Virtual DOM (Reconciliation).
6. React identifies the differences (Diffing).
7. React updates only the affected nodes in the Real DOM.
8. The browser repaints the updated UI.

Flow:

```
State Change
      ↓
Component Executes
      ↓
New Virtual DOM
      ↓
Compare with Old Virtual DOM
      ↓
Find Differences
      ↓
Update Real DOM
      ↓
Browser Paint
```

---

# Virtual DOM

## 46. What is the Virtual DOM?

**Answer:**

The Virtual DOM is a lightweight JavaScript representation of the Real DOM.

Instead of directly modifying the browser's DOM, React first updates the Virtual DOM, compares it with the previous version, and then applies only the necessary changes to the Real DOM.

This makes UI updates more efficient.

---

## 47. Why was the Virtual DOM introduced?

**Answer:**

The Real DOM is relatively slow to update because every change can trigger layout calculations, repainting, and reflow in the browser.

The Virtual DOM was introduced to:

- Reduce expensive DOM operations.
- Update only changed elements.
- Improve rendering performance.
- Simplify UI development with a declarative programming model.

---

## 48. How is the Virtual DOM different from the Real DOM?

**Answer:**

| Virtual DOM | Real DOM |
|--------------|----------|
| JavaScript object | Browser DOM |
| Lightweight | Heavy |
| Fast to create and compare | Slow to update |
| Exists in memory | Displayed on screen |
| Used by React | Used by the browser |

React works with the Virtual DOM first and synchronizes changes to the Real DOM only when needed.

---

## 49. How does React use the Virtual DOM to improve performance?

**Answer:**

React improves performance through the following process:

1. Creates a new Virtual DOM after a state or prop change.
2. Compares it with the previous Virtual DOM (Diffing).
3. Determines exactly what has changed.
4. Updates only the changed nodes in the Real DOM.

Example:

Before:

```html
<p>Count: 0</p>
```

After:

```html
<p>Count: 1</p>
```

React updates only the text inside the `<p>` element instead of rebuilding the entire page.

---

## 50. Is the Virtual DOM always faster than direct DOM manipulation? Explain.

**Answer:**

No.

The Virtual DOM is **not always faster** than direct DOM manipulation.

For very small or simple updates, direct DOM changes can be faster because they avoid the overhead of creating and comparing Virtual DOM trees.

However, in real-world applications with complex user interfaces, the Virtual DOM usually provides better overall performance because it:

- Minimizes unnecessary DOM updates.
- Batches multiple changes efficiently.
- Makes UI updates predictable.
- Simplifies application development.

The main benefit of the Virtual DOM is not raw speed in every case, but **efficient, scalable, and maintainable UI updates**.


# Module 1: React Fundamentals (Questions 51–60)

---

# Reconciliation

## 51. What is reconciliation in React?

### Answer

**Reconciliation** is React's process of comparing the **old Virtual DOM** with the **new Virtual DOM** after a state or props update to determine the minimum changes needed in the Real DOM.

Instead of rebuilding the entire UI, React updates only the parts that have changed.

### Example

Before:

```jsx
<h1>Hello</h1>
```

After:

```jsx
<h1>Hello John</h1>
```

React updates only the text node instead of recreating the entire `<h1>` element.

### Benefits

- Faster UI updates
- Fewer DOM operations
- Better performance
- Efficient rendering

---

## 52. Why does React need reconciliation?

### Answer

Updating the Real DOM is expensive because every DOM change may trigger:

- Layout (Reflow)
- Repaint
- Browser Rendering

React minimizes these expensive operations by updating only the changed elements.

Without reconciliation:

```
State Change
      ↓
Rebuild Entire UI
      ↓
Slow Performance
```

With reconciliation:

```
State Change
      ↓
Compare Virtual DOMs
      ↓
Update Only Differences
```

This makes React applications significantly faster.

---

## 53. How does React decide what needs to be updated?

### Answer

React uses an algorithm called **Diffing**.

### Step 1

State or props change.

```jsx
setCount(count + 1);
```

↓

### Step 2

React creates a new Virtual DOM.

↓

### Step 3

React compares the old Virtual DOM with the new Virtual DOM.

↓

### Step 4

React finds the differences.

↓

### Step 5

Only those differences are applied to the Real DOM.

### Diffing Rules

- Different element types → Replace the entire subtree.

```jsx
<div>Hello</div>
```

↓

```jsx
<h1>Hello</h1>
```

Entire node is replaced.

---

- Same element type → Update only changed properties.

```jsx
<button className="red">
```

↓

```jsx
<button className="blue">
```

Only the `className` changes.

---

- Lists → React compares items using `key`.

---

## 54. Why are key props important during reconciliation?

### Answer

A **key** is a unique identifier that helps React identify each item in a list.

Example:

```jsx
const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" }
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

React knows exactly which item changed.

### Benefits

- Faster reconciliation
- Preserves component state
- Efficient list updates
- Prevents unnecessary re-renders
- Better performance

### Good Key

```jsx
key={user.id}
```

### Bad Keys

```jsx
key={index}
```

```jsx
key={Math.random()}
```

```jsx
key={Date.now()}
```

---

## 55. What problems can occur if keys are missing, duplicated, or unstable?

### Answer

Incorrect keys confuse React during reconciliation.

### Missing Keys

```jsx
users.map(user => (
    <li>{user.name}</li>
));
```

Problems

- React warning
- Slower updates
- Harder reconciliation

---

### Duplicate Keys

```jsx
[
    { id: 1 },
    { id: 1 }
]
```

Problems

- React cannot uniquely identify items
- Incorrect UI updates
- Unexpected rendering

---

### Unstable Keys

```jsx
key={Math.random()}
```

Every render generates a new key.

Problems

- Components remount every render
- State is lost
- Poor performance

---

### Using Index as Key

```jsx
users.map((user, index) => (
    <li key={index}>{user.name}</li>
));
```

If the list order changes, React assumes the index represents the same item.

Problems

- Wrong component updates
- Incorrect input values
- Broken animations
- Lost state

### Best Practice

Always use a stable unique ID.

```jsx
key={user.id}
```

---

# React Fiber (Basics)

## 56. What is React Fiber?

### Answer

**React Fiber** is React's rendering engine introduced in **React 16**.

It is a complete rewrite of React's reconciliation algorithm that allows rendering work to be split into smaller units.

Instead of completing all rendering in one long task, Fiber can:

- Pause work
- Resume work
- Prioritize work
- Cancel unnecessary work

### Benefits

- Better performance
- More responsive UI
- Supports Concurrent Rendering
- Prevents browser freezing

---

## 57. Why was React Fiber introduced?

### Answer

The old React renderer worked synchronously.

```
Start Rendering
      ↓
Finish Everything
      ↓
Browser Responds
```

If rendering took a long time, the UI became unresponsive.

Fiber solves this by allowing React to:

- Split work
- Pause rendering
- Resume later
- Prioritize urgent updates
- Schedule background rendering

This keeps applications smooth even during heavy rendering.

---

## 58. How is Fiber different from React's previous rendering engine?

### Answer

| Old React Renderer | React Fiber |
|--------------------|-------------|
| Synchronous rendering | Interruptible rendering |
| Cannot pause work | Can pause and resume work |
| No prioritization | Priority-based rendering |
| Large updates block UI | UI stays responsive |
| Simple reconciliation | Advanced scheduling |

Fiber introduces a scheduling system that decides **when** updates should run instead of processing everything immediately.

---

## 59. What is concurrent rendering in React?

### Answer

**Concurrent Rendering** allows React to work on multiple rendering tasks without blocking the browser.

React can:

1. Start rendering.
2. Pause rendering.
3. Process higher-priority updates.
4. Resume previous work later.

### Example

Suppose a page has:

- A search box
- A list of 10,000 products

Without concurrent rendering:

Typing becomes slow while filtering.

With concurrent rendering:

- Typing stays smooth.
- Filtering continues in the background.

This improves user experience without changing how most React components are written.

---

## 60. Why should every React developer understand the basics of Fiber?

### Answer

You do **not** need to know Fiber's internal implementation, but understanding its purpose helps you write better React applications and debug performance issues.

Knowing Fiber helps you understand:

- Why React batches updates
- Why some renders are interrupted
- Why rendering order can change
- How Concurrent Rendering works
- How Suspense works
- Why `useTransition()` improves responsiveness
- Why React can prioritize updates

### Interview Tip

For most React interviews, remember these key points:

- Fiber is React's rendering engine.
- Fiber powers reconciliation.
- Fiber enables scheduling and prioritization.
- Fiber makes Concurrent Rendering possible.
- Fiber improves responsiveness and performance.



# Module 2: Components & Props (Questions 61–70)

# Functional Components

---

## 61. What is a functional component?

### Answer

A **functional component** is a JavaScript function that accepts **props** as input and returns **JSX** describing what should be displayed on the screen.

### Example

```jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
```

or

```jsx
const Welcome = () => {
  return <h1>Hello World</h1>;
};
```

Functional components are the standard way to build React applications today.

---

## 62. Why are functional components preferred over class components?

### Answer

Since React Hooks were introduced in React 16.8, functional components can do everything class components can, with simpler syntax.

### Advantages

- Less code
- Easier to read
- Easier to test
- Easier to reuse logic with Hooks
- Better TypeScript support
- Preferred by the React team
- Better suited for modern React features

### Interview Tip

Today, almost all new React applications use functional components.

---

## 63. How do you create a functional component in React?

### Answer

A functional component is simply a JavaScript function that returns JSX.

### Function Declaration

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

### Arrow Function

```jsx
const Greeting = () => {
  return <h1>Hello</h1>;
};
```

### Implicit Return

```jsx
const Greeting = () => <h1>Hello</h1>;
```

### Naming Rule

Component names must start with a **capital letter**.

✅ Correct

```jsx
function UserCard() {}
```

❌ Incorrect

```jsx
function userCard() {}
```

---

## 64. What must a functional component return?

### Answer

A functional component must return one of the following:

- JSX
- A React element
- `null`
- A React Fragment
- An array of React elements

### Valid Example

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

### Returning a Fragment

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
```

### Returning null

```jsx
function App() {
  return null;
}
```

Returning `undefined` is **not allowed** and causes an error.

---

## 65. Can a functional component return multiple elements? How?

### Answer

Yes.

However, JSX must have **one parent element**.

You can achieve this using:

### 1. A Wrapper Element

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

### 2. React Fragment

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

Fragments are preferred when you don't need an extra DOM element.

---

## 66. What happens if a component returns `null`?

### Answer

If a component returns `null`, React renders **nothing**.

The component still:

- Executes its code
- Runs Hooks
- Receives props
- Participates in the component tree

Only the UI is hidden.

### Example

```jsx
function User({ isLoggedIn }) {
  if (!isLoggedIn) {
    return null;
  }

  return <h1>Welcome</h1>;
}
```

This is commonly used for conditional rendering.

---

## 67. Can one functional component call another functional component?

### Answer

Yes.

React applications are built by composing small components together.

### Example

```jsx
function Header() {
  return <h1>My Website</h1>;
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

This is called **Component Composition** and is one of React's core principles.

---

## 68. What are the advantages of functional components?

### Answer

Functional components provide several benefits:

- Less boilerplate code
- Easier to understand
- Easier to maintain
- Reusable logic with Hooks
- Better performance in many cases
- Easier testing
- Better TypeScript compatibility
- Recommended by the React team
- Work seamlessly with Concurrent Rendering

### Interview Tip

If starting a new React project today, use functional components unless you have a specific reason not to.

---

## 69. What are the limitations of functional components?

### Answer

Modern functional components have very few limitations.

Earlier (before Hooks), they could not manage state or lifecycle methods.

Today, Hooks solve those problems.

Possible challenges include:

- Hook rules must be followed.
- Overusing Hooks can make components harder to read.
- Too many state variables may reduce maintainability.
- Large components become difficult to manage.

These are generally design issues rather than limitations of functional components themselves.

---

## 70. What are the best practices for writing functional components?

### Answer

Follow these best practices:

- Keep components small and focused.
- Use descriptive component names.
- Start component names with a capital letter.
- Keep business logic separate from UI when possible.
- Use Hooks correctly.
- Avoid unnecessary state.
- Reuse components instead of duplicating code.
- Pass data through props.
- Avoid deeply nested JSX.
- Split large components into smaller reusable ones.
- Use meaningful file names.
- Keep components easy to test.
- Avoid side effects directly inside the render function.

### Example Structure

```jsx
function UserCard({ user }) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

This component is:

- Reusable
- Readable
- Easy to test
- Easy to maintain
- Follows React best practices

# Module 2: Components & Props (Questions 71–80)

# Props

---

## 71. What are props in React?

### Answer

**Props** (short for **properties**) are read-only values passed from a **parent component** to a **child component**. They allow components to receive data and make components reusable.

### Example

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Greeting name="Alex" />;
}
```

**Output**

```
Hello, Alex
```

### Key Points

- Props are passed from parent to child.
- Props make components reusable.
- Props are read-only.
- Props can contain any JavaScript value.

---

## 72. Why do we use props?

### Answer

Props are used to pass data and behavior between components.

Without props, every component would display the same hardcoded content.

### Example Without Props

```jsx
function UserCard() {
  return <h2>Alex</h2>;
}
```

Only displays **Alex**.

### Example With Props

```jsx
function UserCard({ name }) {
  return <h2>{name}</h2>;
}

function App() {
  return (
    <>
      <UserCard name="Alex" />
      <UserCard name="John" />
      <UserCard name="Sarah" />
    </>
  );
}
```

**Output**

```
Alex
John
Sarah
```

### Benefits

- Reusability
- Dynamic UI
- Better code organization
- Easier maintenance

---

## 73. Are props mutable or immutable? Why?

### Answer

Props are **immutable (read-only)**.

A child component should **never modify** the props it receives.

### Incorrect

```jsx
function User(props) {
  props.name = "John"; // ❌ Never do this
}
```

### Correct

```jsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

### Why?

React follows **one-way data flow**.

```
Parent
   ↓
 Props
   ↓
Child
```

The parent owns the data.

If a child needs to change the data, it should notify the parent using a callback function.

---

## 74. How do you pass props from a parent component to a child component?

### Answer

Props are passed as **attributes** on a component, similar to HTML attributes.

### Parent Component

```jsx
function App() {
  return <User name="Alex" age={25} />;
}
```

### Child Component

```jsx
function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
}
```

### Output

```
Alex
25
```

---

## 75. How do you access props inside a functional component?

### Answer

There are two common ways.

### Method 1: Using `props`

```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
```

---

### Method 2: Using Destructuring (Recommended)

```jsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

Destructuring makes the code cleaner and easier to read.

---

## 76. What is props destructuring, and why is it useful?

### Answer

**Props destructuring** extracts values directly from the `props` object.

### Without Destructuring

```jsx
function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
}
```

---

### With Destructuring

```jsx
function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}
```

### Benefits

- Cleaner code
- Less repetition
- Easier to read
- Easier to maintain

This is the preferred approach in modern React.

---

## 77. How do you pass multiple props to a component?

### Answer

Pass multiple props as separate attributes.

### Parent

```jsx
<User
  name="Alex"
  age={25}
  city="London"
  isAdmin={true}
/>
```

### Child

```jsx
function User({ name, age, city, isAdmin }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
      <p>{isAdmin ? "Admin" : "User"}</p>
    </>
  );
}
```

Props can be of different data types.

---

## 78. Can you pass objects and arrays as props?

### Answer

Yes.

Props can contain **any valid JavaScript value**, including:

- Objects
- Arrays
- Numbers
- Strings
- Booleans
- Functions
- JSX
- Components

### Passing an Object

```jsx
const user = {
  name: "Alex",
  age: 25
};

<User user={user} />
```

Child

```jsx
function User({ user }) {
  return <h2>{user.name}</h2>;
}
```

---

### Passing an Array

```jsx
const skills = ["React", "Node", "TypeScript"];

<User skills={skills} />
```

Child

```jsx
function User({ skills }) {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
```

---

## 79. Can you pass functions as props? Why would you do that?

### Answer

Yes.

Passing functions as props allows a child component to communicate with its parent.

This is the primary way React handles **child-to-parent communication**.

### Parent

```jsx
function App() {
  function handleClick() {
    alert("Button clicked");
  }

  return <Button onClick={handleClick} />;
}
```

### Child

```jsx
function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
}
```

### Why pass functions as props?

- Handle button clicks
- Update parent state
- Submit forms
- Delete items
- Edit data
- Trigger API calls
- Notify parent components of events

---

## 80. What is the difference between props and state?

### Answer

| Props | State |
|--------|-------|
| Passed from parent | Managed inside the component |
| Read-only (immutable) | Mutable using state setters |
| Used for communication | Used for local component data |
| Controlled by the parent | Controlled by the component itself |
| Cannot be modified directly | Updated using `setState` or Hook setters |
| Makes components reusable | Makes components interactive |

### Example

```jsx
function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{title}</h2>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

Here:

- `title` is a **prop** because it comes from the parent.
- `count` is **state** because it belongs to the component and changes over time.

### Interview Tip

A simple way to remember the difference:

- **Props = Data passed into a component.**
- **State = Data owned and managed by the component.**


# Module 2: Components & Props (81–90)

## Component Composition

### 81. What is component composition?

**Answer:**

Component composition is the practice of building complex UIs by combining smaller, reusable components instead of creating one large component.

**Example:**

```jsx
function Header() {
  return <header>Header</header>;
}

function Sidebar() {
  return <aside>Sidebar</aside>;
}

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}
```

**Why it matters**

- Encourages code reuse
- Keeps components small
- Easier to maintain and test


---

### 82. Why is composition preferred over inheritance in React?

**Answer:**

React recommends composition because it provides greater flexibility and avoids the complexity of inheritance.

Instead of extending components, React combines them together.

**Composition**

```jsx
<Card>
  <Profile />
</Card>
```

**Inheritance (Not Recommended)**

```jsx
class ProfileCard extends Card {}
```

**Advantages**

- More reusable
- Less tightly coupled
- Easier to understand
- Easier to maintain


---

### 83. How can one component be composed of multiple child components?

**Answer:**

A parent component can render multiple child components together.

**Example**

```jsx
function Navbar() {
  return <nav>Navbar</nav>;
}

function Hero() {
  return <section>Hero</section>;
}

function Footer() {
  return <footer>Footer</footer>;
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
```

The `Home` component is composed of three reusable components.


---

### 84. What are the advantages of component composition?

**Answer:**

Component composition provides several benefits:

- Reusability
- Cleaner code
- Easier testing
- Better scalability
- Separation of concerns
- Easier maintenance
- Improved readability

Large applications become easier to manage because each component has a single responsibility.


---

### 85. What is the difference between composition and code duplication?

**Answer:**

**Composition**

Reuse existing components.

```jsx
<Card>
  <User />
</Card>
```

**Code Duplication**

Copy the same JSX multiple times.

```jsx
<div className="card">User 1</div>

<div className="card">User 2</div>

<div className="card">User 3</div>
```

**Composition is better because**

- One source of truth
- Easier updates
- Less repetitive code
- Fewer bugs


---

### 86. How do reusable components improve maintainability?

**Answer:**

Reusable components centralize UI logic.

If a button design changes, you update only the `Button` component instead of every page.

Instead of:

```jsx
<button>Save</button>
<button>Delete</button>
<button>Edit</button>
```

Use:

```jsx
<Button text="Save" />
<Button text="Delete" />
<Button text="Edit" />
```

Benefits:

- Easier maintenance
- Consistent UI
- Faster development
- Fewer bugs


---

### 87. What is a layout component?

**Answer:**

A layout component controls the structure of a page without containing business logic.

Example:

```jsx
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

Usage:

```jsx
<Layout>
  <HomePage />
</Layout>
```

Layout components are commonly used for headers, footers, sidebars, and page wrappers.


---

### 88. What is a wrapper component?

**Answer:**

A wrapper component wraps other components to provide shared functionality or styling.

Example:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

Usage:

```jsx
<Card>
  <Profile />
</Card>
```

Wrapper components reduce duplication and keep layouts consistent.


---

### 89. What are presentational and container components?

**Answer:**

### Presentational Components

Responsible only for displaying UI.

```jsx
function UserCard({ name }) {
  return <h2>{name}</h2>;
}
```

### Container Components

Responsible for fetching data and managing logic.

```jsx
function UserContainer() {
  const user = { name: "Alex" };

  return <UserCard name={user.name} />;
}
```

Modern React often replaces container components with custom hooks, but the concept is still useful.


---

### 90. What are common mistakes developers make when composing components?

**Answer:**

Common mistakes include:

- Creating very large components
- Deep component nesting
- Duplicating UI instead of reusing components
- Passing too many props (prop drilling)
- Mixing business logic with UI
- Making components responsible for multiple tasks
- Ignoring the `children` prop when appropriate
- Not extracting reusable components
- Overengineering small components
- Poor component naming

**Best Practices**

- Keep components small.
- Give each component a single responsibility.
- Prefer composition over duplication.
- Use `children` for flexible layouts.
- Extract repeated UI into reusable components.

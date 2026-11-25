# 1. What is React?
Answer:

React is a JavaScript library used to build interactive user interfaces, especially single-page applications (SPAs).

It allows developers to divide a website into small, reusable pieces called components.

Main features:
- Component-based architecture.
- Reusable UI.
- Virtual DOM and reconciliation.
- One-way data flow.
- State management using Hooks.
- Declarative UI development.
Example:
```js
function App() {
  return <h1>Hello, React!</h1>;
}
```

React is a library, not a complete framework. It mainly handles the UI layer.

# 2. Why do we use React instead of JavaScript alone?
Answer:

In normal JavaScript, we often manually update HTML elements using DOM methods.

React makes this easier by managing UI updates automatically when data changes.

Advantages:
- Reusable components.
- Easier state management.
- Automatic UI updates.
- Better code organization.
- Large ecosystem and community.
- Easier development of complex interfaces.

# 3. What is JSX?
Answer:

JSX stands for JavaScript XML. It is a syntax extension that allows us to write HTML-like code inside JavaScript.

Browsers cannot directly understand JSX. Build tools transform it into JavaScript.

Example:
```js
const element = <h1>Hello World</h1>;
```

JSX makes UI code easier to read and maintain.

# 4. What are the rules of JSX?
Answer:

The main JSX rules are:
1. Return a single parent element or use a Fragment.
2. Use className instead of class.
3. Use htmlFor instead of for.
4. Close all tags.
5. Use curly braces {} for JavaScript expressions.
6. Use camelCase for most DOM event properties.

Example:
```js
function App() {
  const name = "React";

  return (
    <>
      <h1 className="title">Hello {name}</h1>
      <input type="text" />
    </>
  );
}
```

# 5. What is the difference between React and ReactDOM?
Answer:

- React: Provides the core functionality for creating components, managing state and describing UI.
- ReactDOM: Connects React to the browser DOM and handles rendering React components into web pages.
Example:
```js
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
```

# 6. What is a component in React?
Answer:

A component is a reusable and independent piece of UI.

It can contain its own logic, data and visual elements.

React mainly uses two types of components:
1. Function components.
2. Class components.
Example:
function Header() {
  return <h1>My Website</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome!</p>
    </div>
  );
}


Here, Header is reused inside App.
7. What is the difference between functional and class components?
Answer:
Functional component	Class component
Written as a JavaScript function	Written as a JavaScript class
Uses Hooks	Uses lifecycle methods
Easier to write and maintain	More verbose
Does not use this	Uses this
Recommended for modern React	Still supported

Functional component:
function Welcome() {
  return <h1>Hello</h1>;
}


Class component:
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}


Modern React development generally prefers functional components with Hooks.
8. What is the Virtual DOM?
Answer:

The Virtual DOM is an in-memory representation of the UI that React uses to calculate updates.

When state changes:
1. React renders the component again.
2. It creates a new description of the UI.
3. It compares the new result with the previous one.
4. It calculates the required changes.
5. It updates the actual DOM during the commit phase.
Example:

Suppose a counter changes from 1 to 2. React updates the relevant UI instead of manually rebuilding the entire webpage.

Important: Never claim that the Virtual DOM is always faster than the real DOM. Its main benefit is efficient, declarative UI management.
9. What is the difference between Real DOM and Virtual DOM?
Answer:
Real DOM	Virtual DOM
Represents actual webpage elements	Represents UI in memory
Directly interacts with the browser	Used by React to calculate updates
DOM changes can trigger layout and rendering work	Helps determine necessary DOM changes
Managed through browser APIs	Managed through React

10. What is reconciliation in React?
Answer:

Reconciliation is the process React uses to compare the previous UI description with the new one and determine what needs to change.

React uses this process when components render again due to updated state or props.

Example:

If a list changes from:
["Apple", "Banana"]


to:
["Apple", "Orange"]


React identifies the change and updates the necessary UI.

Remember: Rendering calculates what the UI should look like. Reconciliation determines how the result relates to the previous UI.

Part 2: Props, State and Components
11. What are Props in React?
Answer:

Props (properties) are used to pass data from a parent component to a child component.

Props are read-only. A child should not directly modify the props it receives.

Example:
function User({ name }) {
  return <h2>Hello, {name}</h2>;
}

function App() {
  return <User name="Utpanna" />;
}


Here, name is passed from the parent to the child.
12. What is State in React?
Answer:

State is data that a component manages internally and that can change over time.

When state changes through its setter, React schedules a re-render so the UI can reflect the new value.

Example:
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}


Here, count is state.
13. What is the difference between Props and State?
Answer:
Props	State
Passed from parent to child	Managed by a component
Read-only for the receiving component	Updated using a setter or reducer
Used to pass data	Used to store changing data
Changes when parent provides new values	Changes through state updates

Example:
- Props: Passing a user's name to a profile component.
- State: Storing whether a dropdown is open or closed.
14. What is one-way data binding in React?
Answer:

One-way data binding means data flows in one direction, from parent components to child components through props.

If a child needs to update parent-owned data, the parent passes a callback function to the child.

Example:
function Child({ updateName }) {
  return (
    <button onClick={() => updateName("John")}>
      Change Name
    </button>
  );
}

function App() {
  const [name, setName] = useState("Alex");

  return (
    <>
      <h1>{name}</h1>
      <Child updateName={setName} />
    </>
  );
}


15. What is prop drilling?
Answer:

Prop drilling happens when data is passed through multiple components just to reach a deeply nested child component.

It can make code difficult to maintain.

Example:

App → Dashboard → Profile → User

If only User needs the data, every intermediate component may have to pass it down.

Solutions:
- Context API.
- State management libraries such as Redux or Zustand.
- Component composition.
16. What is lifting state up?
Answer:

Lifting state up means moving shared state from child components to their nearest common parent.

This allows multiple child components to access and update the same data through props and callbacks.

Example:

If two components need the same username, keep the username state in their common parent and pass it to both children.
17. What is a Fragment in React?
Answer:

A Fragment lets us group multiple elements without creating an additional DOM element.

Example:
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}


Instead of adding an unnecessary div, we use a Fragment.
18. What is conditional rendering?
Answer:

Conditional rendering means displaying different UI elements depending on a condition.

React supports JavaScript conditional expressions such as:
- if/else
- Ternary operator.
- Logical AND (&&).
Example:
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome Back</h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
}


19. What are keys in React?
Answer:

Keys are special attributes that help React identify individual elements in a list.

They help React understand which items were added, removed or reordered.

Example:
const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
];

function App() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


Use stable and unique IDs as keys whenever possible.
20. Why should we avoid using array indexes as keys?
Answer:

Array indexes can create problems when list items are inserted, deleted or reordered.

React may associate the wrong component state with an item.

For example, if a list contains input fields and an item is deleted from the beginning, using indexes as keys can cause input values to appear under the wrong items.

Best practice: Use stable IDs instead of array indexes.

Part 3: React Hooks
21. What are Hooks in React?
Answer:

Hooks are special functions that allow functional components to use React features such as state, context, refs and effects.

Hooks were introduced in React 16.8.

Common Hooks:
Hook	Purpose
useState	Manage state
useEffect	Synchronize with external systems
useContext	Access context data
useRef	Store values or access DOM elements
useMemo	Cache calculated values
useCallback	Cache function references
useReducer	Manage complex state logic
useLayoutEffect	Run an effect before browser repaint

22. What are the Rules of Hooks?
Answer:

React has two important Rules of Hooks:
1. Only call Hooks at the top level of a function component or custom Hook.
2. Never call Hooks inside loops, conditions, nested functions or event handlers.
Incorrect:
if (isLoggedIn) {
  const [name, setName] = useState("");
}


Correct:
const [name, setName] = useState("");

if (isLoggedIn) {
  console.log(name);
}


Why?

React relies on Hooks being called in the same order on every render to associate state with the correct Hook.
23. What is useState?
Answer:

useState is a React Hook used to create and manage state inside functional components.

It returns two values:
1. Current state.
2. A function to update that state.
Example:
const [count, setCount] = useState(0);


- count: Current state.
- setCount: Updates the state.
- 0: Initial value.
When we call setCount, React schedules a re-render.
24. What is useEffect?
Answer:

useEffect is a Hook used to synchronize a component with external systems, such as APIs, timers, subscriptions and browser event listeners.

Example:
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return <h1>Total Users: {users.length}</h1>;
}


Here, the Effect fetches data after the component commits.

Important: Do not use useEffect for every calculation. If something can be calculated directly from existing props or state, calculate it during rendering.
25. What is the dependency array in useEffect?
Answer:

The dependency array tells React when an Effect needs to run again.

There are three common cases:

1. No dependency array
useEffect(() => {
  console.log("Effect executed");
});


Runs after every commit where the component renders.

2. Empty dependency array
useEffect(() => {
  console.log("Effect executed");
}, []);


Runs when the component mounts, with an additional development check under Strict Mode.

3. With dependencies
useEffect(() => {
  console.log("Count changed");
}, [count]);


Runs after the initial commit and when count changes.
26. What is the cleanup function in useEffect?
Answer:

A cleanup function is used to remove or stop something created by an Effect.

It helps prevent memory leaks, duplicate subscriptions and unwanted background work.

React runs cleanup:
- Before an Effect runs again with changed dependencies.
- When the component unmounts.
Example:
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);


Here, clearInterval stops the timer during cleanup.
27. What is useRef?
Answer:

useRef is a Hook used to store a value that persists between renders without causing a re-render when it changes.

It is commonly used for:
- Accessing DOM elements.
- Storing timer IDs.
- Keeping mutable values.
- Tracking previous values.
Example:
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleFocus}>
        Focus Input
      </button>
    </>
  );
}


28. What is the difference between useState and useRef?
Answer:
useState	useRef
Stores component state	Stores a mutable value
Updating it triggers a re-render	Updating .current does not trigger a re-render
Used for UI data	Used for DOM references and non-visual values
Updated using setter function	Updated through .current

Example:

Use useState for a counter displayed on the screen.

Use useRef for an input DOM reference.
29. What is useContext?
Answer:

useContext is a Hook used to access data shared through React Context without passing props through every intermediate component.

It helps solve prop drilling.

Example:
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Home() {
  const theme = useContext(ThemeContext);

  return <h1>Current Theme: {theme}</h1>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Home />
    </ThemeContext.Provider>
  );
}


30. What is useReducer?
Answer:

useReducer is a Hook used to manage state through a reducer function.

It is useful when state logic becomes complex or involves multiple related actions.

It takes:
- A reducer function.
- An initial state.
It returns:
- Current state.
- A dispatch function.
Example:
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <>
      <h2>{state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrease
      </button>
    </>
  );
}


31. What is the difference between useState and useReducer?
Answer:
useState	useReducer
Best for simple state	Useful for complex state logic
Direct setter function	Uses dispatch and reducer
Less code	More structured logic
Good for simple values	Good for related state transitions

Example:
- useState: Toggle button, input value, counter.
- useReducer: Shopping cart, multi-step form, complex state transitions.
32. What is useMemo?
Answer:

useMemo is a Hook that caches the result of a calculation between renders.

It helps avoid repeating expensive calculations when dependencies have not changed.

Example:
const filteredUsers = useMemo(() => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
}, [users, search]);


React recalculates the value when users or search changes.

Important: Use it when there is a meaningful performance benefit, not for every variable.
33. What is useCallback?
Answer:

useCallback is a Hook that caches a function reference between renders until its dependencies change.

It is useful when passing callbacks to memoized child components or when a stable function reference is needed.

Example:
const handleClick = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);


34. What is the difference between useMemo and useCallback?
Answer:

Both Hooks help with memoization, but they cache different things.
useMemo	useCallback
Caches a calculated value	Caches a function reference
Returns the calculation result	Returns the function
Used for expensive calculations	Used for stable callbacks

Example:
const total = useMemo(() => price * quantity, [price, quantity]);

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);


Easy trick:
- useMemo = Memoize a value.
- useCallback = Memoize a function.
35. What is useLayoutEffect?
Answer:

useLayoutEffect is similar to useEffect, but it runs after React updates the DOM and before the browser paints the screen.

It is useful when we need to measure or synchronously adjust layout before the user sees it.

Example:
useLayoutEffect(() => {
  const height = ref.current.getBoundingClientRect().height;
  console.log(height);
}, []);


Difference:
- useEffect: Usually runs after the browser paints.
- useLayoutEffect: Runs before the browser paints.
Use useEffect by default. useLayoutEffect can block painting.

Part 4: Rendering and Performance
36. What causes a component to re-render in React?
Answer:

A component generally re-renders when:
1. Its state changes.
2. Its parent component re-renders.
3. A context value it consumes changes.
4. An external store subscription it uses reports an update.
Important: A re-render does not always mean the actual DOM changes. React may calculate the same UI and commit no meaningful DOM updates.
37. What is React.memo?
Answer:

React.memo is a higher-order component that can prevent a function component from re-rendering when its props have not changed.

It performs a shallow comparison of props by default.

Example:
import { memo } from "react";

const User = memo(function User({ name }) {
  console.log("User rendered");

  return <h2>{name}</h2>;
});


If the props remain unchanged, React can skip rendering this component when its parent re-renders.

Important: React.memo is an optimization, not a guarantee. It does not prevent re-renders caused by the component's own state or consumed context.
38. What is batching in React?
Answer:

Batching means React groups multiple state updates together to reduce unnecessary rendering work.

Example:
function handleClick() {
  setName("John");
  setAge(25);
  setCity("Delhi");
}


React can batch these updates so they do not each require a separate render.

Modern React supports automatic batching across many asynchronous contexts as well.
39. What is React StrictMode?
Answer:

StrictMode is a development-only tool that helps identify potential problems in React applications.

It helps detect:
- Impure rendering.
- Missing Effect cleanup.
- Deprecated API usage.
- Unsafe side effects.
Example:
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);


Important: Strict Mode may run components and Effects through additional development checks. This does not mean production automatically runs them twice.
40. What is lazy loading in React?
Answer:

Lazy loading means loading a component only when it is needed instead of including all components in the initial JavaScript bundle.

It helps reduce initial loading time.

React provides lazy() and Suspense for this.

Example:
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}


41. What is Suspense in React?
Answer:

Suspense is a React component that displays fallback UI while its children are waiting for supported content to become available.

It is commonly used with:
- Lazy-loaded components.
- Suspense-enabled data sources.
- Framework integrations and Server Components.
Example:
<Suspense fallback={<h2>Loading...</h2>}>
  <Dashboard />
</Suspense>


While the lazy-loaded component is loading, React displays the fallback.
42. What is code splitting?
Answer:

Code splitting means dividing application JavaScript into smaller bundles that can be loaded when needed.

Instead of loading the entire application at once, users download only the code required for the current page or feature.

Benefits:
- Smaller initial bundle.
- Faster initial loading.
- Better application performance.
React supports code splitting through React.lazy() and dynamic imports.
43. How do you optimize React application performance?
Answer:

I use the following techniques:
1. Use React.memo to avoid unnecessary child renders when useful.
2. Use useMemo for expensive calculations.
3. Use useCallback for stable function references when needed.
4. Implement lazy loading and code splitting.
5. Avoid unnecessary state updates.
6. Keep state close to the components that need it.
7. Use stable keys in lists.
8. Virtualize very large lists.
9. Avoid unnecessary Context updates.
10. Use React DevTools Profiler to identify actual performance problems.
Interview tip: Always measure performance before optimizing. Adding memoization everywhere can make code more complicated without making it faster.
44. What is React Fiber?
Answer:

React Fiber is the internal reconciliation architecture introduced in React 16.

It allows React to break rendering work into smaller units and prioritize updates.

It supports features such as:
- Interruptible rendering.
- Update prioritization.
- Concurrent rendering.
- Improved responsiveness.
Simple example:

Imagine a webpage performing a heavy rendering task while the user is typing. Fiber helps React manage rendering work so urgent updates can receive priority.

Remember: Fiber is an internal React implementation detail, not a Hook or an API you directly use.
45. What is the difference between rendering and committing in React?
Answer:

React updates UI in two main phases:

1. Render phase

React calls components and calculates what the new UI should look like.

2. Commit phase

React applies the necessary changes to the DOM and performs related commit work.

Easy way to remember:
- Render = Calculate changes.
- Commit = Apply changes.
The render phase can be repeated or interrupted in concurrent rendering. The commit phase applies the finished update.

Part 5: Advanced React concepts
46. What is a Custom Hook in React?
Answer:

A Custom Hook is a JavaScript function that allows us to reuse stateful logic between multiple components.

Its name must start with use.

Example:
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return { count, increment };
}


Using the Custom Hook:
function App() {
  const { count, increment } = useCounter();

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>Increase</button>
    </>
  );
}


Benefits:
- Reuse logic.
- Reduce code duplication.
- Keep components clean.
- Improve maintainability.
47. What is the difference between controlled and uncontrolled components?
Answer:

These terms usually refer to how form inputs are managed.

Controlled component:

The input value is controlled by React state.
function App() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}


Uncontrolled component:

The input maintains its own value in the DOM. We access it using a ref.
function App() {
  const nameRef = useRef(null);

  function handleSubmit() {
    console.log(nameRef.current.value);
  }

  return (
    <>
      <input ref={nameRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}


Controlled	Uncontrolled
Uses React state	Uses DOM to store input value
Uses value	Commonly uses defaultValue
Uses onChange	Can use refs
Easier validation	Useful for simpler forms

48. What are Portals in React?
Answer:

Portals allow us to render a component's UI into a different DOM location outside its parent DOM hierarchy.

They are useful for:
- Modals.
- Popups.
- Tooltips.
- Dialog boxes.
Example:
import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
    <div className="modal">
      <h2>Hello from Modal</h2>
    </div>,
    document.getElementById("modal-root")
  );
}


Even though the modal is rendered elsewhere in the DOM, it remains part of the React component tree.
49. What are Error Boundaries in React?
Answer:

Error Boundaries are React components that catch JavaScript errors in their child component tree during rendering and display fallback UI instead of allowing the affected part of the application to crash.

They are useful for:
- Handling rendering errors.
- Displaying fallback screens.
- Improving application reliability.
Example:
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }

    return this.props.children;
  }
}


Usage:
<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>


Important: Error Boundaries do not automatically catch errors in event handlers, asynchronous callbacks or ordinary server-side code.
50. What is React Server Components (RSC)?
Answer:

React Server Components are components that render on the server.

They allow developers to perform work such as accessing databases and fetching data on the server without sending that component's JavaScript to the browser.

Benefits:
- Reduce client-side JavaScript.
- Access server-side resources.
- Improve initial loading opportunities.
- Separate server and client responsibilities.
Example (Next.js App Router):
// app/users/page.jsx

async function UsersPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
}

export default UsersPage;


In Next.js App Router, components are Server Components by default unless marked with "use client".

Remember:
- Server Components run on the server.
- Client Components support browser interactions, state and event handlers.
- "use client" defines a client boundary, not simply a command to render everything only in the browser.
# 1. What is React and why do we use it?

React is a JavaScript library used to build interactive user interfaces, especially single-page applications (SPAs).

It was developed by Meta.

Why use React?
- Component-based architecture.
- Reusable code.
- Efficient UI updates.
- Easy state management.
- Large ecosystem and community.
- Works well with APIs and modern frameworks like Next.js.

```js
function App() {
  return <h1>Hello React!</h1>;
}

export default App;
```

React is a JavaScript library for building reusable, component-based user interfaces. It helps developers create interactive applications and efficiently update the UI when data changes.

# 2. What are components and JSX?

Components are reusable pieces of UI in React.

JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript.

```js
function Welcome() {
  return <h1>Welcome to React</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}

export default App;
```

Here:
- Welcome is a component.
- <Welcome /> renders that component.
- We reuse it twice without repeating its implementation.


Important JSX rules:
- Return one parent element (or a Fragment).
- Use className instead of class.
- Close all tags.
- Use {} to write JavaScript expressions.

```js
const name = "Utpanna";

return <h1>Hello {name}</h1>;
```

# 3. What is the difference between props and state?

Props and state both manage data in React, but they have different purposes.

Props	                                State
Passed from parent to child	            Managed inside a component
Read-only to the receiving component	Updated using a setter
Used to share data	                    Used to manage changing data

```js
function User({ name }) {
  return <h2>Hello {name}</h2>;
}

function App() {
  return <User name="Utpanna" />;
}
```

```js
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
```

Props pass data between components, while state stores and manages data that can change over time within a component.


# 4. What are functional components?

Functional components are JavaScript functions that return React elements.

They are the standard way to create components in modern React.
```js 
function Greeting() {
  return <h1>Hello World</h1>;
}

export default Greeting;
```

They can use React Hooks such as useState and useEffect to manage state and side effects.

# 5. What is useState?
useState is a React Hook used to add and manage state in functional components.

```js
const [state, setState] = useState(initialValue);
```
```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  );
}
```

useState(0) initializes count with 0.
count stores the current value.
setCount updates the state.
React schedules a re-render when state changes.
The updated value appears in the UI.

Correct:
```js
setCount(prev => prev + 1);
```


# 6. What is useEffect and what is a dependency array?
useEffect is a Hook used to handle side effects in functional components.

Examples:
- Fetching API data.
- Setting document titles.
- Adding event listeners.
- Setting timers.
- Subscribing to external services.

```js
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Count: {count}
    </button>
  );
}
```
Three dependency array situations:
1. No dependency array
```js
useEffect(() => {
  console.log("Runs after every commit");
});
```

2. Empty dependency array
```js
useEffect(() => {
  console.log("Runs after the initial mount");
}, []);
```

3. With dependencies
```js
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(timer);
}, []);
```
The cleanup function prevents the interval from continuing after the effect is cleaned up.
useEffect handles side effects. Its dependency array controls when the effect should run again, and its cleanup function handles resources such as timers and event listeners.

# 7. What is useRef?
useRef is a React Hook used to store a mutable value that persists between renders without causing a re-render when changed.

Common uses:
- Accessing DOM elements.
- Focusing input fields.
- Storing timer IDs.
- Keeping previous values.

Example: Focus an input field
```js
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} placeholder="Enter name" />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}
```
1. useRef(null) creates a ref.
2. ref={inputRef} connects it to the input.
3. inputRef.current accesses the DOM element.
4. .focus() focuses the input.

useState: Updating it triggers a re-render.
useRef: Updating .current does not trigger a re-render.


# 8. What are useMemo and useCallback?

Both are React Hooks used for performance optimization, but they do different things.
useMemo: Memoizes the result of a calculation.
```js
import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);

  const squared = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <>
      <h2>{squared}</h2>
      <button onClick={() => setNumber(prev => prev + 1)}>
        Increase
      </button>
    </>
  );
}
```

# 9. What is the difference between controlled and uncontrolled components?

Controlled component: Form data is managed by React state.

```js
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

Here React controls the input value.

Uncontrolled component: The DOM manages the input value, and we access it using a ref.

```js
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

Difference:
- Controlled: Uses state and onChange.
- Uncontrolled: Uses DOM values, commonly through refs.


# 10. What is conditional rendering?

Conditional rendering means displaying different UI elements depending on a condition.

```js
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  }

  return <h1>Please Login</h1>;
}
```

Example using ternary:
```js
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  );
}
```

Example using &&:

```js
{isLoggedIn && <h1>Welcome User</h1>}
```
# 11. What are lists and keys in React?

React uses the JavaScript map() method to render lists.

Keys help React identify which list items have changed, been added, or removed.

```js
function App() {
  const users = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Why are keys important?
- Help React track list items.
- Improve reconciliation.
- Reduce incorrect UI updates when lists change.
Important: Prefer stable, unique IDs. Avoid array indexes as keys when items can be reordered, inserted, or deleted.
# 12. What is lifting state up?

Lifting state up means moving state from child components to their nearest common parent so multiple components can share the same data.

```js
import { useState } from "react";

function ChildA({ name, setName }) {
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

function ChildB({ name }) {
  return <h2>Hello {name}</h2>;
}

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <ChildA name={name} setName={setName} />
      <ChildB name={name} />
    </>
  );
}
```
# 13. What is prop drilling?

Prop drilling means passing data through multiple intermediate components to reach a deeply nested component.

```js
function App() {
  const user = "Utpanna";

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <h2>Hello {user}</h2>;
}
```

Here, Parent only passes the data. It doesn't actually need it.

How can we avoid prop drilling?
- Context API.
- State management libraries.
- Component composition.

# 14. What is Context API?
Context API allows us to share data across multiple components without manually passing props through every level.
```js
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const user = "Utpanna";

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);

  return <h2>Hello {user}</h2>;
}
```

createContext() creates a context.
Provider makes the value available to descendants.
useContext() reads the value.
We don't need to pass the user prop through every component.

Common use cases:
- Authentication data.
- Theme settings.
- Language preferences.
- Shared application settings.

# 15. What is React Router?
React Router is a library used to handle navigation between pages or views in React applications without performing a full page reload for every route change.
```js
npm install react-router-dom
```
```js
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

BrowserRouter: Enables browser-based routing.
Routes: Holds route definitions.
Route: Maps a URL path to a component.
Link: Navigates without a normal full-page reload.


# 16. Explain React component lifecycle concepts.
A component lifecycle describes the different stages a component goes through.

There are three main concepts:

1. Mounting: Component is added to the UI.

2. Updating: Component re-renders when its props or state change.

3. Unmounting: Component is removed from the UI.

In functional components, useEffect can handle many side-effect tasks associated with these stages.
```js

import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Effect setup");

    return () => {
      console.log("Effect cleanup");
    };
  }, []);

  return <h1>Hello React</h1>;
}
```
# 17. What is Virtual DOM and reconciliation?

The Virtual DOM is a lightweight JavaScript representation of the UI.

When state or props change:
1. React renders an updated UI representation.
2. React compares it with the previous rendered representation.
3. This process is part of reconciliation.
4. React commits the necessary changes to the actual DOM
```js
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```
When count changes, React updates the rendered output and commits the required DOM changes.

The Virtual DOM represents the UI in memory. Reconciliation is the process React uses to determine what changed between renders and update the actual DOM accordingly.
# 18. What is React.memo?

React.memo is a higher-order component that can skip re-rendering a component when its props are unchanged according to its comparison.

```js
import React, { useState } from "react";

const Child = React.memo(function Child({ name }) {
  console.log("Child rendered");

  return <h2>Hello {name}</h2>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child name="Utpanna" />

      <button onClick={() => setCount(prev => prev + 1)}>
        Count: {count}
      </button>
    </>
  );
}
```

Here, the parent re-renders when count changes, but the child can skip re-rendering because its name prop is unchanged.

# 19. What are custom Hooks?

Custom Hooks are JavaScript functions that allow us to reuse stateful logic between components.
A custom Hook name must start with use.

```js
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
```

Use the custom Hook:
```js
function App() {
  const { data, loading, error } =
    useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Reuse logic.
Keep components clean.
Avoid repeating the same state and effect logic.
Make code easier to maintain.


# 20. Explain form handling and validation in React.

React forms commonly use controlled components, where input values are managed using state.
```js
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    setError("");
    alert("Login successful");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}
```

value: Connects the input to React state.
onChange: Updates the state.
onSubmit: Handles form submission.
preventDefault(): Prevents the browser's default form submission behavior.
Validation: Checks whether the entered data is correct.
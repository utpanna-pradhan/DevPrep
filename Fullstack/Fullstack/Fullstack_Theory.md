# Part 1: HTML, CSS and JavaScript

## Q1. What is full-stack development?
Answer: Full-stack development means working on both the frontend and backend of a web application, including its database.

Explanation:
- Frontend: What users see and interact with, such as buttons, forms, and pages.
- Backend: Handles business logic, authentication, and API requests.
- Database: Stores application data.
Example: In a shopping website, React displays products, Node.js processes orders, and MongoDB stores product and order information.

## Q2. What is HTML?
Answer: HTML stands for HyperText Markup Language. It defines the structure of a webpage.

Example:
```html
<h1>Welcome</h1>
<p>This is my website.</p>
<button>Click Me</button>
```


Explanation: The heading displays a title, the paragraph displays text, and the button creates a clickable element. HTML provides the structure, not the styling or application logic.

## Q3. What is the difference between HTML, CSS, and JavaScript?

Answer: HTML creates the structure, CSS controls the appearance, and JavaScript adds functionality
Easy way to remember: HTML is the skeleton, CSS is the clothing, and JavaScript makes things work.

# Q4. What is the difference between id and class in HTML?

Answer: An id identifies a particular element, while a class can be shared by multiple elements.
<h1 id="title">Welcome</h1>

<p class="text">First paragraph</p>
<p class="text">Second paragraph</p>


#title {
  color: blue;
}

.text {
  color: green;
}


Explanation: Use # to select an ID in CSS and . to select a class. IDs should be unique within a page, while classes are reusable.
Q5. What is CSS Flexbox?
Answer: Flexbox is a CSS layout system used to arrange elements in a row or column and control their alignment and spacing.
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}


Explanation:
- display: flex enables Flexbox.
- justify-content controls alignment along the main axis.
- align-items controls alignment along the cross axis.
- gap adds space between items.
Interview tip: Flexbox is especially useful for navigation bars, button groups, and centering content.
Q6. What is JavaScript?
Answer: JavaScript is a programming language that adds interactivity and logic to web applications.

Example:
let name = "Rahul";

function greet() {
  return `Hello, ${name}!`;
}

console.log(greet());


Output:
Hello, Rahul!


Explanation: The variable stores a name, the function creates a greeting, and console.log() displays the result.

JavaScript can run in browsers and on the server using Node.js.
Q7. What is the difference between var, let, and const?
Answer: They are used to declare variables, but differ in scope and reassignment.
Keyword	Scope	Can reassign?
var	Function-scoped	Yes
let	Block-scoped	Yes
const	Block-scoped	No

Example:
let age = 25;
age = 26; // Allowed

const country = "India";
// country = "USA"; // Error

var city = "Delhi";
city = "Mumbai"; // Allowed


Explanation: In modern JavaScript, prefer const by default and use let when reassignment is needed. Avoid var in most new code because its function-scoping behavior can cause confusion.

Remember that const prevents reassignment, but does not make an object immutable.
Q8. What is the difference between == and ===?
Answer: == compares values after possible type conversion, while === compares values without type conversion.
console.log(5 == "5");  // true
console.log(5 === "5"); // false


Explanation: With ==, JavaScript converts the string "5" to a number for comparison. With ===, the number 5 and string "5" have different types.

Interview tip: Prefer === because it avoids unexpected type conversions.
Q9. What is the difference between null and undefined?
Answer: undefined generally means a value has not been assigned, while null represents an intentionally empty value.
let username;

console.log(username); // undefined

let selectedUser = null;

console.log(selectedUser); // null


Explanation: The first variable has no assigned value. The second explicitly represents the absence of a selected user.

A common interview detail:
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"


The second result is a historical JavaScript quirk, not evidence that null is an object.
Q10. What is the difference between a function declaration and an arrow function?
Answer: Both define functions, but arrow functions have different this behavior and syntax.

Function declaration:
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5


Arrow function:
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5

Part 2: JavaScript Interview Questions 11–20
These concepts are especially important for React, Node.js, and full-stack interviews. Each answer includes a simple explanation and an example you can use in an interview.
Q11. What is the difference between an array and an object?
Answer: An array stores an ordered collection of values, while an object stores data as key-value pairs.
const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple

const user = {
  name: "Rahul",
  age: 25
};

console.log(user.name); // Rahul


Explanation:
- Arrays use indexes, starting from 0.
- Objects use keys such as name and age.
Interview use: Arrays are useful for lists of products; objects are useful for storing one user's details.
Q12. What is the difference between map(), filter(), and find()?
Answer: These are array methods used to transform or search array elements.
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(n => n * 2));
// [2, 4, 6, 8, 10]

console.log(numbers.filter(n => n > 3));
// [4, 5]

console.log(numbers.find(n => n > 3));
// 4


Explanation:
Method	Purpose	Returns
map()	Transforms every element	New array
filter()	Keeps matching elements	New array
find()	Finds the first matching element	Element or undefined

React example: Use map() to render a list of products on a webpage.
Q13. What is the difference between forEach() and map()?
Answer: forEach() executes a function for each element, while map() creates and returns a new array containing the results.
const numbers = [1, 2, 3];

const result1 = numbers.forEach(n => n * 2);
console.log(result1); // undefined

const result2 = numbers.map(n => n * 2);
console.log(result2); // [2, 4, 6]


Explanation: Use forEach() for side effects, such as logging or performing an action for each item. Use map() when you need a transformed array.
Q14. What is scope in JavaScript?
Answer: Scope determines where a variable can be accessed in your code.

There are three commonly discussed types:
- Global scope: Accessible throughout the relevant global scope.
- Function scope: Accessible within a function.
- Block scope: Accessible within a block, such as an if statement, when declared with let or const.
let name = "Rahul";

function greet() {
  let message = "Hello";
  console.log(message, name);
}

greet(); // Hello Rahul

// console.log(message); // ReferenceError


Explanation: name is accessible inside the function because it is in an outer scope. message exists only inside the function.

Interview tip: var is function-scoped, whereas let and const are block-scoped.
Q15. What is hoisting in JavaScript?
Answer: Hoisting describes how JavaScript processes declarations before executing the code.
console.log(a); // undefined
var a = 10;


This happens because the var declaration is initialized with undefined before the assignment executes.

Compare this with let:
// console.log(b); // ReferenceError
let b = 20;


Explanation: Variables declared with let and const cannot be accessed before initialization. This period is called the temporal dead zone.

Interview tip: Function declarations can generally be called before their declaration in the same scope.
Q16. What is a callback function?
Answer: A callback is a function passed to another function to be executed by it.
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function finish() {
  console.log("Welcome!");
}

greet("Rahul", finish);


Output:
Hello Rahul
Welcome!


Explanation: The finish function is passed into greet and called after the greeting.

Callbacks are common in event handling, array methods, and asynchronous operations.
Q17. What is a Promise in JavaScript?
Answer: A Promise represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected.
const result = new Promise((resolve, reject) => {
  resolve("Data received");
});

result
  .then(data => console.log(data))
  .catch(error => console.log(error));


Output:
Data received


Explanation:
- resolve() fulfills the Promise.
- reject() rejects the Promise.
- .then() handles fulfillment.
- .catch() handles rejection.
Real-world example: Fetching user information from a backend API.
Q18. What are async and await?
Answer: async and await make asynchronous JavaScript easier to read and write.
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getData();


Explanation:
- async makes the function return a Promise.
- await waits for a Promise to settle before continuing that async function.
- try...catch handles errors.
Interview tip: fetch() does not automatically reject for HTTP errors such as 404, so check response.ok.
Q19. What is a closure in JavaScript?
Answer: A closure occurs when a function retains access to variables from its outer lexical scope, even after the outer function has finished executing.
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3


Explanation: The inner function remembers the count variable between calls, even though counter() has already returned.

Real-world use: Closures help maintain private state and are useful in callbacks and function factories.
Q20. What is the difference between synchronous and asynchronous JavaScript?
Answer: Synchronous code executes step by step, while asynchronous operations allow other work to continue while waiting for a result.

Synchronous example:
console.log("First");
console.log("Second");
console.log("Third");


Output: First, Second, Third.

Asynchronous example:
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

console.log("Third");


Output:
First
Third
Second


Explanation: The timer callback runs later, so JavaScript continues to the third log first. This is related to the event loop, which coordinates queued callbacks and asynchronous work.


Part 3: JavaScript Interview Questions 21–30
Simple answers, clear explanations, and code examples. These concepts are frequently asked in React and full-stack interviews.
Q21. What is the this keyword in JavaScript?
Answer: this refers to a value determined by how a function is called.
const user = {
  name: "Rahul",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Rahul


Explanation: Here, this refers to the user object because greet() is called as user.greet().

Remember that arrow functions do not have their own this; they inherit it from the surrounding scope.
Q22. What are arrow functions?
Answer: Arrow functions provide a shorter way to write functions.
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8


Explanation: When an arrow function has a single expression, you can omit braces and the return keyword.

Interview tip: Arrow functions are common in React event handlers, callbacks, and array methods. Unlike regular functions, they cannot be used as constructors with new.
Q23. What are spread and rest operators?
Answer: Both use ..., but their purpose depends on where they are used.

Spread: Expands elements from an array or properties from an object.
const first = [1, 2];
const second = [...first, 3, 4];

console.log(second); // [1, 2, 3, 4]


Rest: Collects multiple values into an array.
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6


Easy trick: Spread expands; rest collects.
Q24. What is destructuring?
Answer: Destructuring extracts values from arrays or properties from objects into variables.
const user = {
  name: "Rahul",
  age: 25
};

const { name, age } = user;

console.log(name); // Rahul
console.log(age);  // 25


Array example:
const colors = ["red", "blue"];

const [first, second] = colors;

console.log(first); // red


React use: Extracting props, such as function Welcome({ name }).
Q25. What is the difference between shallow copy and deep copy?
Answer: A shallow copy copies the outer structure but retains references to nested objects. A deep copy also duplicates nested data.
const original = {
  name: "Rahul",
  address: { city: "Delhi" }
};

const shallow = { ...original };
shallow.address.city = "Mumbai";

console.log(original.address.city); // Mumbai


Explanation: Both objects refer to the same nested address object.

For supported data types, use structuredClone() for a deep copy:
const deep = structuredClone(original);
deep.address.city = "Pune";

console.log(original.address.city); // Mumbai
console.log(deep.address.city);     // Pune


Interview tip: Spread syntax creates only a shallow copy. structuredClone() does not support every possible JavaScript value, such as functions.
Q26. What is the difference between slice() and splice()?
Answer: slice() returns a portion of an array without modifying the original. splice() can add, remove, or replace elements in the original array.
const numbers = [10, 20, 30, 40];

console.log(numbers.slice(1, 3));
// [20, 30]

numbers.splice(1, 2);

console.log(numbers);
// [10, 40]


Explanation: The ending index in slice() is excluded. In splice(), the second argument specifies how many elements to remove.
Q27. What is the difference between localStorage and sessionStorage?
Answer: Both store key-value pairs in a browser, but they have different lifetimes.
Feature	localStorage	sessionStorage
Lifetime	Persists across browser restarts	Usually lasts for the current tab session
Data format	Strings	Strings
Typical use	Persistent preferences	Temporary tab-specific state

localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");

console.log(theme); // dark


Explanation: Objects must be serialized using JSON.stringify() before storage and parsed with JSON.parse() when retrieved.

Security note: Do not store sensitive secrets in browser storage. JavaScript running through an XSS vulnerability may be able to access them.
Q28. What is the event loop?
Answer: The event loop coordinates synchronous JavaScript execution with queued callbacks and asynchronous tasks.
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");


Output:
A
D
C
B


Explanation:
1. A executes first.
2. The timer and Promise callback are scheduled.
3. D executes before asynchronous callbacks.
4. The Promise callback runs as a microtask.
5. The timer callback runs afterward.
Interview tip: A zero-millisecond timer does not mean the callback executes immediately.
Q29. What is the difference between Promise.all() and Promise.allSettled()?
Answer: Both handle multiple Promises, but they respond differently to rejection.
const tasks = [
  Promise.resolve("Success"),
  Promise.reject("Failed")
];

Promise.all(tasks).catch(console.log);
// Failed

Promise.allSettled(tasks).then(console.log);
// [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Failed" }
// ]


Explanation:
- Promise.all() rejects when any input Promise rejects.
- Promise.allSettled() waits until every input Promise settles and reports each result.
Real-world use: Use Promise.all() when all requests must succeed; use Promise.allSettled() when you need the results of every independent task.
Q30. What is debouncing?
Answer: Debouncing delays a function until a specified period has passed without another call.
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}


Explanation: Each new call cancels the previous timer and starts another one.

Real-world example: A search box can wait until the user stops typing for 300 milliseconds before sending an API request.

Part 4: React.js Interview Questions 31–40
React is one of the most important parts of a modern JavaScript full-stack interview. Let's move from JavaScript fundamentals to building user interfaces.
Q31. What is React.js?
Answer: React is a JavaScript library for building user interfaces using reusable components.
function Welcome() {
  return <h1>Welcome to my website!</h1>;
}

export default Welcome;


Explanation: The Welcome component returns JSX, which describes what should appear on the screen.

Benefits: Reusability, declarative UI, component-based architecture, and a strong ecosystem.
Q32. What are components in React?
Answer: Components are reusable building blocks of a React application.
function Button() {
  return <button>Click me</button>;
}

function App() {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}


Explanation: The same Button component can be reused multiple times.

Two common categories are:
- Functional components: JavaScript functions that return UI.
- Class components: Older component style using ES6 classes, still supported by React.
Modern React development primarily uses functional components and hooks.
Q33. What is JSX?
Answer: JSX stands for JavaScript XML. It lets developers describe UI using HTML-like syntax inside JavaScript.
const name = "Rahul";

function App() {
  return <h1>Hello, {name}</h1>;
}


Explanation: Curly braces allow JavaScript expressions inside JSX.

Important differences from HTML:
- Use className instead of class.
- Use {} to embed JavaScript expressions.
- Return a single parent element or a Fragment.
JSX is transformed into JavaScript instructions that React can use to render the UI.
Q34. What are props in React?
Answer: Props are inputs passed from a parent component to a child component.
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

function App() {
  return <Welcome name="Rahul" />;
}


Output: Hello, Rahul

Explanation: The parent passes the name prop. The child reads it and displays the value.

Interview tip: Props are read-only. A child should not directly modify its props.
Q35. What is state in React?
Answer: State is data that a component remembers between renders. Updating state can trigger a re-render.
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}


Explanation:
- count stores the current value.
- setCount updates the state.
- useState(0) sets the initial value to 0.
When the button is clicked, React updates the count and renders the new value.
Q36. What is the difference between props and state?
Answer: Props are passed into a component; state is managed by the component or another state owner.
Props	State
Passed from parent to child	Managed by a component or state owner
Read-only to the receiving component	Updated using its state setter or relevant state API
Used to configure components	Used for changing data over time

Example: A parent passes a product name through props, while a counter component stores its current count in state.
Q37. What is the useEffect() hook?
Answer: useEffect() lets a component synchronize with external systems, such as APIs, subscriptions, and browser APIs.
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      setUsers(data);
    }

    loadUsers();
  }, []);

  return <p>Users loaded: {users.length}</p>;
}


Explanation: The empty dependency array means the effect is not re-run because of changing reactive dependencies. In ordinary production mounting, it runs after the component mounts, although React Strict Mode can run an extra setup-and-cleanup cycle in development.

Interview tip: Effects are for synchronization with external systems, not for every calculation. Derived values can often be calculated directly during rendering.
Q38. What is the Virtual DOM?
Answer: The Virtual DOM is a commonly used term for React's in-memory representation of the UI.

Explanation: When state or props change, React renders the component again, determines what needs updating, and commits the necessary changes to the actual DOM.

Interview tip: Don't say React always updates the entire DOM. React can update only the relevant parts.
Q39. Why are keys important in React lists?
Answer: Keys help React identify list items across renders.
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" }
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


Explanation: Stable, unique keys help React match items when lists change.

Interview tip: Prefer stable IDs over array indexes, especially when items can be inserted, deleted, or reordered. Keys are not passed to components as ordinary props.
Q40. What is the difference between controlled and uncontrolled components?
Answer: A controlled input gets its value from React state. An uncontrolled input stores its current value in the DOM and can be accessed using a ref.

Controlled input:
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}


Explanation: React state controls the input value, so every change updates the state.

Uncontrolled input:
import { useRef } from "react";

function Form() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} defaultValue="Rahul" />
      <button onClick={() => alert(inputRef.current.value)}>
        Show value
      </button>
    </>
  );
}


Explanation: The DOM maintains the input's current value, and the ref provides access to it.


Part 5: React.js Interview Questions 41–50
These questions cover React hooks, state management, API integration, and performance. They come up frequently in frontend and full-stack interviews.
Q41. What is useRef() in React?
Answer: useRef() stores a value between renders without triggering a re-render when that value changes. It can also reference a DOM element.
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;


Explanation: When the button is clicked, React focuses the input through inputRef.current.

Interview tip: Use state for values that affect the UI. Use refs for DOM access or values that don't need to trigger rendering.
Q42. What is useMemo()?
Answer: useMemo() caches the result of a calculation between renders until its dependencies change.
import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(2);

  const square = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <>
      <p>Square: {square}</p>
      <button onClick={() => setNumber(n => n + 1)}>
        Increase
      </button>
    </>
  );
}


Explanation: React can reuse the previous calculated value when number hasn't changed.

Interview tip: useMemo() is a performance optimization, not something you need for every variable or calculation.
Q43. What is useCallback()?
Answer: useCallback() caches a function definition between renders until its dependencies change.
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <button onClick={() => {
      setCount(c => c + 1);
      handleClick();
    }}>
      Count: {count}
    </button>
  );
}


Explanation: handleClick can retain the same function identity between renders while its dependencies remain unchanged.

Difference to remember:
- useMemo() caches a calculated value.
- useCallback() caches a function.
Q44. What is the Context API?
Answer: Context lets components share values without manually passing props through every intermediate component.
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);

  return <p>Theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}


Output: Theme: dark

Explanation: The child reads the value from the nearest matching provider.

Real-world use: Sharing themes, language preferences, or authenticated user information.
Q45. What is prop drilling?
Answer: Prop drilling means passing props through multiple components just to reach a deeply nested component.
function App() {
  const username = "Rahul";
  return <Parent username={username} />;
}

function Parent({ username }) {
  return <Child username={username} />;
}

function Child({ username }) {
  return <p>Hello, {username}</p>;
}


Explanation: Parent only forwards the username. In a larger application, this can become difficult to maintain.

Solutions: Context API, component composition, or a state-management library when appropriate.
Q46. What is conditional rendering in React?
Answer: Conditional rendering means displaying different UI depending on a condition.
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}


Explanation: The ternary operator chooses which heading to render.

You can also use && when something should render only if a condition is true:
{isLoggedIn && <button>Logout</button>}


Q47. How do you fetch API data in React?
Answer: You can use fetch() inside an effect and store the returned data in state.
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        setUsers(await response.json());
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

    fetchUsers();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return users.map(user => (
    <p key={user.id}>{user.name}</p>
  ));
}

export default Users;


Explanation:
1. useEffect() starts the request.
2. useState() stores the data, loading status, and error.
3. response.ok checks whether the HTTP request succeeded.
4. AbortController cancels the request during cleanup.
Interview tip: Always consider loading, success, error, and cleanup states when fetching data.
Q48. How do you optimize performance in React?
Answer: React performance can be improved by reducing unnecessary work and rendering only what is needed.

Common techniques:
- React.memo() can skip re-rendering a component when its props are unchanged.
- useMemo() can cache expensive calculations.
- useCallback() can preserve function identity when useful.
- Lazy loading can delay loading code until needed.
- List virtualization can render only visible items in large lists.
- Stable keys help React track list items correctly.
Example:
import { memo } from "react";

const User = memo(function User({ name }) {
  return <p>{name}</p>;
});


Explanation: memo() can prevent a re-render caused by the parent when the props are unchanged. It is not a guarantee that the component will never re-render.

Interview tip: Identify the performance problem first, ideally with the React Profiler, before adding optimizations.
Q49. What is lifting state up?
Answer: Lifting state up means moving shared state into the nearest common parent of the components that need it.
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </>
  );
}


Explanation: The input and paragraph use the same state, so they stay synchronized.

Real-world use: Sharing selected products between a product list and a shopping cart.
Q50. What is the difference between useState() and useReducer()?
Answer: Both manage state, but useState() is usually simpler for individual values, while useReducer() is useful when state transitions involve multiple related actions.

Using useState():
const [count, setCount] = useState(0);

setCount(c => c + 1);


Using useReducer():
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  );
}


Explanation: dispatch() sends an action to the reducer, and the reducer calculates the next state.

Remember: useState is simpler for straightforward state; useReducer is helpful for complex state transitions.

Part 6: Next.js and TypeScript Interview Questions 51–60
Now let's cover the next major technologies in a modern React-based full-stack stack.
Q51. What is Next.js?
Answer: Next.js is a React framework that provides routing, server rendering, static generation, and other tools for building web applications.

Explanation: React helps build UI components. Next.js adds application-level features such as file-based routing and server-side capabilities.

Example: A company website can use Next.js for product pages, SEO-friendly landing pages, and server-rendered content.
Q52. What is the difference between React and Next.js?
React	Next.js
UI library	React framework
Routing requires additional setup or a library	Built-in file-based routing
Rendering strategy depends on the setup	Supports multiple rendering strategies
Backend features require separate setup or integration	Supports server-side application features

Interview answer: Next.js is built on React and provides a more complete framework for building web applications.
Q53. What is file-based routing in Next.js?
Answer: File-based routing means routes are created from files and folders in the application's routing directory.

Using the App Router:
app/
  page.tsx
  about/
    page.tsx
  contact/
    page.tsx


This creates:
- /
- /about
- /contact
Explanation: The folder structure defines the routes, so you don't need to manually configure each basic page route.
Q54. What is the difference between Server Components and Client Components?
Answer: Server Components render on the server and are the default in the Next.js App Router. Client Components support interactive features such as state, event handlers, and browser APIs.

Server Component:
export default function Page() {
  return <h1>Welcome</h1>;
}


Client Component:
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count}
    </button>
  );
}


Explanation: The "use client" directive marks a client entry point. It is needed when the component uses client-side features such as state or event handlers.

Interview tip: Server Components can reduce the JavaScript sent to the browser. Client Components are needed for interactivity, not simply because a component contains JSX.
Q55. What is the difference between SSR and SSG?
Answer: SSR generates HTML on the server for a request, while SSG generates HTML ahead of time during the build or through a static-generation process.
SSR	SSG
Rendered on the server per request	Generated ahead of requests
Useful for request-dependent content	Useful for content that can be reused
Can reflect current request data	May require revalidation to stay current

Example: A personalized account page may need request-time rendering, while a documentation page may be suitable for static generation.

Next.js also supports revalidation and other rendering strategies, so these aren't the only options.
Q56. What is TypeScript?
Answer: TypeScript is a programming language built on JavaScript that adds static type checking.
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3)); // 5


Explanation: The types indicate that both parameters and the return value are numbers. TypeScript can catch many mistakes before the code runs.

Interview tip: TypeScript helps improve maintainability and developer tooling, but types are generally removed during compilation and don't automatically validate runtime data.
Q57. What is the difference between type and interface in TypeScript?
Answer: Both can describe object shapes. An interface can be extended and declaration-merged, while a type alias can also describe unions, primitives, tuples, and other types.
interface User {
  name: string;
  age: number;
}

type Status = "loading" | "success" | "error";

const user: User = {
  name: "Rahul",
  age: 25
};

const status: Status = "success";


Explanation: Use either for many object shapes. Use a type alias for union types such as Status.
Q58. What are generics in TypeScript?
Answer: Generics let you write reusable code that works with different types while preserving type information.
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(10);
const textValue = identity<string>("Hello");


Explanation: T is a type parameter. The function accepts a value of type T and returns the same type.

Real-world use: Reusable API response types, utility functions, and typed components.
Q59. What is the difference between any and unknown in TypeScript?
Answer: any disables most type checking for a value. unknown accepts values of any type but requires you to narrow the type before using it in type-specific ways.
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


Explanation: The typeof check proves that value is a string inside the conditional.

Interview tip: Prefer unknown when the type isn't known yet, such as when handling external data or errors.
Q60. What is the difference between optional properties and nullable properties?
Answer: An optional property may be absent. A nullable property explicitly permits null.
type User = {
  name: string;
  age?: number;
  email: string | null;
};

const user: User = {
  name: "Rahul",
  email: null
};


Explanation:
- age?: number means age can be omitted.
- email: string | null means the email property must exist, but its value can be a string or null.

Part 7: Node.js Interview Questions 61–70
These questions cover backend fundamentals. Understand how JavaScript moves from the browser to the server, because that is where full-stack interviews start getting interesting.
Q61. What is Node.js?
Answer: Node.js is a JavaScript runtime that allows us to execute JavaScript outside the browser, commonly for backend development.

Explanation: Normally, JavaScript runs in a browser. Node.js allows JavaScript to run on a server, read files, communicate with databases, and build APIs.

Example: A React frontend sends a login request, and a Node.js backend processes it.
Q62. What is npm?
Answer: npm stands for Node Package Manager. It helps developers install and manage JavaScript packages and run project scripts.
npm init -y
npm install express
npm run dev


Explanation:
- npm init -y creates a default package.json.
- npm install express installs Express.
- npm run dev runs the script configured as dev in package.json.
Q63. What is the difference between Node.js and Express.js?
Answer: Node.js is a runtime, while Express.js is a web framework that runs on Node.js.
Node.js	Express.js
Executes JavaScript outside the browser	Simplifies building web servers and APIs
Provides built-in modules	Provides routing and middleware features
Can create servers directly	Makes server development more convenient

Example:
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000);


This creates a basic server using Express.
Q64. What is the difference between synchronous and asynchronous operations in Node.js?
Answer: Synchronous operations block the current execution thread until they finish. Asynchronous operations allow other work to proceed while waiting for I/O.
const fs = require("node:fs");

// Synchronous
const data = fs.readFileSync("file.txt", "utf8");
console.log(data);

// Asynchronous
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});


Explanation: The synchronous read blocks while reading. The asynchronous read uses a callback, allowing execution to continue while the file operation is pending.

Interview tip: Avoid unnecessary synchronous I/O in request handlers because it can block other requests from being processed.
Q65. What is the Node.js event loop?
Answer: The event loop allows Node.js to coordinate JavaScript execution and asynchronous operations without blocking on every I/O task.

Explanation: Node.js uses the event loop along with operating-system facilities and its underlying libraries to handle operations such as network requests and file I/O.

Example: A server can start a database request and continue handling other work while waiting for the result.

Important: Node.js JavaScript execution is generally single-threaded per event-loop thread, but Node.js can also use worker threads and other underlying threads for certain workloads.
Q66. What is middleware in Express.js?
Answer: Middleware is a function that can inspect or modify a request and response, run logic, or pass control to the next middleware.
const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(3000);


Explanation:
- express.json() parses incoming JSON request bodies.
- The custom middleware logs the request.
- next() passes control to the next middleware or route handler.
Real-world use: Authentication, request logging, validation, and error handling.
Q67. What is REST API?
Answer: A REST API allows applications to communicate over HTTP using resources and standard methods.
Method	Typical purpose
GET	Read data
POST	Create data
PUT	Replace a resource
PATCH	Partially update a resource
DELETE	Delete a resource

Example:
GET    /api/users
GET    /api/users/10
POST   /api/users
PATCH  /api/users/10
DELETE /api/users/10


A React frontend might call these endpoints to display, create, update, or delete users.
Q68. What are HTTP status codes?
Answer: HTTP status codes indicate the outcome of a request.
Code	Meaning
200	OK
201	Created
400	Bad Request
401	Unauthenticated
403	Forbidden
404	Not Found
500	Internal Server Error

Example:
app.post("/api/users", (req, res) => {
  res.status(201).json({
    message: "User created"
  });
});


Explanation: The server responds with status 201 because a resource was created successfully.
Q69. What is error handling in Express?
Answer: Error handling ensures that failures are handled consistently rather than crashing the application or leaving requests unresolved.
app.get("/api/data", async (req, res, next) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
});


Explanation: Passing an error to next(error) sends it to Express error-handling middleware.

Interview tip: Don't expose database details, passwords, or stack traces to users in production responses.
Q70. What are environment variables?
Answer: Environment variables store configuration separately from source code.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


Explanation: process.env.PORT reads the configured port from the environment. The fallback uses 3000 when no port is provided.

Real-world use: Database URLs, API keys, secret keys, and deployment configuration. Keep secrets out of Git.

Part 8: Backend Interview Questions 71–80
Q71. What is the difference between authentication and authorization?
Answer:
- Authentication: Verifies who the user is.
- Authorization: Determines what the user is allowed to do.
Example: Logging in verifies your identity. Checking whether you have permission to delete a user verifies your authorization.
Q72. What is JWT?
Answer: JWT stands for JSON Web Token. It is a compact token format that can carry signed claims between systems.

Typical flow:
1. The user submits login credentials.
2. The backend verifies them.
3. The backend issues a token.
4. The client sends the token with subsequent requests.
5. The backend validates the token and checks permissions.
Example header:
Authorization: Bearer <token>


Important: A signed JWT is not automatically encrypted. Avoid putting passwords or sensitive secrets in its payload.
Q73. What is password hashing?
Answer: Password hashing converts a password into a one-way representation that can be checked later without storing the original password.

Explanation: A secure backend hashes passwords using a password-hashing algorithm such as Argon2id or bcrypt, with appropriate parameters and salts.

When a user logs in, the backend verifies the entered password against the stored hash.

Interview tip: Never store plain-text passwords. General-purpose hashes such as plain SHA-256 are not suitable on their own for password storage.
Q74. What is CORS?
Answer: CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a web page can access resources from another origin.

Example: Your frontend runs at http://localhost:5173, while your API runs at http://localhost:3000. Because the origins differ, the browser may require the API to allow the frontend's origin.
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173"
}));


Explanation: The backend sends the relevant CORS headers to allow the specified origin.

Interview tip: CORS is not a replacement for authentication or authorization. It mainly governs browser cross-origin access.
Q75. What is input validation?
Answer: Input validation checks whether incoming data meets the application's rules before it is processed.
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.includes("@")
  ) {
    return res.status(400).json({
      message: "Invalid name or email"
    });
  }

  res.status(201).json({ name, email });
});


Explanation: The server checks the input before accepting it.

This is a simplified example. Production systems should use robust schema validation, proper email validation where required, and database constraints as appropriate.
Q76. What is MVC architecture?
Answer: MVC stands for Model, View, Controller.
- Model: Handles data and data-related rules.
- View: Handles the user interface.
- Controller: Processes incoming requests and coordinates the response.
Example: In a user API, the controller handles GET /users, the model retrieves user records, and the view or response layer returns JSON.

In a React and Express application, the frontend may handle the visual layer while the backend separates routes, controllers, and models.
Q77. What is the difference between SQL and NoSQL databases?
Answer: SQL databases generally organize data into relational tables. NoSQL databases use models such as documents, key-value pairs, or graphs.
SQL	NoSQL
Tables and relationships	Varies by database model
Often uses a predefined schema	Often supports flexible data structures
Examples: PostgreSQL, MySQL	Examples: MongoDB, Redis

Explanation: SQL databases are well suited to relational data and transactions. NoSQL databases can be useful for document-oriented or other specialized access patterns.

Interview tip: Neither category is universally better. Choose based on data structure, consistency needs, query patterns, and scaling requirements.
Q78. What is CRUD?
Answer: CRUD stands for Create, Read, Update, and Delete.
Operation	Example HTTP method
Create	POST
Read	GET
Update	PUT or PATCH
Delete	DELETE

Example: A task-management app creates a task, lists tasks, updates a task's status, and deletes completed tasks.

CRUD is the foundation of many database-backed applications.
Q79. What is database indexing?
Answer: An index is a data structure that helps a database find records more efficiently.

Example: If a user table is frequently queried by email, an index on the email column can speed up lookups.

Advantages: Faster reads for supported queries.

Disadvantages: Indexes consume storage and can make inserts, updates, and deletes more expensive because the indexes must also be maintained.

Interview tip: Index columns based on actual query patterns, not every column indiscriminately.
Q80. How do you secure a backend API?
Answer: I secure APIs using multiple layers of protection.
1. Authenticate users and authorize each protected action.
2. Validate and sanitize input where appropriate.
3. Hash passwords securely.
4. Use HTTPS in production.
5. Store secrets in environment variables or a secrets manager.
6. Use parameterized database queries or safe database APIs.
7. Configure CORS appropriately.
8. Apply rate limiting to sensitive endpoints.
9. Avoid exposing internal errors and sensitive information.
10. Keep dependencies updated and log suspicious activity safely.
Interview-ready response:

“I secure backend APIs through authentication, role-based authorization where needed, input validation, secure password hashing, HTTPS, and proper error handling. I also protect secrets, use safe database queries, and apply rate limiting to sensitive endpoints.”


Part 9: MongoDB and SQL Interview Questions 81–90
These questions cover databases, which are essential for full-stack interviews. We'll focus on what each concept means, why it's used, and simple examples.
Q81. What is MongoDB?
Answer: MongoDB is a NoSQL database that stores data in flexible, document-like structures.

Example document:
{
  "name": "Rahul",
  "age": 25,
  "skills": ["React", "Node.js"]
}


Explanation: MongoDB stores records as BSON documents, which support fields, arrays, nested objects, and different data types.

Real-world use: Storing users, products, orders, and application settings.
Q82. What is the difference between MongoDB and MySQL?
Answer: MongoDB is a document-oriented NoSQL database, while MySQL is a relational SQL database.
MongoDB	MySQL
Stores BSON documents	Stores rows in tables
Supports flexible document structures	Uses defined table schemas
Queries documents	Queries relational data using SQL
Good for document-oriented data	Good for relational data and joins

Interview tip: Neither is always better. The choice depends on data relationships, consistency requirements, and query patterns.
Q83. What are collections and documents in MongoDB?
Answer:
- Database: Contains collections.
- Collection: Contains documents.
- Document: Contains fields and values.
Example:
db.users.insertOne({
  name: "Rahul",
  email: "rahul@example.com"
});


Explanation: This inserts one document into the users collection.

Similar concept in SQL: a MongoDB collection roughly corresponds to a table, and a document roughly corresponds to a row, although their data models differ.
Q84. What is CRUD in MongoDB?
Answer: CRUD means Create, Read, Update, and Delete.
// Create
db.users.insertOne({ name: "Rahul", age: 25 });

// Read
db.users.find({ name: "Rahul" });

// Update
db.users.updateOne(
  { name: "Rahul" },
  { $set: { age: 26 } }
);

// Delete
db.users.deleteOne({ name: "Rahul" });


Explanation: These operations insert, retrieve, modify, and remove documents.

In production, use a stable identifier such as _id rather than a name when targeting a specific user.
Q85. What is Mongoose?
Answer: Mongoose is an object data modeling (ODM) library for Node.js that makes working with MongoDB more structured.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const User = mongoose.model("User", userSchema);


Explanation: The schema defines the expected structure and validation rules for documents managed through the model.

Interview tip: Mongoose is optional. Node.js applications can also access MongoDB using the official MongoDB driver.
Q86. What is a primary key in SQL?
Answer: A primary key uniquely identifies each row in a table. It cannot contain NULL values, and its values must be unique.
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);


Explanation: Each user receives a unique id that can be used to find that record.
Q87. What is a foreign key?
Answer: A foreign key links records in one table to records in another table and can enforce referential integrity.
CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


Explanation: The user_id references an existing user, subject to the database's constraints.

Real-world example: Connecting each order to the user who placed it.
Q88. What is a SQL JOIN?
Answer: A JOIN combines related data from two or more tables.
SELECT users.name, orders.id
FROM users
INNER JOIN orders
ON users.id = orders.user_id;


Explanation: This returns users and their matching orders.

Common types:
- INNER JOIN: Only matching records.
- LEFT JOIN: All records from the left table and matching records from the right.
- RIGHT JOIN: All records from the right table and matching records from the left.
- FULL OUTER JOIN: All records from both sides, where supported.
Q89. What is database normalization?
Answer: Normalization organizes relational data to reduce unnecessary duplication and prevent data anomalies.

Example: Instead of repeating a customer's address in every order row, store customer details in a users table and reference the user from the orders table.

Explanation: This makes updates easier and helps maintain consistent data.

Interview tip: Normalization is useful, but some applications deliberately denormalize data to improve read performance.
Q90. What are database transactions and ACID properties?
Answer: A transaction groups database operations so they can be handled as one logical unit.

ACID stands for:
- Atomicity: All operations succeed, or the transaction is rolled back.
- Consistency: Constraints and database rules remain satisfied.
- Isolation: Concurrent transactions are controlled according to the database's isolation level.
- Durability: Committed changes persist according to the database's guarantees.
Example: When transferring money between accounts, the debit and credit should succeed together rather than leaving only one side completed.
Part 10: Full-Stack Integration, Git and Deployment Questions 91–100
Q91. How does the frontend communicate with the backend?
Answer: The frontend sends HTTP requests to backend API endpoints. The backend processes the request, interacts with the database if needed, and returns a response.

Example flow:
1. User clicks Login in React.
2. React sends credentials to an Express API.
3. The backend validates the credentials.
4. The backend retrieves the user from MongoDB.
5. The backend returns an appropriate response.
6. React updates the UI.
const response = await fetch("/api/users");
const users = await response.json();


Interview tip: The frontend should not connect directly to a database using privileged credentials.
Q92. What is Git?
Answer: Git is a version control system that tracks code changes and helps developers collaborate.

Common commands:
git init
git add .
git commit -m "Initial commit"
git status
git push


Explanation: Git helps developers review changes, restore earlier versions, and work on separate branches.
Q93. What is the difference between Git and GitHub?
Answer: Git is the version control tool; GitHub is a platform for hosting Git repositories and collaborating on code.

Example: You use Git to commit code locally and GitHub to store the repository remotely and create pull requests.
Q94. What is a REST API endpoint?
Answer: An endpoint is a specific API URL and HTTP method used to access a resource or perform an operation.

Examples:
GET    /api/products
GET    /api/products/10
POST   /api/products
PATCH  /api/products/10
DELETE /api/products/10


Explanation: Each endpoint provides a defined way to interact with the backend.
Q95. What is JWT authentication versus cookie-based authentication?
Answer: JWT is a token format, while a cookie is a way for a browser to store and send data. They are not direct alternatives because a JWT can also be stored in a cookie.
- JWT: Carries signed claims that the server can verify.
- Cookie: Browser storage mechanism that can automatically send data to matching domains and paths.
- HttpOnly cookie: Cannot be read by ordinary JavaScript, which helps protect it from token theft through some XSS scenarios.
Interview tip: Authentication design depends on the application. Secure cookie settings, CSRF protection where applicable, token expiration, and server-side authorization all matter.
Q96. What is deployment?
Answer: Deployment means making an application available in an environment where users can access it.

Typical full-stack deployment:
- Frontend: Vercel or another static hosting platform.
- Backend: Render or another application hosting platform.
- Database: MongoDB Atlas or a managed SQL database.
Explanation: Configure environment variables, database access, build commands, and production URLs. Then test the deployed application, not just the local version.
Q97. What is the difference between development and production environments?
Answer: Development is where developers build and test features. Production is the live environment used by actual users.
Development	Production
Debugging is easier	Errors must be handled safely
Local configuration is common	Secure deployed configuration
Test data may be used	Real user data may be present
Frequent code changes	Controlled releases

Interview tip: Never expose secrets or detailed internal error messages in production.
Q98. What is CI/CD?
Answer: CI/CD automates parts of the process of testing, building, and deploying software.
- Continuous Integration (CI): Automatically checks changes, often by running tests and builds.
- Continuous Delivery/Deployment (CD): Automates preparing releases or deploying them.
Example: A GitHub Actions workflow runs tests when code is pushed and deploys the app after the required checks pass.
Q99. How do you debug a full-stack application?
Answer: I isolate the problem layer by layer.
1. Check browser errors and the Network tab.
2. Verify the request URL, payload, and response status.
3. Check backend logs and route handlers.
4. Verify environment variables and database connectivity.
5. Reproduce the issue and test the fix.
Example: If login returns 500, inspect the backend logs and database connection rather than randomly rewriting the React form.
Q100. Explain your full-stack project in an interview.
Answer template:

“I built a full-stack application using React for the frontend, Node.js and Express for the backend, and MongoDB for data storage. The frontend communicates with the backend through REST APIs. I implemented features such as data management, input validation, and error handling. I also deployed the application and tested the production workflow.”

Adapt this answer to your actual project. Interviewers tend to discover imaginary features remarkably quickly.

Part 11: Top 10 Full-Stack Coding Interview Questions 101–110
These practical exercises help you demonstrate your understanding of JavaScript and backend fundamentals.
Q101. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"


Explanation: Convert the string into an array, reverse it, and join the characters back together.
Q102. Find the largest number in an array
function findLargest(numbers) {
  return Math.max(...numbers);
}

console.log(findLargest([10, 25, 8, 40])); // 40


Explanation: Math.max() returns the largest supplied number. This assumes the array is non-empty.
Q103. Remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3]));
// [1, 2, 3]


Explanation: A Set stores unique values. Spreading it creates a new array.
Q104. Count the occurrences of each character
function countCharacters(str) {
  const result = {};

  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

console.log(countCharacters("hello"));
// { h: 1, e: 1, l: 2, o: 1 }


Explanation: Each character becomes a key, and its count increases whenever it appears.
Q105. Check whether a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("Madam")); // true


Explanation: The function removes non-alphanumeric characters, ignores case, and compares the string with its reverse.
Q106. Create a simple Express API
const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.status(200).json({
    message: "Hello from the backend"
  });
});

app.listen(3000);


Explanation: The route responds to GET /api/hello with a JSON message.
Q107. Create an API endpoint to add a user
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      message: "Name is required"
    });
  }

  res.status(201).json({
    message: "User created",
    user: { name: name.trim() }
  });
});


Explanation: The endpoint validates the input and returns a successful creation response. This example does not persist the user to a database.
Q108. Filter active users
const users = [
  { name: "Rahul", active: true },
  { name: "Priya", active: false },
  { name: "Amit", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);


Explanation: filter() returns a new array containing only users whose active property is true.
Q109. Fetch API data in React
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
      })
      .then(setUsers)
      .catch(error => console.error(error.message));
  }, []);

  return users.map(user => (
    <p key={user.id}>{user.name}</p>
  ));
}


Explanation: The effect requests user data, stores it in state, and renders a list. A production implementation should also show loading and error states in the UI.

## Q110. Write a SQL query to find the second-highest salary
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
  SELECT MAX(salary)
  FROM employees
);


Explanation: The subquery finds the highest salary. The outer query finds the highest salary below it, so this returns the second-highest distinct salary. It returns NULL if there is no lower salary.


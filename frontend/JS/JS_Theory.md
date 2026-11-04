# 1. var, let, const and scope
Scope means where a variable can be accessed.

Keyword	    Scope	    Reassign?	Redeclare in same scope?
var	        Function	Yes	        Yes
let	        Block	    Yes	        No
const	    Block	    No	        No

```js
function example() {
  var a = 10;

  if (true) {
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10
  // console.log(b); // ReferenceError
  // console.log(c); // ReferenceError
}
```
let and const are block-scoped. var is function-scoped, so it can escape an if block.

Remember: const prevents reassignment, not mutation of objects.
```js
const user = { name: "Sam" };

user.name = "Alex"; // Allowed
// user = {};       // Not allowed
```

“var is function-scoped, while let and const are block-scoped. let allows reassignment, but const does not. I generally use const by default and let when reassignment is needed.”

# 2. Hoisting and Temporal Dead Zone
Hoisting means JavaScript processes declarations before executing code.
```js
console.log(a); // undefined
var a = 10;
```
# 3. Data types and type coercion
JavaScript has primitive and non-primitive types.

Primitive types:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol
Non-primitive: objects, arrays, and functions.
let name = "Sam";       // string
let age = 25;           // number
let isActive = true;    // boolean
let value;              // undefined
let result = null;      // null
let user = {};          // object
let numbers = [1, 2];   // array


Type coercion means JavaScript converts a value from one type to another.
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(Boolean("hello")); // true


+ can concatenate strings. - converts strings to numbers when possible.

A famous JavaScript oddity:
typeof null; // "object"


This is a historical JavaScript bug. null is still a primitive value.

Interview answer:
“JavaScript has primitive and reference types. Type coercion is automatic or explicit conversion between types, such as '5' - 2 becoming 3.”
4. == vs ===
== compares values after possible type conversion.
=== compares value and type without type conversion.
console.log(5 == "5");  // true
console.log(5 === "5"); // false


More examples:
console.log(false == 0);  // true
console.log(false === 0); // false


Interview answer:
“== allows type coercion, while === checks strict equality without converting types. I prefer === because it makes comparisons more predictable.”

5. Closures and lexical scope
Lexical scope means a function can access variables from the scope where it was created.

A closure happens when a function remembers variables from its outer scope, even after that outer function has finished running.
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3


The inner function remembers count. That’s a closure.

Common uses:
- Private variables
- Counters
- Function factories
- Maintaining state
Interview answer:
“A closure is a function bundled with access to its lexical environment. It allows a function to remember and use variables from its outer scope.”

6. Callbacks and higher-order functions
A callback is a function passed to another function to be called later.
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Sam", sayBye);


A higher-order function is a function that accepts another function or returns a function.
function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(4, 3, (x, y) => x + y);

console.log(result); // 7


Here, calculate is a higher-order function, and the arrow function is its callback.

Interview answer:
“A callback is a function passed into another function. A higher-order function accepts a function as an argument or returns a function.”

7. Promises and async/await
A Promise represents the eventual result of an asynchronous operation.

Promise states:
- pending
- fulfilled
- rejected
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Completed");
  } else {
    reject("Failed");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));


async/await makes promise-based code easier to read.
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getData();


Interview answer:
“A Promise handles an asynchronous result. async/await is syntax built on promises that makes asynchronous code look more like synchronous code. I use try/catch to handle errors.”

8. Event loop and call stack
JavaScript executes synchronous code using the call stack.

Asynchronous callbacks are scheduled to run later. The event loop checks whether the call stack is empty and then moves queued work onto it.
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");


Output:
A
D
C
B


Why?
1. Synchronous code runs first: A, then D.
2. Promise callbacks run as microtasks: C.
3. Timer callback runs as a task: B.
Interview answer:
“The call stack executes JavaScript. The event loop coordinates queued callbacks when the stack is clear. Promise callbacks are microtasks and generally run before timer callbacks.”

9. map(), filter(), reduce(), forEach()
const numbers = [1, 2, 3, 4];


map(): transform each item
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8]


filter(): keep matching items
const even = numbers.filter(n => n % 2 === 0);
// [2, 4]


reduce(): combine items into one result
const sum = numbers.reduce((total, n) => total + n, 0);
// 10


forEach(): perform an action for each item
numbers.forEach(n => {
  console.log(n);
});


Method	Main purpose	Returns
map()	Transform items	New array
filter()	Select items	New array
reduce()	Accumulate a result	Any value
forEach()	Perform an action	undefined


10. Spread and rest operators
Both use ..., but their purposes differ.

Spread expands values:
const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second];
// [1, 2, 3, 4]


It can also copy an object:
const user = { name: "Sam", age: 25 };
const updatedUser = { ...user, age: 26 };


Rest collects remaining values:
function add(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(add(1, 2, 3)); // 6


Interview answer:
“Spread expands an iterable or object into individual values or properties. Rest collects multiple values into an array or object.”

11. Destructuring
Destructuring extracts values from arrays or properties from objects.
const user = {
  name: "Sam",
  age: 25
};

const { name, age } = user;

console.log(name); // Sam
console.log(age);  // 25


Array destructuring:
const colors = ["red", "blue"];

const [first, second] = colors;

console.log(first); // red


Default values:
const { city = "Unknown" } = user;


Interview answer:
“Destructuring is a concise way to extract values from arrays or object properties into variables.”

12. Shallow copy vs deep copy
A shallow copy copies only the first level. Nested objects are still shared.
const original = {
  name: "Sam",
  address: { city: "Delhi" }
};

const copy = { ...original };

copy.address.city = "Mumbai";

console.log(original.address.city); // Mumbai


A deep copy copies nested structures too.
const deepCopy = structuredClone(original);

deepCopy.address.city = "Pune";

console.log(original.address.city); // Mumbai
console.log(deepCopy.address.city); // Pune


structuredClone() supports many common data structures, but not every possible JavaScript value.

Interview answer:
“A shallow copy shares nested object references. A deep copy creates independent nested copies, so changes to the copied structure don’t affect the original.”
# 13. The this keyword
this usually refers to the object that calls the function. Its value depends on how the function is invoked.
```js
const user = {
  name: "Sam",

  greet() {
    console.log(this.name);
  }
};

user.greet(); // Sam
```
A regular function called by itself:

```js
function showThis() {
  console.log(this);
}

showThis();
```

In strict mode, this is undefined for a regular function called without an owner. In a browser’s non-strict script, it may be the global object.

Arrow functions do not create their own this. They inherit it from the surrounding scope.

Interview answer:
“this depends on the function’s call site. Arrow functions don’t have their own this; they use the value from the surrounding lexical scope.”


# 14. Arrow functions vs regular functions

```js
function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
```

Regular function	                    Arrow function
Has its own this	                    Inherits this
Can be used as a constructor with new	Cannot be used as a constructor
Has its own arguments	                No own arguments
Can be a function declaration	        Usually an expression

Use arrow functions for concise callbacks:

```js
const doubled = [1, 2, 3].map(n => n * 2);
```

```
# 15. DOM manipulation and event bubbling

The DOM is the browser’s object representation of an HTML page. JavaScript can use it to change content, styles, and behavior.
```html
<button id="btn">Click me</button>
<p id="message">Hello</p>
```
```js
const button = document.querySelector("#btn");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Button clicked!";
}); 
```
Event bubbling means an event starts at the target element and travels upward through its parent elements.

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

```js
document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked");
});
```
Clicking the button logs:
Child clicked
Parent clicked

Stop bubbling when needed:
event.stopPropagation();

# 16. Debouncing and throttling

Both control how often a function runs.

```js
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const search = debounce((value) => {
  console.log("Searching:", value);
}, 500);
```

If the user keeps typing, the timer resets. Search runs after 500 ms of inactivity.

Throttling
Runs a function at most once during a specified interval.

Useful for scroll or resize handlers.

```js
function throttle(callback, delay) {
  let lastRun = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastRun >= delay) {
      lastRun = now;
      callback(...args);
    }
  };
}
```
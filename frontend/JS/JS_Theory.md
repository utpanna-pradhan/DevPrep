
# JavaScript Interview Preparation: Top 50 Theory Questions and Answers

## Section 1: JavaScript Fundamentals

### 1. What is JavaScript?

JavaScript is a high-level, dynamically typed programming language mainly used to make websites interactive and build web applications.

It can run in browsers and outside browsers using environments such as Node.js.

**Main uses:**
- Handling user interactions.
- Updating webpage content.
- Validating forms.
- Communicating with APIs.
- Building frontend applications using React.
- Building backend applications using Node.js.

**Example:**

```js
const message = "Hello JavaScript";

console.log(message);
```

### 2. What are the main features of JavaScript?

Important JavaScript features include:

1. **Lightweight:** JavaScript is designed to be efficient and easy to use.
2. **Dynamically typed:** Variable types are determined at runtime.
3. **Interpreted/JIT compiled:** Modern JavaScript engines use interpretation and just-in-time compilation techniques.
4. **Single-threaded execution model:** JavaScript code normally runs on one main thread in a browser or Node.js environment.
5. **Event-driven:** It can respond to user actions and events.
6. **Asynchronous programming:** Supports callbacks, Promises, and async/await.
7. **Object-based:** Supports objects and prototype-based inheritance.
8. **Cross-platform:** Runs in browsers and several server-side environments.

### 3. What are the different data types in JavaScript?

JavaScript has 8 main data types.

**Seven primitive data types:**

1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol

**One non-primitive category:**

8. Object

Arrays and functions are also objects in JavaScript.

**Examples:**

```js
let name = "John";           // String
let age = 25;                // Number
let bigNumber = 123n;        // BigInt
let isActive = true;         // Boolean
let result;                  // Undefined
let value = null;            // Null
let id = Symbol("id");       // Symbol
let user = { name: "John" }; // Object
```

### 4. What is the difference between primitive and non-primitive data types?

**Primitive types:**
- Store individual values.
- Are immutable.
- Are copied by value.

Examples: String, Number, Boolean, Undefined, Null, BigInt, Symbol.

**Non-primitive types:**
- Represent objects and collections of properties or values.
- Are mutable.
- Variables hold references to objects.

Examples: Object, Array, Function.

**Example:**

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not affect `a`.

For objects:

```js
let user1 = { name: "John" };
let user2 = user1;

user2.name = "Sarah";

console.log(user1.name); // Sarah
```

Both variables refer to the same object.

### 5. What is the difference between var, let, and const?

These three keywords are used to declare variables.

| Feature | var | let | const |
|---|---|---|---|
| Scope | Function | Block | Block |
| Re-declaration in same scope | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Hoisting | Yes, initialized as undefined | Yes, but inaccessible before declaration | Yes, but inaccessible before declaration |

**Example:**

```js
var name = "John";
var name = "Sarah"; // Allowed

let age = 25;
age = 30; // Allowed

const country = "India";
// country = "USA"; // Error
```

**Important:** A `const` object can still be modified internally. The variable cannot be reassigned to another object.

### 6. What is the difference between == and ===?

Both operators compare values, but they behave differently.

**== (Loose equality):**
- Compares values after performing type conversion when necessary.

**=== (Strict equality):**
- Compares both value and type.
- Does not perform type conversion.

**Example:**

```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

Here:
- `5` is a number.
- `"5"` is a string.

**Interview tip:** Prefer `===` in most situations because it avoids unexpected type conversions.

### 7. What is type coercion in JavaScript?

Type coercion means converting a value from one data type to another.

JavaScript can perform this conversion automatically or developers can do it manually.

**Example of automatic conversion:**

```js
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(true + 1); // 2
```

**Manual conversion:**

```js
Number("100");  // 100
String(100);    // "100"
Boolean(1);     // true
```

Type coercion is important because JavaScript sometimes converts values automatically during operations.

### 8. What is the difference between null and undefined?

Both represent the absence of a meaningful value, but their meanings are different.

**Undefined:**
- A variable has been declared but has not been assigned a value.
- A missing object property returns undefined.

**Null:**
- Represents an intentional absence of a value.
- Developers commonly assign it explicitly.

**Example:**

```js
let name;

console.log(name); // undefined

let user = null;

console.log(user); // null
```

**Important JavaScript behavior:**

```js
typeof undefined; // "undefined"
typeof null;      // "object"
```

`typeof null` returning `"object"` is a historical JavaScript behavior.

### 9. What is NaN in JavaScript?

NaN stands for Not-a-Number.

It represents an invalid numeric result.

**Example:**

```js
console.log("hello" / 2); // NaN
console.log(0 / 0);       // NaN
```

To check whether a value is NaN:

```js
Number.isNaN(NaN); // true
Number.isNaN("abc"); // false
```

`Number.isNaN()` does not convert the input before checking it.

### 10. What are truthy and falsy values?

JavaScript converts values to Boolean when they are used in conditions.

**Falsy values:**
- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

All other values are truthy, including empty arrays and empty objects.

**Example:**

```js
if ("Hello") {
  console.log("Truthy");
}

if (0) {
  console.log("This will not execute");
}
```

**Important:**

```js
Boolean([]);  // true
Boolean({});  // true
Boolean("");  // false
```

---

## Section 2: Variables, Scope, and Functions

### 11. What is scope in JavaScript?

Scope determines where a variable can be accessed in a program.

JavaScript mainly has these types of scope:

**1. Global scope:** Variables declared outside functions and blocks can be accessed throughout their applicable global environment.

**2. Function scope:** Variables declared with `var` inside a function are accessible within that function.

**3. Block scope:** Variables declared using `let` and `const` inside a block are accessible only within that block.

**Example:**

```js
let globalName = "John";

function greet() {
  let message = "Hello";

  console.log(globalName);
  console.log(message);
}

greet();

// console.log(message); // ReferenceError
```

### 12. What is the difference between function scope and block scope?

**Function scope:** A variable is accessible throughout the function where it is declared.

`var` is function-scoped.

**Block scope:** A variable is accessible only inside the block `{}` where it is declared.

`let` and `const` are block-scoped.

**Example:**

```js
function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a); // 10
  // console.log(b); // ReferenceError
}

test();
```

Here, `var` is accessible outside the `if` block but `let` is not.

### 13. What is hoisting in JavaScript?

Hoisting is JavaScript's behavior of processing declarations before executing code.

This means declarations can behave as though they are available earlier in their scope, but initialization rules differ.

**Example with var:**

```js
console.log(a); // undefined

var a = 10;
```

JavaScript processes the declaration before execution, but the assignment happens at its original position.

Conceptually:

```js
var a;

console.log(a);

a = 10;
```

**With let and const:**

```js
console.log(b); // ReferenceError

let b = 20;
```

`let` and `const` are also hoisted, but cannot be accessed before initialization.

### 14. What is the Temporal Dead Zone (TDZ)?

The Temporal Dead Zone is the period between entering a scope and initializing a `let` or `const` variable.

Accessing the variable during this period causes a ReferenceError.

**Example:**

```js
console.log(name); // ReferenceError

let name = "John";
```

The variable exists in the scope but cannot be accessed before its declaration is initialized.

### 15. What is a function in JavaScript?

A function is a reusable block of code designed to perform a particular task.

It helps avoid repeating the same code.

**Example:**

```js
function add(a, b) {
  return a + b;
}

console.log(add(10, 20)); // 30
```

Here:
- `add` is the function name.
- `a` and `b` are parameters.
- `return` sends the result back.
- `add(10, 20)` is a function call.

### 16. What is the difference between function declaration and function expression?

**Function declaration:**

A function defined using the `function` keyword with a name.

```js
function greet() {
  console.log("Hello");
}

greet();
```

Function declarations are hoisted with their function definitions, so they can generally be called before their declaration.

**Function expression:**

A function assigned to a variable.

```js
const greet = function () {
  console.log("Hello");
};

greet();
```

The variable declaration follows its own hoisting rules. With `const`, the function cannot be called before initialization.

### 17. What is an arrow function?

An arrow function is a shorter way to write a function introduced in ES6.

**Example:**

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
```

For a single expression, we can write:

```js
const multiply = (a, b) => a * b;
```

**Important features:**
- Shorter syntax.
- Does not have its own `this`.
- Does not have its own `arguments` object.
- Cannot be used as a constructor with `new`.

### 18. What is the difference between regular functions and arrow functions?

| Regular Function | Arrow Function |
|---|---|
| Uses `function` keyword | Uses `=>` |
| Has its own `this` based on how it is called | Inherits `this` from surrounding scope |
| Has its own `arguments` object | Does not have its own `arguments` |
| Can be used as a constructor | Cannot be used as a constructor |
| Can be used as a generator with `function*` | Cannot be a generator function |

**Example:**

```js
const user = {
  name: "John",

  regularFunction: function () {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this.name);
  }
};

user.regularFunction();
```

The regular function gets `this` from the object method call. The arrow function inherits `this` from its surrounding scope.

### 19. What are parameters and arguments?

**Parameters:** Variables defined in a function declaration.

**Arguments:** Actual values passed when calling the function.

**Example:**

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("John");
```

Here:
- `name` is a parameter.
- `"John"` is an argument.

### 20. What is a callback function?

A callback is a function passed as an argument to another function and called by that function later.

Callbacks are commonly used in event handling and asynchronous operations.

**Example:**

```js
function greet(name, callback) {
  console.log("Hello " + name);

  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("John", sayBye);
```

**Output:**

```text
Hello John
Goodbye
```

The `sayBye` function is passed as a callback.

---

## Section 3: Advanced JavaScript Concepts

### 21. What is a closure in JavaScript?

A closure happens when a function remembers and can access variables from its outer lexical scope, even after the outer function has finished executing.

**Example:**

```js
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
```

**Explanation:**

1. `outer()` creates a variable called `count`.
2. It returns the `inner()` function.
3. The inner function still has access to `count`.
4. Each call updates the same variable.

**Real-world uses:**
- Data privacy.
- Counters.
- Function factories.
- Maintaining state.
- Event handlers.

### 22. What is the this keyword in JavaScript?

`this` refers to a value determined by how a function is called, except in arrow functions, which inherit `this` from their surrounding lexical scope.

**Example:**

```js
const user = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};

user.greet(); // John
```

Here, `this` refers to the `user` object because the method is called using `user.greet()`.

The value of `this` changes depending on the calling context.

### 23. What is the difference between call(), apply(), and bind()?

These methods are used to control the value of `this` in regular functions.

**call():**

Calls a function immediately and accepts arguments individually.

```js
function greet(city) {
  console.log(this.name, city);
}

const user = { name: "John" };

greet.call(user, "Delhi");
```

**apply():**

Calls a function immediately and accepts arguments as an array.

```js
greet.apply(user, ["Delhi"]);
```

**bind():**

Returns a new function with a fixed `this` value. It does not execute the function immediately.

```js
const newGreet = greet.bind(user);

newGreet("Delhi");
```

| call() | apply() | bind() |
|---|---|---|
| Executes immediately | Executes immediately | Returns a new function |
| Arguments separately | Arguments as an array | Arguments separately or partially |
| Sets `this` | Sets `this` | Sets `this` for the returned function |

### 24. What is a higher-order function?

A higher-order function is a function that either:

1. Takes another function as an argument, or
2. Returns another function.

**Example:**

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(10, 20, add));
```

**Output:**

```text
30
```

`calculate()` is a higher-order function because it accepts another function as an argument.

Common examples include `map()`, `filter()`, and `reduce()`.

### 25. What is a pure function?

A pure function is a function that:

1. Returns the same output for the same input.
2. Does not produce side effects outside itself.

**Example:**

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

This function is pure because it depends only on its inputs and does not modify external data.

**Impure example:**

```js
let total = 0;

function add(value) {
  total += value;
  return total;
}
```

This function modifies an external variable, so it is impure.

### 26. What is the spread operator?

The spread operator (`...`) expands elements from an iterable or properties from an object.

It is commonly used to copy and combine arrays and objects.

**Example with arrays:**

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
```

**Output:**

```js
[1, 2, 3, 4, 5]
```

**Example with objects:**

```js
const user = {
  name: "John",
  age: 25
};

const updatedUser = {
  ...user,
  age: 26
};
```

The spread operator creates a shallow copy, not a deep copy.

### 27. What is the rest operator?

The rest operator (`...`) collects multiple values into a single array or object.

**Example with function parameters:**

```js
function sum(...numbers) {
  return numbers.reduce(
    (total, num) => total + num,
    0
  );
}

console.log(sum(10, 20, 30)); // 60
```

**Explanation:**

- `...numbers` collects all remaining arguments.
- `numbers` becomes an array.
- `reduce()` calculates their total.

**Difference:**

- Spread expands values.
- Rest collects values.

### 28. What is destructuring in JavaScript?

Destructuring is a feature that allows us to extract values from arrays or properties from objects into variables.

**Array destructuring:**

```js
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
```

**Object destructuring:**

```js
const user = {
  name: "John",
  age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);
```

It makes code shorter and easier to read.

### 29. What are template literals?

Template literals are a way to create strings using backticks.

They support:
- Variable interpolation.
- Multiline strings.
- Expressions inside strings.

**Example:**

```js
const name = "John";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
```

Template literals are useful when creating dynamic strings.

### 30. What are JavaScript modules?

Modules allow us to divide JavaScript code into separate reusable files.

They make applications easier to maintain and organize.

JavaScript supports ES Modules using `export` and `import`.

**Export:**

```js
// math.js

export function add(a, b) {
  return a + b;
}
```

**Import:**

```js
// app.js

import { add } from "./math.js";

console.log(add(10, 20));
```

Modules help avoid putting all application logic into one file.

---

## Section 4: Arrays, Objects, and ES6+

### 31. What is the difference between map(), filter(), and reduce()?

These are higher-order array methods used to process arrays.

**map():**

Creates a new array by transforming every element.

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result); // [2, 4, 6]
```

**filter():**

Creates a new array containing elements that satisfy a condition.

```js
const numbers = [1, 2, 3, 4];

const result = numbers.filter((num) => num > 2);

console.log(result); // [3, 4]
```

**reduce():**

Processes array elements to produce one accumulated result.

```js
const numbers = [1, 2, 3, 4];

const result = numbers.reduce(
  (total, num) => total + num,
  0
);

console.log(result); // 10
```

| map() | filter() | reduce() |
|---|---|---|
| Transforms elements | Selects matching elements | Accumulates a result |
| Returns a new array | Returns a new array | Returns an accumulated value |
| Usually same length as input | Can be shorter | Depends on the accumulator |

### 32. What is the difference between forEach() and map()?

Both methods execute a callback for every array element, but their purposes differ.

**forEach():**
- Executes a function for each element.
- Returns `undefined`.
- Commonly used for side effects.

**map():**
- Transforms each element.
- Returns a new array.
- Commonly used when we need transformed data.

**Example:**

```js
const numbers = [1, 2, 3];

const result1 = numbers.forEach((num) => {
  console.log(num);
});

const result2 = numbers.map((num) => num * 2);

console.log(result1); // undefined
console.log(result2); // [2, 4, 6]
```

### 33. What is the difference between find() and filter()?

Both methods search arrays based on a condition.

**find():**
Returns the first matching element. If nothing matches, it returns `undefined`.

```js
const numbers = [10, 20, 30];

const result = numbers.find((num) => num > 15);

console.log(result); // 20
```

**filter():**
Returns an array containing all matching elements.

```js
const numbers = [10, 20, 30];

const result = numbers.filter((num) => num > 15);

console.log(result); // [20, 30]
```

### 34. What is the difference between slice() and splice()?

Both methods work with arrays, but they behave differently.

**slice():**
- Returns a selected portion of an array.
- Does not modify the original array.

```js
const numbers = [1, 2, 3, 4];

const result = numbers.slice(1, 3);

console.log(result);  // [2, 3]
console.log(numbers); // [1, 2, 3, 4]
```

**splice():**
- Adds, removes, or replaces elements.
- Modifies the original array.

```js
const numbers = [1, 2, 3, 4];

numbers.splice(1, 2);

console.log(numbers); // [1, 4]
```

### 35. What is the difference between shallow copy and deep copy?

**Shallow copy:**

Creates a new object, but nested objects are still shared references.

```js
const user1 = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const user2 = { ...user1 };

user2.address.city = "Mumbai";

console.log(user1.address.city); // Mumbai
```

The nested address object is shared.

**Deep copy:**

Creates a separate copy of nested objects as well.

```js
const user2 = structuredClone(user1);

user2.address.city = "Mumbai";

console.log(user1.address.city); // Delhi
```

`structuredClone()` supports many built-in data types, but it cannot clone every kind of JavaScript value, such as functions and DOM nodes.

### 36. What is object destructuring and how do you rename variables?

Object destructuring allows us to extract object properties into variables.

We can also assign a different variable name.

**Example:**

```js
const user = {
  name: "John",
  age: 25
};

const {
  name: userName,
  age: userAge
} = user;

console.log(userName);
console.log(userAge);
```

Here:
- `name` is assigned to `userName`.
- `age` is assigned to `userAge`.

### 37. What are optional chaining and nullish coalescing?

Both features help write safer JavaScript code.

**Optional chaining (`?.`):**

Accesses a nested property without throwing an error if an intermediate value is null or undefined.

```js
const user = {};

console.log(user.address?.city); // undefined
```

**Nullish coalescing (`??`):**

Provides a default value only when the left side is `null` or `undefined`.

```js
const username = null;

console.log(username ?? "Guest"); // Guest
```

**Difference from OR (`||`):**

```js
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0
```

`||` uses a default for all falsy values. `??` only uses a default for null or undefined.

### 38. What are Map and Set in JavaScript?

**Map:**

A Map stores key-value pairs. Keys can be values of any type.

```js
const userMap = new Map();

userMap.set("name", "John");
userMap.set("age", 25);

console.log(userMap.get("name"));
```

**Set:**

A Set stores unique values and automatically removes duplicates.

```js
const numbers = new Set([1, 2, 2, 3]);

console.log(numbers); // Set {1, 2, 3}
```

**Difference:**

- Map stores key-value pairs.
- Set stores unique values.

### 39. What is the difference between Object.freeze() and Object.seal()?

Both methods restrict changes to objects.

**Object.freeze():**
- Prevents adding properties.
- Prevents deleting properties.
- Prevents changing existing property values.

```js
const user = {
  name: "John"
};

Object.freeze(user);

user.name = "Sarah";

console.log(user.name); // John
```

**Object.seal():**
- Prevents adding properties.
- Prevents deleting properties.
- Allows changing existing writable property values.

```js
const user = {
  name: "John"
};

Object.seal(user);

user.name = "Sarah";

console.log(user.name); // Sarah
```

Both are shallow operations. Nested objects are not automatically frozen or sealed.

### 40. What is the difference between synchronous and asynchronous JavaScript?

**Synchronous JavaScript:**
- Executes statements in order.
- Each operation completes before the next statement continues.

**Asynchronous JavaScript:**
- Allows operations to complete later.
- Other JavaScript work can continue while asynchronous operations are pending.

**Example:**

```js
console.log("Start");

setTimeout(() => {
  console.log("Async operation");
}, 1000);

console.log("End");
```

**Output:**

```text
Start
End
Async operation
```

This is useful for API requests, timers, file operations, and other tasks that should not block normal execution while waiting.

---

## Section 5: Promises, Event Loop, and Browser Concepts

### 41. What is a Promise in JavaScript?

A Promise is an object that represents the eventual success or failure of an asynchronous operation.

It has three states:

1. Pending: Operation is still running.
2. Fulfilled: Operation completed successfully.
3. Rejected: Operation failed.

**Example:**

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Something went wrong");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

Promises help manage asynchronous operations more cleanly than deeply nested callbacks.

### 42. What is async/await?

Async/await is syntax built on top of Promises that makes asynchronous code easier to read.

**Example:**

```js
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

**Explanation:**

- `async` makes a function return a Promise.
- `await` waits for a Promise to settle inside the async function.
- `try/catch` handles errors.
- It makes asynchronous code look similar to synchronous code.

### 43. What is the JavaScript event loop?

The event loop is a mechanism that coordinates synchronous JavaScript execution with asynchronous callbacks.

JavaScript normally executes code on a call stack. When asynchronous operations complete, their callbacks are scheduled for execution.

The event loop checks whether the call stack is clear and allows queued callbacks to run according to scheduling rules.

**Main components:**

1. Call Stack
2. Web APIs in browsers or runtime APIs in Node.js
3. Task queues
4. Microtask queue
5. Event Loop

**Example:**

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output:**

```text
Start
End
Promise
Timer
```

Promise callbacks run as microtasks before the timer callback in this example.

### 44. What is the difference between microtasks and macrotasks?

JavaScript schedules asynchronous callbacks through different queues.

**Microtasks:**
- Promise `.then()`, `.catch()`, and `.finally()` callbacks.
- `queueMicrotask()` callbacks.
- In browsers, MutationObserver callbacks.

**Tasks (often called macrotasks):**
- `setTimeout()` callbacks.
- `setInterval()` callbacks.
- Many browser event callbacks.

**Example:**

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output:**

```text
Start
End
Promise
Timer
```

After the current JavaScript task completes, microtasks are processed before the next task is selected.

### 45. What is the difference between Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any()?

These methods help handle multiple Promises.

**Promise.all():**

Fulfills when all Promises fulfill. Rejects when one rejects.

```js
await Promise.all([
  fetchUsers(),
  fetchProducts()
]);
```

**Promise.allSettled():**

Waits until all Promises settle, whether fulfilled or rejected.

```js
await Promise.allSettled([
  fetchUsers(),
  fetchProducts()
]);
```

**Promise.race():**

Settles with the result of the first Promise to settle.

```js
await Promise.race([
  fetchData(),
  timeout()
]);
```

**Promise.any():**

Fulfills with the first fulfilled Promise. Rejects with an AggregateError if all Promises reject.

```js
await Promise.any([
  serverOne(),
  serverTwo()
]);
```

### 46. What is the DOM in JavaScript?

DOM stands for Document Object Model.

It is a programming interface that represents an HTML document as a tree of objects.

JavaScript can use the DOM to:
- Select HTML elements.
- Change text and styles.
- Add or remove elements.
- Handle user events.
- Update webpage content dynamically.

**Example:**

```html
<h1 id="title">Hello</h1>

<script>
  const heading = document.getElementById("title");

  heading.textContent = "Welcome to JavaScript";
</script>
```

JavaScript changes the heading text using the DOM.

### 47. What is event bubbling and event capturing?

These are two phases of DOM event propagation.

**Event capturing:**

The event travels from the outermost ancestor toward the target element.

**Event bubbling:**

The event travels from the target element back toward its ancestors.

**Example:**

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener(
  "click",
  () => console.log("Parent"),
  true
);

child.addEventListener(
  "click",
  () => console.log("Child")
);
```

If the child is clicked, the capturing listener on the parent runs before the target listener.

By default, `addEventListener()` uses bubbling phase.

### 48. What is event delegation?

Event delegation is a technique where we attach one event listener to a parent element instead of adding separate listeners to many child elements.

It uses event bubbling.

**Example:**

```js
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    console.log(event.target.textContent);
  }
});
```

**Explanation:**

- One listener is attached to the parent.
- When a child is clicked, the event bubbles to the parent.
- `event.target` identifies the clicked element.
- We check whether it matches an `li`.

**Advantages:**
- Reduces the number of event listeners.
- Works with dynamically added child elements.
- Makes event handling easier to manage.

### 49. What is the difference between localStorage, sessionStorage, and cookies?

All three can store information in a browser, but they have different behavior.

| Feature | localStorage | sessionStorage | Cookies |
|---|---|---|---|
| Lifetime | Until cleared | Usually until the tab's page session ends | Based on expiration settings |
| Storage capacity | Usually several MB | Usually several MB | Usually around 4 KB per cookie |
| Sent automatically with HTTP requests | No | No | Yes, when applicable |
| Accessible using JavaScript | Yes | Yes | Usually, unless HttpOnly |
| Scope | Origin | Origin and tab session | Depends on domain and path settings |

**Example:**

```js
localStorage.setItem("name", "John");

sessionStorage.setItem("name", "John");

console.log(localStorage.getItem("name"));
```

**Important security point:**

Do not store sensitive authentication secrets in JavaScript-accessible storage without considering XSS risks. Secure, HttpOnly, appropriately configured cookies are often used for session credentials.

### 50. What is the difference between debouncing and throttling?

Both techniques control how frequently a function executes.

**Debouncing:**

Runs a function only after a specified time has passed without another event.

Common use cases:
- Search input.
- Autocomplete.
- Form validation.

**Throttling:**

Limits a function to run at most once within a specified time interval.

Common use cases:
- Scroll events.
- Resize events.
- Mouse movement tracking.

**Example use cases:**

```js
// Debouncing:
// Wait until the user stops typing before making an API request.

// Throttling:
// Allow a scroll handler to execute at most once
// within a defined time interval.
```

**Difference:**

- Debounce waits until events stop.
- Throttle controls the maximum execution frequency.

---

# Important JavaScript Interview Revision Checklist

## Must-know topics

- [ ] JavaScript data types
- [ ] Primitive vs non-primitive
- [ ] var, let, and const
- [ ] == vs ===
- [ ] Type coercion
- [ ] null vs undefined
- [ ] Truthy and falsy values
- [ ] Scope and hoisting
- [ ] Temporal Dead Zone
- [ ] Function declaration vs expression
- [ ] Arrow functions
- [ ] Callback functions
- [ ] Closures
- [ ] this keyword
- [ ] call, apply, and bind
- [ ] Higher-order functions
- [ ] Pure functions
- [ ] Spread and rest operators
- [ ] Destructuring
- [ ] Shallow copy vs deep copy
- [ ] map, filter, and reduce
- [ ] Promise and async/await
- [ ] Event loop
- [ ] Microtasks and tasks
- [ ] DOM manipulation
- [ ] Event bubbling and capturing
- [ ] Event delegation
- [ ] localStorage, sessionStorage, and cookies
- [ ] Debouncing and throttling

## Highest-priority topics for frontend and full-stack interviews

| Priority | Topics |
|---|---|
| Very high | Scope, hoisting, closures |
| Very high | this, call, apply, bind |
| Very high | Promises, async/await |
| Very high | Event loop and microtasks |
| Very high | map, filter, reduce |
| Very high | Objects, arrays, destructuring |
| High | DOM and event propagation |
| High | Debouncing and throttling |
| High | Storage and browser APIs |
| High | Modules and ES6+ features |

## Final interview advice

For every concept, prepare three things:

1. **Definition:** Explain what the concept means.
2. **Example:** Write a small JavaScript example.
3. **Real-world use:** Explain where you use it in an actual application.

For example, when asked about closures, explain the definition, write a counter example, and mention how closures help maintain private state.

This approach helps you answer follow-up questions instead of getting stuck after giving a memorized definition.

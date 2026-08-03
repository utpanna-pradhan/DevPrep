# JavaScript Coding Solutions
# Module 1: Variables & Data Types
## Questions 1–10

---

# 1. Declare Variables

## 🎯 Problem

Create variables to store:

- Your name
- Your age
- Your city
- Your profession

Print all values.

---

## 🧠 Thinking Process

A **variable** is a named container used to store data.

Think of it like a labeled box.

```
Name Box  ------> Alex
Age Box   ------> 25
City Box  ------> Delhi
Profession Box -> Developer
```

Each variable has:

- A name (identifier)
- A value

Before coding, ask yourself:

> **What information do I need to store?**

Here we need four different pieces of information, so we create four variables.

---

## ✅ Optimized Solution

```javascript
const name = "Alex";
const age = 25;
const city = "Delhi";
const profession = "Developer";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Profession:", profession);
```

---

## 📝 Output

```
Name: Alex
Age: 25
City: Delhi
Profession: Developer
```

---

## 🧠 Line-by-Line Explanation

### Line 1

```javascript
const name = "Alex";
```

- `const` creates a variable.
- `name` is the variable name.
- `"Alex"` is the value.

---

### Line 2

```javascript
const age = 25;
```

Stores a number.

---

### Line 3

```javascript
const city = "Delhi";
```

Stores another string.

---

### Line 4

```javascript
const profession = "Developer";
```

Stores the profession.

---

### Printing Values

```javascript
console.log("Name:", name);
```

Prints:

```
Name: Alex
```

The first value is text.

The second value is the variable.

---

## ⚠️ Common Mistakes

### ❌ Missing quotes

```javascript
const city = Delhi;
```

JavaScript thinks `Delhi` is another variable.

Correct:

```javascript
const city = "Delhi";
```

---

### ❌ Bad variable names

```javascript
const n = "Alex";
```

Works but is difficult to understand.

Better:

```javascript
const userName = "Alex";
```

---

## 💼 Real World Example

```javascript
const userName = "Utpanna";
const email = "abc@gmail.com";
const role = "Frontend Developer";
```

Exactly the same concept.

---

## ⭐ Interview Tip

Use meaningful variable names.

Bad:

```javascript
const x = "Alex";
```

Good:

```javascript
const userName = "Alex";
```

---

## 🚀 Challenge

Also store:

- country
- salary
- isStudent

---

# 2. Variable Declaration Practice

## 🎯 Problem

Create variables using:

- var
- let
- const

Observe the differences.

---

## 🧠 Thinking Process

JavaScript has **three ways** to declare variables.

```
var
let
const
```

Modern JavaScript mostly uses:

- const
- let

Avoid `var` unless working with older code.

---

## ✅ Optimized Solution

```javascript
// var
var name = "Alex";
var age = 25;

// let
let city = "Delhi";
let profession = "Developer";

// const
const country = "India";
const language = "JavaScript";
```

---

## 📝 Explanation

### var

```javascript
var score = 10;
```

Can:

- Redeclare
- Reassign

Example:

```javascript
var score = 10;
var score = 20;

score = 30;
```

No error.

---

### let

```javascript
let score = 10;
```

Can:

- Reassign

Cannot:

- Redeclare in same scope

Example:

```javascript
let score = 10;

score = 20;
```

Correct.

---

```javascript
let score = 10;
let score = 20;
```

Error.

---

### const

```javascript
const score = 10;
```

Cannot:

- Redeclare
- Reassign

Example:

```javascript
const score = 10;

score = 20;
```

Error.

---

## 📌 Which One Should You Use?

Default:

```javascript
const
```

If value changes:

```javascript
let
```

Avoid:

```javascript
var
```

---

## 💼 Real World Example

```javascript
const API_URL = "https://api.example.com";

let cartTotal = 0;

cartTotal += 500;
```

---

## ⭐ Interview Tip

A common interview question is:

**Which variable keyword should you use?**

Answer:

> Use `const` by default. Use `let` only when the value changes. Avoid `var` in modern JavaScript.

---

# 3. Variable Reassignment

## 🎯 Problem

Create:

```javascript
let score = 50;
```

Update it to:

```
100
```

Print the final value.

---

## 🧠 Thinking Process

Reassignment means changing the value of an existing variable.

---

## ✅ Optimized Solution

```javascript
let score = 50;

score = 100;

console.log(score);
```

---

## 📝 Output

```
100
```

---

## 🧠 Explanation

### First

```javascript
let score = 50;
```

Variable stores:

```
50
```

---

### Next

```javascript
score = 100;
```

Old value is replaced.

Memory:

```
100
```

---

### Print

```javascript
console.log(score);
```

Output:

```
100
```

---

## ⚠️ Common Mistake

```javascript
let score = 50;

let score = 100;
```

Error.

You are redeclaring instead of reassigning.

Correct:

```javascript
score = 100;
```

---

## 💼 Real World Example

Updating a shopping cart total.

```javascript
let total = 500;

total = total + 200;
```

---

## ⭐ Interview Tip

Only `let` and `var` allow reassignment.

`const` does not.

---

# 4. User Profile Update

## 🎯 Problem

Create:

```javascript
let username = "Alex";
let age = 25;
```

Update:

- username → John
- age → 30

Print updated information.

---

## ✅ Optimized Solution

```javascript
let username = "Alex";
let age = 25;

username = "John";
age = 30;

console.log(username);
console.log(age);
```

---

## 📝 Output

```
John
30
```

---

## 🧠 Explanation

The variables already exist.

We only replace their values.

```
Before

username -> Alex

After

username -> John
```

---

## 💼 Real World Example

A user edits their profile.

```
Old Name

↓

New Name

↓

Database Updated
```

---

# 5. Temperature Converter

## 🎯 Problem

Convert Celsius to Fahrenheit.

Formula:

```
F = (C × 9/5) + 32
```

---

## ✅ Optimized Solution

```javascript
const celsius = 25;

const fahrenheit = (celsius * 9) / 5 + 32;

console.log(fahrenheit);
```

---

## 📝 Output

```
77
```

---

## 🧠 Explanation

Step 1

```
25 × 9 = 225
```

Step 2

```
225 / 5 = 45
```

Step 3

```
45 + 32 = 77
```

---

## 💼 Real World Example

Weather apps.

---

# 6. Data Type Checker

## 🎯 Problem

Print the type of each variable.

---

## ✅ Optimized Solution

```javascript
const name = "Alex";
const age = 25;
const isDeveloper = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isDeveloper);
```

---

## 📝 Output

```
string
number
boolean
```

---

## 🧠 Explanation

`typeof` returns the data type of a value.

---

## 💼 Real World Example

Validating API responses.

---

# 7. Type Detector Program

## 🎯 Problem

Create:

```javascript
checkType(value)
```

Return a readable type.

---

## ✅ Optimized Solution

```javascript
function checkType(value) {
  if (Array.isArray(value)) return "Array";
  if (value === null) return "Null";

  return value.constructor
    ? value.constructor.name
    : typeof value;
}

console.log(checkType("hello"));
console.log(checkType(10));
console.log(checkType(true));
console.log(checkType({}));
console.log(checkType([]));
console.log(checkType(undefined));
console.log(checkType(null));
```

---

## 📝 Output

```
String
Number
Boolean
Object
Array
undefined
Null
```

---

## ⭐ Why not only use `typeof`?

Because:

```javascript
typeof []
```

returns

```
object
```

and

```javascript
typeof null
```

also returns

```
object
```

We handle those cases separately.

---

# 8. Primitive Type Counter

## 🎯 Problem

Count:

- strings
- numbers
- booleans

---

## ✅ Optimized Solution

```javascript
const values = [
  "hello",
  10,
  true,
  null,
  undefined
];

let strings = 0;
let numbers = 0;
let booleans = 0;

for (const value of values) {
  if (typeof value === "string") strings++;

  if (typeof value === "number") numbers++;

  if (typeof value === "boolean") booleans++;
}

console.log(strings);
console.log(numbers);
console.log(booleans);
```

---

## 📝 Output

```
1
1
1
```

---

# 9. Null vs Undefined

## 🎯 Problem

Create two variables.

---

## ✅ Optimized Solution

```javascript
let first;

let second = null;

console.log(first);
console.log(second);

// undefined -> value not assigned
// null -> intentionally empty
```

---

## 📝 Output

```
undefined
null
```

---

## 💼 Real World Example

```javascript
let username;
```

User hasn't entered a username yet.

---

```javascript
const profilePhoto = null;
```

User intentionally has no profile photo.

---

# 10. Truthy and Falsy Checker

## 🎯 Problem

Return:

- Truthy
- Falsy

---

## ✅ Optimized Solution

```javascript
function checkValue(value) {
  return value ? "Truthy" : "Falsy";
}

console.log(checkValue(0));
console.log(checkValue(""));
console.log(checkValue(null));
console.log(checkValue(undefined));
console.log(checkValue(false));
console.log(checkValue([]));
console.log(checkValue({}));
```

---

## 📝 Output

```
Falsy
Falsy
Falsy
Falsy
Falsy
Truthy
Truthy
```

---

## 🧠 Why?

Falsy values:

- false
- 0
- -0
- 0n
- ""
- null
- undefined
- NaN

Everything else is Truthy.

---

# 🎯 Module Summary

After completing these 10 questions, you should understand:

- ✅ Variables
- ✅ `var`, `let`, `const`
- ✅ Reassignment
- ✅ Data Types
- ✅ `typeof`
- ✅ Objects vs Arrays
- ✅ `null` vs `undefined`
- ✅ Truthy & Falsy values

These concepts appear constantly in JavaScript interviews, React development, Node.js APIs, and real-world debugging.
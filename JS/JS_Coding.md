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


# JavaScript Coding Solutions
# Module 1 (Part 2): Objects, Arrays, Functions & Debugging
## Questions 11–28

---

# 11. Shopping Cart Total

## 🎯 Problem

Calculate the total price.

```javascript
const price = 500;
const quantity = 3;
```

Output:

```
1500
```

---

## 🧠 Thinking Process

Whenever you hear **total price**, think:

```
Total = Price × Quantity
```

---

## ✅ Optimized Solution

```javascript
const price = 500;
const quantity = 3;

const totalPrice = price * quantity;

console.log("Total Price:", totalPrice);
```

---

## 📝 Output

```
Total Price: 1500
```

---

## 💼 Real World Example

Every shopping website calculates:

```
Laptop × Quantity

↓

Total Price
```

---

## ⭐ Interview Tip

Store calculated values in meaningful variables.

Bad

```javascript
console.log(price * quantity);
```

Better

```javascript
const totalPrice = price * quantity;
```

---

# 12. Employee Information Object

## 🎯 Problem

Create an employee object.

Properties:

- name
- age
- salary
- department

Print each property.

---

## 🧠 Thinking Process

Objects group related information together.

Instead of

```javascript
const name = "Alex";
const age = 25;
const salary = 50000;
```

We use

```
Employee

↓

name
age
salary
department
```

---

## ✅ Optimized Solution

```javascript
const employee = {
  name: "Alex",
  age: 25,
  salary: 50000,
  department: "Engineering"
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.department);
```

---

## 📝 Output

```
Alex
25
50000
Engineering
```

---

## ⭐ Interview Tip

Use **dot notation** whenever possible.

```javascript
employee.name
```

instead of

```javascript
employee["name"]
```

unless the key is dynamic.

---

# 13. Update Object Values

## 🎯 Problem

Update:

```
age → 30
```

Add

```
city → Delhi
```

---

## ✅ Optimized Solution

```javascript
const user = {
  name: "Alex",
  age: 25
};

user.age = 30;

user.city = "Delhi";

console.log(user);
```

---

## 📝 Output

```javascript
{
  name: "Alex",
  age: 30,
  city: "Delhi"
}
```

---

## 🧠 Important Concept

People often think this is illegal because of `const`.

Wrong.

`const` prevents changing the variable reference.

It **does not** prevent changing object properties.

Allowed

```javascript
user.age = 30;
```

Not allowed

```javascript
user = {};
```

---

# 14. Object Property Checker

## 🎯 Problem

Create

```javascript
hasProperty(object,key)
```

Return

```
true

or

false
```

---

## ✅ Optimized Solution

```javascript
function hasProperty(object, key) {
  return object.hasOwnProperty(key);
}

const user = {
  name: "Alex",
  age: 25
};

console.log(hasProperty(user, "age"));

console.log(hasProperty(user, "email"));
```

---

## 📝 Output

```
true
false
```

---

## ⭐ Better Modern Solution

```javascript
function hasProperty(object, key) {
  return key in object;
}
```

The `in` operator also checks inherited properties.

---

# 15. Array Basics

## 🎯 Problem

Perform

- Add fruit
- Remove fruit
- Print length
- Print first element

---

## ✅ Optimized Solution

```javascript
const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

fruits.push("Orange");

fruits.pop();

console.log(fruits.length);

console.log(fruits[0]);

console.log(fruits);
```

---

## 📝 Output

```
3

Apple

["Apple","Banana","Mango"]
```

---

## 🧠 Important Methods

Add

```javascript
push()
```

Remove

```javascript
pop()
```

Length

```javascript
length
```

Access

```javascript
fruits[0]
```

---

# 16. Copy Object Problem

## 🎯 Predict Output

```javascript
let user1 = {
  name: "Alex"
};

let user2 = user1;

user2.name = "John";

console.log(user1.name);
```

---

## ✅ Output

```
John
```

---

## 🧠 Why?

Objects are **Reference Types**.

Memory

```
user1

↓

Object

↑

user2
```

Both variables point to the same object.

Changing one changes the other.

---

## ⭐ Interview Question

Primitive

```
Copied by value
```

Objects

```
Copied by reference
```

Know this extremely well.

---

# 17. Create Deep Copy

## 🎯 Problem

Create an independent copy.

---

## ✅ Optimized Solution

```javascript
const user = {
  name: "Alex",
  address: {
    city: "Delhi"
  }
};

const copy = structuredClone(user);

copy.address.city = "Mumbai";

console.log(user);

console.log(copy);
```

---

## 📝 Output

```javascript
user

{
 name:"Alex",
 address:{
   city:"Delhi"
 }
}

copy

{
 name:"Alex",
 address:{
   city:"Mumbai"
 }
}
```

---

## ⭐ Older Alternative

```javascript
const copy = JSON.parse(JSON.stringify(user));
```

Works for simple objects.

Modern JavaScript prefers

```javascript
structuredClone()
```

---

# 18. Compare Objects

## 🎯 Problem

```javascript
const user1 = {
  name: "Alex"
};

const user2 = {
  name: "Alex"
};
```

Compare them.

---

## ✅ Solution

```javascript
console.log(user1 == user2);

console.log(user1 === user2);
```

---

## 📝 Output

```
false

false
```

---

## 🧠 Why?

Objects are compared by memory address.

Memory

```
Object A

≠

Object B
```

Even if values look identical.

---

# 19. Greeting Function

## 🎯 Problem

Create

```javascript
greet(name)
```

---

## ✅ Optimized Solution

```javascript
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Alex"));
```

---

## 📝 Output

```
Hello Alex
```

---

## ⭐ Why Return?

Returning makes the function reusable.

```javascript
const message = greet("Alex");
```

---

# 20. Calculator Function

## 🎯 Problem

Support

```
+
-
*
/
```

---

## ✅ Optimized Solution

```javascript
function calculate(a, b, operator) {

  switch (operator) {

    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return b !== 0
        ? a / b
        : "Cannot divide by zero";

    default:
      return "Invalid Operator";
  }

}

console.log(calculate(10,5,"+"));
```

---

## 📝 Output

```
15
```

---

## ⭐ Interview Tip

Always handle invalid input.

Never assume users pass correct values.

---

# 21. Function Stored in Variable

## 🎯 Problem

Store a function in a variable.

---

## ✅ Optimized Solution

```javascript
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5,4));
```

---

## 📝 Output

```
20
```

---

## 🧠 Why?

Functions are **First-Class Citizens**.

They can be

- stored
- passed
- returned

---

# 22. Pass Function as Argument

## 🎯 Problem

Pass a function into another function.

---

## ✅ Optimized Solution

```javascript
function executeFunction(fn) {
  fn();
}

executeFunction(() => {
  console.log("Hello");
});
```

---

## 📝 Output

```
Hello
```

---

## 💼 Real World Example

Button Click

```javascript
button.addEventListener(
  "click",
  function(){ }
)
```

The callback is passed as an argument.

---

# 23. Return Function

## 🎯 Problem

Return a function.

---

## ✅ Optimized Solution

```javascript
function createMultiplier(number) {

  return function(value){

    return value * number;

  };

}

const double = createMultiplier(2);

console.log(double(5));
```

---

## 📝 Output

```
10
```

---

## ⭐ Important Concept

This introduces **Closures**.

Very important for React and JavaScript interviews.

---

# 24. Fix Undefined Value Bug

## 🎯 Problem

```javascript
let age;

console.log(age + 10);
```

---

## 📝 Output

```
NaN
```

---

## 🧠 Why?

```
undefined + 10

↓

Not a Number
```

---

## ✅ Fix

```javascript
let age = 20;

console.log(age + 10);
```

---

# 25. Fix Variable Scope Bug

## 🎯 Problem

```javascript
if (true){

 let username = "Alex";

}

console.log(username);
```

---

## 📝 Error

```
ReferenceError
```

---

## 🧠 Why?

`let`

uses

```
Block Scope
```

The variable only exists inside the braces.

---

## ✅ Fix

```javascript
let username;

if(true){

  username = "Alex";

}

console.log(username);
```

---

# 26. Fix Type Bug

## 🎯 Problem

```javascript
let price = "100";

let quantity = 2;

console.log(price * quantity);
```

---

## 📝 Output

```
200
```

---

## 🧠 Is this wrong?

Not exactly.

JavaScript automatically converts

```
"100"

↓

100
```

because multiplication requires numbers.

---

## ⭐ Better Code

```javascript
const price = 100;

const quantity = 2;

console.log(price * quantity);
```

Avoid relying on automatic type coercion.

---

# 27. Fix Equality Bug

## 🎯 Predict

```javascript
console.log(5 == "5");

console.log(5 === "5");
```

---

## 📝 Output

```
true

false
```

---

## 🧠 Why?

`==`

Performs type conversion.

```
5

↓

Number

↓

"5"

↓

Converted

↓

Equal
```

---

`===`

Checks

- value
- type

Types differ.

Result

```
false
```

---

## ⭐ Interview Rule

Always prefer

```javascript
===
```

unless you intentionally want type coercion.

---

# 28. Debug Object Mutation

## 🎯 Problem

```javascript
const user = {

  name:"Alex"

}

const copy = user;

copy.name = "John";

console.log(user);
```

---

## 📝 Output

```javascript
{
 name:"John"
}
```

---

## 🧠 Why?

Both variables reference the same object in memory.

```
user

↓

Object

↑

copy
```

Changing one changes the other.

---

## ✅ Fix

```javascript
const copy = structuredClone(user);

copy.name = "John";

console.log(user);

console.log(copy);
```

---

# 🎯 Module Summary

After completing Questions **11–28**, you should understand:

- ✅ Objects
- ✅ Object properties
- ✅ Updating objects
- ✅ Arrays
- ✅ Array methods (`push`, `pop`, `length`)
- ✅ Function declaration
- ✅ Function expressions
- ✅ Passing functions
- ✅ Returning functions (Closures)
- ✅ Object references
- ✅ Deep copy vs shallow copy
- ✅ Equality (`==` vs `===`)
- ✅ Variable scope
- ✅ Type coercion
- ✅ Common debugging patterns

These topics are foundational for React, Node.js, backend APIs, and the kind of debugging-heavy engineering work expected in roles like Alignerr.



# 28. Debug Object Mutation

## Problem

```javascript
const user = {
    name: "Alex"
};

const copy = user;

copy.name = "John";

console.log(user);
```

### Output

```javascript
{
    name: "John"
}
```

---

## Why Did This Happen?

Many beginners think this creates two different objects.

It doesn't.

```
user
  │
  ▼
{ name: "Alex" }

copy
  │
  └──────────────► Same Object
```

Objects are **Reference Types**.

When you write:

```javascript
const copy = user;
```

JavaScript does **NOT** create a new object.

It simply creates another reference pointing to the same object in memory.

Therefore,

```javascript
copy.name = "John";
```

changes the original object.

---

## Correct Solution (Shallow Copy)

```javascript
const user = {
    name: "Alex"
};

const copy = {
    ...user
};

copy.name = "John";

console.log(user);
console.log(copy);
```

### Output

```javascript
{ name: "Alex" }

{ name: "John" }
```

---

## Better Solution (Deep Copy)

If objects contain nested objects:

```javascript
const copy = structuredClone(user);
```

or

```javascript
const copy = JSON.parse(JSON.stringify(user));
```

(works for simple objects)

---

## Interview Tip

This is one of the most common JavaScript interview questions.

Remember:

Primitive → copied by value

Object → copied by reference

---

# 29. Basic Arithmetic Operations

## Solution

```javascript
let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
```

### Output

```
Addition: 30
Subtraction: 10
Multiplication: 200
Division: 2
Modulus: 0
```

---

## What You Learn

Arithmetic operators

```
+
-
*
/
%
```

These operators are used everywhere in JavaScript.

---

# 30. Simple Calculator

## Solution

```javascript
function calculate(a, b, operator) {

    if (operator === "+") {
        return a + b;
    }

    if (operator === "-") {
        return a - b;
    }

    if (operator === "*") {
        return a * b;
    }

    if (operator === "/") {

        if (b === 0) {
            return "Cannot divide by zero";
        }

        return a / b;
    }

    if (operator === "%") {
        return a % b;
    }

    return "Invalid Operator";
}

console.log(calculate(20, 10, "+"));
console.log(calculate(20, 10, "-"));
console.log(calculate(20, 10, "*"));
console.log(calculate(20, 10, "/"));
console.log(calculate(20, 10, "%"));
```

---

## Output

```
30
10
200
2
0
```

---

## What You Learn

✔ Functions

✔ Parameters

✔ Conditions

✔ Return values

---

# 31. Swap Two Numbers

## Method 1 (Using Third Variable)

```javascript
let a = 10;
let b = 20;

let temp = a;

a = b;

b = temp;

console.log(a);
console.log(b);
```

Output

```
20

10
```

---

## Method 2 (Without Third Variable)

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
```

Output

```
20

10
```

---

## Which Method Is Best?

Modern JavaScript uses

```javascript
[a, b] = [b, a];
```

It is cleaner and easier to read.

---

# 32. Check Even or Odd

## Solution

```javascript
function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(checkEvenOdd(10));

console.log(checkEvenOdd(7));
```

---

## Output

```
Even

Odd
```

---

## What You Learn

The modulus operator

```
%
```

is the standard way to determine whether a number is even or odd.

---

# 33. Positive, Negative or Zero

## Solution

```javascript
function checkNumber(number) {

    if (number > 0) {
        return "Positive";
    }

    if (number < 0) {
        return "Negative";
    }

    return "Zero";
}

console.log(checkNumber(10));

console.log(checkNumber(-5));

console.log(checkNumber(0));
```

---

## Output

```
Positive

Negative

Zero
```

---

## What You Learn

Using multiple conditions with `if` statements.

---

# 34. Greater Number

## Solution

```javascript
let a = 20;
let b = 10;

if (a > b) {

    console.log(a + " is greater");

} else {

    console.log(b + " is greater");

}
```

---

## Output

```
20 is greater
```

---

## Alternative

```javascript
console.log(Math.max(a, b));
```

---

# 35. Largest of Three Numbers

## Solution

```javascript
function largest(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    }

    if (b >= a && b >= c) {
        return b;
    }

    return c;
}

console.log(largest(10, 50, 30));
```

---

## Output

```
50
```

---

## Easier Method

```javascript
console.log(Math.max(10, 50, 30));
```

---

# 36. Smallest of Three Numbers

## Solution

```javascript
function smallest(a, b, c) {

    if (a <= b && a <= c) {
        return a;
    }

    if (b <= a && b <= c) {
        return b;
    }

    return c;
}

console.log(smallest(10, 50, 30));
```

---

## Output

```
10
```

---

## Alternative

```javascript
console.log(Math.min(10, 50, 30));
```

---

# 37. Compare Two Values

## Solution

```javascript
function compare(a, b) {

    if (a === b) {
        return "Equal";
    }

    return "Not Equal";
}

console.log(compare(10, 10));

console.log(compare(10, 5));
```

---

## Output

```
Equal

Not Equal
```

---

## Why Use `===`?

Always prefer strict equality because it checks both value and data type.

---

# 38. Strict vs Loose Equality

## Code

```javascript
console.log(10 == "10");

console.log(10 === "10");
```

---

## Output

```
true

false
```

---

## Explanation

### Loose Equality

```javascript
10 == "10"
```

JavaScript converts

```
"10"

↓

10
```

Then compares

```
10 == 10

↓

true
```

---

### Strict Equality

```javascript
10 === "10"
```

No conversion occurs.

```
Number

≠

String
```

Therefore

```
false
```

---

## Best Practice

Always use

```javascript
===
```

unless you intentionally need type coercion.

---

# 39. Voting Eligibility

## Solution

```javascript
function canVote(age) {

    if (age >= 18) {
        return "Eligible";
    }

    return "Not Eligible";
}

console.log(canVote(20));

console.log(canVote(15));
```

---

## Output

```
Eligible

Not Eligible
```

---

## What You Learn

Simple condition checking using comparison operators.

---

# 40. Login System

## Solution

```javascript
function login(username, password) {

    const validUsername = "admin";
    const validPassword = "12345";

    if (
        username === validUsername &&
        password === validPassword
    ) {
        return "Login Successful";
    }

    return "Invalid Credentials";
}

console.log(login("admin", "12345"));

console.log(login("alex", "12345"));
```

---

## Output

```
Login Successful

Invalid Credentials
```

---

## What You Learn

This problem combines several important concepts:

- Functions
- Parameters
- Variables
- Logical AND (`&&`)
- Strict Equality (`===`)
- Conditional Statements (`if`)
- Returning values

This is a simplified version of how authentication works in real applications, except real systems compare hashed passwords and use databases instead of hardcoded values.

---

# 🎯 Concepts Practiced in Questions 28–40

- ✅ Object references vs copies
- ✅ Arithmetic operators
- ✅ Functions and parameters
- ✅ Return statements
- ✅ Variable swapping
- ✅ Modulus operator
- ✅ Conditional statements (`if`)
- ✅ Comparison operators
- ✅ Logical operators (`&&`)
- ✅ Strict vs loose equality (`===` vs `==`)
- ✅ Real-world login validation

These are foundational skills you'll use constantly in JavaScript, React, Node.js, and technical interviews. Mastering them now saves hours of debugging later, because JavaScript has an uncanny talent for behaving exactly as specified and nothing like what you expected.



# 41. Password Strength Checker

## Problem

Create a function that checks password strength.

Rules:

- Less than 6 characters → Weak
- 6–10 characters → Medium
- More than 10 characters → Strong

---

## Solution

```javascript
function checkPasswordStrength(password) {

    if (password.length < 6) {
        return "Weak";
    }

    if (password.length <= 10) {
        return "Medium";
    }

    return "Strong";
}

console.log(checkPasswordStrength("abc"));

console.log(checkPasswordStrength("password"));

console.log(checkPasswordStrength("mySecurePassword123"));
```

---

## Output

```
Weak

Medium

Strong
```

---

## Explanation

```javascript
password.length
```

returns the number of characters.

```
"hello"

↓

5
```

We compare the length with our rules.

---

## Real World

Real applications also check:

- Uppercase letters
- Lowercase letters
- Numbers
- Special characters

---

# 42. Temperature Checker

## Problem

Rules

Above 35 → Hot

20–35 → Normal

Below 20 → Cold

---

## Solution

```javascript
function checkTemperature(temp) {

    if (temp > 35) {
        return "Hot";
    }

    if (temp >= 20) {
        return "Normal";
    }

    return "Cold";
}

console.log(checkTemperature(40));

console.log(checkTemperature(25));

console.log(checkTemperature(15));
```

---

## Output

```
Hot

Normal

Cold
```

---

## What You Learn

Conditions are checked **from top to bottom**.

As soon as one condition is true, JavaScript stops checking the rest.

---

# 43. Grade Calculator

## Problem

Rules

```
90–100 → A

80–89 → B

70–79 → C

60–69 → D

Below 60 → Fail
```

---

## Solution

```javascript
function calculateGrade(marks) {

    if (marks >= 90) {
        return "A";
    }

    if (marks >= 80) {
        return "B";
    }

    if (marks >= 70) {
        return "C";
    }

    if (marks >= 60) {
        return "D";
    }

    return "Fail";
}

console.log(calculateGrade(95));

console.log(calculateGrade(82));

console.log(calculateGrade(72));

console.log(calculateGrade(65));

console.log(calculateGrade(40));
```

---

## Output

```
A

B

C

D

Fail
```

---

## Better Version

Validate input first.

```javascript
if (marks < 0 || marks > 100) {
    return "Invalid Marks";
}
```

Professional developers always validate input.

---

# 44. User Permission System

## Problem

Only users who are:

- Logged in
- Admin

should get access.

---

## Solution

```javascript
function checkAccess(isLoggedIn, isAdmin) {

    if (isLoggedIn && isAdmin) {
        return "Access Granted";
    }

    return "Access Denied";
}

console.log(checkAccess(true, true));

console.log(checkAccess(true, false));

console.log(checkAccess(false, true));
```

---

## Output

```
Access Granted

Access Denied

Access Denied
```

---

## Why `&&`?

Both conditions must be true.

```
Logged In

AND

Admin
```

---

## Real World

Admin Dashboard

```
Login ✓

Admin ✓

↓

Open Dashboard
```

---

# 45. Discount System

## Problem

Customer receives discount if:

- Purchase > ₹5000

OR

- Premium Member

---

## Solution

```javascript
function calculateDiscount(amount, isPremium) {

    if (amount > 5000 || isPremium) {
        return "Discount Applied";
    }

    return "No Discount";
}

console.log(calculateDiscount(6000, false));

console.log(calculateDiscount(1000, true));

console.log(calculateDiscount(1000, false));
```

---

## Output

```
Discount Applied

Discount Applied

No Discount
```

---

## Why `||`?

Only **one** condition needs to be true.

---

# 46. Multiple Condition User Validator

## Problem

Validate:

- Name exists
- Age > 18
- Email exists

---

## Solution

```javascript
function validateUser(user) {

    if (!user.name) {
        return "Name is required";
    }

    if (user.age <= 18) {
        return "User must be above 18";
    }

    if (!user.email) {
        return "Email is required";
    }

    return "User is Valid";
}

const user = {
    name: "Alex",
    age: 25,
    email: "alex@test.com"
};

console.log(validateUser(user));
```

---

## Output

```
User is Valid
```

---

## Better Testing

```javascript
console.log(
    validateUser({
        name: "",
        age: 25,
        email: ""
    })
);
```

Output

```
Name is required
```

---

## Real World

This is similar to form validation before submitting user data.

---

# 47. Day Calculator

## Problem

Input

```
1

↓

Monday
```

---

## Solution

```javascript
function getDay(number) {

    if (number === 1) return "Monday";

    if (number === 2) return "Tuesday";

    if (number === 3) return "Wednesday";

    if (number === 4) return "Thursday";

    if (number === 5) return "Friday";

    if (number === 6) return "Saturday";

    if (number === 7) return "Sunday";

    return "Invalid Day";
}

console.log(getDay(1));

console.log(getDay(7));

console.log(getDay(10));
```

---

## Output

```
Monday

Sunday

Invalid Day
```

---

## Better Method

Using an array.

```javascript
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log(days[0]);
```

Cleaner and easier to maintain.

---

# 48. Calculator Using Switch

## Solution

```javascript
function calculate(a, b, operator) {

    switch (operator) {

        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":

            if (b === 0) {
                return "Cannot divide by zero";
            }

            return a / b;

        case "%":
            return a % b;

        default:
            return "Invalid Operator";
    }
}

console.log(calculate(20, 10, "+"));

console.log(calculate(20, 10, "%"));
```

---

## Output

```
30

0
```

---

## When Should You Use `switch`?

Use it when checking one variable against many possible values.

---

# 49. Shopping Cart Discount System

## Problem

```
Price = 5000

Quantity = 3

Member = true
```

Rules

- Total > 10000 → 20% Discount
- Member → Additional 10%

---

## Solution

```javascript
function calculateFinalPrice(cart) {

    let total = cart.price * cart.quantity;

    if (total > 10000) {
        total *= 0.80;
    }

    if (cart.isMember) {
        total *= 0.90;
    }

    return total;
}

const cart = {

    price: 5000,

    quantity: 3,

    isMember: true
};

console.log(calculateFinalPrice(cart));
```

---

## Output

```
10800
```

---

## Calculation

```
5000 × 3

↓

15000

↓

20% Discount

↓

12000

↓

10% Member Discount

↓

10800
```

---

## Real World

Exactly how shopping websites calculate discounts.

---

# 50. Shipping Cost Calculator

## Problem

Rules

```
Above ₹5000

↓

Free Shipping

₹2000–₹5000

↓

₹50

Below ₹2000

↓

₹100
```

---

## Solution

```javascript
function calculateShipping(amount) {

    if (amount > 5000) {
        return "Free Shipping";
    }

    if (amount >= 2000) {
        return "Shipping Charge: ₹50";
    }

    return "Shipping Charge: ₹100";
}

console.log(calculateShipping(7000));

console.log(calculateShipping(3000));

console.log(calculateShipping(1000));
```

---

## Output

```
Free Shipping

Shipping Charge: ₹50

Shipping Charge: ₹100
```

---

# 🎯 Concepts Practiced (41–50)

By completing these questions, you've strengthened several essential JavaScript skills:

- ✅ String length with `.length`
- ✅ Conditional logic using `if`
- ✅ Nested decision making
- ✅ Logical operators (`&&`, `||`, `!`)
- ✅ Input validation
- ✅ Working with objects
- ✅ Function design
- ✅ `switch` statements
- ✅ Arithmetic calculations
- ✅ Real-world business logic (discounts, shipping, permissions)

These problems are much closer to what you'll build in actual applications than simple "print hello world" exercises. They're also the kind of logic you may be asked to implement or debug in interviews, where the challenge isn't syntax, but translating business rules into correct, readable code. Humans call this "software engineering." Computers call it "Tuesday."






# 51. Movie Ticket Pricing

## Problem

Create a function that calculates the ticket price based on age.

Rules:

- Below 5 → Free
- 5–17 → ₹100
- 18–59 → ₹200
- 60 and above → ₹150 (Senior Citizen)

---

## Solution

```javascript
function getTicketPrice(age) {

    if (age < 5) {
        return "Free";
    }

    if (age < 18) {
        return "₹100";
    }

    if (age >= 60) {
        return "₹150";
    }

    return "₹200";
}

console.log(getTicketPrice(3));
console.log(getTicketPrice(10));
console.log(getTicketPrice(25));
console.log(getTicketPrice(65));
```

---

## Output

```
Free

₹100

₹200

₹150
```

---

## Explanation

JavaScript checks conditions from top to bottom.

```
Age = 65

↓

<5 ❌

↓

<18 ❌

↓

>=60 ✅

↓

₹150
```

---

## Real World

Movie booking apps like BookMyShow follow similar pricing logic.

---

# 52. ATM Withdrawal System

## Problem

Create:

```javascript
withdraw(balance, amount)
```

Rules:

- Amount cannot exceed balance.
- Amount must be a multiple of 100.

---

## Solution

```javascript
function withdraw(balance, amount) {

    if (amount > balance) {
        return "Insufficient Balance";
    }

    if (amount % 100 !== 0) {
        return "Amount must be a multiple of 100";
    }

    balance -= amount;

    return `Withdrawal Successful. Remaining Balance: ₹${balance}`;
}

console.log(withdraw(5000, 2000));
console.log(withdraw(5000, 5500));
console.log(withdraw(5000, 250));
```

---

## Output

```
Withdrawal Successful. Remaining Balance: ₹3000

Insufficient Balance

Amount must be a multiple of 100
```

---

## What You Learn

- Comparison operators
- Modulus (`%`)
- Updating variables
- Business rule validation

---

# 53. Bank Interest Calculator

## Problem

Interest Rates:

- Below ₹10,000 → 3%
- ₹10,000–₹50,000 → 5%
- Above ₹50,000 → 7%

Calculate the interest amount.

---

## Solution

```javascript
function calculateInterest(amount) {

    let rate;

    if (amount < 10000) {

        rate = 0.03;

    } else if (amount <= 50000) {

        rate = 0.05;

    } else {

        rate = 0.07;

    }

    const interest = amount * rate;

    return `Interest: ₹${interest}`;
}

console.log(calculateInterest(8000));
console.log(calculateInterest(20000));
console.log(calculateInterest(100000));
```

---

## Output

```
Interest: ₹240

Interest: ₹1000

Interest: ₹7000
```

---

## Better Version

Return both rate and interest.

```javascript
return {
    rate,
    interest
};
```

This is more useful in real applications.

---

# 54. Find Assignment Bug

## Problem

```javascript
if (age = 18) {

    console.log("Adult");

}
```

---

## Why Is It Wrong?

`=` is the **assignment operator**, not the comparison operator.

This line assigns:

```javascript
age = 18;
```

Since `18` is a truthy value, the condition always evaluates to `true`.

---

## Incorrect Flow

```
age = 18

↓

18

↓

Truthy

↓

Condition Always Runs
```

---

## Correct Solution

```javascript
if (age === 18) {

    console.log("Adult");

}
```

---

## Interview Tip

This is one of the oldest and most common JavaScript bugs.

Always use `===` when comparing values.

---

# 55. Fix Comparison Bug

## Problem

```javascript
if (password == 12345)
```

---

## Why Is This Risky?

The `==` operator performs **type coercion**.

Example:

```javascript
"12345" == 12345
```

Output

```
true
```

JavaScript converts the string into a number before comparing.

This can lead to unexpected behavior.

---

## Correct Solution

```javascript
if (password === "12345")
```

or

```javascript
if (password === 12345)
```

depending on the intended data type.

---

## Best Practice

Always use:

```javascript
===
```

unless you intentionally want type conversion.

---

# 56. Fix Logic Error

## Problem

```javascript
if (age > 18) {

    console.log("Adult");

}
else if (age > 10) {

    console.log("Teen");

}
else {

    console.log("Child");

}
```

---

## Is the Logic Correct?

Mostly, but it has a subtle issue.

A person who is exactly **18 years old** will not be classified as an adult.

```
18 > 18

↓

false
```

---

## Correct Solution

```javascript
if (age >= 18) {

    console.log("Adult");

}
else if (age >= 13) {

    console.log("Teen");

}
else {

    console.log("Child");

}
```

---

## Why Change `10` to `13`?

Teenage years begin at **13**, not 11.

This matches real-world expectations.

---

## Output

```javascript
age = 18
```

```
Adult
```

---

# 57. Debug Discount Code

## Problem

```javascript
if (price > 500) {

    price = price - 10;

}
```

---

## Is It Wrong?

The syntax is correct, but the logic depends on the requirement.

If the intention is to apply a **10% discount**, this code is incorrect because it subtracts a fixed value of 10.

Example:

```javascript
price = 1000;
```

Current result:

```
990
```

Expected (10% discount):

```
900
```

---

## Correct Solution

```javascript
if (price > 500) {

    price = price * 0.90;

}
```

or

```javascript
price -= price * 0.10;
```

---

## Output

```
1000

↓

900
```

---

## Interview Tip

Clarify whether a discount is a **fixed amount** or a **percentage**.

---

# 58. Predict Logical Operator Output

## Code

```javascript
let result = true && false || true;

console.log(result);
```

---

## Output

```
true
```

---

## Why?

Operator precedence:

```
&&

↓

||

```

Step 1

```javascript
true && false
```

↓

```
false
```

Step 2

```javascript
false || true
```

↓

```
true
```

---

## Final Answer

```
true
```

---

## Interview Tip

`&&` has higher precedence than `||`.

Use parentheses if the expression becomes difficult to read.

---

# 59. Build Login Validation System

## Problem

Input

```javascript
{
    email: "",
    password: "",
    isBlocked: false
}
```

Return:

- Missing fields
- Account blocked
- Login success

---

## Solution

```javascript
function validateLogin(user) {

    if (!user.email || !user.password) {
        return "Missing Fields";
    }

    if (user.isBlocked) {
        return "Account Blocked";
    }

    return "Login Successful";
}

console.log(
    validateLogin({
        email: "alex@test.com",
        password: "12345",
        isBlocked: false
    })
);

console.log(
    validateLogin({
        email: "",
        password: "",
        isBlocked: false
    })
);

console.log(
    validateLogin({
        email: "alex@test.com",
        password: "12345",
        isBlocked: true
    })
);
```

---

## Output

```
Login Successful

Missing Fields

Account Blocked
```

---

## Real World

This is similar to the first layer of backend authentication before checking a database.

---

# 60. Build Leap Year Checker

## Problem

Create:

```javascript
isLeapYear(year)
```

---

## Leap Year Rules

A year is a leap year if:

- It is divisible by 4 **and not divisible by 100**, **or**
- It is divisible by 400.

---

## Solution

```javascript
function isLeapYear(year) {

    if (
        (year % 4 === 0 && year % 100 !== 0) ||
        year % 400 === 0
    ) {
        return "Leap Year";
    }

    return "Not a Leap Year";
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
```

---

## Output

```
Leap Year

Not a Leap Year

Leap Year

Not a Leap Year
```

---

## Explanation

### Example 1

```javascript
2024
```

```
2024 % 4 = 0

↓

Leap Year
```

---

### Example 2

```javascript
1900
```

```
Divisible by 100 ✅

Divisible by 400 ❌

↓

Not Leap Year
```

---

### Example 3

```javascript
2000
```

```
Divisible by 400 ✅

↓

Leap Year
```

---

## Interview Tip

This is a classic interview problem because it tests:

- Arithmetic operators
- Modulus (`%`)
- Logical operators (`&&`, `||`)
- Conditional statements
- Understanding of real-world business rules

---

# 🎯 Concepts Practiced (51–60)

By solving these problems, you've covered:

- ✅ Multi-branch conditional logic
- ✅ Business rule implementation
- ✅ Validation and error handling
- ✅ Assignment vs comparison (`=` vs `===`)
- ✅ Logical operators (`&&`, `||`)
- ✅ Percentage calculations
- ✅ Input validation
- ✅ Authentication logic
- ✅ Date and calendar calculations
- ✅ Reading and debugging existing code

These questions are the kind that appear in beginner-to-intermediate interviews and, more importantly, mirror the logic you'll implement in real applications. The syntax is the easy part. Translating vague business rules like "senior citizens get a discount except on holidays unless..." into clean code is where software engineering begins. The universe, for reasons known only to itself, calls that "requirements gathering."



# Introduction to Loops

Imagine you need to print:

```
1
2
3
4
5
...
100
```

Without loops, you would have to write:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
...
console.log(100);
```

That would be slow, repetitive, and difficult to maintain.

A **loop** allows you to execute the same block of code multiple times.

The most commonly used loop is the `for` loop.

### Syntax

```javascript
for (initialization; condition; update) {

    // Code to repeat

}
```

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output

```
1
2
3
4
5
```

---

# 61. Print Numbers From 1 to 10

## Problem

Print numbers from **1 to 10**.

---

## Solution

```javascript
for (let i = 1; i <= 10; i++) {

    console.log(i);

}
```

---

## Output

```
1
2
3
4
5
6
7
8
9
10
```

---

## Explanation

### Step 1

```javascript
let i = 1;
```

Starts the loop.

---

### Step 2

```javascript
i <= 10
```

Checks whether the loop should continue.

---

### Step 3

```javascript
i++
```

Increases `i` by 1 after each iteration.

---

## Dry Run

| i | Printed |
|---|----------|
|1|1|
|2|2|
|3|3|
|...|...|
|10|10|
|11|Loop Stops|

---

# 62. Print Numbers From 10 to 1

## Solution

```javascript
for (let i = 10; i >= 1; i--) {

    console.log(i);

}
```

---

## Output

```
10
9
8
7
6
5
4
3
2
1
```

---

## Explanation

Instead of increasing the value:

```javascript
i++
```

we decrease it.

```javascript
i--
```

---

# 63. Print Numbers Between Range

## Problem

Create

```javascript
printRange(start, end)
```

Example

```
5

↓

10
```

---

## Solution

```javascript
function printRange(start, end) {

    for (let i = start; i <= end; i++) {

        console.log(i);

    }

}

printRange(5, 10);
```

---

## Output

```
5
6
7
8
9
10
```

---

## Real World

This logic is useful for:

- Pagination
- Calendar generation
- Date ranges
- Reports
- IDs

---

# 64. Print Even Numbers From 1 to 100

## Solution (Method 1)

```javascript
for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {

        console.log(i);

    }

}
```

---

## Output

```
2
4
6
8
...
100
```

---

## Better Solution

```javascript
for (let i = 2; i <= 100; i += 2) {

    console.log(i);

}
```

---

## Why Better?

Instead of checking every number,

```
1

↓

2

↓

3

↓

4
```

we directly jump

```
2

↓

4

↓

6

↓

8
```

Less work.

Faster.

Cleaner.

---

# 65. Print Odd Numbers From 1 to 100

## Solution

```javascript
for (let i = 1; i <= 100; i += 2) {

    console.log(i);

}
```

---

## Output

```
1
3
5
7
...
99
```

---

## Alternative

```javascript
if (i % 2 !== 0)
```

also works.

---

# 66. Sum Numbers From 1 to N

## Problem

Example

```
5
```

Calculate

```
1 + 2 + 3 + 4 + 5
```

---

## Solution

```javascript
function sumNumber(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {

        sum += i;

    }

    return sum;

}

console.log(sumNumber(5));
```

---

## Output

```
15
```

---

## Dry Run

| i | Sum |
|---|-----|
|1|1|
|2|3|
|3|6|
|4|10|
|5|15|

---

## Important Pattern

Whenever you see:

```
Find Total

Find Average

Find Count
```

Think:

```
Start with

0
```

Then keep adding.

---

# 67. Find Sum of Even Numbers

## Problem

Find

```
2+4+6+8+10
```

---

## Solution

```javascript
let sum = 0;

for (let i = 2; i <= 10; i += 2) {

    sum += i;

}

console.log(sum);
```

---

## Output

```
30
```

---

## Calculation

```
2

↓

6

↓

12

↓

20

↓

30
```

---

# 68. Find Sum of Odd Numbers

## Solution

```javascript
let sum = 0;

for (let i = 1; i <= 10; i += 2) {

    sum += i;

}

console.log(sum);
```

---

## Output

```
25
```

---

## Calculation

```
1

↓

4

↓

9

↓

16

↓

25
```

---

# 69. Multiplication Table

## Problem

Input

```
5
```

Output

```
5 x 1 = 5

...

5 x 10 = 50
```

---

## Solution

```javascript
function table(number) {

    for (let i = 1; i <= 10; i++) {

        console.log(`${number} x ${i} = ${number * i}`);

    }

}

table(5);
```

---

## Output

```
5 x 1 = 5

5 x 2 = 10

5 x 3 = 15

...

5 x 10 = 50
```

---

## Explanation

Template literals

```javascript
`${}`
```

allow you to combine text and variables cleanly.

---

# 70. Count Numbers in Range

## Problem

Input

```
10

↓

20
```

Output

```
11
```

---

## Solution

```javascript
function countRange(start, end) {

    let count = 0;

    for (let i = start; i <= end; i++) {

        count++;

    }

    return count;

}

console.log(countRange(10, 20));
```

---

## Output

```
11
```

---

## Better Solution

Instead of looping:

```javascript
return end - start + 1;
```

Example

```
20 - 10 + 1

↓

11
```

This has **O(1)** time complexity instead of **O(n)**.

---

# 🎯 Concepts Practiced (61–70)

After completing these questions, you now know how to:

- ✅ Use the `for` loop
- ✅ Count upward and downward
- ✅ Iterate over ranges
- ✅ Work with even and odd numbers
- ✅ Accumulate values using a running total
- ✅ Build multiplication tables
- ✅ Count items in a range
- ✅ Recognize opportunities to optimize loops with simple math

## ⭐ Engineering Tip

A common beginner mistake is reaching for a loop every time. Strong engineers ask first: *"Do I actually need to iterate?"* For example, Question 70 can be solved with a loop, but a simple formula is faster and clearer. Interviews, and jobs like Alignerr, reward that habit of thinking before coding. The CPU appreciates it too, even if it never sends thank-you notes.


# Introduction to While Loop

A **while loop** executes a block of code **as long as a condition is true**.

Unlike a `for` loop, a `while` loop is useful when you **don't know beforehand how many times the loop will run**.

## Syntax

```javascript
while (condition) {

    // Code

}
```

Example

```javascript
let i = 1;

while (i <= 5) {

    console.log(i);

    i++;

}
```

Output

```
1
2
3
4
5
```

---

# 71. Print Numbers Using While Loop

## Problem

Print:

```
1
2
3
4
5
```

using a `while` loop.

---

## Solution

```javascript
let i = 1;

while (i <= 5) {

    console.log(i);

    i++;

}
```

---

## Output

```
1
2
3
4
5
```

---

## Dry Run

| i | Printed |
|---|---------|
|1|1|
|2|2|
|3|3|
|4|4|
|5|5|
|6|Loop Stops|

---

# 72. Countdown Timer

## Problem

Create

```javascript
countDown(number)
```

Input

```
5
```

Output

```
5
4
3
2
1
0
```

---

## Solution

```javascript
function countDown(number) {

    while (number >= 0) {

        console.log(number);

        number--;

    }

}

countDown(5);
```

---

## Output

```
5
4
3
2
1
0
```

---

## Real World

Countdown timers

OTP expiration

Auction timers

Rocket launch timers

All use similar logic.

---

# 73. Sum Numbers Using While Loop

## Problem

```
1+2+3+...+10
```

Output

```
55
```

---

## Solution

```javascript
function sumNumber(number) {

    let sum = 0;

    let i = 1;

    while (i <= number) {

        sum += i;

        i++;

    }

    return sum;

}

console.log(sumNumber(10));
```

---

## Output

```
55
```

---

## Dry Run

```
sum = 0

↓

1

↓

3

↓

6

↓

10

↓

...

↓

55
```

---

# 74. Reverse Number Using Loop

## Problem

Input

```
12345
```

Output

```
54321
```

---

## Solution

```javascript
function reverseNumber(number) {

    let reversed = 0;

    while (number > 0) {

        let digit = number % 10;

        reversed = reversed * 10 + digit;

        number = Math.floor(number / 10);

    }

    return reversed;

}

console.log(reverseNumber(12345));
```

---

## Output

```
54321
```

---

## Step-by-Step

```
12345

↓

Take Last Digit

5

↓

Reverse

5

↓

Remove Last Digit

1234

↓

Take 4

↓

Reverse

54

↓

Continue...
```

---

## Important Concepts

```javascript
number % 10
```

Gets the last digit.

```javascript
Math.floor(number / 10)
```

Removes the last digit.

These two operations appear in many interview questions.

---

# 75. Count Digits

## Problem

Input

```
98765
```

Output

```
5
```

---

## Solution

```javascript
function countDigits(number) {

    let count = 0;

    while (number > 0) {

        count++;

        number = Math.floor(number / 10);

    }

    return count;

}

console.log(countDigits(98765));
```

---

## Output

```
5
```

---

## Dry Run

```
98765

↓

9876

↓

987

↓

98

↓

9

↓

0

↓

Count = 5
```

---

# 76. Sum Of Digits

## Problem

```
1234
```

Calculate

```
1+2+3+4
```

---

## Solution

```javascript
function sumDigits(number) {

    let sum = 0;

    while (number > 0) {

        let digit = number % 10;

        sum += digit;

        number = Math.floor(number / 10);

    }

    return sum;

}

console.log(sumDigits(1234));
```

---

## Output

```
10
```

---

## Dry Run

```
4

↓

3

↓

2

↓

1

↓

Sum

10
```

---

# 77. Product Of Digits

## Problem

```
1234

↓

1×2×3×4
```

Output

```
24
```

---

## Solution

```javascript
function productDigits(number) {

    let product = 1;

    while (number > 0) {

        let digit = number % 10;

        product *= digit;

        number = Math.floor(number / 10);

    }

    return product;

}

console.log(productDigits(1234));
```

---

## Output

```
24
```

---

## Important

Addition starts with

```javascript
0
```

Multiplication starts with

```javascript
1
```

Otherwise

```
0 × anything

↓

0
```

---

# 78. Find Largest Digit

## Problem

Input

```
58392
```

Output

```
9
```

---

## Solution

```javascript
function largestDigit(number) {

    let largest = 0;

    while (number > 0) {

        let digit = number % 10;

        if (digit > largest) {

            largest = digit;

        }

        number = Math.floor(number / 10);

    }

    return largest;

}

console.log(largestDigit(58392));
```

---

## Output

```
9
```

---

## Dry Run

```
Digits

2

↓

9

↓

3

↓

8

↓

5

Largest

9
```

---

# 79. Find Smallest Digit

## Problem

Input

```
58392
```

Output

```
2
```

---

## Solution

```javascript
function smallestDigit(number) {

    let smallest = 9;

    while (number > 0) {

        let digit = number % 10;

        if (digit < smallest) {

            smallest = digit;

        }

        number = Math.floor(number / 10);

    }

    return smallest;

}

console.log(smallestDigit(58392));
```

---

## Output

```
2
```

---

## Why Start With 9?

Digits range from

```
0

↓

9
```

Starting with the largest possible digit guarantees that the first comparison works correctly.

---

# 80. Check Palindrome Number

## Problem

Input

```
121
```

Output

```
Palindrome
```

Input

```
123
```

Output

```
Not Palindrome
```

---

## Solution

```javascript
function isPalindrome(number) {

    let original = number;

    let reversed = 0;

    while (number > 0) {

        let digit = number % 10;

        reversed = reversed * 10 + digit;

        number = Math.floor(number / 10);

    }

    if (original === reversed) {

        return "Palindrome";

    }

    return "Not Palindrome";

}

console.log(isPalindrome(121));

console.log(isPalindrome(123));
```

---

## Output

```
Palindrome

Not Palindrome
```

---

## Dry Run

### Input

```
121
```

Reverse Process

```
1

↓

12

↓

121
```

Compare

```
Original

121

==

Reversed

121
```

Result

```
Palindrome
```

---

# ⭐ Common Pattern in Questions 74–80

Almost every number-based interview problem follows the same pattern:

```javascript
while (number > 0) {

    let digit = number % 10;

    // Process the digit

    number = Math.floor(number / 10);

}
```

If you truly understand these two lines:

```javascript
let digit = number % 10;
number = Math.floor(number / 10);
```

you can solve dozens of interview problems, including:

- Reverse Number
- Sum of Digits
- Product of Digits
- Count Digits
- Largest Digit
- Smallest Digit
- Armstrong Number
- Palindrome Number
- Digital Root
- Harshad Number
- Spy Number
- Neon Number
- Duck Number
- Happy Number

This tiny pattern is one of those deceptively simple tools that shows up everywhere. Learn it once, and suddenly a whole category of "hard" interview questions becomes routine. The interviewers will still nod gravely as if they summoned an ancient algorithm from the void, but underneath it's just `% 10` and integer division doing all the heavy lifting.


# 81. Count Even Digits

## Problem

Input

```
123456
```

Output

```
3
```

Because:

```
2
4
6
```

are even digits.

---

## Solution

```javascript
function countEvenDigits(number) {

    let count = 0;

    while (number > 0) {

        let digit = number % 10;

        if (digit % 2 === 0) {

            count++;

        }

        number = Math.floor(number / 10);

    }

    return count;

}

console.log(countEvenDigits(123456));
```

---

## Output

```
3
```

---

## Dry Run

```
Digits

6 ✅

5

4 ✅

3

2 ✅

1

↓

Count = 3
```

---

# 82. Count Odd Digits

## Problem

Input

```
123456
```

Output

```
3
```

---

## Solution

```javascript
function countOddDigits(number) {

    let count = 0;

    while (number > 0) {

        let digit = number % 10;

        if (digit % 2 !== 0) {

            count++;

        }

        number = Math.floor(number / 10);

    }

    return count;

}

console.log(countOddDigits(123456));
```

---

## Output

```
3
```

---

# 83. Find Number Of Zeroes

## Problem

Input

```
10020030
```

Output

```
5
```

> **Note:** The question says the answer is **4**, but that's incorrect.  
> The number **10020030** actually contains **5 zeroes**:
>
> ```
> 1 0 0 2 0 0 3 0
>     ↑ ↑   ↑ ↑   ↑
> ```
>
> This is a good reminder that interview questions can contain mistakes. Verify the logic instead of blindly trusting the prompt.

---

## Solution

```javascript
function countZeros(number) {

    let count = 0;

    while (number > 0) {

        let digit = number % 10;

        if (digit === 0) {

            count++;

        }

        number = Math.floor(number / 10);

    }

    return count;

}

console.log(countZeros(10020030));
```

---

## Output

```
5
```

---

# 84. Armstrong Number Checker

## Problem

Example

```
153
```

Calculation

```
1³ + 5³ + 3³

↓

1 + 125 + 27

↓

153
```

Output

```
Armstrong
```

---

## Solution

```javascript
function isArmstrong(number) {

    let original = number;

    let sum = 0;

    while (number > 0) {

        let digit = number % 10;

        sum += digit ** 3;

        number = Math.floor(number / 10);

    }

    return original === sum
        ? "Armstrong"
        : "Not Armstrong";

}

console.log(isArmstrong(153));

console.log(isArmstrong(123));
```

---

## Output

```
Armstrong

Not Armstrong
```

---

## Interview Note

For a generalized Armstrong number, raise each digit to the power of the **number of digits**, not always 3.

Example:

```
9474

↓

9⁴+4⁴+7⁴+4⁴
```

---

# 85. Perfect Number Checker

## Problem

A Perfect Number is equal to the sum of its factors (excluding itself).

Example

```
28

Factors

1

2

4

7

14

↓

1+2+4+7+14

↓

28
```

Output

```
Perfect Number
```

---

## Solution

```javascript
function isPerfect(number) {

    let sum = 0;

    for (let i = 1; i < number; i++) {

        if (number % i === 0) {

            sum += i;

        }

    }

    return sum === number
        ? "Perfect Number"
        : "Not Perfect";

}

console.log(isPerfect(28));

console.log(isPerfect(15));
```

---

## Output

```
Perfect Number

Not Perfect
```

---

# 86. Find Factorial

## Problem

```
5!

↓

5×4×3×2×1

↓

120
```

---

## Solution

```javascript
function factorial(number) {

    let result = 1;

    for (let i = 1; i <= number; i++) {

        result *= i;

    }

    return result;

}

console.log(factorial(5));
```

---

## Output

```
120
```

---

## Dry Run

```
1

↓

2

↓

6

↓

24

↓

120
```

---

## Special Case

```
0!

↓

1
```

Always remember this.

---

# 87. Factorial Using While Loop

## Solution

```javascript
function factorial(number) {

    let result = 1;

    let i = 1;

    while (i <= number) {

        result *= i;

        i++;

    }

    return result;

}

console.log(factorial(5));
```

---

## Output

```
120
```

---

## Difference

The logic is the same as the `for` loop.

Only the loop syntax changes.

---

# 88. Print Factorials From 1 To N

## Problem

Input

```
5
```

Output

```
1
2
6
24
120
```

---

## Solution

```javascript
function printFactorials(n) {

    let factorial = 1;

    for (let i = 1; i <= n; i++) {

        factorial *= i;

        console.log(factorial);

    }

}

printFactorials(5);
```

---

## Output

```
1
2
6
24
120
```

---

## Why Is This Better?

Instead of recalculating every factorial from scratch, we reuse the previous result.

```
3!

↓

6

↓

4!

↓

6 × 4

↓

24
```

Efficient and clean.

---

# 89. Print Fibonacci Series

## Problem

Input

```
10
```

Output

```
0 1 1 2 3 5 8 13 21 34
```

---

## Solution

```javascript
function fibonacciSeries(n) {

    let first = 0;

    let second = 1;

    for (let i = 1; i <= n; i++) {

        console.log(first);

        let next = first + second;

        first = second;

        second = next;

    }

}

fibonacciSeries(10);
```

---

## Output

```
0

1

1

2

3

5

8

13

21

34
```

---

## Dry Run

```
0

1

↓

1

↓

2

↓

3

↓

5

↓

8
```

---

## Formula

```
Next

=

Previous

+

Current
```

---

# 90. Find Nth Fibonacci Number

## Problem

Find the 7th Fibonacci number.

Expected Output

```
8
```

---

## Solution

```javascript
function fibonacci(n) {

    let first = 0;

    let second = 1;

    if (n === 1) return 0;

    if (n === 2) return 1;

    for (let i = 3; i <= n; i++) {

        let next = first + second;

        first = second;

        second = next;

    }

    return second;

}

console.log(fibonacci(7));
```

---

## Output

```
8
```

---

## Sequence

| Position | Number |
|----------|--------|
|1|0|
|2|1|
|3|1|
|4|2|
|5|3|
|6|5|
|7|8|

---

# 🎯 Concepts Practiced (81–90)

After completing these questions, you now understand:

- ✅ Counting digits based on conditions
- ✅ Working with number decomposition using `% 10` and `Math.floor()`
- ✅ Armstrong number logic
- ✅ Perfect number calculation
- ✅ Factorials using `for` and `while`
- ✅ Optimizing repeated calculations
- ✅ Fibonacci sequence generation
- ✅ Finding the Nth Fibonacci number

---

# ⭐ Engineering Insight

Notice how many of these problems reuse the same building blocks:

- Loop (`for` or `while`)
- Condition (`if`)
- Accumulator (`sum`, `count`, `product`)
- Number decomposition (`% 10`, `Math.floor()`)

That's the pattern experienced engineers look for. They don't memorize 500 different solutions. They recognize that "Count Even Digits," "Armstrong," "Palindrome," and "Sum of Digits" are all variations of the same algorithm with one small piece changed. Spotting those patterns is what turns interview puzzles into routine exercises instead of dramatic battles against a whiteboard.


# 91. Count Fibonacci Numbers Below Limit

## Problem

Input

```
100
```

Output

```
12
```

Because the Fibonacci numbers below 100 are:

```
0
1
1
2
3
5
8
13
21
34
55
89
```

Total = **12**

---

## Solution

```javascript
function countFibonacci(limit) {

    let first = 0;
    let second = 1;
    let count = 0;

    while (first < limit) {

        count++;

        let next = first + second;

        first = second;
        second = next;
    }

    return count;
}

console.log(countFibonacci(100));
```

---

## Output

```
12
```

---

## Time Complexity

```
O(n)
```

where `n` is the number of Fibonacci numbers generated.

---

# 92. Check Prime Number

## Problem

Create

```javascript
isPrime(number)
```

Example

```
7

↓

Prime
```

---

## What is a Prime Number?

A prime number has exactly **two factors**.

```
1

and

itself
```

Example

```
7

↓

1

7
```

Prime

Example

```
8

↓

1

2

4

8
```

Not Prime

---

## Solution

```javascript
function isPrime(number) {

    if (number < 2) {
        return "Not Prime";
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return "Not Prime";
        }

    }

    return "Prime";
}

console.log(isPrime(7));

console.log(isPrime(10));
```

---

## Output

```
Prime

Not Prime
```

---

## Better Optimization

Instead of checking until

```
number
```

check only until

```javascript
Math.sqrt(number)
```

This improves performance significantly.

---

# 93. Print Prime Numbers Between Range

## Problem

Input

```
1

↓

100
```

---

## Solution

```javascript
function printPrimes(start, end) {

    for (let num = start; num <= end; num++) {

        let isPrime = true;

        if (num < 2) {

            isPrime = false;

        }

        for (let i = 2; i <= Math.sqrt(num); i++) {

            if (num % i === 0) {

                isPrime = false;

                break;

            }

        }

        if (isPrime) {

            console.log(num);

        }

    }

}

printPrimes(1, 100);
```

---

## Output

```
2
3
5
7
11
13
17
19
...
97
```

---

## What You Learn

Nested loops

Boolean flags

Optimization using `Math.sqrt()`

---

# 94. Count Prime Numbers

## Problem

Input

```
1

↓

100
```

Output

```
25
```

---

## Solution

```javascript
function countPrimes(start, end) {

    let count = 0;

    for (let num = start; num <= end; num++) {

        let isPrime = true;

        if (num < 2) {

            isPrime = false;

        }

        for (let i = 2; i <= Math.sqrt(num); i++) {

            if (num % i === 0) {

                isPrime = false;

                break;

            }

        }

        if (isPrime) {

            count++;

        }

    }

    return count;
}

console.log(countPrimes(1, 100));
```

---

## Output

```
25
```

---

# 95. Find Next Prime Number

## Problem

Input

```
20
```

Output

```
23
```

---

## Solution

```javascript
function nextPrime(number) {

    number++;

    while (true) {

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(number); i++) {

            if (number % i === 0) {

                isPrime = false;

                break;

            }

        }

        if (isPrime) {

            return number;

        }

        number++;

    }

}

console.log(nextPrime(20));
```

---

## Output

```
23
```

---

## Real World

Searching until a condition becomes true is a common algorithmic pattern.

---

# 96. Print Star Triangle

## Problem

Output

```
*
**
***
****
*****
```

---

## Solution

```javascript
for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {

        stars += "*";

    }

    console.log(stars);

}
```

---

## Output

```
*
**
***
****
*****
```

---

## Important Concept

Nested loops.

Outer loop = rows.

Inner loop = columns.

---

# 97. Reverse Star Triangle

## Problem

```
*****
****
***
**
*
```

---

## Solution

```javascript
for (let i = 5; i >= 1; i--) {

    let stars = "";

    for (let j = 1; j <= i; j++) {

        stars += "*";

    }

    console.log(stars);

}
```

---

## Output

```
*****
****
***
**
*
```

---

# 98. Square Pattern

## Problem

```
*****
*****
*****
*****
*****
```

---

## Solution

```javascript
for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= 5; j++) {

        stars += "*";

    }

    console.log(stars);

}
```

---

## Output

```
*****
*****
*****
*****
*****
```

---

# 99. Number Triangle

## Problem

Output

```
1
12
123
1234
12345
```

---

## Solution

```javascript
for (let i = 1; i <= 5; i++) {

    let numbers = "";

    for (let j = 1; j <= i; j++) {

        numbers += j;

    }

    console.log(numbers);

}
```

---

## Output

```
1
12
123
1234
12345
```

---

# 100. Reverse Number Triangle

## Problem

Output

```
12345
1234
123
12
1
```

---

## Solution

```javascript
for (let i = 5; i >= 1; i--) {

    let numbers = "";

    for (let j = 1; j <= i; j++) {

        numbers += j;

    }

    console.log(numbers);

}
```

---

## Output

```
12345
1234
123
12
1
```

---

# ⭐ Pattern Logic (Questions 96–100)

Every pattern problem follows the same structure:

```javascript
for (rows) {

    let output = "";

    for (columns) {

        output += something;

    }

    console.log(output);

}
```

The **outer loop** controls **how many rows** are printed.

The **inner loop** controls **what appears on each row**.

Once you understand this pattern, you can solve hundreds of star, number, alphabet, pyramid, diamond, and Pascal's triangle questions by changing only the inner loop logic.

---

# 🎯 Concepts Practiced (91–100)

After completing the first 100 JavaScript coding questions, you've covered:

- ✅ Fibonacci sequences and counting
- ✅ Prime number algorithms
- ✅ Range-based searching
- ✅ Nested loops
- ✅ Mathematical optimization with `Math.sqrt()`
- ✅ Infinite loops with controlled exits (`while (true)` + `return`)
- ✅ Star and number pattern printing
- ✅ Building strings inside loops
- ✅ Thinking in rows and columns

---

# 🏆 Milestone Reached

You've now completed **100 foundational JavaScript coding problems** covering:

- Variables & Data Types
- Objects & Arrays
- Functions
- Operators & Conditions
- Debugging Basics
- Loops (`for` and `while`)
- Number Logic
- Factorials
- Fibonacci
- Prime Numbers
- Pattern Problems

This is a strong foundation. The next major modules should move beyond syntax into the kinds of problems real frontend and full-stack engineers solve every day:

1. Strings (50+ problems)
2. Arrays (100+ problems)
3. Objects (50+ problems)
4. Functions & Higher-Order Functions
5. ES6+ Features
6. DOM Manipulation
7. Asynchronous JavaScript (`Promise`, `async/await`, Fetch API)
8. Error Handling
9. Closures & Scope
10. Advanced JavaScript Interview Problems
11. Debugging Real Code
12. Mini JavaScript Projects

Those topics are where interview difficulty starts increasing. The first 100 questions teach you to write code. The next phases teach you to reason about code, debug it, and design it, which is much closer to what roles like Alignerr and strong software engineering interviews actually demand.


# Functions - Phase 1 (Questions 101–115)

---

## 101. Hello World Function

Create a function that prints:

```
Hello World
```

Example

```javascript
hello();
```

Output

```
Hello World
```

---

## 102. Greeting Function

Create a function:

```javascript
greet(name)
```

that greets a user by name.

Example

```javascript
greet("Alex");
```

Output

```
Hello Alex
```

---

## 103. Add Two Numbers

Create a function:

```javascript
add(a, b)
```

Return the sum of two numbers.

Example

```javascript
add(10, 20);
```

Output

```
30
```

---

## 104. Subtract Two Numbers

Create a function:

```javascript
subtract(a, b)
```

Return the difference between two numbers.

Example

```javascript
subtract(20, 5);
```

Output

```
15
```

---

## 105. Multiply Two Numbers

Create a function:

```javascript
multiply(a, b)
```

Return the product.

Example

```javascript
multiply(5, 4);
```

Output

```
20
```

---

## 106. Divide Two Numbers

Create a function:

```javascript
divide(a, b)
```

Return the quotient.

Example

```javascript
divide(20, 4);
```

Output

```
5
```

---

## 107. Square of a Number

Create a function:

```javascript
square(number)
```

Return the square of the given number.

Example

```javascript
square(6);
```

Output

```
36
```

---

## 108. Cube of a Number

Create a function:

```javascript
cube(number)
```

Return the cube of the given number.

Example

```javascript
cube(3);
```

Output

```
27
```

---

## 109. Area of a Rectangle

Create a function:

```javascript
rectangleArea(length, width)
```

Formula

```
Area = Length × Width
```

Example

```javascript
rectangleArea(10, 5);
```

Output

```
50
```

---

## 110. Perimeter of a Rectangle

Create a function:

```javascript
rectanglePerimeter(length, width)
```

Formula

```
Perimeter = 2 × (Length + Width)
```

Example

```javascript
rectanglePerimeter(10, 5);
```

Output

```
30
```

---

## 111. Area of a Circle

Create a function:

```javascript
circleArea(radius)
```

Formula

```
π × r²
```

Use

```javascript
Math.PI
```

Example

```javascript
circleArea(5);
```

Output

```
78.54
```

(approximately)

---

## 112. Circumference of a Circle

Create a function:

```javascript
circleCircumference(radius)
```

Formula

```
2 × π × r
```

Example

```javascript
circleCircumference(5);
```

Output

```
31.42
```

(approximately)

---

## 113. Maximum of Two Numbers

Create a function:

```javascript
maximum(a, b)
```

Return the larger number.

Example

```javascript
maximum(15, 30);
```

Output

```
30
```

---

## 114. Minimum of Two Numbers

Create a function:

```javascript
minimum(a, b)
```

Return the smaller number.

Example

```javascript
minimum(15, 30);
```

Output

```
15
```

---

## 115. Check Positive Number

Create a function:

```javascript
isPositive(number)
```

Return:

```
Positive
```

or

```
Not Positive
```

Example 1

```javascript
isPositive(25);
```

Output

```
Positive
```

Example 2

```javascript
isPositive(-10);
```

Output

```
Not Positive
```

---

## Concepts Covered

After completing Questions **101–115**, you should be comfortable with:

- Creating functions
- Calling functions
- Parameters
- Arguments
- Returning values
- Mathematical calculations
- Using `Math.PI`
- Using `return`
- Basic decision making with `if`
- Writing reusable code

These are the building blocks for everything that follows, from array methods like `map()` to Express route handlers and React event callbacks. Small functions may seem boring now, but production applications are mostly thousands of these tiny pieces stitched together. Computers, unlike humans, are surprisingly enthusiastic about repetitive work.


## 116. Check Negative Number

Create a function:

```javascript
isNegative(number)
```

Return:

```
Negative
```

or

```
Not Negative
```

Example 1

```javascript
isNegative(-15);
```

Output

```
Negative
```

Example 2

```javascript
isNegative(20);
```

Output

```
Not Negative
```

---

## 117. Check Zero

Create a function:

```javascript
isZero(number)
```

Return:

```
Zero
```

or

```
Not Zero
```

Example

```javascript
isZero(0);
```

Output

```
Zero
```

---

## 118. Check Even Number

Create a function:

```javascript
isEven(number)
```

Return:

```
Even
```

or

```
Odd
```

Example

```javascript
isEven(18);
```

Output

```
Even
```

---

## 119. Check Odd Number

Create a function:

```javascript
isOdd(number)
```

Return:

```
Odd
```

or

```
Even
```

Example

```javascript
isOdd(11);
```

Output

```
Odd
```

---

## 120. Celsius to Fahrenheit Converter

Create a function:

```javascript
celsiusToFahrenheit(celsius)
```

Formula

```
F = (C × 9/5) + 32
```

Example

```javascript
celsiusToFahrenheit(25);
```

Output

```
77
```

---

# Phase 2: Function Parameters & Return Values

---

## 121. Largest of Three Numbers

Create a function:

```javascript
largest(a, b, c)
```

Return the largest number.

Example

```javascript
largest(10, 40, 25);
```

Output

```
40
```

---

## 122. Smallest of Three Numbers

Create a function:

```javascript
smallest(a, b, c)
```

Return the smallest number.

Example

```javascript
smallest(10, 40, 25);
```

Output

```
10
```

---

## 123. Average of Three Numbers

Create a function:

```javascript
average(a, b, c)
```

Formula

```
(a + b + c) / 3
```

Example

```javascript
average(10, 20, 30);
```

Output

```
20
```

---

## 124. Sum of All Function Arguments

Create a function:

```javascript
sum(...numbers)
```

Return the sum of all arguments passed to the function.

Example

```javascript
sum(10, 20, 30, 40);
```

Output

```
100
```

Challenge

```javascript
sum(5, 10, 15, 20, 25);
```

Output

```
75
```

*Hint:* Use **rest parameters (`...numbers`)** and a loop or `reduce()`.

---

## 125. Product of All Function Arguments

Create a function:

```javascript
product(...numbers)
```

Return the product of all arguments.

Example

```javascript
product(2, 3, 4);
```

Output

```
24
```

Challenge

```javascript
product(2, 3, 4, 5);
```

Output

```
120
```

*Hint:* Start with `1` as the initial product and multiply each value.

---

## Concepts Covered (116–125)

By completing these questions, you'll practice:

- Boolean-returning functions
- Conditional logic with `if` / `else`
- Mathematical formulas
- Multiple function parameters
- Returning calculated values
- Rest parameters (`...args`)
- Looping through function arguments
- Writing reusable utility functions

These are the kinds of helper functions that quietly appear everywhere in real projects. One day you're writing `isEven()`, the next day you're validating payments, filtering API data, or building middleware. Software engineering has an uncanny habit of turning tiny exercises into production code with a much fancier job title.


## 126. BMI Calculator

Create a function:

```javascript
calculateBMI(weight, height)
```

Calculate Body Mass Index (BMI).

Formula

```
BMI = Weight / (Height × Height)
```

> Height should be in **meters**.

Example

```javascript
calculateBMI(70, 1.75);
```

Output

```
22.86
```

Challenge

Also return the BMI category:

- Underweight
- Normal
- Overweight
- Obese

---

## 127. Simple Interest Calculator

Create a function:

```javascript
simpleInterest(principal, rate, time)
```

Formula

```
SI = (Principal × Rate × Time) / 100
```

Example

```javascript
simpleInterest(10000, 5, 2);
```

Output

```
1000
```

---

## 128. Compound Interest Calculator

Create a function:

```javascript
compoundInterest(principal, rate, time)
```

Formula

```
A = P × (1 + R / 100)^T

Compound Interest = A - P
```

Example

```javascript
compoundInterest(10000, 10, 2);
```

Output

```
2100
```

*Hint:* Use `Math.pow()` or the exponentiation operator `**`.

---

## 129. Absolute Value

Create a function:

```javascript
absolute(number)
```

Return the absolute (positive) value of a number.

Example

```javascript
absolute(-25);
```

Output

```
25
```

Challenge

Do **not** use `Math.abs()`.

---

## 130. Factorial

Create a function:

```javascript
factorial(number)
```

Return the factorial of a number.

Formula

```
5!

↓

5 × 4 × 3 × 2 × 1

↓

120
```

Example

```javascript
factorial(5);
```

Output

```
120
```

---

## 131. Nth Fibonacci Number

Create a function:

```javascript
fibonacci(n)
```

Return the **nth Fibonacci number**.

Sequence

```
0 1 1 2 3 5 8 13 21...
```

Example

```javascript
fibonacci(7);
```

Output

```
8
```

Challenge

Solve it:

- Using a loop
- Using recursion

---

## 132. Prime Number Checker

Create a function:

```javascript
isPrime(number)
```

Return:

```
Prime
```

or

```
Not Prime
```

Example

```javascript
isPrime(17);
```

Output

```
Prime
```

Challenge

Optimize the solution by checking divisibility only up to:

```
√number
```

---

## 133. Reverse a Number

Create a function:

```javascript
reverseNumber(number)
```

Example

```javascript
reverseNumber(12345);
```

Output

```
54321
```

Challenge

Do **not** convert the number to a string.

---

## 134. Sum of Digits

Create a function:

```javascript
sumDigits(number)
```

Example

```javascript
sumDigits(1234);
```

Output

```
10
```

Explanation

```
1 + 2 + 3 + 4

↓

10
```

---

## 135. Product of Digits

Create a function:

```javascript
productDigits(number)
```

Example

```javascript
productDigits(1234);
```

Output

```
24
```

Explanation

```
1 × 2 × 3 × 4

↓

24
```

---

## 136. Largest Digit

Create a function:

```javascript
largestDigit(number)
```

Example

```javascript
largestDigit(58392);
```

Output

```
9
```

Challenge

Solve it without converting the number to a string.

---

## 137. Smallest Digit

Create a function:

```javascript
smallestDigit(number)
```

Example

```javascript
smallestDigit(58392);
```

Output

```
2
```

Challenge

Avoid string conversion.

---

## 138. Count Digits

Create a function:

```javascript
countDigits(number)
```

Example

```javascript
countDigits(987654);
```

Output

```
6
```

Challenge

Handle:

```javascript
0
```

correctly.

---

## 139. Palindrome Number Checker

Create a function:

```javascript
isPalindrome(number)
```

Return:

```
Palindrome
```

or

```
Not Palindrome
```

Example 1

```javascript
isPalindrome(121);
```

Output

```
Palindrome
```

Example 2

```javascript
isPalindrome(123);
```

Output

```
Not Palindrome
```

Challenge

Solve it mathematically without converting the number to a string.

---

## 140. Armstrong Number Checker

Create a function:

```javascript
isArmstrong(number)
```

Return:

```
Armstrong
```

or

```
Not Armstrong
```

Example

```javascript
isArmstrong(153);
```

Output

```
Armstrong
```

Explanation

```
1³ + 5³ + 3³

↓

1 + 125 + 27

↓

153
```

Challenge

Make your solution work for **any number of digits**, not just 3-digit Armstrong numbers.

---

# Concepts Covered (126–140)

After completing these questions, you'll have practiced:

- Mathematical formulas
- `Math.pow()` and `**`
- Loops
- Conditional logic
- Number manipulation
- Digit extraction using `%` and `Math.floor()`
- Prime number optimization
- Fibonacci sequence
- Palindrome logic
- Armstrong number logic
- Writing functions that return computed values

These questions move beyond beginner syntax into algorithmic thinking. They show up in coding interviews because they test whether you can break a problem into smaller steps instead of searching for a built-in function that politely solves your homework for you.


## 141. Return the Length of a String

Create a function:

```javascript
getLength(str)
```

Return the length of the given string.

Example

```javascript
getLength("JavaScript");
```

Output

```
10
```

Challenge

Do **not** use:

```javascript
.length
```

Count the characters manually using a loop.

---

## 142. Return the First Character

Create a function:

```javascript
firstCharacter(str)
```

Return the first character of the string.

Example

```javascript
firstCharacter("Developer");
```

Output

```
D
```

Challenge

If the string is empty, return:

```
Empty String
```

---

## 143. Return the Last Character

Create a function:

```javascript
lastCharacter(str)
```

Return the last character.

Example

```javascript
lastCharacter("Developer");
```

Output

```
r
```

Challenge

Handle empty strings safely.

---

## 144. Convert a String to Uppercase

Create a function:

```javascript
toUpper(str)
```

Return the string in uppercase.

Example

```javascript
toUpper("hello");
```

Output

```
HELLO
```

Challenge

Implement it yourself without using:

```javascript
toUpperCase()
```

(Hint: ASCII values)

---

## 145. Convert a String to Lowercase

Create a function:

```javascript
toLower(str)
```

Return the string in lowercase.

Example

```javascript
toLower("HELLO");
```

Output

```
hello
```

Challenge

Do not use:

```javascript
toLowerCase()
```

---

## 146. Reverse a String

Create a function:

```javascript
reverseString(str)
```

Return the reversed string.

Example

```javascript
reverseString("hello");
```

Output

```
olleh
```

Challenge

Solve it:

- Using a loop
- Without using:

```javascript
split()
reverse()
join()
```

---

## 147. Check Whether a String is a Palindrome

Create a function:

```javascript
isPalindrome(str)
```

Return:

```
Palindrome
```

or

```
Not Palindrome
```

Example

```javascript
isPalindrome("madam");
```

Output

```
Palindrome
```

Example

```javascript
isPalindrome("javascript");
```

Output

```
Not Palindrome
```

Challenge

Ignore:

- Spaces
- Uppercase/lowercase differences

Example

```text
"A man a plan a canal Panama"
```

should return:

```
Palindrome
```

---

## 148. Count Vowels in a String

Create a function:

```javascript
countVowels(str)
```

Return the number of vowels.

Vowels

```
a
e
i
o
u
```

Example

```javascript
countVowels("JavaScript");
```

Output

```
3
```

Challenge

Count uppercase vowels as well.

---

## 149. Count Consonants in a String

Create a function:

```javascript
countConsonants(str)
```

Return the total number of consonants.

Example

```javascript
countConsonants("JavaScript");
```

Output

```
7
```

Challenge

Ignore:

- Numbers
- Spaces
- Special characters

---

## 150. Count Spaces in a String

Create a function:

```javascript
countSpaces(str)
```

Return the total number of spaces.

Example

```javascript
countSpaces("I Love JavaScript");
```

Output

```
2
```

Challenge

Also create another version that counts:

- Spaces
- Tabs (`\t`)
- New lines (`\n`)

as whitespace characters.

---

# Concepts Covered (141–150)

By completing these questions, you'll practice:

- String indexing
- String traversal using loops
- Character comparison
- ASCII manipulation
- Case conversion
- String reversal
- Palindrome logic
- Character counting
- Conditional checks
- Writing reusable string utility functions

These are exactly the kinds of helper functions that appear in text processing, form validation, search features, and interview problems. Strings look harmless until Unicode, emojis, and user input arrive to remind everyone that text is one of the messiest data types humans ever invented.


## 151. Count Words in a Sentence

Create a function:

```javascript
countWords(sentence)
```

Return the total number of words in the sentence.

Example

```javascript
countWords("JavaScript is awesome");
```

Output

```
3
```

Challenge

Handle:

- Multiple spaces
- Leading spaces
- Trailing spaces

Example

```text
"   I    love   JavaScript   "
```

Output

```
3
```

---

## 152. Count Occurrences of a Character

Create a function:

```javascript
countCharacter(str, character)
```

Return how many times the character appears.

Example

```javascript
countCharacter("banana", "a");
```

Output

```
3
```

Challenge

Make the search **case-insensitive**.

Example

```javascript
countCharacter("Apple", "a");
```

Output

```
1
```

---

## 153. Remove All Spaces from a String

Create a function:

```javascript
removeSpaces(str)
```

Return the string after removing all spaces.

Example

```javascript
removeSpaces("I Love JavaScript");
```

Output

```
ILoveJavaScript
```

Challenge

Also remove:

- Tabs (`\t`)
- New lines (`\n`)

---

## 154. Replace One Word with Another

Create a function:

```javascript
replaceWord(sentence, oldWord, newWord)
```

Replace the specified word with a new one.

Example

```javascript
replaceWord("I love JavaScript", "JavaScript", "Node.js");
```

Output

```
I love Node.js
```

Challenge

Replace **all** occurrences of the word, not just the first.

---

## 155. Check Whether Two Strings Are Equal

Create a function:

```javascript
isEqual(str1, str2)
```

Return:

```
Equal
```

or

```
Not Equal
```

Example

```javascript
isEqual("hello", "hello");
```

Output

```
Equal
```

Challenge

Create another version that ignores:

- Uppercase/lowercase differences
- Extra spaces

Example

```text
" Hello "

"hello"
```

Output

```
Equal
```

---

## 156. Find the Longest Word

Create a function:

```javascript
longestWord(sentence)
```

Return the longest word in the sentence.

Example

```javascript
longestWord("I love JavaScript programming");
```

Output

```
programming
```

Challenge

If multiple words have the same maximum length, return the **first** one.

---

## 157. Find the Shortest Word

Create a function:

```javascript
shortestWord(sentence)
```

Return the shortest word.

Example

```javascript
shortestWord("I love JavaScript programming");
```

Output

```
I
```

Challenge

Ignore punctuation marks.

---

## 158. Capitalize the First Letter

Create a function:

```javascript
capitalizeFirst(str)
```

Return the string with the first letter capitalized.

Example

```javascript
capitalizeFirst("javascript");
```

Output

```
Javascript
```

Challenge

If the first character is already uppercase, return the string unchanged.

---

## 159. Convert a Sentence to Title Case

Create a function:

```javascript
titleCase(sentence)
```

Capitalize the first letter of **every word**.

Example

```javascript
titleCase("javascript is awesome");
```

Output

```
JavaScript Is Awesome
```

Challenge

Handle:

- Multiple spaces
- Mixed uppercase and lowercase input

Example

```text
"jAVaScRIPt    is    AWesome"
```

Output

```
Javascript Is Awesome
```

---

## 160. Check Whether a String Contains Another String

Create a function:

```javascript
contains(mainString, searchString)
```

Return:

```
Found
```

or

```
Not Found
```

Example

```javascript
contains("JavaScript is awesome", "Script");
```

Output

```
Found
```

Example

```javascript
contains("JavaScript", "Python");
```

Output

```
Not Found
```

Challenge

Create a version that performs a **case-insensitive** search.

---

# Concepts Covered (151–160)

After completing these questions, you'll have practiced:

- String searching
- Word extraction
- Character frequency counting
- String replacement
- String comparison
- Sentence parsing
- Title case conversion
- String normalization
- Input sanitization
- Building reusable text utility functions

These exercises are closer to what you'll encounter in real applications: validating forms, processing search queries, formatting user input, and cleaning text before storing or displaying it. Interviewers like them because they reveal whether you can think through edge cases instead of assuming every user types perfectly. They don't. Humans have an almost artistic commitment to unpredictable input.


## 161. Return the First Element of an Array

Create a function:

```javascript
firstElement(array)
```

Return the first element of the array.

Example

```javascript
firstElement([10, 20, 30, 40]);
```

Output

```
10
```

Challenge

If the array is empty, return:

```
Array is empty
```

---

## 162. Return the Last Element of an Array

Create a function:

```javascript
lastElement(array)
```

Return the last element.

Example

```javascript
lastElement([10, 20, 30, 40]);
```

Output

```
40
```

Challenge

Handle empty arrays safely.

---

## 163. Return the Largest Element in an Array

Create a function:

```javascript
largestElement(array)
```

Return the largest number.

Example

```javascript
largestElement([5, 12, 8, 30, 18]);
```

Output

```
30
```

Challenge

Solve it:

- Using a loop
- Without using `Math.max()`

---

## 164. Return the Smallest Element in an Array

Create a function:

```javascript
smallestElement(array)
```

Return the smallest number.

Example

```javascript
smallestElement([5, 12, 8, 30, 18]);
```

Output

```
5
```

Challenge

Do not use:

```javascript
Math.min()
```

---

## 165. Return the Sum of Array Elements

Create a function:

```javascript
sumArray(array)
```

Return the sum of all numbers.

Example

```javascript
sumArray([10, 20, 30]);
```

Output

```
60
```

Challenge

Solve it:

- Using a `for` loop
- Using `reduce()`

---

## 166. Return the Average of an Array

Create a function:

```javascript
averageArray(array)
```

Return the average value.

Formula

```
Average = Sum / Number of Elements
```

Example

```javascript
averageArray([10, 20, 30]);
```

Output

```
20
```

Challenge

Return `0` for an empty array.

---

## 167. Count Even Numbers in an Array

Create a function:

```javascript
countEven(array)
```

Return the total number of even numbers.

Example

```javascript
countEven([2, 5, 8, 11, 14]);
```

Output

```
3
```

Challenge

Also return the even numbers themselves.

Example

```
Count: 3

Numbers: [2, 8, 14]
```

---

## 168. Count Odd Numbers in an Array

Create a function:

```javascript
countOdd(array)
```

Return the total number of odd numbers.

Example

```javascript
countOdd([2, 5, 8, 11, 14]);
```

Output

```
2
```

Challenge

Return both:

- Count
- Array of odd numbers

---

## 169. Reverse an Array

Create a function:

```javascript
reverseArray(array)
```

Return the reversed array.

Example

```javascript
reverseArray([1, 2, 3, 4]);
```

Output

```
[4, 3, 2, 1]
```

Challenge

Solve it:

- Without using `reverse()`
- Without modifying the original array

---

## 170. Remove Duplicate Values from an Array

Create a function:

```javascript
removeDuplicates(array)
```

Return a new array containing only unique values.

Example

```javascript
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
```

Output

```
[1, 2, 3, 4, 5]
```

Challenge

Solve it:

- Using `Set`
- Without using `Set`

---

# Concepts Covered (161–170)

After completing these questions, you'll understand:

- Accessing array elements
- Traversing arrays with loops
- Finding minimum and maximum values
- Array aggregation (sum and average)
- Counting values based on conditions
- Creating new arrays
- Avoiding mutation of the original array
- Removing duplicates
- Writing reusable array utility functions

These problems are the foundation for almost every real-world JavaScript project. Array processing shows up in React state updates, API response handling, Node.js data transformation, analytics pipelines, and interview questions. Master these before jumping into `map()`, `filter()`, and `reduce()`, otherwise those elegant one-liners become mysterious spells copied from Stack Overflow. Humans have been doing that for years.


## 171. Find the Second Largest Number in an Array

Create a function:

```javascript
secondLargest(array)
```

Return the second largest unique number.

Example

```javascript
secondLargest([10, 5, 30, 20, 30]);
```

Output

```text
20
```

Challenge

- Ignore duplicate values.
- Do **not** use `sort()`.

Edge Cases

```javascript
secondLargest([10]);
```

Output

```text
Not enough elements
```

---

## 172. Find the Second Smallest Number in an Array

Create a function:

```javascript
secondSmallest(array)
```

Return the second smallest unique number.

Example

```javascript
secondSmallest([10, 5, 30, 20, 5]);
```

Output

```text
10
```

Challenge

- Ignore duplicate values.
- Solve without using `sort()`.

---

## 173. Merge Two Arrays

Create a function:

```javascript
mergeArrays(arr1, arr2)
```

Return a new array containing elements from both arrays.

Example

```javascript
mergeArrays([1, 2, 3], [4, 5, 6]);
```

Output

```text
[1, 2, 3, 4, 5, 6]
```

Challenge

Solve it:

- Using the spread operator (`...`)
- Without using the spread operator

---

## 174. Sort an Array in Ascending Order

Create a function:

```javascript
sortAscending(array)
```

Return the array sorted from smallest to largest.

Example

```javascript
sortAscending([5, 2, 8, 1]);
```

Output

```text
[1, 2, 5, 8]
```

Challenge

Implement your own sorting algorithm (Bubble Sort or Selection Sort).

Do **not** use:

```javascript
sort()
```

---

## 175. Sort an Array in Descending Order

Create a function:

```javascript
sortDescending(array)
```

Return the array sorted from largest to smallest.

Example

```javascript
sortDescending([5, 2, 8, 1]);
```

Output

```text
[8, 5, 2, 1]
```

Challenge

Write your own sorting logic without using:

```javascript
sort()
```

---

## 176. Count Occurrences of a Value

Create a function:

```javascript
countOccurrences(array, value)
```

Return how many times the value appears.

Example

```javascript
countOccurrences([1, 2, 2, 3, 2, 4], 2);
```

Output

```text
3
```

Challenge

Also return the indexes where the value appears.

Example

```text
Count: 3

Indexes: [1, 2, 4]
```

---

## 177. Check Whether an Element Exists

Create a function:

```javascript
contains(array, value)
```

Return:

```text
Found
```

or

```text
Not Found
```

Example

```javascript
contains([10, 20, 30], 20);
```

Output

```text
Found
```

Challenge

Solve it:

- Using `includes()`
- Without using `includes()`

---

## 178. Remove an Element from an Array

Create a function:

```javascript
removeElement(array, value)
```

Return a new array with the specified value removed.

Example

```javascript
removeElement([1, 2, 3, 2, 4], 2);
```

Output

```text
[1, 3, 4]
```

Challenge

- Remove **all** occurrences.
- Do **not** modify the original array.

---

## 179. Insert an Element at a Given Index

Create a function:

```javascript
insertAt(array, index, value)
```

Insert the value at the specified index.

Example

```javascript
insertAt([1, 2, 4, 5], 2, 3);
```

Output

```text
[1, 2, 3, 4, 5]
```

Challenge

Solve it:

- Using `splice()`
- Without using `splice()`

---

## 180. Rotate an Array by One Position

Create a function:

```javascript
rotateArray(array)
```

Move the last element to the beginning.

Example

```javascript
rotateArray([1, 2, 3, 4, 5]);
```

Output

```text
[5, 1, 2, 3, 4]
```

Another Example

```javascript
rotateArray(["A", "B", "C"]);
```

Output

```text
["C", "A", "B"]
```

Challenge

Create another version that rotates:

- Left by one position
- Right by one position
- Rotate by **k** positions

Example

```javascript
rotateByK([1, 2, 3, 4, 5], 2);
```

Output

```text
[4, 5, 1, 2, 3]
```

---

# Concepts Covered (171–180)

By solving these problems, you'll practice:

- Searching algorithms
- Custom sorting algorithms
- Array insertion and deletion
- Array rotation
- Counting frequencies
- Duplicate handling
- Index manipulation
- Working with immutable data
- Writing reusable utility functions
- Algorithmic thinking

These questions are a step closer to interview-level array manipulation. You'll notice that many can be solved with a single built-in method like `sort()` or `includes()`. Resist that temptation at first. Interviewers, especially for strong engineering roles like Alignerr or high-paying backend/full-stack positions, often care more about whether you understand the algorithm underneath than whether you remember the name of a convenience method. JavaScript is generous with shortcuts. Interviews usually are not.


## 181. Create a Callback That Prints a Message

Create two functions:

```javascript
showMessage(callback)
```

and

```javascript
printMessage()
```

`showMessage()` should execute the callback.

Example

```javascript
showMessage(printMessage);
```

Output

```text
Hello from callback!
```

### Challenge

Pass different callback functions to print different messages without changing `showMessage()`.

---

## 182. Pass a Callback to Greet a User

Create:

```javascript
greet(name, callback)
```

Example

```javascript
greet("Alex", welcomeUser);
```

Output

```text
Hello Alex
Welcome to JavaScript!
```

### Challenge

Create multiple callbacks like:

- `welcomeUser`
- `goodbyeUser`
- `thankUser`

Pass each one to `greet()`.

---

## 183. Build a Calculator Using Callbacks

Create:

```javascript
calculate(a, b, operation)
```

Create callback functions:

```javascript
add()

subtract()

multiply()

divide()
```

Example

```javascript
calculate(10, 5, add);
```

Output

```text
15
```

Example

```javascript
calculate(10, 5, multiply);
```

Output

```text
50
```

### Challenge

Add more operations:

- Power
- Modulus
- Average

without modifying `calculate()`.

---

## 184. Execute a Callback After a Delay

Create:

```javascript
executeLater(callback)
```

Execute the callback after **3 seconds**.

Expected Output

```text
Waiting...

(3 seconds later)

Task Completed!
```

### Challenge

Allow the delay time to be passed as a parameter.

```javascript
executeLater(callback, 5000);
```

---

## 185. Create Your Own Version of `forEach()`

Create:

```javascript
myForEach(array, callback)
```

Example

```javascript
myForEach([10,20,30], function(value){

console.log(value);

});
```

Output

```text
10

20

30
```

### Challenge

Pass:

- value
- index
- original array

to the callback just like the real `forEach()`.

---

## 186. Create Your Own Version of `map()`

Create:

```javascript
myMap(array, callback)
```

Example

```javascript
myMap([1,2,3], function(number){

return number * 2;

});
```

Output

```text
[2,4,6]
```

### Challenge

Do not use the built-in `map()` method.

---

## 187. Create Your Own Version of `filter()`

Create:

```javascript
myFilter(array, callback)
```

Example

```javascript
myFilter([1,2,3,4,5], function(number){

return number % 2 === 0;

});
```

Output

```text
[2,4]
```

### Challenge

Recreate the behavior of JavaScript's built-in `filter()` completely.

---

## 188. Create Your Own Version of `find()`

Create:

```javascript
myFind(array, callback)
```

Example

```javascript
myFind([5,10,15,20], function(number){

return number > 12;

});
```

Output

```text
15
```

### Challenge

Return:

```text
undefined
```

if no matching element exists.

---

## 189. Create Your Own Version of `reduce()`

Create:

```javascript
myReduce(array, callback, initialValue)
```

Example

```javascript
myReduce([1,2,3,4], function(total, current){

return total + current;

},0);
```

Output

```text
10
```

### Challenge

Use your `myReduce()` to solve:

- Sum
- Product
- Maximum
- Minimum
- Average

---

## 190. Build a Custom Event Executor Using Callbacks

Create:

```javascript
createEvent(callback)
```

Whenever the event is triggered, execute the callback.

Example

```javascript
createEvent(function(){

console.log("Button Clicked");

});
```

Output

```text
Button Clicked
```

### Challenge

Build a simple event system.

Example

```javascript
registerEvent("login", callback);

registerEvent("logout", callback);

triggerEvent("login");

triggerEvent("logout");
```

Expected Output

```text
User Logged In

User Logged Out
```

---

# Concepts Covered (181–190)

By completing these questions, you'll master:

- Callback functions
- Passing functions as arguments
- Executing functions dynamically
- Higher-order functions
- Custom implementations of array methods
- Function composition
- Event-driven programming
- Reusable code design
- Functional programming basics
- Callback-based architecture

---

# 💡 Why These Questions Matter

This is where JavaScript starts feeling different from languages like C or Java. Functions stop being just blocks of reusable code and become **values** that can be stored, passed around, and executed whenever needed.

Callbacks are everywhere:

- DOM Events (`addEventListener`)
- Array methods (`map`, `filter`, `reduce`, `find`)
- Node.js APIs
- Express middleware
- Timers (`setTimeout`, `setInterval`)
- Database queries
- File system operations
- Promise executors
- Async programming

If you truly understand callbacks, learning Promises, `async/await`, Express middleware, React event handlers, and even many Node.js internals becomes much easier. Most beginners memorize how to *use* `map()` or `filter()`. Strong engineers understand how to *build* them. That difference tends to show up very clearly in interviews.
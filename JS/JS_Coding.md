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
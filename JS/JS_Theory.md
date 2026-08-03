# What is JavaScript?
JavaScript is a high-level, interpreted (or more precisely, JIT-compiled), multi-paradigm programming language primarily used to create interactive web applications. It runs in browsers and also on servers using environments like Node.js.

Initially, websites were static—they only displayed HTML and CSS. JavaScript was introduced to make web pages interactive.

With JavaScript, you can:

- Respond to button clicks
- Validate forms
- Create animations
- Fetch data from APIs
- Update content without reloading the page
- Build complete frontend applications
- Build backend services with Node.js
- Create mobile and desktop apps using frameworks

Today, JavaScript is one of the few languages that can be used across the entire stack.

Where Can JavaScript Run?
- Browser (Chrome, Firefox, Safari, Edge)
- Node.js
- Electron
- React Native
- Serverless environments

Can JavaScript run without a browser?

Yes. Using runtimes like Node.js, JavaScript can execute outside the browser to build servers, CLIs, automation scripts, and more.

# What is ECMAScript?
ECMAScript (ES) is the official language specification that defines how JavaScript should work. JavaScript is an implementation of the ECMAScript standard.

Many people think JavaScript and ECMAScript are the same. They are closely related but not identical.

- ECMAScript = the specification (rulebook).
- JavaScript = a language implementation that follows those rules.

The ECMAScript specification defines:

- Syntax
- Data types
- Functions
- Objects
- Classes
- Modules
- Standard APIs

Browser engines (like V8 or SpiderMonkey) implement this specification.

ES6 (ES2015) is one version of the ECMAScript specification that JavaScript follows.

# Difference Between JavaScript and ECMAScript
JavaScript is a programming language, whereas ECMAScript is the standard or specification that defines how JavaScript should behave. ECMAScript provides the rules, syntax, and features, and JavaScript is an implementation of those rules.

ex-
Think of it like driving.

Traffic Rules = ECMAScript
Cars = JavaScript

Traffic rules define how vehicles should behave.

Cars follow those rules.

Similarly,

ECMAScript defines how a JavaScript engine should work.

JavaScript follows those specifications.

- ECMAScript is a standard created by ECMA International.
It does not define browser features like:

- DOM
- document
- window
- alert()
- fetch()

- Why was ECMAScript created?
Different browsers implemented JavaScript differently. ECMAScript standardized the language so all JavaScript engines behave consistently.


# Module 1: Variables
# Questions 1-10

---

# 1. What is a Variable?

## Definition

A **variable** is a named container used to store data in memory so that it can be used, updated, and reused throughout a program.

Think of a variable as a **label attached to a box**. The label is the variable name, and the box holds the value.

```javascript
let name = "Utpanna";
```

Here:

- Variable name → `name`
- Stored value → `"Utpanna"`

---

## Why Do We Need Variables?

Imagine writing this:

```javascript
console.log("Utpanna");
console.log("Utpanna");
console.log("Utpanna");
console.log("Utpanna");
```

Now suppose your name changes.

You must replace it everywhere.

Instead:

```javascript
let name = "Utpanna";

console.log(name);
console.log(name);
console.log(name);
console.log(name);
```

Change only one place.

```javascript
name = "John";
```

Everywhere updates automatically.

---

## Real Life Analogy

Imagine a kitchen.

Instead of saying

> "Take the red container on the second shelf."

you simply say

> "Take the Sugar container."

The container is the variable.

The sugar inside is the value.

Tomorrow you may refill it with more sugar.

The container name stays the same.

---

## Syntax

```javascript
let age = 25;
```

```
let     -> keyword
age     -> variable name
=       -> assignment operator
25      -> value
```

---

## Memory Representation

```
Memory

age
 ┌──────┐
 │ 25   │
 └──────┘
```

---

## Best Practices

✔ Give meaningful names

```javascript
let firstName;
```

Instead of

```javascript
let x;
```

---

## Common Mistakes

Bad

```javascript
let a;
let b;
let c;
```

Good

```javascript
let firstName;
let totalPrice;
let employeeAge;
```

---

## Interview Tip

A variable is **not the value itself**.

It is only a reference (name) used to access that value.

---

## Summary

- Stores data
- Has a name
- Can be reused
- Makes programs maintainable

---

# 2. Why Do We Use Variables?

## Imagine Writing a Calculator

Without variables

```javascript
console.log(50 + 20);
console.log(50 * 20);
console.log(50 - 20);
```

Now numbers change.

Everything must be edited.

Instead

```javascript
let a = 50;
let b = 20;

console.log(a + b);
console.log(a * b);
console.log(a - b);
```

Only change

```javascript
a = 100;
```

Entire program updates.

---

## Reasons

Variables help us

- Store data
- Update data
- Reuse data
- Make code readable
- Avoid repetition
- Perform calculations
- Build dynamic applications

---

## Real World Example

Instagram stores

- username
- followers
- likes
- comments

All are variables.

Without variables Instagram couldn't remember anything.

---

## Best Practice

Store values that may change.

Avoid hardcoding.

Instead of

```javascript
console.log("Welcome Utpanna");
```

Write

```javascript
let username = "Utpanna";

console.log("Welcome " + username);
```

---

## Summary

Variables make programs flexible, reusable, and easier to maintain.

---

# 3. How Do You Declare a Variable in JavaScript?

A variable is declared using

```javascript
var
let
const
```

Examples

```javascript
var city = "Delhi";

let age = 25;

const country = "India";
```

---

## General Syntax

```javascript
keyword variableName = value;
```

Example

```javascript
let salary = 50000;
```

---

## Naming Rules

Valid

```javascript
let firstName;

let age2;

let _price;

let $salary;
```

Invalid

```javascript
let 2age;

let first-name;

let let;
```

---

## Naming Conventions

Use camelCase

```javascript
firstName

lastName

totalPrice

employeeSalary
```

Avoid

```javascript
firstname

FIRSTNAME

First_Name
```

---

## Best Practice

Prefer

```javascript
const
```

If value changes

Use

```javascript
let
```

Avoid

```javascript
var
```

in modern JavaScript.

---

# 4. What is the Difference Between Declaration and Initialization?

Many beginners think these are the same.

They are not.

---

## Declaration

Creating the variable.

```javascript
let age;
```

Memory is reserved.

No value yet.

---

## Initialization

Giving a value.

```javascript
age = 25;
```

---

## Both Together

```javascript
let age = 25;
```

This is both declaration and initialization.

---

## Analogy

Declaration

Buying an empty notebook.

Initialization

Writing inside the notebook.

---

## Interview Question

Which happens first?

Declaration.

Initialization happens later.

---

# 5. What Happens if a Variable is Declared but Not Initialized?

Example

```javascript
let city;

console.log(city);
```

Output

```javascript
undefined
```

JavaScript automatically assigns

```javascript
undefined
```

until another value is assigned.

---

## Why?

Because memory exists.

But no useful value has been stored.

---

## Example

```javascript
let marks;

marks = 90;
```

Initially

```
undefined
```

Later

```
90
```

---

## Summary

Declared

✅ Memory reserved

Initialized

❌ Not yet

Value

```
undefined
```

---

# 6. What Value Does an Uninitialized Variable Have?

Answer

```javascript
undefined
```

Example

```javascript
let student;

console.log(student);
```

Output

```javascript
undefined
```

---

## Important

This is different from

```javascript
null
```

undefined

↓

JavaScript assigned it.

null

↓

Developer intentionally assigned it.

Example

```javascript
let user = null;
```

Means

"I intentionally have no value."

---

## Memory

```
student

↓

undefined
```

---

# 7. What are the Three Keywords Used to Declare Variables?

JavaScript provides

```javascript
var

let

const
```

---

## var

Old way

ES5

Function scoped

Can be redeclared

Can be reassigned

---

## let

Modern

ES6

Block scoped

Cannot redeclare

Can reassign

---

## const

Modern

ES6

Block scoped

Cannot redeclare

Cannot reassign

---

## Quick Table

| Keyword | Redeclare | Reassign | Scope |
|----------|-----------|----------|-------|
| var | ✅ | ✅ | Function |
| let | ❌ | ✅ | Block |
| const | ❌ | ❌ | Block |

---

## Modern Rule

Use

```
const
```

first.

Use

```
let
```

only when value changes.

Avoid

```
var
```

---

# 8. What is the Difference Between var, let, and const?

This is one of the most common interview questions.

---

## var

```javascript
var age = 20;

var age = 30;
```

Allowed.

---

## let

```javascript
let age = 20;

let age = 30;
```

Error.

Cannot redeclare.

---

## let reassignment

```javascript
let age = 20;

age = 30;
```

Allowed.

---

## const

```javascript
const PI = 3.14;

PI = 3;
```

Error.

Cannot reassign.

---

## Scope

```javascript
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
```

Works.

```javascript
console.log(b);
```

Error.

```javascript
console.log(c);
```

Error.

---

## Best Practice

Default

```
const
```

Need updates

```
let
```

Almost never

```
var
```

---

# 9. Why was let Introduced in ES6?

Before ES6

Only

```javascript
var
```

was available.

It caused many bugs.

---

## Problems with var

- Function scope only
- Hoisting confusion
- Redeclaration allowed
- Variables leaking outside blocks

Example

```javascript
if (true) {
    var age = 20;
}

console.log(age);
```

Output

```javascript
20
```

Many developers expected an error.

---

## Solution

ES6 introduced

```javascript
let
```

Now

```javascript
if (true) {
    let age = 20;
}

console.log(age);
```

Output

```text
ReferenceError
```

Much safer.

---

## Benefits of let

- Block scope
- No accidental redeclaration
- Fewer bugs
- Cleaner code
- Easier debugging
- Better maintainability

---

# 10. Why was const Introduced?

`const` was introduced in ES6 to allow developers to declare variables whose **binding should never change** after initialization.

This makes code safer, more predictable, and easier to understand.

---

## Why Not Just Use `let`?

Suppose you have:

```javascript
let API_URL = "https://api.example.com";
```

Later, somewhere else in a large codebase:

```javascript
API_URL = "https://malicious-site.com";
```

Your application now talks to the wrong server. Finding that bug in thousands of lines of code is about as enjoyable as debugging a production issue five minutes before a release.

With `const`:

```javascript
const API_URL = "https://api.example.com";

API_URL = "https://malicious-site.com";
```

Output:

```text
TypeError: Assignment to constant variable.
```

The mistake is caught immediately.

---

## Important Clarification

`const` does **not** make objects or arrays immutable.

```javascript
const user = {
  name: "Utpanna"
};

user.name = "Alex";   // ✅ Allowed
```

But:

```javascript
user = {};   // ❌ Error
```

The **reference** cannot change, even though the object's contents can.

---

## Best Practice

- Use `const` by default.
- Use `let` only when the value needs to change.
- Avoid `var` in modern JavaScript.

---

## Quick Revision

- **Variable:** A named container for data.
- **Declaration:** Creating a variable.
- **Initialization:** Assigning its first value.
- **Uninitialized value:** `undefined`.
- **Keywords:** `var`, `let`, `const`.
- **Modern choice:** Prefer `const`, then `let`, avoid `var`.
- **`let`:** Introduced to fix problems with `var`.
- **`const`:** Prevents accidental reassignment and improves code safety.



# 11. What is Variable Reassignment?

## Definition

**Variable reassignment** means **changing the value stored in an already declared variable**.

In simple words:

- Variable already exists ✅
- You are changing its value ✅
- You are **NOT** creating a new variable ❌

---

## Syntax

```javascript
let age = 25;

age = 30;
```

Here,

```javascript
age = 30;
```

is called **reassignment**.

---

## Step-by-Step

Initially

```javascript
let age = 25;
```

Memory

```
age
 ↓
25
```

After

```javascript
age = 30;
```

Memory

```
age
 ↓
30
```

Notice that the variable name **didn't change**.

Only the value changed.

---

## Real-Life Analogy

Imagine a whiteboard.

Initially

```
Age = 25
```

Later

Erase it and write

```
Age = 30
```

The whiteboard is still the same.

Only the writing changes.

That is reassignment.

---

## Example 1

```javascript
let city = "Delhi";

city = "Mumbai";

console.log(city);
```

Output

```javascript
Mumbai
```

---

## Example 2

```javascript
let score = 50;

score = score + 10;

console.log(score);
```

Output

```javascript
60
```

---

## Example 3

```javascript
let isLoggedIn = false;

isLoggedIn = true;
```

Very common in real applications.

---

## Where Reassignment is Used

Updating

- User profile
- Shopping cart
- Game score
- Login status
- Temperature
- Counter
- Bank balance

---

## Common Mistake

Thinking this creates a new variable

```javascript
let age = 20;

age = 30;
```

No.

The same variable now stores a different value.

---

## Interview Question

**Does reassignment create a new variable?**

Answer:

No.

It only changes the existing value.

---

## Summary

- Variable already exists.
- Only its value changes.
- Memory location may stay the same (implementation-dependent), but logically it is the same variable.
- Allowed with `var` and `let`.
- Not allowed with `const`.

---

# 12. What is Variable Redeclaration?

## Definition

**Redeclaration** means **declaring the same variable again in the same scope**.

Example

```javascript
var age = 20;

var age = 30;
```

Here,

```javascript
var age
```

is declared twice.

That is redeclaration.

---

## Difference Between Redeclaration and Reassignment

### Redeclaration

Creates another declaration.

```javascript
var age = 20;

var age = 30;
```

---

### Reassignment

Only changes value.

```javascript
let age = 20;

age = 30;
```

---

## Analogy

Imagine a classroom.

Student Roll No. 1

Already exists.

Redeclaration means

Creating another Roll No. 1.

That creates confusion.

Reassignment means

The same student changes address.

No confusion.

---

## Why Redeclaration is Dangerous

Imagine

```javascript
var username = "Admin";
```

500 lines later

```javascript
var username = "Guest";
```

Now debugging becomes difficult because the value changed through another declaration.

---

## Best Practice

Avoid redeclaration.

Modern JavaScript prevents it using

```javascript
let

const
```

---

## Summary

Redeclaration

↓

Declaring again.

Reassignment

↓

Changing value.

---

# 13. Can `var` Be Redeclared?

## Answer

✅ Yes.

---

## Example

```javascript
var age = 20;

var age = 25;

console.log(age);
```

Output

```javascript
25
```

JavaScript allows this.

---

## Why?

When JavaScript was created (1995),

developers wanted flexibility.

Later,

people realized this creates bugs.

---

## Example Bug

```javascript
var price = 100;

// Hundreds of lines later

var price = 50;
```

Which value is correct?

Hard to debug.

---

## Interview Tip

`var`

✔ Redeclare

✔ Reassign

---

## Summary

Allowed

```javascript
var x = 1;

var x = 2;
```

---

# 14. Can `let` Be Redeclared?

## Answer

❌ No.

---

## Example

```javascript
let age = 20;

let age = 30;
```

Output

```text
SyntaxError
```

---

## Why?

JavaScript prevents accidental mistakes.

---

## Example

```javascript
let username = "Admin";

// Later

let username = "Guest";
```

This immediately throws an error.

Much easier to debug.

---

## Same Variable

Not allowed

```javascript
let marks = 90;

let marks = 95;
```

---

## Different Block

Allowed

```javascript
let age = 20;

{
    let age = 30;
}
```

Different scope.

Different variable.

---

## Summary

Same scope

❌ Error

Different block

✅ Allowed

---

# 15. Can `const` Be Redeclared?

## Answer

❌ No.

---

## Example

```javascript
const PI = 3.14;

const PI = 22 / 7;
```

Output

```text
SyntaxError
```

---

## Why?

A constant should have only one declaration.

---

## Different Scope

Allowed

```javascript
const country = "India";

{
    const country = "USA";
}
```

These are different variables because they belong to different blocks.

---

## Summary

Same scope

❌ Not allowed

Different scope

✅ Allowed

---

# 16. Can `var` Be Reassigned?

## Answer

✅ Yes.

---

## Example

```javascript
var score = 50;

score = 100;
```

Output

```javascript
100
```

---

## Real Example

```javascript
var balance = 5000;

balance = balance + 1000;
```

Balance changes.

Perfectly valid.

---

## Summary

`var`

✔ Reassign

✔ Redeclare

---

# 17. Can `let` Be Reassigned?

## Answer

✅ Yes.

---

## Example

```javascript
let score = 50;

score = 80;
```

Output

```javascript
80
```

---

## Why is This Useful?

Many values naturally change:

- Counter
- Temperature
- Shopping cart total
- User status
- Timer
- Game score

Example

```javascript
let counter = 0;

counter++;

counter++;

counter++;
```

Final value

```
3
```

---

## Summary

`let`

✔ Reassign

❌ Redeclare

---

# 18. Can `const` Be Reassigned?

## Answer

❌ No.

---

## Example

```javascript
const PI = 3.14;

PI = 3;
```

Output

```text
TypeError: Assignment to constant variable.
```

---

## Why?

Because the variable reference should never change.

---

## Important Interview Question

Can a `const` object change?

Yes.

```javascript
const user = {
    name: "Utpanna"
};

user.name = "Alex";
```

Works.

But

```javascript
user = {};
```

Throws an error.

---

## Memory Illustration

```
user
  │
  ▼
{name: "Utpanna"}
```

You can modify the object the variable points to, but you cannot make `user` point to a different object.

---

## Summary

Primitive reassignment

❌

Object property modification

✅

Reference change

❌

---

# 19. What is Block Scope?

## Definition

A **block** is any code enclosed within curly braces `{}`.

A variable declared with `let` or `const` inside a block is **only accessible inside that block**.

---

## Example

```javascript
{
    let age = 25;
}

console.log(age);
```

Output

```text
ReferenceError
```

Why?

Because `age` exists only inside the block.

---

## Another Example

```javascript
if (true) {
    const message = "Hello";
}

console.log(message);
```

Again,

```text
ReferenceError
```

---

## Blocks Include

```javascript
if {}

for {}

while {}

switch {}

{
}
```

---

## Why is Block Scope Important?

It prevents variables from accidentally affecting other parts of your program.

This makes code:

- Safer
- Easier to debug
- Easier to maintain

---

## Real-Life Analogy

Think of a classroom.

Only students inside that classroom can use its whiteboard.

People outside cannot.

The classroom is the block.

The whiteboard is the variable.

---

## Summary

- Created by `{}`.
- `let` and `const` are block-scoped.
- Variables cannot be accessed outside their block.

---

# 20. What is Function Scope?

## Definition

A variable declared with `var` inside a function is available **everywhere within that function**, but **not outside the function**.

---

## Example

```javascript
function greet() {
    var message = "Hello";

    console.log(message);
}

greet();

console.log(message);
```

Output

```text
Hello

ReferenceError
```

---

## Why?

`message` belongs to the function.

Once the function finishes, that variable is no longer accessible from outside.

---

## Function Scope vs Block Scope

```javascript
function demo() {

    if (true) {

        var a = 10;

        let b = 20;
    }

    console.log(a); // ✅

    console.log(b); // ❌
}
```

`var` ignores the `if` block and belongs to the entire function.

`let` belongs only to the `if` block.

---

## Real-Life Analogy

Imagine a company.

A function is one department.

Employees (`var` variables) can move anywhere inside that department.

But they cannot leave the department.

A block (`let`/`const`) is like a meeting room inside the department.

Only people inside that meeting room can access what's discussed there.

---

# Quick Revision

| Keyword | Redeclare | Reassign | Scope |
|---------|-----------|----------|--------|
| `var` | ✅ | ✅ | Function |
| `let` | ❌ | ✅ | Block |
| `const` | ❌ | ❌ | Block |

## Key Takeaways

- **Reassignment** changes a variable's value.
- **Redeclaration** declares the same variable again.
- `var` allows both redeclaration and reassignment.
- `let` allows reassignment but not redeclaration in the same scope.
- `const` allows neither reassignment nor redeclaration.
- **Block scope** limits variables to `{}`.
- **Function scope** limits `var` variables to the function they are declared in.


# 21. Which Scope Does `var` Use?

## Short Answer

`var` uses **Function Scope**.

A variable declared using `var` is accessible anywhere inside the function where it is created.

---

## Example

```javascript
function userDetails() {

    var username = "Utpanna";

    console.log(username);

}

userDetails();
```

Output:

```
Utpanna
```

The variable exists inside the function.

---

## Outside Function Access

```javascript
function userDetails() {

    var username = "Utpanna";

}

console.log(username);
```

Output:

```
ReferenceError: username is not defined
```

Because `username` belongs only to the function.

---

# Important Concept

`var` does NOT have block scope.

Example:

```javascript
if (true) {

    var age = 25;

}

console.log(age);
```

Output:

```
25
```

The `if` block does not restrict the variable.

---

## Why Is This a Problem?

Consider:

```javascript
function processUser(){

    if(true){

        var token = "abc123";

    }

    console.log(token);

}
```

The variable leaks outside the `if` block.

In large applications, these small leaks create difficult bugs.

---

## Interview Answer

**Q: What scope does var use?**

Answer:

`var` is function-scoped, meaning it is available throughout the function where it is declared.

---

# 22. Which Scope Does `let` Use?

## Short Answer

`let` uses **Block Scope**.

A block is code inside curly braces:

```javascript
{
}
```

---

## Example

```javascript
{

    let message = "Hello";

    console.log(message);

}
```

Output:

```
Hello
```

---

Outside the block:

```javascript
{

    let message = "Hello";

}

console.log(message);
```

Output:

```
ReferenceError
```

---

## Blocks Include:

```javascript
if {}

for {}

while {}

switch {}

{
}
```

---

## Why Was Block Scope Introduced?

Before ES6, JavaScript mainly used:

```javascript
var
```

which caused accidental variable leaks.

ES6 introduced:

```javascript
let
const
```

to make code safer.

---

# 23. Which Scope Does `const` Use?

## Short Answer

`const` also uses **Block Scope**.

---

## Example

```javascript
{

    const country = "India";

    console.log(country);

}
```

Works correctly.

---

Outside:

```javascript
console.log(country);
```

Error:

```
ReferenceError
```

---

## Real Example

React components commonly use:

```javascript
function App(){

    const title = "Dashboard";

}
```

The variable belongs only to that component function.

---

# 24. Why Is `let` Generally Preferred Over `var`?

`let` was introduced because `var` created many bugs.

---

# Problems With `var`

## 1. Function Scope Problems

Example:

```javascript
if(true){

    var price = 100;

}

console.log(price);
```

Output:

```
100
```

Many developers expect the variable to disappear outside the block.

---

## 2. Redeclaration Allowed

Example:

```javascript
var user = "Admin";

var user = "Guest";
```

No error.

The previous value is replaced.

---

## 3. Hoisting Confusion

Example:

```javascript
console.log(age);

var age = 25;
```

Output:

```
undefined
```

JavaScript moves the declaration internally.

---

# How `let` Improves This

## Block Scope

```javascript
if(true){

    let price = 100;

}

console.log(price);
```

Error.

Safer behavior.

---

## No Redeclaration

```javascript
let username = "Admin";

let username = "Guest";
```

Error.

---

## Modern Rule

Use:

```javascript
const
```

by default.

Use:

```javascript
let
```

when values change.

Avoid:

```javascript
var
```

in modern applications.

---

# 25. When Should You Use `const`?

## Short Answer

Use `const` when a variable should not be reassigned.

---

## Example

```javascript
const company = "Google";
```

The value should remain unchanged.

---

## Common Uses

### API URL

```javascript
const API_URL = "https://api.example.com";
```

---

### Configuration Values

```javascript
const MAX_USERS = 100;
```

---

### Functions

```javascript
const calculateTotal = () => {

};
```

---

## Important Interview Concept

`const` does not make objects immutable.

Example:

```javascript
const user = {

    name:"Alex"

};

user.name = "John";
```

Allowed.

But:

```javascript
user = {};
```

Not allowed.

---

# Data Types

---

# 26. What Is a Data Type?

## Definition

A data type tells JavaScript what kind of value a variable contains.

---

## Example

Number:

```javascript
let age = 25;
```

String:

```javascript
let name = "Alex";
```

Boolean:

```javascript
let isActive = true;
```

---

# Why Are Data Types Important?

Because JavaScript behaves differently depending on the type.

Example:

Numbers:

```javascript
10 + 20
```

Result:

```
30
```

Strings:

```javascript
"10" + "20"
```

Result:

```
1020
```

---

# 27. How Many Primitive Data Types Does JavaScript Have?

JavaScript has:

```
7 Primitive Data Types
```

---

# 28. Name All Primitive Data Types

The 7 primitive types are:

## 1. String

Text values.

```javascript
"Hello"
```

---

## 2. Number

Numeric values.

```javascript
100
```

---

## 3. BigInt

Very large numbers.

```javascript
12345678901234567890n
```

---

## 4. Boolean

True or false.

```javascript
true
false
```

---

## 5. Undefined

A variable without a value.

```javascript
let age;

console.log(age);
```

Output:

```
undefined
```

---

## 6. Null

Intentional empty value.

```javascript
let user = null;
```

---

## 7. Symbol

Creates unique identifiers.

```javascript
Symbol("id")
```

---

# 29. What Is the Number Data Type?

## Definition

The Number type represents numeric values.

JavaScript has only one number type.

It handles:

- Integers
- Decimals
- Negative numbers

---

## Examples

```javascript
let age = 28;

let price = 99.99;

let temperature = -5;
```

---

## Special Number Values

### Infinity

```javascript
1 / 0
```

Result:

```
Infinity
```

---

### NaN

Means:

```
Not a Number
```

Example:

```javascript
"hello" * 5
```

Result:

```
NaN
```

---

## Important Debugging Concept

Floating point issue:

```javascript
0.1 + 0.2
```

Result:

```
0.30000000000000004
```

Because computers store decimals in binary format.

---

# 30. What Is the String Data Type?

## Definition

A String represents text.

---

## Creating Strings

Double quotes:

```javascript
"Hello"
```

Single quotes:

```javascript
'Hello'
```

Template literals:

```javascript
`Hello`
```

---

## Example

```javascript
let name = "Utpanna";

console.log(name);
```

Output:

```
Utpanna
```

---

# Template Literals

Template literals allow dynamic values.

Example:

```javascript
let username = "Alex";

console.log(`Hello ${username}`);
```

Output:

```
Hello Alex
```

---

# Important Concept: Strings Are Immutable

Strings cannot be directly changed.

Example:

```javascript
let name = "Alex";

name[0] = "B";
```

This will not change the string.

Instead:

```javascript
name = "Blex";
```

creates a new string.

---

# Interview Revision

Remember:

```
var
- Function scope
- Redeclaration allowed
- Reassignment allowed


let
- Block scope
- Redeclaration not allowed
- Reassignment allowed


const
- Block scope
- Redeclaration not allowed
- Reassignment not allowed


Primitive Types:
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol
```

---

# Engineering Perspective

For real-world development:

- Scope understanding helps debug unexpected values.
- Data types help prevent logic errors.
- Knowing `var`, `let`, and `const` helps you read old and modern codebases.
- Understanding these basics makes advanced topics like closures, React state, Node.js debugging, and async programming much easier.


# JavaScript Theory

# Module 2: Data Types

## Questions 31-40

---

# 31. What Is the Boolean Data Type?

## Definition

A **Boolean** represents a value that can have only two states:

```
true
false
```

It is mainly used for decision-making in programs.

---

## Example

```javascript
let isLoggedIn = true;

let isAdmin = false;
```

Here:

```text
isLoggedIn → Boolean
isAdmin    → Boolean
```

---

# Real-World Example

Imagine a door lock.

It can have two states:

```
Locked
Unlocked
```

In programming:

```javascript
let doorLocked = true;
```

---

# Using Boolean in Conditions

```javascript
let isUserLoggedIn = true;

if(isUserLoggedIn){

    console.log("Show dashboard");

}
else{

    console.log("Show login page");

}
```

Output:

```
Show dashboard
```

---

# Boolean Values Come From Comparisons

Example:

```javascript
10 > 5
```

Result:

```javascript
true
```

---

Example:

```javascript
10 < 5
```

Result:

```javascript
false
```

---

# Common Boolean Operators

## AND (`&&`)

Both conditions must be true.

```javascript
true && true
```

Result:

```
true
```

---

## OR (`||`)

At least one condition must be true.

```javascript
true || false
```

Result:

```
true
```

---

## NOT (`!`)

Reverses the value.

```javascript
!true
```

Result:

```
false
```

---

# Real Application Usage

Boolean values control:

- Login status
- Dark mode
- Loading state
- Permission access
- Feature availability

Example:

```javascript
const isLoading = true;
```

React applications use Booleans everywhere.

---

# Interview Answer

**Boolean is a primitive data type that represents logical values: true or false.**

---

---

# 32. What Is Undefined?

## Definition

`undefined` means:

A variable has been declared but no value has been assigned yet.

---

## Example

```javascript
let username;

console.log(username);
```

Output:

```
undefined
```

---

# Memory Representation

Before assigning:

```
username
    |
    ↓
undefined
```

After assigning:

```javascript
username = "Alex";
```

Memory:

```
username
    |
    ↓
"Alex"
```

---

# When Does JavaScript Give Undefined?

## 1. Declared Variable Without Value

```javascript
let age;

console.log(age);
```

---

## 2. Missing Function Return

```javascript
function greet(){

}

console.log(greet());
```

Output:

```
undefined
```

---

## 3. Accessing Missing Object Property

```javascript
const user = {

    name:"Alex"

};

console.log(user.age);
```

Output:

```
undefined
```

---

# Undefined vs Null

Important interview topic.

## Undefined

JavaScript automatically assigns it.

```javascript
let user;
```

---

## Null

Developer intentionally assigns it.

```javascript
let user = null;
```

---

# Interview Answer

`undefined` represents the absence of an assigned value.

---

---

# 33. What Is Null?

## Definition

`null` represents an intentional empty value.

It means:

"I know this variable exists, but currently it has no value."

---

## Example

```javascript
let selectedUser = null;
```

Meaning:

There is currently no selected user.

---

# Real Application Example

Imagine an ecommerce website.

Before login:

```javascript
let currentUser = null;
```

After login:

```javascript
currentUser = {

    name:"Alex"

};
```

---

# Undefined vs Null

| undefined | null |
|---|---|
| Automatically assigned | Manually assigned |
| Value is missing | Intentionally empty |
| JavaScript gives it | Developer gives it |

---

# Strange JavaScript Behavior

```javascript
typeof null
```

Output:

```
object
```

This is a historical JavaScript bug.

It should technically return:

```
null
```

but changing it would break old websites.

Yes, even programming languages carry ancient baggage. Like digital archaeology.

---

# Interview Answer

`null` is a primitive value representing intentional absence of any object value.

---

---

# 34. What Is the Symbol Data Type?

## Definition

`Symbol` is a primitive data type used to create unique identifiers.

---

## Creating a Symbol

```javascript
const id = Symbol("userId");
```

---

Every Symbol is unique.

Example:

```javascript
const a = Symbol("id");

const b = Symbol("id");

console.log(a === b);
```

Output:

```
false
```

---

# Why Use Symbols?

They prevent naming conflicts.

Example:

```javascript
const userId = Symbol("id");

const productId = Symbol("id");
```

Both have the same description.

But they are different values.

---

# Real-World Usage

Symbols are used internally by JavaScript for:

- Object customization
- Iterators
- Meta programming

Example:

```javascript
Symbol.iterator
```

is used for making objects iterable.

---

# Should Beginners Focus On Symbol?

Not deeply.

For frontend/backend jobs:

Understand:

- What it is
- Why uniqueness matters

Advanced usage comes later.

---

# Interview Answer

Symbol is a primitive data type that creates unique values, commonly used as unique object property keys.

---

---

# 35. What Is the BigInt Data Type?

## Definition

BigInt is used for numbers larger than JavaScript's safe integer limit.

---

# Problem With Normal Numbers

JavaScript Number can safely handle:

```
9007199254740991
```

After this:

precision problems occur.

---

# Creating BigInt

Add `n` at the end:

```javascript
const bigNumber = 12345678901234567890n;
```

---

# Example

```javascript
const population = 8000000000000000000n;

console.log(population);
```

---

# BigInt Operations

Both values must be BigInt.

Works:

```javascript
10n + 20n
```

Result:

```
30n
```

---

Does not work:

```javascript
10n + 20
```

Error:

```
TypeError
```

---

# Real Usage

BigInt is useful in:

- Financial systems
- Cryptography
- Large calculations
- Blockchain applications

---

# Interview Answer

BigInt represents integers larger than the safe range of JavaScript Number.

---

---

# 36. What Are Non-Primitive (Reference) Data Types?

## Definition

Non-primitive data types store collections of values or complex structures.

They store a **reference to memory**, not the actual value directly.

---

# Primitive Types

Store single values:

```javascript
let age = 25;
```

---

# Reference Types

Store complex data:

```javascript
let user = {

    name:"Alex"

};
```

---

# Main Reference Types

JavaScript has:

## Object

```javascript
{
}
```

---

## Array

```javascript
[]
```

---

## Function

```javascript
function(){}
```

---

# Difference

Primitive:

```
variable → value
```

Reference:

```
variable → memory address → object
```

---

# Example

```javascript
let user1 = {

    name:"Alex"

};

let user2 = user1;

user2.name = "John";

console.log(user1.name);
```

Output:

```
John
```

Why?

Both variables point to the same object.

---

# Interview Answer

Reference types store references to memory locations and include objects, arrays, and functions.

---

---

# 37. What Is an Object in JavaScript?

## Definition

An object is a collection of data stored as key-value pairs.

---

## Example

```javascript
const user = {

    name:"Alex",

    age:25,

    city:"Delhi"

};
```

---

Structure:

```
key : value
```

Example:

```
name : Alex
age  : 25
```

---

# Accessing Properties

## Dot Notation

```javascript
user.name;
```

---

## Bracket Notation

```javascript
user["name"];
```

---

# Why Objects Matter

Almost everything in JavaScript applications is represented as objects.

Examples:

User:

```javascript
{
name:"Alex",
email:"abc@gmail.com"
}
```

Product:

```javascript
{
title:"Laptop",
price:50000
}
```

API Response:

```javascript
{
data:[],
status:200
}
```

---

# Interview Answer

An object is a collection of related data and functionality stored as key-value pairs.

---

---

# 38. Why Are Arrays Considered Objects?

## Short Answer

Because arrays inherit properties and methods from JavaScript's Object prototype.

---

## Example

```javascript
const numbers = [1,2,3];
```

Arrays have:

```javascript
numbers.length

numbers.push()

numbers.map()
```

These are object-like behaviors.

---

# Check Type

```javascript
typeof [];
```

Output:

```
object
```

---

# Internal Structure

Array:

```
Object

0 → value
1 → value
2 → value
length → 3
```

---

# Important

Arrays are specialized objects designed for storing ordered collections.

---

# Interview Answer

Arrays are objects because they are reference types with properties and methods inherited from Object.

---

---

# 39. What Is a Function in JavaScript?

## Definition

A function is a reusable block of code designed to perform a specific task.

---

## Example

```javascript
function greet(){

    console.log("Hello");

}

greet();
```

Output:

```
Hello
```

---

# Why Use Functions?

Functions provide:

- Reusability
- Organization
- Maintainability
- Easier debugging

---

# Function With Parameters

```javascript
function add(a,b){

    return a+b;

}

add(10,20);
```

Output:

```
30
```

---

# Functions Are Also Values

Example:

```javascript
const greet = function(){

    console.log("Hello");

};
```

The function is stored inside a variable.

---

# Interview Answer

A function is a reusable piece of code that can accept input, perform operations, and return output.

---

---

# 40. Why Are Functions Called First-Class Citizens?

## Definition

Functions are called first-class citizens because JavaScript treats functions like any other value.

They can be:

- Stored in variables
- Passed as arguments
- Returned from other functions

---

# 1. Store Function in Variable

```javascript
const sayHello = function(){

    console.log("Hello");

};
```

---

# 2. Pass Function as Argument

```javascript
function execute(fn){

    fn();

}

execute(sayHello);
```

---

# 3. Return Function

```javascript
function createFunction(){

    return function(){

        console.log("Hello");

    };

}
```

---

# Why Is This Important?

This enables:

- Callbacks
- Promises
- Event handling
- Array methods
- React patterns

---

# Example: Array Methods

```javascript
const numbers = [1,2,3];

numbers.map(function(num){

    return num * 2;

});
```

The function is passed as a value.

---

# Interview Answer

Functions are first-class citizens because they can be treated like values and passed, stored, and returned like other data.

---

# Revision Summary

```
Boolean
→ true/false values


undefined
→ declared but no assigned value


null
→ intentional empty value


Symbol
→ unique identifiers


BigInt
→ very large integers


Object
→ key-value collections


Array
→ specialized object for ordered data


Function
→ reusable code block


First-class functions
→ functions behave like values
```

---

# Engineering Importance

These concepts are required for:

- React state management
- API handling
- Node.js development
- Debugging memory issues
- Understanding closures
- Understanding async JavaScript
- Reading production code


# 41. What Is the Difference Between Primitive and Reference Types?

## Short Answer

Primitive types store **single values directly**.

Reference types store a **reference to a memory location where the data exists**.

---

# Primitive Types

JavaScript has 7 primitive types:

```text
String
Number
BigInt
Boolean
Undefined
Null
Symbol
```

Example:

```javascript
let age = 25;
```

The variable directly contains the value.

```
age
 |
 ↓
25
```

---

# Reference Types

Reference types store complex data.

Examples:

```text
Object
Array
Function
```

Example:

```javascript
const user = {
    name:"Alex"
};
```

Memory:

```
user
 |
 ↓
Memory Address
 |
 ↓
{
 name:"Alex"
}
```

The variable stores a reference, not the complete object.

---

# Important Difference: Copying Values

## Primitive Copy

```javascript
let a = 10;

let b = a;

b = 20;

console.log(a);
```

Output:

```
10
```

Why?

A copy of the value was created.

Memory:

```
a → 10

b → 10
```

Changing `b` does not affect `a`.

---

# Reference Copy

```javascript
let user1 = {

    name:"Alex"

};

let user2 = user1;

user2.name = "John";

console.log(user1.name);
```

Output:

```
John
```

Why?

Both variables point to the same object.

Memory:

```
user1 ───┐
         ↓
      Object
         ↑
user2 ───┘
```

---

# Interview Answer

Primitive types store values directly, while reference types store references to objects stored in memory.

---

---

# 42. Where Are Primitive Values Typically Stored?

## Short Answer

Primitive values are typically stored in the **Stack memory**.

---

# Example

```javascript
let age = 25;

let name = "Alex";
```

Memory:

```
Stack

age
 |
25


name
 |
"Alex"
```

---

# Why Stack?

Primitive values are:

- Small
- Fixed size
- Simple to access

So JavaScript can store and retrieve them quickly.

---

# Important Note

JavaScript engines are free to optimize memory internally.

The stack/heap explanation is a mental model, not a strict rule visible to developers.

For interviews, this model is accepted.

---

# 43. Where Are Reference Values Typically Stored?

## Short Answer

Reference values are typically stored in the **Heap memory**.

---

# Example

```javascript
const user = {

    name:"Alex",
    age:25

};
```

Memory:

```
Stack

user
 |
 ↓
Heap Address


Heap

{
 name:"Alex",
 age:25
}
```

---

# Why Heap?

Objects can:

- Grow dynamically
- Contain many values
- Have unknown size

Therefore they need flexible memory.

---

# Example

Large application data:

```javascript
const product = {

    id:101,
    name:"Laptop",
    reviews:[],
    specifications:{}

};
```

This is stored as an object in memory.

---

# Interview Answer

Reference values are stored in heap memory, and variables hold references pointing to those values.

---

---

# 44. How Do You Check the Type of a Variable?

## Short Answer

Use the `typeof` operator.

---

# Syntax

```javascript
typeof variable;
```

---

# Examples

## Number

```javascript
let age = 25;

console.log(typeof age);
```

Output:

```
number
```

---

## String

```javascript
let name = "Alex";

console.log(typeof name);
```

Output:

```
string
```

---

## Boolean

```javascript
let isActive = true;

console.log(typeof isActive);
```

Output:

```
boolean
```

---

## Object

```javascript
const user = {};

console.log(typeof user);
```

Output:

```
object
```

---

# Checking Without Variable

You can also:

```javascript
typeof 100;
```

Output:

```
number
```

---

# Why Is This Useful?

During debugging:

```javascript
console.log(typeof data);
```

helps identify unexpected values from APIs or user input.

---

# 45. What Does the `typeof` Operator Return?

## Definition

`typeof` returns a string representing the type of a value.

---

# Examples

```javascript
typeof "Hello"
```

Returns:

```
"string"
```

---

```javascript
typeof 100
```

Returns:

```
"number"
```

---

```javascript
typeof true
```

Returns:

```
"boolean"
```

---

```javascript
typeof undefined
```

Returns:

```
"undefined"
```

---

```javascript
typeof Symbol()
```

Returns:

```
"symbol"
```

---

# Complete Table

| Value | typeof result |
|---|---|
| `"Hello"` | string |
| `123` | number |
| `true` | boolean |
| `undefined` | undefined |
| `123n` | bigint |
| `Symbol()` | symbol |
| `{}` | object |
| `[]` | object |
| `null` | object |
| function(){} | function |

---

# Important Interview Trap

```javascript
typeof [];
```

Output:

```
object
```

Arrays are objects internally.

---

# 46. Why Does `typeof null` Return `"object"`?

## Short Answer

It is a historical bug in JavaScript.

---

# Example

```javascript
let value = null;

console.log(typeof value);
```

Output:

```
object
```

---

# Why?

In the original JavaScript implementation, values were represented using type tags.

The internal representation of `null` was incorrectly identified as an object.

---

# Should It Be Changed?

Technically yes.

But:

Millions of websites depend on this behavior.

Changing it would break old code.

So JavaScript keeps this strange behavior for compatibility.

---

# Correct Way To Check Null

Do not use:

```javascript
typeof value === "null"
```

It does not work.

Use:

```javascript
value === null
```

---

# Interview Answer

`typeof null` returns object because of an old JavaScript bug maintained for backward compatibility.

---

---

# 47. What Is the Difference Between Null and Undefined?

## Short Answer

Both represent absence of value, but the meaning is different.

---

# Undefined

Means:

"A value has not been assigned."

Example:

```javascript
let username;

console.log(username);
```

Output:

```
undefined
```

JavaScript assigned it automatically.

---

# Null

Means:

"I intentionally set this value as empty."

Example:

```javascript
let selectedUser = null;
```

Developer intentionally assigned it.

---

# Comparison

| undefined | null |
|---|---|
| Automatically assigned | Manually assigned |
| Missing value | Empty value |
| Default state | Intentional state |

---

# Real Application Example

Before login:

```javascript
let currentUser = null;
```

After login:

```javascript
currentUser = {
    name:"Alex"
};
```

---

# Interview Answer

Undefined means a value has not been assigned, while null represents intentional absence of value.

---

---

# 48. Can the Type of a Variable Change in JavaScript?

## Answer

Yes.

JavaScript is dynamically typed.

---

# Example

```javascript
let value = 100;

console.log(typeof value);
```

Output:

```
number
```

---

Later:

```javascript
value = "Hello";

console.log(typeof value);
```

Output:

```
string
```

---

The same variable changed type.

---

# Example

```javascript
let data = true;

data = {
    name:"Alex"
};
```

Allowed.

---

# Is This Good Practice?

Usually no.

Avoid changing variable types unnecessarily.

Bad:

```javascript
let user = "Alex";

user = 25;

user = false;
```

Hard to understand.

---

Better:

```javascript
let username = "Alex";

let age = 25;

let isActive = true;
```

---

# 49. What Is Dynamic Typing?

## Definition

Dynamic typing means variable types are determined at runtime instead of being declared explicitly.

---

# Example

JavaScript:

```javascript
let age = 25;
```

JavaScript automatically understands:

```
age is Number
```

---

Later:

```javascript
age = "Twenty Five";
```

Now:

```
age is String
```

---

# Compare With Java

Java requires:

```java
int age = 25;
```

The type is fixed.

---

JavaScript:

```javascript
let age = 25;
```

Type can change.

---

# Advantages

- Faster development
- Less code
- Flexible

---

# Disadvantages

- Runtime errors
- Unexpected behavior
- Harder debugging

---

# TypeScript Solution

TypeScript adds static typing:

```typescript
let age:number = 25;
```

Now:

```typescript
age = "hello";
```

Error.

---

# 50. What Is Weak Typing in JavaScript?

## Definition

Weak typing means JavaScript automatically converts values between different types when needed.

This is called:

```
Type Coercion
```

---

# Example

```javascript
console.log("5" + 10);
```

Output:

```
510
```

Why?

JavaScript converts:

```
10 → "10"
```

Then combines strings.

---

# Another Example

```javascript
console.log("5" - 2);
```

Output:

```
3
```

Why?

JavaScript converts:

```
"5" → 5
```

Then subtracts.

---

# Why Is This Dangerous?

Example:

```javascript
let total = "100";

total = total + 50;

console.log(total);
```

Output:

```
10050
```

Developer expected:

```
150
```

---

# Best Practice

Use strict equality:

Avoid:

```javascript
==
```

Prefer:

```javascript
===
```

---

Example:

Loose equality:

```javascript
5 == "5"
```

Output:

```
true
```

---

Strict equality:

```javascript
5 === "5"
```

Output:

```
false
```

---

# Interview Answer

JavaScript is weakly typed because it automatically converts values between different data types during operations.

---

# Final Revision

```
Primitive Types:
- Stored as values
- Usually stack memory
- Copied by value


Reference Types:
- Objects, arrays, functions
- Usually heap memory
- Copied by reference


typeof:
- Checks data type
- typeof null is a historical bug


Dynamic Typing:
- Variable types can change


Weak Typing:
- JavaScript automatically converts types
- Use === to avoid unexpected behavior
```

---

# Engineering Importance

Understanding this helps you debug:

- API response bugs
- React state issues
- Form input problems
- Unexpected calculations
- Authentication bugs
- Production JavaScript errors

These concepts look simple, but many real-world bugs come from exactly these areas.
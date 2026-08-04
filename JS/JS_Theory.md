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


# 51. What is Type Conversion?

## 📖 Definition

**Type Conversion** is the process of changing a value from one data type to another **intentionally**.

It is also called **Explicit Type Conversion** because the programmer explicitly writes code to convert the type.

---

## 🧠 Why Do We Need It?

Imagine a user enters their age in an input field.

```text
25
```

Although it looks like a number, JavaScript receives it as a **string**.

If you want to perform mathematical operations, you must convert it into a number.

---

## ✅ Example

```javascript
const age = "25";

const convertedAge = Number(age);

console.log(convertedAge);
console.log(typeof convertedAge);
```

### Output

```
25
number
```

---

## More Examples

### String → Number

```javascript
Number("100");
```

Output

```
100
```

---

### Number → String

```javascript
String(100);
```

Output

```
"100"
```

---

### Number → Boolean

```javascript
Boolean(1);
```

Output

```
true
```

---

## 💼 Real World Example

Suppose a shopping website asks the user for quantity.

```javascript
const quantity = prompt("Enter quantity");
```

User enters

```
5
```

JavaScript stores

```javascript
"5"
```

Before calculating total price:

```javascript
const total = Number(quantity) * 500;
```

---

## ⭐ Interview Tip

Remember:

> Type Conversion is **intentional**.

You decide when and how to convert.

---

# 52. What is Type Coercion?

## 📖 Definition

**Type Coercion** is the automatic conversion of one data type into another by JavaScript.

The programmer does **not** write conversion code.

JavaScript performs the conversion automatically.

---

## Example

```javascript
console.log("5" * 2);
```

Output

```
10
```

Why?

JavaScript automatically converts

```
"5"

↓

5
```

---

Another example

```javascript
console.log("5" + 2);
```

Output

```
52
```

Why?

The `+` operator prefers string concatenation.

So JavaScript converts

```
2

↓

"2"
```

Result

```
"52"
```

---

## More Examples

```javascript
true + 1
```

Output

```
2
```

Because

```
true

↓

1
```

---

```javascript
false + 5
```

Output

```
5
```

Because

```
false

↓

0
```

---

## ⭐ Interview Tip

Type coercion is powerful but can produce unexpected bugs.

Avoid depending on it.

---

# 53. What is the Difference Between Implicit and Explicit Type Conversion?

| Explicit Conversion | Implicit Conversion |
|--------------------|--------------------|
| Done by programmer | Done automatically by JavaScript |
| More readable | Can be confusing |
| Recommended | Avoid relying on it |

---

## Explicit Example

```javascript
const age = "25";

Number(age);
```

You wrote the conversion.

---

## Implicit Example

```javascript
"25" * 2
```

JavaScript converts automatically.

---

## Best Practice

Prefer

```javascript
Number(value)
```

instead of relying on JavaScript.

---

# 54. How Do You Convert a String to a Number?

There are three common ways.

---

## Method 1 — Number()

```javascript
const age = "25";

const result = Number(age);

console.log(result);
```

Output

```
25
```

---

## Method 2 — parseInt()

```javascript
const age = "25";

console.log(parseInt(age));
```

Output

```
25
```

---

## Method 3 — parseFloat()

```javascript
const price = "99.95";

console.log(parseFloat(price));
```

Output

```
99.95
```

---

## Invalid Conversion

```javascript
Number("Hello");
```

Output

```
NaN
```

Meaning

```
Not a Number
```

---

## ⭐ Interview Tip

Use

```javascript
Number()
```

unless you specifically need integer or decimal parsing.

---

# 55. What is the Difference Between Number(), parseInt(), and parseFloat()?

## Number()

Converts the **entire value**.

```javascript
Number("100");
```

Output

```
100
```

---

```javascript
Number("100abc");
```

Output

```
NaN
```

---

## parseInt()

Reads until a non-number appears.

```javascript
parseInt("100abc");
```

Output

```
100
```

---

## parseFloat()

Reads decimal numbers.

```javascript
parseFloat("99.95kg");
```

Output

```
99.95
```

---

## Comparison Table

| Function | Accepts Decimal | Stops at Characters |
|-----------|-----------------|---------------------|
| Number() | ✅ | ❌ |
| parseInt() | ❌ | ✅ |
| parseFloat() | ✅ | ✅ |

---

# 56. When Should You Use parseInt()?

Use `parseInt()` when you only need the **integer part**.

---

## Example

```javascript
const age = "25 years";

console.log(parseInt(age));
```

Output

```
25
```

---

Another example

```javascript
parseInt("18.9");
```

Output

```
18
```

---

## Real World Example

Reading age from user input.

```
25 years

↓

25
```

---

# 57. When Should You Use parseFloat()?

Use `parseFloat()` when decimal values are allowed.

---

## Example

```javascript
const weight = "72.5kg";

console.log(parseFloat(weight));
```

Output

```
72.5
```

---

Another example

```javascript
parseFloat("15.99 USD");
```

Output

```
15.99
```

---

## Real World Example

Shopping websites.

```
₹999.95

↓

999.95
```

---

# 58. How Do You Convert a Number to a String?

There are multiple methods.

---

## Method 1

```javascript
String(100);
```

Output

```
"100"
```

---

## Method 2

```javascript
(100).toString();
```

Output

```
"100"
```

---

## Method 3

```javascript
100 + "";
```

Output

```
"100"
```

Not recommended because it relies on implicit conversion.

---

## Best Practice

```javascript
String(value);
```

is the clearest and most readable.

---

# 59. How Do You Convert a Value to a Boolean?

Use

```javascript
Boolean()
```

---

## Examples

```javascript
Boolean(1);
```

Output

```
true
```

---

```javascript
Boolean(0);
```

Output

```
false
```

---

```javascript
Boolean("Hello");
```

Output

```
true
```

---

```javascript
Boolean("");
```

Output

```
false
```

---

## Real World Example

Login validation.

```javascript
if (Boolean(username)) {
    console.log("Username exists");
}
```

---

# 60. What Values Are Considered Falsy in JavaScript?

## 📖 Definition

Falsy values are values that become

```javascript
false
```

when converted to Boolean.

---

## There are only **8 falsy values** in JavaScript.

```javascript
false
```

```javascript
0
```

```javascript
-0
```

```javascript
0n
```

(BigInt zero)

```javascript
""
```

(Empty string)

```javascript
null
```

```javascript
undefined
```

```javascript
NaN
```

---

## Everything Else Is Truthy

Examples

```javascript
[]
```

Empty array

↓

Truthy

---

```javascript
{}
```

Empty object

↓

Truthy

---

```javascript
"0"
```

↓

Truthy

---

```javascript
"false"
```

↓

Truthy

---

```javascript
100
```

↓

Truthy

---

## Common Interview Question

Predict the output.

```javascript
if ([]) {
    console.log("Hello");
}
```

Output

```
Hello
```

Because an empty array is **truthy**.

---

## 🎯 Module Summary

After completing Questions **51–60**, you should understand:

- ✅ Type Conversion
- ✅ Type Coercion
- ✅ Explicit vs Implicit Conversion
- ✅ `Number()`
- ✅ `parseInt()`
- ✅ `parseFloat()`
- ✅ `String()`
- ✅ `Boolean()`
- ✅ Truthy Values
- ✅ Falsy Values

These concepts are fundamental for handling user input, API data, form validation, calculations, and debugging. They are also among the most frequently asked JavaScript interview topics because they reveal whether you truly understand how JavaScript behaves under the hood.


# Module 2: Type Conversion & Type Coercion
# Questions 61–70

---

# 61. What Values Are Considered Truthy?

## 📖 Definition

A **truthy value** is any value that becomes **`true`** when converted to a Boolean.

JavaScript automatically converts values to `true` or `false` in conditions like:

```javascript
if (value) {
  console.log("Executed");
}
```

If `value` is truthy, the code inside the `if` block runs.

---

## 🧠 Important Rule

There are only **8 falsy values** in JavaScript.

Everything else is **truthy**.

---

## Common Truthy Values

```javascript
true
```

↓

Truthy

---

```javascript
1
```

↓

Truthy

---

```javascript
-1
```

↓

Truthy

---

```javascript
100
```

↓

Truthy

---

```javascript
"Hello"
```

↓

Truthy

---

```javascript
"0"
```

↓

Truthy

Many beginners think `"0"` is false.

It is **not**.

It is a non-empty string.

---

```javascript
[]
```

↓

Truthy

Even an empty array is truthy.

---

```javascript
{}
```

↓

Truthy

Even an empty object is truthy.

---

```javascript
function () {}
```

↓

Truthy

Functions are also truthy.

---

## Example

```javascript
if ([]) {
  console.log("Array is truthy");
}

if ({}) {
  console.log("Object is truthy");
}
```

### Output

```
Array is truthy
Object is truthy
```

---

## ⚠️ Common Mistake

Many developers assume:

```javascript
if ([])
```

means

> "Array has data"

Wrong.

An empty array is still truthy.

Correct way

```javascript
if (array.length > 0)
```

---

## 💼 Real World Example

Checking if a user entered a name.

```javascript
const username = "Alex";

if (username) {
  console.log("Welcome");
}
```

---

## ⭐ Interview Tip

Remember:

```
Everything is truthy
except the 8 falsy values.
```

---

# 62. What Happens When You Add a Number and a String?

## 📖 Explanation

The `+` operator has **two jobs**:

1. Addition
2. String concatenation

If one operand is a string, JavaScript converts the other operand to a string.

---

## Example

```javascript
console.log("5" + 2);
```

### Output

```
52
```

---

## What Happened?

```
"5"

+

2

↓

"5"

+

"2"

↓

"52"
```

JavaScript performs **implicit type coercion**.

---

## More Examples

```javascript
10 + "20"
```

↓

```
"1020"
```

---

```javascript
"Hello " + "World"
```

↓

```
Hello World
```

---

## ⭐ Best Practice

If you want mathematical addition:

```javascript
Number("5") + 2
```

Output

```
7
```

---

# 63. Why Does `"5" + 2` Produce a Different Result From `"5" - 2`?

This is one of the most famous JavaScript interview questions.

---

## Example 1

```javascript
console.log("5" + 2);
```

Output

```
52
```

Because `+` performs string concatenation when a string is involved.

---

## Example 2

```javascript
console.log("5" - 2);
```

Output

```
3
```

---

## Why?

The `-` operator only performs mathematical subtraction.

JavaScript converts:

```
"5"

↓

5
```

Then calculates

```
5 - 2
```

---

## Comparison

| Expression | Output | Reason |
|------------|--------|--------|
| `"5" + 2` | `"52"` | String concatenation |
| `"5" - 2` | `3` | Numeric conversion |

---

## ⭐ Interview Tip

Only `+` can concatenate strings.

Other arithmetic operators (`-`, `*`, `/`, `%`) force numeric conversion.

---

# 64. What Happens When You Use the Unary `+` Operator on a String?

## 📖 Definition

The unary `+` operator converts a value into a number.

---

## Example

```javascript
const age = "25";

console.log(+age);
```

Output

```
25
```

Type

```javascript
number
```

---

## Another Example

```javascript
console.log(+"100");
```

Output

```
100
```

---

## Invalid Example

```javascript
console.log(+"Hello");
```

Output

```
NaN
```

---

## Equivalent To

```javascript
Number("25")
```

---

## 💼 Real World Example

```javascript
const quantity = +"5";

const total = quantity * 100;
```

---

## ⭐ Best Practice

Although unary `+` is concise, `Number()` is clearer.

```javascript
Number(value)
```

is generally preferred for readability.

---

# 65. What is NaN?

## 📖 Definition

`NaN` stands for

```
Not a Number
```

It represents an invalid numeric result.

---

## Example

```javascript
Number("Hello")
```

Output

```
NaN
```

---

Another example

```javascript
0 / 0
```

↓

```
NaN
```

---

## Interesting Fact

```javascript
typeof NaN
```

Output

```
number
```

Even though its name says "Not a Number", JavaScript considers it a special numeric value.

---

## ⭐ Interview Tip

`NaN` is not equal to anything.

Not even itself.

```javascript
console.log(NaN === NaN);
```

Output

```
false
```

---

# 66. How Do You Check if a Value is NaN?

Use

```javascript
Number.isNaN()
```

---

## Example

```javascript
const result = Number("Hello");

console.log(Number.isNaN(result));
```

Output

```
true
```

---

## Another Example

```javascript
console.log(Number.isNaN(100));
```

Output

```
false
```

---

## Why Not Use `==`?

```javascript
NaN === NaN
```

Output

```
false
```

Therefore:

```javascript
Number.isNaN()
```

is the correct solution.

---

# 67. What is the Difference Between `isNaN()` and `Number.isNaN()`?

This is a common interview question.

---

## `isNaN()`

Performs type coercion before checking.

Example

```javascript
isNaN("Hello")
```

↓

```
true
```

Because

```
"Hello"

↓

NaN
```

---

## `Number.isNaN()`

Does **not** perform type coercion.

Example

```javascript
Number.isNaN("Hello")
```

↓

```
false
```

Because `"Hello"` is a string, not the special `NaN` value.

---

## Comparison

| Function | Converts Value First? |
|----------|-----------------------|
| isNaN() | ✅ Yes |
| Number.isNaN() | ❌ No |

---

## ⭐ Best Practice

Always prefer

```javascript
Number.isNaN()
```

It is safer and more predictable.

---

# 68. What Happens When You Convert `null` to a Number?

Example

```javascript
Number(null)
```

Output

```
0
```

---

## Why?

JavaScript treats `null` as an empty numeric value.

---

## Example

```javascript
console.log(Number(null));
```

Output

```
0
```

---

## ⭐ Interview Tip

Many developers incorrectly expect:

```
NaN
```

The correct answer is:

```
0
```

---

# 69. What Happens When You Convert `undefined` to a Number?

Example

```javascript
Number(undefined)
```

Output

```
NaN
```

---

## Why?

`undefined` means:

> No value has been assigned.

JavaScript cannot convert "no value" into a valid number.

---

## Example

```javascript
console.log(Number(undefined));
```

Output

```
NaN
```

---

## Comparison

```javascript
Number(null)
```

↓

```
0
```

---

```javascript
Number(undefined)
```

↓

```
NaN
```

This difference is frequently tested in interviews.

---

# 70. What Happens When You Convert an Empty String to a Number?

Example

```javascript
Number("")
```

Output

```
0
```

---

## Why?

JavaScript treats an empty string as zero during explicit numeric conversion.

---

## Example

```javascript
console.log(Number(""));
```

Output

```
0
```

---

## More Examples

```javascript
Number(" ")
```

Output

```
0
```

Whitespace is ignored.

---

```javascript
Number("123")
```

Output

```
123
```

---

```javascript
Number("Hello")
```

Output

```
NaN
```

---

## ⭐ Common Interview Question

Predict the output:

```javascript
console.log(Number(""));
console.log(Number(" "));
console.log(Number(null));
console.log(Number(undefined));
```

### Output

```
0
0
0
NaN
```

---

# 🎯 Module Summary

After completing Questions **61–70**, you should understand:

- ✅ Truthy values
- ✅ String concatenation with `+`
- ✅ Why `"5" + 2` and `"5" - 2` behave differently
- ✅ Unary `+` operator
- ✅ `NaN`
- ✅ `Number.isNaN()`
- ✅ Difference between `isNaN()` and `Number.isNaN()`
- ✅ Converting `null` to a number
- ✅ Converting `undefined` to a number
- ✅ Converting an empty string to a number

These concepts are extremely important for debugging unexpected JavaScript behavior, validating user input, and answering many of the "tricky" JavaScript interview questions that test your understanding of the language rather than your ability to memorize syntax.


# 71. What Happens When You Convert `" "` (a Space) to a Number?

## 📖 Definition

When you convert a string containing **only whitespace** to a number using `Number()`, JavaScript first removes the whitespace. After trimming, the string becomes an empty string (`""`), which converts to `0`.

---

## Example

```javascript
console.log(Number(" "));
```

### Output

```
0
```

---

## Why?

JavaScript internally performs these steps:

```text
" "

↓

Trim whitespace

↓

""

↓

Convert empty string

↓

0
```

---

## More Examples

```javascript
console.log(Number("     "));
```

Output

```
0
```

---

```javascript
console.log(Number("\t"));
```

Output

```
0
```

---

```javascript
console.log(Number("\n"));
```

Output

```
0
```

---

## ⚠️ Common Mistake

Many developers expect:

```
NaN
```

The correct output is:

```
0
```

---

## ⭐ Interview Tip

Remember these conversions:

| Value | Output |
|--------|--------|
| `Number("")` | `0` |
| `Number(" ")` | `0` |
| `Number(null)` | `0` |
| `Number(undefined)` | `NaN` |

These are very common JavaScript interview questions.

---

# 72. What Happens When You Convert `"123abc"` Using `Number()`?

## 📖 Explanation

`Number()` tries to convert the **entire string** into a valid number.

If **any character** is invalid, the conversion fails.

---

## Example

```javascript
console.log(Number("123abc"));
```

### Output

```
NaN
```

---

## Why?

JavaScript reads:

```text
123abc
```

It encounters letters (`abc`), which are not valid in a number.

Therefore, the whole conversion fails.

---

## More Examples

```javascript
Number("100kg")
```

↓

```
NaN
```

---

```javascript
Number("50%")
```

↓

```
NaN
```

---

## ⭐ Interview Tip

`Number()` is **strict**.

The entire string must represent a valid number.

---

# 73. What Happens When You Convert `"123abc"` Using `parseInt()`?

## 📖 Explanation

Unlike `Number()`, `parseInt()` reads the string **from left to right** and stops when it finds the first invalid character.

---

## Example

```javascript
console.log(parseInt("123abc"));
```

### Output

```
123
```

---

## Why?

JavaScript processes the string like this:

```text
1 ✓
2 ✓
3 ✓
a ✗ Stop
```

Only the valid numeric portion is returned.

---

## More Examples

```javascript
parseInt("99px")
```

↓

```
99
```

---

```javascript
parseInt("25 years")
```

↓

```
25
```

---

```javascript
parseInt("abc123")
```

↓

```
NaN
```

Because the first character is not a number.

---

## ⭐ Comparison

```javascript
Number("123abc")
```

↓

```
NaN
```

---

```javascript
parseInt("123abc")
```

↓

```
123
```

---

## Best Practice

Use:

- `Number()` when the entire value must be numeric.
- `parseInt()` when extracting integers from strings.

---

# 74. Why is Automatic Type Coercion Sometimes Dangerous?

## 📖 Definition

Automatic type coercion occurs when JavaScript silently converts one data type into another.

While convenient, it can lead to unexpected results and difficult-to-find bugs.

---

## Example 1

```javascript
console.log("5" + 2);
```

Output

```
52
```

Many developers expect:

```
7
```

But `+` performs string concatenation.

---

## Example 2

```javascript
console.log("5" - 2);
```

Output

```
3
```

Here JavaScript converts `"5"` to the number `5`.

---

## Example 3

```javascript
console.log(true + 1);
```

Output

```
2
```

Because:

```text
true

↓

1
```

---

## Example 4

```javascript
console.log([] + []);
```

Output

```
""
```

This surprises many developers.

---

## Why is This Dangerous?

Imagine a shopping cart:

```javascript
const price = "500";
const quantity = 2;

const total = price + quantity;
```

Output

```
5002
```

Instead of:

```
1000
```

---

## Real-World Bug

A form input always returns strings:

```javascript
const age = "18";

if (age + 1 === 19) {
  // This never runs
}
```

Because:

```javascript
"18" + 1
```

becomes:

```
181
```

---

## ⭐ Interview Tip

Automatic type coercion is one of the biggest sources of JavaScript bugs.

Experienced developers avoid relying on it.

---

# 75. How Can You Avoid Unexpected Type Coercion?

## 📖 Best Practices

### 1. Use Explicit Type Conversion

Instead of:

```javascript
"5" + 2
```

Write:

```javascript
Number("5") + 2
```

Output

```
7
```

---

### 2. Use Strict Equality (`===`)

Avoid:

```javascript
5 == "5"
```

Use:

```javascript
5 === 5
```

Strict equality checks both value and type.

---

### 3. Validate User Input

Always convert input values before calculations.

```javascript
const quantity = Number(inputValue);
```

---

### 4. Avoid Implicit Conversion

Instead of:

```javascript
const total = price + quantity;
```

Write:

```javascript
const total = Number(price) + Number(quantity);
```

---

### 5. Know the Data Type

Use:

```javascript
typeof value
```

to verify what you're working with.

---

## Real-World Example

```javascript
const age = Number(prompt("Enter your age"));

if (age >= 18) {
  console.log("Eligible");
}
```

This avoids comparing strings with numbers.

---

## ⭐ Interview Tip

Good JavaScript developers don't rely on "JavaScript magic."

They make conversions explicit, which makes code easier to read, debug, and maintain.

---

# Module 3: Operators

# 76. What is an Operator?

## 📖 Definition

An **operator** is a special symbol or keyword that tells JavaScript to perform an operation on one or more values (called operands).

Think of operators as **verbs** in programming. They tell JavaScript what action to perform.

---

## Example

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

Here:

- `a` and `b` are **operands**.
- `+` is the **operator**.

Output:

```
15
```

---

## More Examples

Addition

```javascript
10 + 5
```

Subtraction

```javascript
10 - 5
```

Comparison

```javascript
10 > 5
```

Assignment

```javascript
let age = 25;
```

Logical

```javascript
true && false
```

---

## Real-World Example

Shopping cart:

```javascript
const total = price * quantity;
```

The `*` operator calculates the total price.

---

## ⭐ Interview Tip

An operator performs an operation on one or more operands.

---

# 77. How Many Categories of Operators Exist in JavaScript?

JavaScript has several categories of operators.

The most important ones are:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Unary Operators
7. Ternary Operator
8. String Operators
9. Relational Operators
10. Type Operators (`typeof`, `instanceof`)
11. Optional Chaining (`?.`)
12. Nullish Coalescing (`??`)

For interviews and day-to-day development, focus first on the first seven categories. The others become more important as you work with larger applications.

---

# 78. What are Arithmetic Operators?

Arithmetic operators perform mathematical calculations.

| Operator | Meaning |
|----------|---------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (Remainder) |
| `**` | Exponentiation |
| `++` | Increment |
| `--` | Decrement |

---

## Example

```javascript
let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

Output

```
25
15
100
4
0
3200000
```

---

## Real-World Example

Calculating discounts, taxes, shopping cart totals, percentages, and averages all use arithmetic operators.

---

# 79. What are Assignment Operators?

Assignment operators assign values to variables.

The most common assignment operator is:

```javascript
=
```

Example:

```javascript
let age = 25;
```

---

Other assignment operators combine assignment with another operation.

| Operator | Meaning |
|----------|---------|
| `=` | Assign |
| `+=` | Add and assign |
| `-=` | Subtract and assign |
| `*=` | Multiply and assign |
| `/=` | Divide and assign |
| `%=` | Modulus and assign |
| `**=` | Exponentiate and assign |

---

## Example

```javascript
let score = 50;

score += 10;

console.log(score);
```

Output

```
60
```

---

## Why Use Them?

Instead of:

```javascript
score = score + 10;
```

You can write:

```javascript
score += 10;
```

This is shorter and easier to read.

---

# 80. What are Comparison Operators?

Comparison operators compare two values and return a Boolean (`true` or `false`).

| Operator | Meaning |
|----------|---------|
| `==` | Loose equality |
| `===` | Strict equality |
| `!=` | Loose inequality |
| `!==` | Strict inequality |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

---

## Example

```javascript
console.log(10 > 5);
console.log(10 === 10);
console.log(10 !== 5);
```

Output

```
true
true
true
```

---

## Real-World Example

Checking whether a user is eligible to vote:

```javascript
if (age >= 18) {
  console.log("Eligible");
}
```

Comparison operators are used in almost every conditional statement.

---

# 🎯 Module Progress

You have now completed:

- ✅ Module 1: Variables & Data Types
- ✅ Module 2: Type Conversion & Type Coercion
- ✅ Module 3: Questions **76–80** (Operators introduction)

The next section (Questions **81–90**) will cover logical operators, bitwise operators, unary operators, ternary operators, modulus, exponentiation, and the crucial differences between `=`, `==`, and `===`, which are among the most frequently asked JavaScript interview topics.



# 81. What are Logical Operators?

## 📖 Definition

**Logical operators** are used to combine or modify Boolean (true/false) expressions.

They are mainly used in:

- `if` statements
- Loops
- Authentication
- Form validation
- Permission systems
- Filtering data

Logical operators don't always return `true` or `false`. They often return one of the original values, which is an important JavaScript behavior.

---

## Types of Logical Operators

| Operator | Name | Meaning |
|----------|------|---------|
| `&&` | Logical AND | Returns true if all conditions are true |
| `\|\|` | Logical OR | Returns true if at least one condition is true |
| `!` | Logical NOT | Reverses a Boolean value |

---

## Logical AND (`&&`)

Returns `true` only if **both conditions** are true.

```javascript
const age = 20;
const hasID = true;

console.log(age >= 18 && hasID);
```

Output

```
true
```

---

If either condition is false:

```javascript
console.log(true && false);
```

Output

```
false
```

---

## Logical OR (`||`)

Returns `true` if **at least one** condition is true.

```javascript
const isAdmin = false;
const isOwner = true;

console.log(isAdmin || isOwner);
```

Output

```
true
```

---

If both are false:

```javascript
console.log(false || false);
```

Output

```
false
```

---

## Logical NOT (`!`)

Reverses the Boolean value.

```javascript
console.log(!true);
```

Output

```
false
```

---

```javascript
console.log(!false);
```

Output

```
true
```

---

## Real World Example

Login System

```javascript
if (isLoggedIn && isVerified) {
    console.log("Access Granted");
}
```

Both conditions must be true.

---

## Interview Tip

Remember:

```
&&

All must be true
```

```
||

Any one can be true
```

```
!

Reverses Boolean value
```

---

# 82. What are Bitwise Operators?

## 📖 Definition

Bitwise operators work directly on the **binary (0 and 1)** representation of numbers.

Unlike arithmetic operators, they compare each individual bit.

These operators are used in:

- Low-level programming
- Graphics programming
- Encryption
- Compression
- Performance optimizations

In everyday frontend development, they are used much less frequently.

---

## Common Bitwise Operators

| Operator | Meaning |
|----------|---------|
| `&` | AND |
| `\|` | OR |
| `^` | XOR |
| `~` | NOT |
| `<<` | Left Shift |
| `>>` | Right Shift |
| `>>>` | Unsigned Right Shift |

---

## Example

```javascript
console.log(5 & 3);
```

Binary:

```
5 = 101

3 = 011

Result

001
```

Output

```
1
```

---

## Another Example

```javascript
console.log(5 | 3);
```

Output

```
7
```

---

## Interview Tip

Unless you're working with systems programming, networking, or performance-critical code, you won't use bitwise operators often. However, knowing what they are and recognizing them in code is valuable.

---

# 83. What are Unary Operators?

## 📖 Definition

A **unary operator** works on **only one operand**.

Unlike binary operators (which require two values), unary operators perform operations using a single value.

---

## Common Unary Operators

| Operator | Meaning |
|----------|---------|
| `typeof` | Returns data type |
| `delete` | Removes object property |
| `!` | Logical NOT |
| `++` | Increment |
| `--` | Decrement |
| `+` | Convert to number |
| `-` | Negate number |

---

## Example

Increment

```javascript
let count = 5;

count++;

console.log(count);
```

Output

```
6
```

---

Unary Plus

```javascript
console.log(+"25");
```

Output

```
25
```

---

`typeof`

```javascript
console.log(typeof "Alex");
```

Output

```
string
```

---

## Real World Example

```javascript
const quantity = +"10";
```

Converts a string into a number.

---

# 84. What are Ternary Operators?

## 📖 Definition

The **ternary operator** is JavaScript's shorthand version of an `if...else` statement.

It is the **only operator that takes three operands**, which is why it's called "ternary."

---

## Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

---

## Example

Using `if...else`

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

Using ternary operator

```javascript
const result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output

```
Adult
```

---

## Real World Example

React JSX

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

This is one of the most common uses of the ternary operator in React.

---

## Interview Tip

Use ternary operators for **simple conditions**.

Avoid deeply nested ternary expressions because they reduce readability.

---

# 85. What is the Modulus (`%`) Operator?

## 📖 Definition

The modulus operator returns the **remainder** after division.

It does **not** return the quotient.

---

## Example

```javascript
console.log(10 % 3);
```

Calculation

```
10 ÷ 3

Quotient = 3

Remainder = 1
```

Output

```
1
```

---

## Another Example

```javascript
console.log(20 % 5);
```

Output

```
0
```

Because 20 is completely divisible by 5.

---

## Real World Uses

### Check Even Number

```javascript
number % 2 === 0
```

---

### Check Odd Number

```javascript
number % 2 !== 0
```

---

### Cycle Through Values

Useful in pagination, sliders, and rotating arrays.

---

## Interview Tip

The modulus operator is one of the most frequently used operators in programming.

---

# 86. What is Exponentiation (`**`)?

## 📖 Definition

The exponentiation operator raises a number to a specified power.

---

## Syntax

```javascript
base ** exponent
```

---

## Example

```javascript
console.log(2 ** 3);
```

Output

```
8
```

Because:

```
2 × 2 × 2 = 8
```

---

Another example

```javascript
console.log(5 ** 2);
```

Output

```
25
```

---

Equivalent older syntax

```javascript
Math.pow(2, 3);
```

Output

```
8
```

Modern JavaScript prefers `**` because it is shorter and easier to read.

---

## Real World Example

Area calculations, scientific calculations, financial formulas, and algorithms often require exponentiation.

---

# 87. What is the Difference Between `=` and `==`?

This is one of the first concepts every JavaScript developer must understand.

---

## Assignment Operator (`=`)

Used to assign a value to a variable.

Example

```javascript
let age = 25;
```

Here:

```
25

↓

Stored in

↓

age
```

No comparison happens.

---

## Loose Equality (`==`)

Compares two values.

It performs automatic type conversion if necessary.

Example

```javascript
console.log(5 == "5");
```

Output

```
true
```

Because JavaScript converts:

```
"5"

↓

5
```

Then compares.

---

## Comparison Table

| Operator | Purpose |
|----------|---------|
| `=` | Assign value |
| `==` | Compare values |

---

## Common Bug

```javascript
if (age = 18)
```

This assigns 18 to `age` instead of comparing it.

Correct

```javascript
if (age === 18)
```

---

# 88. What is the Difference Between `==` and `===`?

Both compare values, but they behave differently.

---

## Loose Equality (`==`)

Performs type coercion.

```javascript
console.log(5 == "5");
```

Output

```
true
```

---

## Strict Equality (`===`)

Checks both value and type.

```javascript
console.log(5 === "5");
```

Output

```
false
```

---

## Comparison Table

| Operator | Checks Value | Checks Type | Type Conversion |
|----------|--------------|-------------|-----------------|
| `==` | ✅ | ❌ | ✅ |
| `===` | ✅ | ✅ | ❌ |

---

## Interview Tip

Most companies expect developers to use `===` unless there's a specific reason to use `==`.

---

# 89. Why is `===` Generally Recommended?

## 📖 Explanation

`===` avoids unexpected bugs caused by automatic type coercion.

It makes your code:

- More predictable
- Easier to debug
- Easier to understand
- Safer

---

## Example

Using `==`

```javascript
console.log(false == 0);
```

Output

```
true
```

This surprises many developers.

---

Using `===`

```javascript
console.log(false === 0);
```

Output

```
false
```

This is much clearer.

---

## Real World Example

Authentication

```javascript
if (enteredOTP === storedOTP) {
    console.log("Verified");
}
```

No hidden type conversion occurs.

---

## Interview Tip

Modern JavaScript style guides (including Airbnb's JavaScript Style Guide) recommend using `===` almost all the time.

---

# 90. What is Loose Equality?

## 📖 Definition

Loose equality (`==`) compares two values **after attempting to convert them to the same type**.

This automatic conversion is called **type coercion**.

---

## Example

```javascript
console.log(10 == "10");
```

Output

```
true
```

Because JavaScript converts:

```
"10"

↓

10
```

---

## More Examples

```javascript
console.log(true == 1);
```

Output

```
true
```

---

```javascript
console.log(false == 0);
```

Output

```
true
```

---

```javascript
console.log(null == undefined);
```

Output

```
true
```

---

## Why Can It Be Dangerous?

It can produce results that are technically correct according to JavaScript's rules but unexpected for developers.

For example:

```javascript
console.log("" == 0);
```

Output

```
true
```

Many developers do not expect an empty string to be equal to zero.

---

## Best Practice

Use:

```javascript
===
```

for almost all comparisons.

Only use `==` if you fully understand JavaScript's coercion rules and intentionally want that behavior.

---

# 🎯 Module Summary

After completing Questions **81–90**, you should understand:

- ✅ Logical operators (`&&`, `||`, `!`)
- ✅ Bitwise operators
- ✅ Unary operators
- ✅ Ternary operator
- ✅ Modulus (`%`)
- ✅ Exponentiation (`**`)
- ✅ Assignment operator (`=`)
- ✅ Loose equality (`==`)
- ✅ Strict equality (`===`)
- ✅ Why modern JavaScript recommends `===`

These operators are used throughout JavaScript, React, Node.js, and modern web development. A strong understanding of them will help you write cleaner code, avoid subtle bugs, and perform well in technical interviews.


# 91. What is Strict Equality?

## 📖 Definition

**Strict equality (`===`)** compares **both the value and the data type**.

Two values are considered equal **only if**:

- Their values are the same.
- Their data types are the same.

Unlike loose equality (`==`), **strict equality does not perform type coercion**.

---

## Syntax

```javascript
value1 === value2
```

---

## Examples

### Example 1

```javascript
console.log(5 === 5);
```

Output

```
true
```

Same value and same type.

---

### Example 2

```javascript
console.log(5 === "5");
```

Output

```
false
```

Why?

```
5

↓

Number

≠

"5"

↓

String
```

Different data types.

---

### Example 3

```javascript
console.log(true === 1);
```

Output

```
false
```

Different types.

---

### Example 4

```javascript
console.log(null === undefined);
```

Output

```
false
```

Although both represent "absence of value", they are different types.

---

## Real World Example

Login System

```javascript
const enteredOTP = Number(inputOTP);

if (enteredOTP === storedOTP) {
    console.log("Verified");
}
```

Strict equality ensures no unexpected type conversion occurs.

---

## ⭐ Interview Tip

Always prefer:

```javascript
===
```

over

```javascript
==
```

unless you have a very specific reason to allow type coercion.

---

# 92. What is the Difference Between `!=` and `!==`?

Both operators check if two values are **not equal**, but they behave differently.

---

## `!=` (Loose Inequality)

Performs type coercion before comparison.

### Example

```javascript
console.log(5 != "5");
```

Output

```
false
```

Why?

JavaScript converts:

```
"5"

↓

5
```

Then compares:

```
5 != 5
```

↓

```
false
```

---

## `!==` (Strict Inequality)

Checks both value and type.

No type conversion.

### Example

```javascript
console.log(5 !== "5");
```

Output

```
true
```

Because:

```
Number

≠

String
```

---

## Comparison Table

| Operator | Checks Type? | Type Conversion? |
|-----------|--------------|------------------|
| `!=` | ❌ No | ✅ Yes |
| `!==` | ✅ Yes | ❌ No |

---

## Best Practice

Prefer

```javascript
!==
```

because it is predictable and prevents hidden bugs.

---

# 93. What is Operator Precedence?

## 📖 Definition

**Operator precedence** determines **which operation JavaScript performs first** when an expression contains multiple operators.

Think of it as JavaScript's version of the mathematical order of operations (BODMAS/PEMDAS).

---

## Example

```javascript
console.log(10 + 5 * 2);
```

Output

```
20
```

---

## Why?

JavaScript performs multiplication before addition.

```
5 × 2 = 10

↓

10 + 10

↓

20
```

---

## Another Example

```javascript
console.log((10 + 5) * 2);
```

Output

```
30
```

Parentheses have the highest precedence.

---

## Common Precedence Order

1. Parentheses `()`
2. Unary operators (`!`, `typeof`, `++`, `--`)
3. Exponentiation `**`
4. Multiplication, Division, Modulus (`*`, `/`, `%`)
5. Addition, Subtraction (`+`, `-`)
6. Comparison operators
7. Logical AND (`&&`)
8. Logical OR (`||`)
9. Nullish Coalescing (`??`)
10. Assignment (`=`)

---

## Interview Tip

If an expression looks confusing, use parentheses.

Readable code is always better.

---

# 94. What is Operator Associativity?

## 📖 Definition

When **two operators have the same precedence**, JavaScript uses **associativity** to decide which one to evaluate first.

Associativity can be:

- Left to Right
- Right to Left

---

## Left-to-Right Example

```javascript
console.log(20 - 10 - 5);
```

Output

```
5
```

Evaluation:

```
20 - 10 = 10

↓

10 - 5 = 5
```

---

## Right-to-Left Example

Assignment operator:

```javascript
let a, b;

a = b = 10;
```

Evaluation:

```
b = 10

↓

a = 10
```

---

## Interview Tip

Most arithmetic operators are **left-to-right**.

Assignment operators are **right-to-left**.

---

# 95. What Does the Logical AND (`&&`) Operator Return?

## 📖 Definition

The `&&` operator returns:

- The **first falsy value**, or
- The **last truthy value** if all operands are truthy.

---

## Boolean Example

```javascript
console.log(true && true);
```

Output

```
true
```

---

```javascript
console.log(true && false);
```

Output

```
false
```

---

## Value Example

```javascript
console.log("Alex" && 100);
```

Output

```
100
```

Both values are truthy, so the last value is returned.

---

```javascript
console.log("" && 100);
```

Output

```
""
```

The empty string is falsy, so it is returned immediately.

---

## Real World Example

```javascript
isLoggedIn && showDashboard();
```

If `isLoggedIn` is false, `showDashboard()` is never called.

---

## Short-Circuit Evaluation

The `&&` operator stops as soon as it finds a falsy value.

This improves performance.

---

# 96. What Does the Logical OR (`||`) Operator Return?

## 📖 Definition

The `||` operator returns:

- The **first truthy value**, or
- The **last value** if all values are falsy.

---

## Example

```javascript
console.log(false || "Alex");
```

Output

```
Alex
```

---

```javascript
console.log("" || "Guest");
```

Output

```
Guest
```

---

## Real World Example

Default values:

```javascript
const username = input || "Guest";
```

If `input` is empty, `"Guest"` is used.

---

## Interview Tip

Remember:

```
&&

↓

First falsy

OR

Last truthy
```

```
||

↓

First truthy

OR

Last falsy
```

---

# 97. What Does the Nullish Coalescing Operator (`??`) Do?

## 📖 Definition

The `??` operator returns the right-hand value **only if** the left-hand value is:

- `null`
- `undefined`

It does **not** treat `0`, `false`, or `""` as missing values.

---

## Example

```javascript
const username = null;

console.log(username ?? "Guest");
```

Output

```
Guest
```

---

## Another Example

```javascript
console.log(0 ?? 100);
```

Output

```
0
```

Because `0` is **not** null or undefined.

---

## Compare with `||`

```javascript
console.log(0 || 100);
```

Output

```
100
```

`||` treats `0` as falsy.

---

```javascript
console.log(0 ?? 100);
```

Output

```
0
```

`??` only checks for `null` or `undefined`.

---

## Best Use Case

Default values where `0` or `false` are valid.

---

# 98. What is the Optional Chaining Operator (`?.`)?

## 📖 Definition

Optional chaining safely accesses nested object properties.

Instead of throwing an error when a property is missing, it returns:

```javascript
undefined
```

---

## Without Optional Chaining

```javascript
console.log(user.address.city);
```

If `address` doesn't exist:

```
TypeError
```

---

## With Optional Chaining

```javascript
console.log(user.address?.city);
```

Output

```
undefined
```

No error.

---

## Example

```javascript
const user = {
  name: "Alex"
};

console.log(user.address?.city);
```

Output

```
undefined
```

---

## Real World Example

API responses often contain optional fields.

Optional chaining prevents crashes when some data is missing.

---

# 99. What is the `typeof` Operator?

## 📖 Definition

`typeof` returns the data type of a value.

---

## Examples

```javascript
typeof "Alex"
```

Output

```
string
```

---

```javascript
typeof 100
```

↓

```
number
```

---

```javascript
typeof true
```

↓

```
boolean
```

---

```javascript
typeof undefined
```

↓

```
undefined
```

---

```javascript
typeof {}
```

↓

```
object
```

---

```javascript
typeof []
```

↓

```
object
```

Arrays are technically objects.

---

```javascript
typeof function () {}
```

↓

```
function
```

Functions have their own special return value.

---

## Famous JavaScript Quirk

```javascript
typeof null
```

Output

```
object
```

This is a long-standing JavaScript bug kept for backward compatibility.

---

## Real World Example

```javascript
if (typeof age === "number") {
    console.log("Valid age");
}
```

---

# 100. What is the `delete` Operator?

## 📖 Definition

The `delete` operator removes a property from an object.

It does **not** delete variables declared with `let`, `const`, or `var`.

---

## Example

```javascript
const user = {
  name: "Alex",
  age: 25
};

delete user.age;

console.log(user);
```

Output

```javascript
{
  name: "Alex"
}
```

The `age` property has been removed.

---

## Arrays

```javascript
const numbers = [10, 20, 30];

delete numbers[1];

console.log(numbers);
```

Output

```javascript
[10, empty, 30]
```

The array length does **not** change.

Because of this, `delete` is generally **not recommended for arrays**.

Instead, use:

```javascript
splice()
```

---

## Variables

```javascript
let age = 25;

delete age;
```

This does **not** work.

`delete` only removes object properties.

---

## Real World Example

```javascript
delete user.password;
```

Useful when sending user data to the frontend without exposing sensitive information.

---

# 🎯 Module Summary

After completing Questions **91–100**, you should understand:

- ✅ Strict equality (`===`)
- ✅ Strict inequality (`!==`)
- ✅ Operator precedence
- ✅ Operator associativity
- ✅ Logical AND (`&&`)
- ✅ Logical OR (`||`)
- ✅ Nullish coalescing (`??`)
- ✅ Optional chaining (`?.`)
- ✅ `typeof` operator
- ✅ `delete` operator

These concepts appear constantly in React, Node.js, backend APIs, and production JavaScript code. Mastering them will also make debugging much easier because many subtle bugs come from misunderstanding operator behavior, equality, and JavaScript's evaluation rules.


# 101. What is a conditional statement?

A **conditional statement** is a programming structure that allows your program to **make decisions** based on whether a condition is `true` or `false`.

Instead of executing every line of code, JavaScript checks a condition and decides **which block of code should run**.

Think of it like making decisions in real life.

### Real-Life Example

```
If it is raining
    Take an umbrella
Otherwise
    Wear sunglasses
```

The action depends on the condition.

Programming works exactly the same way.

---

## Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("You can vote.");
}
```

### Output

```
You can vote.
```

---

## Flow

```
Condition

↓

True?

↓

Yes
↓

Run Code

↓

No

↓

Skip Code
```

---

## Where are conditional statements used?

Almost every application uses them.

Examples

- Login systems
- Payment processing
- User authentication
- Shopping carts
- Weather apps
- Online exams
- ATM software
- Games
- Form validation

Without conditional statements, software cannot make decisions.

---

# 102. Why do we use conditional statements?

Imagine every program executed every line regardless of the situation.

A banking app would allow everyone to withdraw money.

A login page would log everyone in.

An e-commerce site would always apply discounts.

That would be complete chaos.

Conditional statements prevent this.

---

## They help programs

- Make decisions
- Validate user input
- Execute different logic
- Handle errors
- Protect data
- Improve performance
- Build business rules

---

## Example

```javascript
let password = "12345";

if (password === "12345") {
    console.log("Login Successful");
}
```

Output

```
Login Successful
```

---

Without the condition,

everyone would log in.

---

# 103. What is the syntax of an if statement?

The basic syntax is

```javascript
if (condition) {

    // Code to execute

}
```

---

### Example

```javascript
let marks = 90;

if (marks >= 35) {
    console.log("Pass");
}
```

Output

```
Pass
```

---

### Parts of an if statement

```javascript
if (marks >= 35) {

    console.log("Pass");

}
```

```
if
```

Keyword

```
(marks >= 35)
```

Condition

```
{
}
```

Block of code

---

# 104. How does an if statement work?

JavaScript evaluates the condition.

If it becomes

```
true
```

the block executes.

If it becomes

```
false
```

the block is skipped.

---

Example 1

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

Condition

```
20 >= 18

↓

true
```

Output

```
Adult
```

---

Example 2

```javascript
let age = 15;

if (age >= 18) {
    console.log("Adult");
}
```

Condition

```
15 >= 18

↓

false
```

Output

```
Nothing
```

The code inside the block never executes.

---

# 105. When should you use an if statement?

Use an `if` statement when you want to execute code **only if a condition is true**.

---

Examples

✅ Check login

```javascript
if (isLoggedIn) {

}
```

---

✅ Check age

```javascript
if (age >= 18) {

}
```

---

✅ Check stock

```javascript
if (stock > 0) {

}
```

---

✅ Check balance

```javascript
if (balance >= amount) {

}
```

---

## Rule

One condition.

One possible action.

---

# 106. What is an else statement?

The `else` block executes when the `if` condition is false.

Think of it as

```
Otherwise...
```

---

Syntax

```javascript
if (condition) {

}

else {

}
```

---

Example

```javascript
let age = 15;

if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");

}
```

Output

```
Minor
```

---

Flow

```
Condition

↓

True?

↓

Yes

↓

if block

↓

No

↓

else block
```

---

# 107. When is an else block executed?

The `else` block executes **only when every previous condition is false**.

---

Example

```javascript
let marks = 20;

if (marks >= 35) {

    console.log("Pass");

} else {

    console.log("Fail");

}
```

Condition

```
20 >= 35

↓

false
```

Output

```
Fail
```

---

Important

Only **one** block executes.

Never both.

---

# 108. What is an else if statement?

An `else if` allows JavaScript to check another condition when the previous one is false.

It lets you make multiple decisions.

---

Syntax

```javascript
if (condition1) {

}

else if (condition2) {

}

else {

}
```

---

Example

```javascript
let marks = 82;

if (marks >= 90) {

    console.log("Grade A");

} else if (marks >= 80) {

    console.log("Grade B");

} else {

    console.log("Grade C");

}
```

Output

```
Grade B
```

---

Real-Life Example

Movie Ticket

```
Age < 5

↓

Free

Age < 18

↓

₹100

Adult

↓

₹200
```

---

# 109. How are multiple else if conditions evaluated?

JavaScript checks conditions **from top to bottom**.

The **first true condition wins**.

After finding a true condition, JavaScript ignores the remaining conditions.

---

Example

```javascript
let number = 20;

if (number > 5) {

    console.log("Greater than 5");

} else if (number > 10) {

    console.log("Greater than 10");

}
```

Output

```
Greater than 5
```

Why?

```
20 > 5

↓

true
```

JavaScript stops immediately.

It never checks

```
20 > 10
```

---

Correct order

```javascript
if (number > 10)

else if (number > 5)
```

Always write **more specific conditions first**.

---

# 110. What happens if none of the conditions are true?

If every `if` and `else if` condition is false, JavaScript executes the `else` block.

---

Example

```javascript
let marks = 25;

if (marks >= 90) {

    console.log("A");

} else if (marks >= 80) {

    console.log("B");

} else if (marks >= 70) {

    console.log("C");

} else {

    console.log("Fail");

}
```

Output

```
Fail
```

---

If there is **no `else` block**, then nothing happens.

Example

```javascript
let age = 15;

if (age >= 18) {

    console.log("Adult");

}
```

Output

```
No Output
```

This is perfectly valid.

---

# 111. Can an `if` statement exist without an `else`?

**Yes.**

An `if` statement does **not** require an `else`.

If the condition is true, the code runs.

If the condition is false, JavaScript simply skips the block and continues executing the rest of the program.

---

Example

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome!");
}

console.log("Home Page");
```

Output

```
Welcome!
Home Page
```

---

Now change the value:

```javascript
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome!");
}

console.log("Home Page");
```

Output

```
Home Page
```

The `if` block is skipped, but the rest of the program continues normally.

---

# Interview Tips

✅ Use `if` when you have a single condition.

✅ Use `if...else` when there are two possible outcomes.

✅ Use `if...else if...else` for multiple conditions.

✅ Arrange conditions from **most specific** to **least specific**.

✅ Remember that JavaScript stops checking once it finds the **first true condition**.

---

# Key Takeaways

- A conditional statement lets programs make decisions.
- `if` executes code only when its condition is `true`.
- `else` runs when the `if` condition is `false`.
- `else if` allows checking multiple conditions.
- Conditions are evaluated from top to bottom.
- Only one matching branch executes in an `if...else if...else` chain.
- `if` can be used without `else` when no alternative action is needed.


# 112. Can an `else` exist without an `if`?

**No.**

An `else` block **must always belong to an `if` statement**.

Writing an `else` by itself causes a syntax error because JavaScript doesn't know which condition it belongs to.

---

## ❌ Incorrect

```javascript
else {
    console.log("Hello");
}
```

Output

```
SyntaxError
```

---

## ✅ Correct

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Output

```
Adult
```

---

## Rule

```
if

↓

optional else if

↓

optional else
```

An `else` can **never start a decision**.

---

# 113. What is a nested `if` statement?

A **nested `if`** means writing an `if` statement **inside another `if` statement**.

The inner `if` is checked **only if the outer `if` is true**.

---

## Syntax

```javascript
if (condition1) {

    if (condition2) {

    }

}
```

---

## Example

```javascript
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {

    if (isAdmin) {
        console.log("Admin Dashboard");
    }

}
```

Output

```
Admin Dashboard
```

---

### Flow

```
Logged In?

↓

Yes

↓

Admin?

↓

Yes

↓

Dashboard
```

---

## Real-world Example

Online Banking

```
Logged In?

↓

Yes

↓

Balance > Amount?

↓

Yes

↓

Withdraw Money
```

Multiple conditions depend on each other.

---

# 114. When should nested `if` statements be avoided?

Nested `if` statements are useful, but **too many levels make code difficult to read and maintain**.

---

## ❌ Bad Example

```javascript
if (user) {

    if (user.isLoggedIn) {

        if (user.isVerified) {

            if (user.isAdmin) {

                console.log("Welcome");

            }

        }

    }

}
```

This is difficult to follow.

---

## ✅ Better

```javascript
if (
    user &&
    user.isLoggedIn &&
    user.isVerified &&
    user.isAdmin
) {
    console.log("Welcome");
}
```

Much cleaner.

---

## Use nested `if` only when

- Conditions truly depend on previous conditions
- It improves readability
- There are only one or two levels

---

## Avoid when

- Nesting becomes very deep
- A logical operator (`&&`, `||`) makes the code simpler
- Guard clauses or early returns are clearer

---

# 115. What are common mistakes when writing conditional statements?

These mistakes appear frequently in interviews and production code.

---

## Mistake 1

Using `=` instead of `==` or `===`

❌

```javascript
if (age = 18)
```

This assigns 18 to `age`.

---

✅

```javascript
if (age === 18)
```

---

## Mistake 2

Using `==` unnecessarily

Prefer

```javascript
===
```

---

## Mistake 3

Wrong condition order

❌

```javascript
if (marks >= 50)

else if (marks >= 90)
```

The second condition is never reached.

---

Correct

```javascript
if (marks >= 90)

else if (marks >= 50)
```

---

## Mistake 4

Too many nested `if`s

Produces unreadable code.

---

## Mistake 5

Forgetting `break` inside `switch`

Leads to fall-through.

---

## Mistake 6

Comparing floating-point numbers directly

```javascript
0.1 + 0.2 === 0.3
```

Returns

```
false
```

---

# 116. What is the ternary (`?:`) operator?

The ternary operator is a **shorter way to write a simple `if...else`**.

It has three parts:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

---

## Example

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output

```
Adult
```

---

Equivalent

```javascript
let result;

if (age >= 18) {

    result = "Adult";

} else {

    result = "Minor";

}
```

---

# 117. When should you use the ternary operator instead of `if...else`?

Use it for **simple decisions that return one value**.

---

Good Examples

```javascript
const status = age >= 18 ? "Adult" : "Minor";
```

---

```javascript
const color = darkMode ? "black" : "white";
```

---

```javascript
const message = loggedIn ? "Welcome" : "Login";
```

---

Avoid it when multiple statements must execute.

---

# 118. When should you avoid using nested ternary operators?

Nested ternaries become confusing quickly.

---

❌ Bad

```javascript
let result =
age >= 18
? marks >= 40
? "Pass"
: "Fail"
: "Minor";
```

Most developers need to stop and mentally untangle it.

---

✅ Better

```javascript
if (age >= 18) {

    if (marks >= 40) {

        result = "Pass";

    } else {

        result = "Fail";

    }

} else {

    result = "Minor";

}
```

---

Rule

If readability suffers, use `if...else`.

---

# 119. Can a ternary operator return a value?

**Yes.**

Unlike an `if` statement, a ternary is an **expression**, meaning it evaluates to a value.

---

Example

```javascript
const age = 25;

const type = age >= 18 ? "Adult" : "Minor";

console.log(type);
```

Output

```
Adult
```

---

You can also return values directly.

```javascript
function canVote(age) {

    return age >= 18
        ? true
        : false;

}
```

---

# 120. What is the difference between an `if...else` statement and a ternary operator?

| if...else | Ternary |
|------------|----------|
| Statement | Expression |
| Can execute multiple statements | Returns one value |
| Easier for complex logic | Best for simple logic |
| More readable for large conditions | More concise |
| Can contain many blocks | Usually one expression |

---

Example

### if...else

```javascript
if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");

}
```

---

### Ternary

```javascript
console.log(
    age >= 18
        ? "Adult"
        : "Minor"
);
```

---

# 121. What is a `switch` statement?

A `switch` statement is another decision-making structure.

Instead of checking many `else if` conditions, it compares **one value against multiple possible cases**.

---

Example

```javascript
let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");

}
```

Output

```
Tuesday
```

---

# 122. When should you use a `switch` statement?

Use `switch` when **one variable can have many fixed values**.

---

Good Examples

- Days of week
- Months
- Menu options
- Keyboard shortcuts
- User roles
- Calculator operators

---

Instead of

```javascript
if(day===1)

else if(day===2)

else if(day===3)
```

Write

```javascript
switch(day)
```

Much cleaner.

---

# 123. How does a `switch` statement compare values?

A `switch` compares using **strict equality (`===`)**.

No type conversion occurs.

---

Example

```javascript
let value = "5";

switch (value) {

    case 5:
        console.log("Number");
        break;

    case "5":
        console.log("String");
        break;

}
```

Output

```
String
```

Because

```
"5" !== 5
```

---

# 124. What is a `case` in a `switch` statement?

A `case` represents **one possible value** that the `switch` expression can match.

---

Example

```javascript
let role = "admin";

switch (role) {

    case "admin":
        console.log("Full Access");
        break;

    case "user":
        console.log("Limited Access");
        break;

}
```

Each `case` is like asking:

```
Is the value equal to this?
```

---

# 125. What is the purpose of the `break` statement in a `switch`?

`break` tells JavaScript to **stop executing the switch** after a matching case.

Without it, execution continues into the following cases. This is called **fall-through**.

---

## ❌ Without `break`

```javascript
let day = 1;

switch (day) {

    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

}
```

Output

```
Monday
Tuesday
Wednesday
```

---

## ✅ With `break`

```javascript
let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

}
```

Output

```
Monday
```

---

# Interview Tips

- Use `if...else` for conditions involving ranges or complex logic.
- Use the ternary operator only for short, readable expressions.
- Avoid deeply nested ternary operators.
- Use `switch` when comparing one value against many fixed options.
- Remember that `switch` uses **strict equality (`===`)**.
- Don't forget `break`, unless you intentionally want fall-through behavior.

```


# 126. What happens if you omit `break`?

If you **omit the `break` statement**, JavaScript **does not stop** after executing the matched `case`.

Instead, it continues executing the next cases until it finds a `break` or reaches the end of the `switch`.

This behavior is called **fall-through**.

---

## Example

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    default:
        console.log("Invalid Day");
}
```

### Output

```
Tuesday
Wednesday
Invalid Day
```

Why?

- `day` matches `case 2`.
- There is **no `break`**.
- JavaScript continues executing every case below it.

---

## Correct Version

```javascript
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

Output

```
Tuesday
```

---

## Interview Tip

One of the most common JavaScript interview mistakes is forgetting `break`.

---

# 127. What is fall-through in a switch statement?

**Fall-through** is the behavior where JavaScript continues executing the next `case` statements after finding a match because no `break` was encountered.

---

Example

```javascript
let role = "admin";

switch (role) {

    case "admin":
        console.log("Admin");

    case "user":
        console.log("User");

    case "guest":
        console.log("Guest");
}
```

Output

```
Admin
User
Guest
```

---

### Why?

```
Admin matched

↓

No break

↓

Execute User

↓

No break

↓

Execute Guest
```

---

### Can fall-through be useful?

Yes.

Sometimes multiple cases should perform the same action.

Example

```javascript
let grade = "A";

switch (grade) {

    case "A":
    case "B":
        console.log("Excellent");
        break;

    case "C":
        console.log("Good");
        break;

    default:
        console.log("Needs Improvement");
}
```

Output

```
Excellent
```

Both `"A"` and `"B"` share the same code.

This is a valid and common use of fall-through.

---

# 128. What is the `default` case?

The `default` case is executed **when none of the cases match**.

Think of it as the `else` block of a `switch` statement.

---

Example

```javascript
let day = 9;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");

}
```

Output

```
Invalid Day
```

---

Flow

```
Check Case 1

↓

No

↓

Check Case 2

↓

No

↓

Run Default
```

---

# 129. Is the `default` case mandatory?

**No.**

A `switch` statement works perfectly without a `default` case.

---

Example

```javascript
let color = "Blue";

switch(color){

    case "Red":
        console.log("Stop");
        break;

    case "Green":
        console.log("Go");
        break;

}
```

Output

```
No Output
```

Nothing happens because no case matches.

---

### Best Practice

Although optional, **always include a `default` case** unless you have a good reason not to.

It helps:

- Handle unexpected values
- Prevent silent bugs
- Make debugging easier

Example

```javascript
default:
    console.log("Unknown value");
```

---

# 130. When is `switch` preferred over multiple `if...else if` statements?

Use `switch` when comparing **one variable** against many fixed values.

---

Good Examples

- Days of the week
- Months
- User roles
- Calculator operators
- Menu choices
- Keyboard shortcuts

---

Instead of

```javascript
if(day===1){

}
else if(day===2){

}
else if(day===3){

}
```

Use

```javascript
switch(day){

}
```

Much cleaner.

---

Don't use `switch` for

```javascript
marks > 90

age >=18

salary >50000
```

Because `switch` compares values using `===`.

Ranges should use `if...else`.

---

## Interview Rule

Use

- `switch` → fixed values
- `if...else` → conditions and ranges

---

# Module 5: Loops
# Questions 131–140

---

# 131. What is a loop?

A **loop** is a programming structure that repeats a block of code **multiple times** until a condition becomes false.

Without loops, you would have to write the same code repeatedly.

---

Example without loop

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

With a loop

```javascript
for(let i = 1; i <= 5; i++){

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

Real-world examples

- Printing a list of users
- Reading files
- Processing API data
- Rendering products
- Sending emails
- Looping through arrays

---

# 132. Why do we use loops?

Loops help us:

- Avoid repetitive code
- Process collections of data
- Save time
- Improve readability
- Automate repetitive tasks

---

Imagine printing numbers from 1 to 100.

Without a loop:

```javascript
console.log(1);
console.log(2);
...
console.log(100);
```

With a loop:

```javascript
for(let i = 1; i <= 100; i++){

    console.log(i);

}
```

One loop replaces 100 lines.

---

# 133. What are the different types of loops in JavaScript?

JavaScript provides several looping constructs.

### 1. `for`

Best when you know how many times to loop.

```javascript
for(let i = 0; i < 5; i++){

}
```

---

### 2. `while`

Runs as long as the condition is true.

```javascript
while(condition){

}
```

---

### 3. `do...while`

Runs at least once before checking the condition.

```javascript
do{

}while(condition);
```

---

### 4. `for...of`

Used to iterate over iterable values like arrays and strings.

```javascript
for(const value of array){

}
```

---

### 5. `for...in`

Used to iterate over object keys.

```javascript
for(const key in object){

}
```

---

# 134. What is the syntax of a `for` loop?

```javascript
for(initialization; condition; update){

    // code

}
```

---

Example

```javascript
for(let i = 1; i <= 5; i++){

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

Three Parts

```javascript
for(let i=1; i<=5; i++)
```

Initialization

```
let i = 1
```

Condition

```
i <= 5
```

Update

```
i++
```

---

Flow

```
Initialize

↓

Check Condition

↓

Run Code

↓

Update

↓

Repeat
```

---

# 135. When should you use a `for` loop?

Use a `for` loop when **you know the number of iterations**.

Examples

- Print 1–100
- Loop through an array
- Generate multiplication tables
- Pattern printing
- Counting

---

Example

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for(let i = 0; i < fruits.length; i++){

    console.log(fruits[i]);

}
```

---

# 136. What is a `while` loop?

A `while` loop executes **as long as the condition is true**.

The condition is checked **before** each iteration.

---

Syntax

```javascript
while(condition){

    // code

}
```

---

Example

```javascript
let i = 1;

while(i <= 5){

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

# 137. When should you use a `while` loop?

Use a `while` loop when **you don't know in advance how many times the loop should execute**.

Examples

- Reading user input until valid
- Waiting for a network response
- Game loops
- Reading files
- Retry mechanisms

---

Example

```javascript
let passwordCorrect = false;

while(!passwordCorrect){

    // Ask user again

}
```

The loop continues until the password becomes correct.

---

# 138. What is a `do...while` loop?

A `do...while` loop executes the code block **first**, then checks the condition.

This means it always runs **at least one time**.

---

Syntax

```javascript
do{

    // code

}while(condition);
```

---

Example

```javascript
let i = 1;

do{

    console.log(i);

    i++;

}while(i <= 5);
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

# 139. What is the difference between `while` and `do...while`?

| while | do...while |
|--------|------------|
| Checks condition first | Executes first, checks later |
| May execute zero times | Executes at least once |
| More commonly used | Less common |

---

Example

```javascript
let i = 10;

while(i < 5){

    console.log(i);

}
```

Output

```
No Output
```

---

Now

```javascript
let i = 10;

do{

    console.log(i);

}while(i < 5);
```

Output

```
10
```

Even though the condition is false, the loop runs once.

---

# 140. What is an infinite loop?

An **infinite loop** is a loop that never ends because its condition never becomes false.

---

Example

```javascript
while(true){

    console.log("Hello");

}
```

This runs forever.

---

Another common mistake

```javascript
let i = 1;

while(i <= 5){

    console.log(i);

}
```

Output

```
1
1
1
1
1
...
```

The variable `i` is never updated, so the condition is always true.

---

Correct

```javascript
let i = 1;

while(i <= 5){

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

# Interview Tips

- Use `switch` for fixed values and `if...else` for ranges.
- Always use `break` unless you intentionally want fall-through.
- Choose `for` when the number of iterations is known.
- Choose `while` when the stopping condition depends on runtime.
- Use `do...while` only when the code must execute at least once.
- Always ensure loop variables are updated to avoid infinite loops.
- Infinite loops are a common source of bugs, especially in servers and background processes.


# 141. How can you accidentally create an infinite loop?

An **infinite loop** happens when the loop's condition **never becomes false**.

The program keeps running forever (or until you stop it), often causing the browser to freeze or the CPU to spike. Computers are wonderfully obedient. If you accidentally tell them "never stop," they will happily comply.

---

## Common Mistake 1: Forgetting to Update the Loop Variable

❌ Incorrect

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

Output

```
1
1
1
1
...
```

The value of `i` never changes.

---

✅ Correct

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

## Common Mistake 2: Wrong Condition

❌

```javascript
let i = 1;

while (i >= 1) {
    i++;
}
```

The condition is always true.

---

## Common Mistake 3: Resetting the Variable

```javascript
let i = 1;

while (i <= 5) {
    i = 1;
}
```

The value never reaches 6.

---

## Common Mistake 4: `for` Loop Error

```javascript
for (let i = 1; i <= 10; ) {
    console.log(i);
}
```

Forgot `i++`.

---

## Interview Tip

Whenever writing a loop, ask yourself:

1. Where does it start?
2. When does it stop?
3. What changes every iteration?

---

# 142. What is the purpose of the `break` statement in loops?

`break` immediately stops the loop.

JavaScript exits the loop and continues with the next statement after it.

---

Example

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output

```
1
2
3
4
```

The loop ends as soon as `i` becomes 5.

---

## Real-world Uses

- Stop searching after finding an item.
- Exit when an error occurs.
- End processing early.
- Stop reading a file when the required data is found.

---

# 143. What is the purpose of the `continue` statement?

`continue` skips the **current iteration** and moves directly to the next one.

The loop itself continues running.

---

Example

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output

```
1
2
4
5
```

The number `3` is skipped.

---

## Common Uses

- Skip invalid data.
- Ignore empty values.
- Skip banned users.
- Skip negative numbers.

---

# 144. What is the difference between `break` and `continue`?

| break | continue |
|--------|----------|
| Stops the entire loop | Skips only the current iteration |
| Loop ends immediately | Loop continues |
| Used to exit early | Used to ignore one iteration |

---

### `break`

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    console.log(i);
}
```

Output

```
1
2
```

---

### `continue`

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output

```
1
2
4
5
```

---

## Interview Rule

- `break` → Stop looping.
- `continue` → Skip one iteration.

---

# 145. What is a nested loop?

A **nested loop** is a loop inside another loop.

The inner loop runs completely for every iteration of the outer loop.

---

Example

```javascript
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {

        console.log(i, j);

    }

}
```

Output

```
1 1
1 2
2 1
2 2
3 1
3 2
```

---

Flow

```
Outer Loop

↓

Inner Loop

↓

Inner finishes

↓

Outer continues
```

---

# 146. When are nested loops useful?

Nested loops are useful whenever you're working with **data inside data**.

Examples:

- Matrices (2D arrays)
- Chess boards
- Sudoku
- Pattern printing
- Tables
- Comparing every item with every other item
- Processing rows and columns

---

Example

```javascript
const matrix = [
    [1, 2],
    [3, 4]
];

for (let row of matrix) {

    for (let value of row) {

        console.log(value);

    }

}
```

Output

```
1
2
3
4
```

---

# 147. What is the `for...of` loop?

`for...of` is used to iterate over **iterable values**.

Examples:

- Arrays
- Strings
- Maps
- Sets

It gives you the **value**, not the index.

---

Example

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

Output

```
Apple
Banana
Mango
```

---

Another example

```javascript
const word = "Hello";

for (const letter of word) {
    console.log(letter);
}
```

Output

```
H
e
l
l
o
```

---

# 148. What is the `for...in` loop?

`for...in` is used to iterate over the **keys (property names)** of an object.

---

Example

```javascript
const user = {
    name: "Alex",
    age: 25,
    city: "Delhi"
};

for (const key in user) {

    console.log(key);

}
```

Output

```
name
age
city
```

---

To access values

```javascript
for (const key in user) {

    console.log(key, user[key]);

}
```

Output

```
name Alex
age 25
city Delhi
```

---

# 149. What is the difference between `for...of` and `for...in`?

| for...of | for...in |
|----------|----------|
| Iterates over values | Iterates over keys |
| Best for arrays | Best for objects |
| Cannot directly iterate plain objects | Designed for object properties |
| Returns actual values | Returns property names |

---

### `for...of`

```javascript
const numbers = [10, 20, 30];

for (const value of numbers) {
    console.log(value);
}
```

Output

```
10
20
30
```

---

### `for...in`

```javascript
const user = {
    name: "Alex",
    age: 25
};

for (const key in user) {
    console.log(key);
}
```

Output

```
name
age
```

---

## Interview Rule

- Arrays → `for...of`
- Objects → `for...in`

---

# 150. When should you avoid using `for...in`?

Avoid `for...in` for arrays.

---

Why?

It iterates over property names (indexes as strings) and can also include inherited enumerable properties.

---

Instead of

```javascript
const numbers = [10, 20, 30];

for (const index in numbers) {
    console.log(index);
}
```

Output

```
0
1
2
```

---

Use

```javascript
for (const value of numbers) {
    console.log(value);
}
```

Output

```
10
20
30
```

---

## Best Practice

| Data Structure | Loop |
|---------------|------|
| Array | `for...of` |
| Object | `for...in` |
| Array with index | `for` or `entries()` |
| String | `for...of` |

---

# Module 6: Functions
# Questions 151–160

---

# 151. What is a function?

A **function** is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, you write it once and call it whenever needed.

---

Example

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Output

```
Hello
```

---

Real-world examples

- Login
- Payment
- Sending emails
- Validating forms
- Calculating totals
- Formatting dates

Almost every feature in an application is built using functions.

---

# 152. Why do we use functions?

Functions help us:

- Reuse code
- Reduce duplication
- Improve readability
- Make testing easier
- Organize programs
- Simplify maintenance

---

Without a function

```javascript
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
```

With a function

```javascript
function welcome() {
    console.log("Welcome");
}

welcome();
welcome();
welcome();
```

---

# 153. What are the advantages of using functions?

Functions make code:

- Reusable
- Cleaner
- Easier to debug
- Easier to test
- Easier to maintain
- Modular
- Scalable

---

Example

```javascript
function calculateTax(price) {
    return price * 0.18;
}
```

Now every part of your application can reuse this function instead of rewriting the calculation.

---

# 154. What is the syntax of a function declaration?

```javascript
function functionName(parameters) {

    // code

    return value;

}
```

---

Example

```javascript
function greet(name) {
    console.log("Hello", name);
}

greet("Alex");
```

Output

```
Hello Alex
```

---

# 155. What is a function definition?

A **function definition** is the code that describes what the function does.

Defining a function does **not** execute it.

---

Example

```javascript
function add(a, b) {
    return a + b;
}
```

This function now exists in memory, but nothing happens until it is called.

---

# 156. What is a function call (invocation)?

Calling a function means telling JavaScript to execute it.

---

Example

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Here, `greet()` is the function call.

Output

```
Hello
```

---

# 157. What happens when a function is called?

When a function is called:

1. JavaScript creates a new execution context.
2. Parameters receive argument values.
3. The function body executes.
4. A value is returned (if `return` is used).
5. Control returns to the caller.

---

Example

```javascript
function square(number) {
    return number * number;
}

const result = square(5);

console.log(result);
```

Output

```
25
```

---

# 158. What is the difference between defining and calling a function?

| Defining | Calling |
|----------|----------|
| Creates the function | Executes the function |
| Runs once during program setup | Can run many times |
| Doesn't execute the code | Executes the code inside |

---

Example

Definition

```javascript
function greet() {
    console.log("Hello");
}
```

Call

```javascript
greet();
```

---

# 159. Can a function exist without being called?

**Yes.**

A function can be defined and never executed.

---

Example

```javascript
function test() {
    console.log("Hello");
}
```

Output

```
No Output
```

Because nobody called the function.

---

# 160. Can a function return nothing?

Yes.

If a function does not use `return`, JavaScript automatically returns `undefined`.

---

Example

```javascript
function greet() {
    console.log("Hello");
}

const result = greet();

console.log(result);
```

Output

```
Hello
undefined
```

---

## Interview Tips

- A function is reusable code that performs one task.
- Defining a function is different from calling it.
- Every function call creates a new execution context.
- If no value is returned explicitly, JavaScript returns `undefined`.
- Keep functions small and focused on a single responsibility. Large "do everything" functions become nightmares to debug, and software engineering already provides enough nightmares without volunteering for extras.


# 161. What is a function declaration?

A **function declaration** is the standard way to define a function using the `function` keyword followed by a function name.

---

## Syntax

```javascript
function functionName(parameters) {
    // code
}
```

---

## Example

```javascript
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Alex"));
```

Output

```
Hello Alex
```

---

## Characteristics

- Has a name.
- Can be called before it appears in the code (because it is hoisted).
- Best for reusable functions.

---

## Interview Tip

Most utility functions in projects are written as function declarations.

---

# 162. What is a function expression?

A **function expression** is a function assigned to a variable.

The function becomes the value of that variable.

---

## Syntax

```javascript
const greet = function () {
    console.log("Hello");
};
```

---

## Example

```javascript
const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));
```

Output

```
30
```

---

## Characteristics

- Stored in a variable.
- Can be anonymous or named.
- Not fully hoisted like function declarations.

---

# 163. What is the difference between a function declaration and a function expression?

| Function Declaration | Function Expression |
|----------------------|---------------------|
| Defined with `function name()` | Assigned to a variable |
| Fully hoisted | Variable is hoisted, function is not |
| Can be called before declaration | Must be defined before calling |
| Better for reusable functions | Better when passing functions around |

---

### Function Declaration

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Works because of hoisting.

---

### Function Expression

```javascript
sayHello();

const sayHello = function () {
    console.log("Hello");
};
```

Output

```
ReferenceError
```

---

# 164. Which one is hoisted?

### Function Declaration

✅ Completely hoisted.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Works.

---

### Function Expression

```javascript
greet();

const greet = function () {};
```

Does not work.

The variable exists but cannot be used before initialization.

---

## Interview Rule

- Function declaration → Hoisted.
- Function expression → Not callable before initialization.

---

# 165. When should you use a function expression?

Use function expressions when:

- Passing functions as arguments.
- Assigning functions to variables.
- Creating callbacks.
- Working with closures.
- Using higher-order functions.

---

Example

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function (num) {
    console.log(num);
});
```

---

## Best Practice

Use function expressions when the function is closely tied to a specific variable or operation.

---

# Anonymous Functions

---

# 166. What is an anonymous function?

An **anonymous function** is a function **without a name**.

---

Example

```javascript
const greet = function () {
    console.log("Hello");
};
```

The function itself has no name.

---

Anonymous functions are often used only once.

---

# 167. Where are anonymous functions commonly used?

Anonymous functions are commonly used in:

- Callbacks
- Event listeners
- Array methods
- Promises
- Timers

---

Example

```javascript
setTimeout(function () {
    console.log("Done");
}, 1000);
```

---

Another example

```javascript
numbers.map(function (num) {
    return num * 2;
});
```

---

# 168. Can anonymous functions be assigned to variables?

Yes.

This is one of their most common uses.

---

Example

```javascript
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 5));
```

Output

```
20
```

---

# 169. What are the advantages of anonymous functions?

Advantages:

- Short and concise.
- Perfect for callbacks.
- Avoid unnecessary global names.
- Easy to pass as arguments.
- Great for one-time operations.

---

Example

```javascript
button.addEventListener("click", function () {
    console.log("Clicked");
});
```

---

# 170. What are the disadvantages of anonymous functions?

Disadvantages:

- Harder to debug.
- Stack traces are less descriptive.
- Cannot call themselves unless assigned.
- Difficult to reuse.

---

Named function

```javascript
function calculateTotal() {}
```

Error logs clearly show:

```
calculateTotal()
```

Anonymous function errors often provide less helpful stack traces.

---

# Arrow Functions

---

# 171. What is an arrow function?

An arrow function is a shorter syntax for writing functions.

Introduced in ES6.

---

Syntax

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

Example

```javascript
const square = (n) => n * n;

console.log(square(5));
```

Output

```
25
```

---

# 172. Why were arrow functions introduced?

Arrow functions were introduced to:

- Reduce boilerplate.
- Make callbacks cleaner.
- Provide lexical `this`.
- Improve readability.

---

Instead of

```javascript
function (x) {
    return x * 2;
}
```

Use

```javascript
x => x * 2
```

Much shorter.

---

# 173. What is the syntax of an arrow function?

No parameters

```javascript
const hello = () => {
    console.log("Hello");
};
```

---

One parameter

```javascript
const square = number => number * number;
```

---

Multiple parameters

```javascript
const add = (a, b) => a + b;
```

---

Multiple statements

```javascript
const divide = (a, b) => {
    const result = a / b;
    return result;
};
```

---

# 174. How is an arrow function different from a normal function?

| Normal Function | Arrow Function |
|-----------------|----------------|
| Has its own `this` | Uses lexical `this` |
| Has `arguments` | No `arguments` object |
| Can be constructors | Cannot be constructors |
| More verbose | Shorter syntax |

---

Example

```javascript
const add = (a, b) => a + b;
```

Cleaner than

```javascript
function add(a, b) {
    return a + b;
}
```

---

# 175. Do arrow functions have their own `this`?

No.

Arrow functions inherit `this` from the surrounding scope.

This is called **lexical `this`**.

---

Example

```javascript
const user = {

    name: "Alex",

    show() {

        setTimeout(() => {

            console.log(this.name);

        }, 1000);

    }

};

user.show();
```

Output

```
Alex
```

The arrow function uses the `this` value from `show()`.

---

## Interview Tip

Lexical `this` is one of the biggest reasons arrow functions exist.

---

# 176. Can arrow functions be used as constructors?

No.

Arrow functions cannot be called with `new`.

---

Example

```javascript
const Person = () => {};

const user = new Person();
```

Output

```
TypeError
```

---

Use a normal function or a class instead.

---

# 177. Can arrow functions use the `arguments` object?

No.

Arrow functions do not have their own `arguments` object.

---

Example

```javascript
const test = () => {

    console.log(arguments);

};
```

Output

```
ReferenceError
```

---

Instead, use **rest parameters**.

```javascript
const test = (...args) => {

    console.log(args);

};

test(1, 2, 3);
```

Output

```
[1, 2, 3]
```

---

# 178. When should you use arrow functions?

Use arrow functions for:

- Callbacks
- Array methods
- Promise chains
- Small helper functions
- Event handlers that need lexical `this`
- Functional programming

---

Example

```javascript
const doubled = numbers.map(num => num * 2);
```

---

# 179. When should you avoid arrow functions?

Avoid arrow functions when you need:

- Your own `this`
- A constructor
- The `arguments` object
- Object methods that rely on dynamic `this`

---

Avoid

```javascript
const user = {

    name: "Alex",

    show: () => {

        console.log(this.name);

    }

};
```

Output

```
undefined
```

Because `this` does not refer to `user`.

---

Correct

```javascript
const user = {

    name: "Alex",

    show() {

        console.log(this.name);

    }

};
```

---

# 180. What are the advantages of arrow functions?

Arrow functions provide:

- Shorter syntax.
- Cleaner callback code.
- Lexical `this`.
- Better readability for small functions.
- Excellent support for functional programming.

---

Example

Without arrow function

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(function (num) {
    return num * 2;
});
```

With arrow function

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
```

Both produce

```
[2, 4, 6]
```

The arrow version is shorter and easier to scan.

---

# Interview Summary

### Function Declaration
- Fully hoisted.
- Best for reusable functions.

### Function Expression
- Assigned to variables.
- Useful for callbacks and closures.
- Not callable before initialization.

### Anonymous Function
- No name.
- Common in callbacks and event handlers.
- Great for one-time use.

### Arrow Function
- Short syntax.
- Lexical `this`.
- No `arguments`.
- Cannot be constructors.
- Ideal for callbacks, array methods, and functional-style code.
- Avoid for object methods or constructors that rely on their own `this`.

For roles like Alignerr or senior JavaScript interviews, interviewers often care less about whether you *know* arrow functions exist and more about whether you can explain **why `this` behaves differently** and choose the right function type for the situation. That's where many candidates discover JavaScript has a long memory for tiny mistakes.



# Parameters & Arguments (Questions 181–190)

---

# 181. What is a parameter?

A **parameter** is a variable declared in a function definition that receives data when the function is called.

Think of a parameter as an **empty placeholder** waiting for a value.

---

## Syntax

```javascript
function greet(name) {

    console.log(name);

}
```

Here,

```javascript
name
```

is the **parameter**.

---

## Example

```javascript
function greet(name) {

    console.log(`Hello ${name}`);

}

greet("Alex");
```

Output

```
Hello Alex
```

Here:

```
name
```

is the parameter.

---

## Real-world Example

```javascript
function calculateTax(price) {

    return price * 0.18;

}
```

`price` is a parameter.

The function can now calculate tax for **any** price.

---

## Interview Tip

Parameters are declared when writing the function.

---

# 182. What is an argument?

An **argument** is the actual value passed to a function when calling it.

---

Example

```javascript
function greet(name){

    console.log(name);

}

greet("Alex");
```

```
Parameter → name

Argument → "Alex"
```

---

Another Example

```javascript
function add(a, b){

    return a + b;

}

add(10, 20);
```

```
Parameters

a
b

Arguments

10
20
```

---

## Interview Tip

Arguments are supplied when the function is called.

---

# 183. What is the difference between parameters and arguments?

| Parameter | Argument |
|------------|----------|
| Declared in the function definition | Passed during the function call |
| Placeholder | Actual value |
| Exists inside the function | Exists at the call site |

---

Example

```javascript
function multiply(x, y){

    return x * y;

}

multiply(5, 6);
```

```
Parameters

x
y

Arguments

5
6
```

---

Easy way to remember

```
Parameter = Placeholder

Argument = Real Value
```

---

# 184. What happens if fewer arguments are passed than parameters?

Missing arguments automatically become **`undefined`**.

---

Example

```javascript
function greet(name, city){

    console.log(name);

    console.log(city);

}

greet("Alex");
```

Output

```
Alex

undefined
```

---

Another Example

```javascript
function add(a, b){

    console.log(a + b);

}

add(5);
```

Output

```
NaN
```

Because

```
5 + undefined

↓

NaN
```

---

## Best Practice

Use default parameters whenever appropriate.

---

# 185. What happens if more arguments are passed than parameters?

JavaScript ignores extra arguments unless you explicitly access them.

---

Example

```javascript
function greet(name){

    console.log(name);

}

greet("Alex", 25, "Delhi");
```

Output

```
Alex
```

The extra values are ignored.

---

If you want all arguments, use **rest parameters**.

```javascript
function show(...values){

    console.log(values);

}

show(1,2,3,4,5);
```

Output

```
[1,2,3,4,5]
```

---

## Interview Tip

JavaScript does **not** throw an error for extra arguments.

---

# 186. What are default parameters?

Default parameters provide a value when an argument is not supplied.

---

Syntax

```javascript
function greet(name = "Guest"){

}
```

---

Example

```javascript
function greet(name = "Guest"){

    console.log(`Hello ${name}`);

}

greet();

greet("Alex");
```

Output

```
Hello Guest

Hello Alex
```

---

Without default parameters

```javascript
function greet(name){

    console.log(name);

}

greet();
```

Output

```
undefined
```

---

# 187. Why are default parameters useful?

They make functions safer and easier to use.

Benefits:

- Prevent `undefined`.
- Reduce extra `if` statements.
- Make APIs easier to use.
- Provide sensible fallback values.

---

Instead of

```javascript
function greet(name){

    if(name===undefined){

        name="Guest";

    }

}
```

Use

```javascript
function greet(name="Guest"){

}
```

Cleaner and easier to read.

---

Real-world Example

```javascript
function createUser(role="User"){

    console.log(role);

}
```

Output

```
User
```

if no role is provided.

---

# 188. What are rest parameters?

Rest parameters collect **multiple arguments into a single array**.

They are written using `...`.

---

Syntax

```javascript
function test(...values){

}
```

---

Example

```javascript
function total(...numbers){

    let sum = 0;

    for(const number of numbers){

        sum += number;

    }

    return sum;

}

console.log(total(10,20,30));
```

Output

```
60
```

---

Another Example

```javascript
function names(...people){

    console.log(people);

}

names("Alex","John","Sara");
```

Output

```
["Alex","John","Sara"]
```

---

## Important Rules

Must be the **last parameter**.

Correct

```javascript
function test(a,b,...rest){}
```

Wrong

```javascript
function test(...rest,a){}
```

---

# 189. What is the difference between rest parameters and the `arguments` object?

| Rest Parameters | arguments Object |
|-----------------|------------------|
| Real array | Array-like object |
| Introduced in ES6 | Available in normal functions |
| Works in arrow functions | Not available in arrow functions |
| Supports array methods | Needs conversion for array methods |
| Cleaner syntax | Older approach |

---

### Rest Parameter

```javascript
function test(...args){

    console.log(args);

}

test(1,2,3);
```

Output

```
[1,2,3]
```

---

### arguments Object

```javascript
function test(){

    console.log(arguments);

}

test(1,2,3);
```

Output

```
Arguments(3)
```

---

## Which should you use?

Always prefer **rest parameters** in modern JavaScript.

They are simpler, clearer, and work naturally with array methods.

---

# 190. What is the spread operator?

The **spread operator (`...`)** expands an iterable into individual values.

Although it uses the same `...` syntax as rest parameters, it serves the opposite purpose.

- **Rest** → Collects multiple values into one array.
- **Spread** → Expands one array (or iterable) into multiple values.

---

## Example 1: Copy an Array

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);
```

Output

```
[1, 2, 3]
```

---

## Example 2: Merge Arrays

```javascript
const arr1 = [1, 2];

const arr2 = [3, 4];

const result = [...arr1, ...arr2];

console.log(result);
```

Output

```
[1, 2, 3, 4]
```

---

## Example 3: Pass Array Elements as Function Arguments

```javascript
const numbers = [10, 20];

function add(a, b){

    return a + b;

}

console.log(add(...numbers));
```

Output

```
30
```

Without spread, you would pass the whole array as one argument, which is not what `add` expects.

---

## Example 4: Copy an Object

```javascript
const user = {

    name: "Alex",

    age: 25

};

const copy = {

    ...user

};

console.log(copy);
```

Output

```
{
  name: "Alex",
  age: 25
}
```

---

## Example 5: Merge Objects

```javascript
const user = {

    name: "Alex"

};

const address = {

    city: "Delhi"

};

const profile = {

    ...user,

    ...address

};

console.log(profile);
```

Output

```javascript
{
    name: "Alex",
    city: "Delhi"
}
```

---

# Rest vs Spread

| Rest (`...`) | Spread (`...`) |
|---------------|----------------|
| Collects values | Expands values |
| Used in function parameters | Used in function calls, arrays, and objects |
| Produces an array | Produces individual values |

---

## Example

```javascript
function print(...values){

    console.log(values);

}

const numbers = [1,2,3];

print(...numbers);
```

Flow

```
Spread

[1,2,3]

↓

1,2,3

↓

Rest

↓

[1,2,3]
```

The same `...` syntax performs two opposite jobs depending on where it is used.

---

# Interview Summary

### Parameters
- Variables declared in a function definition.

### Arguments
- Actual values passed during a function call.

### Default Parameters
- Provide fallback values when arguments are missing.

### Rest Parameters (`...`)
- Collect multiple arguments into an array.
- Must be the last parameter.
- Preferred over `arguments`.

### Spread Operator (`...`)
- Expands arrays, strings, or objects into individual values.
- Commonly used for copying and merging arrays or objects, and for passing array elements as function arguments.

### Quick Memory Trick

```
Parameter → Placeholder

Argument → Actual Value

Rest → Collect

Spread → Expand
```

Mastering these concepts pays off well beyond interviews. Modern React, Node.js, and even many debugging tasks lean heavily on rest and spread syntax. They look deceptively simple, which is exactly how JavaScript likes to lure developers into confidence before handing them an unexpected bug at 2 a.m.


# Return Values

---

# 191. What is the `return` statement?

The `return` statement is used to **send a value back** from a function to the place where the function was called.

Think of a function like a vending machine.

```
Input
↓

Function

↓

Output (return)
```

Without `return`, a function can perform work, but it cannot give the result back to the caller.

---

## Syntax

```javascript
function add(a, b) {
    return a + b;
}
```

---

## Example

```javascript
function multiply(a, b) {
    return a * b;
}

const result = multiply(5, 4);

console.log(result);
```

Output

```
20
```

---

## Why is `return` important?

Without `return`

```javascript
function multiply(a, b) {
    a * b;
}

const result = multiply(5, 4);

console.log(result);
```

Output

```
undefined
```

Because the function calculated the value but never returned it.

---

## Interview Tip

`console.log()` displays a value.

`return` sends a value back.

These are **not** the same thing.

---

# 192. Can a function have multiple `return` statements?

Yes.

A function can contain **many** `return` statements.

However, **only one of them executes** during a single function call.

---

Example

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

console.log(checkNumber(5));
```

Output

```
Positive
```

---

Another example

```javascript
console.log(checkNumber(-2));
```

Output

```
Negative
```

---

## Interview Tip

Multiple `return` statements are common and often make code easier to read.

---

# 193. What happens after a `return` statement executes?

Once JavaScript executes a `return` statement:

- The function **immediately stops**.
- Any code below `return` is **never executed**.
- Control goes back to the caller.

---

Example

```javascript
function test() {

    console.log("Start");

    return;

    console.log("End");

}

test();
```

Output

```
Start
```

`"End"` never prints.

---

Another example

```javascript
function add(a, b) {

    return a + b;

    console.log("Hello");

}
```

The `console.log()` is unreachable.

---

## Best Practice

Never place important code after a `return`.

---

# 194. What value is returned if a function has no `return` statement?

JavaScript automatically returns:

```javascript
undefined
```

---

Example

```javascript
function greet() {

    console.log("Hello");

}

const result = greet();

console.log(result);
```

Output

```
Hello

undefined
```

---

Even an empty function returns `undefined`.

```javascript
function test() {

}

console.log(test());
```

Output

```
undefined
```

---

## Interview Tip

Every JavaScript function returns **something**.

If you don't return a value, JavaScript returns `undefined`.

---

# 195. Can a function return another function?

Yes.

Functions are **first-class citizens** in JavaScript.

That means they can:

- Be stored in variables.
- Be passed as arguments.
- Be returned from other functions.

---

Example

```javascript
function createGreeting() {

    return function(name) {

        return `Hello ${name}`;

    };

}

const greet = createGreeting();

console.log(greet("Alex"));
```

Output

```
Hello Alex
```

---

Another example

```javascript
function createMultiplier(number) {

    return function(value) {

        return value * number;

    };

}

const double = createMultiplier(2);

console.log(double(5));
```

Output

```
10
```

---

## Real-world Uses

- Closures
- React Hooks
- Middleware
- Function factories
- Currying
- Memoization

---

# Higher-Order Functions

---

# 196. What is a higher-order function?

A **higher-order function** is a function that:

- Accepts another function as an argument, **or**
- Returns another function.

Sometimes it does both.

---

Example

```javascript
function execute(fn) {

    fn();

}
```

`execute()` is a higher-order function because it receives another function.

---

Another example

```javascript
function createGreeting() {

    return function() {

        console.log("Hello");

    };

}
```

This is also a higher-order function because it returns a function.

---

## Interview Definition

> A higher-order function is a function that takes another function as an argument or returns another function.

---

# 197. What is a callback function?

A **callback function** is a function passed into another function to be executed later.

---

Example

```javascript
function greet(name) {

    console.log(`Hello ${name}`);

}

function execute(callback) {

    callback("Alex");

}

execute(greet);
```

Output

```
Hello Alex
```

---

Another example

```javascript
setTimeout(function() {

    console.log("Done");

}, 1000);
```

The anonymous function is the callback.

---

## Real-world Examples

- Button click events
- API requests
- File reading
- Database queries
- Timers

---

# 198. Why are callback functions useful?

Callbacks make programs:

- Flexible
- Reusable
- Asynchronous
- Event-driven

---

Example

Without callbacks

```javascript
calculateAddition();

calculateSubtraction();

calculateMultiplication();
```

Lots of repeated code.

---

With callbacks

```javascript
function calculate(a, b, operation) {

    return operation(a, b);

}
```

Now any operation can be passed.

```javascript
calculate(10, 20, add);

calculate(10, 20, multiply);
```

Much more reusable.

---

## Real-world Uses

- Event listeners
- `setTimeout`
- Promises
- Express middleware
- Node.js file system APIs

---

# 199. Give examples of built-in higher-order functions in JavaScript.

Many JavaScript methods accept callback functions.

---

## `forEach()`

```javascript
numbers.forEach(number => {

    console.log(number);

});
```

---

## `map()`

```javascript
const doubled = numbers.map(number => number * 2);
```

---

## `filter()`

```javascript
const adults = users.filter(user => user.age >= 18);
```

---

## `find()`

```javascript
const user = users.find(user => user.id === 1);
```

---

## `reduce()`

```javascript
const total = numbers.reduce(

    (sum, value) => sum + value,

    0

);
```

---

## `sort()`

```javascript
numbers.sort((a, b) => a - b);
```

---

## `setTimeout()`

```javascript
setTimeout(() => {

    console.log("Hello");

}, 1000);
```

---

## `setInterval()`

```javascript
setInterval(() => {

    console.log("Running");

}, 1000);
```

---

These are all higher-order functions because they receive another function.

---

# 200. Why are higher-order functions important in modern JavaScript?

Higher-order functions are one of the foundations of modern JavaScript.

Without them, libraries and frameworks like React, Node.js, Express, and many browser APIs would be far more verbose and repetitive.

---

## They help us write:

### Cleaner Code

```javascript
users.map(user => user.name);
```

instead of manual loops.

---

### Reusable Code

```javascript
calculate(a, b, operation);
```

One function can perform many operations.

---

### Functional Programming

Methods like:

- `map()`
- `filter()`
- `reduce()`

allow you to transform data without unnecessary loops.

---

### Event-Driven Programming

```javascript
button.addEventListener("click", handler);
```

The handler is a callback.

---

### Asynchronous Programming

```javascript
setTimeout(callback, 1000);
```

```javascript
fetch(url)
    .then(callback);
```

Callbacks are the foundation that later evolved into Promises and `async/await`.

---

### Server Development (Node.js)

```javascript
fs.readFile("file.txt", callback);
```

Express middleware also relies on higher-order functions.

---

## Interview Summary

### `return`
- Sends a value back from a function.
- Stops function execution immediately.
- If omitted, JavaScript returns `undefined`.

### Functions Can Return Functions
- Yes.
- Commonly used with closures, factories, and currying.

### Higher-Order Functions
- Take a function as an argument or return a function.
- Enable reusable and composable code.

### Callback Functions
- Functions passed into other functions.
- Used heavily in events, asynchronous operations, and array methods.

### Common Built-in Higher-Order Functions

- `forEach()`
- `map()`
- `filter()`
- `find()`
- `reduce()`
- `sort()`
- `setTimeout()`
- `setInterval()`

---

# Final Function Module Recap

By this point, you should be comfortable with:

- Function declarations and expressions
- Anonymous functions
- Arrow functions
- Parameters vs arguments
- Default parameters
- Rest parameters
- Spread operator
- Return values
- Callback functions
- Higher-order functions

These concepts are not just interview material. They appear constantly in React components, Node.js APIs, Express middleware, asynchronous JavaScript, and production codebases. If you understand **why** they work instead of memorizing definitions, you'll be in a much stronger position for engineering interviews where the discussion quickly moves from "What is a callback?" to "How would you design this feature using callbacks, promises, or higher-order functions?" Humans love turning simple ideas into architecture diagrams. JavaScript quietly supports all three.
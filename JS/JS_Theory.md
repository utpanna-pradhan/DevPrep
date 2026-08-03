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
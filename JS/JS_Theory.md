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

# 4. What are Variables?
A variable is a named container that stores data in memory so it can be accessed and modified during program execution.

Why Do We Need Variables?

Without variables:
```javascript
console.log("John");
console.log("John");
console.log("John");
```
With variables:
```js
let name = "John";

console.log(name);
console.log(name);
console.log(name);
```
If the value changes, you only update it once.
- Declaration
  Creating the variable.
```js
    let age;
```
- Initiallizing the variable
 ```js
 let age=25;
 ```

 - Assignment 
 changing the value of the variable
  ```js
  age = 28;
  ```
  - variables store different types of data
  ```js
  let age=20;
  let name="Jina";
  let isStudent =true;
  let arr=[1,2,3,4];
  let user={
    id:1,
    name:"Jina"

  }
```

- variables can change it's data type.
```js
let x=10;
x="Jina"
x=true;
```

# Difference Between var, let, and const
comparison Table
                |     var  |        let      |   const  |
                | -------- |      --------   | -------- |
Scope           | Function |        Block    | Block    |
Redeclaration   |    Yes   |         No      |   No     |
Reassignment    |    Yes   |         Yes     |   No     |
Hoisted         |    Yes   |        Yes      |    Yes   |
Initialized     | undefined|         No      |   No     |
(during hoisting)
modern usage    |    Avoid  |when value change| Default  |
 

- var
```js
var age=28;
var age=30;
age=33
//everything is allowed
```
 
problem with var 
```js
if(true){
    var x=10;
}
console.log(x)
```
// output=10
as var is function scopped not block scopped

- let
```js
let age=20;
age=20
```
//allowed reassignment

```js
let age=20;
let age=30;
//error as redeclaration is not allowed
```
```js
if (true) {
    let x = 10;
}

console.log(x);
//reference Effor as let is blocked scope
```

- const 
```js
const PI = 3.14;
PI = 5;
//TypeError
```
Cannot reassign.
- we can modify a const object
```js
const user = {
    name: "John"
};

user.name = "Peter";

console.log(user);
//{ name: "Peter"}
//Because const protects the reference, not the object's contents.
```
- Modern best practice:

Use const by default.
Use let only when the value needs to change.
Avoid var in new code.

# What are Data Types?
- A data type defines the kind of value a variable can store and determines what operations can be performed on it.
- Two types-

├── Primitive

└── Non-Primitive (Reference)

Primitive Data Types
-There are 7 primitive data types
```js
let age = 20; //Number
let name = "John"; //String
let isLoggedIn = true; //Boolean
let x;  //Undefined
let user = null; //Null
let id = Symbol("id"); //Symbol -Used for creating unique identifiers.
let num = 12345678901234567890n; //BigInt
```

# Primitive vs Non-Primitive Data Types
Primitive Types
- Immutable (the value itself cannot be changed).call. by value
- Stored by value.
- Compared by value.
- Types
Number , String , Boolean , Null , Undefined , Symbol , BigInt
- 
```js
let a = 10;

let b = a;

b = 20;

console.log(a);
//output-10
//Changing b does not affect a because primitives are copied by value.
```
```js
let a = 10;

let b = 10;

console.log(a === b);
//true
//Primitive values are compared directly.
```

Non-Primitive Types
- Mutable.
- Stored by reference.
- Compared by reference.
- Types -
Object , Array , Function , Date , Map , Set , RegExp
- 
```js
let obj1 = {
    name: "John"
};

let obj2 = obj1;

obj2.name = "Peter";

console.log(obj1.name);
//Peter
//Both variables point to the same object in memory.
//user1 ──┐
//        ├──► Object
//user2 ──┘
```
```js
let a = {
    x: 1
};

let b = {
    x: 1
};

console.log(a === b);
//false
//Different object references.

```
- Arrays are Objects.
```js
typeof []
//object
```
- Functions are objects.
```js
typeof function(){}
//"function"
//functions are a special kind of object
```

#  What is typeof?
- typeof is a JavaScript operator that returns a string indicating the type of a value.
- typeof value 
or
typeof(value)
```js
typeof 100  //"number"
typeof "Hello" //"string"
typeof true  //"boolean"

let x;
typeof x //"undefined"
typeof Symbol() //"symbol"
typeof 100n  //"bigint"
typeof {} //"object"
typeof [] //"object"
typeof function(){}  //"function"
typeof null //"object"
//This is a historical bug in JavaScript.
// In the first implementation of JavaScript, values were represented with type tags. null was incorrectly tagged in a way that made typeof report it as an object. The mistake became part of the language, and changing it now would break existing code.
//"typeof null returns 'object' due to a legacy bug, but null is a primitive value."
```
```js
Array.isArray([])
//true , Better Way to Detect Arrays
value === null
//Better Way to Detect Null
```
# Difference Between null and undefined

- undefined means a variable has been declared but has not yet been assigned a value. null is an intentional assignment representing "no value" or "empty value."

```js
let age;
console.log(age);
//undefined
//JavaScript assigns undefined automatically.
let user = null;
// the programmer explicitly says:
// There is currently no value.
```
```js
let x;

console.log(x);
//undefined
let person = null;

console.log(person);
//null
```

|           Undefined     |         Null            | 
|           --------      |        --------         |
| Automatically assigned, | Manually assigned       |
| Means value not assigned|Means intentionally empty|
|   ,Type: "undefined"    |typeof returns "object"  |
|     ,Primitive          |     Primitive           |
 
```js
null == undefined
//true
//Because loose equality considers them equivalent.
null === undefined
//false
//Because they are different types.
```
- When you intentionally want to indicate that a variable currently has no object or meaningful value.
let selectedUser = null;

# What is NaN?
- NaN stands for "Not a Number." It represents the result of an invalid numeric operation. Despite its name, its type is "number".
```js
0 / 0
//NaN
Number("Hello")
//NaN
Math.sqrt(-1)
//NaN
```
```js
typeof NaN
//number
//Because NaN belongs to the Number type even though it represents an invalid numeric result.
NaN === NaN
//false
//NaN is defined as being unequal to every value, including itself.
Number.isNaN(NaN);
//true
isNaN("hello") // true ,Avoid relying on the global isNaN() for interview answers because it performs type coercion.
Number.isNaN("hello") // false , Number.isNaN() is the safer, more precise choice.
```

# What is Infinity?
- Infinity is a special numeric value in JavaScript that represents a number larger than any finite number. It belongs to the Number type.
```js
10 / 0
//Infinity
-10 / 0
//-Infinity
Number.MAX_VALUE * 2
//Infinity
typeof Infinity
//"number"
Number.isFinite(100)
//true
Number.isFinite(Infinity)
//false
```
- NaN
Invalid numeric result,typeof → "number",NaN === NaN → false,Check with Number.isNaN()
- Infinity 
Number too large to represent finitely,typeof → "number",Infinity === Infinity → true ,Check with Number.isFinite()

# What are Truthy and Falsy Values?

Every value in JavaScript has an inherent Boolean representation. When a value is used in a Boolean context (such as an if statement), it is automatically converted to either true or false. Values that become true are called truthy, and values that become false are called falsy.

When JavaScript evaluates conditions, it automatically converts values to true or false.
 ```js
 if ("Hello") {
    console.log("Executed");
}
//Executed
//Although "Hello" is not a Boolean, JavaScript treats it as true.

```
- Truthy/Falsy evaluation happens in:

if()

while()

for()

&&

||

!
?:
- Falsy Values

false	
0	
-0	
0n	
""	
null	
undefined	
NaN	
```js
Boolean(false)
Boolean(0)
Boolean("")
Boolean(undefined)
Boolean(null)
////false for all
```

- Truthy Values
Everything that is not falsy is truthy.
- true , 1 , -5 , 100 , "Hello" , "0" , [] , {} ,  function(){}

```js
Boolean([])
Boolean({})
//true
```
```js
let username = "";

if(username){
    console.log("Welcome");
}
else{
    console.log("Please login");
}
//Please login
```
```js
Boolean("0")
//true
Boolean("false")
//true
```

# What is Type Coercion?
- Type coercion is the automatic or manual conversion of one data type into another.
- JavaScript performs type coercion because it is a dynamically typed language.
- Sometimes operations require values of the same type.

JavaScript automatically converts them.
```js
5 + "5"
//"55"
//Number becomes String.
"5" - 2
//3
//String becomes Number.
```
Types of Type Coercion
   1. Implicit
   2. Explicit

```js
10 + "5"
//"105"
10 - "5"
//5
10 * "5"
//50
10 / "5"
//2
true + 1
//2
//true → 1
false + 5
//5
null + 5
//5
undefined + 5
//NaN
```
- Because + is used for both addition and string concatenation.

When one operand is a string, + prefers concatenation.

The - operator only performs numeric subtraction, so both operands are converted to numbers.


# Implicit vs Explicit Type Conversion

Implicit conversion is performed automatically by JavaScript. Explicit conversion is performed manually by the programmer.
- Implicit
Javascript decides . May cause bugs 
```js
5 + "5"
//"55"
true + 5
//6
null + 10
//10

```
- Explicit
Programmer converts values manually.More predictable
```js
String(100)
//"100"
Number("100")
//100
Number("Hello")
//NaN
Boolean(1)
//true
Boolean(0)
//false
parseInt("100px")
//100
parseFloat("10.5abc")
//10.5
```
-Prefer explicit conversion because it makes code easier to understand and avoids unexpected behavior

# Difference Between == and ===
- == compares values after performing type coercion if needed. === compares both value and type without performing type coercion.

- Double Equals (==)
Allows type conversion , loose equality ,Compares value after conversion , Can produce unexpected results

```js
5 == "5"
//true
//"5"
// ↓
// 5
true == 1
//true
false == 0
//true
null == undefined
//true
```

- Triple Equals (===)
No type conversion , Strict equality , Compares type and value ,Predictable
```js
5 === "5"
//false ,Different types.
10 === 10
//true
true === 1
//false
```

- Always prefer ===

```js
[] == false
//true ,Because JavaScript performs several implicit conversions before comparison.
[] === false
// false 
"" == 0
//true
"" === 0
//false
```

# Object.is() vs ===

- Both compare values, but Object.is() handles a few special cases differently. It considers NaN equal to itself and distinguishes between +0 and -0.

```js
10 === 10
//true
Object.is(10,10)
//true
```
Difference 1 — NaN
```js
NaN === NaN
//false
Object.is(NaN,NaN)
//true
```
Difference 2 — +0 and -0
```js
+0 === -0
//true
Object.is(+0,-0)
//false

```
- === follows JavaScript's strict equality rules.

Object.is() uses the SameValue algorithm, which is slightly stricter for these edge cases.
- When to Use Object.is()
Most of the time, use: ===
Use Object.is() only when you specifically need to distinguish +0 from -0 or treat NaN values as equal. A notable real-world example is that React uses Object.is() internally in some places (such as comparing dependency values in Hooks).

# Dynamic Typing in JavaScript

JavaScript is a dynamically typed language, which means you don't have to declare the data type of a variable. The type is determined automatically at runtime, and a variable can hold values of different types during execution.
In some languages like Java or C++, you must specify the type of a variable.
- Type checked at runtime
- No type declaration required
- Variable type can change
- JavaScript, Python, Ruby

```java
int age = 25;
String name = "John";
// age can only store integers.
// name can only store strings.
```
```js
let value = 10;
value = "Hello";
value = true;
value = {
    id: 1
};
//All are valid.
//Because JavaScript checks the type while the program is running (runtime).
```
```js
let data = 100;

console.log(typeof data);
//number
data = "JavaScript";

console.log(typeof data);
//string
data = false;

console.log(typeof data);
//Boolean
//Same variable. Different data types.
```
✔ Less code

✔ Faster development

✔ Flexible

✔ Easy prototyping

- disadvantages
```js
let total = 100;

total = "Hundred";

console.log(total + 50);
//Hundred50
//Instead of numeric addition, JavaScript performs string concatenation.

// This flexibility can introduce bugs if types are not handled carefully.
```
- JavaScript
    Dynamically Typed
    Weakly Typed

Weak typing means JavaScript automatically converts data types when necessary (type coercion).
```js
5 + "5"
//55
```

# What are Literals?
- A literal is a fixed value written directly in the source code. It represents data exactly as it is, without requiring computation.
- Whenever you write an actual value in your code, that value is a literal.
```js
let age = 25;
//25 is a Number Literal.
let name = "John";
//"John" is a String Literal.
```
- Types of Literals
    ```js
    //Number Literal
    100 
    10.5
    -20

    //String Literal
    "Hello"
    'World'
    `Template Literal`

    //Boolean Literal
    true
    false

    //Object Literal
    const user = {
    name: "John",
    age: 25
    };
    
    //Array Literal
    const numbers = [1,2,3];
    
    //Function Literal (
    const greet = function(){
    console.log("Hello");
    };

    //Regular Expression Literal
    const pattern = /abc/;

    //Template Literal
    let name = "John";

    console.log(`Hello ${name}`); // Hello John

    //Null Literal
    null

    //BigInt Literal
    100n

    ```
- Because they are the simplest way to represent values directly in code.
-"Hello" is a String Literal


# How is Memory Allocated for Primitives and Objects?
Primitive values are stored directly by value. Objects are stored in heap memory, and variables hold references (addresses) to those objects.

JavaScript mainly uses two memory areas.

Memory

├── Stack

└── Heap

- Primitive Memory Allocation
```js
let a = 10;
//Stack a → 10
//The value itself is stored directly.
```
```js
let a = 10;

let b = a;

// a → 10
// b → 10
//Both variables have independent copies.
//Changing one does not affect the other.
b = 20;
// a → 10
// b → 20
```
- Object Memory Allocation
```js 
let user = {
    name: "John"
};
user ───────► Heap Address

Heap

{
    name:"John"
}
//The object lives in the Heap.
//The variable stores only the reference
let user1 = {
    name: "John"
};

let user2 = user1;
// user1 ───┐

//           ├────► Heap Object

// user2 ───┘
//Both variables point to the same object.
user2.name = "Peter"; //Changing one
user1.name //also changes
//because both variables refer to the same object.

```
```js
let x = 10;
let y = x;
y = 20;
console.log(x);
//10
let obj1 = {
    age: 20
};

let obj2 = obj1;

obj2.age = 30;

console.log(obj1.age);
//30
```
Primitives are copied by value.

Objects are copied by reference.


# Stack vs Heap Memory
Stack memory stores primitive values, function calls, and references to objects. Heap memory stores actual objects, arrays, and functions. Stack is faster and automatically managed, while Heap is larger and managed by JavaScript's garbage collector.

Stack stores:

- Primitive values
- Function execution contexts
- Local variables
- References (addresses) to heap objects

```js
let age = 25;
// in memory = age → 25
```
✔ Fast

✔ Small

✔ Automatically managed

✔ LIFO (Last In, First Out)

Heap stores:

- Objects
- Arrays
- Functions
- Maps
- Sets
- Dates

```js
let person = {
    name: "John"
};
```
✔ Large

✔ Slower than Stack

✔ Dynamic memory allocation

✔ Managed by Garbage Collector

- Why Are Objects Stored in Heap?

Objects can:

    Grow dynamically
    Shrink
    Contain nested objects
    Consume varying amounts of memory

The stack has limited space, so storing large, dynamic structures there would be inefficient.

- Objects are stored in the Heap. Variables that refer to them are stored on the Stack.
- The function object itself is stored in the Heap. When you call a function, its execution context (local variables, parameters, etc.) is created on the Stack.
- When an object in the Heap is no longer reachable by any variable or reference, JavaScript's Garbage Collector automatically reclaims its memory - Garbage Collection
```js
let user = {
  name: "John"
};

user = null;
//If no other references point to that object, it becomes eligible for garbage collection
```

# What is Scope?
- Scope is the accessibility or visibility of variables, functions, and objects in different parts of a JavaScript program. It determines where a variable can be accessed and where it cannot.
- Imagine every variable in a program were accessible from everywhere.
```js
let username = "John";

function login() {
    username = "Peter";
}
```
Any function could accidentally modify any variable, making large applications difficult to maintain.

Scope prevents this by limiting where variables can be accessed.
```js
let age = 20;

function showAge() {
    console.log(age);
}

showAge();
//20
//age is accessible because it is in the outer scope.

function showName() {
    let name = "John";
}

console.log(name);
//ReferenceError: name is not defined
//name exists only inside the function.
```
- Types of Scope
├── Global Scope

├── Function Scope

├── Block Scope

└── Lexical Scope

# Global Scope

- A variable declared outside all functions and blocks is in the global scope. It can be accessed from anywhere in the program.
```js
let country = "India";

function printCountry() {
    console.log(country);
}

console.log(country);

printCountry();
//India
// India
//The variable is available everywhere because it's global.
```
- Global Variables
```js
let appName = "Interview App";
const PI = 3.14;
var version = "1.0";
//All are globally accessible when declared at the top level of a script.
```
```js
let message = "Hello";

function greet() {
    console.log(message);
}

function welcome() {
    console.log(message);
}
//Both functions can access message.
```
- Global Object
```js
console.log(window);
//window is the global object.
var a = 10;

console.log(window.a);
//10

let b = 20;
const c = 30;

console.log(window.b);
console.log(window.c);
// undefined
// undefined
//Global var declarations become properties of window in browsers, but let and const do not.
```
-Problems with Global Variables
Too many globals can cause:

Variable name collisions
Difficult debugging
Unexpected side effects
Hard-to-maintain code
```js
let count = 0;

function increment() {
    count++;
}

function reset() {
    count = 0;
}
//Any code can modify count.
```
- Keep global variables to a minimum.

Prefer keeping variables inside functions or modules.

# Function Scope
# Block Scope
- [x] Block scope.
- [x] Lexical scope.
- [x] Scope chain.
- [x] Shadowing.
- [x] Illegal shadowing.
- [x] Variable hoisting.
- [x] Function hoisting.
- [x] Hoisting with var.
- [x] Hoisting with let.
- [x] Hoisting with const.
- [x] Temporal Dead Zone (TDZ).
- [x] Redeclaration.
- [x] Reassignment.

# Why avoid var?

- var is generally avoided because it is function-scoped instead of block-scoped, allows redeclaration, can lead to bugs due to hoisting, and can unintentionally become a property of the global object when declared globally in browsers.

- Problem1- No Block Scope
```js
if (true) {

    var age = 20;

}

console.log(age);
//20
//The variable leaks outside the block.
```
- with let -
```js
if (true) {

    let age = 20;

}

console.log(age);
//ReferenceError
```

- Problem 2 — Redeclaration
```js
var x = 10;

var x = 20;

console.log(x);
//20
//Allowed

```
with let
```js
let x = 10;

let x = 20;
//SyntaxError
```
- Problem 3 — Hoisting Confusion
```js
console.log(total);

var total = 100;
//undefined
```

With let
```js
console.log(total);

let total = 100;
```

- [x] Variable lookup.

# Strict mode.

- Strict mode is a feature that enables a stricter set of rules in JavaScript. It helps detect common coding mistakes, prevents unsafe actions, and makes code more secure and easier to optimize.

# "use strict".

- "use strict" is a directive that enables strict mode for a script or a function. It must appear at the beginning of the script or function body.
- Must Be First
- It enforces stricter parsing and error handling rules, helping catch common mistakes.
- It can help JavaScript engines optimize code better, but the main purpose is correctness and safety.

``` js
"use strict";

let age = 20; 
```
- The entire file runs in strict mode.
- Function-Level Strict Mode
```js
function demo(){

    "use strict";

    let age = 20;

}
//Only this function uses strict mode.
```
- Common Errors Prevented
1. Accidental Globals
```js
"use strict";

x = 10;
//ReferenceError
```

2. Deleting Variables
```js
"use strict";

let x = 10;

delete x;
//SyntaxError
```

3. Duplicate Parameters
```js
"use strict";

function test(a, a){}
//SyntaxError
```
- If you're using ES Modules (import/export) or JavaScript classes, strict mode is enabled automatically.

```js
// math.js
export function add(a, b) {
    return a + b;
}
//No need to write "use strict" manually.
```

# Top 50 JavaScript Coding Interview Questions and Answers

## Section 1: String Coding Questions

### 1. Reverse a String

**Question:** Write a JavaScript program to reverse a string.

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```

**Explanation:**
- `split("")` converts the string into an array of characters.
- `reverse()` reverses the array.
- `join("")` converts the array back into a string.

### 2. Check Whether a String Is a Palindrome

**Question:** Check whether a string reads the same forward and backward.

```javascript
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

**Explanation:** Reverse the string and compare it with the original. If both are equal, it is a palindrome.

### 3. Find the Factorial of a Number

**Question:** Calculate the factorial of a number.

```javascript
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // 120
```

**Explanation:** Factorial means multiplying all positive integers from 1 to the given number.

For example: `5! = 5 × 4 × 3 × 2 × 1 = 120`.

### 4. Generate the Fibonacci Series

**Question:** Print the first `n` Fibonacci numbers.

```javascript
function fibonacci(n) {
  let a = 0;
  let b = 1;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(a);

    const next = a + b;
    a = b;
    b = next;
  }

  return result;
}

console.log(fibonacci(7));
// [0, 1, 1, 2, 3, 5, 8]
```

**Explanation:** Each number is the sum of the previous two numbers. We update `a` and `b` in every iteration.

### 5. Check Whether a Number Is Prime

**Question:** Check whether a number is prime.

```javascript
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```

**Explanation:**
- Prime numbers are divisible only by 1 and themselves.
- Check divisibility from 2 up to the square root of the number.
- If any number divides it evenly, it is not prime.

### 6. Find the Largest Number in an Array

```javascript
function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([10, 25, 5, 40, 15])); // 40
```

**Explanation:** The spread operator `...` passes array elements as individual arguments to `Math.max()`.

### 7. Find the Smallest Number in an Array

```javascript
function findSmallest(arr) {
  return Math.min(...arr);
}

console.log(findSmallest([10, 25, 5, 40, 15])); // 5
```

**Explanation:** `Math.min()` returns the smallest number among the given values.

### 8. Find the Sum of Array Elements

```javascript
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray([10, 20, 30])); // 60
```

**Explanation:** `reduce()` processes every array element and combines them into one value. Here, it calculates the total sum.

### 9. Remove Duplicate Elements from an Array

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// [1, 2, 3, 4]
```

**Explanation:** A `Set` stores only unique values. The spread operator converts it back into an array.

### 10. Count Vowels in a String

```javascript
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("javascript")); // 3
```

**Explanation:**
- `/[aeiou]/gi` finds vowels.
- `g` searches globally.
- `i` ignores uppercase and lowercase differences.
- `match()` returns matching characters or `null`.

### 11. Count Character Frequency

```javascript
function countCharacters(str) {
  const frequency = {};

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

console.log(countCharacters("hello"));
// { h: 1, e: 1, l: 2, o: 1 }
```

**Explanation:** An object stores each character as a key and its count as a value. Each time a character appears, its count increases.

### 12. Check Whether Two Strings Are Anagrams

```javascript
function isAnagram(str1, str2) {
  const normalize = (str) =>
    str.toLowerCase().split("").sort().join("");

  return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent")); // true
```

**Explanation:** Anagrams contain the same characters in a different order. We convert both strings to lowercase, sort their characters, and compare them.

### 13. Find the First Non-Repeating Character

```javascript
function firstNonRepeating(str) {
  for (const char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeating("aabbcde")); // "c"
```

**Explanation:** `indexOf()` returns the first position of a character, while `lastIndexOf()` returns its last position. If both positions are equal, the character appears only once.

### 14. Find the First Repeating Character

```javascript
function firstRepeating(str) {
  const seen = new Set();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }

    seen.add(char);
  }

  return null;
}

console.log(firstRepeating("abcda")); // "a"
```

**Explanation:** Store visited characters in a `Set`. If a character is already present, return it.

### 15. Capitalize the First Letter of Every Word

```javascript
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

console.log(capitalizeWords("hello javascript world"));
// "Hello Javascript World"
```

**Explanation:** Split the sentence into words, capitalize the first character of each word, and join the words again.

### 16. Find the Longest Word in a Sentence

```javascript
function longestWord(sentence) {
  const words = sentence.split(" ");

  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}

console.log(longestWord("I love JavaScript programming"));
// "programming"
```

**Explanation:** `reduce()` compares each word with the current longest word and keeps the longer one.

### 17. Reverse Each Word in a Sentence

```javascript
function reverseWords(str) {
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("hello world"));
// "olleh dlrow"
```

**Explanation:** Split the sentence into words, reverse each word separately, and join them back together.

### 18. Check Whether a String Contains Only Numbers

```javascript
function isNumeric(str) {
  return /^\d+$/.test(str);
}

console.log(isNumeric("12345")); // true
console.log(isNumeric("123abc")); // false
```

**Explanation:**
- `^` represents the beginning.
- `\d` matches a digit.
- `+` means one or more digits.
- `$` represents the end.
- `test()` checks whether the string matches the pattern.

### 19. Count Words in a Sentence

```javascript
function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

console.log(countWords("I love JavaScript")); // 3
```

**Explanation:** `trim()` removes extra spaces at the beginning and end. `split(/\s+/)` separates words using one or more whitespace characters.

### 20. Remove All Spaces from a String

```javascript
function removeSpaces(str) {
  return str.replace(/\s/g, "");
}

console.log(removeSpaces("hello world javascript"));
// "helloworldjavascript"
```

**Explanation:** `replace()` removes all whitespace characters using the global regular expression `\s/g`.

## Section 2: Array Coding Questions

### 21. Find the Second Largest Number in an Array

```javascript
function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1] ?? null;
}

console.log(secondLargest([10, 20, 40, 30, 40]));
// 30
```

**Explanation:**
- `Set` removes duplicate values.
- `sort((a, b) => b - a)` sorts numbers in descending order.
- Index `1` contains the second-largest number.
- `?? null` handles arrays without a second distinct number.

### 22. Find the Missing Number from 1 to N

```javascript
function findMissing(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 5], 5)); // 3
```

**Explanation:** The sum of numbers from 1 to N is `n * (n + 1) / 2`. Subtract the actual array sum to find the missing number.

### 23. Find Common Elements Between Two Arrays

```javascript
function commonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

console.log(commonElements([1, 2, 3], [2, 3, 4]));
// [2, 3]
```

**Explanation:** `filter()` keeps elements from the first array that also exist in the second array.

### 24. Merge Two Arrays and Remove Duplicates

```javascript
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
// [1, 2, 3, 4, 5]
```

**Explanation:** Spread both arrays into one array, then use `Set` to remove duplicates.

### 25. Move All Zeros to the End of an Array

```javascript
function moveZeros(arr) {
  const nonZeros = arr.filter(num => num !== 0);
  const zeros = arr.filter(num => num === 0);

  return [...nonZeros, ...zeros];
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]
```

**Explanation:** Separate non-zero values and zeros using `filter()`, then combine them.

### 26. Sort an Array Without Using sort()

```javascript
function bubbleSort(arr) {
  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] =
          [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

console.log(bubbleSort([5, 2, 8, 1, 3]));
// [1, 2, 3, 5, 8]
```

**Explanation:** Bubble sort compares neighboring elements and swaps them when they are in the wrong order. Repeated passes move the largest remaining value to the end.

### 27. Rotate an Array to the Right

```javascript
function rotateArray(arr, k) {
  if (arr.length === 0) return [];

  k = k % arr.length;

  return [
    ...arr.slice(-k),
    ...arr.slice(0, -k)
  ];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]
```

**Explanation:** `slice(-k)` gets the last `k` elements. The remaining elements are added after them. The modulo handles rotations larger than the array length.

### 28. Split an Array into Smaller Chunks

```javascript
function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]
```

**Explanation:** Start from index 0 and move forward by the given chunk size. `slice()` extracts each group.

### 29. Flatten a Nested Array

```javascript
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]
```

**Explanation:** `flat(Infinity)` converts a nested array into a single-level array, regardless of nesting depth.

### 30. Find Two Numbers That Add Up to a Target

```javascript
function twoSum(arr, target) {
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const needed = target - arr[i];

    if (seen.has(needed)) {
      return [seen.get(needed), i];
    }

    seen.set(arr[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]
```

**Explanation:**
- Calculate the number needed to reach the target.
- Check whether that number already exists in the `Map`.
- If it exists, return both indexes.
- Otherwise, store the current number and its index.

### 31. Find the Maximum Difference Between Two Elements

**Question:** Find the maximum profit-like difference where the larger number comes after the smaller number.

```javascript
function maxDifference(arr) {
  if (arr.length < 2) return null;

  let minValue = arr[0];
  let maxDiff = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    maxDiff = Math.max(maxDiff, arr[i] - minValue);
    minValue = Math.min(minValue, arr[i]);
  }

  return maxDiff > 0 ? maxDiff : null;
}

console.log(maxDifference([7, 1, 5, 3, 6, 4]));
// 5
```

**Explanation:** Keep track of the smallest value seen so far. For every new value, calculate the difference and update the maximum difference.

### 32. Find the Intersection of Two Arrays Without Duplicates

```javascript
function intersection(arr1, arr2) {
  const set2 = new Set(arr2);

  return [...new Set(arr1.filter(num => set2.has(num)))];
}

console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4]));
// [2, 3]
```

**Explanation:** Create a `Set` from the second array, filter matching values from the first array, and remove duplicates.

### 33. Group Objects by a Property

```javascript
function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const value = item[key];

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
    return result;
  }, {});
}

const users = [
  { name: "A", role: "developer" },
  { name: "B", role: "designer" },
  { name: "C", role: "developer" }
];

console.log(groupBy(users, "role"));
```

**Explanation:** `reduce()` creates an object where each property value becomes a group key. Objects with the same key are stored in the same array.

### 34. Count the Frequency of Array Elements

```javascript
function arrayFrequency(arr) {
  return arr.reduce((result, item) => {
    result[item] = (result[item] || 0) + 1;
    return result;
  }, {});
}

console.log(arrayFrequency([1, 2, 2, 3, 3, 3]));
// { 1: 1, 2: 2, 3: 3 }
```

**Explanation:** `reduce()` creates an object and increases the count whenever an element appears.

### 35. Find the Maximum Sum of a Contiguous Subarray

```javascript
function maxSubarraySum(arr) {
  if (arr.length === 0) return null;

  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 6
```

**Explanation:** This is Kadane's Algorithm.
- Either start a new subarray at the current element.
- Or add the current element to the previous subarray.
- Keep track of the maximum sum.

## Section 3: Objects and Functional Programming

### 36. Calculate the Total Price of Products Using reduce()

```javascript
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];

const total = products.reduce(
  (sum, product) => sum + product.price,
  0
);

console.log(total); // 52000
```

**Explanation:** `reduce()` adds the price of every product to the running total.

### 37. Sort Objects by Price

```javascript
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];

const sorted = [...products].sort(
  (a, b) => a.price - b.price
);

console.log(sorted);
```

**Explanation:** `sort()` compares the price of two objects. A negative result places the first object before the second. The spread operator prevents modifying the original array.

### 38. Convert an Array of Objects into an Object Using ID

```javascript
const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" }
];

const result = Object.fromEntries(
  users.map(user => [user.id, user])
);

console.log(result);
```

**Explanation:**
- `map()` creates key-value pairs using each user's ID and object.
- `Object.fromEntries()` converts those pairs into an object.

### 39. Deep Clone an Object

```javascript
const original = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const copy = structuredClone(original);

copy.address.city = "Mumbai";

console.log(original.address.city); // "Delhi"
console.log(copy.address.city); // "Mumbai"
```

**Explanation:** `structuredClone()` creates a deep copy of supported JavaScript values. Changes to nested objects in the copy do not affect the original.

### 40. Implement Your Own map() Method

```javascript
function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

const numbers = [1, 2, 3];

const doubled = customMap(numbers, num => num * 2);

console.log(doubled); // [2, 4, 6]
```

**Explanation:** `map()` runs a callback for every array element and stores the returned values in a new array.

### 41. Implement Your Own filter() Method

```javascript
function customFilter(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];

const even = customFilter(numbers, num => num % 2 === 0);

console.log(even); // [2, 4]
```

**Explanation:** `filter()` checks each element with a callback. It adds an element to the new array only when the callback returns `true`.

### 42. Create a Counter Using a Closure

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

**Explanation:** A closure allows an inner function to access variables from its outer function even after the outer function has finished executing. The `count` variable remains available between calls.

### 43. Create a Function That Runs Only Once

```javascript
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

const initialize = once(() => {
  console.log("Initialized");
  return true;
});

initialize(); // "Initialized"
initialize(); // No new execution
```

**Explanation:** A closure stores whether the function has already executed. Future calls return the first result without executing the original function again.

## Section 4: Asynchronous JavaScript

### 44. Implement Debounce

**Question:** Execute a function only after the user stops triggering it for a specified time.

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const search = debounce((value) => {
  console.log("Searching:", value);
}, 500);

search("JavaScript");
```

**Explanation:**
- Every call clears the previous timer.
- A new timer starts.
- The function executes only when no new call happens during the delay.

**Real-world use:** Search suggestions and autocomplete inputs.

### 45. Implement Throttle

**Question:** Ensure a function executes at most once during a specified time interval.

```javascript
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scrolling...");
}, 1000);
```

**Explanation:** The function runs only if enough time has passed since its previous execution.

**Real-world use:** Scroll events, resize events, and frequent button actions.

### 46. Create a Promise That Resolves After 2 Seconds

```javascript
function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Completed after 2 seconds");
    }, 2000);
  });
}

waitTwoSeconds().then(result => {
  console.log(result);
});
```

**Explanation:**
- A Promise represents an asynchronous operation.
- `resolve()` changes its state to fulfilled.
- `.then()` handles the resolved value.

### 47. Fetch Multiple APIs Using Promise.all()

```javascript
async function fetchData() {
  try {
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);

    if (!users.ok || !posts.ok) {
      throw new Error("API request failed");
    }

    const usersData = await users.json();
    const postsData = await posts.json();

    console.log(usersData);
    console.log(postsData);

  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
```

**Explanation:**
- `Promise.all()` runs both requests concurrently.
- `await` waits for both requests to complete.
- The results are returned in the same order as the promises.
- If any promise rejects, `Promise.all()` rejects.

### 48. Retry an API Request When It Fails

```javascript
async function retryRequest(url, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return await response.json();

    } catch (error) {
      if (attempt === retries) {
        throw error;
      }

      console.log(`Retry attempt: ${attempt}`);
    }
  }
}
```

**Explanation:**
- The request is attempted up to the specified number of times.
- If it succeeds, the data is returned.
- If it fails, the loop tries again.
- After the final failure, the error is thrown.

**Real-world use:** Handling temporary network failures and unreliable external services.

### 49. Create a Simple EventEmitter

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  emit(event, data) {
    if (!this.events[event]) return;

    this.events[event].forEach(callback => {
      callback(data);
    });
  }

  off(event, callback) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      fn => fn !== callback
    );
  }
}

const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello ${name}`);
}

emitter.on("welcome", greet);
emitter.emit("welcome", "John"); // Hello John
emitter.off("welcome", greet);
```

**Explanation:**
- `on()` registers an event listener.
- `emit()` executes listeners for an event.
- `off()` removes a listener.

**Real-world use:** Event-driven programming and communication between independent parts of an application.

## Section 5: DOM and Practical JavaScript

### 50. Build a Simple Todo App Using JavaScript DOM

**Question:** Create a basic Todo app where users can add and delete tasks.

**HTML:**

```html
<input id="taskInput" type="text" placeholder="Enter a task" />
<button id="addBtn">Add Task</button>

<ul id="taskList"></ul>
```

**JavaScript:**

```javascript
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const task = input.value.trim();

  if (task === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = task;
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.append(span, deleteBtn);
  taskList.appendChild(li);

  input.value = "";
});
```

**Explanation:**
1. `getElementById()` selects HTML elements.
2. `addEventListener()` listens for button clicks.
3. `input.value` gets the entered task.
4. `trim()` removes extra spaces.
5. `createElement()` creates new HTML elements.
6. `textContent` adds the task text safely.
7. `appendChild()` adds the task to the list.
8. `remove()` deletes the selected task.

**Real-world use:** This demonstrates DOM manipulation, event handling, input validation, and dynamic UI updates.

---

## Important JavaScript Coding Topics to Master

| Topic | Important methods/concepts |
|---|---|
| Strings | `split`, `slice`, `substring`, `replace`, `match` |
| Arrays | `map`, `filter`, `reduce`, `find`, `sort`, `flat` |
| Objects | `Object.keys`, `Object.values`, `Object.entries` |
| ES6 | Spread, rest, destructuring, template literals |
| Functions | Closures, callbacks, higher-order functions |
| Asynchronous JS | Promises, async/await, Promise methods |
| Browser JS | DOM, events, localStorage, sessionStorage |
| Problem solving | Loops, conditions, Sets, Maps, recursion |

## Priority Order for Interviews

**Must practice first:**
1. Reverse a string
2. Palindrome
3. Anagram
4. Character frequency
5. First non-repeating character
6. Remove duplicates
7. Second-largest number
8. Missing number
9. Two Sum
10. Flatten nested array
11. `map()`, `filter()`, and `reduce()`
12. Closures and counter
13. Debounce and throttle
14. Promises and `Promise.all()`
15. Event loop and asynchronous coding

**Interview tip:** For every coding question, explain three things: your approach, why you chose that method, and the time/space complexity. Interviewers want to understand how you think, not just whether you can produce a working snippet.
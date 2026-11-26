# 1. Build a Counter App
Question: Create a counter that increases, decreases and resets its value.
```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

```
Explanation:
- useState(0) creates a state variable called count with an initial value of 0.
- setCount() updates the state.
- React re-renders the component when the state changes.
- onClick handles the button click.

# 2. Create a Toggle Button
Question: Create a button that toggles between Show and Hide.
```js
import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello React!</p>}
    </div>
  );
}

export default Toggle;
```

Explanation:
- show stores whether the content is visible.
- !show reverses the boolean value.
- show && renders the paragraph only when show is true.
- The ternary operator changes the button text.

# 3. Display a List Using map()
Question: Display a list of names using React.
```js
function UserList() {
  const users = ["Rahul", "Priya", "Amit"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

Explanation:
- map() loops through the array.
- It returns JSX for every item.
- key helps React identify list items during updates.
- For static lists, index can work, but for dynamic lists prefer unique IDs.

# 4. Create a Search Filter
Question: Filter names based on user input.
```js
import { useState } from "react";

function SearchList() {
  const [search, setSearch] = useState("");

  const users = ["Rahul", "Priya", "Amit", "Rohan"];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user"
      />

      {filteredUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
}
```

Explanation:
- onChange captures input changes.
- filter() returns only matching items.
- includes() checks whether the text contains the search string.
- toLowerCase() makes the search case-insensitive.

# 5. Create a Controlled Input
Question: Create an input field whose value is managed by React.
```js
import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{name}</h2>
    </div>
  );
}
```

Explanation:
- React stores the input value in state.
- value={name} makes React control the input.
- onChange updates state whenever the user types.
- This is called a controlled component.

# 6. Build a Form
Question: Create a form that accepts a name and email and displays them after submission.
```js
import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button>

      {submitted && (
        <p>
          {name} - {email}
        </p>
      )}
    </form>
  );
}
```

Explanation:
- onSubmit handles the form submission.
- e.preventDefault() prevents the browser's default page reload.
- State stores form data.
- submitted controls whether the result appears.

# 7. Create a Password Visibility Toggle
Question: Show or hide the password when clicking a button.
```js
import { useState } from "react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

```
Explanation:
- The input type changes dynamically.
- password hides the text.
- text displays the text.
- State determines which type is used.

# 8. Create a Checkbox
Question: Create a checkbox and display its checked status.
```js
import { useState } from "react";

function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <p>{checked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}
```

Explanation:
- checked stores the checkbox state.
- e.target.checked returns a boolean.
- The UI updates whenever the checkbox changes.

# 9. Create a Select Dropdown
Question: Create a dropdown that displays the selected option.
```js
import { useState } from "react";

function Dropdown() {
  const [city, setCity] = useState("");

  return (
    <div>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">Select City</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <p>Selected: {city}</p>
    </div>
  );
}

```
Explanation:
- select creates the dropdown.
- value stores the selected option.
- onChange updates the state.

# 10. Create a Tabs Component
Question: Create tabs that display different content.
```js
import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "About", "Contact"];

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}

      <div>
        {activeTab === "Home" && <p>Home Content</p>}
        {activeTab === "About" && <p>About Content</p>}
        {activeTab === "Contact" && <p>Contact Content</p>}
      </div>
    </div>
  );
}

```
Explanation:
- State stores the active tab.
- Clicking a tab updates state.
- Conditional rendering displays the corresponding content.

# 11. Create a Todo App
Question: Add, display and delete tasks.
```js
import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!task.trim()) return;

    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}


Explanation:
- todos stores the list of tasks.
- Spread syntax ...todos copies the existing array.
- filter() removes the selected task.
- Date.now() creates a simple unique ID for this example.
- trim() prevents empty tasks.

12. Mark Todo as Completed
Question: Add a checkbox to mark tasks as completed.
import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
  ]);

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />

          <span
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  );
}


Explanation:
- map() updates only the matching task.
- {...todo} preserves the existing properties.
- !todo.completed toggles the boolean.
- Functional state updates use the previous state safely.

13. Create a Character Counter
Question: Display the number of characters typed in a textarea.
import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}


Explanation:
- State stores the text.
- .length counts characters in the string.
- The count updates automatically when state changes.

14. Create a Calculator
Question: Build a simple calculator for addition, subtraction, multiplication and division.
import { useState } from "react";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  function calculate(operator) {
    const x = Number(a);
    const y = Number(b);

    if (a.trim() === "" || b.trim() === "") {
      setResult("Enter both numbers");
      return;
    }

    if (operator === "/" && y === 0) {
      setResult("Cannot divide by zero");
      return;
    }

    switch (operator) {
      case "+":
        setResult(x + y);
        break;
      case "-":
        setResult(x - y);
        break;
      case "*":
        setResult(x * y);
        break;
      case "/":
        setResult(x / y);
        break;
    }
  }

  return (
    <div>
      <input
        value={a}
        onChange={(e) => setA(e.target.value)}
        type="number"
      />

      <input
        value={b}
        onChange={(e) => setB(e.target.value)}
        type="number"
      />

      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>×</button>
      <button onClick={() => calculate("/")}>÷</button>

      <h2>Result: {result}</h2>
    </div>
  );
}


Explanation:
- Number() converts input strings into numbers.
- switch handles different operations.
- Division by zero is checked.
- setResult() stores the calculated result.

15. Create a Modal
Question: Open and close a modal using buttons.
import { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      {open && (
        <div>
          <h2>Modal Content</h2>
          <p>This is a modal window.</p>

          <button onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}


Explanation:
- open controls modal visibility.
- true displays the modal.
- false hides it.
- && is used for conditional rendering.

16. Create a Accordion
Question: Expand and collapse a section when clicking its heading.
import { useState } from "react";

function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setOpen(!open)}>
        What is React?
      </h3>

      {open && <p>React is a JavaScript library for UI.</p>}
    </div>
  );
}


Explanation:
- Clicking the heading changes the state.
- Content is displayed conditionally.
- !open toggles the current value.

17. Create a Star Rating Component
Question: Allow users to select a rating from 1 to 5 stars.
import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          style={{
            color: star <= rating ? "orange" : "gray",
            fontSize: "30px",
          }}
        >
          ★
        </button>
      ))}

      <p>Rating: {rating}</p>
    </div>
  );
}


Explanation:
- rating stores the selected number.
- star <= rating decides which stars are highlighted.
- Clicking a star updates the rating.

18. Create a Like Button
Question: Create a button that increases and decreases likes.
import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  function toggleLike() {
    setLiked((prev) => !prev);
    setLikes((prev) => prev + (liked ? -1 : 1));
  }

  return (
    <button onClick={toggleLike}>
      {liked ? "❤️" : "🤍"} {likes}
    </button>
  );
}


Explanation:
- liked tracks the user's current status.
- likes stores the count.
- The count increases when liked and decreases when unliked.
Interview improvement: In real applications, derive the displayed count from a single state or use a reducer when managing multiple related values. This example demonstrates the basic logic, but the two states could drift apart if more update paths are added.

19. Create a Pagination Component
Question: Display items page by page.
import { useState } from "react";

function Pagination() {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const start = (page - 1) * itemsPerPage;
  const visibleItems = items.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      {visibleItems.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
      >
        Previous
      </button>

      <span> {page} / {totalPages} </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
}


Explanation:
- slice() extracts the items for the current page.
- start calculates the starting index.
- Math.ceil() calculates total pages.
- disabled prevents navigation beyond the boundaries.

20. Create a Countdown Timer
Question: Create a timer that counts down every second.
import { useEffect, useState } from "react";

function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count <= 0) return;

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return <h2>{count}</h2>;
}


Explanation:
- useEffect() runs when count changes.
- setTimeout() decreases the count after one second.
- Cleanup clears the previous timer.
- When count reaches zero, the timer stops.

21. Fetch Data from an API
Question: Fetch and display users from an API.
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}


Explanation:
- useEffect() fetches data when the component mounts.
- fetch() sends the request.
- response.json() converts the response into JavaScript data.
- try/catch handles errors.
- finally runs whether the request succeeds or fails.

22. Create a Loading Spinner
Question: Display a loading indicator while fetching data.
import { useEffect, useState } from "react";

function LoadingExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <p>Loading...</p> : <p>Data Loaded!</p>;
}


Explanation:
- State controls the loading status.
- setTimeout() simulates an asynchronous operation.
- Conditional rendering displays different content.

23. Create a Debounced Search
Question: Delay search execution until the user stops typing.
import { useEffect, useState } from "react";

function DebouncedSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Search value: {debouncedSearch}</p>
    </div>
  );
}


Explanation:
- The user types into search.
- useEffect starts a 500ms timer.
- If the user types again before the timer ends, cleanup cancels it.
- The final value updates after typing stops.
Debouncing is very commonly used in search boxes, API requests and autocomplete.

24. Create a Custom Hook for Window Width
Question: Create a reusable hook that tracks browser window width.
import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();

  return <h2>Width: {width}px</h2>;
}


Explanation:
- useWindowWidth() is a custom hook.
- It tracks the browser width.
- resize event updates the state.
- Cleanup removes the event listener.
- Custom hooks allow reusable logic across components.
In production, handle server rendering and environments where window is unavailable. This simple example assumes a browser.

25. Create a Custom Hook for Local Storage
Question: Create a custom hook that saves state in localStorage.
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);

      return saved !== null
        ? JSON.parse(saved)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}


Explanation:
- localStorage stores data in the browser.
- JSON.stringify() converts JavaScript data into a string.
- JSON.parse() converts stored strings back into JavaScript values.
- The custom hook reuses persistence logic.

26. Create a Shopping Cart
Question: Add products to a cart and calculate the total price.
import { useState } from "react";

function Cart() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {products.map((product) => (
        <button
          key={product.id}
          onClick={() => addToCart(product)}
        >
          {product.name} - Add
        </button>
      ))}

      <h2>Cart</h2>

      {cart.map((item) => (
        <p key={item.id}>
          {item.name} x {item.quantity}
        </p>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}


Explanation:
- find() checks whether a product is already in the cart.
- map() updates its quantity.
- Spread syntax preserves the existing cart.
- reduce() calculates the total price.

27. Remove an Item from Cart
Question: Remove a product from the shopping cart.
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ]);

  function removeItem(id) {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name}

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}


Explanation:
- filter() creates a new array.
- It excludes the item whose ID matches.
- React updates the UI from the new state.

28. Create a Multi-Select Checkbox
Question: Select multiple items using checkboxes.
import { useState } from "react";

function MultiSelect() {
  const [selected, setSelected] = useState([]);

  const items = ["React", "JavaScript", "Node.js"];

  function toggleItem(item) {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((value) => value !== item)
        : [...prev, item]
    );
  }

  return (
    <div>
      {items.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => toggleItem(item)}
          />
          {item}
        </label>
      ))}

      <p>{selected.join(", ")}</p>
    </div>
  );
}


Explanation:
- includes() checks whether an item is selected.
- filter() removes an item.
- Spread syntax adds an item.
- join() converts the selected array into a string.

29. Create a Sortable List
Question: Sort a list of products by price.
import { useState } from "react";

function SortList() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Tablet", price: 30000 },
  ];

  const [ascending, setAscending] = useState(true);

  const sortedProducts = [...products].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <button onClick={() => setAscending((prev) => !prev)}>
        Toggle Sort
      </button>

      {sortedProducts.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}
    </div>
  );
}


Explanation:
- sort() sorts items.
- a.price - b.price sorts ascending.
- b.price - a.price sorts descending.
- [...products] copies the array to avoid mutating the original.

30. Create a Filter by Category
Question: Filter products by category.
import { useState } from "react";

function ProductFilter() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Shirt", category: "Fashion" },
    { id: 3, name: "Phone", category: "Electronics" },
  ];

  const [category, setCategory] = useState("All");

  const filtered = products.filter((product) =>
    category === "All" || product.category === category
  );

  return (
    <div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>

      {filtered.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}


Explanation:
- State stores the selected category.
- filter() returns products matching that category.
- "All" displays every product.

31. Create a React Component with Props
Question: Create a reusable card component using props.
function UserCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard name="Rahul" role="Developer" />
      <UserCard name="Priya" role="Designer" />
    </div>
  );
}

export default App;


Explanation:
- Props allow passing data from a parent to a child.
- name and role are props.
- The same component can be reused with different data.

32. Create a Child-to-Parent Communication
Question: Pass data from a child component to a parent component.
function Child({ onMessage }) {
  return (
    <button onClick={() => onMessage("Hello Parent!")}>
      Send Message
    </button>
  );
}

function Parent() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Child onMessage={setMessage} />
      <p>{message}</p>
    </div>
  );
}


Explanation:
- The parent passes a function to the child.
- The child calls that function.
- The parent updates its state.
- This is commonly called lifting state up.
Add import { useState } from "react"; at the top when using this code in a separate file.

33. Create a Context API Example
Question: Share data across components without passing props through every level.
import { createContext, useContext } from "react";

const UserContext = createContext();

function Profile() {
  const user = useContext(UserContext);

  return <h2>{user}</h2>;
}

function App() {
  return (
    <UserContext.Provider value="Rahul">
      <Profile />
    </UserContext.Provider>
  );
}

export default App;


Explanation:
- createContext() creates a context.
- Provider makes the value available to its descendants.
- useContext() reads that value.
- It helps avoid prop drilling.

34. Create a Theme Toggle
Question: Switch between dark mode and light mode.
import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#222",
        padding: "20px",
      }}
    >
      <button onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>

      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
    </div>
  );
}


Explanation:
- State stores the current theme.
- Conditional styles change the background and text.
- Clicking the button toggles the theme.

35. Create a useMemo Example
Question: Optimize an expensive calculation using useMemo.
import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    return number * number;
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h2>Square: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}


Explanation:
- useMemo() caches a calculated value.
- It recalculates when a dependency changes.
- Changing count doesn't recalculate the square.
- It is useful for expensive calculations, not every calculation.

36. Create a useCallback Example
Question: Prevent a function from being recreated on every render.
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>
        Click
      </button>

      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}


Explanation:
- useCallback() caches a function reference.
- It returns the same function until its dependencies change.
- It is useful when passing callbacks to memoized child components or when function identity matters.

37. Create a React.memo Example
Question: Prevent a child component from re-rendering when its props haven't changed.
import { memo, useState } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child rendered");

  return <h2>{name}</h2>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="React" />

      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}


Explanation:
- memo() memoizes a component.
- React can skip rendering it when props are unchanged.
- Changing the parent state doesn't necessarily cause this child to render.
- memo is a performance optimization, not a guarantee.

38. Create a Custom Hook for API Fetching
Question: Create a reusable API fetching hook.
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}


Explanation:
- This hook can be reused for different API URLs.
- AbortController cancels the request when the effect cleans up.
- data, loading and error manage the API state.
- When the URL changes, the effect fetches new data.

39. Create a Retry Button for API Failure
Question: Retry an API request when it fails.
import { useState } from "react";

function RetryFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Retry"}
      </button>

      {error && <p>{error}</p>}

      {data && <p>Users fetched: {data.length}</p>}
    </div>
  );
}


Explanation:
- The function runs when the button is clicked.
- try/catch handles request failure.
- The button can be clicked again to retry.
- disabled prevents clicks while loading.

40. Create a Search with API
Question: Search users from an API based on input.
import { useEffect, useState } from "react";

function SearchUsers() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(
        data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    fetchUsers();
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users"
      />

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}


Explanation:
- The effect runs whenever search changes.
- Data is fetched and filtered.
- The UI displays matching users.
In production, debounce the input and handle loading, errors and cancellation to avoid unnecessary requests.

41. Create a Form Validation
Question: Validate email and password before submitting.
import { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("Form submitted successfully");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button type="submit">Submit</button>

      <p>{error}</p>
    </form>
  );
}


Explanation:
- preventDefault() prevents the page reload.
- Validation checks the values.
- return stops submission if a condition fails.
- This is basic client-side validation. Production forms should use more complete validation and server-side checks.

42. Create a Scroll-to-Top Button
Question: Scroll the page to the top when clicking a button.
function ScrollTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button onClick={scrollToTop}>
      Scroll to Top
    </button>
  );
}


Explanation:
- window.scrollTo() changes the scroll position.
- top: 0 moves to the top.
- behavior: "smooth" makes the movement smooth.

43. Create a Clipboard Copy Button
Question: Copy text to the clipboard.
import { useState } from "react";

function CopyButton() {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    try {
      await navigator.clipboard.writeText("Hello React!");
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <button onClick={copyText}>
        Copy
      </button>

      <p>{copied ? "Copied!" : ""}</p>
    </div>
  );
}


Explanation:
- navigator.clipboard.writeText() copies text.
- It returns a promise.
- await waits for the copy operation.
- State displays the result.
Clipboard access generally requires a secure context, such as HTTPS, and may be restricted by the browser.

44. Create a Keyboard Event Handler
Question: Detect when a user presses the Enter key.
import { useState } from "react";

function KeyboardExample() {
  const [value, setValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      alert(value);
    }
  }

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Press Enter"
    />
  );
}


Explanation:
- onKeyDown handles keyboard events.
- e.key identifies the pressed key.
- The condition checks whether the key is Enter.

45. Create a Drag-and-Drop Basic Example
Question: Drag an item into a drop area.
import { useState } from "react";

function DragDrop() {
  const [dropped, setDropped] = useState(false);

  return (
    <div>
      <div
        draggable
        onDragStart={(e) => e.dataTransfer.setData("text", "React")}
      >
        Drag React
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          setDropped(true);
        }}
        style={{ border: "1px solid", padding: "30px" }}
      >
        Drop Here
      </div>

      {dropped && <p>Item Dropped!</p>}
    </div>
  );
}


Explanation:
- draggable enables dragging.
- onDragStart begins the drag operation.
- onDragOver allows the drop.
- onDrop handles the drop event.
This demonstrates the basic HTML drag-and-drop flow. A production implementation should also validate the dragged data and manage drag state.

46. Create an Image Preview Before Upload
Question: Display an image preview when a user selects a file.
import { useState } from "react";

function ImagePreview() {
  const [image, setImage] = useState("");

  function handleChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {image && (
        <img
          src={image}
          alt="Preview"
          width="200"
        />
      )}
    </div>
  );
}


Explanation:
- input type="file" allows file selection.
- URL.createObjectURL() creates a temporary URL.
- src displays the selected image.
Production improvement: Revoke the previous object URL with URL.revokeObjectURL() when it is no longer needed, and validate file size and type.

47. Create a Lazy-Loaded Component
Question: Load a component only when needed.
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading Dashboard...</p>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;


Explanation:
- lazy() loads the component dynamically.
- It can reduce the initial JavaScript bundle.
- Suspense displays fallback content while loading.
- The component is loaded when React needs to render it.

48. Create an Error Boundary
Question: Prevent a component error from crashing the entire UI.
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


Usage:
<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>


Explanation:
- An Error Boundary catches errors during rendering of its descendant components.
- getDerivedStateFromError() updates state after a rendering error.
- The fallback UI is displayed instead of the crashed component tree.
- Error Boundaries are implemented using class components in React's traditional API.
Error boundaries do not catch errors in event handlers, asynchronous callbacks, or errors thrown by the boundary itself.

49. Create a useReducer Counter
Question: Manage state using useReducer.
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}


Explanation:
- useReducer() manages state using a reducer function.
- state represents the current value.
- dispatch() sends an action.
- The reducer decides how the state changes.
When to use it?

Use useReducer when state updates involve multiple actions or more complex logic, rather than using several unrelated useState calls.

50. Create a Reusable Button Component
Question: Create a reusable button that accepts text, type and click handler.
function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button onClick={() => alert("Clicked!")}>
        Click Me
      </Button>

      <Button type="submit">
        Submit
      </Button>
    </div>
  );
}

export default App;


Explanation:
- children allows the button to display different content.
- onClick makes its behavior reusable.
- type controls its behavior in forms.
- Reusable components reduce duplicate code and improve maintainability.
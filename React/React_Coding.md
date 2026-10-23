
# Q1. Create a counter with increment, decrement, and reset

```js
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

# Q2. Show and hide a password
```js
import { useState } from "react";

export default function PasswordToggle() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input type={show ? "text" : "password"} />
      <button onClick={() => setShow(s => !s)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
```

# Q3. Switch content when clicking different buttons
```js
import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("Home");

  const content = {
    Home: "Welcome Home",
    About: "About Us",
    Contact: "Contact Us"
  };

  return (
    <div>
      {Object.keys(content).map(tab => (
        <button key={tab} onClick={() => setActive(tab)}>
          {tab}
        </button>
      ))}
      <h2>{content[active]}</h2>
    </div>
  );
}
```


# Q4. Build a live character counter
```js
import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        maxLength={100}
      />
      <p>{text.length}/100 characters</p>
    </div>
  );
}

```
# Q5. Create a todo list
```js
import { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!text.trim()) return;
    setTodos(prev => [
      ...prev,
      { id: crypto.randomUUID(), text }
    ]);
    setText("");
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      {todos.map(todo => (
        <p key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
}

```
# Q6. Build a search filter
```js
import { useState } from "react";

const fruits = ["Apple", "Banana", "Mango", "Orange"];

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  const filtered = fruits.filter(fruit =>
    fruit.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search fruits"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {filtered.map(fruit => <p key={fruit}>{fruit}</p>)}
    </div>
  );
}

```
# Q7. Create a dropdown and display the selected option
```js
import { useState } from "react";

export default function Dropdown() {
  const [city, setCity] = useState("");

  return (
    <div>
      <select value={city} onChange={e => setCity(e.target.value)}>
        <option value="">Select a city</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bhubaneswar">Bhubaneswar</option>
      </select>
      <p>Selected city: {city || "None"}</p>
    </div>
  );
}
```

# Q8. Create a like button
```js
import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(prev => !prev)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}
```

# Q9. Show a list of products using reusable components
```js
function ProductCard({ name, price }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>₹{price}</p>
    </article>
  );
}

export default function Products() {
  const products = [
    { id: 1, name: "Keyboard", price: 1200 },
    { id: 2, name: "Mouse", price: 500 }
  ];

  return products.map(product => (
    <ProductCard key={product.id} {...product} />
  ));
}
```

# Q10. Build an accordion
```js
import { useState } from "react";

const questions = [
  { title: "What is React?", answer: "A UI library." },
  { title: "What are props?", answer: "Data passed to components." },
  { title: "What is state?", answer: "Data managed by a component." }
];

export default function Accordion() {
  const [open, setOpen] = useState(null);

  return questions.map((item, index) => (
    <div key={item.title}>
      <button onClick={() =>
        setOpen(open === index ? null : index)
      }>
        {item.title}
      </button>
      {open === index && <p>{item.answer}</p>}
    </div>
  ));
}

```

Level 2: Intermediate React coding (Questions 11–20)
These are especially useful for frontend interviews because they test forms, derived state, effects, and API handling.
Q11. Validate a registration form
Tests: Controlled inputs and validation.
import { useState } from "react";

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Enter a valid email");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters");
    } else {
      setError("");
      alert("Form submitted");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
}


Q12. Fetch and display API data
Tests: useEffect, fetch, loading, and error states.
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Request failed");

        setUsers(await response.json());
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadUsers();
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return users.map(user => <p key={user.id}>{user.name}</p>);
}


Q13. Implement pagination
Tests: Array slicing and page state.
import { useState } from "react";

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const pageSize = 5;

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / pageSize);

  const visible = items.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div>
      {visible.map(item => <p key={item}>{item}</p>)}
      <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
        Previous
      </button>
      <span> {page} / {totalPages} </span>
      <button
        disabled={page === totalPages}
        onClick={() => setPage(p => p + 1)}
      >
        Next
      </button>
    </div>
  );
}


Q14. Sort a list of products by price
Tests: Sorting without mutating state.
import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 }
];

export default function SortProducts() {
  const [ascending, setAscending] = useState(true);

  const sorted = [...products].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <button onClick={() => setAscending(v => !v)}>
        Sort {ascending ? "Descending" : "Ascending"}
      </button>
      {sorted.map(p => <p key={p.id}>{p.name}: ₹{p.price}</p>)}
    </div>
  );
}


Q15. Select multiple checkboxes
Tests: Managing collections in state.
import { useState } from "react";

const options = ["React", "TypeScript", "Node.js"];

export default function MultiSelect() {
  const [selected, setSelected] = useState([]);

  function toggle(option) {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  }

  return (
    <div>
      {options.map(option => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggle(option)}
          />
          {option}
        </label>
      ))}
      <p>Selected: {selected.join(", ") || "None"}</p>
    </div>
  );
}


Q16. Build a shopping cart
Tests: Updating objects in arrays and calculating totals.
import { useState } from "react";

const initial = [
  { id: 1, name: "Book", price: 300, qty: 1 },
  { id: 2, name: "Pen", price: 20, qty: 2 }
];

export default function Cart() {
  const [cart, setCart] = useState(initial);

  function changeQty(id, amount) {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + amount) }
          : item
      )
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  );

  return (
    <div>
      {cart.map(item => (
        <p key={item.id}>
          {item.name} × {item.qty}
          <button onClick={() => changeQty(item.id, -1)}>-</button>
          <button onClick={() => changeQty(item.id, 1)}>+</button>
        </p>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}


Q17. Build a dark/light theme toggle
Tests: State, styling, and conditional classes.
import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "#222" : "#fff",
      color: dark ? "#fff" : "#222",
      padding: 24
    }}>
      <button onClick={() => setDark(v => !v)}>
        Switch to {dark ? "Light" : "Dark"}
      </button>
      <h2>{dark ? "Dark Theme" : "Light Theme"}</h2>
    </div>
  );
}


Q18. Implement a debounce search
Tests: useEffect, cleanup, and delayed execution.
import { useEffect, useState } from "react";

export default function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <p>Search after pause: {debounced}</p>
    </div>
  );
}


Q19. Create a reusable custom hook for online status
Tests: Custom hooks and event cleanup.
import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onOnline = () => setOnline(true);
    const onOffline = () => setOnline(false);

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  return online;
}

export default function Status() {
  const online = useOnlineStatus();
  return <p>{online ? "Online" : "Offline"}</p>;
}


Q20. Build a modal popup
Tests: Conditional rendering, props, and component reuse.
import { useState } from "react";

function Modal({ onClose }) {
  return (
    <div role="dialog" aria-modal="true">
      <h2>Confirmation</h2>
      <p>This is a modal dialog.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}



Level 3: Advanced React interview questions (Questions 21–30)
These focus on performance, state management, component lifecycle, and more realistic frontend tasks.
Q21. Implement a stopwatch
Tests: useEffect, useRef, intervals, cleanup.
import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [running]);

  return (
    <div>
      <h2>{seconds}s</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
      }}>Reset</button>
    </div>
  );
}


Q22. Prevent unnecessary re-renders using React.memo
Tests: Component optimization.
import { memo, useState } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child rendered");
  return <p>Hello, {name}</p>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="React" />
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}


Explanation: memo can skip rendering when props remain unchanged. It does not prevent renders caused by the child's own state or consumed context changing.
Q23. Use useMemo to optimize an expensive calculation
Tests: Memoization.
import { useMemo, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(10);
  const [theme, setTheme] = useState(false);

  const result = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= number * 100000; i++) {
      sum += i;
    }
    return sum;
  }, [number]);

  return (
    <div style={{ color: theme ? "red" : "black" }}>
      <p>Result: {result}</p>
      <button onClick={() => setNumber(n => n + 1)}>
        Change Number
      </button>
      <button onClick={() => setTheme(t => !t)}>
        Change Theme
      </button>
    </div>
  );
}


Explanation: The calculation is reused while number remains unchanged, even if theme changes. Use this for genuinely expensive calculations, not every variable in sight.
Q24. Share state between sibling components
Tests: Lifting state up.
import { useState } from "react";

function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

function Preview({ value }) {
  return <h2>{value}</h2>;
}

export default function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <Input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Preview value={text} />
    </div>
  );
}


Explanation: Store shared state in the nearest common parent and pass it down through props.
Q25. Manage global state using Context API
Tests: Context, providers, and useContext.
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function Child() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme: () =>
        setTheme(t => t === "light" ? "dark" : "light")
    }}>
      <Child />
    </ThemeContext.Provider>
  );
}


Explanation: Context allows components to access shared data without passing props through every intermediate component.
Q26. Implement a countdown timer
Tests: Intervals, state, and stopping conditions.
import { useEffect, useState } from "react";

export default function Countdown() {
  const [seconds, setSeconds] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds(s => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, seconds]);

  return (
    <div>
      <h2>{seconds}</h2>
      <button
        disabled={seconds === 0}
        onClick={() => setRunning(true)}
      >
        Start
      </button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => {
        setRunning(false);
        setSeconds(10);
      }}>Reset</button>
    </div>
  );
}


Q27. Implement a reusable useLocalStorage hook
Tests: Custom hooks and browser storage.
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved === null ? initialValue : JSON.parse(saved);
    } catch {
      return initialValue;
    }
  });

  function updateValue(nextValue) {
    setValue(nextValue);

    try {
      localStorage.setItem(key, JSON.stringify(nextValue));
    } catch {
      // Storage might be unavailable or full.
    }
  }

  return [value, updateValue];
}

export default function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="Your name"
    />
  );
}


Note: This basic hook supports a single component instance. A production implementation may need cross-tab synchronization, functional updates, and server-rendering safeguards.
Q28. Fetch API data when a button is clicked
Tests: Async functions, loading, errors, and user-triggered requests.
import { useState } from "react";

export default function FetchPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadPost() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      if (!response.ok) throw new Error("Failed to fetch");

      setPost(await response.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={loadPost} disabled={loading}>
        {loading ? "Loading..." : "Load Post"}
      </button>
      {error && <p>{error}</p>}
      {post && <h3>{post.title}</h3>}
    </div>
  );
}


Q29. Build a multi-step form
Tests: Conditional rendering and managing form steps.
import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "" });

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  return (
    <div>
      <h2>Step {step} of 2</h2>

      {step === 1 ? (
        <>
          <input
            placeholder="Name"
            value={form.name}
            onChange={e => update("name", e.target.value)}
          />
          <button
            disabled={!form.name.trim()}
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => update("email", e.target.value)}
          />
          <button onClick={() => setStep(1)}>Back</button>
          <button
            disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)}
            onClick={() => alert(JSON.stringify(form))}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}


Q30. Create a star rating component
Tests: Interactive UI, state, and rendering arrays.
import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          aria-label={`Rate ${star} out of 5`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => setRating(star)}
          style={{
            color: star <= (hover || rating) ? "orange" : "gray",
            fontSize: 28
          }}
        >
          ★
        </button>
      ))}
      <p>Your rating: {rating}/5</p>
    </div>
  );
}



Level 4: Real-world React interview challenges (Questions 31–35)
These are closer to the tasks you may be asked to build during a live coding round.
Q31. Build an autocomplete search component
Tests: Filtering, suggestions, and selecting an item.
import { useState } from "react";

const names = ["Alice", "Andrew", "Bob", "Charlie", "David"];

export default function Autocomplete() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  const suggestions = query.trim()
    ? names.filter(name =>
        name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div>
      <input
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setSelected("");
        }}
        placeholder="Search names"
      />

      {suggestions.map(name => (
        <button
          key={name}
          onClick={() => {
            setQuery(name);
            setSelected(name);
          }}
        >
          {name}
        </button>
      ))}

      {selected && <p>Selected: {selected}</p>}
    </div>
  );
}


Q32. Create a shopping cart with add and remove functionality
Tests: State updates, array operations, and totals.
import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 }
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function add(product) {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  }

  function remove(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  );

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <p key={product.id}>
          {product.name} ₹{product.price}
          <button onClick={() => add(product)}>Add to cart</button>
        </p>
      ))}

      <h2>Cart</h2>
      {cart.map(item => (
        <p key={item.id}>
          {item.name} × {item.qty}
          <button onClick={() => remove(item.id)}>Remove</button>
        </p>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}


Q33. Implement a reusable data-fetching hook
Tests: Custom hooks, async state, and cleanup.
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url, {
          signal: controller.signal
        });

        if (!response.ok) throw new Error("Request failed");

        setData(await response.json());
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default function Posts() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return data.slice(0, 5).map(post => (
    <p key={post.id}>{post.title}</p>
  ));
}


Q34. Build a sortable, searchable table
Tests: Combining search, sorting, and rendering.
import { useState } from "react";

const users = [
  { id: 1, name: "Ravi", age: 25 },
  { id: 2, name: "Anita", age: 22 },
  { id: 3, name: "Priya", age: 28 }
];

export default function UserTable() {
  const [query, setQuery] = useState("");
  const [ascending, setAscending] = useState(true);

  const filtered = users
    .filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) =>
      ascending ? a.age - b.age : b.age - a.age
    );

  return (
    <div>
      <input
        placeholder="Search by name"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <button onClick={() => setAscending(v => !v)}>
        Sort by age {ascending ? "↑" : "↓"}
      </button>

      <table>
        <thead>
          <tr><th>Name</th><th>Age</th></tr>
        </thead>
        <tbody>
          {filtered.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


Interview note: This is fine for a small static list. For real data, avoid mutating shared arrays and consider server-side filtering and sorting for large datasets.
Q35. Build a debounced API search
Tests: useEffect, debounce, API requests, loading states, and cleanup.
import { useEffect, useState } from "react";

export default function ApiSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      setError("");
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Request failed");

        const users = await response.json();

        setResults(users.filter(user =>
          user.name.toLowerCase().includes(query.toLowerCase())
        ));
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search users"
      />

      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}

      {results.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

      {!loading && query.trim() && !error && results.length === 0 && (
        <p>No users found.</p>
      )}
    </div>
  );
}


Explanation: Wait 400 ms after the user stops typing, fetch the data, and cancel the timer or outdated request when the query changes. This example filters the returned users on the client; a real search API may accept the query directly.
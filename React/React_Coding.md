# Level 1 – React Fundamentals

## 1. Build a Counter with Increment, Decrement, Reset, and Step Controls

### Question

Build a React counter with:

- Increment button
- Decrement button
- Reset button
- Step input
- Counter should increase/decrease according to the selected step

### Code

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount((currentCount) => currentCount + step);
  };

  const decrement = () => {
    setCount((currentCount) => currentCount - step);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>

      <p>Count: {count}</p>

      <label htmlFor="step">
        Step:
      </label>

      <input
        id="step"
        type="number"
        min="1"
        value={step}
        onChange={(event) => setStep(Number(event.target.value))}
      />

      <div>
        <button onClick={increment}>
          +
        </button>

        <button onClick={decrement}>
          -
        </button>

        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
```

### Explanation

The counter needs two pieces of state:

```jsx
const [count, setCount] = useState(0);
const [step, setStep] = useState(1);
```

`count` stores the current counter value.

`step` stores how much the counter should change.

For example:

```text
count = 10
step = 5

Increment
→ 15

Decrement
→ 10
```

### Why use the functional state update?

```jsx
setCount((currentCount) => currentCount + step);
```

The updater receives the latest state value.

This is safer than:

```jsx
setCount(count + step);
```

when multiple state updates can be queued.

### Interview Follow-up

**Why shouldn't you directly mutate React state?**

Bad:

```jsx
count = count + 1;
```

Correct:

```jsx
setCount((currentCount) => currentCount + 1);
```

React needs the state update mechanism to schedule a re-render.

### Remember

```text
useState
→ Stores component state

setCount
→ Updates count

Functional updater
→ Uses the latest state value
```

---

## 2. Build a Controlled Form with Validation

### Question

Build a React form containing:

- Name
- Email
- Password
- Submit button
- Required-field validation
- Email validation
- Password validation

### Code

```jsx
import { useState } from "react";

function ControlledForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Form submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Name
        </label>

        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        {errors.name && (
          <p>{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && (
          <p>{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        {errors.password && (
          <p>{errors.password}</p>
        )}
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default ControlledForm;
```

### Explanation

A **controlled input** means React owns the current value of the input.

```jsx
value={form.email}
```

The input value comes from React state.

When the user types:

```text
User types
    ↓
onChange
    ↓
setForm()
    ↓
React state changes
    ↓
Input receives new value
```

The important pattern is:

```jsx
value={state}
onChange={handleChange}
```

### Why use one `handleChange`?

The input's `name` tells us which property to update.

```jsx
const { name, value } = event.target;
```

Then:

```jsx
setForm((currentForm) => ({
  ...currentForm,
  [name]: value,
}));
```

If:

```text
name = "email"
value = "user@example.com"
```

React effectively creates:

```js
{
  ...currentForm,
  email: "user@example.com"
}
```

### Interview Follow-up

**What is the difference between controlled and uncontrolled inputs?**

```text
Controlled
→ React state controls the value

Uncontrolled
→ DOM maintains the value
→ Usually accessed with a ref
```

### Remember

```text
Controlled component

Input
 ↓
onChange
 ↓
React state
 ↓
value
 ↓
Input
```

---

## 3. Build a Character Counter for a Textarea

### Question

Build a textarea that:

- Displays the current character count
- Has a maximum of 200 characters
- Prevents the user from exceeding the limit

### Code

```jsx
import { useState } from "react";

function CharacterCounter() {
  const MAX_LENGTH = 200;

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="message">
        Message
      </label>

      <textarea
        id="message"
        value={text}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
        rows={6}
        placeholder="Write your message..."
      />

      <p>
        {text.length} / {MAX_LENGTH}
      </p>
    </div>
  );
}

export default CharacterCounter;
```

### Explanation

The textarea is controlled by React:

```jsx
value={text}
```

When the user types:

```jsx
onChange={handleChange}
```

updates:

```jsx
setText(event.target.value);
```

The number of characters is calculated using:

```jsx
text.length
```

For example:

```text
text = "Hello"

text.length
→ 5
```

### Why use `maxLength`?

```jsx
maxLength={MAX_LENGTH}
```

This gives the browser a native limit.

So the user cannot normally enter more than 200 characters through the textarea.

The React state still contains the current value and can be used for additional validation.

### Interview Follow-up

**Would you calculate the character count using another state variable?**

Usually no.

Avoid:

```jsx
const [text, setText] = useState("");
const [characterCount, setCharacterCount] = useState(0);
```

because `characterCount` is derived from `text`.

Instead:

```jsx
text.length
```

This avoids maintaining duplicate state.

### Remember

```text
Source of truth
→ text

Derived value
→ text.length
```

---

## 4. Build a Show/Hide Password Component

### Question

Build a password input with a button that toggles between:

```text
Password
Show

Password
Hide
```

### Code

```jsx
import { useState } from "react";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((currentValue) => !currentValue);
  };

  return (
    <div>
      <label htmlFor="password">
        Password
      </label>

      <input
        id="password"
        type={showPassword ? "text" : "password"}
      />

      <button
        type="button"
        onClick={togglePassword}
        aria-pressed={showPassword}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordInput;
```

### Explanation

We only need one piece of state:

```jsx
const [showPassword, setShowPassword] = useState(false);
```

Initially:

```text
showPassword = false
```

Therefore:

```jsx
type="password"
```

When the user clicks the button:

```jsx
setShowPassword((currentValue) => !currentValue);
```

The value changes:

```text
false → true
true  → false
```

Then the input type changes:

```jsx
type={showPassword ? "text" : "password"}
```

### Why use a functional updater?

Instead of:

```jsx
setShowPassword(!showPassword);
```

we can use:

```jsx
setShowPassword((currentValue) => !currentValue);
```

This expresses the operation clearly as:

```text
Previous state
     ↓
invert it
     ↓
new state
```

### Accessibility

This:

```jsx
aria-pressed={showPassword}
```

communicates the toggle state to assistive technology.

### Remember

```text
false
→ password hidden

true
→ password visible
```

---

## 5. Build a Tabs Component

### Question

Build a tabs component with:

```text
Profile
Settings
Security
```

Clicking a tab should display its corresponding content.

### Code

```jsx
import { useState } from "react";

const tabs = [
  {
    id: "profile",
    label: "Profile",
    content: "This is your profile.",
  },
  {
    id: "settings",
    label: "Settings",
    content: "This is your settings.",
  },
  {
    id: "security",
    label: "Security",
    content: "This is your security settings.",
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState("profile");

  const currentTab = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <div>
      <div role="tablist" aria-label="Account settings">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}

      </div>

      <div
        role="tabpanel"
        aria-live="polite"
      >
        {currentTab.content}
      </div>
    </div>
  );
}

export default Tabs;
```

### Explanation

The active tab is state:

```jsx
const [activeTab, setActiveTab] = useState("profile");
```

When a button is clicked:

```jsx
setActiveTab(tab.id);
```

React renders the corresponding content.

The tabs are stored as data:

```jsx
const tabs = [
  {
    id: "profile",
    label: "Profile",
    content: "This is your profile.",
  },
];
```

This is better than writing three separate blocks of nearly identical JSX.

### Why use `key`?

When rendering a list:

```jsx
tabs.map((tab) => (
  <button key={tab.id}>
```

React needs a stable key to identify each item.

### Important Interview Point

Don't use array index unnecessarily:

```jsx
key={index}
```

when you already have a stable identifier:

```jsx
key={tab.id}
```

### Accessibility

Tabs have semantic ARIA roles:

```jsx
role="tablist"
```

```jsx
role="tab"
```

```jsx
role="tabpanel"
```

And:

```jsx
aria-selected={activeTab === tab.id}
```

communicates which tab is currently active.

### Remember

```text
Tabs

State
→ activeTab

Data
→ tabs[]

User click
→ setActiveTab()

Render
→ active content
```

---

## 6. Build an Accordion Component

### Question

Build an accordion where clicking a question expands or collapses its answer.

Example:

```text
What is React?
      ↓
React is a JavaScript library.

What is JSX?
      ↓
JSX is a syntax extension...
```

### Code

```jsx
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension that allows you to write HTML-like markup in JavaScript.",
  },
  {
    id: 3,
    question: "What is a component?",
    answer:
      "A component is a reusable piece of UI with its own logic and presentation.",
  },
];

function Accordion() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((currentId) =>
      currentId === id ? null : id
    );
  };

  return (
    <div>

      {questions.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id}>

            <h3>

              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`answer-${item.id}`}
              >
                {item.question}
              </button>

            </h3>

            {isOpen && (
              <div
                id={`answer-${item.id}`}
              >
                <p>
                  {item.answer}
                </p>
              </div>
            )}

          </div>
        );
      })}

    </div>
  );
}

export default Accordion;
```

### Explanation

We store the ID of the currently open item:

```jsx
const [openId, setOpenId] = useState(null);
```

Initially:

```text
openId = null
```

Nothing is open.

When the user clicks item `2`:

```text
openId
→ 2
```

Then:

```jsx
const isOpen = openId === item.id;
```

For item 2:

```text
2 === 2
→ true
```

Therefore its answer is rendered.

### Toggle Logic

The important part is:

```jsx
setOpenId((currentId) =>
  currentId === id ? null : id
);
```

If the clicked item is already open:

```text
currentId === id
        ↓
      true
        ↓
      null
```

It closes.

If another item is clicked:

```text
currentId !== id
        ↓
      new id
```

The new item opens.

### Why only one item is open?

Because we store only one ID:

```jsx
openId
```

not an array of open IDs.

Therefore:

```text
openId = 2

Item 1 → closed
Item 2 → open
Item 3 → closed
```

### How would you allow multiple items to stay open?

Use a collection of IDs:

```jsx
const [openIds, setOpenIds] = useState([]);
```

Then add/remove IDs from the array.

This is a good interview follow-up because it tests whether you understand **state modeling**, rather than merely remembering `useState`.

### Accessibility

Use:

```jsx
aria-expanded={isOpen}
```

to communicate whether the section is expanded.

And:

```jsx
aria-controls={`answer-${item.id}`}
```

connects the button to the content it controls.

### Remember

```text
Accordion

openId = null
→ Nothing open

openId = 1
→ Item 1 open

openId = 2
→ Item 2 open
```

---

# Level 1 – Core Concepts Tested

```text
1. Counter
   → useState
   → Event handling
   → Functional state updates

2. Controlled Form
   → Controlled components
   → Form state
   → Validation
   → Event handling

3. Character Counter
   → Controlled textarea
   → Derived state
   → maxLength

4. Password Toggle
   → Boolean state
   → Conditional rendering
   → Accessibility

5. Tabs
   → State-driven UI
   → Lists
   → keys
   → Component/data design
   → ARIA

6. Accordion
   → State modeling
   → Conditional rendering
   → List rendering
   → Accessibility
```

# Interview Rule

For every one of these problems, don't just type the code.

Be able to explain:

```text
What state exists?
        ↓
Why does that state exist?
        ↓
Where should that state live?
        ↓
What causes a re-render?
        ↓
What happens when the user clicks?
        ↓
Can the state be derived instead?
        ↓
What happens with invalid input?
        ↓
What accessibility concerns exist?
```

That is the difference between **"I know React syntax"** and **"I can actually work on a React codebase."**


# Level 1 – React Fundamentals

## 7. Build a Modal Component

### Question

Build a reusable React modal that:

- Opens when a button is clicked
- Closes when the close button is clicked
- Closes when clicking outside the modal
- Closes when pressing `Escape`
- Prevents the click inside the modal from closing it

### Code

```jsx
import { useEffect } from "react";

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <h2 id="modal-title">
          {title}
        </h2>

        <div>
          {children}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Modal;
```

### Example Usage

```jsx
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Action"
      >
        <p>
          Are you sure you want to continue?
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
        >
          Confirm
        </button>
      </Modal>
    </div>
  );
}

export default App;
```

### Explanation

The modal receives its state from the parent:

```jsx
isOpen
```

The parent decides whether the modal should exist.

```text
Parent
  ↓
isOpen
  ↓
Modal
```

The modal doesn't need to own its open/closed state.

Instead, it receives:

```jsx
onClose
```

This makes the component reusable.

### Why use `useEffect`?

The modal needs to listen for the `Escape` key:

```jsx
document.addEventListener("keydown", handleKeyDown);
```

When the modal closes, the listener must be removed:

```jsx
return () => {
  document.removeEventListener("keydown", handleKeyDown);
};
```

Otherwise, every opening could potentially create another event listener. Humanity has invented enough accidental duplication already.

### Important Interview Point

The cleanup function is essential:

```jsx
return () => {
  document.removeEventListener("keydown", handleKeyDown);
};
```

This prevents event-listener leaks.

### Accessibility

A modal should normally use:

```jsx
role="dialog"
aria-modal="true"
```

It should also have an accessible name, for example:

```jsx
aria-labelledby="modal-title"
```

### Advanced Follow-up

A production modal should also consider:

```text
Focus management
Focus trapping
Restoring focus after close
Body scroll locking
Nested modals
Animation
Portal rendering
```

---

## 8. Build a Dropdown Component

### Question

Build a reusable dropdown that:

- Opens when clicked
- Closes when clicked again
- Closes when clicking outside
- Displays selectable options
- Reports the selected option to the parent

### Code

```jsx
import { useEffect, useRef, useState } from "react";

function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  return (
    <div ref={dropdownRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {selectedOption?.label ?? placeholder}
      </button>

      {isOpen && (
        <ul role="listbox">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={value === option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
```

### Example Usage

```jsx
import { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    value: "frontend",
    label: "Frontend",
  },
  {
    value: "backend",
    label: "Backend",
  },
  {
    value: "fullstack",
    label: "Full Stack",
  },
];

function App() {
  const [role, setRole] = useState("");

  return (
    <Dropdown
      options={options}
      value={role}
      onChange={setRole}
      placeholder="Choose a role"
    />
  );
}

export default App;
```

### Explanation

The dropdown has two different kinds of information:

```text
isOpen
→ UI state

value
→ Selected value
```

`isOpen` is local because the dropdown controls whether it is visually open.

`value` is controlled by the parent.

This is a useful component-design pattern:

```text
Parent
  ↓
selected value

Dropdown
  ↓
open / closed state
```

### Why use `useRef`?

```jsx
const dropdownRef = useRef(null);
```

The ref gives us access to the DOM element.

Then:

```jsx
dropdownRef.current.contains(event.target)
```

checks whether the click happened inside the dropdown.

### Remember

```text
useState
→ Open / close

useRef
→ Detect outside click

useEffect
→ Add / remove document listener
```

---

## 9. Build a Reusable Button Component with Variants

### Question

Create a reusable Button component supporting:

```text
primary
secondary
danger
ghost
```

and:

```text
small
medium
large
```

### Code

```jsx
const variantClasses = {
  primary: "button-primary",
  secondary: "button-secondary",
  danger: "button-danger",
  ghost: "button-ghost",
};

const sizeClasses = {
  small: "button-small",
  medium: "button-medium",
  large: "button-large",
};

function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  onClick,
}) {
  const variantClass =
    variantClasses[variant] ?? variantClasses.primary;

  const sizeClass =
    sizeClasses[size] ?? sizeClasses.medium;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${variantClass} ${sizeClass}`}
    >
      {children}
    </button>
  );
}

export default Button;
```

### Example Usage

```jsx
<Button variant="primary">
  Save
</Button>

<Button variant="danger">
  Delete
</Button>

<Button variant="ghost" size="small">
  Cancel
</Button>

<Button variant="secondary" size="large">
  Continue
</Button>
```

### Explanation

Instead of creating:

```text
PrimaryButton
SecondaryButton
DangerButton
SmallButton
LargeButton
```

we create one reusable component.

The behavior is controlled by props:

```jsx
variant="danger"
```

and:

```jsx
size="large"
```

### Why use configuration objects?

Instead of:

```jsx
if (variant === "primary") {
  ...
}

if (variant === "danger") {
  ...
}
```

we can use:

```jsx
variantClasses[variant]
```

This makes adding variants easier.

### Interview Follow-up

What happens if someone passes:

```jsx
variant="banana"
```

The fallback prevents the component from receiving an undefined class:

```jsx
variantClasses[variant] ?? variantClasses.primary
```

### Remember

```text
Reusable component
+
Configuration props
+
Consistent API
=
Design-system building block
```

---

## 10. Build a Reusable Input Component with Error States

### Question

Build an Input component supporting:

- Label
- Input
- Error message
- Helper text
- Required state
- Disabled state

### Code

```jsx
function Input({
  id,
  label,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  type = "text",
  placeholder,
}) {
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  const describedBy = error
    ? errorId
    : helperText
      ? helperId
      : undefined;

  return (
    <div>
      <label htmlFor={id}>
        {label}

        {required && (
          <span aria-hidden="true">
            {" "}*
          </span>
        )}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      />

      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={helperId}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
```

### Example Usage

```jsx
import { useState } from "react";
import Input from "./Input";

function App() {
  const [email, setEmail] = useState("");

  const emailError =
    email && !email.includes("@")
      ? "Enter a valid email address."
      : "";

  return (
    <Input
      id="email"
      label="Email"
      type="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      error={emailError}
      helperText="We will never share your email."
      required
    />
  );
}

export default App;
```

### Explanation

The component doesn't decide what the error is.

The parent provides:

```jsx
error={emailError}
```

This keeps the component reusable.

For example:

```text
Input
→ Displays UI

Parent
→ Owns validation logic
```

### Accessibility

When there is an error:

```jsx
aria-invalid={Boolean(error)}
```

communicates that the field currently has an invalid value.

And:

```jsx
aria-describedby={errorId}
```

connects the input with the error message.

### Remember

```text
Input component
→ UI + accessibility

Parent
→ Value + validation logic
```

---

## 11. Build a Reusable Card Component

### Question

Build a flexible Card component that can accept:

- Title
- Description
- Image
- Content
- Footer/actions

### Code

```jsx
function Card({
  title,
  description,
  image,
  children,
  footer,
}) {
  return (
    <article className="card">

      {image && (
        <img
          src={image}
          alt=""
          className="card-image"
        />
      )}

      <div className="card-body">

        {title && (
          <h2 className="card-title">
            {title}
          </h2>
        )}

        {description && (
          <p className="card-description">
            {description}
          </p>
        )}

        <div className="card-content">
          {children}
        </div>

        {footer && (
          <footer className="card-footer">
            {footer}
          </footer>
        )}

      </div>
    </article>
  );
}

export default Card;
```

### Example Usage

```jsx
<Card
  title="React Course"
  description="Learn React from fundamentals to advanced concepts."
  image="/react-course.jpg"
  footer={
    <button type="button">
      Learn More
    </button>
  }
>
  <p>
    40 hours of practical projects.
  </p>
</Card>
```

### Explanation

The important concept here is:

```jsx
children
```

Instead of forcing the Card to understand every possible piece of content, we allow the parent to provide arbitrary content.

```text
Card
├── title
├── description
├── image
├── children
└── footer
```

This is **composition**.

### Interview Question

Why is composition often better than creating dozens of specialized components?

Because the component exposes flexible building blocks rather than hardcoding every possible use case.

### Remember

```text
Props
→ Configure the component

children
→ Compose content inside the component
```

---

## 12. Build a Star Rating Component

### Question

Build a reusable rating component where:

- User can select 1–5 stars
- Current rating is displayed
- Hover previews the rating
- Clicking a star updates the rating

### Code

```jsx
import { useState } from "react";

function StarRating({
  max = 5,
  value = 0,
  onChange,
}) {
  const [hoveredRating, setHoveredRating] = useState(0);

  const displayedRating =
    hoveredRating || value;

  return (
    <div>
      <div
        role="radiogroup"
        aria-label="Rating"
      >
        {Array.from(
          { length: max },
          (_, index) => {
            const rating = index + 1;
            const isActive =
              rating <= displayedRating;

            return (
              <button
                key={rating}
                type="button"
                role="radio"
                aria-checked={value === rating}
                aria-label={`${rating} out of ${max}`}
                onMouseEnter={() =>
                  setHoveredRating(rating)
                }
                onMouseLeave={() =>
                  setHoveredRating(0)
                }
                onClick={() =>
                  onChange(rating)
                }
              >
                {isActive ? "★" : "☆"}
              </button>
            );
          }
        )}
      </div>

      <p>
        Rating: {value} / {max}
      </p>
    </div>
  );
}

export default StarRating;
```

### Example Usage

```jsx
import { useState } from "react";
import StarRating from "./StarRating";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <StarRating
      value={rating}
      onChange={setRating}
      max={5}
    />
  );
}

export default App;
```

### Explanation

There are two different values:

```text
value
→ Actual selected rating

hoveredRating
→ Temporary preview
```

For example:

```text
Actual rating = 2

User moves mouse over 4

Displayed rating = 4

Mouse leaves

Displayed rating = 2
```

This is a good example of separating **committed state** from **temporary UI state**.

### Why use `Array.from()`?

Instead of manually writing:

```jsx
<button>★</button>
<button>★</button>
<button>★</button>
<button>★</button>
<button>★</button>
```

we generate the stars dynamically.

That means:

```jsx
max={10}
```

can produce ten stars without changing the component.

### Remember

```text
value
→ Selected state

hoveredRating
→ Temporary UI state

max
→ Component configuration
```

---

## 13. Build a Progress Bar

### Question

Build a reusable progress bar that accepts a percentage from `0` to `100`.

### Code

```jsx
function ProgressBar({
  value,
  label = "Progress",
}) {
  const normalizedValue = Math.min(
    100,
    Math.max(0, value)
  );

  return (
    <div>
      <div>
        <span>
          {label}
        </span>

        <span>
          {normalizedValue}%
        </span>
      </div>

      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={normalizedValue}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          style={{
            width: `${normalizedValue}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
```

### Example Usage

```jsx
<ProgressBar
  value={75}
  label="Upload progress"
/>
```

### Explanation

The component normalizes the input:

```jsx
Math.min(100, Math.max(0, value))
```

This prevents invalid values.

For example:

```text
value = -10
→ 0

value = 50
→ 50

value = 150
→ 100
```

### Why normalize input?

Reusable components shouldn't blindly trust their inputs.

The component should protect itself against invalid values.

### Accessibility

The progress bar communicates its current state with:

```jsx
aria-valuenow
aria-valuemin
aria-valuemax
```

For:

```jsx
value={75}
```

the accessibility information becomes:

```text
Current value → 75
Minimum       → 0
Maximum       → 100
```

### Remember

```text
Input
 ↓
Normalize
 ↓
Render
```

---

## 14. Build a Toggle/Switch Component

### Question

Build a reusable switch that:

- Has an on/off state
- Can be controlled by the parent
- Calls `onChange` when toggled
- Supports disabled state

### Code

```jsx
function Toggle({
  checked,
  onChange,
  disabled = false,
  label,
}) {
  return (
    <label>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(event) =>
          onChange(event.target.checked)
        }
        disabled={disabled}
      />

      <span>
        {label}
      </span>
    </label>
  );
}

export default Toggle;
```

### Example Usage

```jsx
import { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Toggle
      checked={darkMode}
      onChange={setDarkMode}
      label="Dark mode"
    />
  );
}

export default App;
```

### Explanation

This is a **controlled component**.

The parent owns the state:

```jsx
const [darkMode, setDarkMode] = useState(false);
```

The Toggle receives:

```jsx
checked={darkMode}
```

When the user changes it:

```jsx
onChange={(event) =>
  onChange(event.target.checked)
}
```

The new boolean is sent back to the parent.

### Data Flow

```text
Parent state
    ↓
checked
    ↓
Toggle
    ↓
User interaction
    ↓
onChange
    ↓
Parent state updates
```

### Why use a checkbox underneath?

A native checkbox already provides useful browser behavior and accessibility semantics.

You can visually style it to look like a switch without rebuilding all the semantics from scratch.

### Remember

```text
Switch UI
→ Can be built on checkbox semantics

checked
→ Current state

onChange
→ State update
```

---

## 15. Build a Reusable Tooltip Component

### Question

Build a tooltip that displays additional information when the user hovers over or focuses on a trigger.

### Code

```jsx
import { useId, useState } from "react";

function Tooltip({
  content,
  children,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId();

  return (
    <span>
      <button
        type="button"
        aria-describedby={
          isVisible ? tooltipId : undefined
        }
        onMouseEnter={() =>
          setIsVisible(true)
        }
        onMouseLeave={() =>
          setIsVisible(false)
        }
        onFocus={() =>
          setIsVisible(true)
        }
        onBlur={() =>
          setIsVisible(false)
        }
      >
        {children}
      </button>

      {isVisible && (
        <span
          id={tooltipId}
          role="tooltip"
        >
          {content}
        </span>
      )}
    </span>
  );
}

export default Tooltip;
```

### Example Usage

```jsx
<Tooltip content="Delete this item">
  Delete
</Tooltip>
```

### Explanation

The tooltip has temporary UI state:

```jsx
const [isVisible, setIsVisible] = useState(false);
```

It becomes visible when the trigger is:

```text
Hovered
or
Focused
```

It disappears when:

```text
Mouse leaves
or
Focus leaves
```

### Why handle focus as well as hover?

A keyboard user may never use a mouse.

If the tooltip only works with:

```jsx
onMouseEnter
```

keyboard users may never see it.

Therefore we also handle:

```jsx
onFocus
onBlur
```

### Why use `useId()`?

```jsx
const tooltipId = useId();
```

This creates a unique ID suitable for connecting:

```jsx
aria-describedby
```

with:

```jsx
id
```

So the relationship becomes:

```text
Button
  ↓
aria-describedby="tooltip-..."
  ↓
Tooltip
```

### Important Interview Point

A tooltip should generally provide **supplementary information**, not essential information required to understand or operate the interface.

Don't hide critical instructions exclusively inside a tooltip. Users, keyboards, screen readers, and assorted browser chaos deserve better.

### Remember

```text
Tooltip

Hover
→ Show

Focus
→ Show

Leave
→ Hide

Blur
→ Hide

aria-describedby
→ Connect trigger to tooltip
```

---

# Level 1 – Reusable Components Revision

```text
7. Modal
   → useEffect
   → Event listeners
   → Cleanup
   → Escape handling
   → Accessibility

8. Dropdown
   → useState
   → useRef
   → Outside-click detection
   → Controlled selected value

9. Button
   → Reusable props
   → Variants
   → Configuration objects
   → Component API design

10. Input
    → Controlled input
    → Validation
    → Error states
    → Accessibility

11. Card
    → Props
    → children
    → Composition
    → Reusability

12. Star Rating
    → State
    → Derived UI
    → Hover state
    → Dynamic rendering

13. Progress Bar
    → Props
    → Input normalization
    → Derived values
    → ARIA

14. Toggle
    → Controlled component
    → Boolean state
    → Native HTML semantics

15. Tooltip
    → Temporary UI state
    → Hover/focus behavior
    → useId
    → Accessibility
```

# Interview-Level Questions You Should Be Able to Answer

```text
1. Why should a modal's open state usually live in the parent?

2. Why does a modal need effect cleanup?

3. How would you implement focus trapping in a modal?

4. How would you detect clicks outside a dropdown?

5. What is the difference between controlled and uncontrolled components?

6. Why is component composition useful?

7. When should state be local and when should it be lifted?

8. What is derived state?

9. Why shouldn't you store values that can be calculated from existing state?

10. How would you make these components accessible?

11. How would you test these components?

12. How would you design these components for a large design system?

13. How would you prevent unnecessary re-renders?

14. How would you handle keyboard navigation?

15. How would you make these components work consistently across a large application?
```

# Core Pattern to Remember

```text
Reusable React Component

        Props
          ↓
    Component Logic
          ↓
      UI State
          ↓
    User Interaction
          ↓
      State Update
          ↓
       Re-render
```

The goal isn't merely to memorize fifteen components. You should be able to look at a new UI problem and recognize the underlying pattern: **state, props, composition, events, effects, accessibility, and a clean component API**. That's the useful part that survives after the interview question itself inevitably mutates into something annoying.

# Level 2 – State & Component Design

> These problems are designed to test whether you can model state, design reusable components, manage derived data, and handle real UI behavior instead of merely assembling JSX like decorative furniture.

---

# 16. Build a Shopping Cart

## Question

Build a React shopping cart with:

- Add item
- Remove item
- Increase quantity
- Decrease quantity
- Calculate subtotal
- Calculate total
- Persist cart using `localStorage`

---

## Code

```jsx
import { useEffect, useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 50,
  },
  {
    id: 3,
    name: "Mouse",
    price: 30,
  },
];

function ShoppingCart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addItem = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const tax = subtotal * 0.18;

  const total = subtotal + tax;

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>
            ₹{product.price}
          </p>

          <button
            type="button"
            onClick={() => addItem(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h1>Cart</h1>

      {cart.length === 0 && (
        <p>
          Your cart is empty.
        </p>
      )}

      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>

          <p>
            ₹{item.price}
          </p>

          <button
            type="button"
            onClick={() =>
              decreaseQuantity(item.id)
            }
          >
            -
          </button>

          <span>
            {" "}
            {item.quantity}{" "}
          </span>

          <button
            type="button"
            onClick={() =>
              increaseQuantity(item.id)
            }
          >
            +
          </button>

          <button
            type="button"
            onClick={() =>
              removeItem(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <p>
        Subtotal: ₹{subtotal.toFixed(2)}
      </p>

      <p>
        Tax: ₹{tax.toFixed(2)}
      </p>

      <h2>
        Total: ₹{total.toFixed(2)}
      </h2>
    </div>
  );
}

export default ShoppingCart;
```

## Explanation

The cart state is an array:

```jsx
const [cart, setCart] = useState([]);
```

Each cart item contains:

```js
{
  id: 1,
  name: "Laptop",
  price: 800,
  quantity: 2
}
```

### Add Item

If the item already exists:

```text
Laptop
quantity = 1

Add Laptop

quantity = 2
```

Otherwise, a new item is added:

```js
{
  ...product,
  quantity: 1
}
```

### Remove Item

```jsx
currentCart.filter(
  (item) => item.id !== id
);
```

Creates a new array without the selected item.

### Increase Quantity

```jsx
item.quantity + 1
```

### Decrease Quantity

```jsx
item.quantity - 1
```

When quantity reaches zero, the item is removed.

### Calculate Subtotal

```jsx
cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);
```

For:

```text
Laptop   ₹800 × 2
Mouse    ₹30 × 3
```

the calculation becomes:

```text
800 × 2 = 1600
30 × 3  = 90

Subtotal = 1690
```

### Why is subtotal derived instead of stored?

Don't do this:

```jsx
const [subtotal, setSubtotal] = useState(0);
```

because subtotal can always be calculated from `cart`.

The cart is the source of truth.

```text
cart
 ↓
subtotal
 ↓
tax
 ↓
total
```

### Persisting the Cart

The lazy initializer:

```jsx
useState(() => {
  const savedCart =
    localStorage.getItem("cart");

  return savedCart
    ? JSON.parse(savedCart)
    : [];
});
```

loads the cart when the component initializes.

Then:

```jsx
useEffect(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
}, [cart]);
```

keeps storage synchronized.

### Interview Questions

```text
Why shouldn't subtotal be stored separately?

Why should cart updates be immutable?

Why use functional state updates?

What happens if localStorage contains invalid JSON?

How would you synchronize the cart between browser tabs?

How would you move the cart state into Context?

How would you handle server-side persistence?

How would you prevent stale cart prices?

How would you handle stock limits?
```

---

# 17. Build a Multi-Step Registration Form

## Requirements

```text
Step 1 → Personal Details
Step 2 → Address
Step 3 → Account
Step 4 → Review
```

---

## Code

```jsx
import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  city: "",
  country: "",
  email: "",
  password: "",
};

function RegistrationForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] =
    useState(initialForm);

  const [errors, setErrors] =
    useState({});

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!form.firstName.trim()) {
        newErrors.firstName =
          "First name is required";
      }

      if (!form.lastName.trim()) {
        newErrors.lastName =
          "Last name is required";
      }
    }

    if (step === 2) {
      if (!form.city.trim()) {
        newErrors.city =
          "City is required";
      }

      if (!form.country.trim()) {
        newErrors.country =
          "Country is required";
      }
    }

    if (step === 3) {
      if (!form.email.trim()) {
        newErrors.email =
          "Email is required";
      }

      if (form.password.length < 8) {
        newErrors.password =
          "Password must contain at least 8 characters";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) {
      return;
    }

    setStep((currentStep) =>
      Math.min(4, currentStep + 1)
    );
  };

  const previousStep = () => {
    setStep((currentStep) =>
      Math.max(1, currentStep - 1)
    );
  };

  const submitForm = () => {
    console.log("Registration:", form);
  };

  return (
    <div>
      <h1>
        Registration
      </h1>

      <p>
        Step {step} of 4
      </p>

      {step === 1 && (
        <section>
          <h2>
            Personal Details
          </h2>

          <input
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={updateField}
          />

          {errors.firstName && (
            <p>{errors.firstName}</p>
          )}

          <input
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={updateField}
          />

          {errors.lastName && (
            <p>{errors.lastName}</p>
          )}
        </section>
      )}

      {step === 2 && (
        <section>
          <h2>
            Address
          </h2>

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={updateField}
          />

          {errors.city && (
            <p>{errors.city}</p>
          )}

          <input
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={updateField}
          />

          {errors.country && (
            <p>{errors.country}</p>
          )}
        </section>
      )}

      {step === 3 && (
        <section>
          <h2>
            Account
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={updateField}
          />

          {errors.email && (
            <p>{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={updateField}
          />

          {errors.password && (
            <p>{errors.password}</p>
          )}
        </section>
      )}

      {step === 4 && (
        <section>
          <h2>
            Review
          </h2>

          <p>
            Name: {form.firstName}{" "}
            {form.lastName}
          </p>

          <p>
            Location: {form.city},{" "}
            {form.country}
          </p>

          <p>
            Email: {form.email}
          </p>

          <button
            type="button"
            onClick={submitForm}
          >
            Create Account
          </button>
        </section>
      )}

      <div>
        {step > 1 && (
          <button
            type="button"
            onClick={previousStep}
          >
            Back
          </button>
        )}

        {step < 4 && (
          <button
            type="button"
            onClick={nextStep}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
```

## Explanation

There are three important pieces of state:

```text
step
→ Current step

form
→ All form values

errors
→ Validation errors
```

The current step controls which UI is rendered:

```jsx
step === 1
step === 2
step === 3
step === 4
```

### Why keep all form data together?

Because the final review step needs information from every previous step.

```text
Step 1
 ↓
form

Step 2
 ↓
same form

Step 3
 ↓
same form

Step 4
 ↓
review same form
```

### Interview Questions

```text
How would you preserve data when navigating backwards?

How would you validate every step independently?

How would you save progress if the user refreshes?

How would you support browser back/forward?

How would you make the steps accessible?

How would you prevent duplicate submission?
```

---

# 18. Build a Nested Comments System

## Requirements

Comments can contain replies recursively.

```text
Comment
 ├── Reply
 │    ├── Reply
 │    └── Reply
 └── Reply
```

---

## Code

```jsx
import { useState } from "react";

const initialComments = [
  {
    id: 1,
    text: "This is a great article.",
    author: "Alex",
    replies: [
      {
        id: 2,
        text: "I agree!",
        author: "Sam",
        replies: [],
      },
    ],
  },
];

function CommentItem({ comment }) {
  const [isOpen, setIsOpen] =
    useState(true);

  return (
    <article>
      <p>
        <strong>
          {comment.author}
        </strong>
      </p>

      <p>
        {comment.text}
      </p>

      {comment.replies.length > 0 && (
        <button
          type="button"
          onClick={() =>
            setIsOpen((current) => !current)
          }
        >
          {isOpen
            ? "Hide replies"
            : `Show ${comment.replies.length} replies`}
        </button>
      )}

      {isOpen &&
        comment.replies.length > 0 && (
          <div>
            {comment.replies.map(
              (reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                />
              )
            )}
          </div>
        )}
    </article>
  );
}

function Comments() {
  return (
    <section>
      <h1>
        Comments
      </h1>

      {initialComments.map(
        (comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
          />
        )
      )}
    </section>
  );
}

export default Comments;
```

## Explanation

The key idea is **recursion**.

`CommentItem` renders a comment.

Then it renders another `CommentItem` for each reply:

```jsx
<CommentItem
  comment={reply}
/>
```

Therefore the same component can handle:

```text
Comment
  ↓
Reply
  ↓
Reply
  ↓
Reply
  ↓
...
```

There is no fixed maximum depth.

### Data Structure

```js
{
  id: 1,
  text: "...",
  author: "...",
  replies: [
    {
      id: 2,
      text: "...",
      author: "...",
      replies: []
    }
  ]
}
```

### Interview Questions

```text
How would you add a reply?

How would you delete a deeply nested comment?

How would you edit a deeply nested comment?

How would you avoid excessive re-rendering?

What happens with 10,000 nested comments?

Would you store the data as a tree or normalized structure?
```

For a production application, **normalized state** can become preferable when deeply nested updates become frequent.

---

# 19. Build a File/Folder Explorer

## Requirements

```text
src
├── components
│   ├── Button
│   └── Modal
├── pages
└── utils
```

Support:

```text
Expand
Collapse
Add folder
Delete
Rename
```

---

## Code

```jsx
import { useState } from "react";

const initialFiles = [
  {
    id: "src",
    name: "src",
    type: "folder",
    children: [
      {
        id: "components",
        name: "components",
        type: "folder",
        children: [
          {
            id: "button",
            name: "Button",
            type: "folder",
            children: [],
          },
          {
            id: "modal",
            name: "Modal",
            type: "folder",
            children: [],
          },
        ],
      },
      {
        id: "pages",
        name: "pages",
        type: "folder",
        children: [],
      },
      {
        id: "utils",
        name: "utils",
        type: "folder",
        children: [],
      },
    ],
  },
];

function FileNode({
  node,
  onRename,
  onDelete,
  onAddFolder,
}) {
  const [isOpen, setIsOpen] =
    useState(true);

  const isFolder =
    node.type === "folder";

  return (
    <div>
      <div>
        {isFolder && (
          <button
            type="button"
            onClick={() =>
              setIsOpen(
                (current) => !current
              )
            }
          >
            {isOpen ? "▼" : "▶"}
          </button>
        )}

        <span>
          {node.name}
        </span>

        {isFolder && (
          <button
            type="button"
            onClick={() =>
              onAddFolder(node.id)
            }
          >
            + Folder
          </button>
        )}

        <button
          type="button"
          onClick={() =>
            onRename(node.id)
          }
        >
          Rename
        </button>

        <button
          type="button"
          onClick={() =>
            onDelete(node.id)
          }
        >
          Delete
        </button>
      </div>

      {isFolder && isOpen && (
        <div>
          {node.children.map(
            (child) => (
              <FileNode
                key={child.id}
                node={child}
                onRename={onRename}
                onDelete={onDelete}
                onAddFolder={
                  onAddFolder
                }
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

function FileExplorer() {
  const [files, setFiles] =
    useState(initialFiles);

  const renameNode = (id) => {
    const newName =
      window.prompt("New name");

    if (!newName?.trim()) {
      return;
    }

    setFiles((current) =>
      updateTree(
        current,
        id,
        (node) => ({
          ...node,
          name: newName.trim(),
        })
      )
    );
  };

  const deleteNode = (id) => {
    setFiles((current) =>
      deleteFromTree(current, id)
    );
  };

  const addFolder = (parentId) => {
    const name =
      window.prompt(
        "Folder name"
      );

    if (!name?.trim()) {
      return;
    }

    const newFolder = {
      id: crypto.randomUUID(),
      name: name.trim(),
      type: "folder",
      children: [],
    };

    setFiles((current) =>
      updateTree(
        current,
        parentId,
        (node) => ({
          ...node,
          children: [
            ...node.children,
            newFolder,
          ],
        })
      )
    );
  };

  return (
    <div>
      {files.map((node) => (
        <FileNode
          key={node.id}
          node={node}
          onRename={renameNode}
          onDelete={deleteNode}
          onAddFolder={addFolder}
        />
      ))}
    </div>
  );
}

function updateTree(
  nodes,
  targetId,
  updater
) {
  return nodes.map((node) => {
    if (node.id === targetId) {
      return updater(node);
    }

    if (node.children?.length) {
      return {
        ...node,
        children: updateTree(
          node.children,
          targetId,
          updater
        ),
      };
    }

    return node;
  });
}

function deleteFromTree(
  nodes,
  targetId
) {
  return nodes
    .filter(
      (node) => node.id !== targetId
    )
    .map((node) => ({
      ...node,
      children: node.children
        ? deleteFromTree(
            node.children,
            targetId
          )
        : [],
    }));
}

export default FileExplorer;
```

## Explanation

This problem tests **tree data structures + recursive rendering + immutable updates**.

The structure is:

```text
Node
├── id
├── name
├── type
└── children[]
```

The component recursively renders:

```jsx
<FileNode />
```

for every child.

### Updating a Tree

The helper:

```jsx
updateTree()
```

walks through the tree recursively.

```text
Current node
   ↓
Is this the target?
   ↓
Yes → update
No
   ↓
Does it have children?
   ↓
Yes → recursively search children
```

### Why not mutate the tree?

Avoid:

```jsx
node.name = newName;
```

Instead create new objects:

```jsx
{
  ...node,
  name: newName
}
```

This keeps React state updates immutable.

### Interview Questions

```text
How would you add files as well as folders?

How would you move a folder?

How would you implement drag and drop?

How would you prevent deleting a folder containing important files?

How would you optimize a tree with 100,000 nodes?

How would you normalize the tree?

How would you implement search?
```

---

# 20. Build a Kanban Board

## Requirements

Columns:

```text
Todo
In Progress
Review
Done
```

Cards should be movable between columns.

---

## Code

```jsx
import { useState } from "react";

const initialBoard = {
  todo: [
    {
      id: "1",
      title: "Build homepage",
    },
  ],

  progress: [
    {
      id: "2",
      title: "Create API integration",
    },
  ],

  review: [],

  done: [
    {
      id: "3",
      title: "Setup project",
    },
  ],
};

const columns = [
  {
    id: "todo",
    title: "Todo",
  },
  {
    id: "progress",
    title: "In Progress",
  },
  {
    id: "review",
    title: "Review",
  },
  {
    id: "done",
    title: "Done",
  },
];

function KanbanBoard() {
  const [board, setBoard] =
    useState(initialBoard);

  const moveCard = (
    cardId,
    sourceColumn,
    destinationColumn
  ) => {
    setBoard((currentBoard) => {
      const sourceCards =
        currentBoard[sourceColumn];

      const card =
        sourceCards.find(
          (item) => item.id === cardId
        );

      if (!card) {
        return currentBoard;
      }

      return {
        ...currentBoard,

        [sourceColumn]:
          currentBoard[sourceColumn].filter(
            (item) => item.id !== cardId
          ),

        [destinationColumn]: [
          ...currentBoard[
            destinationColumn
          ],
          card,
        ],
      };
    });
  };

  return (
    <div>
      {columns.map((column) => (
        <section key={column.id}>
          <h2>
            {column.title}
          </h2>

          {board[column.id].map(
            (card) => (
              <article key={card.id}>
                <p>
                  {card.title}
                </p>

                <button
                  type="button"
                  disabled={
                    column.id === "todo"
                  }
                  onClick={() =>
                    moveCard(
                      card.id,
                      column.id,
                      "todo"
                    )
                  }
                >
                  Todo
                </button>

                <button
                  type="button"
                  disabled={
                    column.id === "progress"
                  }
                  onClick={() =>
                    moveCard(
                      card.id,
                      column.id,
                      "progress"
                    )
                  }
                >
                  In Progress
                </button>

                <button
                  type="button"
                  disabled={
                    column.id === "review"
                  }
                  onClick={() =>
                    moveCard(
                      card.id,
                      column.id,
                      "review"
                    )
                  }
                >
                  Review
                </button>

                <button
                  type="button"
                  disabled={
                    column.id === "done"
                  }
                  onClick={() =>
                    moveCard(
                      card.id,
                      column.id,
                      "done"
                    )
                  }
                >
                  Done
                </button>
              </article>
            )
          )}
        </section>
      ))}
    </div>
  );
}

export default KanbanBoard;
```

## Explanation

The board is modeled as:

```js
{
  todo: [],
  progress: [],
  review: [],
  done: []
}
```

Moving a card means:

```text
Remove card
from source column

+

Add card
to destination column
```

### Important State Design

The board is the source of truth.

We don't need:

```jsx
const [cardColumn, setCardColumn] =
  useState(...);
```

for every card.

That would create unnecessary duplicated state.

### Interview Follow-up

A real Kanban interview would likely ask you to add:

```text
Drag and drop
Card ordering
Create card
Delete card
Edit card
Persistence
Optimistic API updates
Undo
Keyboard accessibility
Multiple users
Real-time updates
```

---

# 21. Build a Reusable Data Table

## Requirements

Build a reusable table supporting:

```text
Sorting
Filtering
Pagination
Row selection
Column configuration
```

---

## Code

```jsx
import { useMemo, useState } from "react";

const defaultColumns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
    label: "Role",
  },
];

function DataTable({
  data,
  columns = defaultColumns,
  pageSize = 5,
}) {
  const [search, setSearch] =
    useState("");

  const [sort, setSort] =
    useState({
      key: null,
      direction: "asc",
    });

  const [page, setPage] =
    useState(1);

  const [selectedIds, setSelectedIds] =
    useState(new Set());

  const filteredData = useMemo(() => {
    const query =
      search.toLowerCase().trim();

    if (!query) {
      return data;
    }

    return data.filter((row) =>
      columns.some((column) =>
        String(row[column.key])
          .toLowerCase()
          .includes(query)
      )
    );
  }, [data, search, columns]);

  const sortedData = useMemo(() => {
    if (!sort.key) {
      return filteredData;
    }

    return [...filteredData].sort(
      (a, b) => {
        const first = String(
          a[sort.key]
        );

        const second = String(
          b[sort.key]
        );

        const result =
          first.localeCompare(second);

        return sort.direction === "asc"
          ? result
          : -result;
      }
    );
  }, [filteredData, sort]);

  const totalPages = Math.ceil(
    sortedData.length / pageSize
  );

  const paginatedData = useMemo(() => {
    const start =
      (page - 1) * pageSize;

    return sortedData.slice(
      start,
      start + pageSize
    );
  }, [
    sortedData,
    page,
    pageSize,
  ]);

  const toggleSort = (key) => {
    setSort((currentSort) => {
      if (currentSort.key !== key) {
        return {
          key,
          direction: "asc",
        };
      }

      return {
        key,
        direction:
          currentSort.direction === "asc"
            ? "desc"
            : "asc",
      };
    });
  };

  const toggleSelection = (id) => {
    setSelectedIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <div>
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setPage(1);
        }}
        placeholder="Search..."
      />

      <table>
        <thead>
          <tr>
            <th>
              Select
            </th>

            {columns.map(
              (column) => (
                <th key={column.key}>
                  <button
                    type="button"
                    onClick={() =>
                      toggleSort(
                        column.key
                      )
                    }
                  >
                    {column.label}
                  </button>
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map(
            (row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.has(
                      row.id
                    )}
                    onChange={() =>
                      toggleSelection(
                        row.id
                      )
                    }
                  />
                </td>

                {columns.map(
                  (column) => (
                    <td
                      key={column.key}
                    >
                      {row[column.key]}
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>

      <div>
        <button
          type="button"
          disabled={page === 1}
          onClick={() =>
            setPage(
              (current) =>
                current - 1
            )
          }
        >
          Previous
        </button>

        <span>
          Page {page} of{" "}
          {totalPages || 1}
        </span>

        <button
          type="button"
          disabled={
            page >= totalPages
          }
          onClick={() =>
            setPage(
              (current) =>
                current + 1
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataTable;
```

## Example Data

```jsx
const users = [
  {
    id: 1,
    name: "Alex",
    email: "alex@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Sam",
    email: "sam@example.com",
    role: "User",
  },
];
```

### Explanation

This problem contains several layers of derived data:

```text
Original data
      ↓
Filtering
      ↓
Sorting
      ↓
Pagination
      ↓
Rendered rows
```

That order matters.

### Why use `useMemo`?

Filtering, sorting, and pagination produce derived values.

```jsx
const filteredData = useMemo(...)
```

```jsx
const sortedData = useMemo(...)
```

```jsx
const paginatedData = useMemo(...)
```

For a small table, this isn't necessarily required.

For large datasets, avoiding unnecessary work can become important.

### Important Interview Point

For a production table with millions of records, you generally shouldn't download everything and perform all operations in the browser.

You may use:

```text
Server-side filtering
Server-side sorting
Server-side pagination
```

The browser should not be asked to cosplay as a database.

---

# 22. Build a Reusable Form Engine

## Question

Build a form system where the UI is generated from configuration.

Example:

```js
const fields = [
  {
    name: "email",
    type: "email",
    required: true,
  },
  {
    name: "age",
    type: "number",
  },
];
```

---

## Code

```jsx
import { useState } from "react";

const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    required: true,
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    required: true,
    options: [
      {
        value: "developer",
        label: "Developer",
      },
      {
        value: "designer",
        label: "Designer",
      },
      {
        value: "manager",
        label: "Manager",
      },
    ],
  },
];

function FormEngine({
  fields,
  onSubmit,
}) {
  const [values, setValues] =
    useState({});

  const [errors, setErrors] =
    useState({});

  const updateField = (
    name,
    value
  ) => {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    fields.forEach((field) => {
      const value = values[field.name];

      if (
        field.required &&
        !String(value ?? "").trim()
      ) {
        newErrors[field.name] =
          `${field.label} is required`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors)
      .length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit(values);
  };

  const renderField = (field) => {
    const value =
      values[field.name] ?? "";

    const commonProps = {
      id: field.name,
      name: field.name,
      value,
      required: field.required,
      onChange: (event) =>
        updateField(
          field.name,
          event.target.value
        ),
    };

    if (field.type === "select") {
      return (
        <select {...commonProps}>
          <option value="">
            Select...
          </option>

          {field.options?.map(
            (option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            )
          )}
        </select>
      );
    }

    return (
      <input
        {...commonProps}
        type={field.type}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>
            {field.label}
          </label>

          {renderField(field)}

          {errors[field.name] && (
            <p>
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <FormEngine
      fields={fields}
      onSubmit={(values) => {
        console.log(
          "Submitted:",
          values
        );
      }}
    />
  );
}

export default App;
```

## Explanation

This is different from building a normal form.

Instead of hardcoding:

```jsx
<input />
<input />
<select />
```

we describe the form as data:

```js
const fields = [
  {
    name: "email",
    type: "email",
  },
  {
    name: "age",
    type: "number",
  },
];
```

Then React converts that configuration into UI.

```text
Configuration
      ↓
Form Engine
      ↓
Field Renderer
      ↓
React components
```

### Why is this powerful?

You can create multiple forms without rewriting the form engine.

For example:

```js
const loginFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
];
```

Another form:

```js
const profileFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
  },
];
```

Same engine.

Different configuration.

### Extending the Engine

A serious implementation could support:

```js
{
  name: "email",
  type: "email",
  label: "Email",
  required: true,
  placeholder: "you@example.com",
  validation: {
    minLength: 5,
  }
}
```

And:

```js
{
  name: "country",
  type: "select",
  options: [...]
}
```

And:

```js
{
  name: "skills",
  type: "checkbox-group",
  options: [...]
}
```

The engine can then map field types to components:

```text
text
→ TextInput

email
→ EmailInput

number
→ NumberInput

select
→ Select

checkbox
→ CheckboxGroup

radio
→ RadioGroup

textarea
→ Textarea
```

---

# Level 2 – What These Problems Actually Test

```text
16. Shopping Cart
    → State modeling
    → Immutable updates
    → Derived state
    → localStorage
    → Array operations

17. Multi-Step Form
    → Complex form state
    → Validation
    → State persistence
    → Conditional rendering
    → State machine thinking

18. Nested Comments
    → Recursive components
    → Tree structures
    → Nested state
    → Component composition

19. File Explorer
    → Tree data structures
    → Recursive rendering
    → Immutable tree updates
    → State transformation

20. Kanban Board
    → Complex state
    → Moving entities
    → Immutable updates
    → State normalization

21. Data Table
    → Derived state
    → Filtering
    → Sorting
    → Pagination
    → Selection
    → Reusable APIs

22. Form Engine
    → Configuration-driven UI
    → Component architecture
    → Dynamic rendering
    → Abstraction
    → Reusable systems
```

# The Most Important Concept in Level 2

Don't think:

```text
"I need to build a shopping cart."
```

Think:

```text
What is the source of truth?
        ↓
What state actually needs to exist?
        ↓
What values can be derived?
        ↓
How does data change?
        ↓
How do I update nested data safely?
        ↓
Which component owns which state?
        ↓
Can this logic be reused?
        ↓
What happens when the data becomes huge?
```

For the ₹1 Cr target, **state modeling is more important than JSX speed**.

A candidate who can type 100 lines of React in five minutes is common now. A candidate who can look at a messy product requirement and correctly decide **what state should exist, where it should live, how it flows, and how it scales** is considerably more valuable.



















Level 3: Async React
Fetch and display users from an API.

Then add:

Loading
Error
Empty state
Retry
Build a search component with API-based search.

Requirements:

User types
   ↓
Debounce
   ↓
API request
   ↓
Results
Handle race conditions in search requests.

Example:

User searches:


react
react hooks
react hooks tutorial

The older request should not overwrite the newest result.

Build an autocomplete component.

Requirements:

Debouncing
Keyboard navigation
Loading state
Empty state
Error state
Selection
Implement infinite scrolling.
Load page 1
     ↓
Scroll
     ↓
Load page 2
     ↓
Scroll
     ↓
Load page 3
Build pagination with API data.
Implement retry with exponential backoff.
Build a polling component.

Example:

GET /job/status


pending
   ↓
pending
   ↓
processing
   ↓
completed
Build an optimistic update.

Example:

Like button


Click
 ↓
UI immediately changes
 ↓
API request
 ↓
Success → keep
Failure → rollback
Build a request cache.
fetchUser(10)
      ↓
API


fetchUser(10)
      ↓
Cache



Level 4: React Performance

This is where interviews stop being "make a pretty button" and start becoming engineering.

A component renders 1,000 times unnecessarily. Find and fix the problem.
Optimize a large list containing 10,000 items.
Build a virtualized list.
Prevent unnecessary child re-renders.
Demonstrate and fix incorrect useMemo usage.
Demonstrate and fix incorrect useCallback usage.
Fix an expensive computation blocking rendering.
Implement lazy loading for routes.
Implement lazy loading for components.
Build an image-heavy gallery and optimize rendering.
Find a memory leak caused by an effect.
Fix an effect that creates multiple event listeners.
Fix unnecessary API requests caused by incorrect dependencies.
Diagnose a component that enters an infinite render loop.


Level 5: Real React Debugging

These are extremely important.

Fix a useEffect infinite loop.
Fix stale state inside an asynchronous callback.
Fix a stale closure bug.
Fix an incorrect dependency array.
Fix a race condition between two API requests.
Fix a component updating state after unmount.
Fix a form where typing causes the entire application to re-render.
Fix a modal that doesn't close when clicking outside.
Fix a dropdown that closes before its selection handler runs.
Fix a component that loses state unexpectedly after re-rendering.
Find why a list behaves incorrectly when items are reordered.
Diagnose incorrect use of React keys.
Fix duplicated API calls in development.
Debug a component whose UI doesn't match its state.
Level 6: Advanced React
Implement a custom useDebounce hook.
Implement a custom useThrottle hook.
Implement a custom usePrevious hook.
Implement a custom useLocalStorage hook.
Implement a custom useFetch hook.
Implement a custom useClickOutside hook.
Implement a custom useMediaQuery hook.
Build a global toast notification system.
Build a global modal system.
Build a theme system.
Light
Dark
System
Implement authentication state using Context.
Build protected routes.
Build role-based UI.
Admin
Editor
User
Build a permission system.
users.read
users.create
users.delete
reports.view
Build an error boundary system.
Level 7: Production-Style Projects

This is the section I'd take very seriously for your ₹1 Cr target.

76. Build an Admin Dashboard

Requirements:

Authentication
Dashboard
Users
Search
Filter
Sort
Pagination
CRUD
Role-based permissions
Charts
Notifications
Responsive layout
Error handling
Loading states
77. Build an E-commerce Frontend

Requirements:

Product listing
Search
Filters
Sorting
Product details
Cart
Wishlist
Checkout
Authentication
Order history
Pagination
Optimistic updates
78. Build a Social Feed

Requirements:

Posts
Likes
Comments
Infinite scrolling
Create post
Delete post
Optimistic updates
Image upload
Notifications
79. Build a Real-Time Chat Application

Requirements:

Conversation list
Messages
Unread count
Typing indicator
Online status
Message status
Pagination
Optimistic messages
WebSocket integration
Reconnect handling
80. Build a Collaborative Kanban Board

Requirements:

Multiple users
Drag and drop
Real-time updates
Optimistic UI
Conflict handling
Undo
Activity history
Permissions

This is much closer to the kind of problem where someone can actually demonstrate senior-level frontend engineering.

Level 8: "Senior Engineer" React Problems

These aren't necessarily "build X from scratch." You're given an existing application and asked to reason.

81. The dashboard takes 5 seconds to become interactive.

Find the bottleneck.

Explain:

How would you investigate?
What would you measure?
What would you change?
How would you verify the improvement?
82. A page has 30 API requests.

Reduce the number without breaking functionality.

83. A table contains 50,000 rows.

Users complain that scrolling is slow.

Design the solution.

Possible areas:

Virtualization
Pagination
Server-side filtering
Memoization
Data fetching
Rendering strategy
84. Search occasionally displays incorrect results.

The API is correct.

Find the frontend race condition.

85. Users lose unsaved form data when navigating.

Design a solution.

86. A React application has duplicated state everywhere.

Refactor the architecture.

87. Components have become giant 1,000-line files.

Design a component architecture to break them apart without creating meaningless "ButtonWrapper" nonsense.

88. Multiple pages independently implement the same API logic.

Design a reusable data-fetching abstraction.

89. A production application crashes because one component throws an exception.

Design an error-handling strategy that prevents the entire UI from becoming a digital corpse.

90. Design a frontend architecture for a large React application.

Discuss:

Routing
Components
State
API layer
Caching
Authentication
Authorization
Error handling
Testing
Performance
Code splitting
Observability
The Most Important 20

If you eventually want to simulate an actual interview, I'd prioritize these:

1.  Debounced search
2.  Autocomplete
3.  Infinite scrolling
4.  Pagination
5.  Shopping cart
6.  Multi-step form
7.  Data table
8.  File explorer
9.  Kanban board
10. Nested comments


11. Optimistic update
12. Request caching
13. Race-condition handling
14. Virtualized list
15. Custom hooks
16. Authentication
17. Protected routes
18. Role-based permissions
19. Performance debugging
20. Production React architecture
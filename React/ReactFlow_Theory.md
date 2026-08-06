# 1. What is React Flow?

## Interview Answer

> React Flow is an open-source React library used to build interactive node-based applications such as workflow editors, flowcharts, AI pipeline builders, chatbot builders, and visual programming tools. It provides customizable nodes, edges, drag-and-drop functionality, zooming, panning, and many other features.

---

# Simple Definition

React Flow is a library that lets you create applications where users can connect boxes (called **nodes**) using lines (called **edges**).

Instead of writing workflows as code, users can build them visually by dragging, dropping, and connecting nodes.

---

# Real-Life Example

Think about **Zapier**.

Instead of writing code like:

```text
When Email Arrives

↓

Save Attachment

↓

Upload to Google Drive

↓

Send Slack Message
```

Users simply drag and connect blocks.

React Flow makes building interfaces like this easy.

---

# What Can You Build with React Flow?

- Workflow Builders
- AI Agent Builders
- Chatbot Builders
- Flowcharts
- Decision Trees
- Mind Maps
- Data Pipelines
- Visual Programming Editors
- API Workflow Builders
- ETL Tools
- Automation Platforms

---

# Basic Example

```jsx
import {
  ReactFlow,
} from "@xyflow/react";

function App() {
  return (
    <ReactFlow
      nodes={[]}
      edges={[]}
    />
  );
}
```

---

# Core Concepts

```
Node

↓

Edge

↓

Handle

↓

React Flow Canvas
```

---

# React Flow Terminology

## Node

A box that represents something.

Example:

```
Login

Fetch API

Send Email
```

---

## Edge

A line connecting two nodes.

```
Login
   │
   ▼
Dashboard
```

---

## Handle

A connection point on a node.

```
+-----------+
|   Login   |
|     ●     | ← Handle
+-----------+
```

---

# Why is React Flow Popular?

Because it provides many built-in features.

Instead of building everything yourself, React Flow already supports:

- Drag & Drop
- Zoom
- Pan
- Node Selection
- Connections
- MiniMap
- Background Grid
- Custom Nodes
- Custom Edges
- Keyboard Shortcuts

---

# Internal Architecture

```text
React Application

        │

        ▼

React Flow

        │

 ┌──────┴──────┐

 ▼             ▼

Nodes        Edges

        │

        ▼

Canvas

        │

        ▼

User Interaction
```

---

# Advantages

- Easy to learn
- Highly customizable
- Open source
- Built for React
- Excellent documentation
- Supports large graphs
- Production ready

---

# Common Interview Questions

### Is React Flow a framework?

No.

It is a React library.

---

### Is React Flow only for flowcharts?

No.

It can build many node-based applications such as AI builders, workflow automation tools, visual programming editors, and mind maps.

---

# Key Points

- React library
- Node-based UI
- Interactive canvas
- Highly customizable
- Open source

---

# 2. Why was React Flow created?

## Interview Answer

> React Flow was created to simplify the development of interactive node-based interfaces. Instead of manually implementing dragging, connecting, zooming, panning, and graph management, developers can use React Flow's ready-made components and APIs.

---

# The Problem Before React Flow

Imagine building a workflow editor from scratch.

You would need to implement:

- Dragging nodes
- Drawing lines
- Connecting nodes
- Moving edges
- Zooming
- Panning
- Selecting nodes
- Multi-selection
- Keyboard shortcuts
- State management

Thousands of lines of code.

---

# Without React Flow

```
Developer

↓

Write Drag Logic

↓

Write Zoom Logic

↓

Write Edge Logic

↓

Write Selection Logic

↓

Write Graph Logic

↓

Months of Work
```

---

# With React Flow

```
Install Library

↓

Create Nodes

↓

Create Edges

↓

Done
```

Much simpler.

---

# Example

Without React Flow

```text
Build everything manually.
```

With React Flow

```jsx
<ReactFlow
  nodes={nodes}
  edges={edges}
/>
```

---

# Real-Life Analogy

Imagine building a house.

Without React Flow:

```
Make Bricks

↓

Make Cement

↓

Build Walls

↓

Build Roof
```

With React Flow:

```
Use Ready Materials

↓

Assemble House
```

You focus on your application instead of low-level details.

---

# Why Companies Use React Flow

Companies like building products quickly.

Examples:

- AI Workflow Tools
- Automation Platforms
- Internal Dashboards
- Visual Editors

React Flow reduces development time significantly.

---

# Common Interview Questions

### Why not build everything manually?

Because it takes much more time, is harder to maintain, and React Flow already solves common graph-related problems.

---

### Does React Flow replace React?

No.

It works **inside** a React application.

---

# Key Points

- Saves development time
- Handles complex graph logic
- Lets developers focus on business features
- Improves maintainability

---

# 3. When should you use React Flow?

## Interview Answer

> Use React Flow whenever your application requires users to visually create, edit, or manage connected nodes and relationships.

---

# Simple Rule

Ask yourself one question:

**Do users need to connect boxes together?**

If the answer is **Yes**, React Flow is a strong choice.

---

# Common Use Cases

## Workflow Builder

```
Start

↓

Upload File

↓

Validate

↓

Store Database
```

---

## AI Pipeline

```
Prompt

↓

LLM

↓

Output
```

---

## Chatbot Builder

```
Greeting

↓

Ask Question

↓

Save Response
```

---

## API Builder

```
Login API

↓

Fetch Users

↓

Display Data
```

---

## Mind Map

```
Programming

├── HTML

├── CSS

├── JavaScript

└── React
```

---

## Decision Tree

```
Age > 18

↓

Yes

↓

Allow Access
```

---

## Visual Programming

```
Input

↓

Multiply

↓

Output
```

---

# Real Companies Using Similar Concepts

- Zapier
- Make.com
- LangFlow
- n8n
- Node-RED
- Airflow (visual DAGs)
- AI workflow tools

---

# Good Projects for React Flow

- Automation platforms
- Workflow engines
- AI builders
- Data pipelines
- Flowchart editors
- Dependency graphs
- ETL tools

---

# Common Interview Questions

### Is React Flow good for dashboards?

Usually no.

A dashboard doesn't require connected nodes.

---

### Is React Flow suitable for workflow applications?

Yes.

That's one of its primary use cases.

---

# Key Points

Use React Flow when:

- Users connect nodes
- Users create workflows
- Relationships between items matter
- Interactive graph editing is required

---

# 4. When should you NOT use React Flow?

## Interview Answer

> React Flow should not be used for applications that do not involve node-based interactions. Using it unnecessarily increases complexity without providing meaningful benefits.

---

# Do NOT Use React Flow For

## Portfolio Website

```
About

Projects

Contact
```

A normal React application is enough.

---

## Blog

```
Articles

Categories

Comments
```

No node graph is needed.

---

## E-commerce Website

```
Products

Cart

Checkout
```

Again, no graph editing.

---

## Admin Dashboard

```
Charts

Tables

Forms
```

Use standard React components.

---

## Login Page

```
Username

Password

Login
```

React Flow would add unnecessary complexity.

---

# Easy Rule

If users **do not** connect things visually,

don't use React Flow.

---

# Wrong Example

Building this with React Flow:

```
Login

↓

Signup

↓

Forgot Password
```

This is navigation, not a node graph.

---

# Better Alternatives

For forms:

- React Hook Form

For tables:

- TanStack Table

For charts:

- Recharts

For dashboards:

- Normal React Components

---

# Common Interview Questions

### Should React Flow be used everywhere?

No.

Choose it only when your problem involves node-based relationships.

---

### Is React Flow a replacement for all UI libraries?

No.

It solves a specific class of UI problems.

---

# Key Points

Avoid React Flow when:

- Building CRUD apps
- Building forms
- Building dashboards
- Building blogs
- Building e-commerce sites

Use it only when graph visualization and editing are required.

---

# 5. Features of React Flow

## Interview Answer

> React Flow provides a rich set of features for building interactive graph-based applications, including customizable nodes and edges, drag-and-drop support, zooming, panning, connection validation, event handling, and state management.

---

# Major Features

## 1. Custom Nodes

You can create your own node designs.

```
+----------------+
| AI Agent       |
| GPT-5          |
+----------------+
```

---

## 2. Custom Edges

Design different connection styles.

```
Straight

Bezier

Step

Smooth Step

Animated
```

---

## 3. Drag and Drop

Move nodes anywhere on the canvas.

```
Before

A

After Drag

      A
```

---

## 4. Zoom

Zoom in for details.

Zoom out for an overview.

---

## 5. Pan

Move around the canvas without moving nodes.

---

## 6. MiniMap

Displays a small overview of the entire graph.

```
+-----------+
|  MiniMap  |
+-----------+
```

---

## 7. Background Grid

Helps align nodes neatly.

---

## 8. Controls

Built-in buttons for:

- Zoom In
- Zoom Out
- Fit View

---

## 9. Multiple Node Types

Examples:

- Text Node
- Number Node
- API Node
- Image Node
- Custom Components

---

## 10. Multiple Edge Types

- Straight
- Bezier
- Step
- Smooth Step
- Floating
- Custom

---

## 11. Event Handling

Examples:

```jsx
onNodeClick()

onConnect()

onNodeDrag()

onSelectionChange()
```

---

## 12. Connection Validation

Prevent invalid connections.

Example:

```
Image Node

❌

Database Node
```

---

## 13. Built-in Hooks

Examples:

```jsx
useReactFlow()

useNodesState()

useEdgesState()
```

---

## 14. Serialization

Save the graph.

```json
{
  "nodes": [],
  "edges": []
}
```

Load it again later.

---

## 15. Highly Customizable

Almost every part of React Flow can be customized, including nodes, edges, handles, controls, and interactions.

---

# Feature Overview

```text
React Flow

├── Nodes
├── Edges
├── Handles
├── Drag & Drop
├── Zoom
├── Pan
├── MiniMap
├── Controls
├── Background
├── Custom Components
├── Events
├── Hooks
├── Serialization
└── Validation
```

---

# Common Interview Questions

### What is React Flow's biggest advantage?

It provides a production-ready foundation for building node-based applications while remaining highly customizable.

---

### Can React Flow handle large workflows?

Yes.

With good optimization techniques, it can handle large graphs efficiently.

---

# Key Points

- Custom Nodes
- Custom Edges
- Drag & Drop
- Zoom & Pan
- MiniMap
- Background
- Controls
- Hooks
- Events
- Validation
- Serialization
- High Customizability

# 6. Advantages of React Flow

## Interview Answer

> React Flow is a powerful React library for building interactive node-based applications. It provides built-in support for nodes, edges, drag-and-drop, zooming, panning, custom components, and state management, allowing developers to build complex graph editors quickly.

---

# Simple Definition

React Flow saves developers from building graph editors from scratch.

Instead of spending weeks creating dragging, connecting, zooming, and selection logic, you can focus on your application's business features.

---

# Advantages

## 1. Easy to Learn

If you already know React,

learning React Flow becomes much easier.

Example

```jsx
<ReactFlow
  nodes={nodes}
  edges={edges}
/>
```

---

## 2. Saves Development Time

Without React Flow

```
Create Canvas

↓

Create Drag Logic

↓

Create Connection Logic

↓

Create Zoom

↓

Create Pan

↓

Create Selection

↓

Create Edge Rendering
```

Months of development.

With React Flow

```
Install Library

↓

Configure Nodes

↓

Configure Edges

↓

Done
```

---

## 3. Highly Customizable

You can customize almost everything.

Examples

- Custom Nodes
- Custom Edges
- Handles
- Toolbar
- MiniMap
- Background
- Controls

---

## 4. Built for React

React Flow follows React principles.

You can use

- Hooks
- State
- Props
- Components
- Context

just like any React project.

---

## 5. Built-in Features

You don't need to create these yourself.

- Drag & Drop
- Zoom
- Pan
- MiniMap
- Grid Background
- Keyboard Shortcuts
- Selection
- Connection Handling

---

## 6. Great Performance

React Flow is optimized for rendering graphs.

It avoids unnecessary re-renders when used correctly.

---

## 7. Open Source

React Flow is open source.

You can inspect the code, contribute, or customize your implementation.

---

## 8. Active Community

Many developers use React Flow.

This means

- Better documentation
- Community examples
- Bug fixes
- Regular updates

---

## 9. Supports Large Projects

Used for

- AI Workflow Builders
- Automation Platforms
- Data Pipelines
- Workflow Editors
- Internal Enterprise Tools

---

## 10. Easy State Management

React Flow provides hooks like

```jsx
useNodesState()

useEdgesState()

useReactFlow()
```

making state updates much easier.

---

# Advantages Summary

```text
React Flow

├── Easy to Learn
├── Saves Development Time
├── Highly Customizable
├── Built for React
├── Performance Optimized
├── Open Source
├── Rich Features
├── Active Community
└── Production Ready
```

---

# Common Interview Questions

### Why do companies choose React Flow?

Because it significantly reduces development time while providing a professional graph editing experience.

---

### Is React Flow suitable for production?

Yes.

Many production applications use React Flow.

---

# Key Points

- Easy to learn
- Highly customizable
- Open source
- Performance optimized
- Built for React
- Production ready

---

# 7. Limitations of React Flow

## Interview Answer

> Although React Flow is a powerful library, it has limitations. It is designed specifically for node-based interfaces and is not suitable for every type of visualization or application.

---

# Simple Definition

React Flow is excellent for workflow editors,

but it is **not** the right solution for every project.

---

# Limitations

## 1. Only for Node-Based Applications

Good

```
Workflow Builder

↓

Chatbot

↓

AI Pipeline
```

Bad

```
Blog Website

Portfolio

Dashboard
```

---

## 2. Performance Can Decrease

If you create thousands of nodes without optimization,

the application can become slow.

Solutions

- React.memo
- Virtualization
- Efficient state updates

---

## 3. Learning Curve

Beginners often need time to understand concepts like

- Nodes
- Edges
- Handles
- Viewport
- Connection validation

---

## 4. Complex Customization

Simple projects are easy.

Advanced features such as

- Undo/Redo
- Auto Layout
- Grouping
- Collaboration

require additional implementation.

---

## 5. React Dependency

React Flow only works inside React applications.

It cannot be used directly with

- Angular
- Vue
- Svelte

without React.

---

## 6. Layout Is Manual

By default,

React Flow does not automatically arrange nodes.

You often need libraries such as

- Dagre
- ELK

for automatic layouts.

---

## 7. Large Graph Challenges

Very large graphs may require

- Performance optimization
- Lazy rendering
- Better state management

---

# Limitations Summary

```text
React Flow

├── Only for Node Graphs
├── React Only
├── Learning Curve
├── Manual Layout
├── Advanced Features Need Extra Work
└── Performance Tuning for Large Graphs
```

---

# Common Interview Questions

### Is React Flow good for dashboards?

No.

It is designed for graph editing, not dashboards.

---

### Can React Flow automatically organize nodes?

Not by itself.

You usually integrate layout libraries like Dagre or ELK.

---

# Key Points

- Purpose-specific library
- React-only
- Requires optimization for very large graphs
- Auto-layout requires external libraries

---

# 8. React Flow vs D3.js

## Interview Answer

> React Flow is designed specifically for interactive node-based editors, while D3.js is a general-purpose data visualization library used to create charts, graphs, maps, and highly customized visualizations.

---

# Simple Difference

React Flow

```
Workflow Builder
```

D3.js

```
Data Visualization
```

---

# Comparison

| Feature | React Flow | D3.js |
|----------|------------|--------|
| Purpose | Workflow & Graph Editor | Data Visualization |
| Learning Curve | Easy | Difficult |
| Drag & Drop | Built-in | Manual |
| Zoom & Pan | Built-in | Manual |
| Nodes & Edges | Built-in | Manual |
| Charts | Limited | Excellent |
| Flow Editors | Excellent | Possible but requires much more work |
| React Integration | Excellent | Good |

---

# Example Use Cases

### React Flow

```
AI Agent

↓

LLM

↓

Output
```

---

### D3.js

```
Sales Data

↓

Bar Chart

↓

Line Chart

↓

Pie Chart
```

---

# Which One Should You Choose?

Choose **React Flow** when building:

- Workflow Builders
- AI Pipelines
- Chatbot Editors
- Visual Programming Tools

Choose **D3.js** when building:

- Dashboards
- Charts
- Data Analytics
- Scientific Visualizations

---

# Common Interview Questions

### Can D3.js build workflow editors?

Yes,

but you must implement almost everything yourself.

---

### Is React Flow better than D3.js?

Not universally.

Choose the tool based on the problem you're solving.

---

# Key Points

- React Flow → Node Editors
- D3.js → Data Visualization

---

# 9. React Flow vs GoJS

## Interview Answer

> React Flow is an open-source React library for node-based applications, while GoJS is a commercial JavaScript library that provides advanced diagramming capabilities with many enterprise features built in.

---

# Simple Difference

React Flow

```
Open Source

React Focused
```

GoJS

```
Commercial

Enterprise Diagramming
```

---

# Comparison

| Feature | React Flow | GoJS |
|----------|------------|-------|
| License | Open Source | Commercial |
| React Support | Excellent | Good |
| Cost | Free | Paid (for most commercial use) |
| Workflow Builder | Excellent | Excellent |
| Enterprise Features | Moderate | Extensive |
| Customization | High | High |
| Built-in Diagram Types | Limited | Many |

---

# When to Choose React Flow

- React Projects
- Startups
- AI Builders
- Internal Tools
- Open-source preference

---

# When to Choose GoJS

- Enterprise applications
- Complex organizational charts
- BPMN diagrams
- UML diagrams
- Rich commercial diagramming requirements

---

# Common Interview Questions

### Why do many startups choose React Flow?

Because it's open source, React-friendly, and flexible.

---

### Why do enterprises choose GoJS?

Because it includes many advanced diagramming features and commercial support.

---

# Key Points

- React Flow → Open source
- GoJS → Commercial
- Both support node-based applications

---

# 10. React Flow vs Draw.io

## Interview Answer

> React Flow is a developer library used to build custom node-based applications, whereas Draw.io is a ready-to-use diagramming application for creating diagrams manually.

---

# Simple Difference

React Flow

```
Library

↓

Build Your Own App
```

Draw.io

```
Application

↓

Use It Directly
```

---

# Comparison

| Feature | React Flow | Draw.io |
|----------|------------|----------|
| Type | React Library | Diagramming Software |
| Requires Coding | Yes | No |
| Custom Business Logic | Yes | Very Limited |
| Workflow Builder | Yes | No |
| API Integration | Yes | Limited |
| End Users Create Diagrams | Yes (inside your app) | Yes (inside Draw.io) |
| Best For | Developers | General Users |

---

# Example

### React Flow

Build your own automation platform.

```
Email

↓

AI

↓

Slack
```

---

### Draw.io

Create a diagram manually.

```
Rectangle

↓

Arrow

↓

Circle
```

Save it as an image or document.

---

# Which One Should You Choose?

Choose **React Flow** if you're building a product where users interact with workflows inside your application.

Choose **Draw.io** if you simply need to create diagrams or documentation.

---

# Common Interview Questions

### Can Draw.io replace React Flow?

No.

Draw.io is a finished application.

React Flow is a development library.

---

### Can React Flow create diagrams like Draw.io?

Yes,

but you must build that functionality yourself.

---

# Key Points

- React Flow → Build applications
- Draw.io → Create diagrams
- One is a library, the other is a complete software product


# 11. Real-world Applications of React Flow

## Interview Answer

> React Flow is used to build interactive node-based applications where users visually create, edit, and connect different components. It is commonly used for workflow automation, AI pipelines, flowcharts, visual programming, and graph-based editors.

---

# Simple Definition

Whenever users need to **drag boxes and connect them with lines**, React Flow is a good choice.

Instead of writing code,

users create workflows visually.

---

# 1. Workflow Automation

Example

```
Start

↓

Receive Email

↓

Extract Attachment

↓

Upload to Google Drive

↓

Send Slack Notification
```

Used by

- Zapier
- Make.com
- n8n

---

# 2. AI Workflow Builder

Example

```
User Prompt

↓

OpenAI

↓

Summarize

↓

Database

↓

Return Response
```

Used by

- LangFlow
- Flowise
- AI Agent Builders

---

# 3. Chatbot Builder

Example

```
Greeting

↓

Ask Name

↓

Store User

↓

Reply
```

Instead of coding,

users connect chatbot steps visually.

---

# 4. Flowchart Editor

Example

```
Start

↓

Login

↓

Dashboard

↓

Logout
```

---

# 5. Mind Map

Example

```
Programming

├── HTML

├── CSS

├── JavaScript

└── React
```

---

# 6. Decision Tree

Example

```
Age > 18

↓

Yes

↓

Allow Access

↓

No

↓

Reject
```

---

# 7. Data Pipeline

Example

```
CSV File

↓

Clean Data

↓

Transform

↓

Database
```

---

# 8. API Workflow Builder

Example

```
Login API

↓

Fetch Users

↓

Filter Data

↓

Display
```

---

# 9. ETL Pipeline

```
Extract

↓

Transform

↓

Load
```

---

# 10. Visual Programming

Instead of writing code,

users connect logic blocks.

```
Input

↓

Multiply

↓

Print
```

---

# 11. Dependency Graph

Example

```
App

├── Navbar

├── Sidebar

└── Footer
```

Useful for understanding relationships.

---

# 12. Network Topology

Example

```
Server

↓

Router

↓

Switch

↓

Computer
```

---

# Companies Using Similar Concepts

- Zapier
- Make.com
- n8n
- LangFlow
- Flowise
- Node-RED
- Apache Airflow (DAG visualization)

---

# Summary

```text
React Flow Applications

├── Workflow Automation
├── AI Pipeline
├── Chatbot Builder
├── Flowcharts
├── Mind Maps
├── Decision Trees
├── API Builders
├── ETL Pipelines
├── Visual Programming
├── Dependency Graphs
└── Network Diagrams
```

---

# Common Interview Questions

### Is React Flow only used for flowcharts?

No.

It supports many node-based applications like AI builders, workflow editors, and automation tools.

---

### Why is React Flow popular?

Because it provides a flexible way to build interactive graph-based interfaces with minimal effort.

---

# Key Points

- Workflow Builders
- AI Builders
- Chatbot Editors
- Flowcharts
- Visual Programming
- Mind Maps
- Data Pipelines

---

# 12. Installation of React Flow

## Interview Answer

> React Flow is installed using npm, yarn, or pnpm. The official package name is `@xyflow/react`.

---

# Install Using npm

```bash
npm install @xyflow/react
```

---

# Install Using Yarn

```bash
yarn add @xyflow/react
```

---

# Install Using pnpm

```bash
pnpm add @xyflow/react
```

---

# Verify Installation

Check your `package.json`.

```json
{
  "dependencies": {
    "@xyflow/react": "^12.x.x"
  }
}
```

---

# Import Components

```jsx
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";
```

---

# Why `@xyflow/react`?

Older versions used:

```bash
reactflow
```

Modern versions use:

```bash
@xyflow/react
```

Always follow the official documentation for the current package name.

---

# Common Interview Questions

### What package installs React Flow?

```bash
@xyflow/react
```

---

### Can React Flow be installed with Yarn?

Yes.

It supports npm, Yarn, and pnpm.

---

# Key Points

- Install using package managers
- Official package is `@xyflow/react`
- Import required components after installation

---

# 13. Project Setup

## Interview Answer

> A React Flow project starts with creating a React application, installing React Flow, importing its CSS, and rendering the `ReactFlow` component with nodes and edges.

---

# Step 1

Create a React project.

Using Vite:

```bash
npm create vite@latest react-flow-demo

cd react-flow-demo

npm install
```

---

# Step 2

Install React Flow.

```bash
npm install @xyflow/react
```

---

# Step 3

Start the development server.

```bash
npm run dev
```

---

# Step 4

Create a component.

```
src/

└── App.jsx
```

---

# Step 5

Import React Flow and its CSS.

```jsx
import "@xyflow/react/dist/style.css";
import { ReactFlow } from "@xyflow/react";
```

---

# Step 6

Render the component.

```jsx
function App() {
  return (
    <ReactFlow
      nodes={[]}
      edges={[]}
    />
  );
}

export default App;
```

---

# Setup Flow

```text
Create React App

↓

Install React Flow

↓

Import CSS

↓

Create Nodes

↓

Render ReactFlow

↓

Run Application
```

---

# Common Interview Questions

### Does React Flow work without React?

No.

It is designed specifically for React applications.

---

# Key Points

- Create React app
- Install React Flow
- Import CSS
- Render `ReactFlow`

---

# 14. Folder Structure

## Interview Answer

> Organizing files into separate folders for nodes, edges, hooks, utilities, and data improves scalability and maintainability in React Flow projects.

---

# Simple Folder Structure

```
src/

├── App.jsx
├── main.jsx
├── nodes/
├── edges/
├── hooks/
├── components/
├── utils/
├── data/
└── styles/
```

---

# Recommended Structure

```
src/

├── components/
│   ├── FlowCanvas.jsx
│   ├── Sidebar.jsx
│   └── Toolbar.jsx
│
├── nodes/
│   ├── TextNode.jsx
│   ├── NumberNode.jsx
│   └── ApiNode.jsx
│
├── edges/
│   └── CustomEdge.jsx
│
├── hooks/
│   └── useFlow.js
│
├── utils/
│   ├── validation.js
│   └── helpers.js
│
├── data/
│   ├── nodes.js
│   └── edges.js
│
├── styles/
│   └── flow.css
│
├── App.jsx
└── main.jsx
```

---

# Why Organize Like This?

Benefits

- Easier to maintain
- Better code reuse
- Cleaner project structure
- Faster navigation

---

# Common Interview Questions

### Should all nodes be inside `App.jsx`?

No.

Create separate files for each custom node to keep the project modular.

---

# Key Points

- Separate nodes and edges
- Use dedicated folders
- Keep components reusable

---

# 15. Required CSS Import

## Interview Answer

> React Flow requires its default stylesheet to provide basic styling for nodes, edges, handles, controls, and other built-in components.

---

# Import CSS

```jsx
import "@xyflow/react/dist/style.css";
```

---

# Where Should You Import It?

Usually in

```jsx
main.jsx
```

or

```jsx
App.jsx
```

Import it once.

---

# Why Is It Required?

Without the stylesheet,

React Flow still renders,

but many built-in styles are missing.

Examples:

- Handles
- Edges
- Controls
- MiniMap
- Background
- Default node appearance

---

# Example

```jsx
import "@xyflow/react/dist/style.css";

import { ReactFlow } from "@xyflow/react";
```

---

# Common Interview Questions

### Can React Flow work without importing the CSS?

Technically yes,

but the UI will look broken because default styles are missing.

---

### Should the CSS be imported multiple times?

No.

Import it once in your application.

---

# Key Points

- Import `@xyflow/react/dist/style.css`
- Required for default styling
- Import only once

---

# 16. Basic React Flow Component

## Interview Answer

> The `ReactFlow` component is the main component of the library. It renders nodes, edges, and the interactive canvas where users can build workflows.

---

# Basic Example

```jsx
import "@xyflow/react/dist/style.css";

import { ReactFlow } from "@xyflow/react";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={[]}
        edges={[]}
      />
    </div>
  );
}

export default App;
```

---

# Why Wrap It in a `div`?

React Flow needs a container with a defined width and height.

Without it,

the canvas will not be visible.

---

# Important Props

```jsx
<ReactFlow
  nodes={nodes}
  edges={edges}
/>
```

### `nodes`

An array containing all nodes.

### `edges`

An array containing all connections between nodes.

---

# Adding Built-in Components

```jsx
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";
```

```jsx
<ReactFlow nodes={nodes} edges={edges}>
  <Background />
  <MiniMap />
  <Controls />
</ReactFlow>
```

---

# Component Hierarchy

```text
App

↓

ReactFlow

├── Nodes
├── Edges
├── Background
├── MiniMap
└── Controls
```

---

# Common Interview Questions

### Which component is the heart of React Flow?

`ReactFlow`

---

### Can `ReactFlow` render without nodes?

Yes.

It can render an empty canvas.

---

### Why does React Flow sometimes appear blank?

A common reason is that the parent container has no height or width.

---

# Key Points

- `ReactFlow` is the main component
- Requires `nodes` and `edges`
- Parent container must have dimensions
- Can include `Background`, `Controls`, and `MiniMap`

# 17. What are Nodes?

## Interview Answer

> Nodes are the fundamental building blocks in React Flow. They represent individual items or entities in a graph and can be connected to other nodes using edges.

---

# Simple Definition

Think of a node as a **box** on the canvas.

Every box represents something.

Examples:

- User
- API
- Database
- AI Model
- Email
- Payment
- Decision

---

# Real-Life Example

Imagine building an email workflow.

```
Receive Email

↓

Extract Data

↓

Save Database

↓

Send Response
```

Each box is a **Node**.

---

# Visual Representation

```
+------------------+
|   Login API      |
+------------------+
```

Another node

```
+------------------+
|  Database        |
+------------------+
```

---

# Node Structure

A node is simply a JavaScript object.

```jsx
const node = {
  id: "1",
  position: {
    x: 100,
    y: 200
  },
  data: {
    label: "Login"
  }
};
```

---

# Important Node Properties

## id

Unique identifier.

```jsx
id: "1"
```

---

## position

Where the node appears.

```jsx
position: {
  x: 100,
  y: 50
}
```

---

## data

Stores custom information.

```jsx
data: {
  label: "API"
}
```

---

## type

Defines the node component.

```jsx
type: "textNode"
```

---

## style

Custom styling.

```jsx
style: {
  background: "lightblue"
}
```

---

# Example

```jsx
const nodes = [
  {
    id: "1",
    position: {
      x: 100,
      y: 100
    },
    data: {
      label: "Start"
    }
  }
];
```

---

# Types of Nodes

- Default Node
- Input Node
- Output Node
- Custom Node

---

# Common Interview Questions

### Can React Flow work without nodes?

Yes.

It will display an empty canvas.

---

### Does every node require an id?

Yes.

Each node must have a unique id.

---

# Key Points

- Basic building block
- Represents data visually
- Must have unique id
- Has position
- Stores custom data

---

# 18. What are Edges?

## Interview Answer

> Edges are connections between two nodes. They define relationships or the flow of data from one node to another.

---

# Simple Definition

If nodes are **boxes**,

edges are the **lines** connecting them.

---

# Example

```
Login

────────────►

Dashboard
```

The arrow is an **Edge**.

---

# Real-Life Example

Workflow

```
Start

↓

Validate User

↓

Database

↓

Send Email
```

Every connection is an edge.

---

# Edge Object

```jsx
const edge = {
  id: "e1-2",
  source: "1",
  target: "2"
};
```

---

# Important Edge Properties

## id

Unique edge identifier.

```jsx
id: "e1-2"
```

---

## source

Starting node.

```jsx
source: "1"
```

---

## target

Destination node.

```jsx
target: "2"
```

---

## type

Edge style.

```jsx
type: "smoothstep"
```

---

## animated

Animated connection.

```jsx
animated: true
```

---

## label

Text displayed on edge.

```jsx
label: "Success"
```

---

# Example

```jsx
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2"
  }
];
```

---

# Visual Representation

```
+---------+

Start

+---------+

      │

      ▼

+---------+

Login

+---------+
```

---

# Common Edge Types

- Straight
- Step
- Smooth Step
- Bezier
- Custom

---

# Common Interview Questions

### Can one node connect to multiple nodes?

Yes.

```
Start

├── Login

├── Signup

└── Guest
```

---

### Does an edge connect two nodes?

Yes.

That is its primary purpose.

---

# Key Points

- Connects nodes
- Represents relationships
- Uses source and target
- Supports labels and animation

---

# 19. What is a Handle?

## Interview Answer

> A Handle is a connection point on a node where edges begin or end. It allows users to create connections between nodes.

---

# Simple Definition

A Handle is the small circle you click and drag to connect nodes.

---

# Visual Example

```
+--------------+

● Login ●

+--------------+
```

Those circles are **Handles**.

---

# Why Do We Need Handles?

Without handles,

React Flow wouldn't know

where a connection starts or ends.

---

# Handle Component

```jsx
import { Handle } from "@xyflow/react";
```

---

# Example

```jsx
<Handle
  type="source"
  position={Position.Right}
/>
```

---

# Types of Handles

- Source Handle
- Target Handle

We'll learn each next.

---

# Common Interview Questions

### Can a node have multiple handles?

Yes.

A node can have many input and output handles.

---

### Can React Flow connect nodes without handles?

Not in custom nodes.

Handles define where connections are allowed.

---

# Key Points

- Connection point
- Required for custom nodes
- Used for creating edges
- Can have multiple handles

---

# 20. Source Handle

## Interview Answer

> A Source Handle is the starting point of an edge. It represents where a connection originates from a node.

---

# Simple Definition

Think of a Source Handle as an **output port**.

Data leaves the node from here.

---

# Example

```
+------------+

Start ●──────►

+------------+
```

The handle on the right is the source.

---

# Code Example

```jsx
<Handle
  type="source"
  position={Position.Right}
/>
```

---

# Real-Life Example

```
Email Received

↓

AI Processing
```

"Email Received"

has the **Source Handle**.

---

# Visual Representation

```
+-----------+

API

      ●

+-----------+
```

The edge starts here.

---

# Common Interview Questions

### Can one Source Handle connect to many nodes?

Yes.

If your application allows multiple outgoing connections.

---

### Does every custom node need a Source Handle?

Only if it should create outgoing connections.

---

# Key Points

- Starting point of an edge
- Output connection
- Uses `type="source"`

---

# 21. Target Handle

## Interview Answer

> A Target Handle is the ending point of an edge. It receives incoming connections from another node.

---

# Simple Definition

Think of it as an **input port**.

Data enters the node through the Target Handle.

---

# Example

```
──────► ●

Database

+-----------+
```

The edge ends at the target handle.

---

# Code Example

```jsx
<Handle
  type="target"
  position={Position.Left}
/>
```

---

# Real-Life Example

```
API

↓

Database
```

The Database node receives data,

so it has a Target Handle.

---

# Visual Representation

```
      ●

+-----------+

Database

+-----------+
```

---

# Common Interview Questions

### Can a node have multiple Target Handles?

Yes.

A node can accept connections from multiple places.

---

### Does every node require a Target Handle?

Only if it should accept incoming connections.

---

# Key Points

- Ending point of an edge
- Input connection
- Uses `type="target"`

---

# 22. Position Enum

## Interview Answer

> The `Position` enum defines where a handle appears on a node. React Flow provides four predefined positions: `Top`, `Right`, `Bottom`, and `Left`.

---

# Simple Definition

The `Position` enum tells React Flow where to place a handle.

---

# Import

```jsx
import { Position } from "@xyflow/react";
```

---

# Available Positions

## Left

```jsx
Position.Left
```

```
● Node
```

---

## Right

```jsx
Position.Right
```

```
Node ●
```

---

## Top

```jsx
Position.Top
```

```
   ●

+------+

Node

+------+
```

---

## Bottom

```jsx
Position.Bottom
```

```
+------+

Node

+------+

   ●
```

---

# Example

```jsx
<Handle
  type="source"
  position={Position.Right}
/>

<Handle
  type="target"
  position={Position.Left}
/>
```

---

# Complete Example

```jsx
import { Handle, Position } from "@xyflow/react";

function TextNode() {
  return (
    <div>

      <Handle
        type="target"
        position={Position.Left}
      />

      Text Node

      <Handle
        type="source"
        position={Position.Right}
      />

    </div>
  );
}
```

---

# Visual Output

```
      Target

        ●

+----------------+

Text Node

+----------------+

              ●

           Source
```

---

# Common Interview Questions

### How many predefined positions are available?

Four.

- Left
- Right
- Top
- Bottom

---

### Can a node have handles on all four sides?

Yes.

React Flow supports handles on any combination of the four positions.

---

# Key Points

- Controls handle placement
- Four predefined values
- Used with the `Handle` component
- Makes node connections more intuitive


# 23. Node Position

## Interview Answer

> Node Position determines where a node appears on the React Flow canvas. Every node must have an `x` and `y` coordinate, which tells React Flow where to place it.

---

# Simple Definition

Think of the React Flow canvas like graph paper.

Every node has an **address**.

That address is its position.

---

# Visual Example

```
Canvas

(0,0)

+-------------------------------+

          Node A
       (100,100)

                  Node B
               (300,150)

+-------------------------------+
```

---

# Position Property

```jsx
const node = {
  id: "1",
  position: {
    x: 100,
    y: 200
  },
  data: {
    label: "Login"
  }
};
```

---

# Understanding x and y

```jsx
position: {
    x: 250,
    y: 150
}
```

```
x = Horizontal Position

y = Vertical Position
```

```
        x →

+----------------------+

|

|

↓

y
```

---

# Example

```jsx
const nodes = [
  {
    id: "1",
    position: {
      x: 100,
      y: 100
    },
    data: {
      label: "Start"
    }
  },
  {
    id: "2",
    position: {
      x: 400,
      y: 100
    },
    data: {
      label: "End"
    }
  }
];
```

Result

```
Start ---------------- End
```

---

# Updating Position

```jsx
node.position = {
    x: 500,
    y: 200
};
```

The node moves.

---

# Dragging

When a user drags a node,

React Flow automatically updates its position.

---

# Common Interview Questions

### Does every node require a position?

Yes.

Without a position, React Flow doesn't know where to render the node.

---

### Can the position change?

Yes.

Dragging or updating state changes the position.

---

# Key Points

- Every node has x and y coordinates
- Determines where the node appears
- Updates when the node is dragged

---

# 24. Node Dimensions

## Interview Answer

> Node Dimensions define the width and height of a node. They determine how much space the node occupies on the React Flow canvas.

---

# Simple Definition

Every node has a size.

Example

```
Small Node

+------+
| API  |
+------+
```

Large Node

```
+------------------------+

Customer Information

Email

Phone

Address

+------------------------+
```

---

# Default Size

React Flow automatically calculates the size based on the node's content.

---

# Custom Size

```jsx
style: {
    width: 200,
    height: 100
}
```

---

# Example

```jsx
const node = {
    id: "1",
    position: {
        x: 100,
        y: 100
    },
    style: {
        width: 250,
        height: 120
    },
    data: {
        label: "Login"
    }
};
```

---

# Using CSS

```jsx
style={{
    width: 250,
    height: 120
}}
```

---

# Why Dimensions Matter

Node size affects:

- Layout
- Edge positioning
- Handle placement
- User experience

---

# Dynamic Dimensions

Some custom nodes grow automatically.

Example

```
Short Text

↓

Small Box
```

```
Very Long Description

↓

Large Box
```

---

# Common Interview Questions

### Can node size change dynamically?

Yes.

React Flow supports dynamic sizing based on content or custom logic.

---

### Does React Flow require width and height?

No.

It can calculate them automatically, but you can override them.

---

# Key Points

- Width and height define node size
- Can be automatic or custom
- Important for layout and UX

---

# 25. Node Types

## Interview Answer

> Node Types allow developers to render different React components for different kinds of nodes. Each type can have its own design, behavior, and functionality.

---

# Simple Definition

Not every node looks the same.

Example

```
Text Node

API Node

Image Node

AI Node

Database Node
```

Each has a different UI.

---

# Why Node Types?

Imagine building an AI workflow.

```
Prompt

↓

OpenAI

↓

Database

↓

Email
```

Every node should look different.

---

# Built-in Node Types

React Flow includes:

```
default

input

output

group
```

---

# Custom Node Types

Example

```
Text Node

API Node

Calculator Node

Image Node
```

---

# Registering Node Types

```jsx
const nodeTypes = {
    textNode: TextNode,
    apiNode: ApiNode
};
```

---

# Using Node Types

```jsx
const nodes = [
{
    id: "1",
    type: "textNode",
    position: {
        x: 100,
        y: 100
    },
    data: {
        label: "Hello"
    }
}
];
```

---

# Visual Representation

```
+-------------+

Text Node

+-------------+

↓

+-------------+

API Node

+-------------+
```

---

# Real-Life Example

```
Email Node

↓

AI Node

↓

Database Node

↓

Notification Node
```

Each is a different node type.

---

# Common Interview Questions

### Why use custom node types?

To create reusable nodes with unique UI and functionality.

---

### Can one React Flow have multiple node types?

Yes.

Most real applications use several custom node types.

---

# Key Points

- Different node designs
- Reusable components
- Registered with `nodeTypes`
- Support custom behavior

---

# 26. Edge Types

## Interview Answer

> Edge Types define how connections between nodes are displayed. React Flow provides multiple built-in edge styles and also allows developers to create custom edges.

---

# Simple Definition

Edges are the lines connecting nodes.

Different edge types have different appearances.

---

# Built-in Edge Types

```
Straight

Bezier

Step

SmoothStep

SimpleBezier
```

---

# Straight Edge

```
Node A -------- Node B
```

---

# Bezier Edge

```
Node A

╲

 ╲

  ╲

   Node B
```

Curved line.

---

# Step Edge

```
Node A

|

|______

       |

       Node B
```

Sharp 90° turns.

---

# SmoothStep Edge

```
Node A

╭──────╮

       │

       Node B
```

Rounded corners.

---

# Example

```jsx
const edges = [
{
    id: "e1",
    source: "1",
    target: "2",
    type: "smoothstep"
}
];
```

---

# Custom Edge

You can build your own edge.

Example

```
Animated

Dashed

Colored

Arrow

Double Arrow
```

---

# When to Use Different Edge Types

| Edge Type | Best For |
|------------|----------|
| Straight | Simple diagrams |
| Bezier | Flowcharts |
| Step | Process diagrams |
| SmoothStep | Workflow builders |
| Custom | Advanced applications |

---

# Common Interview Questions

### Which edge type is most commonly used?

`smoothstep` is popular for workflow builders because it is easy to follow visually.

---

### Can developers create custom edge types?

Yes.

React Flow allows fully custom edge components.

---

# Key Points

- Controls edge appearance
- Several built-in options
- Supports custom edges
- Choose the style based on readability

---

# 27. Controlled vs Uncontrolled Flow

## Interview Answer

> In a **Controlled Flow**, the application manages the state of nodes and edges using React state. In an **Uncontrolled Flow**, React Flow manages most of the internal state automatically.

---

# Simple Definition

This is one of the most important React Flow concepts.

The question is:

**Who controls the data?**

---

# Controlled Flow

You own the state.

```
React State

↓

Nodes

↓

Edges

↓

React Flow
```

Whenever something changes,

you update the state.

---

# Example

```jsx
const [nodes, setNodes] = useNodesState(initialNodes);

const [edges, setEdges] = useEdgesState(initialEdges);
```

React Flow reads from your state.

---

# Advantages

- Easy to save data
- Easy to update nodes
- Easy to sync with APIs
- Easy to implement undo/redo
- Better for production applications

---

# Uncontrolled Flow

React Flow manages much of the internal state for you.

You don't manually update every change.

Think of it as giving React Flow more responsibility.

---

# Visual Comparison

Controlled

```
Developer

↓

React State

↓

React Flow
```

Uncontrolled

```
Developer

↓

React Flow

↓

Internal State
```

---

# Which One Is Better?

For real-world applications,

**Controlled Flow** is almost always recommended.

Examples

- Workflow Builder
- AI Pipeline
- Chatbot Builder
- Automation Platform

because you often need to:

- Save workflows
- Load workflows
- Validate connections
- Sync with a database
- Track changes

---

# Common Interview Questions

### Which approach does React Flow recommend for production?

Controlled Flow.

---

### Why is Controlled Flow preferred?

Because your application has complete control over the graph state, making features like persistence, collaboration, and validation much easier.

---

# Controlled vs Uncontrolled

| Feature | Controlled | Uncontrolled |
|---------|------------|--------------|
| State Owner | React | React Flow |
| Easy to Save | ✅ Yes | ❌ Difficult |
| Easy to Update | ✅ Yes | Limited |
| Undo / Redo | ✅ Easy | Difficult |
| Database Sync | ✅ Easy | Difficult |
| Recommended for Production | ✅ Yes | ❌ Usually No |

---

# Key Points

- Controlled Flow uses React state
- Uncontrolled Flow relies on internal library state
- Controlled Flow is the standard choice for most production applications
- Enables advanced features like persistence and undo/redo


# 28. Flow State

## Interview Answer

> Flow State is the complete state of a React Flow diagram. It contains all information required to render the graph, including nodes, edges, viewport information, selection state, and other graph-related data.

---

# Simple Definition

Think of Flow State as the **brain** of your React Flow application.

It remembers everything happening inside the canvas.

---

# Real-Life Example

Imagine you're building an AI Workflow.

```
Prompt

↓

OpenAI

↓

Database

↓

Email
```

Flow State remembers:

- All nodes
- All edges
- Node positions
- Selected nodes
- Zoom level
- Pan position

---

# What Does Flow State Contain?

```
Flow State

├── Nodes
├── Edges
├── Viewport
├── Selection
├── Connections
├── Node Positions
└── Zoom Level
```

---

# Example

```jsx
const [nodes, setNodes] = useNodesState(initialNodes);

const [edges, setEdges] = useEdgesState(initialEdges);
```

Here,

`nodes` and `edges` are part of the Flow State.

---

# Why Is Flow State Important?

Without Flow State,

React Flow wouldn't know:

- Which nodes exist
- Which nodes are connected
- Where nodes are located
- What the user selected

---

# Saving Flow State

Example

```jsx
const flow = reactFlowInstance.toObject();
```

This returns an object like:

```json
{
  "nodes": [...],
  "edges": [...],
  "viewport": {
    "x": 120,
    "y": 80,
    "zoom": 1.2
  }
}
```

You can save this object to:

- Local Storage
- Database
- JSON file

---

# Flow State Visualization

```text
User

↓

Moves Node

↓

Flow State Updates

↓

React Flow Re-renders
```

---

# Common Interview Questions

### What is Flow State?

The complete data that represents the current graph.

---

### Why is Flow State useful?

Because it allows saving, restoring, updating, and synchronizing workflows.

---

# Key Points

- Stores graph data
- Contains nodes and edges
- Stores viewport information
- Required for saving workflows

---

# 29. Coordinate System

## Interview Answer

> React Flow uses a two-dimensional coordinate system where every node is positioned using `x` and `y` values. These coordinates determine the location of nodes on the canvas.

---

# Simple Definition

Every node has an address.

That address is called its coordinate.

---

# Example

```jsx
position: {
    x: 200,
    y: 100
}
```

This means:

```
Move 200 pixels right

Move 100 pixels down
```

---

# Visual Representation

```
          X →

0─────────────────────────────>

|

|

|

↓

Y
```

---

# Example

```
Node A

Position

x = 100

y = 100
```

```
Node B

Position

x = 400

y = 300
```

---

# Moving a Node

Original

```jsx
position: {
    x: 100,
    y: 100
}
```

Updated

```jsx
position: {
    x: 500,
    y: 300
}
```

The node moves to a new location.

---

# Why Coordinates Matter

React Flow uses coordinates to:

- Place nodes
- Move nodes
- Connect edges correctly
- Fit the graph into the viewport

---

# Coordinate Example

```
(0,0)

↓

Start

↓

(300,200)

↓

API

↓

(600,300)

↓

Database
```

---

# Difference Between Screen and Flow Coordinates

There are two coordinate systems:

### Screen Coordinates

Where the mouse is on your monitor.

```
Mouse

↓

(850,420)
```

---

### Flow Coordinates

Where the node exists inside the React Flow canvas.

Because users can zoom and pan,

screen coordinates and flow coordinates are **not always the same**.

React Flow provides helper methods to convert between them.

---

# Common Interview Questions

### Why does React Flow use coordinates?

To accurately position nodes on the canvas.

---

### Are screen coordinates and flow coordinates always equal?

No.

Zooming and panning change the relationship between them.

---

# Key Points

- Uses x and y values
- Determines node position
- Supports zoom and pan
- Different from screen coordinates

---

# 30. Viewport

## Interview Answer

> The Viewport is the visible area of the React Flow canvas. It controls what part of the graph the user can see and includes position (`x`, `y`) and zoom level.

---

# Simple Definition

Imagine a huge map.

You cannot see the whole map at once.

You only see one part of it.

That visible part is called the **Viewport**.

---

# Visualization

Whole Canvas

```
+----------------------------------------+

Node A

Node B

Node C

Node D

Node E

+----------------------------------------+
```

Visible Area

```
+---------------+

Node B

Node C

+---------------+
```

Only part of the graph is visible.

---

# Viewport Properties

```jsx
{
    x: 100,
    y: 200,
    zoom: 1.5
}
```

---

## x

Horizontal movement.

---

## y

Vertical movement.

---

## zoom

Current zoom level.

---

# Example

```jsx
viewport = {
    x: 0,
    y: 0,
    zoom: 1
}
```

Default view.

---

Zoom In

```jsx
zoom: 2
```

Everything becomes larger.

---

Zoom Out

```jsx
zoom: 0.5
```

Everything becomes smaller.

---

# Built-in Viewport Functions

## fitView()

Automatically adjusts the viewport so all nodes become visible.

```jsx
reactFlow.fitView();
```

---

## setViewport()

Move the camera programmatically.

```jsx
reactFlow.setViewport({
    x: 100,
    y: 100,
    zoom: 1.5
});
```

---

# Why Is Viewport Important?

Imagine a graph with 500 nodes.

You don't want users to manually search for everything.

The viewport lets users:

- Zoom
- Pan
- Focus
- Navigate

---

# Viewport Flow

```text
User Zooms

↓

Viewport Updates

↓

Canvas Re-renders
```

---

# Common Interview Questions

### What does the viewport control?

The visible area of the React Flow canvas.

---

### Does the viewport store zoom level?

Yes.

It stores:

- x
- y
- zoom

---

# Key Points

- Represents the visible canvas
- Supports zoom and pan
- Can be controlled programmatically
- Essential for navigation

---

# 31. ReactFlowProvider

## Interview Answer

> `ReactFlowProvider` is a context provider that gives React Flow components and hooks access to the internal React Flow state. It allows components outside the `ReactFlow` component to interact with the graph.

---

# Simple Definition

Think of `ReactFlowProvider` as a **shared container**.

It shares React Flow data with other components.

---

# Why Do We Need It?

Suppose you have:

```
App

├── Sidebar
├── Toolbar
├── ReactFlow
└── Settings
```

The Sidebar wants to:

- Add nodes
- Delete nodes
- Zoom the canvas

But the Sidebar is **outside** the `ReactFlow` component.

How can it access the graph?

Answer:

```
ReactFlowProvider
```

---

# Without ReactFlowProvider

```
Sidebar

❌ Cannot access graph
```

---

# With ReactFlowProvider

```
Sidebar

↓

ReactFlowProvider

↓

React Flow State

↓

Can Add Nodes
```

---

# Example

```jsx
import { ReactFlowProvider } from "@xyflow/react";

function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
```

---

# Common Usage

```jsx
import { useReactFlow } from "@xyflow/react";
```

```jsx
const reactFlow = useReactFlow();
```

`useReactFlow()` works correctly because it can access the provider.

---

# Real-Life Example

Imagine building:

```
Sidebar

↓

Add AI Node

↓

React Flow Canvas
```

When the button is clicked,

a new node appears on the canvas.

This communication is possible because of `ReactFlowProvider`.

---

# Visualization

```text
ReactFlowProvider

├── ReactFlow
├── Sidebar
├── Toolbar
├── Inspector
└── MiniMap
```

All these components can access the same React Flow context.

---

# When Should You Use It?

Use `ReactFlowProvider` when:

- Using `useReactFlow()`
- Accessing React Flow state outside the canvas
- Building sidebars or toolbars
- Managing complex React Flow applications

For very simple examples where everything lives inside one component, you may not need it explicitly.

---

# Common Interview Questions

### Why is `ReactFlowProvider` needed?

It provides React Flow's context so hooks and other components can access the graph state.

---

### Can `useReactFlow()` work without a provider?

No.

It must be used within a `ReactFlowProvider` (or within a component tree already wrapped by one).

---

# Key Points

- Provides React Flow context
- Enables hooks like `useReactFlow()`
- Allows external components to interact with the graph
- Useful for scalable React Flow applications


# 32. Creating a Custom Node

## Interview Answer

> A Custom Node is a React component that allows developers to create their own node design and functionality instead of using the default React Flow node.

---

# Simple Definition

By default, React Flow provides basic nodes.

But in real-world applications, every project needs different node designs.

For example:

```
+------------------+
| 📧 Email Node    |
+------------------+
```

```
+------------------+
| 🤖 AI Node       |
+------------------+
```

```
+------------------+
| 🗄 Database Node |
+------------------+
```

These are **Custom Nodes**.

---

# Why Create Custom Nodes?

Imagine building an AI Workflow.

```
Prompt

↓

OpenAI

↓

Database

↓

Email
```

Each node should display different information.

A default node cannot provide all these custom layouts.

---

# Steps to Create a Custom Node

```
Create React Component

↓

Add Handles

↓

Display Data

↓

Export Component

↓

Register Node

↓

Use in React Flow
```

---

# Example

```jsx
// TextNode.jsx

import { Handle, Position } from "@xyflow/react";

function TextNode({ data }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: 10,
        borderRadius: 8
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
      />

      <h3>{data.label}</h3>

      <Handle
        type="source"
        position={Position.Right}
      />
    </div>
  );
}

export default TextNode;
```

---

# Output

```
      ●

+----------------+

Text Node

+----------------+

             ●
```

---

# Advantages

- Fully customizable UI
- Add icons
- Add buttons
- Add forms
- Add images
- Add animations
- Add API logic

---

# Real-Life Example

A Chatbot Builder may have:

```
Message Node

Question Node

Image Node

Video Node

Condition Node

Delay Node
```

Each is a separate custom node.

---

# Common Interview Questions

### Why create a custom node?

To build reusable nodes with custom UI and functionality.

---

### Is every node a React component?

Yes.

Custom nodes are simply React components.

---

# Key Points

- Custom node = React component
- Can include any JSX
- Supports handles
- Reusable across the application

---

# 33. Registering Node Types

## Interview Answer

> Registering Node Types tells React Flow which React component should be rendered for a specific node type.

---

# Simple Definition

Creating a custom node is **not enough**.

React Flow also needs to know:

> "When I see a node with type `textNode`, which component should I render?"

This mapping is called **registering node types**.

---

# Step 1

Create your component.

```jsx
TextNode.jsx
```

---

# Step 2

Register it.

```jsx
import TextNode from "./TextNode";

const nodeTypes = {
  textNode: TextNode
};
```

---

# Step 3

Pass it to React Flow.

```jsx
<ReactFlow
  nodes={nodes}
  edges={edges}
  nodeTypes={nodeTypes}
/>
```

---

# Step 4

Use the type.

```jsx
const nodes = [
  {
    id: "1",
    type: "textNode",
    position: {
      x: 100,
      y: 100
    },
    data: {
      label: "Hello"
    }
  }
];
```

React Flow now renders the `TextNode` component.

---

# How It Works

```text
Node

↓

type = "textNode"

↓

nodeTypes

↓

TextNode Component

↓

Displayed on Canvas
```

---

# Multiple Node Types

```jsx
const nodeTypes = {
  textNode: TextNode,
  apiNode: ApiNode,
  imageNode: ImageNode,
  emailNode: EmailNode
};
```

---

# Common Interview Questions

### What happens if a node type isn't registered?

React Flow won't know which component to render, so it falls back to a default node or shows unexpected behavior depending on the configuration.

---

### Why is registration necessary?

Because React Flow needs a mapping between a node's `type` and the React component that should render it.

---

# Key Points

- Register using `nodeTypes`
- Pass `nodeTypes` to `ReactFlow`
- Match the node's `type` with the registration key

---

# 34. Node Props

## Interview Answer

> Node Props are the properties React Flow automatically passes to every custom node component. They contain information about the node, including its data, position, selection state, and other metadata.

---

# Simple Definition

When React Flow renders a custom node,

it automatically provides useful information through **props**.

You don't have to pass them manually.

---

# Example

```jsx
function TextNode(props) {
  console.log(props);

  return <div>Text Node</div>;
}
```

---

# Common Props

```jsx
function TextNode({
  id,
  data,
  selected,
  dragging
}) {
  return (
    <div>
      {data.label}
    </div>
  );
}
```

---

# Important Props

## id

Unique node ID.

```jsx
id
```

Example

```
"node-1"
```

---

## data

Stores custom information.

```jsx
data.label
```

---

## selected

Returns `true` if the node is selected.

```jsx
selected
```

---

## dragging

Returns `true` while the node is being dragged.

```jsx
dragging
```

---

# Example

```jsx
function TextNode({
  data,
  selected
}) {
  return (
    <div
      style={{
        border: selected
          ? "2px solid blue"
          : "1px solid gray"
      }}
    >
      {data.label}
    </div>
  );
}
```

The border changes when the node is selected.

---

# Common Interview Questions

### Who passes node props?

React Flow passes them automatically.

---

### Can developers create custom props?

Yes.

You typically place custom values inside the `data` object.

---

# Key Points

- Passed automatically
- Includes node information
- No manual prop passing required
- Useful for building interactive nodes

---

# 35. Node Data

## Interview Answer

> `data` is a property of every node object used to store custom information that the node component can display or use in its logic.

---

# Simple Definition

The `data` object contains everything your custom node needs.

Think of it as the node's personal storage.

---

# Example

```jsx
const node = {
  id: "1",
  position: {
    x: 100,
    y: 100
  },
  data: {
    label: "Login"
  }
};
```

---

# Accessing Data

```jsx
function TextNode({ data }) {
  return (
    <div>
      {data.label}
    </div>
  );
}
```

---

# Store Multiple Values

```jsx
data: {
  title: "API",
  method: "GET",
  endpoint: "/users"
}
```

---

# Read Them

```jsx
function ApiNode({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.method}</p>
      <p>{data.endpoint}</p>
    </div>
  );
}
```

---

# Real-Life Example

AI Node

```jsx
data: {
  model: "GPT-4",
  temperature: 0.7,
  maxTokens: 500
}
```

Email Node

```jsx
data: {
  subject: "Welcome",
  recipient: "user@example.com"
}
```

---

# Why Use `data`?

Instead of hardcoding values,

store them inside `data` so the same component can display different content.

---

# Common Interview Questions

### Can `data` store any value?

Yes.

It can store strings, numbers, booleans, arrays, and objects.

---

### Why not hardcode values inside the component?

Using `data` makes the component reusable and dynamic.

---

# Key Points

- Holds custom node information
- Passed automatically to the node
- Makes components reusable
- Supports complex objects

---

# 36. Node Style

## Interview Answer

> Node Style controls the visual appearance of a node. Developers can customize properties such as width, height, colors, borders, fonts, shadows, and spacing using CSS or inline styles.

---

# Simple Definition

Node Style changes **how a node looks**.

---

# Example

```jsx
const node = {
  id: "1",
  position: {
    x: 100,
    y: 100
  },
  style: {
    background: "#dbeafe",
    color: "#1e3a8a",
    border: "2px solid #2563eb",
    borderRadius: 8
  },
  data: {
    label: "API"
  }
};
```

---

# Styling Inside a Custom Node

```jsx
function TextNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid gray",
        borderRadius: 8,
        background: "#fff"
      }}
    >
      {data.label}
    </div>
  );
}
```

---

# Common Style Properties

```jsx
style: {
  width: 200,
  height: 80,
  background: "#ffffff",
  color: "#000000",
  border: "1px solid #ccc",
  borderRadius: 10,
  padding: 12
}
```

---

# Using CSS Classes

Instead of inline styles, you can use CSS.

```jsx
<div className="custom-node">
  {data.label}
</div>
```

```css
.custom-node {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 10px;
  background: white;
}
```

---

# Real-Life Example

Different node types can have different colors.

```
🟢 Start Node

🔵 API Node

🟡 AI Node

🔴 Error Node
```

This helps users understand workflows more quickly.

---

# Common Interview Questions

### Can node styles be changed dynamically?

Yes.

Styles can change based on props, selection state, or values inside `data`.

---

### Can you use CSS frameworks like Tailwind?

Yes.

Custom nodes are React components, so you can use Tailwind CSS, CSS Modules, styled-components, or any other styling solution.

---

# Key Points

- Controls node appearance
- Can use inline styles or CSS
- Supports dynamic styling
- Improves readability and user experience


# 42. Node Resize

## Interview Answer

> Node Resize is the ability to change a node's width and height interactively. React Flow provides built-in components that allow users to resize custom nodes by dragging resize handles.

---

# Simple Definition

Normally, every node has a fixed size.

With **Node Resize**, users can make a node larger or smaller.

---

# Example

Before

```
+------------+
| Text Node  |
+------------+
```

After resizing

```
+-------------------------+
| Text Node               |
| More Content...         |
+-------------------------+
```

---

# Why Do We Need Node Resize?

Imagine building:

- Whiteboard App
- Workflow Builder
- Mind Map
- Dashboard Builder

Users may want larger nodes to display more information.

---

# Built-in React Flow Component

```jsx
import { NodeResizer } from "@xyflow/react";
```

---

# Basic Example

```jsx
<NodeResizer />
```

---

# Complete Example

```jsx
import {
  NodeResizer,
  Handle,
  Position
} from "@xyflow/react";

function TextNode({ data }) {
  return (
    <div>

      <NodeResizer />

      <Handle
        type="target"
        position={Position.Left}
      />

      {data.label}

      <Handle
        type="source"
        position={Position.Right}
      />

    </div>
  );
}
```

---

# What Happens?

```
User Drags Corner

↓

Width Changes

↓

Height Changes

↓

React Flow Updates Node
```

---

# Resize Handles

```
+----------------+

Text Node

             ◢

+----------------+
```

The corner handle is used for resizing.

---

# Common Interview Questions

### Does React Flow support resizing?

Yes.

It provides the `NodeResizer` component.

---

### Can every node be resized?

Yes, if you include a resizer and configure it appropriately.

---

# Key Points

- Changes node width and height
- Uses `NodeResizer`
- Interactive resizing
- Useful for editors and whiteboards

---

# 43. Node Rotation

## Interview Answer

> React Flow does not provide built-in node rotation. However, because custom nodes are regular React components, rotation can be implemented using CSS transforms.

---

# Simple Definition

Rotation means turning a node.

Example

Normal

```
+---------+

API

+---------+
```

Rotated

```
   API

  /
 /
```

---

# Why Rotate Nodes?

Rotation is useful in:

- Diagram Editors
- Whiteboard Apps
- Floor Plan Editors
- Design Tools

It is **not commonly needed** in workflow builders.

---

# Example Using CSS

```jsx
<div
  style={{
    transform: "rotate(45deg)"
  }}
>
  API
</div>
```

---

# Rotate Dynamically

```jsx
<div
  style={{
    transform: `rotate(${data.angle}deg)`
  }}
>
  API
</div>
```

---

# Example

```
0°

↓

45°

↓

90°

↓

180°
```

---

# Can React Flow Rotate Nodes Automatically?

No.

Rotation is implemented by the developer using CSS and React state.

---

# Common Interview Questions

### Does React Flow have a built-in rotation feature?

No.

You implement it yourself using CSS transforms.

---

### Is rotation commonly used?

Not in most workflow editors, but it is useful in design and diagram applications.

---

# Key Points

- No built-in rotation support
- Implement with CSS `transform: rotate()`
- Optional feature
- Useful for specialized editors

---

# 44. Node Dragging

## Interview Answer

> Node Dragging allows users to move nodes around the React Flow canvas by clicking and dragging them. React Flow automatically updates the node's position.

---

# Simple Definition

Dragging means moving a node from one place to another.

---

# Example

Before

```
Start
```

↓

User drags

↓

After

```
                    Start
```

---

# How It Works

```
Mouse Down

↓

Move Mouse

↓

Node Moves

↓

Position Updates

↓

Canvas Re-renders
```

---

# Position Updates

Original

```jsx
position: {
    x: 100,
    y: 100
}
```

After Dragging

```jsx
position: {
    x: 350,
    y: 220
}
```

---

# Built-in Support

React Flow supports dragging automatically.

No additional code is required for basic dragging.

---

# Drag Events

Useful events include:

```jsx
onNodeDrag()

onNodeDragStart()

onNodeDragStop()
```

Example

```jsx
<ReactFlow
  onNodeDrag={(event, node) => {
    console.log(node.position);
  }}
/>
```

---

# Why Is Dragging Important?

Without dragging,

users couldn't organize workflows.

---

# Real-Life Example

```
Email

↓

API

↓

Database
```

User rearranges nodes for better readability.

---

# Common Interview Questions

### Does React Flow support dragging by default?

Yes.

Nodes are draggable by default.

---

### What happens after dragging?

The node's position is updated.

---

# Key Points

- Built-in feature
- Updates node position
- Supports drag events
- Essential for interactive graphs

---

# 45. Node Selection

## Interview Answer

> Node Selection allows users to select one or more nodes for editing, deleting, moving, or performing other actions.

---

# Simple Definition

Selection means choosing a node.

---

# Example

Unselected

```
+------------+

Database

+------------+
```

Selected

```
+============+

Database

+============+
```

The border changes to indicate selection.

---

# Selecting a Node

```
Mouse Click

↓

Node Selected

↓

selected = true
```

---

# Accessing Selection

Inside a custom node:

```jsx
function TextNode({ selected }) {
  return (
    <div
      style={{
        border: selected
          ? "2px solid blue"
          : "1px solid gray"
      }}
    >
      Node
    </div>
  );
}
```

---

# Multiple Selection

Users can select more than one node.

```
Node A

Node B

Node C
```

↓

```
✓ Node A

✓ Node B

Node C
```

---

# Why Is Selection Useful?

Users can:

- Delete nodes
- Copy nodes
- Move multiple nodes
- Change styles
- Edit properties

---

# Selection Events

```jsx
onSelectionChange()
```

Useful for tracking selected nodes.

---

# Common Interview Questions

### How does React Flow indicate a selected node?

The `selected` prop becomes `true`.

---

### Can multiple nodes be selected?

Yes.

React Flow supports multi-selection.

---

# Key Points

- Click to select
- `selected` prop indicates selection
- Supports multi-selection
- Used for editing and management

---

# 46. Node Hover

## Interview Answer

> Node Hover refers to detecting when the mouse pointer is over a node. It is commonly used to show toolbars, highlights, previews, or additional information.

---

# Simple Definition

Hover means placing the mouse over a node without clicking.

---

# Example

Normal

```
+------------+

API

+------------+
```

Hover

```
+================+

API

⚙ Edit

🗑 Delete

+================+
```

---

# Why Use Hover?

Hover helps keep the interface clean.

Extra controls appear only when needed.

---

# Example

```jsx
function TextNode() {
  return (
    <div
      onMouseEnter={() => console.log("Hover")}
      onMouseLeave={() => console.log("Leave")}
    >
      Node
    </div>
  );
}
```

---

# Common Hover Effects

- Change border color
- Show toolbar
- Display tooltip
- Highlight node
- Show connection points

---

# Real-Life Example

Workflow Builder

```
Mouse Hover

↓

Show Delete Button

↓

Show Settings Button

↓

Show Node Information
```

---

# Hover vs Selection

| Hover | Selection |
|--------|-----------|
| Mouse over | Mouse click |
| Temporary | Remains selected until changed |
| Often shows quick actions | Enables editing and other operations |

---

# Common Interview Questions

### Does hovering select a node?

No.

Hovering and selecting are different interactions.

---

### What is a common use of hover?

Showing toolbars, tooltips, or highlighting the node.

---

# Key Points

- Triggered by mouse movement
- Temporary interaction
- Useful for tooltips and quick actions
- Different from selection

# 47. Node Deletion

## Interview Answer

> Node Deletion is the process of removing one or more nodes from the React Flow canvas. When a node is deleted, its connected edges are usually removed as well to maintain a valid graph.

---

# Simple Definition

Deleting a node means removing it from the workflow.

---

# Example

Before

```
Start

↓

API

↓

Database
```

Delete **API**

↓

After

```
Start

Database
```

The API node is removed.

---

# How React Flow Deletes a Node

React Flow stores nodes in an array.

```jsx
const [nodes, setNodes] = useNodesState(initialNodes);
```

Deleting a node usually means filtering it out.

```jsx
setNodes((nodes) =>
  nodes.filter((node) => node.id !== "1")
);
```

---

# What About Connected Edges?

Example

Before

```
Start

↓

API

↓

Database
```

Edges

```
Start → API

API → Database
```

After deleting **API**

```
Start

Database
```

The edges connected to **API** should also be removed.

```jsx
setEdges((edges) =>
  edges.filter(
    (edge) =>
      edge.source !== "1" &&
      edge.target !== "1"
  )
);
```

---

# Delete Using Keyboard

Many applications support

```
Delete Key

Backspace Key
```

to remove selected nodes.

---

# Confirmation Dialog

Production applications often ask

```
Delete this node?

[Cancel]

[Delete]
```

to prevent accidental deletion.

---

# Common Interview Questions

### What happens to edges when a node is deleted?

In most applications, edges connected to the deleted node are removed as well.

---

### Can multiple nodes be deleted?

Yes.

Selected nodes can be deleted together.

---

# Key Points

- Removes nodes from state
- Usually removes connected edges
- Often triggered by Delete key
- Confirmation dialogs improve UX

---

# 48. Node Locking

## Interview Answer

> Node Locking prevents users from modifying or dragging specific nodes. It is useful when certain nodes should remain fixed or protected.

---

# Simple Definition

A locked node **cannot be moved or edited**.

---

# Example

Unlocked

```
API

↓

Can Move
```

Locked

```
Database 🔒

↓

Cannot Move
```

---

# Why Lock Nodes?

Imagine a workflow.

```
Start

↓

AI

↓

Database
```

The **Start** node should always stay at the beginning.

Locking prevents users from moving it.

---

# Prevent Dragging

```jsx
const nodes = [
  {
    id: "1",
    draggable: false,
    data: {
      label: "Start"
    }
  }
];
```

---

# Lock Editing

Applications may also disable

- Rename
- Resize
- Delete

for locked nodes.

---

# Visual Example

```
+----------------+

🔒 Database

+----------------+
```

The lock icon indicates the node is protected.

---

# Common Use Cases

- Start Node
- End Node
- System Nodes
- Read-Only Workflows

---

# Common Interview Questions

### Does React Flow have a "locked" property?

There isn't a dedicated `locked` property. Developers typically combine properties like `draggable: false`, `selectable: false`, or custom logic to implement locking.

---

### Can locked nodes still be displayed?

Yes.

They remain visible but have restricted interactions.

---

# Key Points

- Prevents editing or dragging
- Protects important nodes
- Implemented using React Flow options and custom logic
- Improves workflow integrity

---

# 49. Parent Nodes

## Interview Answer

> A Parent Node is a node that contains or groups other nodes. It helps organize complex workflows by creating logical sections.

---

# Simple Definition

Think of a parent node as a **folder**.

It groups related nodes together.

---

# Example

```
Workflow

├── Login

├── Dashboard

└── Logout
```

The **Workflow** node is the parent.

---

# Visual Example

```
+---------------------------+

Authentication

+---------------------------+

Login

↓

Forgot Password

↓

Dashboard
```

The large box acts as the parent container.

---

# Why Use Parent Nodes?

Large workflows become easier to understand.

Instead of hundreds of scattered nodes,

they are grouped into sections.

---

# React Flow

React Flow supports grouping using **group nodes** and parent-child relationships (for example, with properties such as `parentId` in current versions).

---

# Real-Life Example

```
User Module

├── Register

├── Login

└── Logout

Payment Module

├── Checkout

├── Stripe

└── Invoice
```

---

# Benefits

- Better organization
- Cleaner UI
- Easier navigation
- Modular workflows

---

# Common Interview Questions

### What is the purpose of a parent node?

To organize related nodes into logical groups.

---

### Can a parent contain multiple children?

Yes.

A parent node can contain many child nodes.

---

# Key Points

- Groups related nodes
- Improves organization
- Useful for large workflows
- Often implemented with group nodes

---

# 50. Child Nodes

## Interview Answer

> Child Nodes are nodes that belong to a parent node. They move and behave relative to their parent depending on how the application is configured.

---

# Simple Definition

Child nodes live **inside** a parent node.

---

# Example

```
Authentication

├── Login

├── Signup

└── Forgot Password
```

The three smaller nodes are child nodes.

---

# Relationship

```
Parent

↓

Child A

↓

Child B

↓

Child C
```

---

# Why Use Child Nodes?

Instead of displaying everything separately,

related nodes stay together.

---

# Example

```
Database Module

↓

MySQL

↓

Backup

↓

Restore
```

---

# Behavior

When the parent moves,

child nodes usually move with it.

```
Move Parent

↓

Children Move Too
```

---

# Common Interview Questions

### Can child nodes exist without a parent?

Yes.

They can also be independent nodes if your application allows it.

---

### Why use child nodes?

To organize related functionality and simplify navigation.

---

# Key Points

- Belong to a parent
- Help organize workflows
- Often move with the parent
- Improve readability

---

# 51. Expandable Nodes

## Interview Answer

> Expandable Nodes allow users to show or hide additional information or nested content within a node, helping keep large workflows clean and organized.

---

# Simple Definition

An expandable node can switch between a **collapsed** and an **expanded** view.

---

# Example

Collapsed

```
▶ AI Agent
```

Expanded

```
▼ AI Agent

Model : GPT-4

Temperature : 0.7

Tokens : 500
```

---

# Why Use Expandable Nodes?

Imagine an AI workflow with many settings.

Showing everything all the time would clutter the canvas.

Instead,

show only the title first.

Users expand the node when they need more details.

---

# Example Using React State

```jsx
const [expanded, setExpanded] = useState(false);
```

```jsx
<button
  onClick={() =>
    setExpanded(!expanded)
  }
>
  Toggle
</button>
```

---

# Rendering

```jsx
{
  expanded && (
    <div>
      Extra Settings
    </div>
  )
}
```

---

# Real-Life Example

```
Database

▼

Host

Username

Password

Port
```

or

```
API

▼

Method

Headers

Body

Authentication
```

---

# Benefits

- Saves screen space
- Reduces visual clutter
- Improves readability
- Displays advanced settings only when needed

---

# Common Interview Questions

### Does React Flow include expandable nodes by default?

No.

Developers implement this behavior inside custom node components using React state or application state.

---

### When should expandable nodes be used?

When a node contains many details that don't need to be visible all the time.

---

# Key Points

- Show or hide additional content
- Implemented with React state
- Keeps workflows clean
- Great for settings-heavy nodes


# 52. Creating Edges

## Interview Answer

> An Edge is a connection between two nodes. In React Flow, edges are created by defining the source node, target node, and a unique edge ID.

---

# Simple Definition

If **nodes are boxes**,

then **edges are the lines** connecting those boxes.

Example

```
Start

↓

API

↓

Database
```

The arrows between the nodes are **Edges**.

---

# Basic Edge Object

```jsx
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2"
  }
];
```

---

# Understanding Each Property

## id

Unique ID for the edge.

```jsx
id: "e1-2"
```

---

## source

Starting node.

```jsx
source: "1"
```

---

## target

Ending node.

```jsx
target: "2"
```

---

# Visual Representation

```
Node 1

────────────►

Node 2
```

---

# Multiple Edges

```jsx
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2"
  },
  {
    id: "e2-3",
    source: "2",
    target: "3"
  }
];
```

Result

```
Start

↓

API

↓

Database
```

---

# Rendering

```jsx
<ReactFlow
  nodes={nodes}
  edges={edges}
/>
```

---

# Common Interview Questions

### What is required to create an edge?

- Unique `id`
- `source`
- `target`

---

### Can one node connect to multiple nodes?

Yes.

```
Start

├── Login

├── Signup

└── Guest
```

---

# Key Points

- Connects two nodes
- Requires `id`, `source`, and `target`
- Rendered using the `edges` prop
- Represents relationships in the graph

---

# 53. addEdge()

## Interview Answer

> `addEdge()` is a utility function provided by React Flow that simplifies adding a new edge to the existing edge list when users connect two nodes.

---

# Simple Definition

Instead of writing your own logic to create a new edge,

React Flow provides the `addEdge()` helper.

---

# Import

```jsx
import { addEdge } from "@xyflow/react";
```

---

# Without addEdge()

You would manually write something like:

```jsx
setEdges([
  ...edges,
  newEdge
]);
```

---

# With addEdge()

```jsx
setEdges((edges) =>
  addEdge(connection, edges)
);
```

Much cleaner and less error-prone.

---

# Example

```jsx
const onConnect = (connection) => {
  setEdges((edges) =>
    addEdge(connection, edges)
  );
};
```

---

# How It Works

```
User Connects Nodes

↓

onConnect()

↓

addEdge()

↓

New Edge Added

↓

Canvas Updates
```

---

# What is `connection`?

When a user creates a connection,

React Flow automatically provides an object like:

```jsx
{
  source: "1",
  target: "2"
}
```

`addEdge()` converts it into a proper edge object.

---

# Why Use addEdge()?

- Less code
- Built-in utility
- Easier maintenance
- Recommended by React Flow

---

# Common Interview Questions

### Is `addEdge()` required?

No.

You can manually create edges, but `addEdge()` is the recommended approach.

---

### Where is `addEdge()` commonly used?

Inside the `onConnect` callback.

---

# Key Points

- Built-in helper
- Simplifies edge creation
- Used with `onConnect`
- Recommended by the React Flow documentation

---

# 54. Edge Labels

## Interview Answer

> Edge Labels are text displayed on an edge to provide additional information about the relationship between two nodes.

---

# Simple Definition

An edge can contain text.

Instead of showing only a line,

it can display information.

---

# Example

```
Login

──── Success ───►

Dashboard
```

"Success" is the edge label.

---

# Adding a Label

```jsx
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "Success"
  }
];
```

---

# Another Example

```
Payment

──── Failed ───►

Retry
```

---

# Why Use Labels?

Labels explain:

- Success
- Failure
- Yes / No
- HTTP Method
- Status
- Conditions

---

# Example

Decision Tree

```
Age > 18

── Yes ─►

Allow

── No ─►

Reject
```

---

# Styling Labels

React Flow also supports custom label components for advanced use cases.

Example

```
Success

🟢 Green Label
```

or

```
Error

🔴 Red Label
```

---

# Common Interview Questions

### Why use edge labels?

To describe the relationship or condition between connected nodes.

---

### Can labels be customized?

Yes.

You can customize their appearance or even render custom components.

---

# Key Points

- Display text on edges
- Explain relationships
- Improve workflow readability
- Support custom rendering

---

# 55. Edge Marker

## Interview Answer

> Edge Markers are symbols displayed at the start or end of an edge. They visually indicate the direction or type of connection.

---

# Simple Definition

An edge marker is the symbol attached to an edge.

Example

```
────────►
```

The arrow is a marker.

---

# Why Are Markers Useful?

Without markers

```
────────
```

You cannot tell the direction.

With markers

```
────────►
```

The direction is obvious.

---

# Example

```jsx
markerEnd: {
  type: MarkerType.ArrowClosed
}
```

---

# Import

```jsx
import { MarkerType } from "@xyflow/react";
```

---

# Marker Positions

```
markerStart

◄────────

markerEnd

────────►
```

You can also use both.

```
◄────────►
```

---

# Common Marker Types

- Arrow
- Closed Arrow
- Custom SVG Marker

---

# Real-Life Example

```
API

────────►

Database
```

The marker shows that data flows **from the API to the Database**.

---

# Common Interview Questions

### What is an edge marker?

A visual indicator attached to the start or end of an edge.

---

### Why are markers important?

They make the direction of data flow easier to understand.

---

# Key Points

- Shows edge direction
- Attached to the start or end
- Supports built-in and custom markers
- Improves diagram clarity

---

# 56. Arrow Heads

## Interview Answer

> Arrow Heads are the most common type of edge marker. They indicate the direction in which data or control flows from the source node to the target node.

---

# Simple Definition

Arrow heads tell users **where the connection is going**.

---

# Example

Without arrow

```
────────
```

With arrow

```
────────►
```

---

# Using Arrow Heads

Import

```jsx
import { MarkerType } from "@xyflow/react";
```

---

# Example

```jsx
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  }
];
```

---

# Result

```
Start

────────►

API
```

---

# Different Arrow Styles

Open Arrow

```
──────>
```

Closed Arrow

```
──────►
```

Double Arrow

```
◄──────►
```

(Custom implementation)

---

# Real-Life Example

Workflow

```
Prompt

────────►

OpenAI

────────►

Database
```

Arrow heads clearly show the execution order.

---

# Common Interview Questions

### What is the difference between an edge marker and an arrow head?

An **arrow head** is a specific type of **edge marker**.

All arrow heads are edge markers, but edge markers can also be other shapes or custom SVG designs.

---

### Why are arrow heads commonly used?

They clearly indicate the direction of data or execution flow.

---

# Key Points

- Most common edge marker
- Indicates direction
- Configured with `markerStart` or `markerEnd`
- Uses `MarkerType` in React Flow


# 57. Edge Animation

## Interview Answer

> Edge Animation is a visual effect that makes an edge appear to move or flow. It is commonly used to represent active processes, data transfer, or workflow execution.

---

# Simple Definition

Normally, an edge is just a static line.

```
API ─────────► Database
```

With animation, the line appears to move, giving the impression that data is flowing.

```
API ─ • • • • ► Database
```

---

# Why Use Edge Animation?

Animation helps users understand:

- Current execution
- Active API calls
- Running workflows
- Data transfer
- Process status

---

# Basic Example

```jsx
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true
  }
];
```

---

# Result

```
Start

• • • • • ►

API
```

The dots move continuously.

---

# Real-World Example

AI Workflow

```
Prompt

• • • • ►

GPT

• • • • ►

Database

• • • • ►

Email
```

The moving edge shows that the workflow is currently executing.

---

# Dynamic Animation

```jsx
animated: node.status === "running"
```

Only animate the edge while a task is running.

---

# Benefits

- Better user feedback
- Easier debugging
- Shows execution flow
- Makes workflows feel interactive

---

# Common Interview Questions

### Does React Flow support animated edges?

Yes.

Set the `animated` property to `true`.

---

### When should animated edges be used?

When you want to indicate that a process or connection is currently active.

---

# Key Points

- Creates moving edge effects
- Uses the `animated` property
- Great for workflow execution
- Improves user experience

---

# 58. Edge Styling

## Interview Answer

> Edge Styling controls the visual appearance of an edge, including its color, width, dash pattern, opacity, and other CSS properties.

---

# Simple Definition

Edge styling changes **how an edge looks**.

---

# Default Edge

```
────────►
```

---

# Styled Edge

```
══════►
```

Thicker line.

---

# Example

```jsx
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: {
      stroke: "blue",
      strokeWidth: 3
    }
  }
];
```

---

# Common Style Properties

```jsx
style: {
  stroke: "#2563eb",
  strokeWidth: 2,
  opacity: 1
}
```

---

# Dashed Edge

```jsx
style: {
  strokeDasharray: "5 5"
}
```

Result

```
- - - - - - ►
```

---

# Thick Edge

```jsx
style: {
  strokeWidth: 5
}
```

Result

```
════════►
```

---

# Real-Life Example

```
Green Edge

↓

Success

Red Edge

↓

Error

Blue Edge

↓

Information
```

Different colors communicate different meanings.

---

# Common Interview Questions

### How do you change an edge's color?

Use the `style` property and set the `stroke` value.

---

### Can edge width be customized?

Yes.

Use `strokeWidth`.

---

# Key Points

- Controls edge appearance
- Uses CSS-like style properties
- Supports colors, thickness, opacity, and dashed lines
- Helps users understand graph status

---

# 59. Edge Types

## Interview Answer

> Edge Types determine the shape and routing of the connection between nodes. React Flow includes several built-in edge types and also supports custom edge components.

---

# Simple Definition

Not every connection should look the same.

Some edges are straight.

Some are curved.

Some have right-angle turns.

React Flow calls these **Edge Types**.

---

# Built-in Edge Types

```
default

straight

step

smoothstep

simplebezier

bezier
```

---

# Visualization

Straight

```
────────►
```

Bezier

```
╭──────►
```

Step

```
│

└──────►
```

Smooth Step

```
╭──────╮

       ►
```

---

# Example

```jsx
const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    type: "bezier"
  }
];
```

---

# Why Different Edge Types?

Different diagrams require different styles.

Workflow Builder

```
SmoothStep
```

Flowchart

```
Bezier
```

Network Diagram

```
Straight
```

---

# Common Interview Questions

### Can developers create custom edge types?

Yes.

Custom edge components can be registered similarly to custom node components.

---

### Which edge type is commonly used in workflow builders?

`smoothstep` because it is easy to follow visually.

---

# Key Points

- Controls connection shape
- Multiple built-in options
- Supports custom edges
- Choose based on readability and design

---

# 60. Straight Edge

## Interview Answer

> A Straight Edge is an edge that connects two nodes using a single straight line.

---

# Simple Definition

It is the simplest edge type.

```
Node A ─────────► Node B
```

---

# Example

```jsx
const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    type: "straight"
  }
];
```

---

# Visualization

```
API

────────►

Database
```

---

# When Should You Use It?

Straight edges work well when:

- Nodes are aligned
- The graph is simple
- Minimal visual styling is preferred

---

# Advantages

- Easy to understand
- Clean appearance
- Minimal calculations
- Good for simple diagrams

---

# Disadvantages

In large graphs,

straight edges may overlap other nodes or edges, reducing readability.

---

# Common Interview Questions

### When is a straight edge preferred?

For simple diagrams with aligned nodes.

---

### Is a straight edge the default?

Not necessarily.

Many applications prefer `smoothstep` or `bezier` for better readability.

---

# Key Points

- Simplest edge type
- Single straight line
- Best for simple layouts
- Can overlap in complex graphs

---

# 61. Bezier Edge

## Interview Answer

> A Bezier Edge is a curved edge that uses Bézier curve mathematics to create smooth, flowing connections between nodes.

---

# Simple Definition

Instead of a straight line,

the edge curves smoothly.

---

# Visualization

Straight Edge

```
Node A ─────────► Node B
```

Bezier Edge

```
Node A

╲

 ╲

  ╲

   ► Node B
```

---

# Example

```jsx
const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    type: "bezier"
  }
];
```

---

# Why Use Bezier Edges?

Curved edges:

- Avoid overlapping nodes
- Improve readability
- Make complex workflows easier to follow

---

# Real-Life Example

Flowchart

```
Login

╲

 ╲

  Dashboard

   ╲

    Reports
```

Curves make branching paths easier to distinguish.

---

# Advantages

- Smooth appearance
- Better for complex layouts
- Easier to trace visually
- Professional-looking diagrams

---

# Disadvantages

In extremely dense graphs,

too many curves can also create visual clutter.

---

# Common Interview Questions

### What is the difference between a straight edge and a bezier edge?

A straight edge is a direct line, while a bezier edge is a smooth curved line.

---

### When should bezier edges be used?

In flowcharts and workflow editors where curved connections improve readability.

---

# Key Points

- Uses smooth curves
- Built-in React Flow edge type
- Great for flowcharts
- Improves readability in larger graphs


# 62. Smooth Step Edge

## Interview Answer

> A Smooth Step Edge is an edge type that connects nodes using horizontal and vertical segments with rounded corners. It is one of the most commonly used edge types in workflow builders.

---

# Simple Definition

Imagine combining a **step edge** and a **curved edge**.

Instead of sharp corners, the corners become smooth.

---

# Visualization

Straight Edge

```
A ─────────► B
```

Step Edge

```
A

│

└────────► B
```

Smooth Step Edge

```
A

╭────────╮

         │

         ▼ B
```

Notice the rounded corners.

---

# Example

```jsx
const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    type: "smoothstep"
  }
];
```

---

# Why Use Smooth Step?

It improves readability.

Instead of many crossing lines,

connections look organized.

---

# Real-World Example

Workflow Builder

```
Login

↓

Validate User

↓

Dashboard

↓

Logout
```

Each connection uses smooth corners.

---

# Advantages

- Easy to read
- Professional appearance
- Reduces visual clutter
- Great for large workflows

---

# Disadvantages

Slightly more complex than straight edges, but the visual clarity is usually worth it.

---

# Common Interview Questions

### Which edge type is most commonly used in workflow builders?

`smoothstep`.

---

### Why is Smooth Step popular?

Because it creates clean connections that are easier to follow.

---

# Key Points

- Rounded corner edge
- Excellent readability
- Most popular workflow edge
- Built into React Flow

---

# 63. Step Edge

## Interview Answer

> A Step Edge connects nodes using only horizontal and vertical lines with sharp 90-degree turns.

---

# Simple Definition

A Step Edge moves like a staircase.

---

# Visualization

```
Start

│

│

└────────► API
```

Instead of a curve,

the connection has sharp corners.

---

# Example

```jsx
const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    type: "step"
  }
];
```

---

# Why Use Step Edges?

Many business diagrams and process flows prefer straight angles because they look structured.

---

# Example

```
Order

↓

Payment

↓

Shipping

↓

Delivery
```

Each connection forms clean right-angle turns.

---

# Advantages

- Organized appearance
- Easy to follow
- Common in process diagrams
- Good for enterprise software

---

# Disadvantages

Can look rigid compared to curved edges.

---

# Common Interview Questions

### What is the difference between Step and Smooth Step?

Step edges have **sharp corners**, while Smooth Step edges have **rounded corners**.

---

### When should Step edges be used?

For business process diagrams and structured workflows.

---

# Key Points

- Uses 90-degree turns
- Structured appearance
- Good for process diagrams
- Built into React Flow

---

# 64. Floating Edge

## Interview Answer

> A Floating Edge automatically connects to the most suitable side of a node instead of using a fixed handle position. This creates cleaner and more natural-looking connections.

---

# Simple Definition

Normally,

an edge connects to a specific handle.

```
Left Handle

Right Handle

Top Handle

Bottom Handle
```

A Floating Edge decides the best connection point automatically.

---

# Visualization

Without Floating Edge

```
API ─────────► Database
```

Always uses the same handle.

---

With Floating Edge

```
      API

        ╲

         ╲

       Database
```

The connection adjusts based on node positions.

---

# Why Use Floating Edges?

Imagine dragging nodes around.

A fixed connection might cross the node awkwardly.

Floating edges automatically choose a better side.

---

# Real-World Example

Mind Map

```
Central Idea

↙ ↓ ↘

Idea 1

Idea 2

Idea 3
```

Floating edges make these connections look much cleaner.

---

# Does React Flow Provide a Built-in Floating Edge?

React Flow provides examples for floating edges, but they are implemented as **custom edges** rather than a simple built-in edge type. The logic calculates the best connection points based on node positions.

---

# Advantages

- Cleaner connections
- Better user experience
- Adapts to node movement
- Reduces overlapping lines

---

# Common Interview Questions

### Why use Floating Edges?

To automatically choose the best connection point between nodes.

---

### Is Floating Edge a built-in edge type?

Not as a simple built-in type. It is typically implemented as a custom edge using React Flow's APIs and examples.

---

# Key Points

- Automatically adjusts connection points
- Great for draggable nodes
- Usually implemented as a custom edge
- Improves graph readability

---

# 65. Custom Edge

## Interview Answer

> A Custom Edge is a React component that allows developers to completely control how an edge is rendered, including its shape, animation, labels, and interaction.

---

# Simple Definition

Just as you can create a custom node,

you can also create a custom edge.

---

# Why Create Custom Edges?

Suppose you want

```
Animated Arrow

Glowing Edge

Dashed Connection

Editable Label

Custom Buttons
```

The built-in edge types may not be enough.

---

# Create a Custom Edge

```jsx
function CustomEdge(props) {
  return (
    <>
      {/* Custom SVG path */}
    </>
  );
}
```

---

# Register It

```jsx
const edgeTypes = {
  custom: CustomEdge
};
```

---

# Pass to React Flow

```jsx
<ReactFlow
  edgeTypes={edgeTypes}
  edges={edges}
/>
```

---

# Use the Edge

```jsx
const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    type: "custom"
  }
];
```

---

# Real-Life Example

AI Workflow

```
Prompt

══════►

GPT

══════►

Database
```

Custom edges can include:

- Animation
- Icons
- Status indicators
- Progress bars
- Buttons

---

# Common Interview Questions

### Why create a custom edge?

To build connections with custom visuals or behavior that the built-in edge types cannot provide.

---

### Are custom edges React components?

Yes.

Like custom nodes, they are React components.

---

# Key Points

- Built using React components
- Registered with `edgeTypes`
- Fully customizable
- Supports advanced interactions

---

# 66. Updating Edges

## Interview Answer

> Updating Edges means modifying an existing edge after it has been created. This may include changing its label, style, animation, marker, source, target, or other properties.

---

# Simple Definition

Edges are not permanent.

You can change them at any time.

---

# Example

Before

```
Login

────────►

Dashboard
```

Label

```
Success
```

---

After Update

```
Login

────────►

Dashboard
```

Label

```
Authenticated
```

---

# Updating State

```jsx
setEdges((edges) =>
  edges.map((edge) =>
    edge.id === "e1"
      ? {
          ...edge,
          label: "Success"
        }
      : edge
  )
);
```

---

# Update Style

```jsx
style: {
  stroke: "green",
  strokeWidth: 3
}
```

---

# Update Animation

```jsx
animated: true
```

---

# Update Marker

```jsx
markerEnd: {
  type: MarkerType.ArrowClosed
}
```

---

# What Can Be Updated?

- Label
- Color
- Width
- Animation
- Marker
- Type
- Source
- Target
- Custom data

---

# Real-World Example

Workflow Execution

Before

```
Gray Edge

↓

Waiting
```

After execution starts

```
Blue Animated Edge

↓

Running
```

After completion

```
Green Edge

↓

Completed
```

The edge changes based on the workflow state.

---

# Common Interview Questions

### Can edges be updated after creation?

Yes.

Edges are part of React state, so they can be updated just like nodes.

---

### How are edges typically updated?

By updating the `edges` state using functions like `setEdges()`.

---

# Key Points

- Edges are editable
- Update through React state
- Can change style, label, animation, and markers
- Enables dynamic and interactive workflows


# 67. Deleting Edges

## Interview Answer

> Deleting an edge means removing a connection between two nodes. In React Flow, this is typically done by updating the `edges` state and removing the desired edge.

---

# Simple Definition

Deleting an edge removes the line connecting two nodes.

---

# Example

Before

```
Start

────────►

API

────────►

Database
```

Delete the first edge

↓

After

```
Start

API

────────►

Database
```

The connection between **Start** and **API** no longer exists.

---

# Edge State

```jsx
const [edges, setEdges] = useEdgesState(initialEdges);
```

---

# Delete an Edge

```jsx
setEdges((edges) =>
  edges.filter((edge) => edge.id !== "e1")
);
```

---

# Delete Multiple Edges

```jsx
setEdges((edges) =>
  edges.filter(
    (edge) =>
      edge.source !== "1"
  )
);
```

This removes every edge starting from node `1`.

---

# Delete with Keyboard

Many applications support

```
Delete Key

Backspace
```

to remove the selected edge.

---

# Real-Life Example

Workflow

```
Login

────────►

Dashboard
```

Business requirement changes.

Delete the connection.

Create a new one.

```
Login

────────►

Verification
```

---

# Common Interview Questions

### Can an edge be deleted without deleting the nodes?

Yes.

Edges and nodes are managed separately.

---

### What happens after deleting an edge?

Only the connection disappears.

The nodes remain.

---

# Key Points

- Removes connections
- Nodes remain unchanged
- Uses `setEdges()`
- Common operation in workflow builders

---

# 68. Edge Validation

## Interview Answer

> Edge Validation is the process of checking whether a connection between two nodes is allowed before creating the edge.

---

# Simple Definition

Not every connection should be allowed.

Validation checks

> "Is this connection valid?"

before creating the edge.

---

# Example

Allowed

```
Start

↓

API
```

Not Allowed

```
Database

↓

Start
```

The application prevents the connection.

---

# Why Validate Edges?

Imagine an AI Workflow.

```
Prompt

↓

OpenAI

↓

Database
```

Connecting

```
Database

↓

Prompt
```

may not make sense.

Validation prevents incorrect workflows.

---

# React Flow

Validation is commonly done using the `isValidConnection` prop.

---

# Example

```jsx
const isValidConnection = (connection) => {
  return connection.source !== connection.target;
};
```

---

# Usage

```jsx
<ReactFlow
  isValidConnection={isValidConnection}
/>
```

---

# Example Rule

Prevent self-connections.

```
API

↓

API
```

❌ Not allowed.

---

# More Rules

Allow only

```
Input

↓

Process

↓

Output
```

Reject

```
Output

↓

Input
```

---

# Common Interview Questions

### Why is edge validation important?

It prevents invalid workflows and maintains graph integrity.

---

### Where is validation performed?

Usually through the `isValidConnection` callback.

---

# Key Points

- Prevents invalid connections
- Runs before edge creation
- Uses `isValidConnection`
- Essential in production workflow editors

---

# 69. Reconnecting Edges

## Interview Answer

> Reconnecting an edge means changing its source node or target node after it has already been created.

---

# Simple Definition

Instead of deleting an edge,

you move one of its ends to another node.

---

# Example

Before

```
Login

────────►

Dashboard
```

Reconnect

↓

After

```
Login

────────►

Admin Dashboard
```

---

# Why Use Reconnecting?

Suppose a user makes a mistake.

Instead of

- Delete edge
- Create new edge

they simply drag the connection to another node.

---

# Visualization

Before

```
A

────────►

B
```

After

```
A

────────►

C
```

---

# React Flow Support

Recent versions of React Flow provide support for reconnecting edges through callbacks and helper utilities (such as reconnect-related events and utilities).

---

# Real-Life Example

Workflow

```
Payment

────────►

Success Email
```

Business logic changes.

Reconnect

```
Payment

────────►

Invoice
```

---

# Benefits

- Faster editing
- Better user experience
- Less manual work
- Cleaner workflow editing

---

# Common Interview Questions

### Why reconnect instead of deleting?

It is quicker and preserves the existing edge while only changing its endpoint.

---

### What changes during reconnection?

The edge's `source`, `target`, or both.

---

# Key Points

- Changes edge endpoints
- Better than deleting and recreating
- Useful in visual editors
- Improves workflow editing

---

# Module 5: Handles

---

# 70. Handle Component

## Interview Answer

> A Handle is a connection point on a node where edges can start or end. React Flow uses handles to create connections between nodes.

---

# Simple Definition

Think of a handle as a **plug**.

Edges connect to these plugs.

---

# Visualization

```
      ●

+--------------+

Database

+--------------+

      ●
```

The circles are handles.

---

# Import

```jsx
import { Handle } from "@xyflow/react";
```

---

# Basic Example

```jsx
<Handle
  type="source"
  position={Position.Right}
/>
```

---

# Why Are Handles Needed?

Without handles,

users cannot create connections.

```
Node

↓

No Handle

↓

No Connection
```

---

# Multiple Handles

```
      ●

● Database ●

      ●
```

A node can have handles on all sides.

---

# Common Interview Questions

### What is a Handle?

A connection point for edges.

---

### Can a node have multiple handles?

Yes.

A node can have as many handles as needed.

---

# Key Points

- Connection point
- Required for custom nodes
- Supports multiple handles
- Used for incoming and outgoing edges

---

# 71. Source Handle

## Interview Answer

> A Source Handle is the starting point of an edge. It is where an outgoing connection begins.

---

# Simple Definition

Think of a source handle as

> "The place where data leaves the node."

---

# Visualization

```
Database ●──────►
```

The edge starts from the source handle.

---

# Example

```jsx
<Handle
  type="source"
  position={Position.Right}
/>
```

---

# Why Use Source Handles?

Imagine

```
API

↓

Database
```

The API sends data.

The connection starts from the API.

---

# Real-Life Example

```
Email

────────►

User
```

The Email node uses a source handle.

---

# Multiple Source Handles

```
API

────► Success

────► Error
```

One node can have multiple outgoing connections.

---

# Common Interview Questions

### What does a source handle do?

It starts an outgoing connection.

---

### Can one node have multiple source handles?

Yes.

Each handle can represent a different output.

---

# Key Points

- Starts an edge
- Outgoing connection
- `type="source"`
- Can have multiple source handles

---

# 72. Target Handle

## Interview Answer

> A Target Handle is the endpoint of an edge. It receives incoming connections from other nodes.

---

# Simple Definition

Think of a target handle as

> "The place where data enters the node."

---

# Visualization

```
──────► ● Database
```

The edge ends at the target handle.

---

# Example

```jsx
<Handle
  type="target"
  position={Position.Left}
/>
```

---

# Real-Life Example

```
API

────────►

Database
```

The Database node receives the connection through its target handle.

---

# Multiple Target Handles

```
User

↓

API

↓

Database
```

Several nodes can connect to the same node through different target handles.

---

# Source vs Target

| Source Handle | Target Handle |
|--------------|---------------|
| Starts the edge | Ends the edge |
| Outgoing connection | Incoming connection |
| Sends data | Receives data |
| `type="source"` | `type="target"` |

---

# Common Interview Questions

### Can a node have both source and target handles?

Yes.

Most workflow nodes both receive input and send output.

---

### Is a target handle required for incoming connections?

Yes.

Without a target handle, users cannot connect an edge to that node.

---

# Key Points

- Receives incoming edges
- Uses `type="target"`
- Can have multiple target handles
- Often paired with source handles


# 73. Multiple Handles

## Interview Answer

> Multiple Handles allow a single node to have more than one connection point. This enables one node to connect to multiple nodes or separate different types of inputs and outputs.

---

# Simple Definition

Normally, a node has one input and one output.

With **Multiple Handles**, a node can have many inputs and outputs.

---

# Example

```
            ●

+------------------+

      API

+------------------+

●                ●

            ●
```

This node has **4 handles**.

---

# Why Use Multiple Handles?

Imagine an AI Node.

```
Input Prompt

↓

AI

↓

Success

↓

Error
```

The AI node needs:

- One input
- Two outputs

One output for **Success**

One output for **Error**

---

# Example

```jsx
<Handle
  type="target"
  position={Position.Left}
/>

<Handle
  type="source"
  position={Position.Right}
  id="success"
/>

<Handle
  type="source"
  position={Position.Bottom}
  id="error"
/>
```

---

# Result

```
          ●

AI Node

      ●     ●
```

---

# Real-World Example

Payment Node

```
Payment

├── Success

├── Failed

└── Cancelled
```

Each output can have its own source handle.

---

# Common Interview Questions

### Can a node have multiple source handles?

Yes.

---

### Why use multiple handles?

To create multiple connection points for different workflows.

---

# Key Points

- Multiple connection points
- Supports multiple inputs and outputs
- Useful in workflow builders
- Each handle can have a unique ID

---

# 74. Dynamic Handles

## Interview Answer

> Dynamic Handles are handles that are created, removed, or updated while the application is running based on data or user actions.

---

# Simple Definition

Instead of creating handles manually,

the application creates them automatically.

---

# Example

Suppose an API node has

```
2 Outputs
```

React Flow creates

```
●

●
```

Now the user changes the API.

```
5 Outputs
```

React Flow automatically creates

```
●

●

●

●

●
```

---

# Example

```jsx
{
outputs.map((output) => (

<Handle
    key={output.id}
    id={output.id}
    type="source"
    position={Position.Right}
/>

))
}
```

---

# Why Use Dynamic Handles?

AI Builder

User chooses

```
3 Outputs
```

↓

React Flow automatically creates

```
3 Handles
```

---

# Real-Life Example

Switch Node

```
Case 1

Case 2

Case 3

Case 4
```

Every case gets its own handle.

---

# Benefits

- Flexible
- Dynamic workflows
- Unlimited outputs
- Better scalability

---

# Common Interview Questions

### Can handles be generated dynamically?

Yes.

Since handles are React components, they can be rendered using loops and state.

---

### When are dynamic handles useful?

Whenever the number of connections depends on user input or external data.

---

# Key Points

- Created at runtime
- Generated using React state
- Great for AI builders
- Supports dynamic workflows

---

# 75. Handle Position

## Interview Answer

> Handle Position determines where a handle appears on a node. React Flow provides four predefined positions.

---

# Simple Definition

A handle can appear on

- Top
- Right
- Bottom
- Left

---

# Available Positions

```jsx
Position.Top

Position.Right

Position.Bottom

Position.Left
```

---

# Visualization

```
        Top

         ●

Left ● Node ● Right

         ●

      Bottom
```

---

# Example

```jsx
<Handle
    type="source"
    position={Position.Right}
/>
```

---

# Multiple Positions

```jsx
<Handle
    type="target"
    position={Position.Left}
/>

<Handle
    type="source"
    position={Position.Right}
/>
```

---

# Why Is Position Important?

Data usually flows

```
Left

↓

Right
```

Therefore,

Input

```
Left
```

Output

```
Right
```

is a common convention.

---

# Common Interview Questions

### How many built-in handle positions are available?

Four.

---

### Can developers choose the handle position?

Yes.

Using the `position` prop.

---

# Key Points

- Four predefined positions
- Top
- Bottom
- Left
- Right

---

# 76. Handle Styling

## Interview Answer

> Handle Styling allows developers to customize the appearance of handles using CSS or inline styles.

---

# Simple Definition

By default,

handles are small blue circles.

You can change:

- Color
- Size
- Border
- Shape
- Shadow

---

# Default

```
●
```

---

# Styled

```
🟢
```

---

# Example

```jsx
<Handle
    type="source"
    position={Position.Right}
    style={{
        background: "red"
    }}
/>
```

---

# Bigger Handle

```jsx
style={{
    width: 15,
    height: 15
}}
```

---

# Rounded Handle

```jsx
style={{
    borderRadius: "50%"
}}
```

---

# Real-Life Example

```
Green

↓

Success

Red

↓

Error

Yellow

↓

Warning
```

Different colors help users understand the meaning of each connection point.

---

# Common Interview Questions

### Can handles be styled?

Yes.

Using the `style` prop or CSS.

---

### Can handle colors change dynamically?

Yes.

They can change based on React state or node data.

---

# Key Points

- Fully customizable
- Uses CSS
- Supports dynamic styles
- Improves UX

---

# 77. Handle Validation

## Interview Answer

> Handle Validation determines whether a connection to or from a specific handle is allowed before an edge is created.

---

# Simple Definition

Before connecting two handles,

React Flow asks:

```
Is this connection allowed?
```

---

# Example

Allowed

```
Input

↓

Process
```

---

Not Allowed

```
Output

↓

Output
```

Validation prevents the connection.

---

# Why Is Validation Needed?

Imagine

```
Database

↓

Database
```

This connection may not make sense.

Validation prevents invalid workflows.

---

# Example Rules

Allow

```
Input

↓

Process

↓

Output
```

Reject

```
Output

↓

Input
```

---

# Benefits

- Prevents mistakes
- Keeps workflows valid
- Improves user experience
- Protects business logic

---

# Common Interview Questions

### Why validate handles?

To stop invalid connections before they are created.

---

### Can validation depend on node types?

Yes.

You can allow or reject connections based on node type, handle ID, or any custom business rule.

---

# Key Points

- Prevents invalid connections
- Supports custom rules
- Improves workflow quality
- Works with `isValidConnection`

---

# 78. isValidConnection()

## Interview Answer

> `isValidConnection()` is a callback function used to determine whether a new connection between two handles should be accepted or rejected.

---

# Simple Definition

This function returns

```
true
```

or

```
false
```

---

# Syntax

```jsx
const isValidConnection = (connection) => {
    return true;
};
```

---

# Example

Prevent self-connections.

```jsx
const isValidConnection = (connection) => {
    return connection.source !== connection.target;
};
```

---

# Usage

```jsx
<ReactFlow
    isValidConnection={isValidConnection}
/>
```

---

# Example Rule

Allowed

```
Prompt

↓

AI
```

Rejected

```
Prompt

↓

Prompt
```

---

# More Advanced Example

```jsx
const isValidConnection = (connection) => {
    return connection.sourceHandle !== "error";
};
```

This prevents connections starting from the `"error"` handle.

---

# Common Interview Questions

### What does `isValidConnection()` return?

A boolean (`true` or `false`).

---

### When is it executed?

Before React Flow creates a new edge.

---

# Key Points

- Returns true or false
- Runs before edge creation
- Prevents invalid connections
- Supports custom business rules

---

# 79. Connecting Handles

## Interview Answer

> Connecting Handles is the process of creating an edge by dragging from a source handle to a target handle.

---

# Simple Definition

A user starts dragging from one handle,

then drops it onto another handle.

React Flow creates an edge.

---

# Visualization

```
API ●────────────►● Database
```

The connection begins at the source handle and ends at the target handle.

---

# How It Works

```
Click Source Handle

↓

Drag Mouse

↓

Drop on Target Handle

↓

Connection Validated

↓

Edge Created
```

---

# React Flow Callback

```jsx
const onConnect = (connection) => {
    setEdges((edges) =>
        addEdge(connection, edges)
    );
};
```

---

# React Flow

```jsx
<ReactFlow

    onConnect={onConnect}

/>
```

---

# What Is Passed?

React Flow provides a connection object.

```jsx
{
    source: "1",
    target: "2",
    sourceHandle: "success",
    targetHandle: "input"
}
```

---

# Real-Life Example

```
Prompt

↓

AI

↓

Database

↓

Email
```

Users build the workflow by connecting handles.

---

# Common Interview Questions

### Which handles can be connected?

Normally,

- Source Handle ➜ Target Handle

A source-to-source or target-to-target connection is usually rejected by React Flow or by your validation logic.

---

### Which callback is triggered after a successful connection?

`onConnect()`.

---

# Key Points

- Drag from source to target
- Creates an edge
- Triggers `onConnect()`
- Can be validated before creation
- Uses `addEdge()` to update the graph


# Module 6: React Flow Hooks & Store

---

# 80. useNodesState()

## Interview Answer

> `useNodesState()` is a React Flow hook used to manage the state of nodes. It provides the current nodes, a function to update them, and a helper function to handle node changes automatically.

---

# Simple Definition

Think of `useNodesState()` as **React's `useState()`**, but specially designed for React Flow nodes.

Instead of writing all the update logic yourself, React Flow does it for you.

---

# Syntax

```jsx
const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);
```

---

# What Does It Return?

It returns **3 values**.

```
useNodesState()

↓

nodes

↓

setNodes()

↓

onNodesChange()
```

---

## 1. nodes

Current list of nodes.

```jsx
console.log(nodes);
```

---

## 2. setNodes()

Updates the nodes.

```jsx
setNodes(newNodes);
```

Similar to React's

```jsx
setState()
```

---

## 3. onNodesChange()

Automatically handles built-in node updates.

Such as:

- Dragging
- Selecting
- Moving
- Position changes

---

# Example

```jsx
const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

<ReactFlow

    nodes={nodes}

    onNodesChange={onNodesChange}

/>
```

---

# Why Use It?

Without it,

you would need to manually update node positions after every drag.

React Flow does this automatically.

---

# How It Works

```
User Drags Node

↓

React Flow Detects Change

↓

onNodesChange()

↓

Nodes State Updated

↓

UI Re-renders
```

---

# Real-World Example

Task Board

```
Todo

↓

Doing

↓

Done
```

When users drag a node,

`useNodesState()` updates its position automatically.

---

# Common Interview Questions

### Is `useNodesState()` required?

No.

You can use React's `useState()` instead, but `useNodesState()` provides built-in helpers and is the recommended approach.

---

### Why is `onNodesChange()` useful?

It automatically applies changes such as dragging, selecting, and resizing without extra code.

---

# Key Points

- Specialized hook for nodes
- Returns three values
- Simplifies node management
- Recommended by React Flow

---

# 81. useEdgesState()

## Interview Answer

> `useEdgesState()` is a React Flow hook used to manage the state of edges. It works similarly to `useNodesState()` but is specifically designed for edge updates.

---

# Simple Definition

It manages all the connections between nodes.

---

# Syntax

```jsx
const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);
```

---

# Returns

```
edges

↓

setEdges()

↓

onEdgesChange()
```

---

## edges

Current edge list.

---

## setEdges()

Updates edges.

```jsx
setEdges(newEdges);
```

---

## onEdgesChange()

Automatically processes edge changes.

Such as:

- Deleting
- Selecting
- Updating
- Reconnecting

---

# Example

```jsx
const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

<ReactFlow

    edges={edges}

    onEdgesChange={onEdgesChange}

/>
```

---

# Why Use It?

Without it,

you would manually handle every edge update.

---

# Example Workflow

```
User Deletes Edge

↓

onEdgesChange()

↓

State Updated

↓

Canvas Updates
```

---

# Common Interview Questions

### Is `useEdgesState()` similar to `useNodesState()`?

Yes.

It is specifically designed for edges.

---

### Can you still use React's `useState()`?

Yes.

However, `useEdgesState()` reduces boilerplate and integrates with React Flow.

---

# Key Points

- Manages edge state
- Returns three values
- Automatically handles edge changes
- Recommended for React Flow applications

---

# 82. useReactFlow()

## Interview Answer

> `useReactFlow()` is a hook that provides access to the React Flow instance, allowing developers to interact with nodes, edges, viewport, and utility methods programmatically.

---

# Simple Definition

Think of it as a **remote control** for your React Flow canvas.

Instead of waiting for user actions,

your code can directly interact with the graph.

---

# Import

```jsx
import { useReactFlow } from "@xyflow/react";
```

---

# Example

```jsx
const reactFlow = useReactFlow();
```

---

# What Can It Do?

```
React Flow Instance

↓

Get Nodes

↓

Get Edges

↓

Zoom

↓

Fit View

↓

Project Coordinates

↓

Update Graph
```

---

# Example

```jsx
const { fitView } = useReactFlow();

fitView();
```

This automatically zooms the canvas so all nodes are visible.

---

# Another Example

```jsx
const { getNodes } = useReactFlow();

console.log(getNodes());
```

---

# Why Use It?

Suppose a button says:

```
Center Workflow
```

Click

↓

Automatically zoom to all nodes.

---

# Real-World Example

```
Search Node

↓

Find Node

↓

Zoom To Node
```

This can be implemented using `useReactFlow()` methods.

---

# Common Interview Questions

### Is `useReactFlow()` used for state?

No.

It gives access to the React Flow instance and helper methods, not state management itself.

---

### When should you use it?

When you need programmatic control over the canvas, nodes, edges, or viewport.

---

# Key Points

- Accesses the React Flow instance
- Controls viewport and graph
- Provides helper methods
- Essential for advanced features

---

# 83. React Flow Store

## Interview Answer

> The React Flow Store is an internal state management system that stores information about nodes, edges, viewport, selection, interactions, and other graph-related data.

---

# Simple Definition

Every React Flow application has a central place where all graph data is stored.

Think of it like a **database for the canvas**.

---

# Visualization

```
React Flow Store

├── Nodes

├── Edges

├── Viewport

├── Selection

├── Zoom

├── Connections

└── Interaction State
```

---

# Why Is It Needed?

Imagine a user:

```
Moves Node

↓

Selects Edge

↓

Zooms Canvas

↓

Creates Connection
```

React Flow needs a single source of truth to keep everything synchronized.

---

# Data Stored

- Nodes
- Edges
- Selected nodes
- Selected edges
- Viewport position
- Zoom level
- Mouse interaction state

---

# Benefits

- Fast updates
- Consistent state
- Easy synchronization
- Better performance

---

# Common Interview Questions

### Does React Flow have its own store?

Yes.

It manages internal graph state automatically.

---

### Do developers usually access it directly?

Not often.

Most applications use hooks like `useNodesState()`, `useEdgesState()`, or `useReactFlow()` instead.

---

# Key Points

- Internal state container
- Stores graph information
- Keeps the canvas synchronized
- Usually accessed indirectly through hooks

---

# 84. Internal Store

## Interview Answer

> The Internal Store is the underlying implementation used by React Flow to manage its state and interactions. Developers generally don't modify it directly, but advanced hooks can read from it when needed.

---

# Simple Definition

Think of the Internal Store as the **engine** inside React Flow.

You don't normally interact with it directly.

Instead,

you use higher-level APIs.

---

# Visualization

```
Application

↓

useNodesState()

↓

useEdgesState()

↓

useReactFlow()

↓

React Flow Store

↓

Internal Store
```

---

# What Does It Manage?

- Node positions
- Edge data
- Selection state
- Zoom
- Pan
- Viewport
- Mouse events
- Keyboard events
- Drag state

---

# Why Hide It?

If every developer modified the internal store directly,

React Flow could become inconsistent.

Instead,

React Flow exposes safe APIs.

---

# Advanced Access

React Flow provides advanced hooks like `useStore()` and `useStoreApi()` for developers who need to read from or interact with the internal store. These are intended for advanced use cases and require a good understanding of the library.

---

# Real-World Example

Normal Application

```
useNodesState()

↓

Update Node

↓

React Flow Updates Store
```

Advanced Plugin

```
Custom Hook

↓

Read Internal Store

↓

Custom Behavior
```

---

# Common Interview Questions

### Should developers modify the internal store directly?

No.

Use the official hooks and APIs unless you have an advanced use case.

---

### What is the difference between the React Flow Store and the Internal Store?

- **React Flow Store** refers to the state managed by React Flow.
- **Internal Store** is the underlying implementation that powers that state and interactions.

---

# Key Points

- Core engine behind React Flow
- Manages all internal state
- Usually hidden from developers
- Advanced APIs exist for expert use cases

# Module 6: State Management (Continued)

---

# 85. Zustand Integration

## Interview Answer

> Zustand is a lightweight state management library. React Flow uses Zustand internally to manage its own state, and developers can also use Zustand to manage application-specific state alongside React Flow.

---

# Simple Definition

Think of React Flow like a city.

```
Nodes

Edges

Viewport

Selection
```

All these need to be stored somewhere.

Internally, React Flow uses **Zustand** to manage this state.

You can also use Zustand in **your own application** to store data like:

- User settings
- Workflow name
- API responses
- Selected workflow
- Theme

---

# What is Zustand?

Zustand is a small and fast state management library for React.

Think of it as a simpler alternative to Redux.

---

# Why React Flow Uses Zustand?

Imagine dragging a node.

```
User Drags Node

↓

Position Changes

↓

State Updates

↓

Canvas Re-renders
```

This happens many times every second.

React Flow needs a fast state management solution.

That's why it uses Zustand internally.

---

# Installing Zustand

```bash
npm install zustand
```

---

# Basic Example

```jsx
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increase: () =>
    set((state) => ({
      count: state.count + 1
    }))
}));
```

---

# Using the Store

```jsx
const count = useStore(
  (state) => state.count
);
```

---

# React Flow + Zustand

A common architecture is:

```
Zustand

↓

Workflow Name

↓

Current User

↓

API Data

↓

React Flow

↓

Nodes

↓

Edges
```

---

# Real-World Example

AI Workflow Builder

```
Workflow Name

↓

Nodes

↓

Edges

↓

Execution Status

↓

Selected Node
```

Instead of passing props through many components,

everything is stored in Zustand.

---

# Interview Questions

### Does React Flow use Redux?

No.

It uses Zustand internally.

---

### Should I use Zustand with React Flow?

For small projects, React Flow hooks may be enough.

For large applications with shared state across many components, Zustand is an excellent choice.

---

# Key Points

- Lightweight state manager
- Used internally by React Flow
- Great for global application state
- Faster and simpler than Redux for many use cases

---

# 86. Updating Nodes

## Interview Answer

> Updating nodes means changing one or more properties of an existing node, such as its label, position, style, or custom data, while preserving the rest of the node's information.

---

# Simple Definition

Nodes are **not permanent**.

You can update them at any time.

---

# Example

Before

```
Login
```

After

```
User Login
```

Only the label changes.

---

# Updating State

```jsx
setNodes((nodes) =>
  nodes.map((node) =>
    node.id === "1"
      ? {
          ...node,
          data: {
            ...node.data,
            label: "Updated"
          }
        }
      : node
  )
);
```

---

# Why Use `map()`?

Imagine

```
10 Nodes
```

You only want to change one.

`map()` creates a new array while updating only the matching node.

---

# What Can Be Updated?

- Label
- Position
- Style
- Color
- Data
- Width
- Height
- Custom properties

---

# Example

Before

```
Database

↓

Gray
```

After

```
Database

↓

Green
```

The node changes color to show success.

---

# Real-World Example

Workflow Execution

```
Waiting

↓

Running

↓

Completed
```

Node colors update automatically as the workflow progresses.

---

# Interview Questions

### Should I modify a node directly?

No.

Always create a new updated object.

---

### Why?

React detects changes by comparing object references.

Mutating an existing object can prevent updates from rendering correctly.

---

# Key Points

- Update using `setNodes()`
- Preserve unchanged properties
- Never mutate existing objects
- Use immutable updates

---

# 87. Updating Edges

## Interview Answer

> Updating edges means changing properties of an existing edge, such as its label, style, animation, marker, or type, while keeping the rest of the edge intact.

---

# Simple Definition

Edges can also change.

---

# Example

Before

```
Gray Edge
```

After

```
Blue Animated Edge
```

---

# Update Example

```jsx
setEdges((edges) =>
  edges.map((edge) =>
    edge.id === "e1"
      ? {
          ...edge,
          animated: true
        }
      : edge
  )
);
```

---

# Updating Labels

```jsx
label: "Success"
```

---

# Updating Style

```jsx
style: {
  stroke: "green",
  strokeWidth: 3
}
```

---

# Updating Type

```jsx
type: "smoothstep"
```

---

# Real-World Example

Workflow

```
Gray

↓

Running

↓

Blue Animated

↓

Completed

↓

Green
```

The edge reflects the current execution state.

---

# Interview Questions

### Can an edge be updated after creation?

Yes.

Edges are part of React state.

---

### Which function is used?

`setEdges()`.

---

# Key Points

- Update with `setEdges()`
- Preserve existing properties
- Use immutable updates
- Supports labels, styles, animation, markers, and types

---

# 88. Controlled Flow

## Interview Answer

> A Controlled Flow is a React Flow setup where the parent React component fully owns and manages the state of nodes and edges.

---

# Simple Definition

There are two approaches:

```
Controlled

Uncontrolled
```

In a **Controlled Flow**,

your React component owns the data.

---

# Visualization

```
React State

↓

Nodes

↓

Edges

↓

React Flow
```

React Flow displays the data, but your component controls it.

---

# Example

```jsx
const [nodes, setNodes] =
  useNodesState(initialNodes);

const [edges, setEdges] =
  useEdgesState(initialEdges);

<ReactFlow
  nodes={nodes}
  edges={edges}
/>
```

---

# Why Use Controlled Flow?

Suppose you want to:

- Save to a database
- Undo/Redo
- Sync with other users
- Track history

You need full control over the graph state.

---

# Uncontrolled Flow

```
React Flow

↓

Stores Everything
```

Good for quick demos.

---

# Controlled Flow

```
Your React App

↓

Controls Everything

↓

React Flow Displays It
```

Best for production applications.

---

# Interview Questions

### Which approach is recommended for production?

Controlled Flow.

---

### Why?

Because the application has complete control over the graph's state and can integrate it with APIs, persistence, and business logic.

---

# Key Points

- Parent component owns state
- Recommended for real applications
- Easier to save and synchronize
- Supports advanced features

---

# 89. Immutable Updates

## Interview Answer

> An immutable update means creating a new object or array instead of modifying the existing one. React relies on immutable updates to detect changes and re-render components efficiently.

---

# Simple Definition

Never change the original object.

Instead,

create a new one.

---

# Wrong (Mutation)

```jsx
node.data.label = "New Label";
```

The original object changes directly.

---

# Correct (Immutable)

```jsx
{
  ...node,
  data: {
    ...node.data,
    label: "New Label"
  }
}
```

A new object is created.

---

# Why Is This Important?

React compares references.

If the reference changes,

React knows something changed.

```
Old Object

↓

New Object

↓

React Re-renders
```

If you mutate the original object,

the reference stays the same.

React may not detect the update.

---

# Array Example

Wrong

```jsx
nodes.push(newNode);
```

Correct

```jsx
[
  ...nodes,
  newNode
]
```

---

# Object Example

Wrong

```jsx
user.name = "John";
```

Correct

```jsx
{
  ...user,
  name: "John"
}
```

---

# React Flow Example

```jsx
setNodes((nodes) =>
  nodes.map((node) =>
    node.id === "1"
      ? {
          ...node,
          selected: true
        }
      : node
  )
);
```

---

# Real-World Example

Workflow

```
Node

↓

Waiting
```

Instead of modifying it directly,

create a new version.

```
Node

↓

Completed
```

React immediately updates the UI.

---

# Interview Questions

### Why are immutable updates important?

Because React detects changes using object and array references.

---

### What happens if I mutate state directly?

The UI may not update correctly, and bugs become harder to debug.

---

# Key Points

- Never mutate state directly
- Always create new objects or arrays
- Essential for React and React Flow
- Improves predictability and performance


# Module 7: React Flow Events

---

# 90. onNodesChange()

## Interview Answer

> `onNodesChange()` is an event handler that React Flow calls whenever one or more nodes change. It is commonly used with `useNodesState()` to automatically update node state.

---

# Simple Definition

Whenever something happens to a node,

React Flow says:

> "A node has changed."

This event is triggered.

---

# What Can Trigger It?

- Dragging
- Selecting
- Deselecting
- Resizing
- Deleting
- Position changes

---

# Flow

```
User Moves Node

↓

Node Changed

↓

onNodesChange()

↓

State Updated

↓

UI Re-renders
```

---

# Example

```jsx
const [nodes, setNodes, onNodesChange] =
  useNodesState(initialNodes);

<ReactFlow
  nodes={nodes}
  onNodesChange={onNodesChange}
/>
```

---

# Manual Example

```jsx
const onNodesChange = (changes) => {
  console.log(changes);
};
```

---

# Example Output

```jsx
[
  {
    id: "1",
    type: "position"
  }
]
```

---

# Why Is It Useful?

Instead of manually updating every drag or selection,

React Flow does it automatically.

---

# Interview Questions

### When is `onNodesChange()` called?

Whenever nodes are modified.

---

### Is it required?

No, but it is recommended when using `useNodesState()`.

---

# Key Points

- Handles node updates
- Works with `useNodesState()`
- Triggered automatically
- Simplifies state management

---

# 91. onEdgesChange()

## Interview Answer

> `onEdgesChange()` is an event handler that React Flow calls whenever one or more edges change.

---

# Simple Definition

Whenever an edge changes,

this event runs.

---

# What Can Trigger It?

- Delete edge
- Select edge
- Deselect edge
- Reconnect edge
- Update edge

---

# Flow

```
Edge Updated

↓

onEdgesChange()

↓

State Updated

↓

Canvas Updates
```

---

# Example

```jsx
const [edges, setEdges, onEdgesChange] =
  useEdgesState(initialEdges);

<ReactFlow
  edges={edges}
  onEdgesChange={onEdgesChange}
/>
```

---

# Manual Example

```jsx
const onEdgesChange = (changes) => {
  console.log(changes);
};
```

---

# Example Output

```jsx
[
  {
    id: "e1",
    type: "remove"
  }
]
```

---

# Interview Questions

### Does it update edge state automatically?

Yes, when used with `useEdgesState()`.

---

### What types of edge changes trigger it?

Selection, deletion, reconnection, and other edge modifications.

---

# Key Points

- Handles edge updates
- Works with `useEdgesState()`
- Automatically updates edge state

---

# 92. onConnect()

## Interview Answer

> `onConnect()` is an event that fires when a user successfully creates a connection between a source handle and a target handle.

---

# Simple Definition

Whenever the user creates a new connection,

this event runs.

---

# Flow

```
Source Handle

↓

Drag

↓

Target Handle

↓

onConnect()

↓

Edge Created
```

---

# Example

```jsx
const onConnect = (connection) => {
  setEdges((edges) =>
    addEdge(connection, edges)
  );
};
```

---

# React Flow

```jsx
<ReactFlow
  onConnect={onConnect}
/>
```

---

# Connection Object

```jsx
{
  source: "1",
  target: "2",
  sourceHandle: "success",
  targetHandle: "input"
}
```

---

# Why Is It Important?

Without `onConnect()`,

new connections are **not automatically added** in a controlled flow.

---

# Interview Questions

### Which helper is commonly used inside `onConnect()`?

`addEdge()`.

---

### When is `onConnect()` triggered?

After a valid connection is completed.

---

# Key Points

- Creates new edges
- Triggered after successful connection
- Usually uses `addEdge()`
- Essential in controlled flows

---

# 93. onNodeClick()

## Interview Answer

> `onNodeClick()` is an event that fires when the user clicks on a node.

---

# Simple Definition

User clicks a node.

↓

`onNodeClick()` runs.

---

# Flow

```
Mouse Click

↓

Node

↓

onNodeClick()
```

---

# Example

```jsx
const onNodeClick = (event, node) => {
  console.log(node);
};
```

---

# React Flow

```jsx
<ReactFlow
  onNodeClick={onNodeClick}
/>
```

---

# Accessing Node Data

```jsx
console.log(node.id);

console.log(node.data);
```

---

# Real-World Example

Clicking

```
Database
```

opens

```
Database Settings
```

---

# Another Example

```
Click Node

↓

Open Sidebar

↓

Edit Node
```

---

# Interview Questions

### What arguments does `onNodeClick()` receive?

The mouse event and the clicked node.

---

### What is a common use case?

Opening a properties panel for the selected node.

---

# Key Points

- Triggered when a node is clicked
- Provides the clicked node
- Useful for editing and navigation

---

# 94. onEdgeClick()

## Interview Answer

> `onEdgeClick()` is an event that fires when the user clicks on an edge.

---

# Simple Definition

Click an edge.

↓

React Flow notifies your application.

---

# Example

```jsx
const onEdgeClick = (event, edge) => {
  console.log(edge);
};
```

---

# React Flow

```jsx
<ReactFlow
  onEdgeClick={onEdgeClick}
/>
```

---

# Access Edge

```jsx
console.log(edge.id);

console.log(edge.label);
```

---

# Real-World Example

Workflow

```
Login

────────►

Dashboard
```

Click the edge.

↓

Edit

- Label
- Color
- Animation

---

# Another Example

```
Click Edge

↓

Delete Edge

↓

Update Workflow
```

---

# Interview Questions

### What arguments does `onEdgeClick()` receive?

The mouse event and the clicked edge.

---

### What is a common use case?

Opening edge settings or displaying connection information.

---

# Key Points

- Triggered when an edge is clicked
- Provides edge data
- Useful for editing connections

---

# 95. onNodeDrag()

## Interview Answer

> `onNodeDrag()` is an event that fires continuously while the user is dragging a node.

---

# Simple Definition

As long as the node is moving,

this event keeps running.

---

# Flow

```
Drag Node

↓

onNodeDrag()

↓

Position Updates

↓

Node Moves
```

---

# Example

```jsx
const onNodeDrag = (event, node) => {
  console.log(node.position);
};
```

---

# React Flow

```jsx
<ReactFlow
  onNodeDrag={onNodeDrag}
/>
```

---

# Example Output

```jsx
{
  x: 250,
  y: 140
}
```

The position updates continuously during the drag.

---

# Real-World Example

Mini Map

```
Drag Node

↓

Mini Map Updates

↓

Coordinates Update

↓

Grid Snaps
```

---

# Difference Between Drag Events

| Event | When It Fires |
|--------|---------------|
| `onNodeDragStart()` | Once, when dragging begins |
| `onNodeDrag()` | Continuously while dragging |
| `onNodeDragStop()` | Once, when dragging ends |

---

# Interview Questions

### Does `onNodeDrag()` run once?

No.

It runs repeatedly while the node is being dragged.

---

### What information does it provide?

The mouse event and the current node, including its latest position.

---

# Key Points

- Fires continuously during dragging
- Provides updated node position
- Useful for live updates and custom interactions
- Different from drag start and drag stop events

# Module 7: React Flow Events (Continued)

---

# 96. onSelectionChange()

## Interview Answer

> `onSelectionChange()` is an event that fires whenever the selection of nodes or edges changes. It provides the currently selected nodes and edges.

---

# Simple Definition

Whenever the user selects or deselects something,

React Flow tells your application.

---

# What Can Trigger It?

- Click a node
- Click an edge
- Select multiple nodes
- Deselect everything

---

# Flow

```
User Selects Node

↓

Selection Changes

↓

onSelectionChange()

↓

Application Updates
```

---

# Example

```jsx
const onSelectionChange = ({
  nodes,
  edges,
}) => {
  console.log(nodes);
  console.log(edges);
};
```

---

# React Flow

```jsx
<ReactFlow
  onSelectionChange={onSelectionChange}
/>
```

---

# Example Output

```jsx
{
  nodes: [
    {
      id: "1"
    }
  ],
  edges: []
}
```

---

# Real-World Example

```
Select Node

↓

Open Right Sidebar

↓

Show Node Properties
```

---

# Multiple Selection

```
Node A ✓

Node B ✓

Node C
```

The callback returns both selected nodes.

---

# Interview Questions

### What does `onSelectionChange()` return?

The currently selected nodes and edges.

---

### When is it useful?

When building property panels, delete actions, or multi-select tools.

---

# Key Points

- Detects selection changes
- Returns selected nodes and edges
- Supports multi-selection
- Useful for editing interfaces

---

# 97. onMove()

## Interview Answer

> `onMove()` is an event that fires whenever the viewport moves because of panning or zooming.

---

# Simple Definition

The canvas moves.

↓

React Flow tells your application.

---

# Example

```
User Pans Canvas

↓

Viewport Changes

↓

onMove()
```

---

# React Flow

```jsx
const onMove = (
  event,
  viewport
) => {
  console.log(viewport);
};

<ReactFlow
  onMove={onMove}
/>
```

---

# Example Output

```jsx
{
  x: 250,
  y: 100,
  zoom: 1.5
}
```

---

# Real-World Example

```
Move Canvas

↓

Save Viewport

↓

Restore Later
```

Many workflow editors remember the last viewport position.

---

# Common Uses

- Save camera position
- Analytics
- Synchronize multiple users
- Update mini-map

---

# Interview Questions

### Does `onMove()` fire only while dragging nodes?

No.

It fires when the **viewport** moves, such as during panning or zooming.

---

### What information does it provide?

The updated viewport (position and zoom).

---

# Key Points

- Detects viewport movement
- Fires during pan and zoom
- Provides viewport information

---

# 98. onPaneClick()

## Interview Answer

> `onPaneClick()` is an event that fires when the user clicks on the empty canvas instead of a node or edge.

---

# Simple Definition

Clicking the background triggers this event.

---

# Example

```
Click Node

❌ Doesn't trigger

----------------------

Click Empty Area

✅ Triggers
```

---

# Example

```jsx
const onPaneClick = () => {
  console.log("Pane Clicked");
};
```

---

# React Flow

```jsx
<ReactFlow
  onPaneClick={onPaneClick}
/>
```

---

# Real-World Example

```
Click Empty Canvas

↓

Close Sidebar

↓

Clear Selection
```

---

# Another Example

```
Click Background

↓

Create New Node
```

Some workflow editors create a new node where the user clicks.

---

# Interview Questions

### What is the pane?

The empty background area of the React Flow canvas.

---

### When is `onPaneClick()` useful?

To clear selections, close dialogs, or trigger background actions.

---

# Key Points

- Detects clicks on the canvas background
- Doesn't fire when clicking nodes or edges
- Useful for deselecting and resetting UI

---

# 99. onPaneScroll()

## Interview Answer

> `onPaneScroll()` is an event that fires when the user scrolls the React Flow pane using a mouse wheel or trackpad.

---

# Simple Definition

Whenever the user scrolls on the canvas,

this event runs.

---

# Example

```
Mouse Wheel

↓

Canvas Scroll

↓

onPaneScroll()
```

---

# Example

```jsx
const onPaneScroll = (
  event
) => {
  console.log(event);
};
```

---

# React Flow

```jsx
<ReactFlow
  onPaneScroll={onPaneScroll}
/>
```

---

# Real-World Example

```
Scroll

↓

Zoom

↓

Load More Data

↓

Analytics
```

---

# Common Uses

- Detect scrolling
- Custom zoom behavior
- Performance tracking
- User analytics

---

# Interview Questions

### Does `onPaneScroll()` detect mouse wheel movement?

Yes.

It is triggered when the pane receives scroll input.

---

### Is it the same as `onMove()`?

No.

`onPaneScroll()` responds to scroll input, while `onMove()` responds to viewport movement.

---

# Key Points

- Detects pane scrolling
- Useful for custom interactions
- Different from viewport movement

---

# 100. onDrop()

## Interview Answer

> `onDrop()` is an event that fires when a draggable item is dropped onto the React Flow canvas.

---

# Simple Definition

Drag something.

↓

Drop it on the canvas.

↓

`onDrop()` runs.

---

# Example

```
Sidebar

↓

Drag Text Node

↓

Drop on Canvas

↓

Create Node
```

---

# Example

```jsx
const onDrop = (
  event
) => {
  event.preventDefault();
};
```

---

# React Flow

```jsx
<ReactFlow
  onDrop={onDrop}
/>
```

---

# Real-World Example

Node Palette

```
Text Node

↓

Drag

↓

Drop

↓

New Node Created
```

This is how visual editors like **n8n**, **Langflow**, and **Node-RED** let users build workflows.

---

# Common Uses

- Create new nodes
- Upload files
- Import workflows
- Drag tools from a sidebar

---

# Interview Questions

### When is `onDrop()` triggered?

When a draggable item is dropped onto the React Flow pane.

---

### Is `onDrop()` enough by itself?

No.

It is usually paired with `onDragOver()` to allow dropping.

---

# Key Points

- Handles drop operations
- Used for drag-and-drop node creation
- Essential for workflow builders

---

# 101. onDragOver()

## Interview Answer

> `onDragOver()` is an event that fires continuously while a draggable item is being dragged over the React Flow canvas. It is commonly used to allow dropping.

---

# Simple Definition

As an item moves over the canvas,

this event keeps running.

---

# Flow

```
Start Drag

↓

Move Over Canvas

↓

onDragOver()

↓

Drop Allowed

↓

onDrop()
```

---

# Example

```jsx
const onDragOver = (
  event
) => {
  event.preventDefault();
};
```

---

# React Flow

```jsx
<ReactFlow
  onDragOver={onDragOver}
  onDrop={onDrop}
/>
```

---

# Why `preventDefault()`?

By default,

browsers do **not** allow dropping.

Calling

```jsx
event.preventDefault();
```

tells the browser that dropping is allowed.

---

# Real-World Example

```
Sidebar

↓

Drag AI Node

↓

Hover Over Canvas

↓

onDragOver()

↓

Drop

↓

Node Created
```

---

# Interview Questions

### Why is `onDragOver()` important?

Without it, the browser typically won't allow the drop operation on the canvas.

---

### Which event usually comes after `onDragOver()`?

`onDrop()`.

---

# Key Points

- Runs while dragging over the canvas
- Usually calls `event.preventDefault()`
- Works together with `onDrop()`
- Essential for drag-and-drop functionality
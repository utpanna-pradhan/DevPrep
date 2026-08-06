# React Flow Coding Questions

---

# 1. Display One Node

## Interview Question

**Display a single node in React Flow.**

---

## Explanation

The simplest React Flow application consists of:

- One node
- No edges
- A `<ReactFlow />` component

A node needs:

- `id`
- `position`
- `data`

---

## Code

```jsx
import ReactFlow from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: "Hello React Flow"
    }
  }
];

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} />
    </div>
  );
}
```

---

## Output

```
+----------------------+

Hello React Flow

+----------------------+
```

---

## Explanation

```jsx
id: "1"
```

Every node must have a unique ID.

---

```jsx
position: {
    x:100,
    y:100
}
```

Specifies where the node appears.

---

```jsx
data:{
    label:"Hello React Flow"
}
```

The label displayed inside the node.

---

## Interview Tip

Every node **must** have:

- id
- position
- data

Otherwise React Flow cannot render it properly.

---

# 2. Display Multiple Nodes

## Interview Question

Display multiple nodes.

---

## Explanation

React Flow displays every object inside the `nodes` array.

Just add more node objects.

---

## Code

```jsx
import ReactFlow from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: "Start"
    }
  },
  {
    id: "2",
    position: { x: 350, y: 100 },
    data: {
      label: "API"
    }
  },
  {
    id: "3",
    position: { x: 600, y: 100 },
    data: {
      label: "Database"
    }
  }
];

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} />
    </div>
  );
}
```

---

## Output

```
Start

API

Database
```

---

## Explanation

React Flow loops through every object inside

```jsx
nodes
```

and renders each one.

---

## Interview Tip

Large workflow editors may contain **hundreds or even thousands of nodes**.

React Flow is optimized to render them efficiently.

---

# 3. Connect Two Nodes

## Interview Question

Connect two nodes with an edge.

---

## Explanation

To connect nodes, create an `edges` array.

Each edge needs:

- id
- source
- target

---

## Code

```jsx
import ReactFlow from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: "Start"
    }
  },
  {
    id: "2",
    position: { x: 350, y: 100 },
    data: {
      label: "API"
    }
  }
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2"
  }
];

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
      />
    </div>
  );
}
```

---

## Output

```
Start

────────►

API
```

---

## Explanation

```jsx
source:"1"
```

Connection starts from node 1.

---

```jsx
target:"2"
```

Connection ends at node 2.

---

## Interview Tip

The values of `source` and `target` must match existing node IDs.

---

# 4. Change Node Color

## Interview Question

Change the background color of a node.

---

## Explanation

Every node accepts a `style` property.

This works like normal CSS.

---

## Code

```jsx
import ReactFlow from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: "Success"
    },
    style: {
      background: "green",
      color: "white",
      border: "2px solid black"
    }
  }
];

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} />
    </div>
  );
}
```

---

## Output

```
+----------------+

Success

(Green Background)

+----------------+
```

---

## Explanation

```jsx
background
```

Changes the background color.

---

```jsx
color
```

Changes the text color.

---

```jsx
border
```

Changes the border.

---

## Interview Tip

You can also change styles dynamically based on node status.

Example:

```jsx
background:
node.status === "success"
? "green"
: "red"
```

---

# 5. Make Node Draggable

## Interview Question

Make a node draggable or non-draggable.

---

## Explanation

Nodes are draggable by default.

You can disable dragging using the `draggable` property.

---

## Code

```jsx
import ReactFlow from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    draggable: false,
    data: {
      label: "Locked Node"
    }
  },
  {
    id: "2",
    position: { x: 350, y: 100 },
    draggable: true,
    data: {
      label: "Draggable Node"
    }
  }
];

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} />
    </div>
  );
}
```

---

## Output

```
Locked Node

❌ Cannot Move

----------------

Draggable Node

✅ Can Move
```

---

## Explanation

```jsx
draggable: true
```

The node can be moved.

---

```jsx
draggable: false
```

The node stays fixed.

---

## Real-World Example

Workflow Builder

```
Start Node

↓

Locked

Database

↓

Draggable

API

↓

Draggable
```

The **Start** node often remains fixed, while users can move the other nodes.

---

# Frequently Asked Interview Questions

### Q1. What are the minimum properties required for a node?

```jsx
id

position

data
```

---

### Q2. What are the minimum properties required for an edge?

```jsx
id

source

target
```

---

### Q3. Can you style nodes?

Yes.

Use the `style` property or create custom nodes.

---

### Q4. Are nodes draggable by default?

Yes.

Unless you set:

```jsx
draggable: false
```

---

### Q5. Can one node connect to multiple nodes?

Yes.

One source node can have multiple outgoing edges.

# React Flow Coding Questions (Part 2)

---

# 6. Add Labels

## Interview Question

**How do you add labels to nodes and edges in React Flow?**

---

## Explanation

React Flow supports labels for both:

- Nodes
- Edges

Node labels are stored inside the `data` object.

Edge labels are stored using the `label` property.

---

## Code

```jsx
import ReactFlow from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: "Login"
    }
  },
  {
    id: "2",
    position: { x: 350, y: 100 },
    data: {
      label: "Dashboard"
    }
  }
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "Success"
  }
];

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
      />
    </div>
  );
}
```

---

## Output

```
Login

------ Success ------>

Dashboard
```

---

## Explanation

Node Label

```jsx
data: {
   label: "Login"
}
```

---

Edge Label

```jsx
label: "Success"
```

---

## Interview Tip

Labels can also contain React components instead of plain text.

---

# 7. Add a Custom Node

## Interview Question

**How do you create a custom node in React Flow?**

---

## Explanation

A custom node lets you replace the default node UI with your own React component.

This is one of the most powerful features of React Flow.

---

## Step 1: Create Custom Node

```jsx
// TextNode.jsx

export default function TextNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        border: "2px solid blue",
        borderRadius: 8,
        background: "#eef"
      }}
    >
      <h3>{data.title}</h3>

      <p>{data.message}</p>
    </div>
  );
}
```

---

## Step 2: Register Node

```jsx
import TextNode from "./TextNode";

const nodeTypes = {
  textNode: TextNode
};
```

---

## Step 3: Use It

```jsx
const nodes = [
  {
    id: "1",
    type: "textNode",
    position: { x: 100, y: 100 },
    data: {
      title: "Email",
      message: "Welcome User"
    }
  }
];
```

---

## Step 4

```jsx
<ReactFlow

nodes={nodes}

nodeTypes={nodeTypes}

/>
```

---

## Output

```
+------------------+

Email

Welcome User

+------------------+
```

---

## Why Use Custom Nodes?

Examples

```
AI Prompt

Database

Email

Image

Webhook

Decision

Payment
```

Each can have its own unique design.

---

## Interview Tip

Most production React Flow applications rely heavily on custom nodes.

---

# 8. Add Custom Edge

## Interview Question

**How do you create a custom edge?**

---

## Explanation

A custom edge allows you to replace the default connection line with your own React component.

---

## Step 1

```jsx
// CustomEdge.jsx

export default function CustomEdge() {
  return (
    <>
      <path
        stroke="red"
        strokeWidth="4"
      />
    </>
  );
}
```

---

## Step 2

```jsx
const edgeTypes = {
  custom: CustomEdge
};
```

---

## Step 3

```jsx
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "custom"
  }
];
```

---

## Step 4

```jsx
<ReactFlow

edgeTypes={edgeTypes}

edges={edges}

/>
```

---

## Output

```
Login

========>

Dashboard
```

(Custom Red Edge)

---

## Why Use Custom Edges?

Examples

- Animated edges
- Dashed lines
- Colored paths
- Conditional connections
- Workflow execution paths

---

## Interview Tip

React Flow provides helper utilities like `BaseEdge` and path generators (for example, Bezier and SmoothStep paths) to simplify building custom edges.

---

# 9. Delete Node

## Interview Question

**How do you delete a node?**

---

## Explanation

Nodes are stored inside an array.

To delete one,

remove it from the array.

---

## Code

```jsx
setNodes((nodes) =>
  nodes.filter(
    (node) => node.id !== "2"
  )
);
```

---

## Before

```
Login

↓

Dashboard

↓

Database
```

---

## After

```
Login

↓

Database
```

---

## Explanation

```jsx
filter()
```

creates a new array without the deleted node.

---

## Complete Example

```jsx
const deleteNode = () => {
  setNodes((nodes) =>
    nodes.filter(
      (node) => node.id !== "2"
    )
  );
};
```

---

## Real-World Example

```
Delete Button

↓

Remove Workflow Step

↓

Canvas Updates
```

---

## Interview Tip

When deleting a node, you often also remove any edges connected to that node to avoid orphaned connections.

---

# 10. Delete Edge

## Interview Question

**How do you delete an edge?**

---

## Explanation

Edges are stored in an array.

Delete the edge by filtering it out.

---

## Code

```jsx
setEdges((edges) =>
  edges.filter(
    (edge) => edge.id !== "e1-2"
  )
);
```

---

## Before

```
Login

------>

Dashboard
```

---

## After

```
Login

Dashboard
```

(No connection)

---

## Complete Example

```jsx
const deleteEdge = () => {
  setEdges((edges) =>
    edges.filter(
      (edge) => edge.id !== "e1-2"
    )
  );
};
```

---

## Real-World Example

```
User Clicks Edge

↓

Delete Key

↓

Edge Removed

↓

Nodes Stay
```

---

## Interview Tip

Deleting an edge only removes the connection.

The source and target nodes remain on the canvas.

---

# Frequently Asked Interview Questions

### Q1. What is the difference between a default node and a custom node?

| Default Node | Custom Node |
|--------------|-------------|
| Built into React Flow | Created by you |
| Limited customization | Fully customizable |
| Simple UI | Any React component |

---

### Q2. What is the difference between deleting a node and deleting an edge?

Deleting a **node** removes the node itself (and usually its connected edges).

Deleting an **edge** removes only the connection.

---

### Q3. Can labels contain JSX?

Yes.

Both node content and edge labels can be customized with React components, depending on the approach you use.

---

### Q4. How do you remove a node?

Use:

```jsx
setNodes()

+

filter()
```

---

### Q5. How do you remove an edge?

Use:

```jsx
setEdges()

+

filter()
```

# React Flow Coding Questions (Part 3)

---

# 11. Disable Dragging

## Interview Question

**How do you disable dragging in React Flow?**

---

## Explanation

By default, users can drag nodes around the canvas.

Sometimes you want nodes to stay fixed, such as:

- Read-only workflow
- Flow preview
- Organization chart
- Documentation

You can disable dragging for:

- Individual nodes
- All nodes

---

# Method 1: Disable a Single Node

```jsx
const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: "Locked Node"
    },
    draggable: false
  }
];
```

---

## Output

```
+----------------+

Locked Node

❌ Cannot Move

+----------------+
```

---

# Method 2: Disable All Nodes

```jsx
<ReactFlow

nodes={nodes}

edges={edges}

nodesDraggable={false}

/>
```

---

## Output

```
All Nodes

❌ Cannot Move
```

---

## Explanation

```jsx
draggable: false
```

Disables dragging for one node.

---

```jsx
nodesDraggable={false}
```

Disables dragging for every node.

---

## Real-World Example

```
Workflow Template

↓

Read Only

↓

Users Cannot Move Nodes
```

---

## Interview Tip

Use `nodesDraggable={false}` for read-only applications.

---

# 12. Disable Zoom

## Interview Question

**How do you disable zooming in React Flow?**

---

## Explanation

React Flow allows zooming by:

- Mouse wheel
- Pinch gesture
- Double click

Sometimes you want a fixed zoom level.

---

# Method 1: Disable Mouse Wheel Zoom

```jsx
<ReactFlow

zoomOnScroll={false}

/>
```

---

# Method 2: Disable Double Click Zoom

```jsx
<ReactFlow

zoomOnDoubleClick={false}

/>
```

---

# Method 3: Disable Pinch Zoom

```jsx
<ReactFlow

zoomOnPinch={false}

/>
```

---

# Disable Everything

```jsx
<ReactFlow

zoomOnScroll={false}

zoomOnDoubleClick={false}

zoomOnPinch={false}

/>
```

---

## Output

```
Canvas

↓

Fixed Zoom

↓

User Cannot Zoom
```

---

## Real-World Example

```
Dashboard

↓

Workflow Preview

↓

Fixed Zoom
```

---

## Interview Tip

Disabling zoom is useful for static diagrams and embedded workflow previews.

---

# 13. Enable MiniMap

## Interview Question

**How do you add a MiniMap to React Flow?**

---

## Explanation

A MiniMap shows a small overview of the entire workflow.

It helps users navigate large graphs.

---

# Step 1

Import MiniMap.

```jsx
import {
  MiniMap
} from "@xyflow/react";
```

---

# Step 2

Add it inside `ReactFlow`.

```jsx
<ReactFlow

nodes={nodes}

edges={edges}

>

<MiniMap />

</ReactFlow>
```

---

## Output

```
Main Canvas

-------------------

MiniMap

□
```

---

## Why Use It?

Imagine

```
500 Nodes
```

Users can quickly jump to another part of the workflow.

---

## Custom MiniMap

```jsx
<MiniMap

zoomable

pannable

/>
```

---

## Real-World Example

```
n8n

Langflow

Node-RED

Figma
```

All provide a minimap for easier navigation.

---

## Interview Tip

MiniMap is especially useful for large workflows.

---

# 14. Add Controls

## Interview Question

**How do you add zoom and fit controls?**

---

## Explanation

React Flow provides a built-in **Controls** component.

It adds buttons for:

- Zoom In
- Zoom Out
- Fit View
- Lock/Unlock Interaction (depending on configuration/version)

---

# Step 1

Import Controls.

```jsx
import {
  Controls
} from "@xyflow/react";
```

---

# Step 2

Use It

```jsx
<ReactFlow

nodes={nodes}

edges={edges}

>

<Controls />

</ReactFlow>
```

---

## Output

```
+

-

Fit View
```

---

## Why Use Controls?

Users don't have to remember keyboard shortcuts or mouse gestures.

---

## Real-World Example

```
Large Workflow

↓

Click Fit View

↓

Entire Workflow Visible
```

---

## Interview Tip

Controls are built into React Flow and require very little setup.

---

# 15. Add Background

## Interview Question

**How do you add a background grid or dots to React Flow?**

---

## Explanation

The **Background** component adds visual guides to the canvas.

It improves alignment while moving nodes.

---

# Step 1

Import

```jsx
import {
  Background
} from "@xyflow/react";
```

---

# Step 2

Use It

```jsx
<ReactFlow

nodes={nodes}

edges={edges}

>

<Background />

</ReactFlow>
```

---

## Output

```
. . . . . . . .

Node

. . . . . . . .
```

---

# Background Variants

```jsx
import {
  Background,
  BackgroundVariant
} from "@xyflow/react";
```

---

## Dots

```jsx
<Background

variant={BackgroundVariant.Dots}

/>
```

---

## Lines

```jsx
<Background

variant={BackgroundVariant.Lines}

/>
```

---

## Cross

```jsx
<Background

variant={BackgroundVariant.Cross}

/>
```

---

## Customize the Background

```jsx
<Background
  variant={BackgroundVariant.Dots}
  gap={20}
  size={2}
/>
```

### Common Props

- `variant` → Dots, Lines, or Cross
- `gap` → Distance between grid points/lines
- `size` → Size of dots or line thickness (depending on variant)

---

## Real-World Example

```
Workflow Builder

↓

Background Grid

↓

Easy Node Alignment
```

---

## Interview Tip

Most workflow builders use a background grid because it makes node placement more organized and professional.

---

# Frequently Asked Interview Questions

### Q1. How do you disable dragging for all nodes?

```jsx
nodesDraggable={false}
```

---

### Q2. How do you disable mouse wheel zoom?

```jsx
zoomOnScroll={false}
```

---

### Q3. Which component shows a small overview of the workflow?

```jsx
<MiniMap />
```

---

### Q4. Which component provides zoom controls?

```jsx
<Controls />
```

---

### Q5. Which component adds a grid or dotted background?

```jsx
<Background />
```

---

# Summary

| Feature | Component / Prop |
|----------|------------------|
| Disable one node drag | `draggable: false` |
| Disable all node dragging | `nodesDraggable={false}` |
| Disable mouse wheel zoom | `zoomOnScroll={false}` |
| Disable double-click zoom | `zoomOnDoubleClick={false}` |
| Disable pinch zoom | `zoomOnPinch={false}` |
| Mini map | `<MiniMap />` |
| Zoom controls | `<Controls />` |
| Canvas background | `<Background />` |
| Dotted background | `BackgroundVariant.Dots` |
| Line background | `BackgroundVariant.Lines` |
| Cross background | `BackgroundVariant.Cross` |
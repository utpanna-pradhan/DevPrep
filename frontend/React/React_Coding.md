# Q1. Build a counter
```js
import {useState} from "react";
export default function Counter(){
    const [count,setCount] =useState(0);
    return(
        <div>
        <p>Count {count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
         <button onClick={()=>setCount(count-1)}>-</button>
          <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
```

# Q2. Increment a counter by 5

```js
import {useState} from "react"
export default function Counter(){
    const [count,seCount] = useState(0)
    const incrementByFive = () =>{
        setCount((prev)=> prev + 5);
        //prev represents the previous state value.
    }
    return(
        <div>
        <p>Count {count} </p>
        <button onClick={incrementByFive}>increase by 5<button>
        </div>
    )
}
```

# Q3. Show or hide a password

```js
import {useState} from "react";
export default function PasswordToggle(){
    return(
        <div>
        <input type={showPassword ? "text" : "password"} />
        <button onClick={(prev)=>!prev}>
        {showPassword ? "Hide" : "Show"}</button>
        
        
        </div>
    )
}
```

# Q4. Build a character counter

```js
import {useState} from "react"
export default function CharacterCount(){
    const [count,setCount] =useState(")
    return(
        <div>
        <textarea value="text" placeholder="Type.." onChange={(e)=>setCount(e.target.value)}/>
        <p>Length : {text.length} </p>
        </div>
    )
}
```

# Q5.Create a todo list with edit and completed functionality


# Q50. Create a theme switcher with light and dark modes
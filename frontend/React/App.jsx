import { useState } from "react"

export default function App() {
    const [dark,setDark] =useState(false);
  return (
    <div style={{backgroundColor:dark ? "#222" : "#fff" , color:dark? "#fff" : "#222" , minHeight:"100vh" , padding:"30px"}}>
      
    </div>
  )
}

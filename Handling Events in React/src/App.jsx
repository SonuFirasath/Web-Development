import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, newname] = useState("Mikey")
  const [form,setform] = useState({})
  const handleClick = ()=>{
    alert("Hey i am clicked.")
  }
  const redoo = ()=>{
    // alert("Hey did you just go over on (red speaking).")
  }
  const namechanger = (e)=>{
    newname(e.target.value)
  }
  const handlechange = (e)=>{
    setform({...form, [e.target.name]: e.target.phone})
    console.log(form)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>clilck me</button>
      </div>
      <div className="red" onMouseOver={redoo}>
        Hey i am red and what about you do you want to hover me ?
      </div>

      <input type="text" name='email' value={form.email ?form.email:""}  onChange={handlechange}/>
      <input type="text" name='phone' value={form.phone ? form.phone:""}  onChange={handlechange}/>
    </>
  )
}

export default App

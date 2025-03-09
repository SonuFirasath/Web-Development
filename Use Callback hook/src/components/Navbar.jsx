import React from 'react'
import { memo } from 'react'
const Navbar = ({adjective, changeadjective}) => {
    console.log("Navbar is rendering dude check it once....")
  return (
    <div>
      Hey i am a {adjective} Navbar.............
      <button onClick={()=>{changeadjective}}>{changeadjective()}</button>
    </div>
  )
}

export default memo(Navbar)

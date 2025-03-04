import React from 'react'
import Footer from './footer'
const navbar = (props) => {
  return (
    <div>
        <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default navbar

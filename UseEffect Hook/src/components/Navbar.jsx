import React from "react";
import { useEffect } from "react";
const Navbar = ({ color }) => {
  useEffect(() => {
    alert("Color changed bro please have a check.......");
  }, [color]);
  return <div>I am a navbar of {color} hehe...</div>;
};

export default Navbar;

"use client";
import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div>
      <div>I am Navbar...
        you are in {pathname}
      </div>
    </div>
  )
}

export default Navbar

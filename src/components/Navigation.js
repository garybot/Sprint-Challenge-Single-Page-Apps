import React from "react";
import {NavLink} from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <NavLink to="/characters">All Characters</NavLink>
      <NavLink to="/characters/search">Search</NavLink>
    </nav>
  )
}
import React from "react";
import { NavLink } from "react-router-dom"

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <NavLink to="/characters">List All Characters</NavLink>
      </header>

    </section>
  );
}

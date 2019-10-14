import React from "react";
import {Route, Link} from "react-router-dom";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/"><WelcomePage /></Route>
      <Route exact path="/"><SearchForm /></Route>
      <Link to="/characters">Characters</Link>
      <Route path="/characters"><CharacterList /></Route>
    </main>
  );
}

import React, {useState} from "react";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  const [characterToFind, setCharacterToFind] = useState("");
  return (
    <main>
      <Header />
      <Route exact path="/"><WelcomePage /></Route>
      <Route path=""><SearchForm setCharacterToFind={setCharacterToFind}/></Route>
      <Route exact path="/characters"><CharacterList characterToFind={characterToFind}/></Route>
    </main>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard.js";

const List = styled.section`
  display: flex;
  flex-flow: row wrap;
`

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${props.characterToFind}`)
      .then(res => {
        console.log(res);
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, [props.characterToFind]);

  return (
    <List className="character-list">
      {
        characters.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        })
      }
    </List>
  );
}

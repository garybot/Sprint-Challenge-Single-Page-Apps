import React from "react";
import styled from "styled-components";

const Card = styled.article`
  width: 33%;
  text-align: center;
`

const Portrait = styled.img`
  max-width: 100%;
`

export default function CharacterCard(props) {
  const character = props.character;
  return (
    <Card>
      <h3>{character.name}</h3>
      <Portrait src={character.image} alt={character.name} />
      <p>{character.name} is a {character.species} from {character.origin.name}</p>
    </Card>
  )
}

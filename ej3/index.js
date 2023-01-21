import fetch from "node-fetch";

const getCharacters = () => {
  const result = fetch('https://rickandmortyapi.com/api/character');
  console.log(result);
  const data = result.json();
  console.log(data);
}

getCharacters();
// ¿Por qué está fallando este código? ¿Sabrías depurarlo y corregirlo?
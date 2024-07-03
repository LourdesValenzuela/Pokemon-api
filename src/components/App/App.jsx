import { useState } from 'react';
import './App.css';
import Pokemon from '../Pokemon/Pokemon';

const App = () => {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [cargado, setCargado] = useState(false);

  const cargarPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=807"; 

    try {
      const response = await fetch(URL);
      const data = await response.json();
      setListaPokemon(data.results);
      setCargado(true);
    } catch (error) {
      console.log("Ocurrió un error", error);
    }
  };

  return (
    <>
      <button className='fetchBtn' onClick={cargarPokemon}>Fetch Pokemon</button>
      {cargado && <Pokemon listaPokemon={listaPokemon} />}
    </>
  )
}

export default App

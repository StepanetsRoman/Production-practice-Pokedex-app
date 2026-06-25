import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';

function PokemonList({ pokemons }) {
  if (pokemons.length === 0) {
    return (
      <p className="pokemon-list__empty" role="status">
        No Pokémon found
      </p>
    );
  }

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.id} className="pokemon-list__item">
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;

import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';

function PokemonList({ pokemons, onResetFilters, hasActiveFilters }) {
  if (pokemons.length === 0) {
    return (
      <div className="pokemon-list__empty" role="status">
        <p className="pokemon-list__empty-text">
          No Pokémon found. Try changing the search query or clearing filters.
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            className="pokemon-list__empty-button"
            onClick={onResetFilters}
          >
            Reset filters
          </button>
        )}
      </div>
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

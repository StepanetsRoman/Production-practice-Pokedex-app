import './SearchBar.css';

function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-bar">
      <label className="search-bar__label" htmlFor="pokemon-search">
        Search by name
      </label>
      <input
        id="pokemon-search"
        className="search-bar__input"
        type="search"
        placeholder="Enter Pokémon name..."
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;

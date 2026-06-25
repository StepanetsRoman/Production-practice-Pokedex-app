import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__hero">
        <span className="header__badge">Powered by PokeAPI</span>
        <h1 className="header__title">Pokedex App</h1>
        <p className="header__subtitle">
          Explore the first 151 Pokémon, search by name and filter by type.
        </p>
      </div>
    </header>
  );
}

export default Header;

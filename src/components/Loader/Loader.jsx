import './Loader.css';

function Loader() {
  return (
    <div
      className="loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Pokémon"
    >
      <div className="loader__spinner" aria-hidden="true" />
      <p className="loader__text">Loading Pokémon...</p>
    </div>
  );
}

export default Loader;

import './Loader.css';

const SKELETON_COUNT = 6;

function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-card__line skeleton-card__line--short" />
      <div className="skeleton-card__image" />
      <div className="skeleton-card__tags">
        <div className="skeleton-card__tag" />
        <div className="skeleton-card__tag" />
      </div>
      <div className="skeleton-card__stats">
        <div className="skeleton-card__stat" />
        <div className="skeleton-card__stat" />
        <div className="skeleton-card__stat" />
        <div className="skeleton-card__stat" />
      </div>
    </div>
  );
}

function Loader() {
  return (
    <div
      className="loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Pokémon"
    >
      <p className="loader__text">Loading Pokémon...</p>
      <div className="loader__skeletons">
        {Array.from({ length: SKELETON_COUNT }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Loader;

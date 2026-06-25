import { TYPE_COLORS } from '../../constants/pokemonTypes';
import { getTypeTextColor } from '../../utils/getTypeTextColor';
import './PokemonCard.css';

const STAT_MAX = 255;

const STAT_CONFIG = [
  { key: 'hp', label: 'HP', color: 'var(--stat-hp)' },
  { key: 'attack', label: 'Attack', color: 'var(--stat-attack)' },
  { key: 'defense', label: 'Defense', color: 'var(--stat-defense)' },
  { key: 'speed', label: 'Speed', color: 'var(--stat-speed)' },
];

function formatPokemonName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatPokemonId(id) {
  return `#${String(id).padStart(3, '0')}`;
}

function StatRow({ label, value, color }) {
  const percentage = Math.min((value / STAT_MAX) * 100, 100);

  return (
    <div className="pokemon-card__stat">
      <div className="pokemon-card__stat-header">
        <span className="pokemon-card__stat-label">{label}</span>
        <span className="pokemon-card__stat-value">{value}</span>
      </div>
      <div
        className="pokemon-card__stat-bar"
        role="presentation"
        aria-hidden="true"
      >
        <div
          className="pokemon-card__stat-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function PokemonCard({ pokemon }) {
  const displayName = formatPokemonName(pokemon.name);
  const primaryType = pokemon.types[0];
  const accentColor = TYPE_COLORS[primaryType] || '#e2e8f0';

  return (
    <article
      className="pokemon-card"
      style={{ '--card-accent': accentColor }}
    >
      <div className="pokemon-card__top">
        <span className="pokemon-card__id">{formatPokemonId(pokemon.id)}</span>
        <h3 className="pokemon-card__name">{displayName}</h3>
      </div>

      <div className="pokemon-card__image-area">
        {pokemon.image ? (
          <img
            className="pokemon-card__image"
            src={pokemon.image}
            alt={`${displayName} sprite`}
            loading="lazy"
            width={140}
            height={140}
          />
        ) : (
          <div className="pokemon-card__image-placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="pokemon-card__types">
        {pokemon.types.map((type) => {
          const typeColor = TYPE_COLORS[type];

          return (
            <span
              key={type}
              className="pokemon-card__type"
              style={{
                backgroundColor: typeColor,
                color: getTypeTextColor(typeColor),
              }}
            >
              {type}
            </span>
          );
        })}
      </div>

      <div className="pokemon-card__stats">
        {STAT_CONFIG.map((stat) => (
          <StatRow
            key={stat.key}
            label={stat.label}
            value={pokemon.stats[stat.key]}
            color={stat.color}
          />
        ))}
      </div>
    </article>
  );
}

export default PokemonCard;

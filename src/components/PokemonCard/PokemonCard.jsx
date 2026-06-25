import { TYPE_COLORS } from '../../constants/pokemonTypes';
import { getTypeTextColor } from '../../utils/getTypeTextColor';
import './PokemonCard.css';

function formatPokemonName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatPokemonId(id) {
  return `#${String(id).padStart(3, '0')}`;
}

function PokemonCard({ pokemon }) {
  const displayName = formatPokemonName(pokemon.name);

  return (
    <article className="pokemon-card">
      <div className="pokemon-card__header">
        <span className="pokemon-card__id">{formatPokemonId(pokemon.id)}</span>
        <h3 className="pokemon-card__name">{displayName}</h3>
      </div>

      <div className="pokemon-card__image-wrapper">
        {pokemon.image ? (
          <img
            className="pokemon-card__image"
            src={pokemon.image}
            alt={`${displayName} sprite`}
            loading="lazy"
            width={120}
            height={120}
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

      <dl className="pokemon-card__stats">
        <div className="pokemon-card__stat">
          <dt>HP</dt>
          <dd>{pokemon.stats.hp}</dd>
        </div>
        <div className="pokemon-card__stat">
          <dt>Attack</dt>
          <dd>{pokemon.stats.attack}</dd>
        </div>
        <div className="pokemon-card__stat">
          <dt>Defense</dt>
          <dd>{pokemon.stats.defense}</dd>
        </div>
        <div className="pokemon-card__stat">
          <dt>Speed</dt>
          <dd>{pokemon.stats.speed}</dd>
        </div>
      </dl>
    </article>
  );
}

export default PokemonCard;

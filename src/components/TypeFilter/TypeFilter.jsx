import { POKEMON_TYPES, TYPE_COLORS } from '../../constants/pokemonTypes';
import { getTypeTextColor } from '../../utils/getTypeTextColor';
import './TypeFilter.css';

function TypeFilter({ selectedTypes, onTypeToggle }) {
  return (
    <div className="type-filter">
      <h2 className="type-filter__title">Filter by type</h2>
      <div className="type-filter__list" role="group" aria-label="Pokémon types">
        {POKEMON_TYPES.map((type) => {
          const isSelected = selectedTypes.includes(type);
          const typeColor = TYPE_COLORS[type];

          return (
            <button
              key={type}
              type="button"
              className={`type-filter__button ${isSelected ? 'type-filter__button--selected' : ''}`}
              style={{
                '--type-color': typeColor,
                '--type-text-color': getTypeTextColor(typeColor),
              }}
              onClick={() => onTypeToggle(type)}
              aria-pressed={isSelected}
            >
              {type}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TypeFilter;

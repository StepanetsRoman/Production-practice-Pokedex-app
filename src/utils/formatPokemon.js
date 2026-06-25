function getStatValue(stats, statName) {
  const stat = stats.find((item) => item.stat.name === statName);
  return stat ? stat.base_stat : 0;
}

export function formatPokemon(data) {
  return {
    id: data.id,
    name: data.name,
    image:
      data.sprites.other?.['official-artwork']?.front_default ||
      data.sprites.front_default ||
      data.sprites.other?.home?.front_default ||
      null,
    types: data.types.map((typeEntry) => typeEntry.type.name),
    stats: {
      hp: getStatValue(data.stats, 'hp'),
      attack: getStatValue(data.stats, 'attack'),
      defense: getStatValue(data.stats, 'defense'),
      speed: getStatValue(data.stats, 'speed'),
    },
  };
}

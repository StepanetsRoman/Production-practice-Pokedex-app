import { POKEMON_LIMIT } from '../constants/pokemonTypes';
import { formatPokemon } from '../utils/formatPokemon';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit = POKEMON_LIMIT) {
  const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}`);

  if (!response.ok) {
    throw new Error('Failed to load the Pokémon list. Please try again later.');
  }

  const data = await response.json();
  return data.results;
}

export async function getPokemonDetails(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to load Pokémon details. Please try again later.');
  }

  const data = await response.json();
  return formatPokemon(data);
}

export async function getPokemons(limit = POKEMON_LIMIT) {
  try {
    const pokemonList = await getPokemonList(limit);
    const pokemonDetails = await Promise.all(
      pokemonList.map((pokemon) => getPokemonDetails(pokemon.url)),
    );

    return pokemonDetails;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('An unexpected error occurred while loading Pokémon.');
  }
}

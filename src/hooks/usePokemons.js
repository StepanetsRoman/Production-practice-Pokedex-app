import { useEffect, useState } from 'react';
import { getPokemons } from '../api/pokemonApi';

export function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPokemons() {
      try {
        setLoading(true);
        setError(null);
        const data = await getPokemons();
        if (isMounted) {
          setPokemons(data);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : 'Failed to load Pokémon.',
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPokemons();

    return () => {
      isMounted = false;
    };
  }, []);

  return { pokemons, loading, error };
}

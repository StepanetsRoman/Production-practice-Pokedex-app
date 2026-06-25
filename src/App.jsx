import { useMemo, useState } from 'react';
import { usePokemons } from './hooks/usePokemons';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import TypeFilter from './components/TypeFilter/TypeFilter';
import PokemonList from './components/PokemonList/PokemonList';
import Pagination from './components/Pagination/Pagination';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import './App.css';

function App() {
  const { pokemons, loading, error } = usePokemons();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredPokemons = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return pokemons.filter((pokemon) => {
      const matchesSearch = pokemon.name
        .toLowerCase()
        .includes(normalizedQuery);

      const matchesTypes =
        selectedTypes.length === 0 ||
        pokemon.types.some((type) => selectedTypes.includes(type));

      return matchesSearch && matchesTypes;
    });
  }, [pokemons, searchQuery, selectedTypes]);

  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

  const effectivePage =
    totalPages === 0 ? 1 : Math.min(currentPage, totalPages);

  const paginatedPokemons = useMemo(() => {
    const startIndex = (effectivePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPokemons.slice(startIndex, endIndex);
  }, [filteredPokemons, effectivePage, itemsPerPage]);

  function handleSearchChange(value) {
    setSearchQuery(value);
    setCurrentPage(1);
  }

  function handleTypeToggle(type) {
    setSelectedTypes((prevSelected) => {
      if (prevSelected.includes(type)) {
        return prevSelected.filter((selectedType) => selectedType !== type);
      }

      return [...prevSelected, type];
    });
    setCurrentPage(1);
  }

  function handleClearFilters() {
    setSelectedTypes([]);
    setCurrentPage(1);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleItemsPerPageChange(value) {
    setItemsPerPage(value);
    setCurrentPage(1);
  }

  return (
    <div className="app">
      <div className="app__container">
        <Header />

        <section className="app__controls">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
          <TypeFilter
            selectedTypes={selectedTypes}
            onTypeToggle={handleTypeToggle}
            onClearFilters={handleClearFilters}
          />
        </section>

        <main className="app__content" aria-busy={loading}>
          {loading && <Loader />}
          {!loading && error && <ErrorMessage message={error} />}
          {!loading && !error && <PokemonList pokemons={paginatedPokemons} />}
        </main>

        {!loading && !error && (
          <Pagination
            currentPage={effectivePage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </div>
    </div>
  );
}

export default App;

import SearchBar from '../SearchBar/SearchBar';
import TypeFilter from '../TypeFilter/TypeFilter';
import './ControlsPanel.css';

function ControlsPanel({
  searchQuery,
  onSearchChange,
  selectedTypes,
  onTypeToggle,
  itemsPerPage,
  onItemsPerPageChange,
  onResetAll,
  showingCount,
  totalFiltered,
  totalLoaded,
}) {
  const hasActiveFilters =
    searchQuery.trim().length > 0 || selectedTypes.length > 0;

  return (
    <section className="controls-panel" aria-label="Search and filters">
      <div className="controls-panel__toolbar">
        <p className="controls-panel__counter" aria-live="polite">
          Showing {showingCount} of {totalFiltered} Pokémon
          {totalFiltered !== totalLoaded && (
            <span className="controls-panel__counter-note">
              {' '}
              (from {totalLoaded} loaded)
            </span>
          )}
        </p>
        <button
          type="button"
          className="controls-panel__reset"
          onClick={onResetAll}
          disabled={!hasActiveFilters}
        >
          Reset filters
        </button>
      </div>

      <div className="controls-panel__row">
        <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
        <div className="controls-panel__per-page">
          <label className="controls-panel__label" htmlFor="items-per-page">
            Items per page
          </label>
          <select
            id="items-per-page"
            className="controls-panel__select"
            value={itemsPerPage}
            onChange={(event) =>
              onItemsPerPageChange(Number(event.target.value))
            }
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <TypeFilter
        selectedTypes={selectedTypes}
        onTypeToggle={onTypeToggle}
      />
    </section>
  );
}

export default ControlsPanel;

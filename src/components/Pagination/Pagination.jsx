import './Pagination.css';

function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages || totalPages === 0;

  return (
    <nav className="pagination" aria-label="Pagination">
      <div className="pagination__controls">
        <button
          type="button"
          className="pagination__button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          Previous
        </button>

        <span className="pagination__info">
          Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
        </span>

        <button
          type="button"
          className="pagination__button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
        >
          Next
        </button>
      </div>

      <div className="pagination__per-page">
        <label className="pagination__label" htmlFor="items-per-page">
          Items per page
        </label>
        <select
          id="items-per-page"
          className="pagination__select"
          value={itemsPerPage}
          onChange={(event) => onItemsPerPageChange(Number(event.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </nav>
  );
}

export default Pagination;

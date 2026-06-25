import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages || totalPages === 0;

  return (
    <nav className="pagination" aria-label="Pagination">
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
    </nav>
  );
}

export default Pagination;

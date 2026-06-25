import './ErrorMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <div className="error-message__icon" aria-hidden="true">
        !
      </div>
      <h2 className="error-message__title">Something went wrong</h2>
      <p className="error-message__text">
        Failed to load Pokémon data. Please try again later.
      </p>
      {message && (
        <p className="error-message__details">{message}</p>
      )}
    </div>
  );
}

export default ErrorMessage;

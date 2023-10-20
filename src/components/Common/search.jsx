function Search({ onSubmitSearch }) {
  return (
    <button className="button" onSubmit={onSubmitSearch} type="submit">
      Buscar
    </button>
  );
}

export { Search };

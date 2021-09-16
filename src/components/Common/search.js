function Search({ onSubmitSearch }) {
  return (
    <>
      <button className="button" onSubmit={onSubmitSearch} type="submit">
        Buscar
      </button>
    </> //encuadrar semánticamente
  );
}

export { Search };

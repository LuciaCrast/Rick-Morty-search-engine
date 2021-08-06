import "./pagination.scss";

function Pagination({ onClickAfter, onClickPrevious, currentSite, pages }) {
  return (
    <section>
      <button onClick={onClickPrevious}>Página Anterior</button>
      <button onClick={onClickAfter}>Página siguiente</button>
      <p className="paragraph">
        Estás en la página {currentSite} de {pages}
      </p>
    </section>
  );
}

export { Pagination };

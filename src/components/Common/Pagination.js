import "./pagination.scss";

function Pagination({ onClickAfter, onClickPrevious, currentSite, pages }) {
  return (
    <section className="sectionPagination">
      <button className="sectionPagination__button" onClick={onClickPrevious}>
        Página Anterior
      </button>
      <button className="sectionPagination__button" onClick={onClickAfter}>
        Página Siguiente
      </button>
      <p className="sectionPagination__paragraph">
        Estás en la página {currentSite} de {pages}
      </p>
    </section>
  );
}

export { Pagination };

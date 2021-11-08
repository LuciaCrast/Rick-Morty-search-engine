import { useState } from "react/cjs/react.development";
import "./pagination.scss";

function Pagination({ onClickAfter, onClickPrevious, currentSite, pages }) {
  return (
    <section className="sectionPagination">
      <button className="sectionPagination__button" onClick={onClickPrevious}>
        <i className="fas fa-chevron-left "> </i> Página Anterior
      </button>
      <button className="sectionPagination__button" onClick={onClickAfter}>
        Página Siguiente <i className="fas fa-chevron-right"></i>
      </button>
      {/* <p className="sectionPagination__paragraph">
        Estás en la página {currentSite} de {pages}
      </p> */}
    </section>
  );
}

export { Pagination };

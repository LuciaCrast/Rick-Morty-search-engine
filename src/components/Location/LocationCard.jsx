function LocationCard({ locationdata }) {
  return (
    <>
      <p className="locationUl__paragraph"> Nombre: {locationdata.name}</p>
      <p className="locationUl__paragraph"> Tipo: {locationdata.type}</p>
      <p className="locationUl__paragraph">
        Dimensión: {locationdata.dimension}
      </p>
      <p className="locationUl__paragraph">
        Nº Residentes: {locationdata.residents}
      </p>
    </>
  );
}
export { LocationCard };

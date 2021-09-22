function LocationCard({ locationdata }) {
  return (
    <>
      <p className="paragraph"> Nombre: {locationdata.name}</p>
      <p className="paragraph"> Tipo:{locationdata.type}</p>
      <p className="paragraph"> Dimensión:{locationdata.dimension}</p>
      <p className="paragraph"> Nº Residentes: {locationdata.residents} </p>
    </>
  );
}
export { LocationCard };

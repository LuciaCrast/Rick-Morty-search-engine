import "../styles/_form.scss";

function Filter({ data, valueName, species, onChangeName, onChangeSpecies }) {
  return (
    <form className="form" onSubmit={(evt) => evt.preventDefault()}>
      <input
        className="form__input"
        name="name"
        type="text"
        value={valueName}
        onChange={onChangeName}
        placeholder="Buscar personaje"
      />
      <select
        className="form__select"
        name="species"
        value={species}
        onChange={onChangeSpecies}
      >
        <option value="">Especies</option>
        {data
          .map((user) => user.species)
          // map → convierte el array de objeto en un array de cadena de texto
          .filter((item, index, array) => {
            return array.indexOf(item) === index;
          })
          // filter → indexOf buca el índice del primer elemento que encuentre que sea item. Devuelve true o false para cada elemtno que aparezca por primera vez. El tercer paŕametro es el array en sía sobre el que se está filtrando
          .map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
      </select>
    </form>
  );
}

export { Filter };

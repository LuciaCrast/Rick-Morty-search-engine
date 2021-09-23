function Filter({
  typeInput,
  id,
  onChangeName,
  placeholder,
  value,
  onChangeValue,
  allOptions,
  options,
}) {
  if (typeInput === "text") {
    return (
      <input
        className="form__input"
        name={id}
        type="text"
        value={value}
        onChange={onChangeName}
        placeholder={placeholder}
      />
    );
  } else {
    return (
      <select
        className="form__select"
        name={id}
        value={value}
        onChange={onChangeValue}
      >
        <option value="">{allOptions}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}
export { Filter };

import "./reset.scss";

function Reset({ onClickReset }) {
  return (
    <button className="button" onClick={onClickReset}>
      Reset
    </button>
  );
}

export { Reset };

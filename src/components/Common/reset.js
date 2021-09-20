import "./reset.scss";

function Reset({ onClickReset }) {
  return (
    <button className="btn-13" onClick={onClickReset}>
      Reset
    </button>
  );
}

export { Reset };

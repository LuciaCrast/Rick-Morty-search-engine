import { Header } from "./Header";
import { Link } from "react-router-dom";

function Warning() {
  return (
    <>
      <Header />
      <p className="">
        <Link to="/">
          <i className="far fa-arrow-alt-circle-left">Volver</i>
        </Link>
      </p>
      <p> Dirección no encontrada</p>
    </>
  );
}

export { Warning };

import { Header } from "./Header";
import { Link } from "react-router-dom";
import "../styles/_warning.scss";

function Warning() {
  return (
    <>
      <Header />
      <p className="">
        <Link to="/">
          <i className="far fa-arrow-alt-circle-left">Volver</i>
        </Link>
      </p>
      <p className="warning"> Dirección no encontrada</p>
    </>
  );
}

export { Warning };

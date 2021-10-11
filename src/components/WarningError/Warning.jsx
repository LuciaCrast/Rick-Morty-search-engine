import { Link } from "react-router-dom";
import { Header } from "../Common/Header";
import "./_warning.scss";

function Warning() {
  return (
    <>
      <Header />
      <p className="">
        <Link to="/">
          <i className="far fa-arrow-alt-circle-left"></i>Volver
        </Link>
      </p>
      <p className="warning"> Dirección no encontrada</p>
    </>
  );
}

export { Warning };

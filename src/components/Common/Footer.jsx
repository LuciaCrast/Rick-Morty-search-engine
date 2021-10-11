import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <nav className="footer__button">
          <i className="far fa-arrow-alt-circle-left footer__arrow"></i> Volver
          a la Página Principal
        </nav>
      </Link>
      <p className="footer__copy">
        <i class="fas fa-copyright"></i> Lucía Crast
      </p>
    </footer>
  );
}

export { Footer };

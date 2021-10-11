import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import { ErrorMsg } from "../../utils/utils";
import "./characterlist.scss";

function CharacterList({ valueName, data, fail }) {
  return (
    <>
      {fail ? (
        <p className="list__fail">
          {" "}
          No se ha encontrado la búsqueda "{ErrorMsg(valueName)}"{" "}
        </p>
      ) : (
        <ul className="list__ul">
          {data.map((card) => (
            <li className="list__element" key={card.id}>
              <Link className="list__link" to={`/characterdetails/${card.id}`}>
                <CharacterCard card={card} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export { CharacterList };

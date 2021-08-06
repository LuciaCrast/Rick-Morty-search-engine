import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import "./_characterlist.scss";

function CharacterList({ valueName, data, fail }) {
  return (
    <div className="list">
      {fail ? (
        <p className="list__fail">
          El nombre {valueName} no ha sido encontrado
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
    </div>
  );
}

export { CharacterList };

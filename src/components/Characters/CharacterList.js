import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import "./_characterlist.scss";

function CharacterList({ valueName, data, species, fail }) {
  return (
    <div className="list">
      {fail ? (
        <p className="list__fail">
          El nombre {valueName} no ha sido encontrado
        </p>
      ) : (
        <ul className="list__ul">
          {data
            .filter((card) => {
              if (!species) {
                return true;
              } else {
                return species === card.species;
              }
            })
            .sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
            .map((card) => (
              <Link
                className="list__link"
                to={`/characterdetails/${card.id}`}
                key={card.id}
              >
                <li className="list__element">
                  <CharacterCard card={card} />
                </li>
              </Link>
            ))}
        </ul>
      )}
    </div>
  );
}

export { CharacterList };

import { Link } from "react-router-dom";
import { LocationCard } from "./LocationCard";
import "./LocationList.scss";

function LocationList({ apiDataLocation, error }) {
  return (
    <>
      {error ? (
        <p> No se ha encontrado la búsqueda</p>
      ) : (
        <ul className="locationUl">
          {apiDataLocation.map((locationdata) => (
            <li className="locationUl__li" key={locationdata.id}>
              <Link>
                <LocationCard locationdata={locationdata} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export { LocationList };

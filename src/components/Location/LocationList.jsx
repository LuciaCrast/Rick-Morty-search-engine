import { Link } from "react-router-dom";
import { LocationCard } from "./LocationCard";
import { ErrorMsg } from "../../utils/utils";
import "./LocationList.scss";

function LocationList({
  apiDataLocation,
  error,
  valueDimensionLocation,
  valueNameLocation,
  valueTypeLocation,
}) {
  return (
    <>
      {error ? (
        <section>
          <p className="locationNotFound">
            {" "}
            No se ha encontrado la búsqueda "
            {ErrorMsg(
              valueNameLocation,
              valueTypeLocation,
              valueDimensionLocation
            )}
            ""
          </p>
        </section>
      ) : (
        <ul className="locationUl">
          {apiDataLocation.map((locationdata) => (
            <li className="locationUl__li" key={locationdata.id}>
              <Link to={`/locationdetails/${locationdata.id}`}>
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

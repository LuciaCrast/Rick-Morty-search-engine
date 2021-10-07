import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GetDataDetailsLocation } from "../../service/GetDataFromApi";
import { LocationCard } from "./LocationCard";

function LocationDetails() {
  let { id } = useParams();
  const [locationData, setLocationData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    GetDataDetailsLocation(id)
      .then((location) => {
        setLocationData(location);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  if (locationData) {
    return (
      <div>
        <p className="arrowContainer">
          <Link to="/principallocation">
            <div className="arrowLink">
              <i className="far fa-arrow-alt-circle-left "></i> Volver
            </div>
          </Link>
        </p>
        <LocationCard locationdata={locationData} />
      </div>
    );
  } else if (error) {
    return (
      <div>
        <Link to="/principallocation">
          <div className="arrowLink">
            <i className="far fa-arrow-alt-circle-left "></i> Volver
          </div>
        </Link>

        <p> No se ha encontrado la localización </p>
      </div>
    );
  } else {
    return <p> Cargando... </p>;
  }
}
export { LocationDetails };

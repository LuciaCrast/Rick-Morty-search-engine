import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GetDataDetailsLocation } from "../../service/GetDataFromApi";
import { LocationCard } from "./LocationCard";

function LocationDetails(locationdata) {
  let { id } = useParams();
  const [locationDetails, setLocationDetails] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    GetDataDetailsLocation(id)
      .then((location) => {
        setLocationDetails(location);
      })
      .catch(() => setError(true));
  }, [id]);

  if (locationDetails) {
    return (
      <div>
        <p className="arrowContainer">
          <Link to="/principallocation">
            <div className="arrowLink">
              <i className="far fa-arrow-alt-circle-left "></i> Volver
            </div>
          </Link>
        </p>
        <LocationCard locationdata={locationdata} />
      </div>
    );
  } else if (error) {
    return <p> No se ha encontrado la localización </p>;
  } else {
    <p> Cargando... </p>;
  }
}
export { LocationDetails };

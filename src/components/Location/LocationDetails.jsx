import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GetDataDetailsLocation } from "../../service/GetDataFromApi";
import { ArrowBackPrincipalLocation } from "./ArrowBackPrincipalLocation";
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
        <ArrowBackPrincipalLocation />
        <LocationCard locationdata={locationData} />
      </div>
    );
  } else if (error) {
    return (
      <div>
        <ArrowBackPrincipalLocation />
        <p> No se ha encontrado la localización </p>
      </div>
    );
  } else {
    return <p> Cargando... </p>;
  }
}
export { LocationDetails };

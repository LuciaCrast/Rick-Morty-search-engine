import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetDataDetailsLocation } from "../../service/GetDataFromApi";
import { ArrowBackPrincipalLocation } from "./ArrowBackPrincipalLocation";
import { LocationCard } from "./LocationCard";
import "./locationDetails.scss";

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
      <>
        <ArrowBackPrincipalLocation />
        <section className="detailsLocation">
          <LocationCard locationdata={locationData} />
        </section>
      </>
    );
  } else if (error) {
    return (
      <div>
        <ArrowBackPrincipalLocation />
        <p className="detailsLocation__notFound">
          {" "}
          No se ha encontrado la localización{" "}
        </p>
      </div>
    );
  } else {
    return <p className="detailsLocation__loading"> Cargando... </p>;
  }
}
export { LocationDetails };

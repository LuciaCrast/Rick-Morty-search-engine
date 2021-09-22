import { useState, useEffect } from "react";
import { GetDataFromApiLocation } from "../../service/GetDataFromApi";
import { Header } from "../Common/Header";
import { Pagination } from "../Common/Pagination";
import { LocationList } from "./LocationList";

function PrincipalLocation() {
  const [apiDataLocation, setApiDataLocation] = useState([]);
  const [pagesLocation, setPagesLocation] = useState(1);
  const [currentSiteLocation, setCurrentSiteLocation] = useState(1);

  useEffect(() => {
    GetDataFromApiLocation({
      page: currentSiteLocation,
    }).then(({ locationArray, totalPages }) => {
      setApiDataLocation(locationArray);
      setPagesLocation(totalPages);
    });
  }, [currentSiteLocation]);

  return (
    <>
      <Header />
      <Pagination
        currentSite={currentSiteLocation}
        pages={pagesLocation}
        onClickPrevious={() => {
          if (currentSiteLocation >= 2) {
            setCurrentSiteLocation(currentSiteLocation - 1);
            // setSearchAtAPI(true);
          }
        }}
        onClickAfter={() => {
          if (currentSiteLocation < pagesLocation) {
            setCurrentSiteLocation(currentSiteLocation + 1);
            // setSearchAtAPI(true);
          }
        }}
      />
      <LocationList apiDataLocation={apiDataLocation} />
    </>
  );
}

export { PrincipalLocation };

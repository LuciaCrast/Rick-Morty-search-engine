import { useState, useEffect } from "react";
import { GetDataFromApiLocation } from "../../service/GetDataFromApi";
import { Header } from "../Common/Header";
import { Pagination } from "../Common/Pagination";
import { LocationFilter } from "./LocationFilter";
import { LocationList } from "./LocationList";

function PrincipalLocation() {
  const [apiDataLocation, setApiDataLocation] = useState([]);
  const [pagesLocation, setPagesLocation] = useState(1);
  const [currentSiteLocation, setCurrentSiteLocation] = useState(1);
  const [valueNameLocation, setValueNameLocation] = useState("");
  const [valueTypeLocation, setValueTypeLocation] = useState("");
  const [valueDimensionLocation, setValueDimensionLocation] = useState("");
  const [searchAPILocation, setSearchAPILocation] = useState(true);

  useEffect(() => {
    if (searchAPILocation) {
      setSearchAPILocation(false);
      GetDataFromApiLocation({
        page: currentSiteLocation,
        name: valueNameLocation,
        type: valueTypeLocation,
        dimension: valueDimensionLocation,
      }).then(({ locationArray, totalPages }) => {
        setApiDataLocation(locationArray);
        setPagesLocation(totalPages);
      });
    }
  }, [
    currentSiteLocation,
    valueNameLocation,
    valueTypeLocation,
    valueDimensionLocation,
    searchAPILocation,
  ]);

  return (
    <>
      <Header />
      <LocationFilter
        valueNameLocation={valueNameLocation}
        onChangeLocation={(e) => {
          setValueNameLocation(e.currentTarget.value);
          setCurrentSiteLocation(1);
        }}
        valueTypeLocation={valueTypeLocation}
        onChangeTypeLocation={(e) => {
          setValueTypeLocation(e.currentTarget.value);
          setCurrentSiteLocation(1);
        }}
        valueDimension={valueDimensionLocation}
        onChangeDimensionLocation={(e) => {
          setValueDimensionLocation(e.currentTarget.value);
          setCurrentSiteLocation(1);
        }}
        onSubmitSearchLocation={(evt) => {
          setSearchAPILocation(true);
          evt.preventDefault();
        }}
        onClickResetLocation={() => {
          setCurrentSiteLocation(1);
          setValueNameLocation("");
          setValueTypeLocation("");
          setValueDimensionLocation("");
          setSearchAPILocation(true);
        }}
      />
      <Pagination
        currentSite={currentSiteLocation}
        pages={pagesLocation}
        onClickPrevious={() => {
          if (currentSiteLocation >= 2) {
            setCurrentSiteLocation(currentSiteLocation - 1);
            setSearchAPILocation(true);
          }
        }}
        onClickAfter={() => {
          if (currentSiteLocation < pagesLocation) {
            setCurrentSiteLocation(currentSiteLocation + 1);
            setSearchAPILocation(true);
          }
        }}
      />
      <LocationList apiDataLocation={apiDataLocation} />
    </>
  );
}

export { PrincipalLocation };

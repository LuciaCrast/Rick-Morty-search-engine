import { useState, useEffect } from "react";
import { GetDataFromApiEpisode } from "../../service/GetDataFromApi";
import { Header } from "../Common/Header";
import { EpisodeFilter } from "./EpisodeFilter";
import { Pagination } from "../Common/Pagination";
import { EpisodeList } from "./EpisodeList";

function PrincipalEpisode() {
  const [apiDataEpisode, setApiDataEpisode] = useState([]);
  const [pagesEpisode, setPagesEpisode] = useState(1);
  const [currentSiteEpisode, setCurrentSiteEpisode] = useState(1);
  const [valueNameEpisode, setValueNameEpisode] = useState("");
  const [valueTypeEpisode, setValueTypeEpisode] = useState("");
  const [searchAPIEpisode, setSearchAPIEpisode] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchAPIEpisode) {
      setError(false);
      setSearchAPIEpisode(false);
      GetDataFromApiEpisode({
        page: currentSiteEpisode,
        name: valueNameEpisode,
        episode: valueTypeEpisode,
      })
        .then(({ episodeArray, totalPages }) => {
          setApiDataEpisode(episodeArray);
          setPagesEpisode(totalPages);
          console.log(episodeArray);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [
    currentSiteEpisode,
    valueNameEpisode,
    valueTypeEpisode,
    searchAPIEpisode,
  ]);

  return (
    <>
      <Header />
      <EpisodeFilter
        valueNameEpisode={valueNameEpisode}
        onChangeEpisode={(e) => {
          setValueNameEpisode(e.currentTarget.value);
          setCurrentSiteEpisode(1);
        }}
        valueTypeEpisode={valueTypeEpisode}
        onChangeTypeEpisode={(e) => {
          setValueTypeEpisode(e.currentTarget.value);
          setCurrentSiteEpisode(1);
        }}
        onSubmitSearchEpisode={(evt) => {
          setSearchAPIEpisode(true);
          evt.preventDefault();
        }}
        onClickResetEpisode={() => {
          setCurrentSiteEpisode(1);
          setValueNameEpisode("");
          setValueTypeEpisode("");
          setSearchAPIEpisode(true);
        }}
      />
      {!error ? (
        <Pagination
          currentSite={currentSiteEpisode}
          pages={pagesEpisode}
          onClickPrevious={() => {
            if (currentSiteEpisode >= 2) {
              setCurrentSiteEpisode(currentSiteEpisode - 1);
              setSearchAPIEpisode(true);
            }
          }}
          onClickAfter={() => {
            if (currentSiteEpisode < pagesEpisode) {
              setCurrentSiteEpisode(currentSiteEpisode + 1);
              setSearchAPIEpisode(true);
            }
          }}
        />
      ) : null}
      <EpisodeList
        apiDataEpisode={apiDataEpisode}
        error={error}
        valueNameEpisode={valueNameEpisode}
        valueTypeEpisode={valueTypeEpisode}
      />
    </>
  );
}

export { PrincipalEpisode };

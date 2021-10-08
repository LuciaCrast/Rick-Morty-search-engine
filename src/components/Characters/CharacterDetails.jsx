import { useParams } from "react-router-dom";
// import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { CharacterCard } from "./CharacterCard";
import { GetDataDetailsCharacter } from "../../service/GetDataFromApi";
import "./characterdetails.scss";
import { ArrowBackPrincipalCharacter } from "./ArrowBackPrincipalCharacter";

function CharacterDetail() {
  const [characterDetail, setCharacterDetail] = useState();
  const [fail, setFail] = useState(false);
  let { id } = useParams();

  // let history = useHistory();
  // const goToPreviousPath = () => {
  //   history.goBack();
  // };

  useEffect(() => {
    setFail(false);
    GetDataDetailsCharacter(id)
      .then((character) => {
        setCharacterDetail(character);
      })
      .catch(() => {
        setFail(true);
      });
  }, [id]);

  if (characterDetail) {
    return (
      <>
        <ArrowBackPrincipalCharacter />
        <div className="details">
          <CharacterCard card={characterDetail} />
          <p className="list__text">Episodios: {characterDetail.episode}</p>
          <p className="list__text">{characterDetail.origin}</p>
        </div>
      </>
    );
  } else if (fail) {
    return (
      <>
        <ArrowBackPrincipalCharacter />
        <p>Personaje no encontrado</p>
      </>
    );
  } else {
    return <p> Cargando... </p>;
  }
}
export { CharacterDetail };

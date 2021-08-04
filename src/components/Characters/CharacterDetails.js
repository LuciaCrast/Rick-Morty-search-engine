import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import { GetDataDetailsCharacter } from "../../service/GetDataFromApi";

function CharacterDetail() {
  const [characterDetail, setCharacterDetail] = useState();
  const [fail, setFail] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setFail(false);
    GetDataDetailsCharacter(id)
      .then((character) => {
        setCharacterDetail(character);
      })
      .catch((fail) => {
        setFail(true);
      });
  }, [id]);

  if (characterDetail) {
    return (
      <div className="bodyDetails">
        <p className="arrowContainer">
          <Link to="/">
            <i className="far fa-arrow-alt-circle-left arrowLink">Volver</i>
          </Link>
        </p>
        <div className="details">
          <CharacterCard card={characterDetail} />
          <p className="text">Episodios: {characterDetail.episode}</p>
          <p className="text">{characterDetail.origin}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bodyDetails">
        <Link to="/">
          <i className="far fa-arrow-alt-circle-left"></i> Volver
        </Link>
        <p>Personaje no encontrado</p>
      </div>
    );
  }
}
export { CharacterDetail };

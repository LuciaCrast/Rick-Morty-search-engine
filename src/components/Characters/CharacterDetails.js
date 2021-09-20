import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import { GetDataDetailsCharacter } from "../../service/GetDataFromApi";

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
      .catch((fail) => {
        setFail(true);
      });
  }, [id]);

  if (characterDetail) {
    return (
      <div className="bodyDetails">
        <p className="arrowContainer">
          <Link to="/principalcharacter">
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
  } else if (fail) {
    return (
      <div className="bodyDetails">
        <Link to="/principalcharacter">
          <i className="far fa-arrow-alt-circle-left"></i> Volver
        </Link>
        <p>Personaje no encontrado</p>
      </div>
    );
  } else {
    return <p>Loquesea</p>;
  }
}
export { CharacterDetail };

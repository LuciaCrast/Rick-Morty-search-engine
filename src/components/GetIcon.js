const GetIcon = (props) => {
  if (props.species === "Human") {
    return <i className="far fa-user" title="Humano"></i>;
  } else if (props.species === "Alien") {
    return <i className="fab fa-reddit-alien" title={props.species}></i>;
  } else {
    return <i className="fas fa-question" title={props.species}></i>;
  }
};

const GetIconDead = (props) => {
  if (props.status === "Dead") {
    return <i className="far fa-dizzy" title="Muerto"></i>;
  } else if (props.status === "Alive") {
    return (
      <i className="fab fa-creative-commons-sampling-plus" title="Vivo"></i>
    );
  } else {
    return <i className="fas fa-question" title="Desconocido"></i>;
  }
};

export { GetIcon, GetIconDead };

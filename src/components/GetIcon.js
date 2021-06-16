const GetIcon = (props) => {
  if (props.species === "Human") {
    return <i className="far fa-user" title="Human"></i>;
  } else {
    return <i className="fab fa-reddit-alien" title={props.species.name}></i>;
  }
};

export { GetIcon };

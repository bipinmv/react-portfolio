const IconCard = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center m-2 icon-card">
      <img className="img-fluid skills-img" src={props.src} alt={props.label} title={props.label} loading="lazy" />
    </div>
  );
}

export default IconCard;

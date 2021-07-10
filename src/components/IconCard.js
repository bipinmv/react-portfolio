import React from "react";

const IconCard = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center m-2 iconCard">
      <img className="img-fluid skillsImg" src={props.src} alt={props.label} title={props.label} loading="lazy" />
    </div>
  );
}

export default IconCard;

import React from "react";
import CustomNav from "./NavBar";

const FourOhFour = () => {
  return (
    <>
      <CustomNav />
      <div className="d-flex justify-content-center align-items-center vh-100 font-weight-bold">
        <h1>Page Not Found...!</h1>
      </div>
    </>
  )
};

export default FourOhFour;

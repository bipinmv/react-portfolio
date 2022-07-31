import CustomNav from "./NavBar";

const PageNotFound = () => {
  return (
    <>
      <CustomNav />
      <div className="page-not-found">
        <img src="https://i.ibb.co/RSQNNYn/oops.jpg" alt="" />
        <h2>Page Not Found...!</h2>
      </div>
    </>
  )
};

export default PageNotFound;

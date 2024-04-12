import "./notfound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="container mx-auto text-center">
      <div className="grid grid-cols-1 my-20">
        <div className="text-center">
          <h1>
            <span className="title">Woooops.</span>
          </h1>
        </div>

        <div className="text-center mb-5 px-2 p-10">
          <p className="bodyText">
            <span>
              You've taken a wrong turn somewhere. Let's get you back on track.
            </span>
          </p>
        </div>
        <div>
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

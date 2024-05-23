import MotionWrapper from "../../Components/common/MotionWrapper";
import PageTitle from "../../Components/common/PageTitle";
import "./notfound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <MotionWrapper>
      <PageTitle title="Woooops" notfound={true} />
      <div className="text-center">
        <Link to="/" className="btn-primary">
          Home
        </Link>
      </div>
      ;
    </MotionWrapper>
  );
};

export default NotFound;

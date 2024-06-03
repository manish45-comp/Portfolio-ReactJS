import DynamicIsland from "../../Components/common/DynamicIsland";
import MotionWrapper from "../../Components/common/MotionWrapper";
import PageTitle from "../../Components/common/PageTitle";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <MotionWrapper>
      <DynamicIsland />
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

import { Card } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/helper";
import { Link } from "react-router-dom";

function ProjectsCard({ project }) {
  const { title, imgLink } = project;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <motion.div
      whileHover={{}}
      className="project_card overflow-hidden rounded-2xl relative"
    >
      <Card
        sx={{
          background: "none",
          maxWidth: { sm: "auto", md: 455 },
          boxShadow: "none",
          aspectRatio: "4/3",
        }}
      >
        <div className="image_container relative">
          <img className="rounded-md" src={imgLink} alt={title} />
          <div className="bodyText flex items-end justify-between project_details absolute z-50 w-full h-full top-0 left-0 px-5 pb-3">
            <p>{title}</p>
            <Link
              to={"#"}
              className="bg-white rounded-full p-1 flex justify-center items-center"
            >
              <ArrowOutwardIcon className="text-slate-900" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
ProjectsCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectsCard;

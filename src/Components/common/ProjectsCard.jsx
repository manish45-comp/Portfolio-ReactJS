import { Card } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/helper";
function ProjectsCard({ project }) {
  const { name, imgLink } = project;

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
        }}
      >
        <img
          className="rounded-md hover:scale-110 transition-all ease-in"
          src={imgLink}
          alt={name}
        />
      </Card>
    </motion.div>
  );
}
ProjectsCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectsCard;

import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Box, Container } from "@mui/material";

const MotionWrapper = ({ children }) => {
  return (
    <main className="wrapper mb-20">
      <motion.section
        className="mx-auto"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
      >
        <Container maxWidth="xl">
          <Box>{children}</Box>
        </Container>
      </motion.section>
    </main>
  );
};

MotionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MotionWrapper;

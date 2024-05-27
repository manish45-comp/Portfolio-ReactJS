import PropTypes from "prop-types";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

const CardComponent = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const { id, text, title, imgLink, colWidth, order } = item;
        return (
          <motion.div
            whileHover={{ y: -10 }}
            key={index}
            className={`mt-10 px-5 col-span-1 col-span-${colWidth} order-${order}}`}
          >
            <Link to="#">
              <Card
                sx={{
                  overflow: "revert",
                  borderRadius: { xs: 5, md: 10 },
                  height: "100%",
                }}
                className={`card color${id} mb-5 hover:shadow-lg`}
              >
                <CardContent className="m-0 px-3 p-2 text-end">
                  <Button
                    sx={{ color: "#000", boxShadow: "none" }}
                    disableRipple
                    size="small"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    {text}
                  </Button>
                  <Typography className="text-end px-3">
                    <span className="card-title subtitle">{title}</span>
                  </Typography>
                </CardContent>

                <div className="flex items-center justify-center">
                  <img
                    className="card-image rounded-xl md:h-96"
                    src={imgLink}
                    alt={title}
                  />
                </div>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

CardComponent.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CardComponent;

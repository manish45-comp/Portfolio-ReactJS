import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardComponent = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const { id, text, title, link, imgLink, colWidth, order } = item;
        return (
          <div
            key={index}
            className={`mt-10 px-5 col-span-1 col-span-${colWidth} order-${order}}`}
          >
            <Link to={link}>
              <Card
                className={`card color${id} mb-5 shadow-sm hover:shadow-lg`}
              >
                <CardBody className="m-0 px-3 p-2 text-end">
                  <Typography
                    variant="h5"
                    className="mb-2 pt-4 flex justify-end items-end"
                  >
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2 rounded-full"
                    >
                      {text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </Typography>
                  <Typography className="text-end px-3">
                    <span className="card-title subtitle">{title}</span>
                  </Typography>
                </CardBody>
                <CardFooter className="p-0 overflow-hidden">
                  <div className="flex items-center justify-center">
                    <img
                      className="card-image rounded-xl md:h-96"
                      src={imgLink}
                      alt={title}
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default CardComponent;

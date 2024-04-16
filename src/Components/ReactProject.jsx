import React from "react";
import { motion } from "framer-motion";
import { transition, Projects } from "../Data/Data";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ReactProject = () => {
  const data = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Basic",
      value: "Basic",
    },

    {
      label: "Intermediate",
      value: "Intermediate",
    },
    {
      label: "Advanced",
      value: "Advanced",
    },
  ];
  return (
    <>
      <main className="wrapper mb-20">
        <motion.section
          className="container mx-auto"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <div className="work-container grid grid-cols-1 my-20">
            <div className="text-center">
              <h1>
                <span className="title">ReactJS Projects.</span>
              </h1>
            </div>
          </div>
          <Tabs
            id="custom-animation"
            className="process p-5 rounded-lg"
            value="All"
          >
            <TabsHeader className="bg-transparent z-0">
              {data.map(({ label, value }) => (
                <Tab className="navText" key={value} value={value}>
                  <span className="relative z-30">{label}</span>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value }) => (
                <TabPanel
                  className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10"
                  key={value}
                  value={value}
                >
                  {Projects.filter(
                    (item) => item.value === value || value === "All"
                  ).map((item) => (
                    <Card
                      key={item.Title}
                      className="m-2 max-w-[20rem] project-card "
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded"
                      >
                        <img src={item.imgLink} alt="ui/ux review check" />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          className="bodyText"
                          variant="h5"
                          color="blue-gray"
                        >
                          {item.Title}
                        </Typography>
                        <Typography
                          variant="paragraph"
                          color="gray"
                          className="mt-3 font-normal"
                        >
                          {item.Description}
                        </Typography>
                      </CardBody>
                    </Card>
                  ))}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </motion.section>
      </main>
    </>
  );
};

export default ReactProject;

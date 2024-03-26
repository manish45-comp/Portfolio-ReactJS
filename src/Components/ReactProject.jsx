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
  CardFooter,
  Tooltip,
  Avatar,
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
                  className="flex justify-center mt-10"
                  key={value}
                  value={value}
                >
                  {Projects.filter(
                    (item) => item.value === value || value === "All"
                  ).map((item) => (
                    <Card
                      key={item.Title}
                      className="m-2 max-w-[24rem] project-card"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                          alt="ui/ux review check"
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography variant="h5" color="blue-gray">
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
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center -space-x-3">
                          <Tooltip content="Manish Bagal">
                            <Avatar
                              size="sm"
                              variant="circular"
                              alt="natali craig"
                              src="../../src/images/Untitled-1.png"
                              className="border-2 border-white hover:z-10"
                            />
                          </Tooltip>
                        </div>
                        <Typography className="font-normal">
                          January 10
                        </Typography>
                      </CardFooter>
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

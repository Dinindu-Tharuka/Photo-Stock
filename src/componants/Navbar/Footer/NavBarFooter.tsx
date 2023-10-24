import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

const NavBarFooter = () => {
  return (
      <Tabs width='100%'>
        <TabList>
          <Tab>Main</Tab>
          <Tab>Admin</Tab>
          <Tab>Photo Grapher</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
   
  );
};

export default NavBarFooter;

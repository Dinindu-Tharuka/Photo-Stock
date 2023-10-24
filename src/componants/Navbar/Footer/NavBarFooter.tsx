import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import MainIamge from "../../MainImage/MainIamge";

const NavBarFooter = () => {
  return (
      <Tabs width='100%' >
        <TabList>
          <Tab>Main</Tab>
          <Tab>Admin</Tab>
          <Tab>Photo Grapher</Tab>
        </TabList>

        <TabPanels>
          <TabPanel padding={0}>
            <MainIamge/>
          </TabPanel>
          
        </TabPanels>
      </Tabs>
   
  );
};

export default NavBarFooter;

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MainPage from "../../../pages/Main/MainPage";
import AdminPage from "../../../pages/Main/AdminPage";
import PhotoGrapherPage from "../../../pages/Main/PhotoGrapherPage";

const NavBarFooter = () => {
  return (
    <Tabs width="100%">
      <TabList>
        <Tab as="button">Main</Tab>
        <Tab as="button">Admin</Tab>
        <Tab as="button">Photo Grapher</Tab>
      </TabList>

      <TabPanels>
        <TabPanel padding={0}>
          <MainPage />
        </TabPanel>
        <TabPanel padding={0}>
          <AdminPage />
        </TabPanel>
        <TabPanel padding={0}>
          <PhotoGrapherPage />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavBarFooter;

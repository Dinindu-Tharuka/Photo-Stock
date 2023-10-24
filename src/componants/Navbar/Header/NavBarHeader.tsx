import { HStack, Image, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import logo from '../../../images/logo.png'
import { BsSearch } from 'react-icons/bs'
import DarkModeSwitch from "../../DarkModeSwitch/DarkModeSwitch";

const NavBarHeader = () => {
  return (
    <HStack justifyContent='space-between' width='100%' spacing={5} padding={5}>
      <Image src={logo} boxSize='32px'/>
      <InputGroup>
        <InputLeftAddon children={<BsSearch/>} />
        <Input  placeholder="Search Images..." />
      </InputGroup>
      <DarkModeSwitch/>
    </HStack>
  );
};

export default NavBarHeader;

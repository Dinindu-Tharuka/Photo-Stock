import { useColorMode, IconButton } from "@chakra-ui/react";
import { MdNightlight } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label=""
      icon={colorMode === "dark" ? <MdNightlight /> : <BsFillSunFill />}
    />
  );
};

export default DarkModeSwitch;

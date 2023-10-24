import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorModeValue
} from "@chakra-ui/react";
import mainImage from "../../images/pineapple.jpg";

const MainIamge = () => {
  return (
    <Flex height="90vh">
      <Image src={mainImage} width={"100vw"} objectFit='cover'/>

      <InputGroup
        zIndex={10}
        position="absolute"
        alignSelf="center"
        left={"35vw"}
        width="30vw"
        bg={useColorModeValue('whiteAlpha.500', 'black')}
        padding={5}
        borderRadius={20}
      >
        <InputLeftAddon
          children="Search Images"
          height="70px"
          fontWeight='bold'
          fontSize={15}
        />
        <Input
          type="tel"
          height="70px"
          width="30vw"
          fontWeight='bold'
          borderRadius={20}
        />
      </InputGroup>
    </Flex>
  );
};

export default MainIamge;

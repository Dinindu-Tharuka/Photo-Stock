import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Photo } from "../../pages/Main/MainPage";

interface Props {
  photo: Photo;
}

const ImageCartItem = ({ photo }: Props) => (
  <Card
    direction={{ base: "column", sm: "row" }}
    overflow="hidden"
    variant="outline"
  >
    <HStack>
      <CardBody>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={photo.url}
        />
      </CardBody>

      <CardFooter width="100%">
        <VStack alignItems="space-between" width="100%">
          <Heading size="md">Album Name</Heading>
          <Heading size="md">{photo.title.slice(0, 10)}</Heading>
          <Heading size="md">10$</Heading>
          <Button variant="solid" colorScheme="blue">
            Buy
          </Button>
        </VStack>
      </CardFooter>
    </HStack>
  </Card>
);

export default ImageCartItem;

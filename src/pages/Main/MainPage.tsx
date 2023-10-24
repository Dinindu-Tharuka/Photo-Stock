import axios from "axios";
import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ImageCartItem from "../../componants/MainPage/ImageCartItem";
import data from "../../data-test/data";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const MainPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    setPhotos(data)
  }, []);

  console.log(photos)

  return (
    <>
      <SimpleGrid columns={3} spacing={5} paddingX={10}>
        {photos.map((photo) => (
          <ImageCartItem photo={photo} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainPage;

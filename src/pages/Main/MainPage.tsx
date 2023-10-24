import axios from "axios";
import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ImageCartItem from "../../componants/MainPage/ImageCartItem";
import data from "../../test/data";

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
    // axios
    //   .get("https://jsonplaceholder.typicode.com/albums/1/photos")
    //   .then((res) => setPhotos(res.data))
    //   .catch((err) => console.log(err.message));

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

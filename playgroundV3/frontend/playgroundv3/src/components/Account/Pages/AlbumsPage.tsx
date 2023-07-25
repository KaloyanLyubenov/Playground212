import React, { useEffect, useState } from "react";
import ImageGetTry from "../../ImageGetTry";

interface Image {
  albumName: string;
  name: string;
}

interface Album {
  title: string;
  urls: string[];
}

interface AlbumPreview {
  title: string;
  thumbnailName: string;
}

interface AlbumPageProps {
  albums: Album[];
}

const AlbumsPage: React.FC<AlbumPageProps> = ({ albums }) => {
  const [albumPreviews, setAlbumPreviews] = useState<AlbumPreview[]>();
  const [allImagesNames, setAllImageNames] = useState<string[]>([]);

  useEffect(() => {
    console.log(albums);
    const imageListState: string[] = allImagesNames as string[];
    albums.map((album) => {
      album.urls.map((imageName) => {
        imageListState.push(imageName);
      });
    });
    setAllImageNames(imageListState);
  }, []);

  return (
    <>
      <ImageGetTry imageNames={allImagesNames} />
    </>
  );
};

export default AlbumsPage;

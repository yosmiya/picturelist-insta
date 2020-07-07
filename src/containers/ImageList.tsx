import React, { FC } from 'react';
import { ImageList } from 'components/ImageList';
// import { ImageData } from 'containers/data/ImageData';
import useImages from 'hooks/use-images';
// import useImageData from 'hooks/use-imagedata';

const handleClickInfo = (postId: number) => {
  // console.log(postId);
  return postId;
};

// export const ImageListContainer = () => {
const ImageListContainer: FC = () => {
  const { images } = useImages();
  // useImageData();

  return <ImageList images={images} onClickInfo={handleClickInfo} />;
};

export default ImageListContainer;

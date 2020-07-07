import React, { FC } from 'react';
import { ImageDetailContent } from 'components/ImageDetailContent';

type Props = {
  postId: number;
};

const ImageDetailContentContainer: FC<Props> = ({ postId }) => {
  return <ImageDetailContent postId={postId} />;
};

export default ImageDetailContentContainer;

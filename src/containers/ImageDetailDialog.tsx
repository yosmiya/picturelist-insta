import React, { FC } from 'react';
import { ImageDetailDialog } from 'components/ImageDetailDialog';

type Props = {
  open: boolean;
  onClose: () => void;
  postId: number;
};

const ImageDetailDialogContainer: FC<Props> = ({ open, onClose, postId }) => {
  return <ImageDetailDialog open={open} onClose={onClose} postId={postId} />;
};

export default ImageDetailDialogContainer;

import React, { FC } from 'react';
import { Dialog } from '@material-ui/core';
import ImageDetailContent from 'containers/ImageDetailContent';

type Props = {
  open: boolean;
  onClose: () => void;
  postId: number;
};

export const ImageDetailDialog: FC<Props> = ({ open, onClose, postId }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <ImageDetailContent postId={postId} />
      </Dialog>
    </>
  );
};

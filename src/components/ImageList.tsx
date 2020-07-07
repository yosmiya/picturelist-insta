import React, { FC, useCallback, useState } from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ImageDetailDialogContainer from 'containers/ImageDetailDialog';
import MenuBar from 'components/common/menubar/MenuBar';
import { Image } from 'services/models/image';

const styleRoot = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
  backgroundColor: 'white',
});

const styleGridList = css({
  width: 1000,
  height: 550,
  cursor: 'pointer',
});

type User = { id: number; name: string; avatar: string };

type Props = {
  images: Image[];
  onClickInfo: (postId: number) => void;
};

// export const ImageList = ({ images, onClickDetail }: Props) => {
// export const ImageList: FC<Props> = ({ images, onClickInfo }) => {
export const ImageList: FC<Props> = ({ images }) => {
  const [BarVisible, setBarVisible] = useState(0);
  const [PostId, setPostId] = useState(0);
  // const [imageUrl, setImageUrl] = useState('');
  const [ImageDetailDialogVisible, setImageDetailDialogVisible] = useState(
    false,
  );
  const handleClickInfo = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      /* onClickInfo(Number(e.currentTarget.dataset.id));*/
      setPostId(Number(e.currentTarget.dataset.id));
      setImageDetailDialogVisible(true);
    },
    [],
  );
  const handleCloseImageDetailDialog = useCallback(
    () => setImageDetailDialogVisible(false),
    [],
  );

  const handleOnMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      setBarVisible(Number(e.currentTarget.dataset.id));
    },
    [],
  );

  const handleOnMouseLeave = useCallback(() => {
    setBarVisible(0);
  }, []);

  return (
    <div css={styleRoot}>
      <MenuBar />
      <GridList cellHeight={200} css={styleGridList} cols={3}>
        {images.map(image => (
          <GridListTile
            key={image.id}
            cols={image.cols || 1}
            data-id={image.id}
            onClick={handleClickInfo}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <img
              src={`http://localhost:3001/images/${image.url}`}
              alt={image.title}
            />
            {BarVisible === image.id && (
              <GridListTileBar
                title={image.title}
                subtitle={<span>by: {image.user.name}</span>}
              />
            )}
          </GridListTile>
        ))}
      </GridList>
      <ImageDetailDialogContainer
        open={ImageDetailDialogVisible}
        onClose={handleCloseImageDetailDialog}
        postId={PostId}
      />
    </div>
  );
};

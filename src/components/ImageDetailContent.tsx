import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ImageData } from 'containers/data/ImageData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

type Props = {
  postId: number;
};

export const ImageDetailContent: FC<Props> = ({ postId }) => {
  const classes = useStyles();
  const image = ImageData.find(data => {
    return data.id === postId;
  });

  return image ? (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {image.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={image.title}
        subheader={image.user.name}
      />
      <CardMedia
        className={classes.media}
        image={image.url}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {image.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="お気に入りに登録する">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  ) : (
    <span>データがありません。</span>
  );
};

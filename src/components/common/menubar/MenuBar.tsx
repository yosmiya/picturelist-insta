import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from '@material-ui/core';
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Upload } from 'components/Upload/Upload';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
      },
    },
  }),
);

export default function MenuBar() {
  const classes = useStyles();

  const [UploadVisible, setUploadVisible] = React.useState(false);

  const handleClickUpload = React.useCallback(() => {
    setUploadVisible(true);
  }, []);

  const handleCloseUploadDialog = React.useCallback(
    () => setUploadVisible(false),
    [],
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h6" noWrap>
            画像一覧
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="画像を検索"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            className={classes.menuButton}
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={handleClickUpload}
          >
            <CloudUploadIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Upload open={UploadVisible} onClose={handleCloseUploadDialog} />
    </div>
  );
}

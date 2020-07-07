import React, { FC, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

type Props = {
  open: boolean;
  onClose: () => void;
  // onChangeImage: (object: { targetImage: File | null }) => void;
};

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: 'none',
  },
  filename: {
    marginLeft: theme.spacing(1),
  },
}));

export const Upload: FC<Props> = ({ open, onClose }) => {
  const classes = useStyles();
  const [uploadFile, setUploadFile] = useState({ fileName: '' });
  const [title, setTitle] = useState<string>('');
  const [caption, setCaption] = useState<string>('');
  const [upFile, setUpFile] = useState<File | null>();

  const handleOnChangeTitle = (e: { target: { value: string } }) => {
    setTitle(e.target.value);
  };

  const handleOnChangeCaption = (e: { target: { value: string } }) => {
    setCaption(e.target.value);
  };

  const handleOnChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target.files !== null ? e.target.files[0] : null;

    if (e.target.files !== null) {
      setUpFile(e.target.files[0]);
      setUploadFile({ fileName: e.target.files[0].name });
    }
  };

  const handleOnSubmit = () => {
    // e.target.files !== null ? e.target.files[0] : null;

    if (upFile !== null && upFile !== undefined) {
      // Accessed .name from file
      setUploadFile({ fileName: upFile.name });

      const load = async () => {
        try {
          const formData = new FormData();
          formData.append('image', upFile);
          axios.post('http://localhost:3001/api/photo/uploadtest', formData);

          const url = uploadFile.fileName;
          const data = {
            url,
            title,
            caption,
          };

          // axios でポスト
          await axios.post('http://localhost:3001/api/photo/upload', data);
        } catch (err) {
          // console.log(err);
        }
      };

      load();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogContent>
        <div className={classes.paper}>
          <Typography component="h2" variant="h6">
            ファイルアップロード
          </Typography>
          <form className={classes.form} noValidate>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              type="file"
              onChange={handleOnChangeFile}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="default" component="span">
                ファイルを選択
              </Button>
            </label>
            <Typography variant="caption" className={classes.filename}>
              {uploadFile.fileName}
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="タイトル"
              name="title"
              inputProps={{
                maxLength: 20,
              }}
              onChange={handleOnChangeTitle}
            />
            {title}
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              id="caption"
              label="写真の説明"
              name="caption"
              inputProps={{
                maxLength: 200,
              }}
              onChange={handleOnChangeCaption}
            />

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleOnSubmit}
            >
              アップロード
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

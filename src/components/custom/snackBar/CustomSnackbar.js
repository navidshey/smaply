import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { SnackbarContext  } from '../../../context/SnackbakContext';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

export default function CustomSnackBar() {
  const classes = useStyles();
  const { snackbar, setSnackbar } = useContext(SnackbarContext);

  const handleClose = () => {
    setSnackbar('');
  };

  const { message } = snackbar;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!message}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message ? <span>{message}</span> : null}
        action={[
          <IconButton
            key="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}

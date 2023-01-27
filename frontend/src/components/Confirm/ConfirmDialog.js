import React from 'react';
import { createPortal } from 'react-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ConfirmDialog(props) {
  const title = props.title ? props.title : 'Modal heading';
  const body = props.body ? props.body : '';
  console.log(props);
  return createPortal(
    <Dialog
      open={props.open}
      onClose={props.onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel}>Disagree</Button>
        <Button onClick={props.onConfirm} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>,
    document.body,
  );
}

export default ConfirmDialog;

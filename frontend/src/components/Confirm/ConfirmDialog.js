import React from 'react';
import { createPortal } from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmDialog(props) {
  const title = props.title ? props.title : 'Modal heading';
  const body = props.body ? props.body : '';
  console.log(props);
  return createPortal(
    <Modal show={props.open} onHide={props.onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {body && <Modal.Body>{body}</Modal.Body>}
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onConfirm}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>,
    document.body,
  );
}

export default ConfirmDialog;

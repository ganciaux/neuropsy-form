import React, { useRef, useState } from 'react';
import ConfirmDialog from './ConfirmDialog';

const confirmAction = {
  current: () => Promise.resolve(true),
};

export function confirm(props) {
  return confirmAction.current(props);
}

function ConfirmGlobal() {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState({});
  const resolveRef = useRef(() => {});

  confirmAction.current = (props) =>
    new Promise((resolve) => {
      setProps(props);
      setOpen(true);
      resolveRef.current = resolve;
    });

  const onConfirm = () => {
    console.log('onConfirm');
    resolveRef.current(true);
    setOpen(false);
  };

  const onCancel = () => {
    console.log('onCancel');
    resolveRef.current(false);
    setOpen(false);
  };

  return (
    <ConfirmDialog
      onConfirm={onConfirm}
      onCancel={onCancel}
      open={open}
      {...props}
    >
      ...
    </ConfirmDialog>
  );
}

export default ConfirmGlobal;

import React from 'react';
import Button from '@mui/material/Button';
import { confirm } from '../../components/Confirm/ConfirmGlobal';

const modal = async () => {
  if (await confirm({ title: 'Title', body: 'Body' })) {
    console.log('confirm OK');
  }
};

function Confirm() {
  return (
    <Button variant="primary" onClick={() => modal()}>
      modal
    </Button>
  );
}

export default Confirm;

/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React, useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';

const DeckModal = ({ open, setOpen, setClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle>Haiya</DialogTitle>
        <div>Hello</div>
      </Dialog>
    </div>
  );
};

export default DeckModal;

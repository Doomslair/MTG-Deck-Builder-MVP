/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from '@mui/material';

const DeckModal = ({ open, setOpen, setClose }) => {
  const handleAdd = () => {};
  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle>Add New Deck</DialogTitle>
        <DialogContent>
          <Button onClick={handleAdd}>Add</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeckModal;

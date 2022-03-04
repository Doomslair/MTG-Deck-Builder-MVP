/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React, useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Input,
} from '@mui/material';
import axios from 'axios';

const DeckModal = ({ open, setOpen, setClose }) => {
  const [deck, setDeck] = useState({
    user: null, name: null, description: null, image: null,
  });
  const handleAdd = (e) => {
    axios.post('/deck', {
      user: 'Jeff', name: deck.name, description: deck.description, image: deck.image,
    })
      .then(() => console.log('completed'))
      .catch((err) => console.log(err));
  };
  const handleTitleChange = () => {

  };
  const handleDescriptionChange = () => {

  };
  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle>Add New Deck</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Input placeholder="Add title here" onChange={handleTitleChange} />
          </DialogContentText>
          <DialogContentText>
            <Input placeholder="Add description here" onChange={handleDescriptionChange} />
          </DialogContentText>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handleAdd}>Add</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeckModal;

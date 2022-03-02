/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DeckModal from './DeckModal';

const AddDeck = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <DeckModal open={open} setOpen={setOpen} setClose={handleClose} />
      <div onClick={handleModalOpen} className="viewport" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faPlus} />
        <p>Add a Deck</p>
      </div>
    </div>
  );
};

export default AddDeck;

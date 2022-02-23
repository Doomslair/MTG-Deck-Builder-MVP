/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddDeck = ({ deck }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="viewport" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faPlus} />
        <p>Add a Deck</p>
      </div>
    </div>
  );
};

export default AddDeck;

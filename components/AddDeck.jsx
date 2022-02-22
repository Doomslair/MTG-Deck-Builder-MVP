/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddDeck = ({ deck }) => {
  return (
    <div>
      <div className="viewport">
        <FontAwesomeIcon icon={faPlus} style={{ maxWidth: '100%'}} />
        <p>Add a Deck</p>
      </div>
    </div>
  );
};

export default AddDeck;

/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Deck = ({ deck }) => {
  return (
    <div>
      <div className="viewport">
        <img src={deck.image.src} alt="Deck of many Things" style={{ maxHeight: '100%', maxWidth: '100%' }} />
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
      </div>
    </div>
  );
};

export default Deck;

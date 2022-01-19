/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Deck = ({ deck }) => {
  return (
    <div>
      <div>{deck.name}</div>
      <div>{deck.description}</div>
    </div>
  );
};

export default Deck;

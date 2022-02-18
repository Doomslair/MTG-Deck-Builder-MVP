/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Deck = ({ deck }) => {
  return (
    <div>
      <div className="viewport" style={{ maxHeight: 500, 'margin-left': '20%', 'margin-right': '20%', overflow: 'auto', backgroundColor: 'white', padding: '10px 10px 10px 10px', borderRadius: 2, boxShadow: '0px 0px 0px rgb(0 0 0 / 16%), 2px 2px 3px rgb(0 0 0 / 23%)', textAlign: 'center' }}>
        <h4>{deck.name}</h4>
        <img src={deck.image.src} alt="Deck of many Things" style={{ maxHeight: '100%', maxWidth: '100%' }} />
        <p>{deck.description}</p>
      </div>
    </div>
  );
};

export default Deck;

import React from 'react';

const DeckModal = () => {
  return (
    <div style={{ maxHeigth: '100%' }}>
      <div className="viewport">
        <img src={deck.image.src} alt="Deck of many Things" style={{ maxHeight: '100%', maxWidth: '100%' }} />
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
      </div>
    </div>
  );
};

export default DeckModal;
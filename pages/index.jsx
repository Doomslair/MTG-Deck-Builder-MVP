/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Deck from '../components/Deck';
import img from '../img/MTG CARD 1.png';

const HomePage = () => {
  const deckArr = [{ name: 'a deck', description: 'a description', image: img }, { name: 'a deck', description: 'a description', image: img }, { name: 'a deck', description: 'a description', image: img }];
  return (
    <div>
      <div>
        <Link href="/test">
          <Button>Go To Testing Suite</Button>
        </Link>
      </div>
      <div>
        <Grid container spaceing={8} justifyContent="space-between">
          {deckArr.map((deck) => {
            return (
              <Grid item xs>
                <Deck deck={deck} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;

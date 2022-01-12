/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <div>
        <Link href="/test">
          <Button>Go To Testing Suite</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

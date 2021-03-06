/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const TestingSuite = () => {
  const array = ['one', 'two', 'three'];
  return (
    <div>
      <ButtonGroup variant="text" aria-label="text button group">
        {array.map((text) => {
          return (<Button>{text}</Button>);
        })}
      </ButtonGroup>
    </div>
  );
};

export default TestingSuite;

// DisplayComponent.js
import React from 'react';
import { useInput } from './InputContext';

const DisplayComponent = () => {
  const { inputValue,num } = useInput();

  return (
    <div>
      <p>{inputValue}</p>
      <p>{num}</p>

    </div>
  );
};

export default DisplayComponent;

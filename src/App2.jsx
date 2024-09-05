// App.js
import React from 'react';
import { InputProvider } from './InputContext';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

const App2 = () => {
  console.log("App2.jsx Rerendered");
  return (
    <InputProvider>
        <h1>Context API Example</h1>
        <InputComponent />
        <DisplayComponent />
    </InputProvider>
  );
};

export default App2;

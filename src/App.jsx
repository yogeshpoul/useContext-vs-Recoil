// App.js
import React from 'react';
import TextInput from './TextInput';
import DisplayText from './DisplayText';
import { RecoilRoot } from 'recoil';

function App() {
  console.log("App.jsx Rerendered");
  return (
    <RecoilRoot>
      <h1>Recoil Example</h1>
        <TextInput />
        <DisplayText />
      </RecoilRoot>
  );
}

export default App;

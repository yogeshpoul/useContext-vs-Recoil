// DisplayText.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { numState, textState } from './state';

function DisplayText() {
  const text = useRecoilValue(textState);
  const num = useRecoilValue(numState);

  return (
    <div>
      <p>{text}</p>
      <p>{num}</p>
    </div>
  );
}

export default DisplayText;

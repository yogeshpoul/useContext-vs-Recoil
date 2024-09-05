// TextInput.js
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { numState, textState } from './state';

function TextInput() {
  const setText = useSetRecoilState(textState);
  const [num,setNum]=useRecoilState(numState);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={()=>{setNum(num+1)}}>{num}</button>
    </div>
  );
}

export default TextInput;

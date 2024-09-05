import React from 'react';
import { useInput } from './InputContext';

const InputComponent = () => {
  const { inputValue, setInputValue, num, setNum } = useInput();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
      />
      <button onClick={()=>{setNum(num+1)}}>{num}</button>
    </div>
  );
};

export default InputComponent;

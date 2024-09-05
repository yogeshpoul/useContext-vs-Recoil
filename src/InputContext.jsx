// InputContext.js
import React, { createContext, useState, useContext } from 'react';

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [num,setNum]=useState(0);

  return (
    <InputContext.Provider value={{ inputValue, setInputValue,num,setNum }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInput = () => useContext(InputContext);

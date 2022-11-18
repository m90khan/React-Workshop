import React, { useState } from 'react';

const useCustomHook = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const add = () => setCount((val) => val + 1);
  const sub = () => setCount((val) => val - 1);

  return [count, add, sub];
};

export default useCustomHook;

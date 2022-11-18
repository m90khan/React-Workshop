import React, { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const value = window && window.localStorage.getItem(key);
    if (value) return value;

    return initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, String(state));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorage;

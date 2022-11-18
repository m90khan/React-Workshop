import React, { useEffect, useMemo, useRef, useState } from 'react';

const UseMemoHook = () => {
  const [state, setState] = useState(0);

  //1- useMemo hook => performance optimization => return a memomized value
  const value = useMemo(() => {
    // run only once
    console.log('I run once');
    return { count: 100 };
  }, []); // dependency can be added incase useMemo should recompute the value
  const value2 = 100;
  // one reason: object referencial value will remain the same here

  useEffect(() => {
    console.log('Did value changed', value);
  }, [value]);
  // anything can be memoized using usememo including UI
  return (
    <div style={{ width: '90%' }} className={'useref-class'}>
      <h1>UseMemo</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        {/* 1 */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => setState(Math.random())}
        >
          <h2>What is UseMemo? {value.count}</h2> <h2>{state}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseMemoHook;

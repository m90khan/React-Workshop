import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const UseCallbackHook = () => {
  const [state, setState] = useState(0);

  //1- useCallback hook => performance optimization => return the instance of the function as it is () => { return <h1>Hello world</h1>;} if state is not changed

  const value = useCallback(() => {
    return <h1>Hello world</h1>;
  }, []); // dependency can be added incase useCallback should recompute the function
  const value2 = useMemo(() => {
    return () => <h1>Hello world</h1>;
  }, []);
  /**
   * As objects are not equal due to reference same is the same of functions . in every render
   * useCallback return the same function over and over again
   */

  return (
    <div style={{ width: '90%' }} className={'useref-class'}>
      <h1>UseCallback</h1>
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
          <h2>What is UseCallback? {value()}</h2> <h2>{state}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseCallbackHook;

import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  //1- what is useEffect
  /**
   * function that render everytime
   */
  //how to inject into the lifecycle of state update
  // two parts=> function , dependency array

  // runs everytime when component updates
  useEffect(() => {
    console.log('I run everytime');
  });
  //2- dependency array | if empty then run only once
  useEffect(() => {
    console.log('I run once');
  }, []);
  //2- component mount, unmount, update
  // useEffect(() => {
  //   console.log('I run based on state in the dependency and first time', state);
  //   // dependency are compared using === sign so const obj = {hello: 10} : objects are never the same in js due to reference in memory
  // }, [state]);
  //   useEffect(() => {
  //     console.log('I run based on state in the dependency and first time', state2);
  //   }, [state2]);
  //   useEffect(() => {
  //     console.log('I run based on state2 in the dependency and first time', state2);
  //   }, [state2]);
  // useEffect(() => {
  //   setState2((val) => val + 1);
  //   console.log('I am a bad recursive useEffect ', state2);
  // }, [state2]);

  //3- useEffect cleanup
  /**
   * 1- UseEffect Cleanup = () => useEffect is called after mount
   * <state change update>
   * 2- UseEffectHook() => useEffect is called after re-render
   *
   * from 1 => 2 transition: cleanup must be done in case of event listeners or something that must be cleaned up
   * */
  useEffect(() => {
    console.log('I am running before cleanup useEffect ', state2);
    return () => {
      console.log('clean up effect of state 2');
    };
  }, [state2]);
  return (
    <div style={{ width: '90%' }}>
      <h1>UseEffect</h1>
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
          onClick={() => setState(2)}
        >
          <h2>What is useEffect?</h2> <h2>{state}</h2>
        </div>
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => setState2(Math.random())}
        >
          <h2>Component Update in useEffect?</h2> <h2>{state2}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseEffectHook;

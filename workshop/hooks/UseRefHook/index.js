import React, { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
  const [state, setState] = useState(0);
  const obj = useRef(100);
  // console.log('Ref Obj', obj);
  /**
   * Access to object which can be mutated
   */
  //1-what is useRef?
  //mutation of useRef current value wont trigger re-render
  useEffect(() => {
    console.log('I run');
  }, [obj.current]);
  useEffect(() => {
    obj.current += 5;
    console.log('I run with state effect', obj.current);
  }, [state]);
  //2-why using useRef instead of global variable. memory cleanup on component unmounted
  // const obj = useRef({json: 'some heavy stuff'});

  //3- Get access to dom elements
  const divRef = useRef();
  console.log(divRef);
  // ref could not null if state is involved

  //4- useState as useRef
  const renders = useRef(0);

  const _renders = useState({ current: 0 })[0]; // const [r, setR] = useState()  => getter, setter
  useEffect(() => {
    _renders.current += 1;
  });
  return (
    <div style={{ width: '90%' }} className={'useref-class'} ref={divRef}>
      <h1>UseRef</h1>
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
          //onClick={() => (obj.current = 1200)}
          onClick={() => setState(Math.random())}
        >
          <h2>What is UseRef?</h2> <h2>{obj.current}</h2>
        </div>
        {/* 3 */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          // onClick={() => (obj.current = 2)}
          onClick={() => setState(200)}
        >
          <h2>Selecting DOM elements?</h2> <h2>100</h2>
        </div>

        {/* 4 */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          // onClick={() => (obj.current = 2)}
          onClick={() => setState((val) => val + 1)}
        >
          <h2>UseState as useRef?</h2> <h2>{_renders.current + 1}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseRefHook;

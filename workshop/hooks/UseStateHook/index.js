import React, { useState } from 'react';

// lazy state
const lazyValue = () => {
  return 'lazy state';
};

const UseStateHook = () => {
  //1- what is useState
  // console.log(useState('hello'));
  const [state, setState] = useState(100);

  //2- lazy state initiation : expression that could be computationally expensive {"x": 123}
  /**
   * Everytime state change the function gets executed
   
   React.useState= (initialValue)=>{
      if(typeof initialValue == 'function') initialValue()
      initialValue
   }
   setState => re-renders the function given that state is changed
   Strict Mode => re-renders twice to check if render worked => next.config.js
   */

  // const [lazyState, setLazyState] = useState(lazyValue); // 1=> 1
  // const [lazyState, setLazyState] = useState(console.log('hello world'));
  // not a good idea to store a function as a state but it is possible
  //const [lazyState, setLazyState] = useState(()=>()=>console.log('hello world'));

  //3- updating state
  // updateState+ 1 ||             setUpdateState((value) => value + 1);
  // use function if previous state depends on the previous state
  //
  const [updateState, setUpdateState] = useState(0);

  return (
    <div style={{ width: '90%' }}>
      <h1>UseState</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        {/* 1 */}

        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
          <h2>What is useState?</h2> <h2>{state}</h2>
        </div>

        {/* 2 */}
        {/* <div
          onClick={() => {
            setLazyState(Math.random());
            //  setLazyState(200); // state does not change after a while so no re-render
          }}
          style={{
            display: 'flex',
            cursor: 'pointer',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <h2>Lazy State Initialization?</h2>
          <h2>{lazyState}</h2>
        </div> */}

        {/* 3 */}
        <div
          onClick={() => {
            setUpdateState((value) => value + 1);
            // state never gets updated
            // setUpdateState(updateState + 1); // internally compare if there is a state change and the value is not the current value of current function
            setTimeout(() => setUpdateState((val) => val + 1), 2000);
          }}
          style={{
            display: 'flex',
            cursor: 'pointer',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <h2>Update State</h2>
          <h2>{updateState}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseStateHook;

import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

// Define a function to initialize lazy state
const lazyValue = () => {
  return 'lazy state';
};

const UseStateHook = () => {
  /** 1- what is useState
   * Using useState to create a state variable 'state' initialized with 100
   * console.log(useState('hello'));
   */

  const [state, setState] = useState(100);
  console.log(useState('hello'));
  /** 2.lazy state initiation
 * expression that could be computationally expensive {"x": 123}
 * Example of lazy state initialization (not recommended to store functions)
 * You can pass an expression that could be computationally expensive as the initial value.
 * In this example, we use a function 'lazyValue' to initialize 'lazyState' state.
 * - Everytime state change the function gets executed
 *    React.useState= (initialValue)=>{
      if(typeof initialValue == 'function') initialValue()
      initialValue
   }
   setState => re-renders the function given that state is changed
   Strict Mode => re-renders twice to check if render worked => next.config.js
 */

  const [lazyState, setLazyState] = useState(lazyValue);
  // const [lazyState, setLazyState] = useState(lazyValue); // 1=> 1
  // const [lazyState, setLazyState] = useState(console.log('hello world'));
  // not a good idea to store a function as a state but it is possible
  //const [lazyState, setLazyState] = useState(()=>()=>console.log('hello world'));

  /**    3. Updating state
   *  Here, we create a state variable 'updateState' initialized with 0.
   *  We provide two ways to update it:
   * - Using a value: setUpdateState(updateState + 1)
   * - Using a function that receives the previous state: setUpdateState((value) => value + 1)
   *  In the example, we also demonstrate updating state with a delay using setTimeout.
   *  const [updateState, setUpdateState] = useState(0);
  
   */

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
        {/* 1. Display the 'state' state variable */}
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
          <h2>What is useState?</h2>
          <h2>{state}</h2>
        </div>
        {/* 2. Example of lazy state initialization (commented out) */}
        <div
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
          <Flex flexDir={'column'}>
            <h2>Lazy State Initialization?</h2>
            <button>Update Me</button>
          </Flex>
          <h2>{lazyState}</h2>
        </div>

        {/* 3. Updating 'updateState' state variable */}
        <div
          onClick={() => {
            // Update 'updateState' using a function to ensure the previous state is considered
            setUpdateState((value) => value + 1);

            // Example of updating 'updateState' with a delay
            setTimeout(() => setUpdateState((val) => val + 1), 2000);
          }}
          style={{
            display: 'flex',
            cursor: 'pointer',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Flex flexDir={'column'}>
            <h2>Update State </h2>
            <button>Update Me</button>
          </Flex>

          <h2>{updateState}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseStateHook;

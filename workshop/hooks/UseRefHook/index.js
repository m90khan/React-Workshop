import { Flex } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
  const [state, setState] = useState(0);
  const obj = useRef(100);
  // console.log('Ref Obj', obj);
  /** 1. What is useRef?
   * useRef provides access to a mutable object without causing re-renders.
   * Access to object which can be mutated
   */

  // Effect 1: Runs when obj.current changes
  useEffect(() => {
    console.log('Effect 1: I run when obj.current changes', obj.current);
  }, [obj.current]);

  // Effect 2: Modifies obj.current when state changes
  useEffect(() => {
    obj.current += 5;
    console.log('Effect 2: I run when state changes', obj.current);
  }, [state]);

  /** 2. Why use useRef instead of a global variable?
   *  useRef is preferred because it automatically cleans up when the component unmounts.
   * const obj = useRef({json: 'some heavy stuff'});
   */

  // 3. Getting access to DOM elements
  const divRef = useRef();

  console.log(divRef);
  // ref could not null if state is involved

  //4- useState as useRef

  const renders = useRef(0);
  // const [r, setR] = useState()  => getter, setter
  const _renders = useState({ current: 0 })[0]; // Using state as useRef

  useEffect(() => {
    renders.current += 1;
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
          onClick={() => {
            obj.current = 1200;
          }}
          // onClick={() => setState(Math.random())}
        >
          <Flex flexDir={'column'}>
            <h2>What is UseRef?</h2>
            <button>Update Me</button>
          </Flex>

          <h2>{obj.current}</h2>
        </div>

        {/* Trigger Effect 3 */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => {
            // onClick={() => (obj.current = 2)}
            setState(200);
          }}
        >
          <Flex flexDir={'column'}>
            <h2>Effect 3: Selecting DOM elements?</h2>
          </Flex>
          <h2>100</h2>
        </div>

        {/* Trigger Effect 4 */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => {
            // obj.current = 2
            setState((val) => val + 1);
          }}
        >
          <Flex flexDir={'column'}>
            <h2>Effect 4: Using useState as useRef?</h2>
            <button>Update Me</button>
          </Flex>
          <h2>{renders.current + 1}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseRefHook;

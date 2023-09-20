import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  //1- what is useEffect
  /**
   * function that render everytime
   * how to inject into the lifecycle of state update
   * two parts=> function , dependency array
   */

  // Effect 1: Runs every time the component updates
  useEffect(() => {
    console.log('Effect 1: I run every time the component updates');
  });
  // Effect 2: Runs once when the component mounts (empty dependency array)
  useEffect(() => {
    console.log('Effect 2: I run once when the component mounts');
  }, []);
  // Effect 3: Runs based on changes in 'state2' | component mount, unmount, update
  /**
   *   useEffect(() => {
       console.log('I run based on state in the dependency and first time', state);
       // dependency are compared using === sign so const obj = {hello: 10} : objects are never the same in js due to reference in memory
    }, [state]);
   */
  useEffect(() => {
    console.log('Effect 3: I run when "state2" changes:', state2);
  }, [state2]);
  //  Bad
  // useEffect(() => {
  //   setState2((val) => val + 1);
  //   console.log('I am a bad recursive useEffect ', state2);
  // }, [state2]);

  // Effect 4: Cleanup function for Effect 3
  /**
   * 1- UseEffect Cleanup = () => useEffect is called after mount
   * <state change update>
   * 2- UseEffectHook() => useEffect is called after re-render
   *
   * from 1 => 2 transition: cleanup must be done in case of event listeners or something that must be cleaned up
   * */
  useEffect(() => {
    console.log('Effect 4: I run before cleanup for Effect 3:', state2);
    return () => {
      console.log('Cleanup for Effect 4: I can clean up any resources here');
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
        {/* Trigger state update for Effect 1 */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => setState(2)}
        >
          <Flex flexDir={'column'}>
            <h2>Effect 1: What is useEffect?</h2>
            <button>Update Me</button>
          </Flex>
          <h2>{state}</h2>
        </div>

        {/* Trigger state2 update for Effects 3 and 4 */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => setState2(Math.random())}
        >
          <Flex flexDir={'column'}>
            <h2>Effect 3: Component Update in useEffect?</h2> <button>Update Me</button>
          </Flex>
          <h2>{state2}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseEffectHook;

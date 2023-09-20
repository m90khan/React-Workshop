import { useCallback, useState } from 'react';

const UseCallbackHook = () => {
  const [state, setState] = useState(0);

  // useCallback hook => Performance optimization => Returns the same instance of the function if dependencies do not change.
  // Use useCallback when you want to memoize a function to prevent unnecessary re-creation.
  const value = useCallback(() => {
    console.log('I am a callback function');
    return <h1>Hello world</h1>;
  }, []); // An empty dependency array means it only creates the function once.
  // const value2 = useMemo(() => {
  //   return () => <h1>Hello world</h1>;
  // }, []);
  /**
   * As objects are not equal due to reference same is the case of functions . in every render
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
        {/* Example */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => setState(Math.random())}
        >
          <div>
            <div>What is UseCallback? {value()}</div>
          </div>
          <h2>{state}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseCallbackHook;

import { useEffect, useMemo, useState } from 'react';

const UseMemoHook = () => {
  const [state, setState] = useState(0);

  // UseMemo hook => Performance optimization => Returns a memoized value
  // Use useMemo when you want to memoize a value to prevent unnecessary re-computation.
  const value = useMemo(() => {
    // This function runs only once when the component mounts
    console.log('I run once');
    return { count: state };
  }, [state]); // An empty dependency array means it only runs once.

  const value2 = 100;
  // One reason to use useMemo: object reference value remains the same here

  useEffect(() => {
    console.log('Did value changed', value);
  }, [value]);

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
        {/* Example */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => setState(200)}
        >
          <h2>What is UseMemo? {value.count}</h2> <h2>{state}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseMemoHook;

import React from 'react';
import useCustomHook from '../useCustomHook';
import useLocalStorage from '../useLocalStorage';

const CustomHookComp = ({ val }) => {
  const [count, add, sub] = useCustomHook(100);
  const [state, setState] = useLocalStorage('user-name', 'khan');
  return (
    <div>
      CustomHookComp : {count}{' '}
      <div style={{ display: 'flex' }}>
        <button
          style={{
            padding: '1rem',
            background: 'red',
            color: 'white',
            marginBottom: '1rem',
          }}
          onClick={() => add()}
        >
          Add Counter
        </button>
        <button
          style={{
            padding: '1rem',
            background: 'red',

            color: 'white',
            margin: '0 0 1rem 1rem',
          }}
          onClick={() => sub()}
        >
          Subtract Counter
        </button>
      </div>
      UseLocalStorage Hook :{' '}
      <input type={'text'} value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
};

export default CustomHookComp;

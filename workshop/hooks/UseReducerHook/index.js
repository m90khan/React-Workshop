import { useEffect, useReducer, useState } from 'react';
import ShoppingCart from './ShoppingCart';

// Reducer function for obj state
function reducer(state, someValue) {
  // state can be accessed by default
  return state * someValue;
}
// Reducer function for newState state

function reducer2(state, action) {
  switch (action.type) {
    case 'increment_step': {
      return { ...state, step: state.step + action.payload };
    }
    case 'decrement_step':
      return { ...state, step: state.step - action.payload };
    case 'increment_counter': {
      return { ...state, counter: state.counter + state.step };
    }
    case 'decrement_counter':
      return { ...state, counter: state.counter - state.step };
    default:
      // throw new Error();
      return state;
  }
}

function reducer3(state, action) {
  switch (action.type) {
    case 'increment_counter': {
      return { ...state, counter: counter + state.step };
    }
    case 'decrement_counter': {
      return { ...state, counter: counter - state.step };
    }
    case 'increment_step': {
      return { ...state, step: state.step + action.payload };
    }
    case 'decrement_step': {
      return { ...state, step: state.step - action.payload };
    }
    default: {
      return state;
    }
  }
}
const UseReducerHook = () => {
  const [state, setState] = useState({
    obj1: 1,
    obj2: 2,
  });
  // 1. Old way of using useState
  // Function to update state object
  const handleState = (newState) => {
    setState((oldState) => {
      return {
        ...oldState,
        ...newState,
      };
    });
  };
  // 2. UseReducer: An alternative to useState
  // Accepts a reducer of type (state, action) => newState
  const [obj, setObj] = useReducer(reducer, 10);
  const someValue = 2;

  //3- useReducer in Complexity
  const [newState, dispatch] = useReducer(reducer2, {
    counter: 0,
    step: 1,
  });

  useEffect(() => {
    console.log('I run when newState changes:', newState);
  }, [newState.counter]);

  return (
    <div style={{ width: '90%' }} className={'useref-class'}>
      <h1>UseReducer</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        {/* Trigger the state update using old useState */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => handleState({ obj1: state.obj1 + 1 })}
        >
          <h2>1. Old way of using useState</h2> <h2>{state.obj1}</h2>
        </div>
        {/* Trigger UseReducer */}
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
          onClick={() => setObj(someValue)}
        >
          <h2>What is UseReducer?</h2> <h2>{obj}</h2>
        </div>
        {/* UseReducer in Complexity */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <h2 style={{ fontSize: '2rem' }}>UseReducer in complexity?</h2>
          <h2 style={{ fontSize: '1.5rem' }}>
            Counter:{newState.counter} , Step: {newState.step}
          </h2>

          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <button
              style={{
                padding: '1rem',
                background: 'red',
                color: 'white',
                marginBottom: '1rem',
              }}
              onClick={() => dispatch({ type: 'increment_counter' })}
            >
              Increment Counter
            </button>
            <button
              style={{
                padding: '1rem',
                background: 'red',
                color: 'white',
                marginBottom: '1rem',
              }}
              onClick={() => dispatch({ type: 'decrement_counter' })}
            >
              Decrement Counter
            </button>
            <button
              style={{
                padding: '1rem',
                background: 'red',
                color: 'white',
                marginBottom: '1rem',
              }}
              onClick={() => dispatch({ type: 'increment_step', payload: 5 })}
            >
              Increment Step
            </button>
            <button
              style={{ padding: '1rem', background: 'red', color: 'white' }}
              onClick={() => dispatch({ type: 'decrement_step', payload: 2 })}
            >
              decrement Step
            </button>
          </div>
        </div>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default UseReducerHook;

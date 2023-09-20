import { createContext, useContext, useReducer, useState } from 'react';
// import RemoteComponent from './RemoteComponent';
import dynamic from 'next/dynamic';
import { Context } from './store';
const RemoteComponent = dynamic(() => import('./RemoteComponent'), {
  ssr: false,
});
/**
 * 1-Create a context => share context scope
 * 2-Once context is defined, it provides a Provider => single parent which can provide shared values to children
 * 3- use the useContext in the children to access the passed in values
 * The downside is that context will re-render every component even if state is not needed
 * because the context cannot determine the state change from the parent component
 */
// const Context = createContext(null);
function reducer(state, action) {
  switch (action.type) {
    case 'set_dark_theme': {
      return { ...state, theme: 'dark' };
    }
    case 'set_light_theme': {
      return { ...state, theme: 'light' };
    }
    default:
      // throw new Error();
      return state;
  }
}

const UseContextHook = () => {
  const [state, setState] = useState(false);
  const [globalState, dispatch] = useReducer(reducer, { theme: 'dark' });

  return (
    <div style={{ width: '90%' }} className={'useref-class'}>
      <h1>UseContext</h1>

      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        {/* 1 */}
        <LoginProvider>
          <Context.Provider value={{ globalState, dispatch }}>
            <div
              style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
              onClick={() => setState(Math.random())}
            >
              <h2>What is UseContext? </h2> <h2>{state}</h2>
            </div>
            <RemoteComponent />
          </Context.Provider>
        </LoginProvider>
      </div>
    </div>
  );
};

export default UseContextHook;

const LoginContext = createContext(null);

function loginReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_USER': {
      return { ...state, user: true };
    }
    case 'LOGOUT': {
      return { ...state, user: false };
    }
    default:
      // throw new Error();
      return state;
  }
}

const LoginProvider = ({ children }) => {
  const [gbState, dispatch] = useReducer(loginReducer, {
    user: null,
  });
  return (
    <LoginContext.Provider value={{ gbState, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useGlobalState = () => useContext(LoginContext);

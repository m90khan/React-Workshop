import React, { useContext } from 'react';
import { Context } from '../store';

const RemoteComponent = () => {
  const { globalState, dispatch } = useContext(Context);
  return (
    <div>
      <h1>RemoteComponent</h1>
      <h1>Mode : {globalState.theme}</h1>
      <button
        style={{
          padding: '1rem',
          background: 'red',
          color: 'white',
          marginBottom: '1rem',
        }}
        onClick={() =>
          dispatch({
            type: globalState.theme == 'dark' ? 'set_light_theme' : 'set_dark_theme',
          })
        }
      >
        Change to {globalState.theme == 'dark' ? 'light' : 'dark'} theme
      </button>
    </div>
  );
};

export default RemoteComponent;

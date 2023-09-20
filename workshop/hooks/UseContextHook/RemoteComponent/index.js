import { useContext } from 'react';
import { useGlobalState } from '..';
import { Context } from '../store';

const RemoteComponent = () => {
  const { globalState, dispatch } = useContext(Context);
  const { gbState, dispatch: userDispatch } = useGlobalState();
  return (
    <div>
      <h1>RemoteComponent</h1>
      <h1>Mode : {globalState.theme}</h1>
      <h1>User : {gbState.user ? 'Logged-In' : 'Logged-Out'}</h1>

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
      <button
        style={{
          padding: '1rem',
          background: 'red',
          color: 'white',
          marginBottom: '1rem',
        }}
        onClick={() =>
          userDispatch({
            type: !gbState.user ? 'LOGIN_USER' : 'LOGOUT',
          })
        }
      >
        Toggle User
      </button>
    </div>
  );
};

export default RemoteComponent;

import React, { useContext } from 'react';

const RemoteComponent = () => {
  return (
    <div>
      <h1>RemoteComponent</h1>
      <h1>Mode : </h1>
      <button
        style={{
          padding: '1rem',
          background: 'red',
          color: 'white',
          marginBottom: '1rem',
        }}
        onClick={() => console.log('I am remote')}
      >
        Change to theme
      </button>
    </div>
  );
};

export default RemoteComponent;

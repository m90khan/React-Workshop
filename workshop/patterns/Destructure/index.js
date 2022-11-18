import React, { Suspense, useEffect, useRef, useState } from 'react';
// Destructing
// State machines
// Compound components
// Lazy Loading components  const Component = React.lazy(()=> import('./Component))
// Eager Loading
// Memomize Functions React.memo
// Comparator

//Eager
// function loadComponent() {
//   import('./Component'); // get caached in memory
// }
const Button = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{ color: props.color, fontWeight: props.bold ? 'bold' : '400' }}
      onClick={() => setCounter((val) => val + props.increment)}
    >
      Call me button {counter}
    </div>
  );
};
// Memo
let CustomUI = (props) => {
  const [counter, setCounter] = useState(false);
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div
      style={{ color: counter ? 'red' : 'blue' }}
      onMouseEnter={() => setCounter(true)}
      onMouseLeave={() => setCounter(false)}
    >
      Hello Memo : {'=>'} Renders{'=>'} {renderCount.current}
    </div>
  );
};
CustomUI = React.memo(CustomUI);

// comparator
function compare(prevProps, nextProps) {
  return prevProps == nextProps;
}
CustomUI = React.memo(CustomUI, compare);

const Destructure = () => {
  const props = {
    increment: 2,
    bold: true,
    color: 'yellow',
  };
  /**
   * JSX code =>  React.createElement('Button', {
   * increment: 5,
   * ...DestructingObject
   * })
   * which is equal to <Button increment={5} />
   *
   *  */

  //Memo

  const [counter, setCounter] = useState(false);

  return (
    <div
      style={{ padding: '2rem', background: counter ? 'magenta' : 'tomato' }}
      onMouseEnter={() => setCounter(true)}
      onMouseLeave={() => setCounter(false)}
    >
      {/* Destructure */}
      {/* <Button color={'blue'} />
      <Button color={''} />
      <Button {...props} color='red' /> */}
      {/* Lazy  */}
      {/* <Suspense fallback={<div>Loading</div>}>
        <Button {...props} color='red' />
      </Suspense> */}
      {/* Eager */}
      {/* <div style={{ color: 'green' }} onMouseOver={loadComponent}>
        Eager Loading me
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Button {...props} color='blue' />
      </Suspense> */}
      {/* Memo */}
      <h2>Memo</h2>
      <CustomUI prop1={Math.random()} />
      <CustomUI />
      <CustomUI />
      <CustomUI />

      <CustomUI />
    </div>
  );
};

export default Destructure;

'use-client';
import React, {
  lazy,
  startTransition,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react';
import CompoundComponent from './CompoundComponent';
import RemoteComponent from './RemoteComponent';
// Destructing
// State machines
// Compound components
// Lazy Loading components  const Component = React.lazy(()=> import('./Component))
// Eager Loading
// Memomize Functions React.memo
// Comparator

// Lazy Loading components:
// Lazy loading is a technique where you load a component or module only when it's needed, improving initial page load performance.
const Button = lazy(() => import('./CustomButton'));

// Eager Loading:
// Eager loading is the opposite of lazy loading, where a component or module is loaded immediately, regardless of whether it's needed.
function loadComponent() {
  import('./RemoteComponent'); // get caached in memory
}

// Memo: Memoized component
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
// Memoize Functions (React.memo):
// Memoization is an optimization technique to cache the results of expensive function calls to improve performance.
// React.memo is a higher-order component that memoizes a functional component to prevent unnecessary renders.

CustomUI = React.memo(CustomUI);

// Custom comparison function for memoization
function compare(prevProps, nextProps) {
  // Change this comparison as needed
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
      <div>
        <h1>Compound Component </h1>
        <CompoundComponent />
      </div>
      {/* Destructure */}
      {/* <Button color={'blue'} {...props} />
      <Button color={''} {...props} />
      <Button {...props} color='red' /> */}
      {/* Lazy Loading */}
      <Suspense fallback={<div>Loading</div>}>
        {/*
          Use startTransition to wrap the code that triggers the update
        */}
        {startTransition(() => (
          <Button {...props} color='red' />
        ))}
      </Suspense>
      {/* Eager Loading */}
      <div style={{ color: 'green' }} onMouseOver={loadComponent}>
        Eager Loading me
      </div>
      <Suspense fallback={<div>Loading</div>}>
        {startTransition(() => (
          <RemoteComponent />
        ))}
      </Suspense>
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

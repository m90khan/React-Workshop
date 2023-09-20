import { useState } from 'react';

const CustomButton = (props) => {
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

export default CustomButton;

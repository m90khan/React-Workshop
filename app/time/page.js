import React from 'react';

//similar to server side props
const getTime = async () => {
  const res = await fetch('https://worldtimeapi.org/api/timezone/america/havana', {
    cache: 'no-store',
    headers: { 'x-hello': 'world' },
  });

  const time = await res.json();
  return time;
};

const Timer = async () => {
  const time = await getTime();
  return <div>page: {new Date(time.unixtime * 1000).toString()}</div>;
};

export default Timer;

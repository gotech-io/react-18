import { startTransition, useEffect, useState } from 'react';
import { getDataFast } from '../utils/fakeApi';
import promiseToSuspend from '../utils/promiseToSuspend';

let { read } = promiseToSuspend(() => getDataFast());

const LoadingFast = () => {
  const [counter, setCounter] = useState(0);
  const data = read();

  const clickHandler = () => {
    read = promiseToSuspend(() => getDataFast()).read;
    startTransition(() => setCounter((prev) => prev + 1));
  };

  useEffect(() => {
    alert('Loading Fast is an the house!!');
  }, []);

  return (
    <div>
      <h1>Loading Fast</h1>
      <p>This is a fast loading part.</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={clickHandler}>re-suspend! {counter}</button>
    </div>
  );
};

export default LoadingFast;

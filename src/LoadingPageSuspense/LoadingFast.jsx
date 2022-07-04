import { useEffect } from 'react';
import { getDataFast } from '../utils/fakeApi';
import promiseToSuspend from '../utils/promiseToSuspend';

const { read } = promiseToSuspend(() => getDataFast());

const LoadingFast = () => {
  const data = read();

  useEffect(() => {
    alert('Loading Fast is an the house!!');
  }, []);

  return (
    <div>
      <h1>Loading Fast</h1>
      <p>This is a fast loading part.</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default LoadingFast;

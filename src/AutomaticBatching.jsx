import { useEffect, useRef, useState } from 'react';
import { getDataFast } from './utils/fakeApi';
import Spinner from './shared/Spinner';

const AutomaticBatching = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(0);

  ref.current += 1;

  useEffect(() => {
    (async () => {
      const data = await getDataFast();
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <div style={{ margin: '12px auto' }}>
      <Spinner />
    </div>
  ) : (
    <div>
      <h1>AutomaticBatching</h1>
      <p>I was rendered {ref.current} times</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default AutomaticBatching;

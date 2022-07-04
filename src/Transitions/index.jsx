import { useState, useTransition } from 'react';
import { getFakeData } from '../utils/fakeApi';
import Spinner from '../shared/Spinner';
import ItemList from './ItemList';

const fakeData = getFakeData(10000);

const filterData = (searchTerm) => {
  if (!searchTerm) {
    return fakeData;
  }
  return fakeData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const WithTransitions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsList, setItemsList] = useState(filterData());
  // const [isPending, startTransition] = useTransition();

  const changeHandler = ({ target: { value } }) => {
    setSearchTerm(value);
    // startTransition(() => {
    setItemsList(filterData(value));
    // });
  };

  return (
    <>
      <div>
        <input onChange={changeHandler} value={searchTerm} />
      </div>
      {/* {isPending && <Spinner />} */}
      <ItemList items={itemsList} />
    </>
  );
};

export default WithTransitions;

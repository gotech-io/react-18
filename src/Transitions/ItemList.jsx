import { useDeferredValue } from 'react';

const ItemList = ({ items }) => {
  const itemsArray = items;
  // const itemsArray = useDeferredValue(items);
  return (
    <>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {itemsArray.map((item) => (
          <li style={{ borderBottom: '2px solid hotpink' }} key={item.id}>
            <h3>
              {item.name} - {item.price}$
            </h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;

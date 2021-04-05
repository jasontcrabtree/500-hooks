import { useState } from 'react';

function useAddToArrayState() {
  const [arrayItem, setArrayItem] = useState('');
  const [arrayList, setArrayList] = useState([]);

  const addToArray = (e) => {
    e.preventDefault();

    setArrayList([
      ...arrayList,
      {
        id: arrayList.length,
        value: arrayItem,
      },
    ]);
    setArrayItem('');
  };

  return [arrayItem, setArrayItem, arrayList, setArrayList, addToArray];
}

export default useAddToArrayState;

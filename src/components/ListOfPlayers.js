import { useState } from 'react';

function ListOfPlayers() {
  const [arrayItem, setArrayItem] = useState('');
  const [arrayList, setArrayList] = useState([]);

  function useAddToArray(e) {
    e.preventDefault();

    setArrayList([
      ...arrayList,
      {
        id: arrayList.length,
        value: arrayItem,
      },
    ]);
    setArrayItem('');
  }

  return (
    <>
      <form onSubmit={useAddToArray}>
        <label htmlFor="item">
          <input
            name="item"
            type="text"
            value={arrayItem}
            onChange={(e) => setArrayItem(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {arrayList.map((player) => (
          <li key={player.id}>{player.value}</li>
        ))}
      </ul>
    </>
  );
}

export default ListOfPlayers;

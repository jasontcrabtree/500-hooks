import { useState } from 'react';

function useSetPlayerName() {
  const [playerName, setPlayerName] = useState('');

  return [playerName, setPlayerName];
}

export default useSetPlayerName;

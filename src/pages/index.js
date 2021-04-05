import ListOfPlayers from '../components/ListOfPlayers';

export default function Home() {
  // const [players, setPlayers] = useState([]);

  // console.log(players);

  return (
    <main>
      <h1>500 Hooks</h1>
      <ul>
        <li>Players</li>
        <li>Teams</li>
        <li>Scores of each team</li>
        <li>Goal score (500 or -500)</li>
        <li>Current trump suit</li>
      </ul>
      <ListOfPlayers />
    </main>
  );
}

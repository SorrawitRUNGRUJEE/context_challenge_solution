
import "./App.css";
import ScoreCard from "./assests/components/scoreCard";
import PlayerOne from "./assests/components/playerOne";
import PlayerTwo from "./assests/components/playerTwo";
import PlayerThree from "./assests/components/playerThree";
import PlayerFour from "./assests/components/playerFour";
import ScoreContextProvider from "./assests/context/score_context";

function App() {
 
  return (
    <ScoreContextProvider>
      <ScoreCard>
        <PlayerOne />
        <PlayerTwo />
        <PlayerThree />
        <PlayerFour />
      </ScoreCard>
    </ScoreContextProvider>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import ScoreCard from "./assests/components/scoreCard";
import PlayerOne from "./assests/components/playerOne";
import PlayerTwo from "./assests/components/playerTwo";
import PlayerThree from "./assests/components/playerThree";
import PlayerFour from "./assests/components/playerFour";
import ScoreContextProvider from "./assests/context/score_context";

function App() {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [scoreThree, setScoreThree] = useState(0);
  const [scoreFour, setScoreFour] = useState(0);
  const [total, setTotal] = useState(0);
  const player = {
    one: "john",
    two: "jane",
    three: "noon",
    four: "bo",
  };

  useEffect(() => {
    TotalScore(scoreOne, scoreTwo, scoreThree, scoreFour);
  }, [scoreOne, scoreTwo, scoreThree, scoreFour]);
  const TotalScore = (one, two, three, four) => {
    const result = one + two + three + four;
    setTotal(result);
  };
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

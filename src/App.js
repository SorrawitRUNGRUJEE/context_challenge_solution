import { useEffect, useState } from "react";
import "./App.css";
import ScoreCard from "./assests/components/scoreCard";
import PlayerOne from "./assests/components/playerOne";
import PlayerTwo from "./assests/components/playerTwo";
import PlayerThree from "./assests/components/playerThree";
import PlayerFour from "./assests/components/playerFour";

function App() {
  const [scoreOne,setScoreOne] = useState(0)
  const [scoreTwo,setScoreTwo] = useState(0)
  const [scoreThree,setScoreThree] = useState(0)
  const [scoreFour,setScoreFour] = useState(0)
  const [total,setTotal] = useState(0)
  const player ={
    one:"john",
    two:"jane",
    three:"noon",
    four:"bo"
  }
  
useEffect(()=>{
TotalScore(scoreOne,scoreTwo,scoreThree,scoreFour)
},[scoreOne,scoreTwo,scoreThree,scoreFour])
  const TotalScore = (one,two,three,four) =>{
    const result = one + two + three + four 
    setTotal(result)
  }
  return (
    <ScoreCard total={total}>
      <PlayerOne   score={scoreOne}   increment={()=> setScoreOne(scoreOne + 1)} decrement={()=> setScoreOne(scoreOne - 1)}name={player.one} />
      <PlayerTwo   score={scoreTwo}   increment={()=> setScoreTwo(scoreTwo + 1)} decrement={()=> setScoreTwo(scoreTwo - 1)}name={player.two} />
      <PlayerThree score={scoreThree} increment={()=> setScoreThree(scoreThree + 1)} decrement={()=> setScoreThree(scoreThree - 1)}name={player.three} />
      <PlayerFour  score={scoreFour}  increment={()=> setScoreFour(scoreFour + 1)} decrement={()=> setScoreFour(scoreFour  -1)}name={player.four} />
    </ScoreCard>
  );
}

 




export default App;



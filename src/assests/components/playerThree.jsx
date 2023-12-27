import { ScoreContext } from "../context/score_context";
import { useContext } from "react";
export default function PlayerThree (){
    const {player,increment,decrement,scoreThree} = useContext(ScoreContext)
    return (
      <div className="player">
        <span> this is {player.three}</span>
        <span>this is {player.three}'s score :{scoreThree}</span>
        <div>
        <button onClick={()=>increment(player.three)}> plus</button>
        <button onClick={()=>decrement(player.three)}> minus</button>
        </div>
  
      </div>
    );
  };
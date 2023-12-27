import { ScoreContext } from "../context/score_context";
import { useContext } from "react";
export default function PlayerOne (){
    const {player,increment,decrement,scoreOne} = useContext(ScoreContext)
    return (
      <div className="player">
        <span> this is {player.one}</span>
        <span>this is {player.one}'s score :{scoreOne}</span>
        <div>
        <button onClick={()=>increment(player.one)}> plus</button>
        <button onClick={()=>decrement(player.one)}> minus</button>
        </div>
  
      </div>
    );
  };
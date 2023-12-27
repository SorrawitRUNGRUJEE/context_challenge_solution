import { ScoreContext } from "../context/score_context";
import { useContext } from "react";
export default function  PlayerFour  ()  {
    const {player,increment,decrement,scoreFour} = useContext(ScoreContext)
    return (
      <div className="player">
        <span> this is {player.four}</span>
        <span>this is {player.four}'s score :{scoreFour}</span>
        <div>
        <button onClick={()=>increment(player.four)}> plus</button>
        <button onClick={()=>decrement(player.four)}> minus</button>
        </div>
  
      </div>
    );
  };
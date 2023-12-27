import { ScoreContext } from "../context/score_context";
import { useScore } from "../context/score_context";
export default function PlayerOne (){
    const {player,increment,decrement,scoreOne} = useScore()
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
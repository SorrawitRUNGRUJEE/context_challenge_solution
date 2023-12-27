import { ScoreContext } from "../context/score_context";
import { useScore } from "../context/score_context";
export default function PlayerTwo () {
    const {player,increment,decrement,scoreTwo} = useScore()
    return (
      <div className="player">
        <span> this is {player.two}</span>
        <span>this is {player.two}'s score :{scoreTwo}</span>
        <div>
        <button onClick={()=>increment(player.two)}> plus</button>
        <button onClick={()=>decrement(player.two)}> minus</button>
        </div>
  
      </div>
    );
  };
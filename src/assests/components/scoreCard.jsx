import { ScoreContext } from "../context/score_context";
import { useContext } from "react";

export default function ScoreCard ({children})  {
    const {total} = useContext(ScoreContext)
    return (
      <div className="player">
        <span>this is overall score: {total}</span>
        {children}
      </div>
    );
  };
  
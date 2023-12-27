export default function ScoreCard ({ children,total })  {
    return (
      <div className="player">
        <span>this is overall score: {total}</span>
        {children}
      </div>
    );
  };
  
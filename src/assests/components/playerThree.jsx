export default function PlayerThree ({ name,increment,decrement,score }){
    return (
      <div className="player">
        <span> this is {name}</span>
        <span>this is {name}'s score :{score}</span>
        <div>
        <button onClick={increment}> plus</button>
        <button onClick={decrement}> minus</button>
        </div>
  
      </div>
    );
  };
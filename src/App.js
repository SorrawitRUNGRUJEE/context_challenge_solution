
import { useState } from 'react';
import './App.css';
function App() {

  const [score,setScore] = useState({
    one:0,
    two:0,
    three:0,
    four:0
  })
  
  return (
    <>
    </>
  );
}


const ScoreCard = () =>{
  return(<div>

  </div>)
}

const PlayerOne = ({name}) =>{
  return (
    <div>
      <span> this is {name}</span>

    </div>
  )
}
const PlayerTwo = ({name}) =>{
  return (
    <div>
      <span> this is {name}</span>

    </div>
  )
}
const PlayerThree = ({name}) =>{
  return (
    <div>
      <span> this is {name}</span>

    </div>
  )
}
const PlayerFour = ({name}) =>{
  return (
    <div>
      <span> this is {name}</span>

    </div>
  )
}



export default App;

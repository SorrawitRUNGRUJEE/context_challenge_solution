export default function Button  ({setBody,setBodyColors,setModal,setColors}) {
    return(
      <div>
          <button onClick={setBody}>trigger Body</button>
          <button onClick={setBodyColors}>body color!</button>
          <button onClick={setModal}>trigger Modal!</button>
          <button onClick={setColors}>modal color!</button>
        </div>
    )
  }
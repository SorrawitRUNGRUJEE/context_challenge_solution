import { useModal } from "../context/modalContext"
export default function Button  () {
    const {setBody,setBodyColors,setModal,setColors} = useModal()
    return(
      <div>
          <button onClick={setBody}>trigger Body</button>
          <button onClick={setBodyColors}>body color!</button>
          <button onClick={setModal}>trigger Modal!</button>
          <button onClick={setColors}>modal color!</button>
        </div>
    )
  }
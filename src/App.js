import './App.css';
import { useState } from "react";
function App() {
  const [isBodyOpen,setIsBodyOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color,setColor] = useState(false)
  const [bodyColor,setBodyColor] = useState(false)

  const setModal = () => {
      setIsModalOpen(!isModalOpen);
    }
  
  const setColors=()=> setColor(!color)
  
  const setBody = () => setIsBodyOpen(!isBodyOpen)


  const setBodyColors = () => setBodyColor(!bodyColor)
  

  const modal_content = {
    title:"modal title",
    sub_title:"modal sub title"
  }

  return (
    <div>
      <div>
        <button onClick={setBody}>trigger Body</button>
        <button onClick={setBodyColors}>body color!</button>
        <button onClick={setModal}>trigger Modal!</button>
        <button onClick={setColors}>modal color!</button>
      </div>
       <Body bodyColor={bodyColor} body={isBodyOpen} modal={modal_content} title="where is the modal ?" content="here it is!" isModalOpen={isModalOpen} color={color} />
    </div>
  );
}

const Body = ({bodyColor,title,content,isModalOpen,color,modal,body}) => {
  return(
<>{

  body &&
<div className={bodyColor ? "body":"bodyBefore"}>
  <h1>this is body, not modal</h1>
    <h1>{title}</h1>
    {isModalOpen&& <Modal color={color} modal={modal} content={content} />}
  </div>}



</>
  )
   
};

const Modal = ({color,modal,content}) =>{
  
  
  return(
    <><div className={color? "modal":"modalBefore"}>

    <h1>{content}</h1>
      <h3>{modal.title}</h3>
      <h3>{modal.sub_title}</h3>
    </div>
    </>
    

  )
}

export default App;

import Modal  from "./Modal"
import { useContext } from "react"
import { ModalContext } from "../context/modalContext"

export default function Body ({title,content})  {
    const {bodyColor,isModalOpen,isBodyOpen} = useContext(ModalContext)
    return(
  <>{
    isBodyOpen &&
  <div className={bodyColor ? "body":"bodyBefore"}>
    <h1>this is body, not modal</h1>
      <h1>{title}</h1>
      {isModalOpen&& <Modal  content={content} />}
    </div>}
  
  
  
  </>
    )
     
  };
  
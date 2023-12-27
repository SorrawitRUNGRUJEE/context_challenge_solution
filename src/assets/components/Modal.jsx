import { useModal } from "../context/modalContext"
export default function Modal ({content}) {
    const {color,modal_content} = useModal()
  
  
    return(
      <><div className={color? "modal":"modalBefore"}>
  
      <h1>{content}</h1>
        <h3>{modal_content.title}</h3>
        <h3>{modal_content.sub_title}</h3>
      </div>
      </>
      
  
    )
  }
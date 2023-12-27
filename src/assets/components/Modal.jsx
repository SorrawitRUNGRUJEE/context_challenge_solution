export default function Modal ({color,modal,content}) {
  
  
    return(
      <><div className={color? "modal":"modalBefore"}>
  
      <h1>{content}</h1>
        <h3>{modal.title}</h3>
        <h3>{modal.sub_title}</h3>
      </div>
      </>
      
  
    )
  }
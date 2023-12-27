import Modal  from "./Modal"

export default function Body ({bodyColor,title,content,isModalOpen,color,modal,body})  {
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
  
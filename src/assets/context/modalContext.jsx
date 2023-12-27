import { createContext,useState,useContext } from "react";

export const ModalContext = createContext()


export default function ModalContextProvider({children}){
    const [isBodyOpen, setIsBodyOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [bodyColor, setBodyColor] = useState(false);

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const setColors = () => setColor(!color);

  const setBody = () => setIsBodyOpen(!isBodyOpen);

  const setBodyColors = () => setBodyColor(!bodyColor);

  const modal_content = {
    title: "modal title",
    sub_title: "modal sub title",
  };



    const value = {color,isBodyOpen,bodyColor,modal_content,setBodyColors,setBody,setModal,setColors,isModalOpen
    }

    return <ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if(!context){
        throw new Error("useModal must be used within ModalContextProvider")
    }

    return context
}

import "./App.css";
import { useState } from "react";
import Body from "./assets/components/Body";
import Button from "./assets/components/Button";
import ModalContextProvider from "./assets/context/modalContext";
function App() {
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

  return (
    <ModalContextProvider>
      <Button
        setBody={setBody}
        setBodyColors={setBodyColors}
        setColors={setColors}
        setModal={setModal}
      />
      <Body
        bodyColor={bodyColor}
        body={isBodyOpen}
        modal={modal_content}
        title="where is the modal ?"
        content="here it is!"
        isModalOpen={isModalOpen}
        color={color}
      />
    </ModalContextProvider>
  );
}
export default App;

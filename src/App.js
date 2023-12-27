import "./App.css";
import { useState } from "react";
import Body from "./assets/components/Body";
import Button from "./assets/components/Button";
import ModalContextProvider from "./assets/context/modalContext";
function App() {
  

  return (
    <ModalContextProvider>
      <Button
        
      />
      <Body
        
        title="where is the modal ?"
        content="here it is!"

      />
    </ModalContextProvider>
  );
}
export default App;

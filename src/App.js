
import { useState,useContext } from "react";

import Header from "./assets/components/header";
import Main from "./assets/components/main";
import PostContextProvider from "./assets/context/postContext";
import { PostContext } from "./assets/context/postContext";



function App() {


  return (
    <PostContextProvider>
    <section>
      <Header
       
      />
      <Main  />
    </section>
    </PostContextProvider>
    
  );
}













export default App;

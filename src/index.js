import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConfirmPasswordInput from "./assets/component/confirmPassword";
import EmailInput from "./assets/component/emailInput";
import PasswordInput from "./assets/component/passwordInput";
import UsernameInput from "./assets/component/usernameInput";
import InputContextProvider from "./assets/context/inputContext";
import { useContext } from "react";
import { InputContext } from "./assets/context/inputContext";

// Form Component
function Form() {
  const {handleSubmit} = useContext(InputContext)
 
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {/* #1 : Username */}
        <UsernameInput
          
        />
        {/* #2 : Email*/}
        <EmailInput
         
        />

        {/* #3 : Password */}
        <PasswordInput
         
        />
        {/* #4 : Confirm Password */}
        <ConfirmPasswordInput
          
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>
<InputContextProvider>
<Form />
</InputContextProvider>
</>
);

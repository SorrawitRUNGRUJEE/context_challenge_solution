import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConfirmPasswordInput from "./assets/component/confirmPassword";
import EmailInput from "./assets/component/emailInput";
import PasswordInput from "./assets/component/passwordInput";
import UsernameInput from "./assets/component/usernameInput";
import InputContextProvider from "./assets/context/inputContext";

// Form Component
function Form() {
  // Data State
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Error Message State
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // Color State
  const [emailColor, setEmailColor] = useState("");
  const [usernameColor, setUserNameColor] = useState("");
  const [passwordColor,setPasswordColor] = useState("")
  const [confirmPasswordColor,setConfirmPasswordColor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Username
    if (username.length >= 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("กรุณาระบุชื่อผู้ใช้งานอย่างน้อย 8 ตัวอักษร");
      setUserNameColor("red");
    }

    // Validate Email
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบอีเมลล์ไม่ถูกต้อง");
      setEmailColor("red");
    }

    // Validate Password
    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green")
    } else {
      setErrorPassword("กรุณาระบุรหัสผ่านอย่างน้อย 8 ตัวอักษร");
      setPasswordColor("red")
    }

    // Validate Confirm Password
    if (password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green")
    } else {
      setErrorConfirmPassword("รหัสผ่านไม่ตรงกัน กรุณาระบุใหม่");
      setConfirmPasswordColor("red")
    }
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {/* #1 : Username */}
        <UsernameInput
          username={username}
          setUserName={setUserName}
          errorUserName={errorUserName}
          usernameColor={usernameColor}
        />
        {/* #2 : Email*/}
        <EmailInput
          email={email}
          setEmail={setEmail}
          emailColor={emailColor}
          errorEmail={errorEmail}
        />

        {/* #3 : Password */}
        <PasswordInput
          password={password}
          setPassword={setPassword}
          errorPassword={errorPassword}
          passwordColor={passwordColor}
        />
        {/* #4 : Confirm Password */}
        <ConfirmPasswordInput
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          errorConfirmPassword={errorConfirmPassword}
          confirmPasswordColor={confirmPasswordColor}
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

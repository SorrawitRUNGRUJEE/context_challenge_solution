import { createContext,useState,useContext } from "react";

export const InputContext = createContext()


export default function InputContextProvider({children}){
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



    const value = {username,password,email,confirmPassword,handleSubmit,emailColor,usernameColor,passwordColor,confirmPasswordColor,errorUserName,errorEmail,errorPassword,errorConfirmPassword,setPassword,setEmail,setConfirmPassword,setUserName}

    return <InputContext.Provider value={value}>
        {children}
    </InputContext.Provider>
}


export const useInput = () =>{
    const context = useContext(InputContext)
    if(!context){
        throw new Error("useScore must be used within a ScoreContextProvider");
    }

    return context
    
    
}



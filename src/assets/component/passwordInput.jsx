import { useContext } from "react";
import { InputContext } from "../context/inputContext";

export default function PasswordInput() {
  const { password, setPassword, errorPassword,passwordColor } = useContext(InputContext)
    return (
      <div className="form-input">
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{borderColor:passwordColor}}
        />
        <small style={{color:passwordColor}}>{errorPassword}</small>
      </div>
    );
  }
  
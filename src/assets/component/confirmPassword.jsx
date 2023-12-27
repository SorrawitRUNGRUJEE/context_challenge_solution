import { useContext } from "react";
import { InputContext } from "../context/inputContext";
export default function ConfirmPasswordInput() {
  const {
    confirmPassword,
    setConfirmPassword,
    errorConfirmPassword,
    confirmPasswordColor
  } = useContext(InputContext)
    return (
      <div className="form-input">
        <label>confirm-password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{borderColor:confirmPasswordColor}}
        />
        <small style={{color:confirmPasswordColor}}>{errorConfirmPassword}</small>
      </div>
    );
  }
import { useContext } from "react";
import { InputContext } from "../context/inputContext"; 
export default function EmailInput() {
  const { email, emailColor, setEmail, errorEmail } = useContext(InputContext)
    return (
      <div className="form-input">
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: emailColor }}
        />
        <small style={{ color: emailColor }}>{errorEmail}</small>
      </div>
    );
  }
  
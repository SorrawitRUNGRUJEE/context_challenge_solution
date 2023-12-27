import { useInput } from "../context/inputContext";
export default function EmailInput() {
  const { email, emailColor, setEmail, errorEmail } = useInput()
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
  
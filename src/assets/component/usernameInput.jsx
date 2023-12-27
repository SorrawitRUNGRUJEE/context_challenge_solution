import { useInput } from "../context/inputContext";
export default function UsernameInput() {
  const {
    setUserName,
    username,
    usernameColor,
    errorUserName,
  } =useInput()
    return (
      <div className="form-input">
        <label>username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          style={{ borderColor: usernameColor }}
        />
        <small style={{ color: usernameColor }}>{errorUserName}</small>
      </div>
    );
  }
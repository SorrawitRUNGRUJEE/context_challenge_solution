export default function UsernameInput({
    setUserName,
    username,
    usernameColor,
    errorUserName,
  }) {
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
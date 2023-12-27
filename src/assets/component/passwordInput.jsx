export default function PasswordInput({ password, setPassword, errorPassword,passwordColor }) {
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
  
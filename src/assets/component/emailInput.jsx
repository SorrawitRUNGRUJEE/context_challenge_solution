export default function EmailInput({ email, emailColor, setEmail, errorEmail }) {
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
  
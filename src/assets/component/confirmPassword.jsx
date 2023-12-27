export default function ConfirmPasswordInput({
    confirmPassword,
    setConfirmPassword,
    errorConfirmPassword,
    confirmPasswordColor
  }) {
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
import React, { useState } from "react";
import "./sign-up.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const URI = process.env.REACT_APP_API_URI;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.value.includes("@"));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsValidPassword(event.target.value.length >= 8);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValidEmail && isValidPassword) {
      try {
        const response = await axios.post(`${URI}/auth/signup`, { email, password });
        navigate("/signin");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="sign-up">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          이메일
          <input className="input" data-testid="email-input" type="email" value={email} onChange={handleEmailChange} required />
        </label>
        {!isValidEmail && <p>올바른 이메일 형식이 아닙니다.</p>}
        <label className="label">
          비밀번호
          <input className="input" data-testid="password-input" type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        {!isValidPassword && <p>비밀번호는 8자리 이상이어야 합니다.</p>}
        <button className="submit-btn" data-testid="signup-button" type="submit" disabled={!isValidEmail || !isValidPassword}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;

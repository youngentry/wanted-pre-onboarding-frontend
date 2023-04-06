import React, { useEffect, useState } from "react";
import "./sign-in.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { setAccessToken, validateAccessToken } from "../../module/handleAccessToken";
import { API_BASE_URL } from "../../constants";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const writtenEmail = location.state?.email;

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
      const headers = { "Content-Type": "application/json" };
      const data = { email, password };
      try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, data, { headers });
        const accessToken = response.data.access_token;
        setAccessToken(accessToken);
        navigate("/todo");
      } catch (error) {
        window.alert("아이디 또는 비밀번호가 틀렸습니다.");
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (writtenEmail) {
      setEmail(writtenEmail);
    }
  }, []);

  useEffect(() => {
    const isValidAccessToken = validateAccessToken();
    if (isValidAccessToken) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <div className="sign-in">
      <h2>로그인</h2>
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
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;

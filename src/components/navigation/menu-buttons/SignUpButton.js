import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpButton = ({ accessTokenData }) => {
  const navigate = useNavigate();
  return <>{!accessTokenData && <li onClick={() => navigate("/signup")}>회원가입</li>}</>;
};

export default SignUpButton;

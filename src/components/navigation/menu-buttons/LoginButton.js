import React from "react";
import { removeAccessTokenData } from "../../../module/handleAccessToken";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ accessTokenData }) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/signin");
  };

  const handleClickLogout = () => {
    removeAccessTokenData();
    window.alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return <>{accessTokenData ? <li onClick={handleClickLogout}>로그아웃</li> : <li onClick={handleClickSignIn}>로그인</li>}</>;
};

export default LoginButton;

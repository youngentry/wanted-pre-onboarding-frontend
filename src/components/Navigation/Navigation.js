import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokenData, removeAccessTokenData } from "../../module/handleAccessToken";
import "./Navigation.scss";

const Navigation = () => {
  const navigate = useNavigate();

  const [accessTokenData, setAccessTokenData] = useState(null);

  const handleClickSignIn = () => {
    navigate("/signin");
  };

  const handleClickLogout = () => {
    removeAccessTokenData();
    setAccessTokenData(null);
    window.alert("로그아웃 되었습니다.");
    navigate("/");
  };

  useEffect(() => {
    setAccessTokenData(getAccessTokenData());
  }, [navigate]);

  return (
    <div className="navigation">
      <ul className="menu-list">
        <li onClick={() => navigate("/")}>메인</li>
        {accessTokenData ? (
          <>
            <li onClick={() => navigate("/todo")}>투두리스트</li>
            <li onClick={handleClickLogout}>로그아웃</li>
          </>
        ) : (
          <>
            <li onClick={() => navigate("/signup")}>회원가입</li>
            <li onClick={handleClickSignIn}>로그인</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;

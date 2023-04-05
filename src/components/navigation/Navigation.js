import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokenData, removeAccessTokenData } from "../../module/handleAccessToken";

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
    <div>
      <ul>
        <li onClick={() => navigate("/")}>
          <div>메인</div>
        </li>
        {accessTokenData ? (
          <>
            <li>
              <div onClick={() => navigate("/todo")}>투두리스트</div>
            </li>
            <li>
              <div onClick={handleClickLogout}>로그아웃</div>
            </li>
          </>
        ) : (
          <>
            <li>
              <div onClick={() => navigate("/signup")}>회원가입</div>
            </li>
            <li>
              <div onClick={handleClickSignIn}>로그인</div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;

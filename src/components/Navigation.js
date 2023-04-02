import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokenData } from "../module/handleAccessToken";

const Navigation = () => {
  const navigate = useNavigate();

  const [accessTokenData, setAccessTokenData] = useState(null);
  useEffect(() => {
    setAccessTokenData(getAccessTokenData());
  }, [navigate]);

  return (
    <div>
      <ul>
        <li onClick={() => navigate("/")}>메인</li>
        <li onClick={() => navigate("/signup")}>회원가입</li>
        {accessTokenData ? <li onClick={() => navigate("/signin")}>로그아웃</li> : <li onClick={() => navigate("/signin")}>로그인</li>}
        {accessTokenData && <li onClick={() => navigate("/todo")}>투두리스트</li>}
      </ul>
    </div>
  );
};

export default Navigation;

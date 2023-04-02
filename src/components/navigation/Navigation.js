import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokenData } from "../../module/handleAccessToken";
import LoginButton from "./menu-buttons/LoginButton";
import SignUpButton from "./menu-buttons/SignUpButton";
import NavigateTodoButton from "./menu-buttons/NavigateTodoButton";

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
        <SignUpButton accessTokenData={accessTokenData} />
        <LoginButton accessTokenData={accessTokenData} />
        <NavigateTodoButton accessTokenData={accessTokenData} />
      </ul>
    </div>
  );
};

export default Navigation;

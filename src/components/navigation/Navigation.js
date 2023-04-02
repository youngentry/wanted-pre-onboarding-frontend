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
        <li onClick={() => navigate("/")}>
          <div>메인</div>
        </li>
        <li>
          <SignUpButton accessTokenData={accessTokenData} navigate={navigate} />
        </li>
        <li>
          <LoginButton accessTokenData={accessTokenData} navigate={navigate} />
        </li>
        <li>
          <NavigateTodoButton accessTokenData={accessTokenData} navigate={navigate} />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

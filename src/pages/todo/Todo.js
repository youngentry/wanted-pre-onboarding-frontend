import React, { useEffect, useState } from "react";
import { validateAccessToken } from "../../module/handleAccessToken";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const isValidAccessToken = validateAccessToken();
    setIsLoggedIn(isValidAccessToken);
    if (!isValidAccessToken) {
      window.alert("로그인을 해주세요.");
      navigate("/signin");
    }
  }, []);
  return <>{isLoggedIn && <div>투두페이지</div>}</>;
};

export default Todo;

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
      navigate("/signin");
    }
  }, [navigate]);

  return <div>{isLoggedIn && <h2>투두페이지</h2>}</div>;
};

export default Todo;

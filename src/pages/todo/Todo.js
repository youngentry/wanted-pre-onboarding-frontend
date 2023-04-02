import React, { useEffect } from "react";
import { validateAccessToken } from "../../module/handleAccessToken";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isValidAccessToken = validateAccessToken();
    if (!isValidAccessToken) {
      navigate("/signin");
    }
  }, [navigate]);
  return <div>투두페이지</div>;
};

export default Todo;

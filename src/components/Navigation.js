import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        <li onClick={() => navigate("/signup")}>회원가입</li>
        <li onClick={() => navigate("/signin")}>로그인</li>
      </ul>
    </div>
  );
};

export default Navigation;

import React, { useEffect } from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#");
  }, [navigate]);

  return (
    <div className="main">
      <h2>메인</h2>
      <p>메인입니다.</p>
    </div>
  );
};

export default Main;

import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateTodoButton = ({ accessTokenData }) => {
  const navigate = useNavigate();
  return <>{accessTokenData && <li onClick={() => navigate("/todo")}>투두리스트</li>}</>;
};

export default NavigateTodoButton;

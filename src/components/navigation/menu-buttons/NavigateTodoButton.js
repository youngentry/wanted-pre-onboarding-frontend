import React from "react";

const NavigateTodoButton = ({ accessTokenData, navigate }) => {
  return <>{accessTokenData && <div onClick={() => navigate("/todo")}>투두리스트</div>}</>;
};

export default NavigateTodoButton;

import React from "react";

const SignUpButton = ({ accessTokenData, navigate }) => {
  return <>{!accessTokenData && <div onClick={() => navigate("/signup")}>회원가입</div>}</>;
};

export default SignUpButton;

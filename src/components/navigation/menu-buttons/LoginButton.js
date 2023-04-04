import { removeAccessTokenData } from "../../../module/handleAccessToken";

const LoginButton = ({ accessTokenData, navigate, setAccessTokenData }) => {
  const handleClickSignIn = () => {
    navigate("/signin");
  };

  const handleClickLogout = () => {
    removeAccessTokenData();
    setAccessTokenData(null);
    window.alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return <>{accessTokenData ? <div onClick={handleClickLogout}>로그아웃</div> : <div onClick={handleClickSignIn}>로그인</div>}</>;
};

export default LoginButton;

/**
 * 발급받은 accessToken을 localStorage에 저장
 * @param {object} accessToken
 */
export const setAccessToken = (accessToken) => {
  localStorage.setItem("access_token", JSON.stringify({ accessToken }));
};

/**
 * localStorage에 저장되어 있는 accessToken을 반환
 * @param {object} accessToken
 */
export const getAccessTokenData = () => {
  const data = JSON.parse(localStorage.getItem("access_token"));
  return data;
};

/**
 * AccessToken의 유효성 검사
 * @returns {boolean}
 */
export const validateAccessToken = () => {
  const accessTokenData = getAccessTokenData();

  if (accessTokenData) {
    return true;
  }

  removeAccessTokenData();
  return false;
};

const removeAccessTokenData = () => {
  localStorage.removeItem("access_token");
  return false;
};

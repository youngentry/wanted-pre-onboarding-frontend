import React from "react";
import "./sign-up.scss";

const SignUp = () => {
  return (
    <div className="sign-up">
      <form className="sign-up-form__form">
        <label className="sign-up-form__label">
          이메일
          <input className="sign-up-form__input" type="email" data-testid="email-input" required />
        </label>
        <label className="sign-up-form__label">
          비밀번호
          <input className="sign-up-form__input" type="password" data-testid="password-input" required />
        </label>
        <button className="sign-up-form__submit-btn" type="submit" data-testid="signup-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;

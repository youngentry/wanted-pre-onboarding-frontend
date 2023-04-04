import React, { useEffect, useState } from "react";
import { validateAccessToken } from "../../module/handleAccessToken";
import { useNavigate } from "react-router-dom";
import "./todo.scss";

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

  return (
    <>
      {isLoggedIn && (
        <dvi className="todo">
          <h2 className="title">투두페이지</h2>
          <form action="">
            <input data-testid="new-todo-input" />
            <button data-testid="new-todo-add-button">추가</button>
          </form>
          <ul className="list">
            <li>
              <label>
                <input type="checkbox" />
                <span>TODO 1</span>
              </label>
              <button data-testid="modify-button">수정</button>
              <button data-testid="delete-button">삭제</button>
            </li>
          </ul>
        </dvi>
      )}
    </>
  );
};

export default Todo;

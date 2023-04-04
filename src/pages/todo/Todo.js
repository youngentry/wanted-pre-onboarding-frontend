import React, { useEffect, useState } from "react";
import { getAccessTokenData, validateAccessToken } from "../../module/handleAccessToken";
import { useNavigate } from "react-router-dom";
import "./todo.scss";
import axios from "axios";
import { API_BASE_URL } from "../../constants";

const Todo = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [todo, setTodo] = useState("");

  const handleCreateInputChange = (event) => {
    setTodo(event.target.value);
  };

  const createTodo = async (event) => {
    event.preventDefault();
    const { accessToken } = getAccessTokenData();
    const data = { todo };
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, data, { headers });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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
        <div className="todo">
          <h2 className="title">투두페이지</h2>
          <form onSubmit={createTodo}>
            <input data-testid="new-todo-input" type="text" value={todo} onChange={handleCreateInputChange} required />
            <button data-testid="new-todo-add-button" type="submit">
              추가
            </button>
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
        </div>
      )}
    </>
  );
};

export default Todo;

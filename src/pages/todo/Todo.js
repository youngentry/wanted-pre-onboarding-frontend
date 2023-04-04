import React, { useEffect, useState } from "react";
import { getAccessTokenData, validateAccessToken } from "../../module/handleAccessToken";
import { useNavigate } from "react-router-dom";
import "./todo.scss";
import axios from "axios";
import { API_BASE_URL } from "../../constants";

const Todo = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [createTodoInput, setCreateTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodoInput, setEditTodoInput] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  const handleCreateTodoInputChange = (event) => {
    setCreateTodoInput(event.target.value);
  };

  const submitTodo = async (event) => {
    event.preventDefault();
    const { accessToken } = getAccessTokenData();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, { todo: createTodoInput }, { headers });
      console.log(response);
      setTodoList([...todoList, response.data]);
      setCreateTodoInput("");
    } catch (error) {
      console.error(error);
    }
  };

  const editTodo = (event, data) => {
    event.preventDefault();
    setEditTodoInput(data.todo);
    setEditTodoId(data.id);
  };

  const handleEditTodoInputChange = (event) => {
    setEditTodoInput(event.target.value);
  };

  const cancelEditTodo = () => {
    setEditTodoId("");
    setEditTodoId(null);
  };

  const deleteTodo = async (event, data) => {
    event.preventDefault();
    const { accessToken } = getAccessTokenData();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.delete(`${API_BASE_URL}/todos/${data.id}`, { headers });
      console.log(response);
      const deletedTodoList = todoList.filter((item) => item.id !== data.id);
      setTodoList([...deletedTodoList]);
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

  useEffect(() => {
    (async () => {
      const { accessToken } = getAccessTokenData();
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await axios.get(`${API_BASE_URL}/todos`, { headers });
      console.log(response);
      setTodoList([...response.data]);
    })();
  }, []);

  return (
    <>
      {isLoggedIn && (
        <div className="todo">
          <h2 className="title">투두페이지</h2>
          <div>
            <form onSubmit={submitTodo}>
              <input data-testid="new-todo-input" type="text" value={createTodoInput} onChange={handleCreateTodoInputChange} required />
              <button data-testid="new-todo-add-button" type="submit">
                추가
              </button>
            </form>
          </div>
          <ul className="list">
            {todoList.map((data) => {
              return (
                <li key={data.id}>
                  <label>
                    <input type="checkbox" />
                  </label>
                  {editTodoId && editTodoId === data.id ? (
                    <div>
                      <input data-testid="modify-input" type="text" value={editTodoInput} onChange={handleEditTodoInputChange} required />
                      <button data-testid="submit-button">제출</button>
                      <button data-testid="cancel-button" onClick={cancelEditTodo}>
                        취소
                      </button>
                    </div>
                  ) : (
                    <div>
                      <span>{data.todo}</span>
                      <button data-testid="modify-button" onClick={(event) => editTodo(event, data)}>
                        수정
                      </button>
                      <button data-testid="delete-button" onClick={(event) => deleteTodo(event, data)}>
                        삭제
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Todo;

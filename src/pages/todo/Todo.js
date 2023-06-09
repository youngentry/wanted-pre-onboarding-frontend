import React, { useEffect, useState } from "react";
import { getAccessTokenData, validateAccessToken } from "../../module/handleAccessToken";
import { useNavigate } from "react-router-dom";
import "./Todo.scss";
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

  const createTodo = async (event) => {
    event.preventDefault();
    const { accessToken } = getAccessTokenData();
    const body = { todo: createTodoInput };
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, body, { headers });
      setTodoList([...todoList, response.data]);
      setCreateTodoInput("");
    } catch (error) {
      console.error(error);
    }
  };

  const openEditTodo = (event, data) => {
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

  const updateTodoApi = async (id, body) => {
    const { accessToken } = getAccessTokenData();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.put(`${API_BASE_URL}/todos/${id}`, body, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const updateTodo = async (event, data) => {
    event.preventDefault();
    const body = { todo: editTodoInput, isCompleted: data.isCompleted };
    const updatedTodo = await updateTodoApi(data.id, body);
    if (updatedTodo) {
      const updatedTodoList = todoList.map((item) => (item.id === data.id ? updatedTodo : item));
      setTodoList(updatedTodoList);
      setEditTodoInput("");
      setEditTodoId(null);
    }
  };

  const updateCheck = async (event, data) => {
    event.preventDefault();
    const body = { todo: data.todo, isCompleted: !data.isCompleted };
    const updatedTodo = await updateTodoApi(data.id, body);
    if (updatedTodo) {
      const updatedTodoList = todoList.map((item) => (item.id === data.id ? updatedTodo : item));
      setTodoList(updatedTodoList);
    }
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
      try {
        const accessTokenData = getAccessTokenData();
        if (!accessTokenData) {
          return;
        }
        const { accessToken } = accessTokenData;
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };
        const response = await axios.get(`${API_BASE_URL}/todos`, { headers });
        setTodoList([...response.data]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      {isLoggedIn && (
        <div className="todo">
          <h2 className="title">투두페이지</h2>
          <div className="create-todo">
            <form onSubmit={createTodo}>
              <input data-testid="new-todo-input" type="text" value={createTodoInput} onChange={handleCreateTodoInputChange} required />
              <button data-testid="new-todo-add-button" type="submit">
                추가
              </button>
            </form>
          </div>
          <ul className="list">
            {todoList.map((data) => {
              return (
                <li key={data.id} className="item">
                  <input type="checkbox" checked={data.isCompleted} onChange={(event) => updateCheck(event, data)} />
                  {editTodoId && editTodoId === data.id ? (
                    <form onSubmit={(event) => updateTodo(event, data)}>
                      <input className="modify-input" data-testid="modify-input" type="text" value={editTodoInput} onChange={handleEditTodoInputChange} required />
                      <button data-testid="submit-button">제출</button>
                      <button data-testid="cancel-button" onClick={cancelEditTodo}>
                        취소
                      </button>
                    </form>
                  ) : (
                    <div>
                      <span>{data.todo}</span>
                      <button data-testid="modify-button" onClick={(event) => openEditTodo(event, data)}>
                        수정
                      </button>
                      <button className="delete" data-testid="delete-button" onClick={(event) => deleteTodo(event, data)}>
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

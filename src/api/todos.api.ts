import axios from "axios";
import { Todo } from "../models";

const baseUrl = process.env.REACT_APP_BACKEND;
const todosUrl = `${baseUrl}/todos`;

export const getTodos = () => axios.get<Array<Todo>>(todosUrl);

export const readTodo = (id: number) => axios.get<Todo>(`${todosUrl}/${id}`);

export const createTodo = (payload: Todo) => axios.post(`${todosUrl}`, payload);

export const updateTodo = (id: number, payload: Todo) =>
  axios.patch(`${todosUrl}/${id}`, payload);

export const deleteTodo = (id: number) => axios.delete(`${todosUrl}/${id}`);

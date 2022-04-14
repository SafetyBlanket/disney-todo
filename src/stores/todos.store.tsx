import React from "react";
import { Todo } from "../models";

const todos: Todo[] = [];

export const TodoContext = React.createContext(todos);

interface TodosStoreProps {
  children?: any;
}
const TodosStore = ({ children }: TodosStoreProps) => {
  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
};

export default TodosStore;

import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import { Box, Card, Paper } from "@mui/material";
import {
  HeaderComponent,
  InstructionsComponent,
  TodoFormComponent,
  TodoListComponent,
} from "./components";
import { Todo } from "./models";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./api";
import { TodoContext } from "./stores/todos.store";

function App() {
  const ctx = useContext(TodoContext);
  const [todos, setTodos] = useState<Array<Todo>>(ctx);

  useEffect(() => {
    getTodos().then((response) => setTodos(response.data));
  }, []);

  const createTodoHandler = async (todo: Todo) =>
    await createTodo(todo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error("Failed creating todo", { todo, error }));

  const updateTodoHandler = async (id: number, todo: Todo) =>
    await updateTodo(id, todo)
      .then((response) => {
        const list = [...todos].filter((item) => item.id !== id); // remove old item
        setTodos([...list, todo]); // Add new todo
      })
      .catch((error) => console.error(error));

  const deleteTodoHandler = async (id: number) =>
    await deleteTodo(id)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) =>
        console.error(`Failed deleting todo with id: ${id}`, error)
      );

  return (
    <Box component="div" className="App p-4">
      <HeaderComponent title="My ToDo App" />
      <Box className="mt-[65px] h-full">
        <Paper className="p-12 m-4 h-full flex flex-col gap-4">
          {/* Checklist */}
          <Card className="bg-blue-100">
            <InstructionsComponent />
          </Card>

          {/* Form */}
          <Card className="bg-green-100">
            <TodoFormComponent createHandler={createTodoHandler} />
          </Card>

          <Card className="bg-purple-100">
            <TodoListComponent
              todoList={todos}
              updateTodoHandler={updateTodoHandler}
              deleteTodoHandler={deleteTodoHandler}
            />
          </Card>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;

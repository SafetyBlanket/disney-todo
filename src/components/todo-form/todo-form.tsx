import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { Todo } from "../../models";

interface TodoFormComponentProps {
  createHandler: Function;
}
const TodoFormComponent = ({ createHandler }: TodoFormComponentProps) => {
  const [todo, setTodo] = useState<Todo>({
    name: "",
    description: "",
    complete: false,
  });
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await createHandler(todo);
    } catch (error) {
      console.error(`todo-form: error creating todo`);
    } finally {
      setTodo({
        name: "",
        description: "",
        complete: false,
      });
    }
  };
  return (
    <Box
      component="form"
      className="p-4 flex flex-col gap-4"
      onSubmit={onSubmitHandler}
    >
      <Typography component="h2">Fill me out to create a Todo!</Typography>
      {/* Name */}
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={todo.name}
        onChange={(event) =>
          setTodo({ ...todo, name: event.currentTarget.value })
        }
        required
      />
      {/* Description */}
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={todo.description}
        onChange={(event) =>
          setTodo({ ...todo, description: event.currentTarget.value })
        }
      />
      <Button variant="text" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default TodoFormComponent;

import React from "react";
import { Box } from "@mui/material";
import { DeleteRounded } from "@mui/icons-material";
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridRowId,
} from "@mui/x-data-grid";
import { Todo } from "../../models";

interface TodoListComponentProps {
  todoList: Todo[];
  updateTodoHandler: Function;
  deleteTodoHandler: Function;
}
const TodoListComponent = ({
  todoList,
  updateTodoHandler,
  deleteTodoHandler,
}: TodoListComponentProps) => {
  const handleDeleteClick = async (id: GridRowId) =>
    await deleteTodoHandler(id as number);

  const columns: GridColumns = [
    { field: "id", headerName: "ID", type: "number", minWidth: 110 },
    { field: "name", headerName: "Name", editable: true, minWidth: 250 },
    {
      field: "description",
      headerName: "Description",
      editable: true,
      minWidth: 350,
    },
    {
      field: "complete",
      headerName: "Complete?",
      editable: true,
      type: "boolean",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteRounded color="error" />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={todoList}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[5]}
          onCellEditCommit={async (params: any) =>
            updateTodoHandler(params.row.id, {
              ...params.row,
              [params.field]: params.value,
            })
          }
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
};

export default TodoListComponent;

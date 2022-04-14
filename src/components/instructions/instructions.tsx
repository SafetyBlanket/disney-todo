import React from "react";
import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const InstructionsComponent = () => {
  const instructions: string[] = [
    "Create a Todo - Fill out the form and submit (green)",
    "Edit a Todo - Click on any cell in the table below to edit a todo (Some fields cannot be edited)",
    "Delete a Todo - Click on the trash can at the end of each row in the table",
    'Mark a Todo complete - Edit the cell with the header "complete?" to be productive',
  ];

  return (
    <Box>
      <List>
        {instructions.map((instruction) => (
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary={instruction} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default InstructionsComponent;

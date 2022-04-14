import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

interface HeaderComponentProps {
  title: string;
}
const HeaderComponent = ({ title }: HeaderComponentProps) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography component="h2" className="text-2xl">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;

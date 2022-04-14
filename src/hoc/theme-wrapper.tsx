import React from "react";
import { StyledEngineProvider } from "@mui/material";

interface ThemeWrapperComponentProps {
  children?: any;
}
const ThemeWrapper = ({ children }: ThemeWrapperComponentProps) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default ThemeWrapper;

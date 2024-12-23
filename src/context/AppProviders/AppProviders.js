import React from "react";
import { ThemeProvider } from "../ThemeContext";
import { AuthProvider } from "../AuthContext";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default AppProviders;

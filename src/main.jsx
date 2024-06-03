import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);

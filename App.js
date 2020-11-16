import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./Navigation/AppNavigator";
import { Provider as AuthProvider } from "./src/context/authContext";
import { setNavigator } from "./src/navigationRef";

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

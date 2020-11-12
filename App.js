import React from "react";

import { createAppContainer } from "react-navigation";
import AppNavigator from "./Navigation/AppNavigator";
const App = createAppContainer(AppNavigator);

export default () => {
  return <App />;
};

import SignInScreen from "../src/Screens/SignInScreen";
import { createStackNavigator } from "react-navigation-stack";
export default AppNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
  },
  {
    initialRouteName: "SignIn",
    defaultNavigationOptions: {
      title: "Covid Fighter",
    },
  }
);

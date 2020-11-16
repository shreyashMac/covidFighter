import SignInScreen from "../src/Screens/SignInScreen";
import SignUpScreen from "../src/Screens/SignUpScreen";
import { createStackNavigator } from "react-navigation-stack";
export default AppNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,

      navigationOptions: {
        headerShown: true,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
  },
  {
    initialRouteName: "SignIn",
    defaultNavigationOptions: {
      title: "Covid Fighter",
    },
  }
);

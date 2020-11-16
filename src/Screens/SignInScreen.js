import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthForm from "../Components/AuthForm";

const SignInScreen = ({ navigation }) => {
  const signIn = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <AuthForm
        formName="SIGN IN"
        actionName="Sign In"
        formMessage="Don't have an account? Create Here !!"
        formAction={signIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SignInScreen;

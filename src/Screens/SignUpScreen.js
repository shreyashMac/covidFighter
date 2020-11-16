import React from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "../Components/AuthForm";

const SignUpScreen = ({ navigation }) => {
  const signOut = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <AuthForm
        formName="SIGN OUT"
        actionName="Sign Out"
        formMessage="Already have an account? Sign In !!"
        formAction={signOut}
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
export default SignUpScreen;

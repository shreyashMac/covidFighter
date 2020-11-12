import React, { useContext } from "react";
import { View } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";

const AuthForm = () => {
  const { emailChange, state, passwordChange } = useContext(AuthContext);
  const { email, password } = state;
  console.log(email + password);

  const onEmailchange = (email) => {
    emailChange({ email: email });
  };

  const onPasswordChange = (pass) => {
    passwordChange({ password: pass });
  };

  return (
    <View>
      <Card containerStyle={{ width: 400 }}>
        <Card.Title> SIGN IN</Card.Title>
        <Input placeholder="email" value={email} onChangeText={onEmailchange} />
        <Input
          placeholder="password"
          value={password}
          secureTextEntry
          onChangeText={onPasswordChange}
        />
        <Card.Divider />
        <Button title="Sign In" type="solid" raised={true} />
      </Card>
    </View>
  );
};

export default AuthForm;

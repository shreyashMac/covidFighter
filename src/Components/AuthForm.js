import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Card, Button, Input, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";
import { navigate } from "../navigationRef";

const AuthForm = ({ formName, actionName, formMessage, formAction }) => {
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
        <Card.Title> {formName}</Card.Title>
        <Input placeholder="email" value={email} onChangeText={onEmailchange} />
        <Input
          placeholder="password"
          value={password}
          secureTextEntry
          onChangeText={onPasswordChange}
        />
        <Card.Divider />
        <Button title={actionName} type="solid" raised={true} />
        <TouchableOpacity onPress={formAction}>
          <Text style={{ fontSize: 15, marginTop: 5, padding: 1 }}>
            {formMessage}
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default AuthForm;

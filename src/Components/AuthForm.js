import React from "react";
import { View } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import axios from "../api/server";

const AuthForm = () => {
  return (
    <View>
      <Card containerStyle={{ width: 400 }}>
        <Card.Title> SIGN IN</Card.Title>
        <Input placeholder="email" />
        <Input placeholder="password" secureTextEntry />
        <Card.Divider />
        <Button
          title="Sign In"
          type="solid"
          raised={true}
          onPress={() => {
            axios
              .get("/login", {
                email: "admin@admin.com",
                password: "admin",
              })
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }}
        />
      </Card>
    </View>
  );
};

export default AuthForm;

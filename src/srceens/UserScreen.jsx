import { View, Text } from "react-native";
import React from "react";
import { Appbar, Button } from "react-native-paper";
import useAuthStore from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const UserScreen = () => {
  const { fullName, logout } = useAuthStore();
  const navigation = useNavigation();
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={`Welcome ${fullName}`} />
        <Appbar.Action
          icon="logout"
          onPress={() => {
            logout();
            alert("Logged out successfully");
            navigation.navigate("Select");
          }}
        />
      </Appbar.Header>
      <Button
        onPress={() => {
          navigation.navigate("Hire", { name: "PLUMBER" });
        }}
      >
        Hire Plumber
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("Hire", { name: "CARPENTER" });
        }}
      >
        Hire Carpenter
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("Hire", { name: "PAINTER" });
        }}
      >
        Hire Painter
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("Hire", { name: "ELECTRICIAN" });
        }}
      >
        Hire Electrician
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("Hire", { name: "CONSTRUCTOR" });
        }}
      >
        Hire Constructor
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("UserHirings");
        }}
      >
        View Hirings
      </Button>
    </View>
  );
};

export default UserScreen;

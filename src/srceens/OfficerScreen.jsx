import { View, Text } from "react-native";
import React from "react";
import { Appbar, Button } from "react-native-paper";
import useAuthStore from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const OfficerScreen = () => {
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
      <View style={{ margin: 20 }}>
        <Button onPress={() => navigation.navigate("ViewOfficerHiring")}>
          {" "}
          View Hirings
        </Button>
      </View>
    </View>
  );
};

export default OfficerScreen;

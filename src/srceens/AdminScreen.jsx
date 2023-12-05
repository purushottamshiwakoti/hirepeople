import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const AdminScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate("ViewHiring");
        }}
      >
        View Hiring
      </Button>
    </View>
  );
};

export default AdminScreen;

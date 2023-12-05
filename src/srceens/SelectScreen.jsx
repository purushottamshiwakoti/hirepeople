import { ScrollView, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SelectScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ margin: 20 }}>
      <Card>
        <Card.Title />

        <Card.Cover
          source={{
            uri: "https://i.pinimg.com/originals/c2/d1/ed/c2d1ed0716c40a008a1f6212ff634d48.jpg",
          }}
        />
        <Card.Actions>
          <Button
            onPress={() => {
              navigation.navigate("OfficerLogin");
            }}
          >
            Login as Officer
          </Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title />

        <Card.Cover
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
          }}
        />
        <Card.Actions>
          <Button
            onPress={() => {
              navigation.navigate("UserLogin");
            }}
          >
            Login as User
          </Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title />

        <Card.Cover
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2206/2206368.png",
          }}
        />
        <Card.Actions>
          <Button
            onPress={() => {
              navigation.navigate("AdminLogin");
            }}
          >
            Login as Admin
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default SelectScreen;

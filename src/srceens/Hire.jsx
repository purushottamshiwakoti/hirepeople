import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Appbar, Button } from "react-native-paper";
import useAuthStore from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

const Hire = ({ route }) => {
  const [officer, setOfficer] = useState([]);
  const { fullName, logout, id } = useAuthStore();
  const navigation = useNavigation();
  useEffect(() => {
    const fetchOfficer = async () => {
      const response = await axios.get(
        "https://hiringapp.vercel.app/api/admin/signup"
      );
      const { officers } = response.data;
      setOfficer(officers);
    };
    fetchOfficer();
  }, []);
  const { name } = route.params;

  const handleHire = async (officerId) => {
    try {
      const response = await axios.post(
        "https://hiringapp.vercel.app/api/hire",
        {
          officerId,
          userId: id,
        }
      );
      const { message } = response.data;
      alert(message);
      navigation.goBack();
    } catch (error) {
      console.error(error);
      alert("SOmething went wrong");
    }
  };
  return (
    <ScrollView style={{ margin: 10 }}>
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
      <Text style={{ fontSize: 20 }}>Hire {name}</Text>
      {officer.map((item) => (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {item.role === name ? (
            <>
              <List.Item
                title={item.fullName}
                description={item.role}
                left={(props) => <List.Icon {...props} icon="bell" />}
              />
              <Button onPress={() => handleHire(item.id)}>Hire</Button>
            </>
          ) : (
            <Text style={{ margin: 20 }}>Please come back soon</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default Hire;

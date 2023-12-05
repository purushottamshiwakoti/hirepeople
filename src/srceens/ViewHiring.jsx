import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, Button } from "react-native-paper";
import useAuthStore from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { List } from "react-native-paper";

const ViewHiring = () => {
  const { fullName, logout, id } = useAuthStore();
  console.log(id);
  const navigation = useNavigation();
  const [hires, setHires] = useState([]);

  useEffect(() => {
    const fetchHirings = async () => {
      const response = await axios.get(`https://hiringapp.vercel.app/api/hire`);
      const { hire } = response.data;
      setHires(hire);
    };
    fetchHirings();
  }, []);
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
        <Text>Hires</Text>
        {hires.length > 1 ? (
          hires.map((item) => (
            <List.Item
              key={item.id}
              title={`Hired by ${item.user.fullName} Hired to ${item.officer.fullName}`}
              description={`Hired Date: ${item.createdAt.split("T")[0]}`}
              left={(props) => <List.Icon {...props} icon="bell" />}
            />
          ))
        ) : (
          <Text>No hires yet!</Text>
        )}
      </View>
    </View>
  );
};

export default ViewHiring;

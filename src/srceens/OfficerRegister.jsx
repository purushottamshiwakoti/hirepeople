import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";

import {
  Provider as PaperProvider,
  DefaultTheme,
  HelperText,
} from "react-native-paper";
import { Button } from "react-native-paper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import useAuthStore from "../hooks/useAuth";
import SelectDropdown from "react-native-select-dropdown";

const countries = [
  "PLUMBER",
  "CARPENTER",
  "PAINTER",
  "ELECTRICIAN",
  "CONSTRUCTOR",
];

const OfficerRegister = () => {
  const [email, setEmail] = React.useState("");
  const [role, setRoles] = useState("");
  const [fullName, setFulName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { setUserName, setUserEmail, setId, setRole } = useAuthStore();

  const emailError = () => {
    return !email.includes("@");
  };
  const passwordError = () => {
    return password.length !== 8;
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#8ACDD7", // Change primary color (will affect outline border color)
    },
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://hiringapp.vercel.app/api/officer/signup",
        { fullName, email, password, role }
      );
      const { message, admin } = response.data;
      console.log(response.data);
      Toast.show({
        type: "success",
        text1: message,
      });
      setUserName(admin.fullName);
      setUserEmail(admin.email);
      setId(admin.id);
      setRole("officer");
      navigation.navigate("OfficerScreen");
      alert("Successfully registered");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Invalid Credentials",
      });
      alert("Something went wrong");

      setPassword("");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#F4F5F6",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 190,
          }}
        >
          <View
            style={{
              margin: 30,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              backgroundColor: "white",

              padding: 20,
              width: "90%",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#507DB4",
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              Register New Account
            </Text>
            <TextInput
              style={{ marginTop: 20 }}
              label="Full Name"
              placeholder="Enter your fullname here"
              value={fullName}
              onChangeText={(text) => setFulName(text)}
              mode="outlined"
              autoCapitalize="none"
            />
            <TextInput
              label="Email"
              placeholder="Enter your email here"
              value={email}
              onChangeText={(text) => setEmail(text)}
              mode="outlined"
              autoCapitalize="none"
            />
            {email.length > 0 && (
              <HelperText type="error" visible={emailError()}>
                Email address is invalid!
              </HelperText>
            )}

            <TextInput
              style={{ marginTop: 1 }}
              label="Password"
              placeholder="Enter your password here"
              value={password}
              onChangeText={(text) => setPassword(text)}
              mode="outlined"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              right={
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            {password.length > 0 ||
              (password.length > 8 && (
                <HelperText type="error" visible={passwordError()}>
                  Password must be at least 8 characters
                </HelperText>
              ))}
            <View style={{ margin: 10 }}>
              <Text>Select Role</Text>
              <View style={{ marginTop: 10 }}>
                <SelectDropdown
                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    setRoles(selectedItem);
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
              </View>
            </View>

            <Button
              style={{
                marginTop: 20,
              }}
              disabled={emailError() || loading}
              icon="login"
              mode="contained"
              onPress={() => handleSubmit()}
            >
              Register
            </Button>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 10,
                fontSize: 17,
                textAlign: "right",
                color: "#507DB4",
              }}
              onPress={() => handleLogin()}
            >
              Already have an account Login
            </Text>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

export default OfficerRegister;

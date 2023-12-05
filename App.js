import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectScreen from "./src/srceens/SelectScreen";
import UserLogin from "./src/srceens/UserLogin";
import AdminLogin from "./src/srceens/AdminLogin";
import OfficerLogin from "./src/srceens/OfficerLogin";
import AdminScreen from "./src/srceens/AdminScreen";
import UserRegister from "./src/srceens/UserRegister";
import UserScreen from "./src/srceens/UserScreen";
import OfficerScreen from "./src/srceens/OfficerScreen";
import OfficerRegister from "./src/srceens/OfficerRegister";
import useAuthStore from "./src/hooks/useAuth";
import Hire from "./src/srceens/Hire";
import ViewOfficerHiring from "./src/srceens/ViewOfficerHiring";
import UserHirings from "./src/srceens/UserHirings";
import ViewHiring from "./src/srceens/ViewHiring";

const Stack = createNativeStackNavigator();

export default function App() {
  const { id, role } = useAuthStore();
  console.log({ role });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!id ? (
          <Stack.Group>
            <Stack.Screen name="Select" component={SelectScreen} />
            <Stack.Screen name="UserLogin" component={UserLogin} />
            <Stack.Screen name="AdminLogin" component={AdminLogin} />
            <Stack.Screen name="OfficerLogin" component={OfficerLogin} />
            <Stack.Screen name="UserRegister" component={UserRegister} />
            <Stack.Screen name="OfficerRegister" component={OfficerRegister} />
          </Stack.Group>
        ) : role == "user" ? (
          <Stack.Group>
            <Stack.Screen
              name="UserScreen"
              component={UserScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hire"
              component={Hire}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserHirings"
              component={UserHirings}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        ) : role == "admin" ? (
          <Stack.Group>
            <Stack.Screen name="AdminScreen" component={AdminScreen} />
            <Stack.Screen
              name="ViewHiring"
              component={ViewHiring}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="OfficerScreen"
              options={{ headerShown: false }}
              component={OfficerScreen}
            />

            <Stack.Screen
              name="ViewOfficerHiring"
              options={{ headerShown: false }}
              component={ViewOfficerHiring}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

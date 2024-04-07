import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Home from "./screens/Home";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

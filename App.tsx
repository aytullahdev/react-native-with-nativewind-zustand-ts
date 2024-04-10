import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import CreateGroupProfile from "./screens/CreateGroupProfile";
import CreateSingleProfile from "./screens/CreateSingleProfile";
import Home from "./screens/Home";
import OnBoardingScreens from "./screens/OnboardingScreens";
import { getItem } from "./utils/asyncStorage";
export type RootStackParamList = {
  Home: undefined;
  Onboard: undefined;
  CreateSingleProfile: undefined;
  CreateGroupProfile: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  const [onboarding, setOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const onboardingValue = await getItem("onboarding");
      if (onboardingValue === "true") {
        setOnboarding(true);
      } else {
        setOnboarding(false);
      }
    };
    checkOnboarding();
  }, []);
  if (onboarding === null) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={onboarding ? "Home" : "Onboard"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboard" component={OnBoardingScreens} />
        <Stack.Screen
          name="CreateSingleProfile"
          component={CreateSingleProfile}
        />
        <Stack.Screen
          name="CreateGroupProfile"
          component={CreateGroupProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

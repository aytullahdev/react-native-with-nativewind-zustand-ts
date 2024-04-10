import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import OnBoardingScreens from "./screens/OnboardingScreens";
import { getItem } from "./utils/asyncStorage";
const Stack = createNativeStackNavigator();
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
        initialRouteName={onboarding ? "Home" : "onboard"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="onboard" component={OnBoardingScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

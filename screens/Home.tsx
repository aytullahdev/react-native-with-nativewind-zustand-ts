import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { setItem } from "../utils/asyncStorage";
const { width, height } = Dimensions.get("window");
export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="w-full h-full">
      <View className="w-full h-full">
        <LottieView
          style={{ width: 500, height: 500 }}
          autoPlay
          loop
          source={require("../assets/confot.json")}
        />
        <Text className="text-3xl text-center font-bold">Home</Text>
        <TouchableOpacity
          onPress={async () => {
            await setItem("onboarding", "false");
            navigation.navigate("onboard");
          }}
        >
          <Text className="text-center text-blue-500 text-sm">Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

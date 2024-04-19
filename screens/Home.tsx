import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../App";
import { SafeView } from "./SafeView";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;
export default function Home({ navigation }: Props) {
  return (
    <SafeView>
      <View className="w-full h-full bg-green-500/30">
        <Text className="text-3xl text-center text-black uppercase mt-20 font-semibold">
          Welcome to Study Tracker
        </Text>
        <Text className="text-lg text-justify text-gray-600 px-6 mt-5">
          Track your academic progress, identify weaknesses, and improve your
          study habits with Study Tracker.
        </Text>
        <View className="flex space-y-5 mt-5 ">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateSingleProfile");
            }}
            className="bg-black w-[250] flex justify-center items-center rounded-full mx-auto   px-5 py-2"
          >
            <Text className="text-white text-xl">Create a single profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateSingleProfile");
            }}
            className="bg-blue-500 w-[250] flex justify-center items-center rounded-full mx-auto   px-5 py-2"
          >
            <Text className="text-white text-xl">Create a group profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeView>
  );
}

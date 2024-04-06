import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type FeaturedBoardProps = NativeStackNavigationProp<RootStackParamList, "News">;
export default function FeaturedBoard({
  item,
}: {
  item: { category: string; title: string; description: string };
}) {
  const navigation = useNavigation<FeaturedBoardProps>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("News");
      }}
      className="py-2 border border-gray-200 h-[160] w-[250] rounded-lg p-4 "
    >
      <Text className="font-bold text-sm  ">{item.title}</Text>
      <Text className="text-gray-600 text-xs text-justify  py-3">
        {item.description}
      </Text>
    </TouchableOpacity>
  );
}

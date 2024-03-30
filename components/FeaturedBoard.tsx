import { View, Text } from "react-native";
import React from "react";

export default function FeaturedBoard({
  item,
}: {
  item: { category: string; title: string; description: string };
}) {
  return (
    <View className="py-2 border border-gray-200 h-[160] w-[250] rounded-lg p-4 ">
      <Text className="font-bold text-sm  ">{item.title}</Text>
      <Text className="text-gray-600 text-xs text-justify  py-3">
        {item.description}
      </Text>
    </View>
  );
}

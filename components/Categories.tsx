import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useCategoryStore from "../store/useCategoryStore";

export default function Categories() {
  const { categories, selectedCategory, setSelectedCategory } =
    useCategoryStore();
  return (
    <View className=" mt-2 ">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {categories.map((category, index) => (
          <View
            key={index}
            className={`flex-row items-center mr-2 p-2 rounded-full border border-gray-300 ${
              selectedCategory === category ? "bg-red-500 border-0 " : ""
            }`}
          >
            <TouchableOpacity onPress={() => setSelectedCategory(category)}>
              <Text
                className={`text-sm ${
                  selectedCategory === category ? "text-white" : "text-black"
                }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

import { View, Text, ScrollView } from "react-native";
import React from "react";
import FeaturedBoard from "./FeaturedBoard";
import useCategoryStore from "../store/useCategoryStore";

export default function SelectedFeature() {
  const getArticlesByCategory = useCategoryStore(
    (state) => state.getArticlesByCategory
  );
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const filteredData = getArticlesByCategory(selectedCategory);
  return (
    <View>
      <Text className="font-bold text-lg uppercase py-2 ">
        {selectedCategory}
      </Text>
      {/* Filter category and show FeatureCard */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 1 }}
      >
        <View className=" flex-row ">
          {filteredData.map((item, index) => (
            <View key={index} className=" mr-4 ">
              <FeaturedBoard key={index} item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

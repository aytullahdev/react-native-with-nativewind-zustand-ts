import { View, Text, ScrollView } from "react-native";
import React from "react";
import FeaturedBoard from "./FeaturedBoard";
import useCategoryStore from "../store/useCategoryStore";

export default function FeaturedRow({ category }: { category: string }) {
  const { getArticlesByCategory, selectedCategory } = useCategoryStore();
  const filteredData = getArticlesByCategory(category);
  if (category === selectedCategory) return <></>;
  return (
    <View>
      <Text className="font-bold text-lg uppercase py-2 ">{category}</Text>
      {/* Filter category and show FeatureCard */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 1 }}
      >
        <View className=" flex-row ">
          {filteredData.map((item, index) => (
            <View key={index} className={`mr-2`}>
              <FeaturedBoard key={index} item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

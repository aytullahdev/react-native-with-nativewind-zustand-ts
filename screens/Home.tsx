import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  IconAdjustments,
  IconAdjustmentsHorizontal,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import useCategoryStore from "../store/useCategoryStore";
import SelectedFeature from "../components/SelectedFeature";
import { useEffect } from "react";
import { getCategory } from "../api";

const HomeScreen = () => {
  const categories = useCategoryStore((state) => state.categories);
  const setCategories = useCategoryStore((state) => state.setCategories);
  useEffect(() => {
    getCategory().then((data) => {
      const titles = data.map((category) => category.title);
      setCategories(titles);
    });
  }, []);
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      {/* Search Bar */}
      <View className=" flex-row items-center space-x-2 px-4 pb-2 mt-2">
        <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-300 ">
          <IconSearch color={"gray"} />
          <TextInput placeholder="Topic" className="ml-2 flex-1" />
        </View>
        <View className="p-1 rounded-full bg-red-500 ">
          <IconAdjustments color={"white"} />
        </View>
      </View>

      {/* Category */}

      <ScrollView
        showsHorizontalScrollIndicator
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories />
      </ScrollView>
      {/* Selected Featuer */}

      {/* Features */}
      <ScrollView className="px-1">
        <View className="">
          <SelectedFeature />
        </View>
        {categories.map((category, index) => (
          <FeaturedRow key={index} category={category} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

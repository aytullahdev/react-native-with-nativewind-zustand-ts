import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function News() {
  const navigation = useNavigation();
  const router = useRoute();
  const par = router.params;
  console.log(par);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>News</Text>
    </SafeAreaView>
  );
}

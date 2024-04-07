import { Text, View } from "react-native";
import React, { Component } from "react";
import Animated, { FadeIn } from "react-native-reanimated";
export default class Home extends Component {
  render() {
    return (
      <Animated.View entering={FadeIn.duration(1000).delay(100)}>
        <Text className="text-black">Home</Text>
      </Animated.View>
    );
  }
}

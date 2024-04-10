import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { Dimensions, Image, SafeAreaView, Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { setItem } from "../utils/asyncStorage";
const { width, height } = Dimensions.get("window");
export default function OnBoardingScreens() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="w-full h-full">
      <View className="w-full h-full">
        <Onboarding
          containerStyles={{ paddingHorizontal: 0 }}
          onDone={async () => {
            await setItem("onboarding", "true");
            navigation.navigate("Home");
          }}
          onSkip={async () => {
            await setItem("onboarding", "true");
            navigation.navigate("Home");
          }}
          pages={[
            {
              backgroundColor: "#fff",
              image: (
                <View className="flex justify-center w-full h-full">
                  <Text className="pb-10 text-center text-3xl font-semibold uppercase  text-black">
                    Welcome to Study Tracker
                  </Text>

                  <LottieView
                    style={{
                      width: width * 0.9,
                      height: width,
                    }}
                    source={require("../assets/study-group.json")}
                    autoPlay
                    loop
                  />
                  <Text className=" text-justify text-lg px-6 text-gray-600">
                    Track your academic progress, identify weaknesses, and
                    improve your study habits with Study Tracker.
                  </Text>
                </View>
              ),
              title: "",
              subtitle: "",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View className="flex justify-center w-full h-full">
                  <Text className="pb-10 text-center text-3xl font-semibold uppercase  text-black">
                    Create Your Profile
                  </Text>

                  <Image
                    style={{ width: width * 0.9, height: width }}
                    className=" mx-auto"
                    source={require("../assets/create-profile.png")}
                  />
                  <Text className=" text-justify text-lg px-6  text-gray-700">
                    Let's get started by creating your student profile. Enter
                    your name, grade, and subjects you're studying.
                  </Text>
                </View>
              ),
              title: "",
              subtitle: "",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View className="flex justify-center w-full h-full">
                  <Text className="pb-10 text-center text-3xl font-semibold uppercase  text-black">
                    Track Your Progress
                  </Text>

                  <Image
                    style={{
                      width: width * 0.9,
                      height: width,
                    }}
                    source={require("../assets/progress.png")}
                  />
                  <Text className=" text-justify text-lg px-6  text-gray-700">
                    See your progress in each subject with detailed analytics.
                    Visualize your growth over time.
                  </Text>
                </View>
              ),
              title: "",
              subtitle: "",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View className="flex justify-center w-full h-full">
                  <Text className="pb-10 text-center text-3xl font-semibold uppercase  text-black">
                    Identify Weaknesses
                  </Text>

                  <LottieView
                    style={{
                      width: width * 0.9,
                      height: width,
                    }}
                    source={require("../assets/study-group.json")}
                    autoPlay
                    loop
                  />
                  <Text className=" text-justify text-lg px-6  text-gray-700">
                    Understand your weaknesses and areas needing improvement
                    based on your performance.
                  </Text>
                </View>
              ),
              title: "",
              subtitle: "",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View className="flex justify-center w-full h-full">
                  <Text className="pb-10 text-center text-3xl font-semibold uppercase  text-black">
                    Receive Recommendations
                  </Text>

                  <Image
                    style={{
                      width: width * 0.9,
                      height: width,
                    }}
                    source={require("../assets/recom.png")}
                  />
                  <Text className=" text-justify text-lg px-6  text-gray-700">
                    Receive personalized study plans and recommended study
                    materials tailored to your needs.
                  </Text>
                </View>
              ),
              title: "",
              subtitle: "",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View className="flex justify-center w-full h-full">
                  <Text className="pb-10 text-center text-3xl font-semibold uppercase  text-black">
                    Study Plans
                  </Text>

                  <Image
                    style={{
                      width: width * 0.9,
                      height: width,
                    }}
                    source={require("../assets/plans.png")}
                  />
                  <Text className=" text-justify text-lg px-6  text-gray-700">
                    Participate in weekly assessments and access topic-wise
                    study plans to enhance your learning experience.
                  </Text>
                </View>
              ),
              title: "",
              subtitle: "",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View className="flex justify-center w-full h-full">
                  <Text className="pb-10 text-center text-3xl font-semibold uppercase  text-black">
                    Get Started!
                  </Text>

                  <Image
                    style={{
                      width: width * 0.9,
                      height: width,
                    }}
                    source={require("../assets/started.png")}
                  />
                  <Text className=" text-justify text-lg px-6  text-gray-700">
                    Start your journey towards academic excellence now! Tap the
                    button below to begin.
                  </Text>
                </View>
              ),
              title: "",
              subtitle: "",
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const onBordingData = [
  {
    title: "Welcome to Study Tracker",
    description:
      "Track your academic progress, identify weaknesses, and improve your study habits with Study Tracker.",
    image: "welcome_image.png",
  },
  {
    title: "Create Your Profile",
    description:
      "Let's get started by creating your student profile. Enter your name, grade, and subjects you're studying.",
    image: "profile_image.png",
  },
  {
    title: "Track Your Progress",
    description:
      "See your progress in each subject with detailed analytics. Visualize your growth over time.",
    image: "progress_image.png",
  },
  {
    title: "Identify Weaknesses",
    description:
      "Understand your weaknesses and areas needing improvement based on your performance.",
    image: "weakness_image.png",
  },
  {
    title: "Receive Recommendations",
    description:
      "Receive personalized study plans and recommended study materials tailored to your needs.",
    image: "recommendations_image.png",
  },
  {
    title: "Assessments and Study Plans",
    description:
      "Participate in weekly assessments and access topic-wise study plans to enhance your learning experience.",
    image: "assessment_image.png",
  },
  {
    title: "Get Started!",
    description:
      "Start your journey towards academic excellence now! Tap the button below to begin.",
    image: "get_started_image.png",
  },
];

import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const Register = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../assets/app-images/sincerely-media-YbTgPbMTgWk-unsplash.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
        <StatusBar hidden />

        <SafeAreaView className="flex-1 justify-between">
          <View>
            <Text className="text-center rounded-xl mx-3 my-8 font-bold text-2xl text-amber-400 border border-white bg-amber-50">
              Create your new account
            </Text>
          </View>
          <View className=" mx-3 border border-white rounded-xl">
            <View className="justify-center items-center">
              <Text className="text-2xl text-white font-bold">Register</Text>
              <View className="items-start">
                <Text className="font-bold text-white text-xl">First name</Text>
                <TextInput
                  placeholder="Enter your first name"
                  className="border-slate-300 border bg-white px-2 rounded-xl w-60"
                />
              </View>
              <View className="items-start">
                <Text className="font-bold text-white text-xl">Last name</Text>
                <TextInput
                  placeholder="Enter your last name"
                  className="border-slate-300 border bg-white px-2 rounded-xl w-60"
                />
              </View>
              <View className="items-start">
                <Text className="font-bold text-white text-xl">Email</Text>
                <TextInput
                  placeholder="Enter your email"
                  className="border-slate-300 border bg-white px-2 rounded-xl w-60"
                />
              </View>
              <View className="items-start">
                <Text className="font-bold text-white text-xl mr-3">
                  Password
                </Text>
                <TextInput
                  placeholder="Enter your password"
                  className="border-slate-300 px-2 bg-white border rounded-xl w-60"
                />
              </View>
              <View className="items-start">
                <Text className="font-bold text-white text-xl mr-3">
                  Confirm
                </Text>
                <TextInput
                  placeholder="Confirm your password"
                  className="border-slate-300 px-2 bg-white border rounded-xl w-60"
                />
              </View>

              <View className="flex-row items-center gap-3 my-3">
                <Text className="text-white">Already have an account ?</Text>
                <Link href={"/"} asChild>
                  <TouchableOpacity className="bg-amber-400 rounded-xl ">
                    <Text className="font-bold text-white px-4 py-1">
                      Log in
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>
          <Link href={"/"} asChild>
            <TouchableOpacity className="bg-amber-400 h-10 rounded-xl mx-2 my-4 justify-center">
              <Text className="font-bold text-white text-xl text-center">
                Sign up
              </Text>
            </TouchableOpacity>
          </Link>
        </SafeAreaView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Register;

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Login = () => {
  return (
    <ImageBackground
      source={require("../assets/app-images/kevin-mccutcheon-APDMfLHZiRA-unsplash.jpg")}
      resizeMode="cover"
      style={{flex: 1}}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Welcome to the recipes app</Text>
        <View style={styles.formContainer}>
          <Text>Email</Text>
          <TextInput
            inputMode="email"
            placeholder="Enter your email adress"
            style={styles.textInput}
          />
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter your password"
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity>
          <Text>Log in</Text>
        </TouchableOpacity>
        <Text>Don't have an account ?</Text>
        <Link href={"/register"} asChild>
          <Text>Sign up</Text>
        </Link>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    padding: 8,
    marginBottom: 6,
    borderColor: "#777",
    width: 200,
    borderWidth: 1,
  },
  formContainer: {},
});

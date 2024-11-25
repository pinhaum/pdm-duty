import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import ImageButton from "app/components/ImageButton";

// TODO: fix ImageButton width when inside the view
// TODO: router
// TODO: login

export default function Login() {
  const handleLogin = () => {
    console.log("Login Button Pressed", "Autenticando...");
  };

  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.logo}> */}
      <Image source={require("@/assets/logo.jpg")} style={styles.logo} />
      {/* </SafeAreaView> */}
      <View>
        <TextInput placeholder="User" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />
        <ImageButton
          source={require("@/assets/gradient.png")}
          onPress={handleLogin}
          title={"Login"}
        />
      </View>
      <ImageButton
        source={require("@/assets/gradient.png")}
        onPress={handleLogin}
        title={"Login"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
  },
});

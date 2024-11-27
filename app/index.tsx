import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import ImageButton from "@/components/ImageButton";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Fulano" && password === "123") {
      router.push("home");
    } else {
      Alert.alert("Erro", "Usuário ou senha inválidos", [{ text: "OK" }], {
        cancelable: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.jpg")} style={styles.logo} />
      <View>
        <TextInput
          placeholder="User"
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
        {/* <ImageButton
          source={require("@/assets/gradient.png")}
          onPress={handleLogin}
          title={"Login"}
        /> */}
      </View>

      {/* <Button title="Ir para Home" onPress={() => router.push("home")} /> */}
      <ImageButton
        source={require("@/assets/gradient.png")}
        onPress={handleLogin}
        title={"Login"}
        width={200}
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

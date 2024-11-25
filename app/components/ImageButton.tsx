// TODO: Implementação de um componente chamado “ImageButton”,
// usado na tela de login,
// onde o programador possa enviar uma imagem (uri) como prop e ela receba eventos onPress.
// Pesquise sobre Pressable e Touchables.
// Um exemplo de uso deste componente seria: <ImageButton source={imageUri…} onPress={() => handleLogin(...)}/>

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import React from "react";

// TODO: tratar o estilo
// TODO: centralizar o texto do botão

type ImageButtonProps = {
  source: ImageSourcePropType;
  onPress: () => void;
  title: string;
  width?: number;
  height?: number;
};

export default function ImageButton({
  source,
  onPress,
  title,
  width = 100,
  height = 30,
}: ImageButtonProps) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.buttonContainer}>
        <ImageBackground
          source={source}
          style={[styles.image, { width, height }]}
        >
          <Text>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
});

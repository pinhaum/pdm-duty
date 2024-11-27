import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ title: "HOME" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
      </Stack>
    </ActionSheetProvider>
  );
}

import React from "react";
import { Stack } from "expo-router";

type HeaderWithTitleProps = {
  title?: string;
  headerRight?: () => React.ReactNode;
};

export default function HeaderWithTitle({
  title = "PDM-Duty",
  headerRight,
}: HeaderWithTitleProps) {
  return <Stack.Screen options={{ title, headerRight }} />;
}

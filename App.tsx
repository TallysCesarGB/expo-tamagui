import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { TamaguiProvider, YStack } from "tamagui";
import config from "./tamagui.config";
import ItemList from "./src/components/ItemList";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <YStack bg="background" f={1} p="$4" pt="$10">
        <ItemList />
      </YStack>
    </TamaguiProvider>
  );
}

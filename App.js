import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import View from "react-native-ui-lib/view";
import Text from "react-native-ui-lib/text";
import {
  KeyboardTrackingView,
  KeyboardAwareInsetsView,
  KeyboardRegistry,
  KeyboardAccessoryView,
  KeyboardUtils,
} from "react-native-ui-lib/keyboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

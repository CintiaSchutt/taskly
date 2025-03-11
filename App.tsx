import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

/*
  view is same as div
  all text must be surround by a text tag
  all styling in React Native is using flexbox, it's similar to the web, but some defaults are different
*/

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "pink",
          paddingHorizontal: 8,
          paddingVertical: 16,
        }}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";

export default function MyRecipesScreen() {
  return (
    <View style={styles.container}>
      <Text>reciepe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A7C8F1",
  },
});

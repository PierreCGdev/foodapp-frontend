import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import { recipes } from "../data/recipes";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RecipeCard from "../components/RecipeCard";

export default function RecipeScreen() {
  const recipesList = recipes.map((item, i) => {
    return <RecipeCard key={item.id} item={item} />;
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: 40,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                color: "#655074",
                fontSize: 24,
                fontWeight: 700,
                fontFamily: Platform.select({
                  ios: "Georgia",
                  android: "serif",
                }),
              }}
            >
              What do you want to eat today ?
            </Text>
            <Text style={{ color: "#999191", fontSize: 17, fontWeight: 500 }}>
              Our daily healthy meal plans
            </Text>
          </View>
        </View>
        <View style={styles.recipeContainter}>{recipesList}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
  },
  recipeContainter: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
});

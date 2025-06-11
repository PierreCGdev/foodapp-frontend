import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { getRecipeById } from "../constants/Urls";
import { useIsFocused } from "@react-navigation/native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type RecipeRouteProp = RouteProp<RootStackParamList, "Recipe">;

export default function RecipesScreen() {
  type Ingredient = {
    name: string;
    amount: string;
  };
  type Recipe = {
    id: string;
    name: string;
    category: string;
    area: string;
    instructions: string;
    image: string;
    tags: string[];
    youtube: string;
    ingredients: Ingredient[];
  };

  const route = useRoute<RecipeRouteProp>();
  const { mealId, color = "white" } = route.params;
  const [data, setData] = useState<Recipe | null>(null);
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused &&
      getRecipeById(mealId).then((res) => {
        setData(res.recipe);
      });
  }, [isFocused]);
  if (data) {
    return (
      <View style={{ ...styles.container }}>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: color,
              borderBottomLeftRadius: 120,
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                marginTop: 30,
                width: 180,
                height: 180,
                resizeMode: "contain",

                borderRadius: 30,
              }}
              source={{ uri: data.image }}
            />
          </View>
        </View>
        <View style={{ backgroundColor: color, width: "100%", flex: 2 }}>
          <View
            style={{
              backgroundColor: "white",
              borderTopRightRadius: 120,
              height: "100%",
              padding: 40,
            }}
          >
            <ScrollView>
              <Text
                style={{
                  color: "black",
                  fontSize: 24,
                  fontWeight: 700,
                  fontFamily: Platform.select({
                    ios: "Georgia",
                    android: "serif",
                  }),
                }}
              >
                {data.name}
              </Text>
              <Text style={{ color: "#999191", fontSize: 17, fontWeight: 500 }}>
                {data.instructions}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  } else {
  }
  return (
    <View style={{ ...styles.container }}>
      <Text>Recipe not found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

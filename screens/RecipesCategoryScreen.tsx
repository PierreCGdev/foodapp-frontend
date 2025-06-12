import React from "react";
import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";
import { getRecipesByCategoryName } from "../constants/Urls";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import nameToColor from "../utils/nameToColor";

type CategoryRouteProp = RouteProp<RootStackParamList, "Category">;
type Category = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export default function RecipesCategoryScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<CategoryRouteProp>();
  const { categoryName } = route.params;
  const [data, setData] = useState<Category[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused &&
      getRecipesByCategoryName(categoryName).then((res) => {
        setData(res.recipes);
      });
  }, [isFocused]);

  const handleOnPress = (id: string, name: string) => {
    navigation.navigate("Recipe", {
      mealId: id,
      color: nameToColor(name),
    });
  };

  const renderCategories = ({ item }: any) => {
    return (
      <CategoryCard
        item={item}
        onPress={() => handleOnPress(item.idMeal, item.strMeal)}
      />
    );
  };

  return (
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
            Discover {categoryName} recipes
          </Text>
          <Text style={{ color: "#999191", fontSize: 17, fontWeight: 500 }}>
            Browse the best meals in this category
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderCategories}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        style={{ flex: 1 }}
        contentContainerStyle={styles.categoryContainter}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              color: "#655074",
            }}
          >
            no recipes found.
          </Text>
        }
      />
      {/* <View style={styles.recipeContainter}>{recipesList}</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingTop: 50,
    paddingBottom: 5,
  },
  categoryContainter: {
    padding: 10,
    alignContent: "space-between",
  },
  recipeContainter: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
});

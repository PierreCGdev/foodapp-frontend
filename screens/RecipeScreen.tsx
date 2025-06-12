import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useEffect, useState } from "react";
import { getRecipeById } from "../constants/Urls";
import { useIsFocused } from "@react-navigation/native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList, Recipe } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { favorite, unfavorite, FavoritesState } from "../reducers/favorites";
import Ionicons from "react-native-vector-icons/Ionicons";
import formatInstructions from "../utils/formatDescriptions";
type RecipeRouteProp = RouteProp<RootStackParamList, "Recipe">;

export default function RecipesScreen() {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: { favorites: FavoritesState }) => state.favorites.value
  );

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
  const isFavorite = data ? favorites.some((fav) => fav.id === data.id) : false;

  const handlePress = () => {
    if (!data?.id) return;

    if (isFavorite) {
      dispatch(unfavorite(data.id));
    } else {
      dispatch(favorite({ id: data.id }));
    }
  };

  const ingredients = data?.ingredients.map((item, i) => {
    return (
      <View
        key={i}
        style={{
          flexDirection: "row",
          marginVertical: 5,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{item.name}</Text>
        <Text>{item.amount}</Text>
      </View>
    );
  });

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
          <TouchableOpacity
            style={{
              position: "absolute",
              top: -30,
              right: 20,
              borderRadius: 50,
              backgroundColor: "#655074",
              padding: 20,
              zIndex: 10,
            }}
            onPress={handlePress}
          >
            <Ionicons
              name={isFavorite ? "bookmark" : "bookmark-outline"}
              size={20}
              color="#ffffff"
            />
          </TouchableOpacity>
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
                  fontSize: 40,
                  fontWeight: 500,
                  fontFamily: Platform.select({
                    ios: "Georgia",
                    android: "serif",
                  }),
                  marginBottom: 20,
                }}
              >
                {data.name}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  fontWeight: 900,
                  marginVertical: 20,
                }}
              >
                Ingredients :
              </Text>
              {ingredients}
              <TouchableOpacity
                style={{
                  backgroundColor: "#655074",
                  paddingVertical: 15,
                  paddingHorizontal: 40,
                  borderRadius: 30,
                  alignSelf: "center",
                  marginTop: 30,
                }}
                onPress={() => {
                  Linking.openURL(data.youtube);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  Youtube Link
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  fontWeight: 900,
                  marginTop: 20,
                }}
              >
                Instructions :
              </Text>
              <Text
                style={{
                  color: "#999191",
                  fontSize: 17,
                  fontWeight: 500,
                  marginTop: 20,
                }}
              >
                {formatInstructions(data.instructions)}
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

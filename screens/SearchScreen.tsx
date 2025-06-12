import React from "react";
import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";
import { getCategories } from "../constants/Urls";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList, Category } from "../types";

export default function RecipeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = useState<Category[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused &&
      getCategories().then((res) => {
        setData(res.categories);
      });
  }, [isFocused]);

  const handleOnPress = (name: string) => {
    navigation.navigate("Category", {
      categoryName: name,
    });
  };

  const renderCategories = ({ item }: { item: Category }) => {
    return (
      <CategoryCard
        item={item}
        onPress={() => handleOnPress(item.strCategory)}
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
            What do you want to eat today ?
          </Text>
          <Text style={{ color: "#999191", fontSize: 17, fontWeight: 500 }}>
            Our daily healthy meal plans
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderCategories}
        keyExtractor={(item) => item.idCategory}
        numColumns={2}
        style={{ flex: 1 }}
        contentContainerStyle={styles.categoryContainter}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={100}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              color: "#655074",
            }}
          >
            no categories found.
          </Text>
        }
      />
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
    paddingTop: 70,
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

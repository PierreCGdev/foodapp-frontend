import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import truncate from "../utils/truncate";
import nameToColor from "../utils/nameToColor";

type CategoryCardProps = {
  item: any;
  onPress: () => void;
};

export default function RecipeCard({ item, onPress }: CategoryCardProps) {
  const windowWidth = Dimensions.get("window").width;

  const title = item.strMeal || item.strCategory;
  const description = item.strCategoryDescription;
  const image = item.strCategoryThumb || item.strMealThumb;
  const randomColor = nameToColor(title);

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        width: windowWidth / 2 - 15,
        maxHeight: 260,
      }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: randomColor,
          paddingTop: 6,
          paddingRight: 12,
          paddingLeft: 14,
          paddingBottom: 3,
          borderRadius: 30,
          borderBottomLeftRadius: 80,
          borderTopRightRadius: 50,
          alignItems: "flex-end",
          height: "100%",
        }}
      >
        <Image
          style={{
            marginTop: 15,
            marginBottom: 8,
            width: 130,
            height: 130,

            resizeMode: "contain",
            alignSelf: "center",
            borderRadius: 30,
          }}
          source={{ uri: image }}
        />

        <Text
          style={{
            textAlign: "right",
            fontSize: 15,
            color: "#655074",
            fontWeight: "700",
          }}
        >
          {truncate(title, 36)}
        </Text>
        {description && (
          <Text
            style={{
              textAlign: "right",
              fontSize: 10,
              color: "#655074",
            }}
          >
            {truncate(description, 60)}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

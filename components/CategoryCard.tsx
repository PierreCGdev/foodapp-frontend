import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { getContrastingTextColor } from "../utils/InverseColorUtils";
import truncate from "../utils/truncate";
import { recipeColors } from "../data/colors";
import { useMemo } from "react";

type CategoryCardProps = {
  item: any;
  onPress: () => void;
};

export default function RecipeCard({ item, onPress }: CategoryCardProps) {
  const windowWidth = Dimensions.get("window").width;
  const randomColor = useMemo(() => {
    const index = Math.floor(Math.random() * recipeColors.length);
    return recipeColors[index];
  }, []);
  const title = item.strCategory || item.strMeal;
  const description = item.strCategoryDescription;
  const image = item.strCategoryThumb || item.strMealThumb;

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
            color: getContrastingTextColor(randomColor, "#655074"),
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
              color: getContrastingTextColor(randomColor, "#635b5b"),
            }}
          >
            {truncate(description, 60)}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

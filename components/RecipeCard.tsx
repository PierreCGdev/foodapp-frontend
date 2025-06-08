import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { getContrastingTextColor } from "../utils/InverseColorUtils";
import truncate from "../utils/truncate";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export default function RecipeCard({ item }) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const windowWidth = Dimensions.get("window").width;
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        width: windowWidth / 2 - 15,
        maxHeight: 250,
      }}
      onPress={() => navigation.navigate("Recipe")}
    >
      <View
        style={{
          backgroundColor: item.color,
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
            width: "95%",
            maxHeight: 130,
            objectFit: "contain",
            alignSelf: "center",
          }}
          source={item.image}
        />

        <Text
          style={{
            textAlign: "right",
            fontSize: 15,
            color: getContrastingTextColor(item.color, "#655074"),
            fontWeight: "700",
          }}
        >
          {truncate(item.name, 36)}
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontSize: 10,
            color: getContrastingTextColor(item.color, "#635b5b"),
          }}
        >
          {item.desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

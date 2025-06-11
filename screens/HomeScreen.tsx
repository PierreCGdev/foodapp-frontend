import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("DrawerNavigator")}
    >
      <Image
        style={styles.image}
        resizeMethod="auto"
        source={require("../assets/images/home.jpg")}
      />
      <Text style={styles.title}>FoodApp</Text>
      <Text style={styles.text}>Let's go! ➔</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "#655074",
  },
  image: {
    width: "100%",
    height: "75%",
    borderBottomLeftRadius: 170,
  },
  title: {
    fontSize: 70,
    fontWeight: 700,
    color: "white",
    margin: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    color: "white",
    marginRight: 15,
  },
});
